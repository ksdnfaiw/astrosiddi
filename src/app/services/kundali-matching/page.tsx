import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbSchema } from "@/components/ui/SchemaMarkup";
import { ArrowLeft, ChevronRight, Heart, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  alternates: { canonical: "https://www.astrosiddi.com/services/kundali-matching" },
  title: "Kundali Matching for Marriage",
  description:
    "Expert Kundali matching in Visakhapatnam & online. Get 36 Guna Milan, Kuja Dosha check & marriage compatibility advice from a 25-yr veteran. Book today.",
  openGraph: {
    title: "Kundali Matching for Marriage | Astro Siddhi",
    description:
      "Authentic Vedic horoscope matching (Jathaka Poritham) for Telugu weddings by Sri Raghavendra Siddhanti garu in Visakhapatnam.",
    url: "https://www.astrosiddi.com/services/kundali-matching",
    siteName: "Astro Siddhi",
    images: [
      {
        url: "https://www.astrosiddi.com/images/blog/kundali-matching-telugu.svg",
        width: 1200,
        height: 630,
        alt: "Kundali Matching - Astro Siddhi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kundali Matching for Marriage | Astro Siddhi",
    description: "Authentic Vedic horoscope matching (Jathaka Poritham) for Telugu weddings.",
    images: ["https://www.astrosiddi.com/images/blog/kundali-matching-telugu.svg"],
  },
};

export default function KundaliMatching() {
  const breadcrumbs = [
    { name: "Home", url: "https://www.astrosiddi.com" },
    { name: "Services", url: "https://www.astrosiddi.com/services" },
    { name: "Kundali Matching", url: "https://www.astrosiddi.com/services/kundali-matching" },
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
              <li className="text-gold font-medium">Kundali Matching</li>
            </ol>
          </nav>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold/15 text-gold text-xs font-semibold tracking-widest uppercase border border-gold/30 mb-4">
            <Heart className="w-3.5 h-3.5" />
            <span>Vedic Marriage Compatibility (<span lang="te">జాతక పొంతన</span>)</span>
          </div>
          <h1 className="font-cinzel text-4xl sm:text-5xl font-bold mb-4 text-gold">
            Kundali Matching for Marriage &amp; Dosha Analysis
          </h1>
          <p className="text-lg sm:text-xl opacity-90 max-w-2xl mx-auto font-cormorant">
            Comprehensive 36 Guna Milan, Kuja Dosha (Manglik) checks, and traditional Telugu Jathaka Poritham.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 max-w-3xl mx-auto px-4 prose prose-lg">
        <h2 className="font-cinzel text-2xl font-bold text-midnight">What is Kundali Matching?</h2>
        <p className="font-cormorant text-lg text-midnight/80 leading-relaxed">
          Kundali matching is far deeper than simply matching numerical scores on an automated app. In authentic
          Vedic tradition, Ashtakoota Guna Milan evaluates eight distinct dimensions of marital life: psychological
          temperament (Manasa), physical vitality (Yoni), emotional bonding (Gana), and genetic compatibility (Nadi).
        </p>

        <h2 className="font-cinzel text-2xl font-bold text-midnight mt-8">What to Expect in a Consultation</h2>
        <p className="font-cormorant text-lg text-midnight/80 leading-relaxed">
          With over 25 years of practice in Visakhapatnam and Hyderabad, Sri Raghavendra Siddhanti garu reviews both
          birth charts personally. If challenges such as Kuja Dosha (Manglik) or Nadi Dosha appear, we provide genuine
          shastric exceptions and non-fear-based remedies to safeguard marital harmony.
        </p>

        {/* CTA */}
        <div className="my-10 bg-midnight text-ivory p-8 rounded-2xl text-center border border-gold/30 shadow-xl">
          <Sparkles className="w-8 h-8 text-gold mx-auto mb-3" />
          <h3 className="text-gold font-cinzel text-2xl mb-3">Ready for Authentic Marriage Clarity?</h3>
          <p className="mb-6 text-ivory/80 font-cormorant text-lg">
            Consult our veteran astrologer in MVP Colony or schedule an online video consultation via WhatsApp.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-gold text-midnight font-bold rounded-full hover:bg-saffron transition-all text-xs uppercase tracking-widest shadow-lg"
          >
            Book Kundali Matching Now <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <h2 className="font-cinzel text-2xl font-bold text-midnight mt-8">Related Wedding &amp; Kundali Guides</h2>
        <ul className="space-y-3 not-prose my-4">
          <li>
            <Link
              href="/blog/how-kundali-matching-really-works-telugu-tradition"
              className="text-gold hover:text-saffron font-medium inline-flex items-center gap-2"
            >
              <ChevronRight className="w-4 h-4" /> How Kundali Matching Really Works: The Telugu Tradition &amp; 36 Gunas
            </Link>
          </li>
          <li>
            <Link
              href="/blog/kundali-matching-marriage-telugu-vedic-astrology"
              className="text-gold hover:text-saffron font-medium inline-flex items-center gap-2"
            >
              <ChevronRight className="w-4 h-4" /> Kundali Matching for Marriage: Ashtakoota &amp; Nadi Dosha Guide
            </Link>
          </li>
          <li>
            <Link
              href="/blog/manglik-dosha-myths-vs-facts"
              className="text-gold hover:text-saffron font-medium inline-flex items-center gap-2"
            >
              <ChevronRight className="w-4 h-4" /> Manglik Dosha Myths vs. Facts: What Families Need to Know
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
            <dt className="font-bold text-midnight">Is online Kundali matching as accurate as an in-person reading?</dt>
            <dd className="text-midnight/80 font-cormorant text-base mt-1">
              Yes. Planetary calculations rely on precise birth coordinates and times. Detailed charts are cast and interpreted identically whether online or in our MVP Colony clinic.
            </dd>
          </div>
          <div>
            <dt className="font-bold text-midnight">What details are required for the consultation?</dt>
            <dd className="text-midnight/80 font-cormorant text-base mt-1">
              Please provide the exact date, time, and birth city for both prospective partners.
            </dd>
          </div>
        </dl>
      </section>
    </div>
  );
}
