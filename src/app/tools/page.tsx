import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbSchema } from "@/components/ui/SchemaMarkup";
import { ASTRO_TOOLS_CONFIG } from "@/config/tools";
import { Sparkles, Moon, Compass, Hash, ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  alternates: { canonical: "https://www.astrosiddi.com/tools" },
  title: "Free Vedic Astrology & Numerology Tools",
  description:
    "Explore free Vedic astrology and numerology calculators by Astro Siddhi in Vizag. Calculate your Mulank, Moon sign, and birth chart online today.",
  openGraph: {
    title: "Free Vedic Astrology & Numerology Tools | Astro Siddhi",
    description:
      "Accurate, privacy-first Vedic astrology calculators: Mulank, Bhagyank, Chandra Rashi, and South Indian birth charts.",
    url: "https://www.astrosiddi.com/tools",
    siteName: "Astro Siddhi",
    locale: "en_IN",
    type: "website",
    images: [{ url: "https://www.astrosiddi.com/images/blog/best-astrologer-in-visakhapatnam.svg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Vedic Astrology & Numerology Tools | Astro Siddhi",
    description:
      "Free Vedic astrology and numerology calculators: Mulank, Bhagyank, Moon sign, and Janma Kundali.",
    images: ["https://www.astrosiddi.com/images/blog/best-astrologer-in-visakhapatnam.svg"],
  },
};

const TOOLS_LIST = [
  {
    title: "Numerology Birth Date Calculator",
    slug: "/tools/numerology-calculator",
    icon: Hash,
    status: "Active & Released",
    badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
    description:
      "Calculate your Vedic Mulank (Psychic Number), Bhagyank (Destiny Number), and Western Life Path. Uncover ruling planetary vibrations, lucky colors, and career strengths.",
    primaryKeyword: "numerology birth date calculator",
    features: ["Step-by-step math breakdown", "Ruling planetary profile", "100% Client-side privacy"],
  },
  {
    title: "Moon Sign & Chandra Kundali Calculator",
    slug: "/tools/moon-sign-calculator",
    icon: Moon,
    status: ASTRO_TOOLS_CONFIG.moonSignReleased ? "Active & Released" : "Accuracy Calibration Preview",
    badgeColor: ASTRO_TOOLS_CONFIG.moonSignReleased
      ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/30"
      : "bg-amber-500/20 text-amber-300 border-amber-500/30",
    description:
      "Compute your exact Vedic Chandra Rashi and Janma Nakshatra using astronomical ephemeris algorithms and Lahiri Ayanamsa, with South Indian chart placement.",
    primaryKeyword: "moon sign calculator",
    features: ["Lahiri Ayanamsa sidereal calculation", "Nakshatra & Pada determination", "South Indian chart layout"],
  },
  {
    title: "Vedic Janma Kundali Generator",
    slug: "/tools/kundli-generator",
    icon: Compass,
    status: ASTRO_TOOLS_CONFIG.kundliReleased ? "Active & Released" : "Phase 3 Foundation Preview",
    badgeColor: ASTRO_TOOLS_CONFIG.kundliReleased
      ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/30"
      : "bg-amber-500/20 text-amber-300 border-amber-500/30",
    description:
      "Generate your traditional South Indian birth chart with Lagna (Ascendant) and planetary house placements based on your exact birth coordinates.",
    primaryKeyword: "kundli generator",
    features: ["Curated Indian city database", "Manual coordinates fallback", "South Indian 4x4 matrix"],
  },
];

const HUB_FAQS = [
  {
    question: "Are these astrology and numerology calculators completely free?",
    answer:
      "Yes, all tools in our suite are 100% free to use with no registration, no advertisements, and no paywalls. They provide immediate mathematical and planetary baseline insights.",
  },
  {
    question: "Is my personal birth information private and secure?",
    answer:
      "All calculations run entirely in your web browser. Astro Siddhi does not record, log, or transmit your birth dates, times, or names to any external database or third-party servers.",
  },
  {
    question: "What is the difference between an automated tool and a personal consultation?",
    answer:
      "Calculators compute mathematical ephemeris coordinates. However, holistic predictive astrology requires synthesizing planetary yogas, Dasha balances, transit aspects, and remedial remedies (Parihara), which require the experienced judgment of a veteran astrologer.",
  },
  {
    question: "Which Ayanamsa is used for Moon sign and Kundali calculations?",
    answer:
      "We utilize the classical Chitra Paksha (Lahiri) Ayanamsa, the standard astronomical system recognized by the Government of India Calendar Reform Committee and traditional South Indian Vedic panchangams.",
  },
  {
    question: "Can I book a detailed consultation after using these free tools?",
    answer:
      "Yes, you can easily transition from your calculated numbers or Moon sign directly to a personalized one-on-one consultation with Sri Raghavendra Siddhanti garu either at our MVP Colony office in Visakhapatnam or online via WhatsApp.",
  },
];

export default function ToolsHubPage() {
  const breadcrumbs = [
    { name: "Home", url: "https://www.astrosiddi.com" },
    { name: "Free Tools", url: "https://www.astrosiddi.com/tools" },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://www.astrosiddi.com/tools/#faq",
    mainEntity: HUB_FAQS.map((faq) => ({
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

      {/* HERO HEADER */}
      <header className="relative pt-24 pb-20 bg-gradient-to-b from-midnight via-deepPurple to-midnight text-ivory border-b border-gold/20 overflow-hidden">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#F5A623_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <nav aria-label="Breadcrumb" className="mb-6 flex justify-center">
            <ol className="flex items-center gap-2 text-xs text-ivory/60">
              <li>
                <Link href="/" className="hover:text-gold transition-colors">Home</Link>
              </li>
              <li>/</li>
              <li className="text-gold font-medium">Free Tools</li>
            </ol>
          </nav>

          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/15 text-gold text-xs sm:text-sm font-semibold tracking-widest uppercase border border-gold/30 mb-6">
            <Sparkles className="w-4 h-4" />
            Vedic Ephemeris & Numerology Suite
          </span>

          <h1 className="font-cinzel text-3xl sm:text-5xl md:text-6xl font-bold text-ivory tracking-tight mb-6 leading-tight">
            Free Vedic Astrology & Numerology Calculators
          </h1>

          <p className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-ivory/85 leading-relaxed font-cormorant font-medium">
            Explore free, accurate Vedic astrology and numerology tools developed by Astro Siddhi in Visakhapatnam. Calculate your birth Mulank, Chandra Rashi, and birth chart placements with zero data tracking and instant mathematical transparency.
          </p>
        </div>
      </header>

      {/* MAIN TOOLS DIRECTORY */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex-1 w-full">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="font-cinzel text-2xl sm:text-4xl font-bold text-midnight mb-3">
            Select an Astrological Tool
          </h2>
          <p className="text-sm sm:text-base text-midnight/70">
            Every calculator executes locally in your browser. Choose below to begin your analysis.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {TOOLS_LIST.map((tool) => (
            <div
              key={tool.slug}
              className="bg-white rounded-3xl p-7 border-2 border-gold/25 hover:border-gold shadow-lg hover:shadow-2xl transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-midnight text-gold flex items-center justify-center border border-gold/30 group-hover:scale-105 transition-transform">
                    <tool.icon className="w-6 h-6" />
                  </div>
                  <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full border ${tool.badgeColor}`}>
                    {tool.status}
                  </span>
                </div>

                <h3 className="font-cinzel text-xl font-bold text-midnight mb-3 group-hover:text-saffron transition-colors">
                  {tool.title}
                </h3>

                <p className="text-sm text-midnight/75 leading-relaxed mb-6 font-light">
                  {tool.description}
                </p>

                <ul className="space-y-2 mb-8">
                  {tool.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-2 text-xs text-midnight/80">
                      <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href={tool.slug}
                className="w-full py-3.5 px-5 rounded-full bg-midnight hover:bg-gold hover:text-midnight text-ivory font-bold text-xs uppercase tracking-wider text-center transition-all flex items-center justify-center gap-2 shadow"
              >
                <span>Launch Tool</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>

        {/* HOW TO CHOOSE THE RIGHT TOOL GUIDE */}
        <section className="mb-20 p-8 sm:p-12 rounded-3xl bg-midnight text-ivory border border-gold/30 shadow-xl">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <span className="text-xs uppercase tracking-widest text-gold font-semibold">Educational Guidance</span>
            <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-ivory mt-1">
              How to Combine Numerology and Vedic Astrology
            </h2>
            <p className="text-sm text-ivory/80 mt-3 font-cormorant text-lg">
              Understanding the distinct roles of birth numbers, Chandra Rashi, and the Lagna chart helps you extract maximum practical value from each analysis.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm text-ivory/80 leading-relaxed">
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="font-cinzel text-base font-bold text-gold mb-2">1. Birth Numerology</h3>
              <p>
                Calculates your day-to-day vibrational frequency (Mulank) and overarching life mission (Bhagyank). Ideal for assessing behavioral strengths, harmonious colors, and core personality traits.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="font-cinzel text-base font-bold text-gold mb-2">2. Chandra Rashi (Moon)</h3>
              <p>
                Identifies the Moon&apos;s exact zodiac sign and Nakshatra at your birth moment. Essential for understanding emotional balance, Sade Sati periods, and Telugu marriage matching.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="font-cinzel text-base font-bold text-gold mb-2">3. Janma Kundali</h3>
              <p>
                Maps all 12 houses starting from your rising sign (Lagna). Essential for major life timing, career promotions, health analysis, and Vastu synchronization with your living space.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold text-gold uppercase tracking-widest">Common Questions</span>
            <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-midnight mt-1">
              Frequently Asked Questions About Our Free Tools
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {HUB_FAQS.map((faq, i) => (
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

        {/* CONSULTATION BANNER CTA */}
        <section className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-midnight via-deepPurple to-midnight text-ivory border border-gold/40 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center md:text-left max-w-xl">
            <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-ivory">
              Need Personal Astrological Interpretation?
            </h2>
            <p className="text-sm text-ivory/80 leading-relaxed font-cormorant text-lg">
              Consult <strong>Sri Raghavendra Siddhanti garu</strong> with 25+ years of Vedic Jyothishalayam mastery in MVP Colony, Visakhapatnam. Personalized horoscope analysis in Telugu & English.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto shrink-0">
            <a
              href="https://wa.me/919652412221?text=Hi%20Astro%20Siddhi,%20I%20used%20your%20free%20tools%20and%20would%20like%20to%20book%20a%20consultation."
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-gold to-saffron text-midnight font-bold text-xs uppercase tracking-widest text-center shadow-lg hover:brightness-105 transition-all"
            >
              WhatsApp Consultation
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
