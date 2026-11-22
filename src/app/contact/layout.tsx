import type { Metadata } from "next";
import { BreadcrumbSchema, LocalBusinessSchema } from "@/components/ui/SchemaMarkup";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/contact" },
  title: "Contact & Book Consultation | Astro Siddhi Visakhapatnam",
  description:
    "Book an online or in-person astrology consultation in Visakhapatnam. Connect with Sri Raghavendra Siddhanti garu for career, Kundali matching, and Vastu.",
  openGraph: {
    title: "Contact & Book Consultation | Astro Siddhi",
    description:
      "Connect with Sri Raghavendra Jyothishalayam in MVP Colony, Visakhapatnam. In-person & online consultations for Kundali, Vastu, and horoscope readings.",
    url: absoluteUrl("/contact"),
    siteName: "Astro Siddhi",
    type: "website",
    images: [
      {
        url: "/images/sri-raghavendra-banner-en.webp",
        width: 1600,
        height: 1083,
        alt: "Contact Astro Siddhi Visakhapatnam",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact & Book Consultation | Astro Siddhi",
    description:
      "Book your astrology session with Sri Raghavendra Siddhanti in MVP Colony, Vizag or online via WhatsApp.",
    images: ["/images/sri-raghavendra-banner-en.webp"],
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ]}
      />
      {children}
    </>
  );
}
