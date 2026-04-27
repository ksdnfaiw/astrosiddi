import type { Metadata } from "next";
import { Cinzel_Decorative, Cormorant_Garamond, Jost, Noto_Sans_Telugu } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

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
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-jost",
});

const notoTelugu = Noto_Sans_Telugu({
  weight: ["400", "500", "600", "700"],
  subsets: ["telugu"],
  variable: "--font-noto-telugu",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Astro Siddhi",
    default: "Astro Siddhi | Best Astrologer in Vizag & Hyderabad",
  },
  description: "Astro Siddhi offers expert Vedic astrology, horoscope reading, Kundali matching, Vastu Shastra, and spiritual remedies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cinzel.variable} ${cormorant.variable} ${jost.variable} ${notoTelugu.variable} antialiased bg-ivory text-midnight`}
      >
        <LanguageProvider>
          <Navbar />
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
