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
      schemaName="Vastu Shastra Consultation & Non-Demolition Remedies"
      schemaDescription="Professional Vastu Shastra consultation for apartments, independent houses, and commercial spaces in Visakhapatnam by Sri Raghavendra Siddhanti garu."
      title="Vastu Consultant in Visakhapatnam"
      subtitle="Harmonize your living and workspace with the cosmic flow of Pancha Bhootas — without breaking walls."
      sections={[
        {
          heading: "Authentic Coastal Vastu Shastra",
          body: (
            <p>
              In coastal Visakhapatnam—from MVP Colony to Beach Road, Madhurawada, and Gajuwaka—unique electromagnetic and geographical alignments govern residential and commercial energy flows. We specialize in non-demolition remedies using sacred yantras, directional brass strips, color resonance, and elemental balancers to resolve energy blockages.
            </p>
          ),
        },
        {
          heading: "Consultation Formats Available",
          body: (
            <p>
              We provide both in-person site visits across greater Visakhapatnam and online digital blueprint audits for apartments and commercial spaces worldwide. Receive a clear, customized layout report indicating corrective energy placements for entrance, kitchen, master bedroom, and puja space.
            </p>
          ),
        },
      ]}
      ctaTitle="Restore Balance to Your Home"
      ctaText="Schedule a comprehensive on-site or digital Vastu consultation."
      faqs={VASTU_FAQS}
    />
  );
}
