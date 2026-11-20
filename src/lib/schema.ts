import { BUSINESS, SCHEMA_IDS, SITE_URL, absoluteUrl } from "@/lib/site";
import { translations } from "@/lib/translations";
import type { FaqItem } from "@/data/faqs";

const stripQuotes = (s: string) => s.replace(/^"|"$/g, "").trim();
const stripDash = (s: string) => s.replace(/^[—–-]\s*/, "").trim();

/** The three client testimonials that are visibly rendered by <Testimonials /> (kept in sync via translations). */
function testimonialReviews() {
  return [1, 2, 3].map((n) => {
    const text = (translations.en as Record<string, string>)[`testimonials.${n}.text`];
    const author = (translations.en as Record<string, string>)[`testimonials.${n}.author`];
    const isTelugu = /[ఀ-౿]/.test(text);
    return {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5", worstRating: "1" },
      author: { "@type": "Person", name: stripDash(author).split(",")[0] },
      reviewBody: stripQuotes(text),
      inLanguage: isTelugu ? "te" : "en",
      itemReviewed: { "@id": SCHEMA_IDS.business },
    };
  });
}

export function localBusinessSchema(opts: { reviews?: boolean } = {}) {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    "@id": SCHEMA_IDS.business,
    name: BUSINESS.name,
    alternateName: [
      BUSINESS.legalName,
      "Sri Raghavendra Jyothishalayam MVP Colony",
      "Astro Siddhi Visakhapatnam",
    ],
    url: SITE_URL,
    image: absoluteUrl(BUSINESS.image),
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    priceRange: "₹₹",
    description:
      "25-year veteran-led Vedic astrology practice in Visakhapatnam (Sri Raghavendra Jyothishalayam). Kundali matching, horoscope reading, Vastu and career astrology in Telugu and English, in person and online.",
    address: { "@type": "PostalAddress", ...BUSINESS.address },
    geo: { "@type": "GeoCoordinates", ...BUSINESS.geo },
    hasMap: BUSINESS.mapsUrl,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "20:00",
      },
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: BUSINESS.phone,
        contactType: "customer service",
        availableLanguage: ["Telugu", "English"],
      },
      {
        "@type": "ContactPoint",
        telephone: BUSINESS.secondaryPhone,
        contactType: "customer service",
        availableLanguage: ["Telugu", "English"],
      },
    ],
    areaServed: [
      { "@type": "City", name: "Visakhapatnam" },
      { "@type": "Country", name: "India" },
    ],
    knowsLanguage: ["te", "en"],
    founder: { "@type": "Person", "@id": SCHEMA_IDS.founder, name: BUSINESS.founder },
    sameAs: [
      BUSINESS.mapsUrl,
      "https://www.facebook.com/astrosiddi",
      "https://www.instagram.com/astrosiddi",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: BUSINESS.rating.value,
      reviewCount: BUSINESS.rating.count,
      bestRating: "5",
      worstRating: "1",
    },
    ...(opts.reviews ? { review: testimonialReviews() } : {}),
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": SCHEMA_IDS.website,
    url: SITE_URL,
    name: `${BUSINESS.name} - ${BUSINESS.legalName}`,
    inLanguage: ["en", "te"],
    publisher: { "@id": SCHEMA_IDS.business },
  };
}

export function faqSchema(faqs: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: absoluteUrl(it.path),
    })),
  };
}

export function serviceSchema(opts: { name: string; description: string; path: string; areaServed?: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    description: opts.description,
    url: absoluteUrl(opts.path),
    serviceType: opts.name,
    provider: { "@id": SCHEMA_IDS.business },
    areaServed: opts.areaServed
      ? { "@type": "City", name: opts.areaServed }
      : [{ "@type": "City", name: "Visakhapatnam" }, { "@type": "Country", name: "India" }],
    availableChannel: { "@type": "ServiceChannel", serviceUrl: absoluteUrl("/contact") },
  };
}

export const SERVICE_CATALOG = [
  { name: "Vedic Horoscope Reading", path: "/horoscope" },
  { name: "Kundali Matching", path: "/services/kundali-matching" },
  { name: "Career & Business Astrology", path: "/services/career-astrology" },
  { name: "Vastu Shastra Consultation", path: "/services/vastu-visakhapatnam" },
];

export function servicesCatalogSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Vedic Astrology Consultations",
    serviceType: "Vedic Astrology Consultations",
    url: absoluteUrl("/services"),
    provider: { "@id": SCHEMA_IDS.business },
    areaServed: [{ "@type": "City", name: "Visakhapatnam" }, { "@type": "Country", name: "India" }],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Astrology Services",
      itemListElement: SERVICE_CATALOG.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s.name, url: absoluteUrl(s.path) },
      })),
    },
  };
}
