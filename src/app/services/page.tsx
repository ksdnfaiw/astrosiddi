"use client";

import React from "react";
import Link from "next/link";
import { useTranslation } from "@/contexts/useTranslation";

export default function Services() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col min-h-screen bg-ivory text-midnight">
      {/* HERO */}
      <section className="bg-deepPurple text-ivory py-24 border-b border-gold/20 text-center">
        <h1 className="font-cinzel text-5xl font-bold mb-6 text-gold">Services Aligned with the Stars</h1>
        <p className="text-xl opacity-80 max-w-2xl mx-auto">From birth chart analysis to Vastu consultations — comprehensive Vedic guidance for every area of life.</p>
      </section>

      {/* SERVICES LIST */}
      <section className="py-24 max-w-5xl mx-auto px-4">
        <div className="space-y-12">
          {[
            { num: 1, path: "/contact" },
            { num: 2, path: "/services/kundali-matching" },
            { num: 3, path: "/services/career-astrology" },
            { num: 4, path: "/contact" },
            { num: 5, path: "/services/vastu-visakhapatnam" },
            { num: 6, path: "/contact" }
          ].map((service) => (
            <Link href={service.path} key={service.num} className="bg-white p-8 rounded-lg shadow-sm border border-gold/10 hover:border-gold/50 transition-colors block">
              <h2 className="font-cinzel text-3xl font-bold text-gold mb-3">{t(`services.card${service.num}.title` as any)}</h2>
              <p className="text-lg leading-relaxed text-midnight/80">{t(`services.card${service.num}.desc` as any)}</p>
            </Link>
          ))}
        </div>

        <div className="mt-20 text-center bg-deepPurple text-ivory p-12 rounded-lg">
          <h2 className="font-cinzel text-3xl font-bold mb-4 text-gold">Not Sure Which Service You Need?</h2>
          <p className="mb-8 opacity-80">Book a free 15-minute introductory call and we'll guide you to the right consultation.</p>
          <Link href="/contact" className="px-8 py-4 bg-gold hover:bg-saffron text-midnight font-bold rounded shadow-lg transition-all text-lg">
            Book Free Discovery Call →
          </Link>
        </div>
      </section>
    </div>
  );
}
