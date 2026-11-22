import type { Metadata } from "next";
import { ServicePage } from "@/components/pages/ServicePage";
import { KUNDALI_FAQS } from "@/data/faqs";

export const metadata: Metadata = {
  alternates: { canonical: "/services/kundali-matching" },
  title: "Kundali Matching for Marriage",
  description:
    "Expert Kundali matching in Visakhapatnam & online. Get 36 Guna Milan, Kuja Dosha check & marriage compatibility advice from a 25-yr veteran. Book today.",
};

export default function KundaliMatching() {
  return (
    <ServicePage
      path="/services/kundali-matching"
      schemaName="Kundali Matching (Jathaka Poritham)"
      schemaDescription="Authentic Vedic horoscope matching for Telugu weddings, 36 Guna Milan, Kuja Dosha analysis, and marriage compatibility in Visakhapatnam by Sri Raghavendra Siddhanti garu."
      title="Kundali Matching for Marriage"
      subtitle="Comprehensive 36 Guna Milan, Dosha Parihara, and emotional compatibility guidance for lifelong harmony."
      sections={[
        {
          heading: "What is Vedic Kundali Matching?",
          body: (
            <p>
              Traditional Vedic Kundali Matching (<span lang="te">జాతక పొంతన</span>) evaluates the cosmic compatibility of two prospective partners across 8 distinct dimensions (Ashtakoota), totaling 36 Gunas. Beyond point totals, our 25-year veteran Vedic astrologer inspects Mars placement (Kuja Dosha / Manglik Dosha), 7th house longevity, and planetary dasha synchronicity.
            </p>
          ),
        },
        {
          heading: "Why Consult Sri Raghavendra Siddhanti Garu?",
          body: (
            <p>
              Unlike automated calculator scores that often generate needless fear over minor doshas, Sri Raghavendra Siddhanti garu performs in-depth Janma Kundali analysis in Telugu or English. He identifies genuine planetary cancellations (Dosha Bhanga) and offers non-destructive Vedic remedies to bless the couple with mutual prosperity.
            </p>
          ),
        },
      ]}
      ctaTitle="Bless Your Marriage with Harmony"
      ctaText="Book your detailed Telugu marriage compatibility consultation today."
      faqs={KUNDALI_FAQS}
    />
  );
}
