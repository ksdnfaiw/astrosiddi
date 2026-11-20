/**
 * Single source of truth for site-wide constants.
 * Every canonical URL, sitemap entry, robots rule and JSON-LD block must derive from SITE_URL
 * so the domain can never drift between files again.
 */
export const SITE_URL = "https://www.astrosiddi.com";

export const BUSINESS = {
  name: "Astro Siddhi",
  legalName: "Sri Raghavendra Jyothishalayam",
  founder: "Sri Raghavendra Siddhanti Garu",
  phone: "+919652412221",
  phoneDisplay: "+91 96524 12221",
  secondaryPhone: "+919555192221",
  email: "info@astrosiddi.com",
  whatsappUrl: "https://wa.me/919652412221",
  mapsUrl:
    "https://www.google.com/maps/place/Sri+Raghavendra+Jyothishalayam,+P8RQ%2B3P4,+MVP+Double+Rd,+Sector+10,+MVP+Colony,+Visakhapatnam,+Andhra+Pradesh+530017/@17.740137,83.3393431,17z/",
  address: {
    streetAddress: "P8RQ+3P4, MVP Double Rd, Sector 10, MVP Colony",
    addressLocality: "Visakhapatnam",
    addressRegion: "Andhra Pradesh",
    postalCode: "530017",
    addressCountry: "IN",
  },
  geo: { latitude: 17.740137, longitude: 83.3393431 },
  rating: { value: "4.9", count: "414" },
  image: "/images/profile.webp",
} as const;

export const absoluteUrl = (path = "/") =>
  path === "/" ? SITE_URL : `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;

/** Stable @id values so separate JSON-LD blocks reference the same entities instead of duplicating them. */
export const SCHEMA_IDS = {
  business: `${SITE_URL}/#business`,
  website: `${SITE_URL}/#website`,
  founder: `${SITE_URL}/#founder`,
} as const;
