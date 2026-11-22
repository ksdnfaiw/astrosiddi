import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ConsultationCta } from "@/components/ui/ConsultationCta";
import { BreadcrumbSchema } from "@/components/ui/SchemaMarkup";
import { RASHIS, getRashi } from "@/data/rashis";

interface PageProps {
  params: { rashi: string };
}

// Only the 12 known Rashi slugs exist; anything else is a real 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return RASHIS.map((r) => ({ rashi: r.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const r = getRashi(params.rashi);
  if (!r) return { title: "Rashi not found" };
  return {
    title: { absolute: `${r.sanskrit} Rashi (${r.english}) Horoscope | Traits & Career | Astro Siddhi` },
    description: r.metaDescription,
    alternates: { canonical: `/horoscope/${r.slug}` },
    openGraph: {
      title: `${r.sanskrit} Rashi (${r.english}) Horoscope`,
      description: r.metaDescription,
      url: `/horoscope/${r.slug}`,
      type: "article",
    },
  };
}

export default function RashiPage({ params }: PageProps) {
  const r = getRashi(params.rashi);
  if (!r) notFound();

  const idx = RASHIS.findIndex((x) => x.slug === r.slug);
  const prev = RASHIS[(idx + RASHIS.length - 1) % RASHIS.length];
  const next = RASHIS[(idx + 1) % RASHIS.length];
  const compatible = r.compatibleWith.map((s) => getRashi(s)).filter((x): x is NonNullable<typeof x> => Boolean(x));

  const facts: [string, string][] = [
    ["Telugu name", r.telugu],
    ["Symbol", r.symbol],
    ["Ruling planet", r.rulingPlanet],
    ["Element", r.element],
    ["Modality", r.modality],
    ["Nakshatras", r.nakshatras],
    ["Sun transits (sidereal)", r.sunTransit],
    ["Traditional gemstone", r.gemstone],
  ];

  return (
    <div className="flex flex-col min-h-screen bg-ivory text-midnight">
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Horoscope", path: "/horoscope" },
          { name: `${r.sanskrit} Rashi`, path: `/horoscope/${r.slug}` },
        ]}
      />

      <header className="bg-deepPurple text-ivory py-16 sm:py-20 border-b border-gold/20 text-center px-4">
        <nav aria-label="Breadcrumb" className="mb-6 text-xs text-ivory/60">
          <Link href="/" className="hover:text-gold">Home</Link> /{" "}
          <Link href="/horoscope" className="hover:text-gold">Horoscope</Link> / <span className="text-gold">{r.sanskrit} Rashi</span>
        </nav>
        <p className="text-5xl text-gold mb-3" aria-hidden="true">{r.glyph}</p>
        <h1 className="font-cinzel text-3xl sm:text-5xl font-bold mb-5 text-gold">
          {r.sanskrit} Rashi ({r.english}) Horoscope
        </h1>
        <p className="text-base sm:text-lg opacity-85 max-w-2xl mx-auto leading-relaxed">{r.intro}</p>
      </header>

      <article className="py-14 sm:py-16 max-w-3xl mx-auto px-4 w-full space-y-12">
        <section aria-labelledby="facts">
          <h2 id="facts" className="font-cinzel text-2xl sm:text-3xl font-bold mb-5">{r.sanskrit} Rashi at a glance</h2>
          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-gold/20 border border-gold/20 rounded-xl overflow-hidden">
            {facts.map(([k, v]) => (
              <div key={k} className="bg-white px-4 py-3">
                <dt className="text-xs uppercase tracking-wider text-midnight/50">{k}</dt>
                <dd className="font-medium">{v}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section>
          <h2 className="font-cinzel text-2xl sm:text-3xl font-bold mb-4">Personality of {r.sanskrit} Rashi natives</h2>
          <div className="space-y-4 text-base sm:text-lg leading-relaxed text-midnight/80">
            {r.personality.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
          <div className="grid sm:grid-cols-2 gap-6 mt-8">
            <div className="rounded-xl bg-white border border-gold/20 p-5">
              <h3 className="font-bold mb-3">Strengths</h3>
              <ul className="list-disc pl-5 space-y-1 text-midnight/80">
                {r.strengths.map((s) => <li key={s}>{s}</li>)}
              </ul>
            </div>
            <div className="rounded-xl bg-white border border-gold/20 p-5">
              <h3 className="font-bold mb-3">Areas to watch</h3>
              <ul className="list-disc pl-5 space-y-1 text-midnight/80">
                {r.challenges.map((s) => <li key={s}>{s}</li>)}
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="font-cinzel text-2xl sm:text-3xl font-bold mb-4">Career and work</h2>
          <p className="text-base sm:text-lg leading-relaxed text-midnight/80">{r.career}</p>
          <p className="mt-4 text-base sm:text-lg text-midnight/80">
            For timing questions about jobs and business, see our{" "}
            <Link href="/services/career-astrology" className="text-saffronDark underline">career astrology consultation</Link>.
          </p>
        </section>

        <section>
          <h2 className="font-cinzel text-2xl sm:text-3xl font-bold mb-4">Relationships and marriage</h2>
          <p className="text-base sm:text-lg leading-relaxed text-midnight/80">{r.relationships}</p>
          <p className="mt-4 text-base sm:text-lg text-midnight/80">
            Marriage decisions are best made on the full charts of both partners through{" "}
            <Link href="/services/kundali-matching" className="text-saffronDark underline">Kundali matching</Link>, not on Rashi alone.
          </p>
          {compatible.length > 0 && (
            <p className="mt-4 text-base sm:text-lg text-midnight/80">
              Traditionally harmonious signs for {r.sanskrit} Rashi:{" "}
              {compatible.map((c, i) => (
                <span key={c.slug}>
                  <Link href={`/horoscope/${c.slug}`} className="text-saffronDark underline">{c.sanskrit} ({c.english})</Link>
                  {i < compatible.length - 1 ? ", " : "."}
                </span>
              ))}{" "}
              This is a general guide only.
            </p>
          )}
        </section>

        <section>
          <h2 className="font-cinzel text-2xl sm:text-3xl font-bold mb-4">What a consultation looks at</h2>
          <p className="text-base sm:text-lg leading-relaxed text-midnight/80">{r.consultationFocus}</p>
        </section>

        <ConsultationCta
          title={`Consult about your ${r.sanskrit} Rashi chart`}
          whatsappText={`Hello Astro Siddhi, my Moon sign is ${r.sanskrit} Rashi and I would like to book a horoscope consultation.`}
        />

        <nav aria-label="Other Rashis" className="pt-2">
          <div className="flex justify-between gap-4 text-sm font-semibold mb-8">
            <Link href={`/horoscope/${prev.slug}`} className="inline-flex items-center gap-1 hover:text-saffron">
              <ChevronLeft className="w-4 h-4" aria-hidden="true" /> {prev.sanskrit} Rashi
            </Link>
            <Link href={`/horoscope/${next.slug}`} className="inline-flex items-center gap-1 hover:text-saffron">
              {next.sanskrit} Rashi <ChevronRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
          <h2 className="font-cinzel text-xl font-bold mb-4">All Rashis</h2>
          <ul className="flex flex-wrap gap-2">
            {RASHIS.filter((x) => x.slug !== r.slug).map((x) => (
              <li key={x.slug}>
                <Link href={`/horoscope/${x.slug}`} className="inline-block rounded-full border border-gold/40 px-3 py-1.5 text-sm hover:bg-gold/10">
                  {x.sanskrit} ({x.english})
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </article>
    </div>
  );
}
