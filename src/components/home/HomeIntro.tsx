"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "@/contexts/useTranslation";
import { HeroSection } from "@/components/sections/HeroSection";
import { Reveal } from "@/components/ui/Reveal";
import { Star, ChevronRight, CheckCircle2, Sparkles, ArrowRight } from "lucide-react";

const SERVICES = [
  { title: "Kundali Matching", desc: "Marriage Compatibility", href: "/services/kundali-matching" },
  { title: "Love & Relationship", desc: "Solutions for relationship issues", href: "/services" },
  { title: "Planetary Dosha Remedies", desc: "Effective Pariharam", href: "/services" },
  { title: "Vashikaran", desc: "Attraction & Harmony", href: "/services" },
  { title: "House & Property", desc: "Vastu Solutions", href: "/services/vastu-visakhapatnam" },
  { title: "Health & Wellness", desc: "Guidance for well-being", href: "/services" },
  { title: "Career & Business", desc: "Astrological Guidance", href: "/services/career-astrology" },
  { title: "Foreign Travel", desc: "Settled Abroad Yogas", href: "/services" },
];

/** Everything on the home page from the hero down to "How it works" (server-rendered markup, hydrated for i18n). */
export function HomeIntro() {
  const { t } = useTranslation();

  return (
    <>
      <HeroSection />

      {/* MARQUEE */}
      <div
        aria-hidden="true"
        className="marquee-container group bg-gradient-to-r from-gold via-saffron to-gold text-midnight py-4 overflow-hidden whitespace-nowrap shadow-inner relative z-20 select-none"
      >
        <div className="marquee-track animate-marquee inline-flex items-center gap-8 font-semibold tracking-[0.2em] uppercase text-sm">
          {[...Array(6)].map((_, i) => (
            <React.Fragment key={i}>
              <span>{t("marquee.text")}</span>
              <Star className="w-4 h-4 fill-midnight/50 text-midnight/50" />
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* ABOUT TEASER */}
      <section className="py-20 sm:py-32 bg-ivory text-midnight relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <Reveal direction="left">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-px bg-gold"></div>
                <span className="text-saffron font-bold tracking-[0.2em] uppercase text-sm">{t("about.teaser.label")}</span>
              </div>
              <h2 className="font-cinzel text-3xl sm:text-5xl lg:text-6xl font-bold mb-8 leading-tight text-midnight">{t("about.teaser.h2")}</h2>
              <p className="text-base sm:text-xl leading-relaxed mb-10 text-midnight/70 font-medium">{t("about.teaser.body")}</p>

              <ul className="space-y-4 mb-12">
                {["Vedic Astrology Specialist", "Vastu Shastra Consultant", "Kundali Matching Expert"].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gold" aria-hidden="true" />
                    <span className="font-medium tracking-wide text-midnight/80">{item}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/about"
                className="group inline-flex items-center gap-3 text-midnight font-bold border-b-2 border-gold pb-1 hover:text-saffron hover:border-saffron transition-all text-sm uppercase tracking-widest"
              >
                {t("about.teaser.link")}
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Link>
            </Reveal>

            <Reveal direction="right" className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gold/10 bg-midnight">
                <Image
                  src="/images/sri-raghavendra-banner-en.webp"
                  alt="Sri Raghavendra Siddhanti Garu - Vedic astrologer in Visakhapatnam, Astro Siddhi poster"
                  width={1600}
                  height={1083}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/20 to-transparent opacity-80"></div>
                <div className="absolute bottom-0 left-0 w-full p-6 sm:p-10 text-ivory">
                  <div className="flex items-end gap-4 sm:gap-6">
                    <div className="bg-gold text-midnight p-3 sm:p-4 rounded-xl shadow-lg">
                      <p className="font-cinzel text-2xl sm:text-4xl font-bold leading-none">25+</p>
                    </div>
                    <div className="pb-2">
                      <p className="text-xs sm:text-base font-medium tracking-widest uppercase text-ivory/90">{t("stats.exp.label")}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SERVICES OVERVIEW */}
      <section className="py-20 sm:py-32 bg-deepPurple text-ivory relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center text-center mb-14 sm:mb-20">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-px bg-gold/50"></div>
              <span className="text-gold font-bold tracking-[0.2em] uppercase text-sm">{t("services.label")}</span>
              <div className="w-8 h-px bg-gold/50"></div>
            </div>
            <h2 className="font-cinzel text-3xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-ivory via-gold to-ivory">{t("services.h2")}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            {SERVICES.map((service, idx) => (
              <Reveal key={service.title} delay={(idx % 4) * 80} className="h-full">
                <Link
                  href={service.href}
                  className="group relative bg-midnight border border-gold/10 p-8 sm:p-10 rounded-2xl hover:border-gold/40 transition-colors duration-300 overflow-hidden flex flex-col h-full"
                >
                  <div className="w-12 h-12 bg-gold/10 text-gold rounded-full flex items-center justify-center mb-8 border border-gold/20 group-hover:bg-gold group-hover:text-midnight transition-colors duration-300">
                    <Sparkles className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <h3 className="font-cinzel text-xl font-bold mb-4 text-ivory group-hover:text-gold transition-colors duration-300">{service.title}</h3>
                  <p className="text-ivory/60 leading-relaxed text-base mb-8 flex-grow">{service.desc}</p>
                  <span className="mt-auto flex items-center gap-2 text-gold text-sm font-semibold tracking-widest uppercase">
                    <span>Explore</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/services"
              className="group inline-flex items-center justify-center px-10 py-4 bg-transparent border-2 border-gold text-gold hover:bg-gold hover:text-midnight font-bold rounded-full transition-all duration-300 text-sm uppercase tracking-[0.2em]"
            >
              {t("services.cta")}
              <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 sm:py-32 bg-ivory text-midnight">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 sm:mb-24">
            <h2 className="font-cinzel text-3xl sm:text-5xl font-bold">{t("how.h2")}</h2>
            <div className="w-24 h-1 bg-gold mx-auto mt-8 rounded-full"></div>
          </div>

          <ol className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 relative">
            <div className="hidden md:block absolute top-10 left-[10%] right-[10%] h-0.5 bg-gold/20 -z-10"></div>
            {[1, 2, 3, 4].map((step) => (
              <li key={step}>
                <Reveal delay={step * 80} className="flex flex-col items-center text-center group">
                  <div className="w-20 h-20 rounded-full bg-ivory border-4 border-gold text-midnight flex items-center justify-center font-cinzel text-3xl font-bold shadow-xl mb-8 group-hover:bg-gold group-hover:text-ivory transition-colors duration-300">
                    {step}
                  </div>
                  <h3 className="font-cinzel font-bold text-xl mb-4 text-midnight">{t(`how.step${step}.title`)}</h3>
                  <p className="text-midnight/70 text-base px-2">{t(`how.step${step}.desc`)}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
