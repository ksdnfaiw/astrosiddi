import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Astrology Services in Visakhapatnam",
  description: "Vedic astrology services in Visakhapatnam: horoscope reading, Kundali matching, Vastu Shastra, career and marriage guidance, and spiritual remedies. Also serving Hyderabad.",
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
