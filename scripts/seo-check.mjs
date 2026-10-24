import fs from 'node:fs';
import path from 'node:path';

const CANONICAL_BASE = 'https://www.astrosiddi.com';

const ROUTES = [
  { route: '/', file: '.next/server/app/index.html' },
  { route: '/about', file: '.next/server/app/about.html' },
  { route: '/services', file: '.next/server/app/services.html' },
  { route: '/services/kundali-matching', file: '.next/server/app/services/kundali-matching.html' },
  { route: '/services/career-astrology', file: '.next/server/app/services/career-astrology.html' },
  { route: '/services/vastu-visakhapatnam', file: '.next/server/app/services/vastu-visakhapatnam.html' },
  { route: '/contact', file: '.next/server/app/contact.html' },
  { route: '/privacy', file: '.next/server/app/privacy.html' },
  { route: '/terms', file: '.next/server/app/terms.html' },
  { route: '/blog', file: '.next/server/app/blog.html' },
  { route: '/blog/signs-you-need-vastu-correction-at-home', file: '.next/server/app/blog/signs-you-need-vastu-correction-at-home.html' },
  { route: '/blog/how-kundali-matching-really-works-telugu-tradition', file: '.next/server/app/blog/how-kundali-matching-really-works-telugu-tradition.html' },
  { route: '/blog/numerology-basics-birth-number-career-timing', file: '.next/server/app/blog/numerology-basics-birth-number-career-timing.html' },
  { route: '/blog/career-astrology-reading-kundali-for-job-business-timing', file: '.next/server/app/blog/career-astrology-reading-kundali-for-job-business-timing.html' },
  { route: '/blog/manglik-dosha-myths-vs-facts', file: '.next/server/app/blog/manglik-dosha-myths-vs-facts.html' },
  { route: '/blog/vastu-tips-visakhapatnam-apartments', file: '.next/server/app/blog/vastu-tips-visakhapatnam-apartments.html' },
  { route: '/blog/best-astrologer-in-visakhapatnam', file: '.next/server/app/blog/best-astrologer-in-visakhapatnam.html' },
  { route: '/blog/kundali-matching-marriage-telugu-vedic-astrology', file: '.next/server/app/blog/kundali-matching-marriage-telugu-vedic-astrology.html' },
  { route: '/blog/vastu-shastra-guide-homes-flats-visakhapatnam', file: '.next/server/app/blog/vastu-shastra-guide-homes-flats-visakhapatnam.html' },
];

function decodeHtml(html) {
  return html
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>');
}

let totalTests = 0;
let passedTests = 0;
let failedTests = 0;
const errors = [];

function assert(condition, message, context) {
  totalTests++;
  if (condition) {
    passedTests++;
  } else {
    failedTests++;
    const errMsg = `[FAIL] ${context}: ${message}`;
    errors.push(errMsg);
    console.error(`  ❌ ${message}`);
  }
}

console.log('🔍 Starting AstroSiddi Technical SEO Verification Suite...\n');

for (const { route, file } of ROUTES) {
  const filePath = path.resolve(process.cwd(), file);
  console.log(`\n📄 Auditing Route: ${route} (${file})`);

  // 1. File exists & Status 200
  const exists = fs.existsSync(filePath);
  assert(exists, `Pre-rendered static HTML exists (Status 200)`, route);
  if (!exists) continue;

  const html = fs.readFileSync(filePath, 'utf-8');

  // 2. Canonical tag
  const expectedCanonical = `${CANONICAL_BASE}${route === '/' ? '' : route}`;
  const canonicalMatches = [
    ...html.matchAll(/<link[^>]+rel=["']canonical["'][^>]*href=["']([^"']+)["']/gi),
    ...html.matchAll(/<link[^>]+href=["']([^"']+)["'][^>]*rel=["']canonical["']/gi),
  ];
  assert(
    canonicalMatches.length === 1,
    `Exactly one canonical link tag found (found: ${canonicalMatches.length})`,
    route
  );
  if (canonicalMatches.length > 0) {
    const actualCanonical = canonicalMatches[0][1];
    assert(
      actualCanonical === expectedCanonical,
      `Canonical URL is self-referencing absolute www: expected "${expectedCanonical}", got "${actualCanonical}"`,
      route
    );
  }

  // 3. Exactly one H1
  const h1Matches = [...html.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/gi)];
  assert(
    h1Matches.length === 1,
    `Exactly one H1 found on page (found: ${h1Matches.length})`,
    route
  );
  if (h1Matches.length > 0) {
    const h1Text = decodeHtml(h1Matches[0][1].replace(/<[^>]+>/g, '')).trim();
    assert(h1Text.length > 5, `H1 is meaningful and non-empty ("${h1Text.slice(0, 40)}...")`, route);
  }

  // 4. Title tag length <= 60 and no duplicated brand
  const titleMatch = html.match(/<title>([\s\S]*?)<\/title>/i);
  assert(Boolean(titleMatch), `Page title tag exists`, route);
  if (titleMatch) {
    const rawTitle = decodeHtml(titleMatch[1]).trim();
    const isBrandDuplicated =
      rawTitle.includes('Astro Siddhi | Astro Siddhi') ||
      rawTitle.includes('Sri Raghavendra Jyothishalayam - Astro Siddhi | Astro Siddhi');
    assert(!isBrandDuplicated, `Title does NOT have duplicated brand ("${rawTitle}")`, route);
    assert(
      rawTitle.length <= 60,
      `Title length is 60 characters or fewer (length: ${rawTitle.length}, text: "${rawTitle}")`,
      route
    );
  }

  // 5. Meta description 120-155 characters
  const descMatch =
    html.match(/<meta[^>]+name=["']description["'][^>]*content=["']([\s\S]*?)["']/i) ||
    html.match(/<meta[^>]+content=["']([\s\S]*?)["'][^>]*name=["']description["']/i);
  assert(Boolean(descMatch), `Meta description tag exists`, route);
  if (descMatch) {
    const rawDesc = decodeHtml(descMatch[1]).trim();
    const len = rawDesc.length;
    assert(
      len >= 120 && len <= 155,
      `Meta description is between 120 and 155 characters (length: ${len}, text: "${rawDesc}")`,
      route
    );
  }

  // 6. JSON-LD scripts parse validly
  const jsonLdScripts = [
    ...html.matchAll(/<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi),
  ];
  assert(jsonLdScripts.length > 0, `At least one JSON-LD structured data script found (found: ${jsonLdScripts.length})`, route);
  for (let i = 0; i < jsonLdScripts.length; i++) {
    const scriptContent = jsonLdScripts[i][1];
    let parsed = null;
    try {
      parsed = JSON.parse(scriptContent);
      assert(true, `JSON-LD script #${i + 1} parsed validly`, route);
    } catch (e) {
      assert(false, `JSON-LD script #${i + 1} failed JSON parse: ${e.message}`, route);
    }

    // Verify no astrosiddhi typo in @id or url
    if (parsed) {
      const jsonString = JSON.stringify(parsed);
      assert(
        !jsonString.includes('astrosiddhi.com'),
        `JSON-LD #${i + 1} does not contain astrosiddhi.com typo`,
        route
      );
    }
  }

  // 7. No placeholder or broken links
  const hrefMatches = [...html.matchAll(/href=["']([^"']+)["']/gi)].map((m) => m[1]);
  const invalidPlaceholders = hrefMatches.filter(
    (h) => h === '#' || h === 'javascript:void(0)' || h === ''
  );
  assert(
    invalidPlaceholders.length === 0,
    `No placeholder "#" or empty hrefs found (found: ${invalidPlaceholders.length})`,
    route
  );

  const typoHrefs = hrefMatches.filter((h) => h.includes('astrosiddhi.com'));
  assert(
    typoHrefs.length === 0,
    `No links contain "astrosiddhi.com" typo (found: ${typoHrefs.length})`,
    route
  );

  // 8. Main content present in raw HTML (pre-rendered without JS)
  const paragraphs = [...html.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/gi)];
  assert(
    paragraphs.length >= 3,
    `Raw HTML contains pre-rendered paragraphs (found: ${paragraphs.length})`,
    route
  );
}

// Global checks: robots.txt & llms.txt & sitemap.xml
console.log('\n📄 Auditing Core Discovery Endpoints (robots, sitemap, llms.txt)...');

// Sitemap
const sitemapPath = path.resolve(process.cwd(), '.next/server/app/sitemap.xml.body');
if (fs.existsSync(sitemapPath)) {
  const sitemapXml = fs.readFileSync(sitemapPath, 'utf-8');
  assert(!sitemapXml.includes('astrosiddhi.com'), `sitemap.xml has no astrosiddhi.com typos`, 'sitemap.xml');
  assert(sitemapXml.includes('https://www.astrosiddi.com/terms'), `sitemap.xml includes /terms`, 'sitemap.xml');
  assert(sitemapXml.includes('https://www.astrosiddi.com/services/kundali-matching'), `sitemap.xml includes service routes`, 'sitemap.xml');
}

// Robots
const robotsPath = path.resolve(process.cwd(), '.next/server/app/robots.txt.body');
if (fs.existsSync(robotsPath)) {
  const robotsTxt = fs.readFileSync(robotsPath, 'utf-8');
  assert(robotsTxt.includes('https://www.astrosiddi.com/sitemap.xml'), `robots.txt links to www sitemap`, 'robots.txt');
  assert(robotsTxt.includes('GPTBot'), `robots.txt explicitly defines rules for AI bots`, 'robots.txt');
}

// llms.txt
const llmsPath = path.resolve(process.cwd(), 'public/llms.txt');
assert(fs.existsSync(llmsPath), `public/llms.txt exists`, 'llms.txt');

console.log('\n=============================================');
console.log(`📊 Test Summary: Total: ${totalTests} | Passed: ${passedTests} | Failed: ${failedTests}`);
console.log('=============================================');

if (failedTests > 0) {
  console.error('\n❌ SEO Check Failed! Fix the following issues:');
  errors.forEach((err) => console.error(err));
  process.exit(1);
} else {
  console.log('\n✅ All technical SEO assertions passed flawlessly!');
  process.exit(0);
}
