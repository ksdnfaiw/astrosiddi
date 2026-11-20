"use client";

import React from "react";
import Link from "next/link";
import { useTranslation } from "@/contexts/useTranslation";
import { Testimonials } from "@/components/sections/Testimonials";
import { Reveal } from "@/components/ui/Reveal";
import { Eye, Heart, Home, Briefcase, Sparkles, Flame, ChevronRight, Star } from "lucide-react";

const SERVICE_ITEMS = [
  { icon: Eye, href: "/horoscope" },
  { icon: Heart, href: "/services/kundali-matching" },
  { icon: Briefcase, href: "/services/career-astrology" },
  { icon: Heart, href: "/contact" },
  { icon: Home, href: "/services/vastu-visakhapatnam" },
  { icon: Flame, href: "/contact" },
];

/** Services page body. The hero renders immediately (no entrance animation) so it can be the LCP element. */
export function ServicesContent({ faq }: { faq?: React.ReactNode }) {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col min-h-screen bg-ivory text-midnight">
      {/* HERO */}
      <section className="relative bg-midnight text-ivory py-24 sm:py-32 border-b border-gold/10 overflow-hidden text-center">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-cover bg-center opacity-10 mix-blend-luminosity"
          style={{ backgroundImage: "url('/images/texture-poster.webp')" }}
        ></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-gold/50"></div>
            <span className="text-gold font-bold tracking-[0.2em] uppercase text-sm flex items-center gap-2">
              <Star className="w-4 h-4" aria-hidden="true" /> Our Offerings
            </span>
            <div className="w-12 h-px bg-gold/50"></div>
          </div>
          <h1 className="font-cinzel text-4xl sm:text-6xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-ivory via-gold to-ivory">
            Services Aligned with the Stars
          </h1>
          <p className="text-lg md:text-2xl opacity-80 font-medium max-w-2xl mx-auto leading-relaxed">
            From birth chart analysis to Vastu consultations — comprehensive Vedic guidance for every area of life.
          </p>
        </div>
      </section>

      {/* SERVICES LIST */}
      <section className="py-20 sm:py-28 max-w-6xl mx-auto px-4 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
          {SERVICE_ITEMS.map((item, idx) => {
            const num = idx + 1;
            const Icon = item.icon;
            return (
              <Reveal key={num} delay={(idx % 2) * 100} className="h-full">
                <Link
                  href={item.href}
                  className="bg-white p-8 sm:p-10 rounded-2xl shadow-lg border border-gold/10 flex flex-col sm:flex-row gap-6 sm:gap-8 items-start group hover:border-gold/40 hover:shadow-xl transition h-full"
                >
                  <div className="w-16 h-16 rounded-full bg-gold/10 text-gold flex items-center justify-center shrink-0 group-hover:bg-gold group-hover:text-midnight transition-colors duration-500">
                    <Icon className="w-8 h-8" strokeWidth={1.5} aria-hidden="true" />
                  </div>
                  <div>
                    <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-midnight mb-4 group-hover:text-saffron transition-colors">
                      {t(`services.card${num}.title`)}
                    </h2>
                    <p className="text-base sm:text-lg leading-relaxed text-midnight/70">{t(`services.card${num}.desc`)}</p>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>

      <Testimonials />

      {faq}

      {/* CTA */}
      <section className="py-20 sm:py-28 max-w-5xl mx-auto px-4 w-full">
        <Reveal direction="scale">
          <div className="text-center bg-midnight text-ivory p-10 md:p-16 rounded-3xl relative overflow-hidden shadow-2xl border border-gold/20">
            <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-transparent"></div>
            <div className="relative z-10">
              <div className="flex justify-center mb-6">
                <Sparkles className="w-10 h-10 text-gold" aria-hidden="true" />
              </div>
              <h2 className="font-cinzel text-3xl sm:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-ivory to-gold">
                Not Sure Which Service You Need?
              </h2>
              <p className="mb-10 text-lg sm:text-xl opacity-80 font-medium max-w-2xl mx-auto">
                Book a free 15-minute introductory call and we&apos;ll guide you to the right consultation.
              </p>
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center px-10 py-4 bg-gold hover:bg-saffron text-midnight font-bold rounded-full shadow-[0_0_30px_rgba(245,166,35,0.4)] transition-all duration-300 text-sm uppercase tracking-widest"
              >
                Book Free Discovery Call
                <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
