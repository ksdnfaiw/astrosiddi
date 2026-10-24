import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbSchema } from "@/components/ui/SchemaMarkup";
import { ArrowLeft, ChevronRight, Briefcase, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  alternates: { canonical: "https://www.astrosiddi.com/services/career-astrology" },
  title: "Career Astrology & Job Predictions",
  description:
    "Accurate career astrology in Telugu & English. Discover your best job path, promotion timing & business remedies with our 25-year Vizag expert. Book now.",
  openGraph: {
    title: "Career Astrology & Job Predictions | Astro Siddhi",
    description:
      "Vedic horoscope analysis for career growth, job transitions, and business auspicious timing in Visakhapatnam.",
    url: "https://www.astrosiddi.com/services/career-astrology",
    siteName: "Astro Siddhi",
    images: [
      {
        url: "https://www.astrosiddi.com/images/blog/career-astrology-kundali.svg",
        width: 1200,
        height: 630,
        alt: "Career Astrology - Astro Siddhi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Career Astrology & Job Predictions | Astro Siddhi",
    description: "Vedic horoscope analysis for career growth, job transitions, and business auspicious timing in Visakhapatnam.",
    images: ["https://www.astrosiddi.com/images/blog/career-astrology-kundali.svg"],
  },
};

export default function CareerAstrology() {
  const breadcrumbs = [
    { name: "Home", url: "https://www.astrosiddi.com" },
    { name: "Services", url: "https://www.astrosiddi.com/services" },
    { name: "Career Astrology", url: "https://www.astrosiddi.com/services/career-astrology" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-ivory text-midnight">
      <BreadcrumbSchema items={breadcrumbs} />

      {/* Hero */}
      <section className="bg-deepPurple text-ivory py-20 border-b border-gold/20 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center justify-center gap-2 text-xs text-ivory/70">
              <li>
                <Link href="/" className="hover:text-gold transition-colors">Home</Link>
              </li>
              <li>/</li>
              <li>
                <Link href="/services" className="hover:text-gold transition-colors">Services</Link>
              </li>
              <li>/</li>
              <li className="text-gold font-medium">Career Astrology</li>
            </ol>
          </nav>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold/15 text-gold text-xs font-semibold tracking-widest uppercase border border-gold/30 mb-4">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Vedic Career &amp; Business Guidance</span>
          </div>
          <h1 className="font-cinzel text-4xl sm:text-5xl font-bold mb-4 text-gold">
            Career Astrology &amp; Job Timing Predictions
          </h1>
          <p className="text-lg sm:text-xl opacity-90 max-w-2xl mx-auto font-cormorant">
            Decode planetary transits, dasha cycles, and 10th-house alignments for informed professional decisions.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 max-w-3xl mx-auto px-4 prose prose-lg">
        <h2 className="font-cinzel text-2xl font-bold text-midnight">What is Career Astrology?</h2>
        <p className="font-cormorant text-lg text-midnight/80 leading-relaxed">
          Your Vedic birth chart (Janma Kundali) holds the blueprint to your professional destiny. By deeply analyzing
          the 10th house (Karma Bhava), planetary dashas, and Saturn/Jupiter transits, career astrology uncovers your
          natural leadership aptitude, optimal industry sectors, and the exact timing for promotions or new business
          ventures.
        </p>

        <h2 className="font-cinzel text-2xl font-bold text-midnight mt-8">What to Expect in a Consultation</h2>
        <p className="font-cormorant text-lg text-midnight/80 leading-relaxed">
          During your session (available in Telugu and English), Sri Raghavendra Siddhanti garu decodes your professional
          timeline. You will receive practical guidance on whether to pursue government service, private enterprise, or
          independent business, along with authentic Vedic remedies to overcome stagnant growth.
        </p>

        {/* Callout / CTA */}
        <div className="my-10 bg-midnight text-ivory p-8 rounded-2xl text-center border border-gold/30 shadow-xl">
          <Sparkles className="w-8 h-8 text-gold mx-auto mb-3" />
          <h3 className="text-gold font-cinzel text-2xl mb-3">Unlock Your Professional Potential</h3>
          <p className="mb-6 text-ivory/80 font-cormorant text-lg">
            Consult our 25-year veteran astrologer in MVP Colony, Visakhapatnam or connect virtually via WhatsApp.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-gold text-midnight font-bold rounded-full hover:bg-saffron transition-all text-xs uppercase tracking-widest shadow-lg"
          >
            Book Career Reading Now <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <h2 className="font-cinzel text-2xl font-bold text-midnight mt-8">Related Career Guides &amp; Insights</h2>
        <ul className="space-y-3 not-prose my-4">
          <li>
            <Link
              href="/blog/career-astrology-reading-kundali-for-job-business-timing"
              className="text-gold hover:text-saffron font-medium inline-flex items-center gap-2"
            >
              <ChevronRight className="w-4 h-4" /> Reading Your Kundali for Job Transitions &amp; Business Timing
            </Link>
          </li>
          <li>
            <Link
              href="/blog/numerology-basics-birth-number-career-timing"
              className="text-gold hover:text-saffron font-medium inline-flex items-center gap-2"
            >
              <ChevronRight className="w-4 h-4" /> Numerology Basics: Using Your Birth Number for Career &amp; Wealth Timing
            </Link>
          </li>
          <li>
            <Link
              href="/services"
              className="text-midnight/70 hover:text-gold inline-flex items-center gap-1 text-sm mt-2"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Back to All Astrology Services
            </Link>
          </li>
        </ul>

        <h3 className="font-cinzel text-xl font-bold text-midnight mt-10">Frequently Asked Questions</h3>
        <dl className="space-y-4 mt-4">
          <div>
            <dt className="font-bold text-midnight">Can astrology predict when I will secure employment or a promotion?</dt>
            <dd className="text-midnight/80 font-cormorant text-base mt-1">
              Yes. By analyzing your Mahadasha, Antardasha, and Jupiter-Saturn transits through the 10th and 6th houses, we pinpoint favorable windows for job switches and interviews.
            </dd>
          </div>
          <div>
            <dt className="font-bold text-midnight">Do you provide consultations in Telugu?</dt>
            <dd className="text-midnight/80 font-cormorant text-base mt-1">
              Yes, comprehensive career astrology consultations are conducted fluently in Telugu and English.
            </dd>
          </div>
        </dl>
      </section>
    </div>
  );
}
