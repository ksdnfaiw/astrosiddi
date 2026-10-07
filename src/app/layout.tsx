import type { Metadata } from "next";
import { Cinzel_Decorative, Cormorant_Garamond, Jost, Noto_Sans_Telugu, Poppins } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { LocalBusinessSchema } from "@/components/ui/SchemaMarkup";

const cinzel = Cinzel_Decorative({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-cinzel",
});

const cormorant = Cormorant_Garamond({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-cormorant",
});

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
});

const notoTelugu = Noto_Sans_Telugu({
  subsets: ["telugu"],
  variable: "--font-noto-telugu",
});

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.astrosiddhi.com"),
  title: {
    template: "%s | Astro Siddhi",
    default: "Best Astrologer in Visakhapatnam (Vizag) | Astro Siddhi",
  },
  description: "Astro Siddhi is a trusted Vedic astrologer in Visakhapatnam offering horoscope reading, Kundali matching, Vastu Shastra, and spiritual remedies, also serving Hyderabad.",
  keywords: ["astrologer in Visakhapatnam", "best astrologer in Vizag", "Vedic astrology Vizag", "Kundali matching Visakhapatnam", "Vastu consultant Vizag", "astrologer Hyderabad"],
  openGraph: {
    title: "Best Astrologer in Visakhapatnam (Vizag) | Astro Siddhi",
    description: "Trusted Vedic astrology, horoscope reading, Kundali matching, and Vastu Shastra consultations in Visakhapatnam.",
    url: "https://www.astrosiddhi.com",
    siteName: "Astro Siddhi",
    locale: "en_IN",
    type: "website",
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
      <body
        className={`${cinzel.variable} ${cormorant.variable} ${jost.variable} ${notoTelugu.variable} ${poppins.variable} antialiased bg-ivory text-midnight font-poppins overflow-x-hidden`}
      >
        <LanguageProvider>
          <Navbar />
          <LocalBusinessSchema />
          <main className="min-h-screen">
            {children}
          </main>
          <WhatsAppButton />
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
