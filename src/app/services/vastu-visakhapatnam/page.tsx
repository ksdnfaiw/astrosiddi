import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best Vastu Consultant in Visakhapatnam | Astro Siddhi",
  description: "Consult the best Vastu consultant in Visakhapatnam. Align your home or office with the five elements for harmony, health, and prosperity.",
};

export default function VastuConsultation() {
  return (
    <div className="flex flex-col min-h-screen bg-ivory text-midnight">
      <section className="bg-deepPurple text-ivory py-24 border-b border-gold/20 text-center">
        <h1 className="font-cinzel text-5xl font-bold mb-6 text-gold">Vastu Consultant in Visakhapatnam</h1>
        <p className="text-xl opacity-80 max-w-2xl mx-auto">Align your space with the five elements for harmony and prosperity.</p>
      </section>
      <section className="py-24 max-w-3xl mx-auto px-4 prose prose-lg">
        <h2>What is Vastu Shastra?</h2>
        <p>Vastu Shastra is the ancient Indian science of architecture and spaces. As the leading Vastu consultant in Visakhapatnam, we help you align your home or office with cosmic energies to promote health, wealth, and spiritual peace.</p>
        
        <h2>What to Expect in a Session</h2>
        <p>With 25+ years of experience, we provide practical, non-destructive Vastu corrections. We don't recommend heavy demolitions; instead, we focus on elemental balancing, color therapy, and energetic shifts that yield rapid results.</p>
        
        <div className="mt-12 bg-deepPurple text-ivory p-8 rounded-lg text-center">
          <h3 className="text-gold font-cinzel text-2xl mb-4">Transform Your Space Today</h3>
          <p className="mb-6">Book an on-site or online Vastu consultation.</p>
          <Link href="/contact" className="px-8 py-3 bg-gold text-midnight font-bold rounded hover:bg-saffron transition-all">Book Now</Link>
        </div>

        <h3 className="mt-12">Frequently Asked Questions</h3>
        <dl>
          <dt className="font-bold mt-4">Do I have to break walls for Vastu correction?</dt>
          <dd>No. Our 25 years of expertise allow us to provide effective remedies using mirrors, colors, and elemental balancing without structural demolition.</dd>
          <dt className="font-bold mt-4">Do you visit sites in Visakhapatnam?</dt>
          <dd>Yes, we offer both in-person site visits across Visakhapatnam and online consultations based on your floor plan.</dd>
        </dl>
      </section>
    </div>
  );
}
