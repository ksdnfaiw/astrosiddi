import type { Metadata } from "next";
import { ServicePageSchema } from "@/components/ui/SchemaMarkup";

export const metadata: Metadata = {
  alternates: { canonical: "https://www.astrosiddi.com/services" },
  title: "Vedic Astrology Services & Consultations",
  description:
    "Vedic astrology services in Visakhapatnam: Kundali matching, Vastu Shastra & career readings in Telugu and English. Schedule your session today.",
  openGraph: {
    title: "Vedic Astrology Services & Consultations | Astro Siddhi",
    description:
      "Kundali matching, Vastu Shastra, and career astrology readings in MVP Colony, Visakhapatnam by Sri Raghavendra Siddhanti garu.",
    url: "https://www.astrosiddi.com/services",
    siteName: "Astro Siddhi",
    type: "website",
    images: [
      {
        url: "https://www.astrosiddi.com/images/blog/best-astrologer-in-visakhapatnam.svg",
        width: 1200,
        height: 630,
        alt: "Vedic Astrology Services - Astro Siddhi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vedic Astrology Services & Consultations | Astro Siddhi",
    description:
      "Kundali matching, Vastu Shastra, and career astrology readings in MVP Colony, Visakhapatnam.",
    images: ["https://www.astrosiddi.com/images/blog/best-astrologer-in-visakhapatnam.svg"],
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ServicePageSchema />
      {children}
    </>
  );
}
