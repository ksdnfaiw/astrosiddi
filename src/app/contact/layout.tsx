import type { Metadata } from "next";
import { BreadcrumbSchema, LocalBusinessSchema } from "@/components/ui/SchemaMarkup";

export const metadata: Metadata = {
  alternates: { canonical: "/contact" },
  title: "Contact Best Astrologer in Visakhapatnam | Astro Siddhi",
  description:
    "Book an online or in-person astrology consultation in Visakhapatnam. Get clarity on career, Kundali matching, and Vastu from Astro Siddhi.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Contact: LocalBusiness (+ AggregateRating) structured data */}
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
