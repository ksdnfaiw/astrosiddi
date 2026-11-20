import type { Metadata } from "next";
import { ServicePage } from "@/components/pages/ServicePage";
import { VASTU_FAQS } from "@/data/faqs";

export const metadata: Metadata = {
  alternates: { canonical: "/services/vastu-visakhapatnam" },
  title: "Best Vastu Consultant in Visakhapatnam | Astro Siddhi",
  description:
    "Consult the best Vastu consultant in Visakhapatnam. Align your home or office with the five elements for harmony, health, and prosperity.",
};

export default function VastuConsultation() {
  return (
    <ServicePage
      path="/services/vastu-visakhapatnam"
      schemaName="Vastu Consultation"
      schemaDescription="Vastu Shastra consultation for homes, flats and offices in Visakhapatnam, with practical non-demolition corrections, on-site or online."
      title="Vastu Consultant in Visakhapatnam"
      subtitle="Align your space with the five elements for harmony and prosperity."
      sections={[
        {
          heading: "What is Vastu Shastra?",
          body: (
            <p>
              Vastu Shastra is the ancient Indian science of architecture and spaces. As the leading Vastu consultant in Visakhapatnam, we
              help you align your home or office with cosmic energies to promote health, wealth, and spiritual peace.
            </p>
          ),
        },
        {
          heading: "What to Expect in a Session",
          body: (
            <p>
              With 25+ years of experience, we provide practical, non-destructive Vastu corrections. We don&apos;t recommend heavy
              demolitions; instead, we focus on elemental balancing, color therapy, and energetic shifts that yield rapid results.
            </p>
          ),
        },
      ]}
      ctaTitle="Transform Your Space Today"
      ctaText="Book an on-site or online Vastu consultation."
      faqs={VASTU_FAQS}
    />
  );
}
