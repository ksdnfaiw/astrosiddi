import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Best Astrologer in Visakhapatnam | Astro Siddhi",
  description: "Book an online or in-person astrology consultation in Visakhapatnam. Get clarity on career, Kundali matching, and Vastu from Astro Siddhi.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
