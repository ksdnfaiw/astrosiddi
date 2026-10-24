import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbSchema } from "@/components/ui/SchemaMarkup";
import { ArrowLeft, ChevronRight, Home, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  alternates: { canonical: "https://www.astrosiddi.com/services/vastu-visakhapatnam" },
  title: "Best Vastu Consultant in Visakhapatnam",
  description:
    "Consult the top Vastu consultant in Visakhapatnam. Non-demolition remedies for flats and homes in MVP Colony. Balance your space—book a site visit.",
  openGraph: {
    title: "Best Vastu Consultant in Visakhapatnam | Astro Siddhi",
    description:
      "Vastu Shastra consultations and non-demolition remedies for flats, independent houses, and plots in Visakhapatnam.",
    url: "https://www.astrosiddi.com/services/vastu-visakhapatnam",
    siteName: "Astro Siddhi",
    images: [
      {
        url: "https://www.astrosiddi.com/images/blog/vastu-visakhapatnam-apartments.svg",
        width: 1200,
        height: 630,
        alt: "Vastu Consultant in Visakhapatnam - Astro Siddhi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Vastu Consultant in Visakhapatnam | Astro Siddhi",
    description: "Vastu Shastra consultations and non-demolition remedies for flats in Visakhapatnam.",
    images: ["https://www.astrosiddi.com/images/blog/vastu-visakhapatnam-apartments.svg"],
  },
};

export default function VastuConsultation() {
  const breadcrumbs = [
    { name: "Home", url: "https://www.astrosiddi.com" },
    { name: "Services", url: "https://www.astrosiddi.com/services" },
    { name: "Vastu Visakhapatnam", url: "https://www.astrosiddi.com/services/vastu-visakhapatnam" },
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
              <li className="text-gold font-medium">Vastu Visakhapatnam</li>
            </ol>
          </nav>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold/15 text-gold text-xs font-semibold tracking-widest uppercase border border-gold/30 mb-4">
            <Home className="w-3.5 h-3.5" />
            <span>Vedic Architecture &amp; Spatial Alignment</span>
          </div>
          <h1 className="font-cinzel text-4xl sm:text-5xl font-bold mb-4 text-gold">
            Vastu Consultant in Visakhapatnam (Vizag)
          </h1>
          <p className="text-lg sm:text-xl opacity-90 max-w-2xl mx-auto font-cormorant">
            Practical, non-demolition Vastu remedies for apartments, sea-facing flats, and residential properties.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 max-w-3xl mx-auto px-4 prose prose-lg">
        <h2 className="font-cinzel text-2xl font-bold text-midnight">What is Vastu Shastra for Coastal Flats?</h2>
        <p className="font-cormorant text-lg text-midnight/80 leading-relaxed">
          Visakhapatnam&apos;s unique coastal topography, sea-breeze dynamics, and high-rise apartment living present
          distinct spatial challenges. In Vedic architecture, balancing the Pancha Bhutas (Five Elements) ensures that
          energy channels (Prana) flow smoothly through residential and commercial spaces.
        </p>

        <h2 className="font-cinzel text-2xl font-bold text-midnight mt-8">Non-Demolition Remedies for Apartments</h2>
        <p className="font-cormorant text-lg text-midnight/80 leading-relaxed">
          With 25+ years of practical field experience across MVP Colony, Madhurawada, Seethammadhara, and Beach Road,
          Sri Raghavendra Siddhanti garu specializes in remedies without structural demolition. By using directional
          pyramids, elemental copper placements, and sacred color balancing, energy flaws can be corrected peacefully.
        </p>

        {/* CTA */}
        <div className="my-10 bg-midnight text-ivory p-8 rounded-2xl text-center border border-gold/30 shadow-xl">
          <Sparkles className="w-8 h-8 text-gold mx-auto mb-3" />
          <h3 className="text-gold font-cinzel text-2xl mb-3">Harmonize Your Home Energy</h3>
          <p className="mb-6 text-ivory/80 font-cormorant text-lg">
            Schedule an on-site property evaluation in Vizag or send your floor plan for online Vastu analysis.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-gold text-midnight font-bold rounded-full hover:bg-saffron transition-all text-xs uppercase tracking-widest shadow-lg"
          >
            Book Vastu Consultation Now <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <h2 className="font-cinzel text-2xl font-bold text-midnight mt-8">Related Vastu Guides for Vizag Residents</h2>
        <ul className="space-y-3 not-prose my-4">
          <li>
            <Link
              href="/blog/signs-you-need-vastu-correction-at-home"
              className="text-gold hover:text-saffron font-medium inline-flex items-center gap-2"
            >
              <ChevronRight className="w-4 h-4" /> 7 Telltale Signs You Need Vastu Correction at Home &amp; Remedies
            </Link>
          </li>
          <li>
            <Link
              href="/blog/vastu-tips-visakhapatnam-apartments"
              className="text-gold hover:text-saffron font-medium inline-flex items-center gap-2"
            >
              <ChevronRight className="w-4 h-4" /> Coastal Vastu Tips for Visakhapatnam Apartments &amp; High-Rises
            </Link>
          </li>
          <li>
            <Link
              href="/blog/vastu-shastra-guide-homes-flats-visakhapatnam"
              className="text-gold hover:text-saffron font-medium inline-flex items-center gap-2"
            >
              <ChevronRight className="w-4 h-4" /> Comprehensive Vastu Guide: Entrance, Kitchen &amp; Bedroom Directions
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
            <dt className="font-bold text-midnight">Do I have to break walls for Vastu correction in an apartment?</dt>
            <dd className="text-midnight/80 font-cormorant text-base mt-1">
              No. In leased flats and modern apartments, structural demolition is rarely practical. We use elemental balancing, sacred geometric yantras, and color remedies.
            </dd>
          </div>
          <div>
            <dt className="font-bold text-midnight">Do you conduct in-person property visits across Visakhapatnam?</dt>
            <dd className="text-midnight/80 font-cormorant text-base mt-1">
              Yes, in-person site visits are available across Visakhapatnam (MVP Colony, Gajuwaka, Madhurawada, Rushikonda, and surrounding areas).
            </dd>
          </div>
        </dl>
      </section>
    </div>
  );
}
