"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "@/contexts/useTranslation";
import { Testimonials } from "@/components/sections/Testimonials";
import { Reveal } from "@/components/ui/Reveal";
import { Users, Award, Smile, CheckCircle, ChevronRight, Sparkles } from "lucide-react";

export default function About() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col min-h-screen bg-ivory text-midnight">
      {/* HERO (renders immediately: LCP) */}
      <section className="relative bg-midnight text-ivory py-24 sm:py-32 border-b border-gold/10 overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-cover bg-center opacity-10 mix-blend-luminosity"
          style={{ backgroundImage: "url('/images/texture-poster.webp')" }}
        ></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-gold/50"></div>
            <span className="text-gold font-bold tracking-[0.2em] uppercase text-sm flex items-center gap-2">
              <Sparkles className="w-4 h-4" aria-hidden="true" /> About Us
            </span>
            <div className="w-12 h-px bg-gold/50"></div>
          </div>
          <h1 className="font-cinzel text-4xl sm:text-6xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-ivory via-gold to-ivory">
            The Soul Behind the Stars
          </h1>
          <p className="text-lg md:text-2xl opacity-80 font-medium max-w-3xl mx-auto leading-relaxed">
            Visakhapatnam&apos;s trusted Vedic astrologer, with over 25 years of dedicated practice rooted in the sacred traditions of South India.
          </p>
        </div>
      </section>

      {/* BIO + PHOTO */}
      <section className="py-20 sm:py-32 bg-ivory text-midnight relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24 sm:mb-32">
            <Reveal direction="left" className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gold/10 bg-midnight">
                <Image
                  src="/images/sri-raghavendra-banner-te.webp"
                  alt="Sri Raghavendra Siddhanti Garu - Telugu poster of Sri Raghavendra Jyothishalayam, Visakhapatnam"
                  width={1600}
                  height={1083}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="w-full h-auto"
                />
              </div>
            </Reveal>

            <Reveal direction="right">
              <h2 className="font-cinzel text-3xl sm:text-5xl font-bold mb-8 text-midnight">Our Story</h2>
              <div className="text-midnight/80 text-base sm:text-xl leading-relaxed space-y-6">
                <p>
                  Astro Siddhi was born from a profound calling — not a commercial ambition. The founder was initiated into Vedic Jyotish Shastra at a young age under the guidance of a renowned guru from Andhra Pradesh, inheriting a tradition that traces its roots to the Brihat Parashara Hora Shastra — the foundational text of Vedic astrology.
                </p>
                <p>
                  For over 25 years, thousands of clients across Visakhapatnam and Hyderabad have walked in with uncertainty about their marriages, careers, health challenges, and spiritual blockages — and walked out with clarity, practical remedies, and renewed hope.
                </p>
                <blockquote className="bg-gold/10 border-l-4 border-gold p-6 rounded-r-lg">
                  <p className="font-semibold text-midnight italic m-0">
                    &ldquo;Astro Siddhi is built on one truth: the stars do not control your fate — they illuminate the path. You choose the direction.&rdquo;
                  </p>
                </blockquote>
              </div>
            </Reveal>
          </div>

          {/* EXPERIENCE HIGHLIGHTS */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center border-t border-b border-gold/20 py-14">
            {[
              { id: "clients", icon: Users },
              { id: "exp", icon: Award },
              { id: "sat", icon: Smile },
              { id: "spec", icon: CheckCircle },
            ].map((item, idx) => (
              <Reveal key={item.id} delay={idx * 80} className="flex flex-col items-center">
                <item.icon className="w-8 h-8 text-gold mb-4" aria-hidden="true" />
                <p className="font-cinzel text-3xl md:text-5xl font-bold text-midnight mb-2">{t(`stats.${item.id}`)}</p>
                <p className="text-xs sm:text-sm uppercase tracking-widest text-midnight/60 font-medium">{t(`stats.${item.id}.label`)}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      {/* CTA */}
      <section className="py-20 sm:py-32 bg-ivory text-center relative overflow-hidden">
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <h2 className="font-cinzel text-3xl sm:text-5xl font-bold mb-8 text-midnight">Ready to Find Your Clarity?</h2>
          <p className="text-lg sm:text-xl text-midnight/70 mb-12">Take the first step towards unlocking your true potential.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center px-10 py-4 bg-gold hover:bg-saffron text-midnight font-bold rounded-full shadow-[0_0_30px_rgba(245,166,35,0.3)] transition-all duration-300 text-sm uppercase tracking-widest"
            >
              {t("nav.book")}
              <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </Link>
            <Link href="/horoscope" className="text-sm font-bold uppercase tracking-widest border-b-2 border-gold pb-1 hover:text-saffron">
              Explore Rashi Horoscopes
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
