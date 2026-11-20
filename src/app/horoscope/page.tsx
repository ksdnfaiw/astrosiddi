import type { Metadata } from "next";
import Link from "next/link";
import { ConsultationCta } from "@/components/ui/ConsultationCta";
import { BreadcrumbSchema, JsonLd } from "@/components/ui/SchemaMarkup";
import { RASHIS } from "@/data/rashis";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/horoscope" },
  title: "Vedic Horoscope by Rashi (Moon Sign) | 12 Rashi Guide",
  description:
    "Explore all 12 Vedic Rashi (Moon sign) horoscope profiles - Mesha to Meena - with traits, career and relationships, plus Telugu & English consultation in Visakhapatnam.",
};

export default function HoroscopeHub() {
  const listSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Vedic Horoscope by Rashi (Moon Sign)",
    itemListElement: RASHIS.map((r, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: `${r.sanskrit} Rashi (${r.english})`,
      url: absoluteUrl(`/horoscope/${r.slug}`),
    })),
  };

  return (
    <div className="flex flex-col min-h-screen bg-ivory text-midnight">
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Horoscope", path: "/horoscope" },
        ]}
      />
      <JsonLd data={listSchema} />

      <section className="bg-deepPurple text-ivory py-20 sm:py-24 border-b border-gold/20 text-center px-4">
        <nav aria-label="Breadcrumb" className="mb-6 text-xs text-ivory/60">
          <Link href="/" className="hover:text-gold">Home</Link> / <span className="text-gold">Horoscope</span>
        </nav>
        <h1 className="font-cinzel text-3xl sm:text-5xl font-bold mb-6 text-gold">Vedic Horoscope by Rashi (Moon Sign)</h1>
        <p className="text-lg sm:text-xl opacity-80 max-w-2xl mx-auto">
          In Vedic astrology your Rashi is the sign the Moon occupied at birth. Find yours below and read how it shapes temperament, career and relationships.
        </p>
      </section>

      <section className="py-16 sm:py-20 max-w-6xl mx-auto px-4 w-full">
        <h2 className="font-cinzel text-2xl sm:text-3xl font-bold mb-8 text-center">The 12 Rashis</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {RASHIS.map((r) => (
            <li key={r.slug}>
              <Link
                href={`/horoscope/${r.slug}`}
                className="group block h-full rounded-2xl border border-gold/20 bg-white p-6 hover:border-gold/60 hover:shadow-lg transition"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-3xl text-gold" aria-hidden="true">{r.glyph}</span>
                  <span className="text-xs uppercase tracking-wider text-midnight/70">{r.element} · {r.rulingPlanet.split(" ")[0]}</span>
                </div>
                <h3 className="font-cinzel text-xl font-bold group-hover:text-saffron transition-colors">
                  {r.sanskrit} Rashi <span className="font-normal text-midnight/60">({r.english})</span>
                </h3>
                <p className="text-sm text-midnight/60 mb-3">{r.telugu}</p>
                <p className="text-sm text-midnight/75 leading-relaxed line-clamp-3">{r.intro}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="pb-16 max-w-3xl mx-auto px-4 w-full">
        <h2 className="font-cinzel text-2xl sm:text-3xl font-bold mb-4">How to find your Janma Rashi</h2>
        <div className="text-base sm:text-lg leading-relaxed text-midnight/80 space-y-4">
          <p>
            Your Janma Rashi depends on the Moon&apos;s position at the exact time and place you were born, calculated in the sidereal (Lahiri)
            zodiac used in Vedic astrology. Because the Moon changes sign roughly every two and a half days, an accurate birth time and place
            matter. Your Rashi is often different from the Western Sun sign you may know.
          </p>
          <p>
            If you are unsure of your birth details or want to see how your Rashi interacts with the rest of your chart, a personal reading is
            the reliable route. You can also explore{" "}
            <Link href="/services/kundali-matching" className="text-saffronDark underline">Kundali matching</Link>,{" "}
            <Link href="/services/career-astrology" className="text-saffronDark underline">career astrology</Link> and{" "}
            <Link href="/services" className="text-saffronDark underline">all our services</Link>.
          </p>
        </div>
      </section>

      <div className="pb-20 max-w-3xl mx-auto px-4 w-full">
        <ConsultationCta />
      </div>
    </div>
  );
}
