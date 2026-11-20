import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MapPin } from "lucide-react";
import { ConsultationCta } from "@/components/ui/ConsultationCta";
import { FaqSection } from "@/components/ui/FaqSection";
import { BreadcrumbSchema, FaqSchema, JsonLd, LocalBusinessSchema } from "@/components/ui/SchemaMarkup";
import { CITIES, getCity } from "@/data/cities";
import { serviceSchema } from "@/lib/schema";
import { BUSINESS } from "@/lib/site";

interface PageProps {
  params: { citySlug: string };
}

// Only the listed city slugs exist; every other top-level path is a real 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return CITIES.map((c) => ({ citySlug: c.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const c = getCity(params.citySlug);
  if (!c) return { title: "Page not found" };
  return {
    title: { absolute: c.metaTitle },
    description: c.metaDescription,
    alternates: { canonical: `/${c.slug}` },
    openGraph: { title: c.metaTitle, description: c.metaDescription, url: `/${c.slug}`, type: "website" },
  };
}

const SERVICE_LINKS = [
  { href: "/horoscope", label: "Vedic horoscope reading", note: "Birth-chart analysis and Rashi guidance" },
  { href: "/services/kundali-matching", label: "Kundali matching", note: "Ashtakoot Guna Milan and dosha review" },
  { href: "/services/career-astrology", label: "Career & business astrology", note: "Job, business and timing guidance" },
  { href: "/services/vastu-visakhapatnam", label: "Vastu consultation", note: "Homes, flats and offices" },
];

export default function CityPage({ params }: PageProps) {
  const c = getCity(params.citySlug);
  if (!c) notFound();

  const others = CITIES.filter((x) => x.slug !== c.slug);

  return (
    <div className="flex flex-col min-h-screen bg-ivory text-midnight">
      {c.isLocal ? (
        <LocalBusinessSchema />
      ) : (
        <JsonLd
          data={serviceSchema({
            name: `Online Vedic astrology consultation for ${c.name}`,
            description: c.metaDescription,
            path: `/${c.slug}`,
            areaServed: c.name,
          })}
        />
      )}
      <FaqSchema faqs={c.faqs} />
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: `Astrologer in ${c.name}`, path: `/${c.slug}` },
        ]}
      />

      <header className="bg-deepPurple text-ivory py-16 sm:py-20 border-b border-gold/20 text-center px-4">
        <nav aria-label="Breadcrumb" className="mb-6 text-xs text-ivory/60">
          <Link href="/" className="hover:text-gold">Home</Link> / <span className="text-gold">Astrologer in {c.name}</span>
        </nav>
        <h1 className="font-cinzel text-3xl sm:text-5xl font-bold mb-5 text-gold max-w-4xl mx-auto">{c.h1}</h1>
        <p className="inline-flex items-center gap-2 text-sm text-ivory/80">
          <MapPin className="w-4 h-4 text-gold" aria-hidden="true" />
          {c.isLocal ? "Office: MVP Colony, Visakhapatnam" : `Online consultations for ${c.name}, ${c.state}`}
        </p>
      </header>

      <article className="py-14 sm:py-16 max-w-3xl mx-auto px-4 w-full space-y-12">
        <section className="space-y-4 text-base sm:text-lg leading-relaxed text-midnight/80">
          {c.intro.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </section>

        <section>
          <h2 className="font-cinzel text-2xl sm:text-3xl font-bold mb-6">
            {c.isLocal ? "Why people in Visakhapatnam consult us" : `Why people in ${c.name} consult us`}
          </h2>
          <ul className="grid gap-5">
            {c.concerns.map((x) => (
              <li key={x.title} className="rounded-xl bg-white border border-gold/20 p-5">
                <h3 className="font-bold mb-2">{x.title}</h3>
                <p className="text-midnight/80 leading-relaxed">{x.text}</p>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="font-cinzel text-2xl sm:text-3xl font-bold mb-5">Services available{c.isLocal ? "" : ` to ${c.name} clients`}</h2>
          <ul className="grid sm:grid-cols-2 gap-4">
            {SERVICE_LINKS.map((s) => (
              <li key={s.href}>
                <Link href={s.href} className="block h-full rounded-xl border border-gold/25 bg-white p-4 hover:border-gold hover:shadow-md transition">
                  <span className="font-semibold text-saffronDark">{s.label}</span>
                  <span className="block text-sm text-midnight/65">{s.note}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="font-cinzel text-2xl sm:text-3xl font-bold mb-5">How it works</h2>
          <ol className="space-y-4">
            {c.howItWorks.map((step, i) => (
              <li key={step} className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold font-bold text-midnight" aria-hidden="true">
                  {i + 1}
                </span>
                <p className="text-midnight/80 leading-relaxed pt-0.5">{step}</p>
              </li>
            ))}
          </ol>
        </section>

        {c.isLocal && (
          <section className="rounded-xl border border-gold/25 bg-white p-6">
            <h2 className="font-cinzel text-xl font-bold mb-3">Visit the office</h2>
            <address className="not-italic text-midnight/80 leading-relaxed">
              {BUSINESS.legalName} (Astro Siddhi)
              <br />
              {BUSINESS.address.streetAddress}, {BUSINESS.address.addressLocality}, {BUSINESS.address.addressRegion} {BUSINESS.address.postalCode}
              <br />
              Mon-Sat 9:00 AM - 8:00 PM, Sunday by advance appointment
              <br />
              <a href={`tel:${BUSINESS.phone}`} className="text-saffronDark underline">{BUSINESS.phoneDisplay}</a>
              {" · "}
              <a href={BUSINESS.mapsUrl} target="_blank" rel="noopener noreferrer" className="text-saffronDark underline">
                Directions on Google Maps
              </a>
            </address>
          </section>
        )}
      </article>

      <FaqSection faqs={c.faqs} id="faq" />

      <div className="py-16 max-w-3xl mx-auto px-4 w-full space-y-12">
        <ConsultationCta
          title={`Book your ${c.isLocal ? "Visakhapatnam" : c.name} consultation`}
          whatsappText={`Hello Astro Siddhi, I am in ${c.name} and would like to book an astrology consultation.`}
        />

        <nav aria-label="Other cities">
          <h2 className="font-cinzel text-xl font-bold mb-4">Astrologer in other cities</h2>
          <ul className="flex flex-wrap gap-2">
            {others.map((x) => (
              <li key={x.slug}>
                <Link href={`/${x.slug}`} className="inline-block rounded-full border border-gold/40 px-3 py-1.5 text-sm hover:bg-gold/10">
                  Astrologer in {x.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
