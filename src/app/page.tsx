import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { HomeIntro } from "@/components/home/HomeIntro";
import { GoogleReviews } from "@/components/sections/GoogleReviews";
import { Testimonials } from "@/components/sections/Testimonials";
import { MapsSection } from "@/components/sections/MapsSection";
import { FaqSection } from "@/components/ui/FaqSection";
import { QuickLeadForm } from "@/components/ui/QuickLeadForm";
import { FaqSchema, LocalBusinessSchema } from "@/components/ui/SchemaMarkup";
import { HOME_FAQS } from "@/data/faqs";
import { RASHIS } from "@/data/rashis";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-ivory">
      {/* Home: LocalBusiness (+ AggregateRating & Reviews) and FAQPage structured data */}
      <LocalBusinessSchema reviews />
      <FaqSchema faqs={HOME_FAQS} />

      <HomeIntro />

      {/* Horoscope by Moon sign: internal links to every Rashi page */}
      <section className="py-20 sm:py-24 bg-ivory text-midnight border-t border-gold/15">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-cinzel text-3xl sm:text-4xl font-bold mb-4">Horoscope by Moon Sign (Rashi)</h2>
          <p className="text-midnight/70 max-w-2xl mx-auto mb-10">
            Find your Janma Rashi and read what your Moon sign says about personality, career and relationships, then
            book a personal birth-chart consultation.
          </p>
          <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {RASHIS.map((r) => (
              <li key={r.slug}>
                <Link
                  href={`/horoscope/${r.slug}`}
                  className="block rounded-xl border border-gold/25 bg-white px-3 py-4 hover:border-gold hover:shadow-md transition"
                >
                  <span className="block text-2xl text-gold" aria-hidden="true">{r.glyph}</span>
                  <span className="block font-semibold">{r.sanskrit} Rashi</span>
                  <span className="block text-xs text-midnight/60">{r.english}</span>
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/horoscope"
            className="group inline-flex items-center gap-2 mt-10 font-bold text-sm uppercase tracking-widest border-b-2 border-gold pb-1 hover:text-saffron hover:border-saffron transition-colors"
          >
            All Rashi Horoscopes
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* QUICK APPOINTMENT ENQUIRY (HIGH INTENT CRO FORM) */}
      <section className="py-20 sm:py-28 bg-gradient-to-b from-ivory to-white border-t border-gold/15 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10">
            <span className="text-saffron font-bold tracking-[0.2em] uppercase text-xs">Direct Consultation Desk</span>
            <h2 className="font-cinzel text-3xl sm:text-5xl font-bold text-midnight mt-2">
              Book Your Vedic Consultation
            </h2>
            <p className="font-cormorant text-lg sm:text-xl text-midnight/70 mt-3 max-w-2xl mx-auto">
              Share your birth details below. Sri Raghavendra Siddhanti garu will personally review your horoscope chart.
            </p>
          </div>
          <QuickLeadForm sourcePage="homepage" serviceDefault="Vedic Horoscope Analysis" />
        </div>
      </section>

      <GoogleReviews />
      <Testimonials />
      <FaqSection faqs={HOME_FAQS} id="faq" />
      <MapsSection />
    </div>
  );
}
