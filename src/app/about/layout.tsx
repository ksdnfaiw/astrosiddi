import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: '/about' },
  title: "About Astro Siddhi | Veteran-Owned Astrology Business Visakhapatnam",
  description: "Learn about Sri Raghavendra Siddhanti Garu, founder of Astro Siddhi. A veteran-owned business in Visakhapatnam offering 25+ years of Vedic Jyotish expertise.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
