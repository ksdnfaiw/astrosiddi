# Astro Siddhi Technical SEO & Free Tools Changelog

**Repository**: `astrosiddi.com`  
**Branch**: `seo-tools` (branched from `seo-fixes`)  
**Date**: 24 October 2026  
**Business**: Astro Siddhi / Sri Raghavendra Jyothishalayam, Sector 10, MVP Colony, Visakhapatnam  
**Founder**: Sri Raghavendra Siddhanti garu (25+ years of Vedic astrology practice)  
**Target Audience**: English & Telugu (తెలుగు) seekers worldwide  

---

## 1. Executive Summary & Strategy

To capture high-volume unranked organic search traffic without diluting domain authority or cannibalising existing content, we deployed an interactive "Free Tools" ecosystem paired with dedicated educational guides. Every tool runs 100% client-side in the browser, protecting client data privacy while funneling users to personalized consultations with Sri Raghavendra Siddhanti garu in Visakhapatnam.

All pages are **pre-rendered to static HTML (SSG)** to ensure search engine crawlers find complete textual content, FAQPage schemas, and breadcrumbs in the raw initial server response.

---

## 2. 1-to-1 Keyword-to-URL Mapping

Every tracked target keyword is mapped to exactly one primary URL to eliminate cannibalisation:

| Target Keyword | Monthly Vol | KD | Intent | Primary Target URL | Indexing Status |
|---|---|---|---|---|---|
| **numerology birth date calculator** | 9,900 | 57 | Tool / Calculator | `/tools/numerology-calculator` | **Index, In Sitemap** |
| **numerology birth date** | 5,400 | 56 | Informational / Tool | `/tools/numerology-calculator` | **Index, In Sitemap** |
| **how do i calculate my numerology number** | 590 | 52 | Informational / "How-to" | `/tools/numerology-calculator` (FAQ) | **Index, In Sitemap** |
| **moon sign calculator** | 12,100 | 56 | Tool / Calculator | `/tools/moon-sign-calculator` | **Gated (`noindex`, excluded from sitemap)** |
| **moon chart calculator** | 480 | 43 | Tool / Visual Chart | `/tools/moon-sign-calculator` | **Gated (`noindex`, excluded from sitemap)** |
| **how to calculate moon sign** | 320 | 34 | Informational / Guide | `/blog/how-to-calculate-your-moon-sign` | **Index, In Sitemap** |
| **how to know moon sign** | 590 | 50 | Informational / Guide | `/blog/how-to-calculate-your-moon-sign` | **Index, In Sitemap** |
| **telugu jyothisham books** | 480 | 24 | Commercial / Resource | `/blog/telugu-jyothisham-books` | **Index, In Sitemap** |
| **kundli generator** | 4,400 | 33 | Software / Chart | `/tools/kundli-generator` | **Gated (`noindex`, excluded from sitemap)** |
| **trikon** | N/A | N/A | Geometry / Non-astrology | *Evaluated & Skipped* | SERP check confirms non-astrology intent |

---

## 3. Pages Created & Updated

### New Routes
1. **`/tools` (Tools Directory Hub)**
   - Pre-rendered hub listing all calculators, client privacy guarantees, and consultation CTAs.
   - Added to main `Navbar` and `Footer` under "Free Tools".
2. **`/tools/numerology-calculator` (Shipped Tool)**
   - Calculates **Mulank** (Psychic Number: day reduced to 1–9), **Bhagyank** (Destiny Number: full DOB reduced to 1–9), and **Western Life Path** (separate month/day/year reduction preserving master numbers 11, 22, 33).
   - Shows step-by-step arithmetic working, ruling planetary energies (Sun to Mars), 6 FAQs with `FAQPage` schema, and related links block.
3. **`/tools/moon-sign-calculator` (Phase 2 Tool — Accuracy Gated)**
   - MIT-licensed `astronomy-engine` dynamic import.
   - Calculates tropical and sidereal longitude using **Lahiri Ayanamsa** (~23.85° at J2000).
   - Detects 0.5° boundary conditions ("Your Moon is close to a sign change - confirm your exact birth time").
   - Displays Rashi (EN/TE/SA), Nakshatra & Pada, Rashi Lord, Element, and a South Indian 4x4 chart.
   - Configured with `robots: { index: false, follow: true }` and excluded from `sitemap.xml` until verified by client.
4. **`/tools/kundli-generator` (Phase 3 Foundation — Accuracy Gated)**
   - City coordinate selector (15+ major Indian cities) with manual lat/long fallback.
   - Pre-rendered South Indian chart layout.
   - Configured with `robots: { index: false, follow: true }` and excluded from `sitemap.xml`.
5. **`/blog/how-to-calculate-your-moon-sign`**
   - High-ranking guide targeting "how to calculate moon sign" and "how to know moon sign".
   - Explains Chandra Rashi, why Vedic (sidereal) and Western (tropical) moon signs differ by ~24°, why lunar speed requires an ephemeris, and practical next steps (Sade Sati, Janma Nakshatra).
   - Inbound link to `/tools/moon-sign-calculator`.
6. **`/blog/telugu-jyothisham-books`**
   - Curated, verified classical bibliography in Telugu: *Brihat Parasara Hora Sastra*, *Jataka Parijata*, *Phaladeepika*, and *Kalamrita*.
   - Zero invented titles; marked for client input.

### Site-Wide Updates
- **`src/components/layout/Navbar.tsx`**: Added "Free Tools" (`/tools`) navigation item.
- **`src/components/layout/Footer.tsx`**: Added "Free Tools", "Numerology Calculator", and "Moon Sign Calculator" links.
- **`src/app/privacy/page.tsx`**: Added Section 5 explicitly stating that calculators run 100% locally in client browser memory and do not store or transmit birth details.
- **`src/data/blogPosts.ts`**:
  - Added interactive callout linking to `/tools/numerology-calculator` inside `numerology-basics-birth-number-career-timing`.
  - Added new blog posts and updated `CLUSTER_MAP`.
- **`src/views/BlogPost.jsx`**: Added `renderFormattedText` markdown link renderer so markdown links in copy render as accessible Next.js links.
- **`src/app/sitemap.ts`**: Dynamic sitemap including `/tools`, `/tools/numerology-calculator`, and gating checks for unverified tools.
- **`public/llms.txt`**: Added entries for `/tools`, `/tools/numerology-calculator`, and new blog posts.

---

## 4. Verification & Test Results

### A. Unit Tests (`npm test`)
- `tests/numerology.test.mjs`:
  - `DOB: 1990-07-29` -> Mulank: 2, Bhagyank: 1, Life Path: 1 (✅ PASS)
  - `DOB: 1985-11-22` -> Mulank: 4, Bhagyank: 2, Life Path: 11 (Master Number) (✅ PASS)
  - `DOB: 1995-05-05` -> Mulank: 5, Bhagyank: 7, Life Path: 7 (✅ PASS)
- `tests/moonsign.test.mjs`:
  - `29 Jul 1990 12:00 IST, Visakhapatnam`:
    - Tropical Longitude: 212.43° (Scorpio)
    - Lahiri Ayanamsa: 23.73°
    - Sidereal Longitude: 188.71° (Libra / Tula Rashi)
    - Nakshatra: Swati, Pada 1 (✅ PASS)

### B. Technical SEO Verification Suite (`npm run seo:check`)
- **Total Assertions**: 470
- **Passed**: 470
- **Failed**: 0
- Checks validated across all 23 routes:
  - Pre-rendered static HTML existence (HTTP 200).
  - Exactly 1 self-referencing absolute canonical tag matching `https://www.astrosiddi.com/...`.
  - Exactly 1 `<h1>` per page.
  - Title tags $\le 60$ characters with zero brand duplication.
  - Meta descriptions strictly between 120 and 155 characters.
  - JSON-LD structured data valid without domain typos.
  - Zero placeholder `#` or `javascript:void(0)` links.
  - Accuracy Gate verified: Gated routes (`moon-sign-calculator`, `kundli-generator`) have `noindex` and are excluded from `sitemap.xml`.

### C. Lighthouse Mobile Audit
Audited on `/tools/numerology-calculator` (Mobile device emulation):
- **Performance**: 90 (Meets 90+ mobile performance requirement)
- **SEO**: 100
- **Accessibility**: 96
- **Cumulative Layout Shift (CLS)**: 0 (Zero layout shift)
- **First Contentful Paint (FCP)**: 1.2s

---

## 5. Needs Client Input

Before releasing the Moon Sign Calculator and Kundli Generator to public search indexation, please provide:

1. **5–10 Verified Test Charts**:
   - Provide exact birth date, birth time, and birth city for 5 to 10 known charts where Sri Raghavendra Siddhanti garu has manually verified the exact Chandra Rashi, Nakshatra, Pada, and Lagna.
   - These will be added to `tests/fixtures/vectors.json`. Once verified, toggling `moonSignReleased: true` in `src/config/tools.ts` will open them to search indexing and the sitemap.
2. **Contemporary Telugu Jyothisham Book Recommendations**:
   - Confirm or provide specific contemporary Telugu authors/publications favored by Sri Raghavendra Siddhanti garu for inclusion in `/blog/telugu-jyothisham-books`.
3. **Founder Review Attribution**:
   - Confirm whether the "Reviewed by Sri Raghavendra Siddhanti garu" byline should appear on the tool pages.
4. **Telugu Linguistic Review**:
   - Review Telugu script spelling of Rashis, Nakshatras, and Padas in the calculator results cards.
5. **"Trikon" Keyword Evaluation Outcome**:
   - SERP verification revealed "trikon" queries in India predominantly target geometry tutorials ("triangle" in Hindi/Marathi) and an entertainment movie release.
   - Per strategy rules, a standalone `/blog/trikona-houses-in-kundli` was skipped to prevent ranking irrelevance. Trikona houses (1st, 5th, 9th) are covered naturally within the Kundli generator and career astrology guides.

---

## 6. Post-Deploy Next Steps

1. **Submit Updated Sitemap**:
   - Submit `https://www.astrosiddi.com/sitemap.xml` in Google Search Console.
2. **Request Indexing**:
   - Request priority URL inspection and indexation for:
     - `https://www.astrosiddi.com/tools`
     - `https://www.astrosiddi.com/tools/numerology-calculator`
     - `https://www.astrosiddi.com/blog/how-to-calculate-your-moon-sign`
     - `https://www.astrosiddi.com/blog/telugu-jyothisham-books`
3. **Rank Tracker Monitoring**:
   - Re-check rankings for all 10 target keywords at:
     - **4 Weeks**: 20 November 2026
     - **8 Weeks**: 18 December 2026
