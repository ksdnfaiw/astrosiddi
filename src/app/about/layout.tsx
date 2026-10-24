import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "https://www.astrosiddi.com/about" },
  title: "About Sri Raghavendra Siddhanti",
  description:
    "Meet Sri Raghavendra Siddhanti garu, founder of Astro Siddhi Vizag with 25+ years of authentic Vedic astrology practice. Read his journey & book a visit.",
  openGraph: {
    title: "About Sri Raghavendra Siddhanti | Astro Siddhi",
    description:
      "25+ years of Vedic astrology, Vastu Shastra, and spiritual consultation in Visakhapatnam by veteran-led Sri Raghavendra Jyothishalayam.",
    url: "https://www.astrosiddi.com/about",
    siteName: "Astro Siddhi",
    type: "profile",
    images: [
      {
        url: "https://www.astrosiddi.com/images/blog/best-astrologer-in-visakhapatnam.svg",
        width: 1200,
        height: 630,
        alt: "About Sri Raghavendra Siddhanti - Astro Siddhi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Sri Raghavendra Siddhanti | Astro Siddhi",
    description:
      "Meet Sri Raghavendra Siddhanti garu, founder of Astro Siddhi Vizag with 25+ years of Vedic astrology experience.",
    images: ["https://www.astrosiddi.com/images/blog/best-astrologer-in-visakhapatnam.svg"],
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
