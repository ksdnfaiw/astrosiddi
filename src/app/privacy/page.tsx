import type { Metadata } from "next";
import { BreadcrumbSchema } from "@/components/ui/SchemaMarkup";

export const metadata: Metadata = {
  alternates: { canonical: "https://www.astrosiddi.com/privacy" },
  title: "Privacy Policy",
  description:
    "Privacy policy for Astro Siddhi Vedic astrology in Visakhapatnam. Learn how we safeguard your birth details, contact data, and consultation privacy.",
  openGraph: {
    title: "Privacy Policy | Astro Siddhi",
    description: "Privacy Policy and birth detail safeguarding practices for Astro Siddhi.",
    url: "https://www.astrosiddi.com/privacy",
    siteName: "Astro Siddhi",
    type: "website",
    images: [
      {
        url: "https://www.astrosiddi.com/images/blog/best-astrologer-in-visakhapatnam.svg",
        width: 1200,
        height: 630,
        alt: "Privacy Policy - Astro Siddhi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Astro Siddhi",
    description: "Privacy Policy and birth data safeguarding practices for Astro Siddhi.",
    images: ["https://www.astrosiddi.com/images/blog/best-astrologer-in-visakhapatnam.svg"],
  },
};

export default function PrivacyPage() {
  const breadcrumbs = [
    { name: "Home", url: "https://www.astrosiddi.com" },
    { name: "Privacy Policy", url: "https://www.astrosiddi.com/privacy" },
  ];

  return (
    <div className="bg-ivory">
      <BreadcrumbSchema items={breadcrumbs} />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="font-cinzel text-3xl md:text-4xl font-bold text-deepPurple mb-4">Privacy Policy</h1>
        <p className="text-sm text-midnight/60 mb-10">Last updated: September 27, 2026</p>

        <div className="space-y-8 text-midnight/90 leading-relaxed">
          <section>
            <h2 className="font-cormorant text-2xl font-semibold text-deepPurple mb-2">1. Introduction</h2>
            <p>
              Astro Siddhi (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) provides Vedic astrology, horoscope reading, Kundali matching,
              Vastu Shastra, and related spiritual consultation services in Visakhapatnam and Hyderabad. This
              Privacy Policy explains how we collect, use, and protect the personal information you share with
              us through our website and consultations.
            </p>
          </section>

          <section>
            <h2 className="font-cormorant text-2xl font-semibold text-deepPurple mb-2">2. Information We Collect</h2>
            <p>
              When you contact us or book a consultation, we may collect your name, phone number, email
              address, date of birth, time of birth, place of birth, and any message or details you provide to
              help us with your consultation.
            </p>
          </section>

          <section>
            <h2 className="font-cormorant text-2xl font-semibold text-deepPurple mb-2">3. How We Use Your Information</h2>
            <p>
              We use the information you provide solely to respond to your enquiry, prepare your astrological
              consultation, and communicate with you via phone, email, or WhatsApp. We do not sell or rent your
              personal information to third parties.
            </p>
          </section>

          <section>
            <h2 className="font-cormorant text-2xl font-semibold text-deepPurple mb-2">4. WhatsApp Communication</h2>
            <p>
              Our contact form sends the details you enter directly to our WhatsApp number so we can follow up
              with you. This message is sent from your own device via WhatsApp and is subject to WhatsApp&apos;s own
              privacy practices.
            </p>
          </section>

          <section>
            <h2 className="font-cormorant text-2xl font-semibold text-deepPurple mb-2">5. Free Calculators and Client-Side Privacy</h2>
            <p>
              Our online calculators (including the Numerology Birth Date Calculator, Moon Sign Calculator, and Kundli Generator) execute 100% locally within your device&apos;s web browser. We do NOT collect, transmit, log, or store your birth date, birth time, or geographic coordinates on any external server or database. We track anonymous, non-personally identifiable usage events in Google Analytics 4 (such as <code>tool_used</code>, <code>result_viewed</code>, and <code>cta_click</code>) purely for performance optimization.
            </p>
          </section>

          <section>
            <h2 className="font-cormorant text-2xl font-semibold text-deepPurple mb-2">6. Data Retention</h2>
            <p>
              For clients who reach out via our booking form or WhatsApp, we retain your information only as long as necessary to provide our astrological services and respond to your enquiries. You may request that we delete your contact records at any time by reaching out.
            </p>
          </section>

          <section>
            <h2 className="font-cormorant text-2xl font-semibold text-deepPurple mb-2">7. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or your personal information, please contact
              us at{" "}
              <a href="mailto:contact@astrosiddi.com" className="text-gold underline">
                contact@astrosiddi.com
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
