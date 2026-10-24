# Astro Siddhi Keyword Mapping & Cannibalisation Prevention Plan

This document establishes the official **1-to-1 Keyword-to-URL mapping** for Astro Siddhi (`astrosiddi.com`). Each tracked target keyword is assigned to exactly **one primary URL** to avoid internal competition (keyword cannibalisation), ensure clean crawl signals, and consolidate page authority.

---

## 1. Master Keyword-to-URL Assignment Table

| Target Keyword | Search Volume | Keyword Difficulty (KD) | Intent Type | Primary Target URL | Role & Page Type |
|---|---|---|---|---|---|
| **numerology birth date calculator** | 9,900 | 57 | Calculator / Transactional | `https://www.astrosiddi.com/tools/numerology-calculator` | **Primary Target** (Free Tool Page) |
| **numerology birth date** | 5,400 | 56 | Informational / Calculator | `https://www.astrosiddi.com/tools/numerology-calculator` | Secondary Target |
| **how do i calculate my numerology number** | 590 | 52 | Informational / "How-to" | `https://www.astrosiddi.com/tools/numerology-calculator` | Secondary Target (FAQ / H2 section) |
| **moon sign calculator** | 12,100 | 56 | Calculator / Tool | `https://www.astrosiddi.com/tools/moon-sign-calculator` | **Primary Target** (Free Tool Page, Gated*) |
| **moon chart calculator** | 480 | 43 | Calculator / Visual | `https://www.astrosiddi.com/tools/moon-sign-calculator` | Secondary Target (South Indian chart feature) |
| **how to calculate moon sign** | 320 | 34 | Informational / "How-to" | `https://www.astrosiddi.com/blog/how-to-calculate-your-moon-sign` | **Primary Target** (Educational Guide) |
| **how to know moon sign** | 590 | 50 | Informational | `https://www.astrosiddi.com/blog/how-to-calculate-your-moon-sign` | Secondary Target |
| **telugu jyothisham books** | 480 | 24 | Commercial / Informational | `https://www.astrosiddi.com/blog/telugu-jyothisham-books` | **Primary Target** (Curated Study Guide) |
| **kundli generator** | 4,400 | 33 | Calculator / Software | `https://www.astrosiddi.com/tools/kundli-generator` | **Primary Target** (Phase 3 Tool Page, Gated*) |
| **trikon** | N/A | N/A | Ambiguous / Geometry | *Evaluated & Skipped* | SERP analysis confirms "trikon" queries primarily target geometry ("triangle" in Hindi/Marathi) or regional entertainment rather than Jyotish Trikona houses. Covered organically within Kundli and career astrology guides. |

*\*Note on Gated Tools: `/tools/moon-sign-calculator` and `/tools/kundli-generator` are fully implemented with accurate calculation logic and client-side rendering, but are held under `noindex` and excluded from `sitemap.xml` per the Astro Siddhi Accuracy Gate until 5 verified client charts are confirmed by Sri Raghavendra Siddhanti garu.*

---

## 2. Cannibalisation Prevention Rules

### Rule A: Numerology Tool vs. Career Numerology Guide
- **Target URL 1**: `/tools/numerology-calculator`
  - **Focus**: The mathematical calculator itself. Calculating Mulank (Psychic Number), Bhagyank (Destiny Number), and Western Life Path, detailing the step-by-step arithmetic reduction and ruling planets (Sun to Mars).
  - **Keywords**: `numerology birth date calculator`, `numerology birth date`, `how do i calculate my numerology number`.
- **Target URL 2**: `/blog/numerology-basics-birth-number-career-timing`
  - **Focus**: Strategic career application, timing corporate promotions, job transitions, and business name alignment.
  - **Keywords**: `numerology career`, `mulank career astrology`, `business name numerology vizag`.
  - **Cross-Linking**: The blog post features an interactive callout directing readers to `/tools/numerology-calculator`. The calculator links back to the career timing guide in its "Related Astrology Guides" block.

### Rule B: Moon Sign Calculator vs. Moon Sign Guide
- **Target URL 1**: `/tools/moon-sign-calculator`
  - **Focus**: Interactive calculation tool generating Vedic Chandra Rashi, Nakshatra, Pada, and 4x4 South Indian chart from birth date, time, and timezone.
  - **Keywords**: `moon sign calculator`, `moon chart calculator`.
- **Target URL 2**: `/blog/how-to-calculate-your-moon-sign`
  - **Focus**: In-depth conceptual guide answering "how to" queries. Explaining Chandra Rashi, why Western (Tropical) and Vedic (Sidereal) signs differ by ~24° due to Lahiri Ayanamsa, why lunar velocity requires an ephemeris, and how to utilize the result for Sade Sati.
  - **Keywords**: `how to calculate moon sign`, `how to know moon sign`.
  - **Cross-Linking**: The blog post directs users to `/tools/moon-sign-calculator` to compute their exact sign. The calculator includes a link to the guide under its "How this is calculated" section.

### Rule C: Free Tools Hub (`/tools`)
- Serves as the indexation and discovery directory for all free calculators.
- Added to the primary header navbar and footer as **"Free Tools"**.
- Passes internal PageRank cleanly to each individual calculator.

---

## 3. SERP & Rank Tracker Monitoring Plan
All 10 target keywords will be tracked post-launch at 4-week and 8-week intervals:
- **Date Baseline**: 23 October 2026 (all keywords unranked).
- **Check 1**: 20 November 2026 (4-week post-indexation check).
- **Check 2**: 18 December 2026 (8-week ranking velocity check).
