import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About the Astrologer",
  description: "Meet Sri Raghavendra Siddhanti Garu, Visakhapatnam's trusted Vedic astrologer with over 25 years of experience serving clients in Vizag and Hyderabad.",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
