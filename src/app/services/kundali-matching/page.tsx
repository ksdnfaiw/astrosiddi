import type { Metadata } from "next";
import Link from "next/link";
import { ServicePage } from "@/components/pages/ServicePage";
import { KUNDALI_FAQS } from "@/data/faqs";

export const metadata: Metadata = {
  alternates: { canonical: "/services/kundali-matching" },
  title: "Kundali Matching Online | Vedic Astrology Compatibility",
  description:
    "Expert Kundali matching online. Scientifically verified compatibility analysis for marriage by a 25-year veteran Vedic astrologer.",
};

export default function KundaliMatching() {
  return (
    <ServicePage
      path="/services/kundali-matching"
      schemaName="Kundali Matching"
      schemaDescription="Online and in-person Kundali (horoscope) matching for marriage using Ashtakoot Guna Milan, dosha analysis and dasha review, in Telugu and English."
      title="Kundali Matching Online"
      subtitle="Scientifically verified compatibility analysis for marriage."
      sections={[
        {
          heading: "What is Kundali Matching?",
          body: (
            <p>
              Kundali matching, or horoscope matching, is a deep soul-level match assessment. Beyond just Gun Milan, we analyze the 8-fold
              compatibility test (Ashtakoot Guna Milan) to ensure a harmonious, prosperous, and lasting marriage.
            </p>
          ),
        },
        {
          heading: "The Eight Koots of Guna Milan",
          body: (
            <>
              <p>
                Ashtakoot Guna Milan scores a couple out of 36 points across eight factors: Varna (1), Vashya (2), Tara (3), Yoni (4), Graha
                Maitri (5), Gana (6), Bhakoot (7) and Nadi (8). Each koot looks at a different layer of compatibility, from temperament and
                mutual attraction to mental wavelength, family harmony and traditional indications for health and progeny.
              </p>
              <p>
                The score is only the starting point. Doshas such as Manglik dosha, the strength of the seventh house and the running dasha
                periods of both charts are reviewed before any advice is given.
              </p>
            </>
          ),
        },
        {
          heading: "What to Expect in a Session",
          body: (
            <p>
              With over 25 years of experience and 15,000+ clients served, our veteran-led practice provides deep insights into marital
              compatibility, potential challenges, and practical remedies to overcome doshas (like Manglik Dosha). You will also find the
              moon-sign profiles on our <Link href="/horoscope" className="text-saffronDark underline">Rashi horoscope pages</Link> useful
              background before your session.
            </p>
          ),
        },
      ]}
      ctaTitle="Ready for Cosmic Clarity?"
      ctaText="Book your online Kundali Matching consultation today."
      faqs={KUNDALI_FAQS}
    />
  );
}
