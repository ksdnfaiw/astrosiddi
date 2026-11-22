import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Poppins } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingDevotionalActions } from "@/components/ui/FloatingDevotionalActions";
import { LeadClickTracker } from "@/components/ui/LeadClickTracker";
import { WebsiteSchema } from "@/components/ui/SchemaMarkup";
import { SITE_URL } from "@/lib/site";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

const GOOGLE_ADS_ID = "AW-18499886007";

export const viewport: Viewport = {
  themeColor: "#0D0A1E",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  // NOTE: No site-wide alternates.canonical here so child pages specify their own canonical URL.
  metadataBase: new URL(SITE_URL),
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
    "Astro Siddhi Visakhapatnam",
  ],
  openGraph: {
    title: "Best Astrologer in Visakhapatnam (Vizag) | Sri Raghavendra Jyothishalayam - Astro Siddhi",
    description:
      "Trusted Vedic astrology, horoscope reading, Kundali matching, and Vastu Shastra consultations in MVP Colony, Visakhapatnam. Rated 4.9★ on Google.",
    url: SITE_URL,
    siteName: "Astro Siddhi - Sri Raghavendra Jyothishalayam",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/sri-raghavendra-banner-en.webp",
        width: 1600,
        height: 1083,
        alt: "Sri Raghavendra Jyothishalayam - Astro Siddhi, Vedic astrologer in Visakhapatnam",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Astrologer in Visakhapatnam (Vizag) | Astro Siddhi",
    description:
      "Consult 25+ yr Vedic astrologer Sri Raghavendra Siddhanti in MVP Colony, Vizag for Kundali matching, horoscope & Vastu.",
    images: ["/images/sri-raghavendra-banner-en.webp"],
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
      <body className={`${poppins.variable} antialiased bg-ivory text-midnight font-poppins overflow-x-hidden`}>
        {/* Scroll-reveal elements start hidden; make sure they are visible when JavaScript is unavailable. */}
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <WebsiteSchema />
        <LanguageProvider>
          <LeadClickTracker />
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <FloatingDevotionalActions />
          <Footer />
        </LanguageProvider>

        {/*
          Google Ads tag, loaded exactly once for the whole site. The tiny inline stub defines dataLayer/gtag so
          events can be queued immediately; the ~90 KB gtag.js library itself is deferred until the page is idle.
        */}
        <Script id="google-ads-gtag" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GOOGLE_ADS_ID}');`}
        </Script>
        <Script
          id="google-ads-gtag-lib"
          src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`}
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
