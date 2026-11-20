#!/usr/bin/env node
/**
 * Technical SEO audit. Crawls every URL in the sitemap and checks:
 *   - HTTP 200 and no redirect on the canonical URL itself
 *   - self-referencing <link rel="canonical"> on the expected host
 *   - exactly one <h1>, and no skipped heading levels (H1 > H2 > H3)
 *   - every <img> has alt, width and height
 *   - no mixed content (http:// sub-resources) on the page
 *   - JSON-LD blocks parse; reports which @types each page exposes
 *   - every internal link resolves with 200 (no 404s, no redirect chains)
 *   - robots.txt + sitemap.xml present and consistent; (https targets) HTTP->HTTPS redirect, TLS + HSTS
 *
 * Usage:
 *   npm run build && npm start            # in one terminal
 *   node scripts/seo-audit.mjs            # audits http://localhost:3000
 *   node scripts/seo-audit.mjs https://www.astrosiddi.com   # audits production (adds SSL checks)
 *
 * Exits 1 if any check fails.
 */
const SITE_URL = "https://www.astrosiddi.com"; // keep in sync with src/lib/site.ts
const base = (process.argv[2] || "http://localhost:3000").replace(/\/$/, "");
const isRemoteHttps = base.startsWith("https://");

const failures = [];
const warnings = [];
const fail = (url, msg) => failures.push(`${url}  ->  ${msg}`);
const warn = (url, msg) => warnings.push(`${url}  ->  ${msg}`);

const get = (url, opts = {}) => fetch(url, { redirect: "manual", ...opts });
const toLocal = (u) => u.replace(SITE_URL, base);
const toCanonicalPath = (u) => u.replace(SITE_URL, "") || "/";

// ---------- robots + sitemap ----------
const robotsRes = await get(`${base}/robots.txt`);
if (robotsRes.status !== 200) fail("/robots.txt", `status ${robotsRes.status}`);
else {
  const robots = await robotsRes.text();
  if (!/Sitemap:\s*https?:\/\/\S+\/sitemap\.xml/i.test(robots))
    fail("/robots.txt", "no Sitemap: line");
  if (!robots.includes(SITE_URL))
    fail("/robots.txt", `does not reference ${SITE_URL}`);
}

const smRes = await get(`${base}/sitemap.xml`);
if (smRes.status !== 200) {
  fail("/sitemap.xml", `status ${smRes.status}`);
  report();
}
const sitemapUrls = [
  ...(await smRes.text()).matchAll(/<loc>([^<]+)<\/loc>/g),
].map((m) => m[1]);
if (sitemapUrls.length === 0) fail("/sitemap.xml", "contains no URLs");
for (const u of sitemapUrls)
  if (!u.startsWith(SITE_URL)) fail(u, `sitemap URL is not on ${SITE_URL}`);
console.log(`Sitemap: ${sitemapUrls.length} URLs\n`);

// ---------- per-page checks ----------
const linkStatus = new Map();
async function checkLink(path, from) {
  if (!linkStatus.has(path)) {
    let res;
    try {
      res = await get(base + path);
    } catch {
      res = { status: 0 };
    }
    linkStatus.set(path, res.status);
  }
  const s = linkStatus.get(path);
  if (s >= 300 && s < 400)
    fail(
      from,
      `internal link ${path} is a redirect (${s}) - link to the final URL`,
    );
  else if (s !== 200) fail(from, `internal link ${path} returns ${s}`);
}

const attr = (tag, name) =>
  (tag.match(new RegExp(`\\s${name}\\s*=\\s*("([^"]*)"|'([^']*)')`, "i")) ||
    [])[2] ??
  (tag.match(new RegExp(`\\s${name}\\s*=\\s*'([^']*)'`, "i")) || [])[1];
const hasAttr = (tag, name) =>
  new RegExp(`\\s${name}(\\s*=|\\s|/|>)`, "i").test(tag);

for (const smUrl of sitemapUrls) {
  const path = toCanonicalPath(smUrl);
  const res = await get(toLocal(smUrl));
  if (res.status !== 200) {
    fail(
      path,
      `status ${res.status}${res.headers.get("location") ? ` -> ${res.headers.get("location")}` : ""}`,
    );
    continue;
  }
  const html = await res.text();
  const body = html
    .replace(/<script[\s\S]*?<\/script>/gi, (m) =>
      /application\/ld\+json/.test(m) ? m : "",
    )
    .replace(/<style[\s\S]*?<\/style>/gi, "");

  // canonical
  const canon = (html.match(/<link[^>]+rel="canonical"[^>]*>/i) || [])[0];
  const canonHref = canon && attr(canon, "href");
  if (!canonHref) fail(path, "missing canonical");
  else if (canonHref.replace(/\/$/, "") !== smUrl.replace(/\/$/, ""))
    fail(path, `canonical is ${canonHref}, expected ${smUrl}`);

  // title / description
  if (!/<title>[^<]{10,}<\/title>/i.test(html))
    fail(path, "missing/short <title>");
  if (!/<meta[^>]+name="description"[^>]+content="[^"]{50,}/i.test(html))
    warn(path, "missing/short meta description");

  // headings
  const headings = [...body.matchAll(/<h([1-6])[\s>]/gi)].map((m) =>
    Number(m[1]),
  );
  const h1s = headings.filter((h) => h === 1).length;
  if (h1s !== 1) fail(path, `has ${h1s} <h1> (expected exactly 1)`);
  let prev = 0;
  for (const h of headings) {
    if (prev && h > prev + 1) {
      fail(path, `heading level skips from h${prev} to h${h}`);
      break;
    }
    prev = h;
  }

  // images
  for (const m of body.matchAll(/<img\b[^>]*>/gi)) {
    const tag = m[0];
    const src = attr(tag, "src") || "(no src)";
    if (!hasAttr(tag, "alt"))
      fail(path, `<img> without alt: ${src.slice(0, 80)}`);
    else if (attr(tag, "alt") === "")
      warn(path, `<img> with empty alt (decorative?): ${src.slice(0, 80)}`);
    if (!attr(tag, "width") || !attr(tag, "height"))
      fail(path, `<img> without width/height: ${src.slice(0, 80)}`);
  }

  // mixed content
  for (const m of html.matchAll(
    /\s(?:src|href|action|data-src|poster)=["'](http:\/\/[^"']+)/gi,
  )) {
    if (/localhost|127\.0\.0\.1/.test(m[1]) && !isRemoteHttps) continue;
    fail(path, `insecure http:// reference: ${m[1].slice(0, 100)}`);
  }
  for (const m of html.matchAll(/url\((?:&quot;|["'])?(http:\/\/[^)"'&]+)/gi))
    fail(path, `insecure http:// CSS url(): ${m[1].slice(0, 100)}`);

  // JSON-LD
  const types = [];
  for (const m of html.matchAll(
    /<script type="application\/ld\+json">([\s\S]*?)<\/script>/gi,
  )) {
    try {
      const j = JSON.parse(m[1]);
      types.push([].concat(j["@type"]).join("+"));
    } catch {
      fail(path, "invalid JSON-LD block");
    }
  }

  // internal links (anchors only; skip #, mailto:, tel:, files)
  const links = new Set();
  for (const m of body.matchAll(/<a\b[^>]*>/gi)) {
    const href = attr(m[0], "href");
    if (!href) continue;
    let p = href;
    if (p.startsWith(SITE_URL)) p = p.slice(SITE_URL.length) || "/";
    if (!p.startsWith("/") || p.startsWith("//")) continue;
    p = p.split("#")[0].split("?")[0];
    if (p) links.add(p);
  }
  for (const l of links) await checkLink(l, path);

  console.log(
    `${failures.length ? "  " : "✓ "}${path.padEnd(48)} h1:${h1s} imgs:${[...body.matchAll(/<img\b/gi)].length} links:${links.size} schema:[${[...new Set(types)].join(", ")}]`,
  );
}

// ---------- known-404 probes ----------
for (const p of [
  "/terms",
  "/BlogList",
  "/BlogPost",
  "/horoscope/not-a-rashi",
  "/astrologer-in-atlantis",
]) {
  const s = (await get(base + p)).status;
  const expectRedirect = p === "/BlogList" || p === "/BlogPost";
  if (expectRedirect ? s !== 308 && s !== 301 : s !== 404)
    warn(p, `probe returned ${s}`);
}

// ---------- SSL / HTTPS (remote only) ----------
if (isRemoteHttps) {
  try {
    const r = await get(base + "/");
    const hsts = r.headers.get("strict-transport-security");
    if (!hsts) warn("/", "no Strict-Transport-Security header");
    console.log(
      `\nTLS: connection to ${base} succeeded (certificate valid). HSTS: ${hsts || "missing"}`,
    );
    const insecure = await get(base.replace("https://", "http://") + "/");
    const loc = insecure.headers.get("location") || "";
    if (![301, 308].includes(insecure.status) || !loc.startsWith("https://"))
      fail(
        "http://",
        `HTTP does not permanently redirect to HTTPS (status ${insecure.status}, location ${loc})`,
      );
    else console.log(`HTTP -> HTTPS: ${insecure.status} -> ${loc}`);
    const bare = base.replace("://www.", "://");
    if (bare !== base) {
      const b = await get(bare + "/").catch(() => null);
      const bl = b?.headers.get("location") || "";
      if (!b || ![301, 308].includes(b.status) || !bl.startsWith(base))
        warn(
          bare,
          `non-www does not 301 to ${base} (status ${b?.status}, location ${bl})`,
        );
    }
  } catch (e) {
    fail(base, `TLS/connection error: ${e.message}`);
  }
}

report();

function report() {
  console.log("");
  if (warnings.length)
    console.log(
      `Warnings (${warnings.length}):\n  - ${warnings.join("\n  - ")}\n`,
    );
  if (failures.length) {
    console.log(
      `FAILED - ${failures.length} issue(s):\n  - ${failures.join("\n  - ")}`,
    );
    process.exit(1);
  }
  console.log("PASSED - no technical SEO issues found.");
  process.exit(0);
}
