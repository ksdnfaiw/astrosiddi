import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { FaqSection } from "@/components/ui/FaqSection";
import { BreadcrumbSchema, FaqSchema, JsonLd } from "@/components/ui/SchemaMarkup";
import { serviceSchema } from "@/lib/schema";
import type { FaqItem } from "@/data/faqs";

interface ServicePageProps {
  path: string;
  schemaName: string;
  schemaDescription: string;
  title: string;
  subtitle: string;
  sections: { heading: string; body: React.ReactNode }[];
  ctaTitle: string;
  ctaText: string;
  faqs: FaqItem[];
}

const RELATED = [
  { href: "/services/kundali-matching", label: "Kundali Matching" },
  { href: "/services/career-astrology", label: "Career Astrology" },
  { href: "/services/vastu-visakhapatnam", label: "Vastu Consultant" },
  { href: "/horoscope", label: "Horoscope by Rashi" },
];

/** Shared layout for the individual service pages: one H1, H2 sections, CTA, FAQ (+schema), related links. */
export function ServicePage(p: ServicePageProps) {
  return (
    <div className="flex flex-col min-h-screen bg-ivory text-midnight">
      <JsonLd data={serviceSchema({ name: p.schemaName, description: p.schemaDescription, path: p.path })} />
      <FaqSchema faqs={p.faqs} />
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: p.schemaName, path: p.path },
        ]}
      />

      <section className="bg-deepPurple text-ivory py-20 sm:py-24 border-b border-gold/20 text-center px-4">
        <nav aria-label="Breadcrumb" className="mb-6 text-xs text-ivory/60">
          <Link href="/" className="hover:text-gold">Home</Link> / <Link href="/services" className="hover:text-gold">Services</Link> /{" "}
          <span className="text-gold">{p.schemaName}</span>
        </nav>
        <h1 className="font-cinzel text-3xl sm:text-5xl font-bold mb-6 text-gold">{p.title}</h1>
        <p className="text-lg sm:text-xl opacity-80 max-w-2xl mx-auto">{p.subtitle}</p>
      </section>

      <article className="py-16 sm:py-20 max-w-3xl mx-auto px-4 w-full space-y-10">
        {p.sections.map((s) => (
          <section key={s.heading}>
            <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-midnight mb-4">{s.heading}</h2>
            <div className="text-base sm:text-lg leading-relaxed text-midnight/80 space-y-4">{s.body}</div>
          </section>
        ))}

        <div className="bg-deepPurple text-ivory p-8 sm:p-10 rounded-2xl text-center">
          <h2 className="text-gold font-cinzel text-2xl sm:text-3xl mb-4">{p.ctaTitle}</h2>
          <p className="mb-6 text-ivory/85">{p.ctaText}</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gold text-midnight font-bold rounded-full hover:bg-saffron transition-colors"
          >
            Book Consultation <ChevronRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </article>

      <FaqSection faqs={p.faqs} id="faq" />

      <nav aria-label="Related services" className="pb-20 max-w-3xl mx-auto px-4 w-full">
        <h2 className="font-cinzel text-xl font-bold mb-4">Explore more</h2>
        <ul className="flex flex-wrap gap-3">
          {RELATED.filter((r) => r.href !== p.path).map((r) => (
            <li key={r.href}>
              <Link href={r.href} className="inline-block rounded-full border border-gold/40 px-4 py-2 text-sm font-semibold hover:bg-gold/10">
                {r.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
