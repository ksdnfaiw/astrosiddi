import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Astro Siddhi's astrology consultation services in Visakhapatnam and Hyderabad.",
};

export default function PrivacyPage() {
  return (
    <div className="bg-ivory">
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
            <h2 className="font-cormorant text-2xl font-semibold text-deepPurple mb-2">5. Data Retention</h2>
            <p>
              We retain your information only as long as necessary to provide our services and respond to your
              enquiries. You may request that we delete your information at any time by contacting us.

            </p>
          </section>

          <section>
            <h2 className="font-cormorant text-2xl font-semibold text-deepPurple mb-2">6. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or your personal information, please contact
              us at{" "}
              <a href="mailto:contact@astrosiddhi.com" className="text-gold underline">
                contact@astrosiddhi.com
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
