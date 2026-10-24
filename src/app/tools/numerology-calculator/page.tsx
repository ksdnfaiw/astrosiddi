import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbSchema } from "@/components/ui/SchemaMarkup";
import { NumerologyCalculator } from "@/components/tools/NumerologyCalculator";
import { Hash } from "lucide-react";

export const metadata: Metadata = {
  alternates: { canonical: "https://www.astrosiddi.com/tools/numerology-calculator" },
  title: "Numerology Birth Date Calculator",
  description:
    "Calculate your Mulank, Bhagyank, and Western Life Path with our free numerology birth date calculator. Discover your ruling planet and career strengths.",
  openGraph: {
    title: "Numerology Birth Date Calculator | Astro Siddhi",
    description:
      "Calculate your Mulank, Bhagyank, and Western Life Path with our free numerology birth date calculator. Discover ruling planets and career timing.",
    url: "https://www.astrosiddi.com/tools/numerology-calculator",
    siteName: "Astro Siddhi",
    locale: "en_IN",
    type: "website",
    images: [{ url: "https://www.astrosiddi.com/images/blog/best-astrologer-in-visakhapatnam.svg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Numerology Birth Date Calculator | Astro Siddhi",
    description:
      "Calculate your Mulank, Bhagyank, and Western Life Path with our free numerology birth date calculator.",
    images: ["https://www.astrosiddi.com/images/blog/best-astrologer-in-visakhapatnam.svg"],
  },
};

const NUMEROLOGY_FAQS = [
  {
    question: "How do I calculate my numerology number from my birth date?",
    answer:
      "To calculate your Mulank (Psychic Number), take your birth day and add its digits until you get a single number between 1 and 9 (e.g., 29 becomes 2 + 9 = 11, then 1 + 1 = 2). To calculate your Bhagyank (Destiny Number), sum every digit of your full date of birth (day, month, and year) and reduce it to a single digit.",
  },
  {
    question: "What is the difference between Mulank and Bhagyank in Vedic numerology?",
    answer:
      "Mulank (Psychic or Driver Number) is derived purely from your day of birth and governs your conscious personality, innate temperament, personal tastes, and daily behavior up to age 32-35. Bhagyank (Destiny or Conductor Number) is calculated from your entire date of birth and governs your karmic life mission, major life shifts, and career achievements in mature adulthood.",
  },
  {
    question: "What are Master Numbers in Life Path calculations?",
    answer:
      "In Western Pythagorean numerology, the numbers 11, 22, and 33 are termed Master Numbers. When reducing the month, day, and year components, if their combined sum equals 11, 22, or 33, it is not reduced down to a single digit because it carries higher spiritual, visionary, and transformative potential.",
  },
  {
    question: "Can numerology predict accurate career timing on its own?",
    answer:
      "Numerology reveals core vibrational tendencies, harmonious professions, and universal year cycles. However, for precise job promotions, foreign travel, or business launch dates, Sri Raghavendra Siddhanti garu recommends synthesizing your birth numbers with your Janma Kundali Vimshottari Dasha periods.",
  },
  {
    question: "Which numbers are compatible for marriage and business partnerships?",
    answer:
      "Number compatibility is determined by ruling planetary friendships. For instance, Number 1 (Sun) harmonizes naturally with Numbers 2, 3, and 9. Conversely, conflicting planetary pairs (like Sun and Saturn, Numbers 1 and 8) often face friction unless balanced by harmonizing planetary positions in both natal horoscopes.",
  },
  {
    question: "Is this online numerology birth date calculator accurate and private?",
    answer:
      "Yes, our calculator uses rigorous mathematical algorithms adhering to classical Cheiro and Vedic Sankhya Shastra principles. The tool operates 100% locally in your web browser, ensuring zero transmission or storage of your personal birth date.",
  },
];

export default function NumerologyCalculatorPage() {
  const breadcrumbs = [
    { name: "Home", url: "https://www.astrosiddi.com" },
    { name: "Free Tools", url: "https://www.astrosiddi.com/tools" },
    { name: "Numerology Calculator", url: "https://www.astrosiddi.com/tools/numerology-calculator" },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://www.astrosiddi.com/tools/numerology-calculator/#faq",
    mainEntity: NUMEROLOGY_FAQS.map((faq) => ({
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
              <li className="text-gold font-medium">Numerology Calculator</li>
            </ol>
          </nav>

          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-gold/15 text-gold text-xs font-semibold tracking-widest uppercase border border-gold/30 mb-5">
            <Hash className="w-3.5 h-3.5" />
            Vedic Sankhya Shastra & Western Life Path
          </span>

          <h1 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-ivory tracking-tight mb-6 leading-tight">
            Numerology Birth Date Calculator (Mulank & Bhagyank)
          </h1>

          {/* 40-60 WORD DIRECT ANSWER */}
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-ivory/85 leading-relaxed font-cormorant font-medium">
            Our free numerology birth date calculator computes your Vedic Mulank (Psychic Number), Bhagyank (Destiny Number), and Western Life Path with transparent step-by-step math. Discover your ruling planetary deity, lucky colors, compatible numbers, and career strengths without transmitting or storing personal birth data.
          </p>
        </div>
      </header>

      {/* MAIN CONTENT AREA */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-1 w-full">
        {/* INTERACTIVE CALCULATOR (ABOVE THE FOLD) */}
        <section aria-label="Numerology Calculator Tool" className="mb-16">
          <NumerologyCalculator />
        </section>

        {/* HOW THIS IS CALCULATED (DETAILED ORIGINAL COPY 500+ WORDS) */}
        <article className="prose prose-lg max-w-none text-midnight/80 mb-20 space-y-10">
          <div className="p-8 rounded-3xl bg-white border border-gold/25 shadow-md">
            <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-midnight mb-4">
              How to Calculate Your Numerology Numbers Step by Step
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-midnight/75 mb-6 font-light">
              In Indian Vedic astrology, numerology is known as <strong>Sankhya Shastra</strong>. Unlike Western systems that focus solely on the Life Path number, classical Vedic numerology examines two complementary vibrational forces: your <strong>Mulank</strong> (day of birth) and your <strong>Bhagyank</strong> (full birth date sum).
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div className="p-5 rounded-2xl bg-ivory/80 border border-gold/20">
                <h3 className="font-cinzel text-lg font-bold text-midnight mb-2">
                  1. Calculating Mulank (Psychic Number)
                </h3>
                <p className="text-xs sm:text-sm text-midnight/80 leading-relaxed mb-3">
                  Your Mulank represents who you are at your core — your instinctive mental disposition, personal preferences, and spontaneous reactions.
                </p>
                <div className="p-3 rounded-xl bg-white border border-gold/15 font-mono text-xs text-midnight/90">
                  <strong>Example:</strong> Born on the 29th of any month.<br />
                  2 + 9 = 11 ➔ 1 + 1 = <strong>2 (Ruled by Moon / Chandra)</strong>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-ivory/80 border border-gold/20">
                <h3 className="font-cinzel text-lg font-bold text-midnight mb-2">
                  2. Calculating Bhagyank (Destiny Number)
                </h3>
                <p className="text-xs sm:text-sm text-midnight/80 leading-relaxed mb-3">
                  Your Bhagyank reflects your life&apos;s karmic trajectory, professional destiny, and major opportunities that take prominence in mature adulthood.
                </p>
                <div className="p-3 rounded-xl bg-white border border-gold/15 font-mono text-xs text-midnight/90">
                  <strong>Example:</strong> Born on 29 July 1990.<br />
                  2+9+0+7+1+9+9+0 = 37 ➔ 3 + 7 = 10 ➔ 1 + 0 = <strong>1 (Ruled by Sun / Surya)</strong>
                </div>
              </div>
            </div>
          </div>

          {/* RULING PLANET MATRIX TABLE */}
          <div className="p-8 rounded-3xl bg-white border border-gold/25 shadow-md">
            <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-midnight mb-4">
              Vedic Ruling Planets and Planetary Archetypes
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-midnight/75 mb-6 font-light">
              Every single-digit number from 1 to 9 resonates with a specific planetary governor in Vedic astrology. These archetypes define your natural gifts and behavioral challenges:
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm border-collapse">
                <thead>
                  <tr className="border-b-2 border-gold/30 bg-gold/10 text-midnight font-cinzel">
                    <th className="p-3">Number</th>
                    <th className="p-3">Ruling Planet</th>
                    <th className="p-3">Vedic Deity</th>
                    <th className="p-3">Core Archetype</th>
                    <th className="p-3">Harmonious Colors</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gold/10 text-midnight/80">
                  <tr>
                    <td className="p-3 font-bold text-gold">1</td>
                    <td className="p-3 font-semibold">Sun (Surya)</td>
                    <td className="p-3">Surya Narayana</td>
                    <td className="p-3">Pioneering leader, executive authority, independent creator</td>
                    <td className="p-3">Gold, Orange, Copper</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-gold">2</td>
                    <td className="p-3 font-semibold">Moon (Chandra)</td>
                    <td className="p-3">Goddess Parvati</td>
                    <td className="p-3">Empathetic mediator, intuitive artist, diplomatic counselor</td>
                    <td className="p-3">White, Cream, Silver</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-gold">3</td>
                    <td className="p-3 font-semibold">Jupiter (Brihaspati)</td>
                    <td className="p-3">Lord Dakshinamurthy</td>
                    <td className="p-3">Spiritual educator, ethical guide, philosophical speaker</td>
                    <td className="p-3">Yellow, Saffron</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-gold">4</td>
                    <td className="p-3 font-semibold">Rahu (North Node)</td>
                    <td className="p-3">Goddess Durga</td>
                    <td className="p-3">Technical strategist, unconventional thinker, pragmatic builder</td>
                    <td className="p-3">Electric Blue, Smoky Grey</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-gold">5</td>
                    <td className="p-3 font-semibold">Mercury (Budha)</td>
                    <td className="p-3">Lord Vishnu</td>
                    <td className="p-3">Commercial genius, agile communicator, versatile trader</td>
                    <td className="p-3">Emerald Green, Mint</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-gold">6</td>
                    <td className="p-3 font-semibold">Venus (Shukra)</td>
                    <td className="p-3">Goddess Mahalakshmi</td>
                    <td className="p-3">Aesthetic designer, family guardian, luxury cultivator</td>
                    <td className="p-3">Sky Blue, Soft Pink</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-gold">7</td>
                    <td className="p-3 font-semibold">Ketu (South Node)</td>
                    <td className="p-3">Lord Ganesha</td>
                    <td className="p-3">Introspective researcher, analytical mystic, occult analyst</td>
                    <td className="p-3">White, Pale Green</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-gold">8</td>
                    <td className="p-3 font-semibold">Saturn (Shani)</td>
                    <td className="p-3">Lord Shani Dev</td>
                    <td className="p-3">Industrial architect, persevering executive, karmic realist</td>
                    <td className="p-3">Dark Blue, Charcoal</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-gold">9</td>
                    <td className="p-3 font-semibold">Mars (Mangala)</td>
                    <td className="p-3">Lord Subrahmanya</td>
                    <td className="p-3">Humanitarian protector, dynamic pioneer, courageous champion</td>
                    <td className="p-3">Coral, Crimson Red</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* SYNTHESIS WITH KUNDALI GUIDANCE */}
          <div className="p-8 rounded-3xl bg-white border border-gold/25 shadow-md">
            <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-midnight mb-4">
              When Numerology Meets Vedic Astrology in Practice
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-midnight/75 font-light mb-4">
              While numerological calculators offer clear personal traits, real-world decisions involving business partnerships, marriage matching, or major career milestones cannot rely on numbers alone.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-midnight/75 font-light">
              At <strong>Astro Siddhi</strong> in MVP Colony, Visakhapatnam, <strong>Sri Raghavendra Siddhanti garu</strong> synthesizes your birth numbers directly with your <strong>Janma Kundali</strong>. For instance, if your Mulank is 1 (ruled by the Sun) but the Sun sits debilitated in Libra in your 7th house, wearing gold or launching aggressive solo ventures during an adverse Rahu Dasha may trigger unexpected setbacks. Genuine astrological counsel harmonizes your birth vibration with the planetary timing of the universe.
            </p>
          </div>
        </article>

        {/* FAQ ACCORDION SECTION */}
        <section aria-label="Frequently Asked Questions" className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold text-gold uppercase tracking-widest">Helpful Answers</span>
            <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-midnight mt-1">
              Frequently Asked Questions About Numerology Calculations
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {NUMEROLOGY_FAQS.map((faq, i) => (
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
              Deepen Your Astrological Knowledge
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
            <Link
              href="/blog/numerology-basics-birth-number-career-timing"
              className="p-5 rounded-2xl bg-white border border-gold/20 hover:border-gold hover:shadow-lg transition-all flex flex-col justify-between group"
            >
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-gold block mb-1">Guide 1</span>
                <h3 className="font-cinzel text-sm font-bold text-midnight group-hover:text-saffron transition-colors mb-2">
                  Numerology Career Timing Guide
                </h3>
                <p className="text-xs text-midnight/70 line-clamp-2">
                  Learn how your birth number interacts with personal year cycles to reveal promotions.
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
                  Kundali for Job & Business Timing
                </h3>
                <p className="text-xs text-midnight/70 line-clamp-2">
                  Decode 10th house Dasha influences and auspicious Muhurtham for financial ventures.
                </p>
              </div>
              <span className="text-xs font-semibold text-gold mt-3 inline-flex items-center gap-1">Read Article &rarr;</span>
            </Link>

            <Link
              href="/services/career-astrology"
              className="p-5 rounded-2xl bg-white border border-gold/20 hover:border-gold hover:shadow-lg transition-all flex flex-col justify-between group"
            >
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-gold block mb-1">Service</span>
                <h3 className="font-cinzel text-sm font-bold text-midnight group-hover:text-saffron transition-colors mb-2">
                  Career Astrology Consultation
                </h3>
                <p className="text-xs text-midnight/70 line-clamp-2">
                  In-person reading in MVP Colony, Visakhapatnam or online via phone and WhatsApp.
                </p>
              </div>
              <span className="text-xs font-semibold text-gold mt-3 inline-flex items-center gap-1">Explore Service &rarr;</span>
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
                  Compute your Vedic Chandra Rashi and Janma Nakshatra with Lahiri Ayanamsa.
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
              Align Your Numerology with Vedic Astrological Guidance
            </h2>
            <p className="text-sm text-ivory/80 leading-relaxed font-cormorant text-lg">
              Book a personal reading with <strong>Sri Raghavendra Siddhanti garu</strong> (25+ years experience) at Sri Raghavendra Jyothishalayam, Sector 10, MVP Colony, Visakhapatnam or online via WhatsApp.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto shrink-0">
            <a
              href="https://wa.me/919652412221?text=Hi%20Sri%20Raghavendra%20Siddhanti%20garu,%20I%20used%20your%20numerology%20calculator%20and%20would%20like%20a%20consultation."
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
