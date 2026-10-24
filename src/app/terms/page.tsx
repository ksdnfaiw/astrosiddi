import type { Metadata } from "next";
import { BreadcrumbSchema } from "@/components/ui/SchemaMarkup";

export const metadata: Metadata = {
  alternates: { canonical: "https://www.astrosiddi.com/terms" },
  title: "Terms of Service",
  description:
    "Terms of service and consultation disclaimer for Astro Siddhi Vedic astrology practice in Visakhapatnam. Guidance disclaimer and client terms.",
  openGraph: {
    title: "Terms of Service | Astro Siddhi",
    description: "Terms of service and consultation disclaimer for Astro Siddhi Vedic astrology practice in Visakhapatnam.",
    url: "https://www.astrosiddi.com/terms",
    siteName: "Astro Siddhi",
    type: "website",
    images: [
      {
        url: "https://www.astrosiddi.com/images/blog/best-astrologer-in-visakhapatnam.svg",
        width: 1200,
        height: 630,
        alt: "Terms of Service - Astro Siddhi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service | Astro Siddhi",
    description: "Terms of service and consultation disclaimer for Astro Siddhi.",
    images: ["https://www.astrosiddi.com/images/blog/best-astrologer-in-visakhapatnam.svg"],
  },
};

export default function TermsPage() {
  const breadcrumbs = [
    { name: "Home", url: "https://www.astrosiddi.com" },
    { name: "Terms of Service", url: "https://www.astrosiddi.com/terms" },
  ];

  return (
    <div className="bg-ivory">
      <BreadcrumbSchema items={breadcrumbs} />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-6 inline-block bg-gold/10 border border-gold/30 rounded px-3 py-1.5 text-xs font-semibold text-midnight/80 tracking-wide">
          [Note: Draft Terms of Service — Pending Client Legal Review]
        </div>

        <h1 className="font-cinzel text-3xl md:text-4xl font-bold text-deepPurple mb-4">
          Terms of Service &amp; Consultation Disclaimer
        </h1>
        <p className="text-sm text-midnight/60 mb-10">Last updated: October 2026</p>

        <div className="space-y-8 text-midnight/90 leading-relaxed">
          <section>
            <h2 className="font-cormorant text-2xl font-semibold text-deepPurple mb-2">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing the website of Astro Siddhi (Sri Raghavendra Jyothishalayam) at{" "}
              <strong>https://www.astrosiddi.com</strong> or by booking an astrological, Vastu, or spiritual
              consultation, you agree to comply with and be bound by these Terms of Service.
            </p>
          </section>

          <section>
            <h2 className="font-cormorant text-2xl font-semibold text-deepPurple mb-2">
              2. Nature of Astrological Consultations (Guidance Disclaimer)
            </h2>
            <p className="mb-3">
              Astrological readings, Kundali matching (jathaka poritham), Vastu Shastra evaluations, and
              numerological recommendations provided by Sri Raghavendra Siddhanti garu and Astro Siddhi are
              offered solely as interpretive guidance based on traditional Vedic principles and personal
              experience spanning 25+ years.
            </p>
            <p className="p-4 bg-midnight/5 rounded-lg border-l-4 border-gold text-midnight text-sm">
              <strong>Important Disclaimer:</strong> Consultations are spiritual and philosophical guidance, not
              guaranteed outcomes or absolute predictions. Astrology and Vastu insights are <em>never</em> a
              substitute for professional medical diagnosis or treatment, licensed legal counsel, certified
              financial planning, or certified engineering/structural advice.
            </p>
          </section>

          <section>
            <h2 className="font-cormorant text-2xl font-semibold text-deepPurple mb-2">
              3. Client Responsibility &amp; Accuracy of Data
            </h2>
            <p>
              Accurate astrological analysis requires precise birth information (exact date, accurate birth time,
              and birth city/location). Astro Siddhi is not responsible for inaccurate interpretations resulting
              from incorrect or estimated birth records supplied by the client. All personal decisions made following
              a consultation remain the sole responsibility and free will of the individual client.
            </p>
          </section>

          <section>
            <h2 className="font-cormorant text-2xl font-semibold text-deepPurple mb-2">
              4. Appointments, Cancellations &amp; Payments
            </h2>
            <p>
              Consultations are conducted in-person at our MVP Colony, Visakhapatnam practice or virtually via
              telephone/WhatsApp for clients across India and abroad. Scheduling is confirmed upon mutual agreement
              of date and slot. If you need to reschedule, please notify us at least 24 hours prior to your
              scheduled consultation time.
            </p>
          </section>

          <section>
            <h2 className="font-cormorant text-2xl font-semibold text-deepPurple mb-2">
              5. Intellectual Property
            </h2>
            <p>
              All written articles, Vedic astrology guides, calculators, graphics, branding, and text content published
              on this website are the intellectual property of Astro Siddhi (Sri Raghavendra Jyothishalayam) and may
              not be reproduced, republished, or syndicated without prior written consent.
            </p>
          </section>

          <section>
            <h2 className="font-cormorant text-2xl font-semibold text-deepPurple mb-2">
              6. Limitation of Liability
            </h2>
            <p>
              To the fullest extent permitted by law, Astro Siddhi and its practitioners shall not be liable for any
              direct, indirect, consequential, or incidental outcomes or decisions made by clients following a
              consultation or reading.
            </p>
          </section>

          <section>
            <h2 className="font-cormorant text-2xl font-semibold text-deepPurple mb-2">
              7. Governing Law
            </h2>
            <p>
              These Terms of Service and any dispute arising from consultations or use of this website shall be
              governed by and construed in accordance with the laws of India, under the jurisdiction of courts in
              Visakhapatnam, Andhra Pradesh.
            </p>
          </section>

          <section>
            <h2 className="font-cormorant text-2xl font-semibold text-deepPurple mb-2">
              8. Contact &amp; Legal Inquiries
            </h2>
            <p>
              For questions concerning these Terms, please reach out to us directly:
            </p>
            <ul className="mt-2 space-y-1 text-sm">
              <li>
                <strong>Practice:</strong> Sri Raghavendra Jyothishalayam (Astro Siddhi)
              </li>
              <li>
                <strong>Location:</strong> P8RQ+3P4, MVP Double Rd, Sector 10, MVP Colony, Visakhapatnam, AP 530017
              </li>
              <li>
                <strong>Phone:</strong>{" "}
                <a href="tel:+919652412221" className="text-gold hover:underline">
                  +91 96524 12221
                </a>
              </li>
              <li>
                <strong>Email:</strong>{" "}
                <a href="mailto:info@astrosiddi.com" className="text-gold hover:underline">
                  info@astrosiddi.com
                </a>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
