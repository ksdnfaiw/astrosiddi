import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: { canonical: '/services/kundali-matching' },
  title: "Kundali Matching Online | Vedic Astrology Compatibility",
  description: "Expert Kundali matching online. Scientifically verified compatibility analysis for marriage by a 25-year veteran Vedic astrologer.",
};

export default function KundaliMatching() {
  return (
    <div className="flex flex-col min-h-screen bg-ivory text-midnight">
      <section className="bg-deepPurple text-ivory py-24 border-b border-gold/20 text-center">
        <h1 className="font-cinzel text-5xl font-bold mb-6 text-gold">Kundali Matching Online</h1>
        <p className="text-xl opacity-80 max-w-2xl mx-auto">Scientifically verified compatibility analysis for marriage.</p>
      </section>
      <section className="py-24 max-w-3xl mx-auto px-4 prose prose-lg">
        <h2>What is Kundali Matching?</h2>
        <p>Kundali matching, or horoscope matching, is a deep soul-level match assessment. Beyond just Gun Milan, we analyze the 8-fold compatibility test (Ashtakoot Guna Milan) to ensure a harmonious, prosperous, and lasting marriage.</p>
        
        <h2>What to Expect in a Session</h2>
        <p>With over 25 years of experience and 15,000+ clients served, our veteran-led practice provides deep insights into marital compatibility, potential challenges, and practical remedies to overcome doshas (like Manglik Dosha).</p>
        
        <div className="mt-12 bg-deepPurple text-ivory p-8 rounded-lg text-center">
          <h3 className="text-gold font-cinzel text-2xl mb-4">Ready for Cosmic Clarity?</h3>
          <p className="mb-6">Book your online Kundali Matching consultation today.</p>
          <Link href="/contact" className="px-8 py-3 bg-gold text-midnight font-bold rounded hover:bg-saffron transition-all">Book Now</Link>
        </div>

        <h3 className="mt-12">Frequently Asked Questions</h3>
        <dl>
          <dt className="font-bold mt-4">Is online Kundali matching as accurate as in-person?</dt>
          <dd>Yes, the mathematical precision of the birth charts remains identical, and our deep analysis is fully delivered via video consultation.</dd>
          <dt className="font-bold mt-4">What details are required?</dt>
          <dd>We require the exact date, time, and place of birth for both prospective partners.</dd>
        </dl>
      </section>
    </div>
  );
}
