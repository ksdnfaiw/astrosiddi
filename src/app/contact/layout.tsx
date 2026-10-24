import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "https://www.astrosiddi.com/contact" },
  title: "Contact & Book Consultation",
  description:
    "Book your astrology session with Sri Raghavendra Siddhanti in MVP Colony, Vizag or online. Contact via WhatsApp or call +91 96524 12221 today.",
  openGraph: {
    title: "Contact & Book Consultation | Astro Siddhi",
    description:
      "Connect with Sri Raghavendra Jyothishalayam in MVP Colony, Visakhapatnam. In-person & online consultations for Kundali, Vastu, and horoscope readings.",
    url: "https://www.astrosiddi.com/contact",
    siteName: "Astro Siddhi",
    type: "website",
    images: [
      {
        url: "https://www.astrosiddi.com/images/blog/best-astrologer-in-visakhapatnam.svg",
        width: 1200,
        height: 630,
        alt: "Contact Astro Siddhi Visakhapatnam",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact & Book Consultation | Astro Siddhi",
    description:
      "Book your astrology session with Sri Raghavendra Siddhanti in MVP Colony, Vizag or online via WhatsApp.",
    images: ["https://www.astrosiddi.com/images/blog/best-astrologer-in-visakhapatnam.svg"],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
