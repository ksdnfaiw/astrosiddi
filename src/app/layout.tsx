import type { Metadata } from "next";
import Script from "next/script";
import { Cinzel_Decorative, Cormorant_Garamond, Noto_Sans_Telugu, Poppins } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

const cinzel = Cinzel_Decorative({
  weight: ["700"],
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  weight: ["400", "600"],
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
});

const notoTelugu = Noto_Sans_Telugu({
  subsets: ["telugu"],
  variable: "--font-noto-telugu",
  display: "swap",
});

const poppins = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.astrosiddi.com"),
  alternates: {
    canonical: "https://www.astrosiddi.com",
  },
  title: {
    template: "%s | Astro Siddhi",
    default: "Best Astrologer in Visakhapatnam (Vizag) | Astro Siddhi",
  },
  description:
    "Consult 25+ yr Vedic astrologer Sri Raghavendra Siddhanti in MVP Colony, Vizag for Kundali matching, horoscope & Vastu. Book your consultation today.",
  keywords: [
    "best astrologer in Visakhapatnam",
    "best astrologer in Vizag",
    "Sri Raghavendra Jyothishalayam",
    "Astro Siddhi",
    "Kundali matching Visakhapatnam",
    "Vastu consultant Vizag",
    "astrologer in MVP Colony Visakhapatnam",
    "Sri Raghavendra Siddhanti Garu",
    "Vedic astrology Vizag",
  ],
  openGraph: {
    title: "Best Astrologer in Visakhapatnam (Vizag) | Astro Siddhi",
    description:
      "Consult 25+ yr Vedic astrologer Sri Raghavendra Siddhanti in MVP Colony, Vizag for Kundali matching, horoscope & Vastu. Book your consultation today.",
    url: "https://www.astrosiddi.com",
    siteName: "Astro Siddhi - Sri Raghavendra Jyothishalayam",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.astrosiddi.com/images/blog/best-astrologer-in-visakhapatnam.svg",
        width: 1200,
        height: 630,
        alt: "Astro Siddhi - Best Astrologer in Visakhapatnam",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Astrologer in Visakhapatnam (Vizag) | Astro Siddhi",
    description:
      "Consult 25+ yr Vedic astrologer Sri Raghavendra Siddhanti in MVP Colony, Vizag for Kundali matching, horoscope & Vastu. Book your consultation today.",
    images: ["https://www.astrosiddi.com/images/blog/best-astrologer-in-visakhapatnam.svg"],
  },
  verification: {
    google: "j095-6EOwSoBFQ7_Qxv3GGHkB2RUkmjN_q6D6-v_O2o",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google tag (gtag.js) */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-18499886007"
          strategy="lazyOnload"
        />
        <Script id="google-ads-gtag" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'AW-18499886007');
          `}
        </Script>
      </head>
      <body
        className={`${cinzel.variable} ${cormorant.variable} ${notoTelugu.variable} ${poppins.variable} antialiased bg-ivory text-midnight font-poppins overflow-x-hidden`}
      >
        <LanguageProvider>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <WhatsAppButton />
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
