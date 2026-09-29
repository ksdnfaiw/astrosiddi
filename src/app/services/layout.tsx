import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vedic Astrology Services | Kundali Matching & Vastu Consultant",
  description: "Explore Astro Siddhi's sacred services: Kundali Matching, Vastu Consultation, and Career Astrology. Available in Telugu & English in Visakhapatnam.",
};

import { ServiceSchema } from "@/components/ui/SchemaMarkup";

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ServiceSchema />
      {children}
    </>
  );
}
