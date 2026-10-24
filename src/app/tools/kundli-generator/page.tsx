import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbSchema } from "@/components/ui/SchemaMarkup";
import { KundliGenerator } from "@/components/tools/KundliGenerator";
import { ASTRO_TOOLS_CONFIG } from "@/config/tools";
import { Compass } from "lucide-react";

export const metadata: Metadata = {
  alternates: { canonical: "https://www.astrosiddi.com/tools/kundli-generator" },
  title: "Vedic Kundli Generator & Chart",
  description:
    "Generate your Vedic Janma Kundali with our free South Indian birth chart generator. Calculate your Lagna and planetary placements accurately online.",
  robots: ASTRO_TOOLS_CONFIG.kundliReleased
    ? { index: true, follow: true }
    : { index: false, follow: true },
  openGraph: {
    title: "Vedic Kundli Generator & Birth Chart | Astro Siddhi",
    description:
      "Generate your Vedic Janma Kundali with our free South Indian birth chart generator. Calculate Lagna and planetary house positions.",
    url: "https://www.astrosiddi.com/tools/kundli-generator",
    siteName: "Astro Siddhi",
    locale: "en_IN",
    type: "website",
    images: [{ url: "https://www.astrosiddi.com/images/blog/best-astrologer-in-visakhapatnam.svg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vedic Kundli Generator & Birth Chart | Astro Siddhi",
    description:
      "Generate your Vedic Janma Kundali with our free South Indian birth chart generator.",
    images: ["https://www.astrosiddi.com/images/blog/best-astrologer-in-visakhapatnam.svg"],
  },
};

const KUNDLI_FAQS = [
  {
    question: "What is a Vedic Kundli generator and what information is required?",
    answer:
      "A Vedic Kundli generator is an astronomical calculation engine that models the exact planetary sky at the precise minute and geographic coordinates of your birth. To generate an accurate horoscope, you need your exact birth date, birth time (hours and minutes), and birth city (latitude and longitude).",
  },
  {
    question: "What is the Lagna (Ascendant) in a birth chart?",
    answer:
      "The Lagna is the specific zodiac sign ascending on the eastern horizon at the moment and location of your birth. It establishes the 1st house of your horoscope, serving as the benchmark from which all other eleven life houses (wealth, siblings, home, children, health, marriage, longevity, fortune, career, gains, and liberation) are mapped.",
  },
  {
    question: "How does the South Indian chart layout differ from North Indian charts?",
    answer:
      "In the South Indian chart format (Dakshin Bhaag), the 12 zodiac signs occupy fixed boxes arranged clockwise from Pisces at the top left to Aquarius at the center left. The Lagna and planetary symbols are placed into these fixed sign boxes. In contrast, North Indian charts place the Lagna in a fixed top-center diamond while the sign numbers rotate.",
  },
  {
    question: "Can an automated Kundli generator substitute for an experienced astrologer?",
    answer:
      "An automated tool provides mathematical planetary coordinates. However, synthesizing complex planetary aspects (Drishti), combustion, retrograde states (Vakra), subtle yogas (like Raja Yogas or Dhana Yogas), and remedies requires the discerning human judgment of an experienced Jyotishi like Sri Raghavendra Siddhanti garu.",
  },
  {
    question: "What are Vimshottari Dasha periods in a Janma Kundali?",
    answer:
      "Vimshottari Dasha is the classical 120-year cycle of planetary ruling periods in Vedic astrology, initiated by your Janma Nakshatra. Each major period (Mahadasha) and sub-period (Antardasha) activates specific houses in your chart, determining the timing of career changes, marriage, financial growth, and spiritual milestones.",
  },
  {
    question: "Why is local geographic coordinate precision important for Kundli generation?",
    answer:
      "Because the Earth rotates 360 degrees every 24 hours, the rising sign (Lagna) changes approximately every two hours. A difference of even 15-20 miles in longitude shifts the Ascendant degree by several arcminutes, potentially altering Navamsha placements and sensitive house cusps.",
  },
];

export default function KundliGeneratorPage() {
  const breadcrumbs = [
    { name: "Home", url: "https://www.astrosiddi.com" },
    { name: "Free Tools", url: "https://www.astrosiddi.com/tools" },
    { name: "Kundli Generator", url: "https://www.astrosiddi.com/tools/kundli-generator" },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://www.astrosiddi.com/tools/kundli-generator/#faq",
    mainEntity: KUNDLI_FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <div className="min-h-screen bg-ivory text-midnight flex flex-col">
      <BreadcrumbSchema items={breadcrumbs} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* HEADER SECTION */}
      <header className="relative pt-24 pb-16 bg-gradient-to-b from-midnight via-deepPurple to-midnight text-ivory border-b border-gold/20 overflow-hidden">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#F5A623_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <nav aria-label="Breadcrumb" className="mb-6 flex justify-center">
            <ol className="flex items-center gap-2 text-xs text-ivory/60">
              <li>
                <Link href="/" className="hover:text-gold transition-colors">Home</Link>
              </li>
              <li>/</li>
              <li>
                <Link href="/tools" className="hover:text-gold transition-colors">Free Tools</Link>
              </li>
              <li>/</li>
              <li className="text-gold font-medium">Kundli Generator</li>
            </ol>
          </nav>

          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-gold/15 text-gold text-xs font-semibold tracking-widest uppercase border border-gold/30 mb-5">
            <Compass className="w-3.5 h-3.5" />
            Vedic Horoscope & South Indian Birth Chart
          </span>

          <h1 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-ivory tracking-tight mb-6 leading-tight">
            Vedic Kundli Generator & South Indian Birth Chart
          </h1>

          {/* 40-60 WORD DIRECT ANSWER */}
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-ivory/85 leading-relaxed font-cormorant font-medium">
            Our free Vedic Kundli generator computes your personalized Janma Kundali (birth horoscope) based on your exact birth time and coordinates. Visualize your Ascendant (Lagna), planetary placements, and house lords in the classical South Indian chart format with complete client-side privacy.
          </p>
        </div>
      </header>

      {/* MAIN CONTENT AREA */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-1 w-full">
        {/* INTERACTIVE CALCULATOR (ABOVE THE FOLD) */}
        <section aria-label="Kundli Generator Tool" className="mb-16">
          <KundliGenerator />
        </section>

        {/* HOW KUNDLI IS CALCULATED (DETAILED ORIGINAL COPY 500+ WORDS) */}
        <article className="prose prose-lg max-w-none text-midnight/80 mb-20 space-y-10">
          <div className="p-8 rounded-3xl bg-white border border-gold/25 shadow-md">
            <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-midnight mb-4">
              The Architecture of a Vedic Janma Kundali
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-midnight/75 mb-4 font-light">
              In Vedic astrology (Jyotish Shastra), a <strong>Janma Kundali</strong> is a celestial snapshot of the nine planets (Navagrahas) and twelve zodiac signs at the precise second and location of your birth. Unlike basic Sun sign or Moon sign readings, your full horoscope maps twelve distinct domains of human existence (Bhavas).
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-midnight/75 mb-6 font-light">
              The entire chart is anchored by your <strong>Lagna (Ascendant)</strong> — the zodiac constellation rising in the eastern sky at your birthplace. Because the Earth completes a full 360-degree rotation every 24 hours, the Lagna advances through a new zodiac sign approximately every 120 minutes. This makes birth time accuracy vital for reliable predictions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
              <div className="p-5 rounded-2xl bg-ivory/80 border border-gold/20">
                <h3 className="font-cinzel text-base font-bold text-midnight mb-2">
                  1. Kendra Houses (1, 4, 7, 10)
                </h3>
                <p className="text-xs text-midnight/75 leading-relaxed">
                  The foundational pillars of life (Vishnu Sthanas). Represent your selfhood, domestic happiness, marriage partnership, and public career achievements.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-ivory/80 border border-gold/20">
                <h3 className="font-cinzel text-base font-bold text-midnight mb-2">
                  2. Trikona Houses (1, 5, 9)
                </h3>
                <p className="text-xs text-midnight/75 leading-relaxed">
                  The auspicious trine houses of divine grace (Lakshmi Sthanas). Represent intellect, past-life purva punya, spiritual wisdom, and dharma.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-ivory/80 border border-gold/20">
                <h3 className="font-cinzel text-base font-bold text-midnight mb-2">
                  3. Dusthana Houses (6, 8, 12)
                </h3>
                <p className="text-xs text-midnight/75 leading-relaxed">
                  Houses of karmic trial and transformation. Represent obstacles, debts, sudden transformations, hidden research, isolation, and spiritual moksha.
                </p>
              </div>
            </div>
          </div>

          {/* THE VALUE OF SOUTH INDIAN KUNDALI MATRIX */}
          <div className="p-8 rounded-3xl bg-white border border-gold/25 shadow-md">
            <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-midnight mb-4">
              Understanding the South Indian Fixed Chart Grid
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-midnight/75 mb-4 font-light">
              Across Andhra Pradesh, Telangana, and South India, astrologers utilize the classical <strong>South Indian chart layout</strong>. The brilliance of this design lies in its fixed sign architecture: Aries is always at row 1, col 2; Taurus at row 1, col 3; Gemini at row 1, col 4; and so on clockwise.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-midnight/75 font-light">
              This unalterable spatial grid allows astrologers to instantly visualize planetary mutual aspects (Drishti), trines (1st, 5th, 9th), quadrants, and Kendras without recalculating sign orientations.
            </p>
          </div>

          {/* PROFESSIONAL SYNTHESIS IN VISAKHAPATNAM */}
          <div className="p-8 rounded-3xl bg-white border border-gold/25 shadow-md">
            <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-midnight mb-4">
              Why In-Person Astrological Synthesis Matters
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-midnight/75 font-light mb-4">
              While computerized horoscope generators provide accurate mathematical coordinates, automated software cannot weigh the nuanced interplay of combust planets, retrograde motions, D-9 Navamsha strength, and individual karmic capacity.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-midnight/75 font-light">
              At <strong>Sri Raghavendra Jyothishalayam</strong> in MVP Colony, Visakhapatnam, <strong>Sri Raghavendra Siddhanti garu</strong> reviews your complete birth chart with 25+ years of lived mastery in Vedic Shastras. Whether resolving marriage matching dilemmas, navigating difficult Rahu-Ketu transits, or planning Vastu alignments, our readings empower you with clarity and authentic Vedic Parihara remedies.
            </p>
          </div>
        </article>

        {/* FAQ ACCORDION SECTION */}
        <section aria-label="Frequently Asked Questions" className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold text-gold uppercase tracking-widest">Helpful Answers</span>
            <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-midnight mt-1">
              Frequently Asked Questions About Vedic Kundli Generation
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {KUNDLI_FAQS.map((faq, i) => (
              <details
                key={i}
                className="group bg-white rounded-2xl border border-gold/25 p-5 open:shadow-md transition-all"
              >
                <summary className="font-cinzel font-bold text-sm sm:text-base text-midnight cursor-pointer list-none flex items-center justify-between gap-4">
                  <span>{faq.question}</span>
                  <span className="text-gold font-bold group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-3 text-xs sm:text-sm text-midnight/75 leading-relaxed border-t border-gold/10 pt-3 font-light">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* RELATED-LINKS BLOCK (2 POSTS, 1 SERVICE, 1 OTHER TOOL) */}
        <section className="mb-20 p-8 rounded-3xl bg-ivory border-2 border-gold/30 shadow-md">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs font-bold text-gold uppercase tracking-widest">Recommended Resources</span>
            <h2 className="font-cinzel text-xl sm:text-2xl font-bold text-midnight mt-1">
              Deepen Your Kundali Knowledge
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
            <Link
              href="/blog/best-astrologer-in-visakhapatnam"
              className="p-5 rounded-2xl bg-white border border-gold/20 hover:border-gold hover:shadow-lg transition-all flex flex-col justify-between group"
            >
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-gold block mb-1">Guide 1</span>
                <h3 className="font-cinzel text-sm font-bold text-midnight group-hover:text-saffron transition-colors mb-2">
                  Best Astrologer in Vizag
                </h3>
                <p className="text-xs text-midnight/70 line-clamp-2">
                  25+ years of Vedic lineage, MVP Colony office details, and client feedback.
                </p>
              </div>
              <span className="text-xs font-semibold text-gold mt-3 inline-flex items-center gap-1">Read Article &rarr;</span>
            </Link>

            <Link
              href="/blog/career-astrology-reading-kundali-for-job-business-timing"
              className="p-5 rounded-2xl bg-white border border-gold/20 hover:border-gold hover:shadow-lg transition-all flex flex-col justify-between group"
            >
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-gold block mb-1">Guide 2</span>
                <h3 className="font-cinzel text-sm font-bold text-midnight group-hover:text-saffron transition-colors mb-2">
                  Kundali for Career & Business
                </h3>
                <p className="text-xs text-midnight/70 line-clamp-2">
                  How 10th house lords and Dasha timing reveal professional promotions.
                </p>
              </div>
              <span className="text-xs font-semibold text-gold mt-3 inline-flex items-center gap-1">Read Article &rarr;</span>
            </Link>

            <Link
              href="/services"
              className="p-5 rounded-2xl bg-white border border-gold/20 hover:border-gold hover:shadow-lg transition-all flex flex-col justify-between group"
            >
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-gold block mb-1">Services</span>
                <h3 className="font-cinzel text-sm font-bold text-midnight group-hover:text-saffron transition-colors mb-2">
                  All Astrological Services
                </h3>
                <p className="text-xs text-midnight/70 line-clamp-2">
                  Horoscope readings, Kundali matching, Vastu Shastra, and Numerology.
                </p>
              </div>
              <span className="text-xs font-semibold text-gold mt-3 inline-flex items-center gap-1">Explore Services &rarr;</span>
            </Link>

            <Link
              href="/tools/moon-sign-calculator"
              className="p-5 rounded-2xl bg-white border border-gold/20 hover:border-gold hover:shadow-lg transition-all flex flex-col justify-between group"
            >
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-gold block mb-1">Related Tool</span>
                <h3 className="font-cinzel text-sm font-bold text-midnight group-hover:text-saffron transition-colors mb-2">
                  Moon Sign Calculator
                </h3>
                <p className="text-xs text-midnight/70 line-clamp-2">
                  Calculate your Vedic Chandra Rashi and Janma Nakshatra with Lahiri Ayanamsa.
                </p>
              </div>
              <span className="text-xs font-semibold text-gold mt-3 inline-flex items-center gap-1">Open Tool &rarr;</span>
            </Link>
          </div>
        </section>

        {/* CONSULTATION BANNER CTA */}
        <section className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-midnight via-deepPurple to-midnight text-ivory border border-gold/40 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center md:text-left max-w-xl">
            <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-ivory">
              Ready for a Comprehensive Janma Kundali Reading?
            </h2>
            <p className="text-sm text-ivory/80 leading-relaxed font-cormorant text-lg">
              Consult <strong>Sri Raghavendra Siddhanti garu</strong> (25+ years experience) at Sri Raghavendra Jyothishalayam in MVP Colony, Visakhapatnam. In-person and remote consultations in Telugu and English.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto shrink-0">
            <a
              href="https://wa.me/919652412221?text=Hi%20Sri%20Raghavendra%20Siddhanti%20garu,%20I%20would%20like%20to%20book%20a%20full%20Janma%20Kundali%20consultation."
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-gold to-saffron text-midnight font-bold text-xs uppercase tracking-widest text-center shadow-lg hover:brightness-105 transition-all"
            >
              Consult On WhatsApp
            </a>
            <Link
              href="/contact"
              className="px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-ivory text-xs font-semibold uppercase tracking-widest text-center border border-white/20 transition-all"
            >
              Visit MVP Colony Office
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
