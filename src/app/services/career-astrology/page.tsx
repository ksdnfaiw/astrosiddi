import type { Metadata } from "next";
import Link from "next/link";
import { ServicePage } from "@/components/pages/ServicePage";
import { CAREER_FAQS } from "@/data/faqs";

export const metadata: Metadata = {
  alternates: { canonical: "/services/career-astrology" },
  title: "Career Astrology & Job Predictions",
  description:
    "Accurate career astrology in Telugu and English. Discover your best career path, job timing, and business success with our 25-year experienced astrologer.",
};

export default function CareerAstrology() {
  return (
    <ServicePage
      path="/services/career-astrology"
      schemaName="Career & Business Astrology"
      schemaDescription="Career and business astrology consultations in Telugu and English: career path, job-change timing and business growth periods from your birth chart."
      title="Career Astrology & Guidance"
      subtitle="Discover your true calling, auspicious timing for job changes, and business growth."
      sections={[
        {
          heading: "What is Career Astrology?",
          body: (
            <p>
              Your birth chart holds the blueprint to your professional success. By analyzing the 10th house, planetary dashas, and
              transits, career astrology helps identify your natural talents, optimal career paths, and the exact timing for promotions or
              business ventures.
            </p>
          ),
        },
        {
          heading: "What to Expect in a Session",
          body: (
            <p>
              During our session (available in Telugu and English), our 25-year veteran astrologer will decode your professional timeline.
              You will receive actionable advice on whether to pursue business or service, when to change jobs, and remedies to overcome
              professional stagnation. Not sure of your Moon sign? Start with our{" "}
              <Link href="/horoscope" className="text-saffron underline font-semibold">Rashi horoscope guide</Link>.
            </p>
          ),
        },
      ]}
      ctaTitle="Unlock Your Professional Potential"
      ctaText="Book your career and business astrology reading today."
      faqs={CAREER_FAQS}
    />
  );
}
