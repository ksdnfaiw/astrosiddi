import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbSchema } from "@/components/ui/SchemaMarkup";
import { MoonSignCalculator } from "@/components/tools/MoonSignCalculator";
import { ASTRO_TOOLS_CONFIG } from "@/config/tools";
import { Moon } from "lucide-react";

export const metadata: Metadata = {
  alternates: { canonical: "https://www.astrosiddi.com/tools/moon-sign-calculator" },
  title: "Moon Sign Calculator & Chandra Chart",
  description:
    "Calculate your Vedic Chandra Rashi and Janma Nakshatra with our free Moon sign calculator using high-precision ephemeris and Lahiri Ayanamsa. Try now.",
  robots: ASTRO_TOOLS_CONFIG.moonSignReleased
    ? { index: true, follow: true }
    : { index: false, follow: true },
  openGraph: {
    title: "Moon Sign Calculator & Chandra Kundali | Astro Siddhi",
    description:
      "Calculate your Vedic Chandra Rashi and Janma Nakshatra with our free Moon sign calculator using high-precision ephemeris and Lahiri Ayanamsa.",
    url: "https://www.astrosiddi.com/tools/moon-sign-calculator",
    siteName: "Astro Siddhi",
    locale: "en_IN",
    type: "website",
    images: [{ url: "https://www.astrosiddi.com/images/blog/best-astrologer-in-visakhapatnam.svg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Moon Sign Calculator & Chandra Kundali | Astro Siddhi",
    description:
      "Calculate your Vedic Chandra Rashi and Janma Nakshatra with our free Moon sign calculator.",
    images: ["https://www.astrosiddi.com/images/blog/best-astrologer-in-visakhapatnam.svg"],
  },
};

const MOON_SIGN_FAQS = [
  {
    question: "What is a Moon sign calculator and what does it calculate?",
    answer:
      "A Moon sign calculator determines the exact zodiac constellation (Rashi) and lunar mansion (Nakshatra) occupied by the Moon at your exact birth time. Because the Moon moves rapidly through the zodiac (traveling ~13.2 degrees per day and changing signs every 2.25 days), an astronomical ephemeris is required for accurate calculations.",
  },
  {
    question: "Why is my Vedic Moon sign different from my Western Moon sign?",
    answer:
      "Western astrology uses the Tropical zodiac, which fixes 0° Aries to the vernal equinox. Vedic astrology uses the Sidereal zodiac, which measures planetary positions against observable fixed stars. Due to the astronomical precession of equinoxes, the Sidereal zodiac sits approximately 24 degrees behind the Tropical zodiac (known as the Lahiri Ayanamsa). As a result, your Vedic Moon sign is often one sign earlier than your Western sign.",
  },
  {
    question: "What is a Moon chart calculator (Chandra Kundali)?",
    answer:
      "A Moon chart calculator (Chandra Kundali) rearranges your birth horoscope so that your Janma Rashi (the sign where the Moon resides) becomes the 1st house. In traditional South Indian astrology, the Chandra chart provides deep insights into emotional temperament, psychological resilience, and planetary transit impacts (Gochara).",
  },
  {
    question: "Why is the Moon sign so crucial in Telugu marriage matching?",
    answer:
      "In Telugu Vedic tradition, Jathaka Porutham (horoscope matching) is rooted in the Ashtakoota / 36-point Guna Milan system, which is derived directly from the bride and groom's Moon signs and Janma Nakshatras. It assesses mental harmony, family longevity, emotional empathy, and Nadi Dosha compatibility.",
  },
  {
    question: "How does the Moon sign determine Sade Sati?",
    answer:
      "Sade Sati is the 7.5-year transit of Saturn (Shani) over your natal Moon. It begins when Saturn enters the 12th house from your Moon sign, peaks while transiting directly through your Moon sign, and concludes as it exits the 2nd house from your Moon sign.",
  },
  {
    question: "What should I do if my Moon sign sits close to a sign boundary?",
    answer:
      "If your Moon is within 0.5 degrees (30 arcminutes) of 0° or 30° of a sign (known as Rashi Sandhi), even a 10-15 minute discrepancy in recorded birth time can shift your Moon sign. In such cases, we recommend consulting Sri Raghavendra Siddhanti garu for birth time rectification.",
  },
];

export default function MoonSignCalculatorPage() {
  const breadcrumbs = [
    { name: "Home", url: "https://www.astrosiddi.com" },
    { name: "Free Tools", url: "https://www.astrosiddi.com/tools" },
    { name: "Moon Sign Calculator", url: "https://www.astrosiddi.com/tools/moon-sign-calculator" },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://www.astrosiddi.com/tools/moon-sign-calculator/#faq",
    mainEntity: MOON_SIGN_FAQS.map((faq) => ({
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
              <li className="text-gold font-medium">Moon Sign Calculator</li>
            </ol>
          </nav>

          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-gold/15 text-gold text-xs font-semibold tracking-widest uppercase border border-gold/30 mb-5">
            <Moon className="w-3.5 h-3.5" />
            Vedic Chandra Rashi & Nakshatra Engine
          </span>

          <h1 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-ivory tracking-tight mb-6 leading-tight">
            Moon Sign Calculator & Vedic Chandra Kundali
          </h1>

          {/* 40-60 WORD DIRECT ANSWER */}
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-ivory/85 leading-relaxed font-cormorant font-medium">
            Our free Moon sign calculator computes your precise Vedic Chandra Rashi and Janma Nakshatra using astronomical ephemeris coordinates and Lahiri Ayanamsa. Discover your lunar sign in Telugu and English, determine your Nakshatra Pada, and visualize your Moon&apos;s placement in a traditional South Indian birth chart.
          </p>
        </div>
      </header>

      {/* MAIN CONTENT AREA */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-1 w-full">
        {/* INTERACTIVE CALCULATOR (ABOVE THE FOLD) */}
        <section aria-label="Moon Sign Calculator Tool" className="mb-16">
          <MoonSignCalculator />
        </section>

        {/* HOW MOON SIGN IS CALCULATED (DETAILED ORIGINAL COPY 500+ WORDS) */}
        <article className="prose prose-lg max-w-none text-midnight/80 mb-20 space-y-10">
          <div className="p-8 rounded-3xl bg-white border border-gold/25 shadow-md">
            <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-midnight mb-4">
              Understanding Your Moon Sign (Chandra Rashi) in Vedic Astrology
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-midnight/75 mb-4 font-light">
              While modern Western astrology popularized the Sun sign (which stays constant for 30 days), classical Indian Vedic Jyotish assigns supreme importance to your <strong>Moon Sign (Chandra Rashi)</strong>. In the Rigveda and Brihat Parashara Hora Shastra, the Moon represents the human mind (<span lang="sa">చంద్రమా మనసో జాతః</span> — <em>Chandrama Manaso Jatah</em>), governing emotional wellbeing, subconscious impulses, mental resilience, and the mother&apos;s influence.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-midnight/75 mb-6 font-light">
              Because the Moon completes an entire cycle of all 12 zodiac signs in just 27.3 days, it spends merely <strong>2.25 days in each sign</strong> and traverses roughly <strong>13 degrees and 20 minutes every 24 hours</strong>. This rapid speed makes an astronomical ephemeris and exact birth time necessary to pinpoint your true lunar sign.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div className="p-5 rounded-2xl bg-ivory/80 border border-gold/20">
                <h3 className="font-cinzel text-lg font-bold text-midnight mb-2">
                  Vedic Sidereal (Nirayana) System
                </h3>
                <p className="text-xs sm:text-sm text-midnight/80 leading-relaxed mb-3">
                  Aligns directly with physical, observable constellations in the night sky. Corrects for the Earth&apos;s axial wobble using the <strong>Lahiri (Chitra Paksha) Ayanamsa</strong> (~23.85° at J2000, advancing ~50.29&quot; annually).
                </p>
                <div className="text-xs font-semibold text-gold">Standard across Andhra Pradesh, Telangana & India</div>
              </div>

              <div className="p-5 rounded-2xl bg-ivory/80 border border-gold/20">
                <h3 className="font-cinzel text-lg font-bold text-midnight mb-2">
                  Western Tropical (Sayana) System
                </h3>
                <p className="text-xs sm:text-sm text-midnight/80 leading-relaxed mb-3">
                  Anchors the zodiac to seasonal equinoxes, fixing 0° Aries to the first day of northern spring regardless of stellar shifts. Over centuries, this causes a shift of nearly one full zodiac sign (~24°).
                </p>
                <div className="text-xs font-semibold text-midnight/60">Standard in Western popular astrology</div>
              </div>
            </div>
          </div>

          {/* NAKSHATRAS AND PADAS EXPLAINED */}
          <div className="p-8 rounded-3xl bg-white border border-gold/25 shadow-md">
            <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-midnight mb-4">
              Janma Nakshatra and Padas (The 27 Lunar Mansions)
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-midnight/75 mb-4 font-light">
              Beyond the 12 primary signs, the 360-degree zodiac is divided into 27 equal segments of 13° 20&apos; called <strong>Nakshatras (Birth Stars)</strong>. Your Janma Nakshatra is the specific lunar mansion the Moon was traversing at the moment you took your first breath.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-midnight/75 mb-6 font-light">
              Each Nakshatra is further subdivided into <strong>4 Padas (Quarters)</strong> of 3 degrees and 20 minutes each (corresponding to Navamsha harmonic charts). Knowing your exact Pada is vital for:
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-midnight/80 list-none p-0">
              <li className="p-4 rounded-xl bg-ivory border border-gold/15">
                <strong className="block text-midnight font-bold mb-1">1. Nama Nakshatra (Naming Syllables)</strong>
                Assigning traditional auspicious starting syllables (like Chu, Che, Cho, La) for newborn baby naming ceremonies in Telugu tradition.
              </li>
              <li className="p-4 rounded-xl bg-ivory border border-gold/15">
                <strong className="block text-midnight font-bold mb-1">2. Vimshottari Dasha Balance</strong>
                Determining which planetary major period (Dasha) and sub-period (Bhukti) you were born into, and the exact years remaining.
              </li>
              <li className="p-4 rounded-xl bg-ivory border border-gold/15">
                <strong className="block text-midnight font-bold mb-1">3. Jathaka Porutham (Marriage Matching)</strong>
                Checking Dinakuta, Ganakuta, Rajjukuta, and Nadi compatibility between bride and groom to protect marital harmony.
              </li>
              <li className="p-4 rounded-xl bg-ivory border border-gold/15">
                <strong className="block text-midnight font-bold mb-1">4. Transit Impacts (Gochara Phalam)</strong>
                Evaluating daily and monthly panchangam transits, Guru Peyarchi (Jupiter transits), and Rahu-Ketu nodal shifts.
              </li>
            </ul>
          </div>

          {/* SOUTH INDIAN CHART INTERPRETATION */}
          <div className="p-8 rounded-3xl bg-white border border-gold/25 shadow-md">
            <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-midnight mb-4">
              How to Read the South Indian Style Chandra Chart
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-midnight/75 font-light mb-4">
              Unlike North Indian diamond-style horoscopes where the Ascendant (Lagna) is placed at the top center, the traditional South Indian format used across Andhra Pradesh, Telangana, Karnataka, and Tamil Nadu employs a <strong>fixed 4x4 perimeter grid</strong>.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-midnight/75 font-light">
              In this grid, the 12 signs occupy unalterable positions starting clockwise from Pisces (Meenam) at the top-left corner, Aries (Mesham) at top-center, and culminating at Aquarius (Kumbham). When our calculator places the Moon in your respective box, that box represents your lunar foundation (Chandra Lagna).
            </p>
          </div>
        </article>

        {/* FAQ ACCORDION SECTION */}
        <section aria-label="Frequently Asked Questions" className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold text-gold uppercase tracking-widest">In-Depth Guidance</span>
            <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-midnight mt-1">
              Frequently Asked Questions About Moon Sign Calculations
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {MOON_SIGN_FAQS.map((faq, i) => (
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
              Explore More Astrological Guides
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
            <Link
              href="/blog/how-to-calculate-your-moon-sign"
              className="p-5 rounded-2xl bg-white border border-gold/20 hover:border-gold hover:shadow-lg transition-all flex flex-col justify-between group"
            >
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-gold block mb-1">Guide 1</span>
                <h3 className="font-cinzel text-sm font-bold text-midnight group-hover:text-saffron transition-colors mb-2">
                  How to Calculate Moon Sign
                </h3>
                <p className="text-xs text-midnight/70 line-clamp-2">
                  Detailed breakdown of Chandra Rashi, Lahiri ayanamsa, and ephemeris mechanics.
                </p>
              </div>
              <span className="text-xs font-semibold text-gold mt-3 inline-flex items-center gap-1">Read Article &rarr;</span>
            </Link>

            <Link
              href="/blog/kundali-matching-marriage-telugu-vedic-astrology"
              className="p-5 rounded-2xl bg-white border border-gold/20 hover:border-gold hover:shadow-lg transition-all flex flex-col justify-between group"
            >
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-gold block mb-1">Guide 2</span>
                <h3 className="font-cinzel text-sm font-bold text-midnight group-hover:text-saffron transition-colors mb-2">
                  Kundali Matching in Telugu
                </h3>
                <p className="text-xs text-midnight/70 line-clamp-2">
                  Why Moon signs and Janma Nakshatras form the bedrock of 36-guna marriage matching.
                </p>
              </div>
              <span className="text-xs font-semibold text-gold mt-3 inline-flex items-center gap-1">Read Article &rarr;</span>
            </Link>

            <Link
              href="/services/kundali-matching"
              className="p-5 rounded-2xl bg-white border border-gold/20 hover:border-gold hover:shadow-lg transition-all flex flex-col justify-between group"
            >
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-gold block mb-1">Service</span>
                <h3 className="font-cinzel text-sm font-bold text-midnight group-hover:text-saffron transition-colors mb-2">
                  Kundali Matching Consultation
                </h3>
                <p className="text-xs text-midnight/70 line-clamp-2">
                  In-person marriage matching at MVP Colony, Visakhapatnam or online via WhatsApp.
                </p>
              </div>
              <span className="text-xs font-semibold text-gold mt-3 inline-flex items-center gap-1">Explore Service &rarr;</span>
            </Link>

            <Link
              href="/tools/numerology-calculator"
              className="p-5 rounded-2xl bg-white border border-gold/20 hover:border-gold hover:shadow-lg transition-all flex flex-col justify-between group"
            >
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-gold block mb-1">Related Tool</span>
                <h3 className="font-cinzel text-sm font-bold text-midnight group-hover:text-saffron transition-colors mb-2">
                  Numerology Calculator
                </h3>
                <p className="text-xs text-midnight/70 line-clamp-2">
                  Calculate Mulank, Bhagyank, and Western Life Path with step-by-step arithmetic.
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
              Discover How Your Moon Sign Shapes Your Destiny
            </h2>
            <p className="text-sm text-ivory/80 leading-relaxed font-cormorant text-lg">
              Consult <strong>Sri Raghavendra Siddhanti garu</strong> (25+ years experience) at Sri Raghavendra Jyothishalayam, Sector 10, MVP Colony, Visakhapatnam. Professional horoscope reading, Sade Sati parihara, and marriage matching in Telugu & English.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto shrink-0">
            <a
              href="https://wa.me/919652412221?text=Hi%20Sri%20Raghavendra%20Siddhanti%20garu,%20I%20used%20your%20Moon%20sign%20calculator%20and%20would%20like%20a%20personal%20reading."
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
              Book In-Person
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
