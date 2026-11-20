import type { Metadata } from "next";
import { ServicesContent } from "@/components/pages/ServicesContent";
import { FaqSection } from "@/components/ui/FaqSection";
import { BreadcrumbSchema, FaqSchema, ServiceSchema } from "@/components/ui/SchemaMarkup";
import { SERVICES_FAQS } from "@/data/faqs";

export const metadata: Metadata = {
  alternates: { canonical: "/services" },
  title: "Vedic Astrology Services | Kundali Matching & Vastu Consultant",
  description:
    "Explore Astro Siddhi's sacred services: Kundali Matching, Vastu Consultation, and Career Astrology. Available in Telugu & English in Visakhapatnam.",
};

export default function ServicesPage() {
  return (
    <>
      <ServiceSchema />
      <FaqSchema faqs={SERVICES_FAQS} />
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ]}
      />
      <ServicesContent faq={<FaqSection faqs={SERVICES_FAQS} id="faq" />} />
    </>
  );
}
