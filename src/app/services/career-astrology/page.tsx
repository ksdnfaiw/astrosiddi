import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Career Astrology Telugu | Job & Business Timing Predictions",
  description: "Accurate career astrology in Telugu and English. Discover your best career path, job timing, and business success with our 25-year experienced astrologer.",
};

export default function CareerAstrology() {
  return (
    <div className="flex flex-col min-h-screen bg-ivory text-midnight">
      <section className="bg-deepPurple text-ivory py-24 border-b border-gold/20 text-center">
        <h1 className="font-cinzel text-5xl font-bold mb-6 text-gold">Career Astrology & Guidance</h1>
        <p className="text-xl opacity-80 max-w-2xl mx-auto">Discover your true calling, auspicious timing for job changes, and business growth.</p>
      </section>
      <section className="py-24 max-w-3xl mx-auto px-4 prose prose-lg">
        <h2>What is Career Astrology?</h2>
        <p>Your birth chart holds the blueprint to your professional success. By analyzing the 10th house, planetary dashas, and transits, career astrology helps identify your natural talents, optimal career paths, and the exact timing for promotions or business ventures.</p>
        
        <h2>What to Expect in a Session</h2>
        <p>During our session (available in Telugu and English), our 25-year veteran astrologer will decode your professional timeline. You will receive actionable advice on whether to pursue business or service, when to change jobs, and remedies to overcome professional stagnation.</p>
        
        <div className="mt-12 bg-deepPurple text-ivory p-8 rounded-lg text-center">
          <h3 className="text-gold font-cinzel text-2xl mb-4">Unlock Your Professional Potential</h3>
          <p className="mb-6">Book your career and business astrology reading today.</p>
          <Link href="/contact" className="px-8 py-3 bg-gold text-midnight font-bold rounded hover:bg-saffron transition-all">Book Now</Link>
        </div>

        <h3 className="mt-12">Frequently Asked Questions</h3>
        <dl>
          <dt className="font-bold mt-4">Can astrology predict when I will get a job?</dt>
          <dd>Yes, by analyzing your Mahadasha and Antardasha, we can accurately pinpoint favorable periods for securing employment.</dd>
          <dt className="font-bold mt-4">Do you provide consultations in Telugu?</dt>
          <dd>Absolutely. We provide comprehensive career astrology consultations in both Telugu and English for your comfort.</dd>
        </dl>
      </section>
    </div>
  );
}
