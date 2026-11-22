"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { Sparkles, ArrowRight, Phone, MapPin, Globe, Star, Award, Languages, Maximize2, Compass } from "lucide-react";
import { useTranslation } from "@/contexts/useTranslation";

// Modal (and its large banner images) is only fetched when the visitor opens it.
const BannerModal = dynamic(() => import("./BannerModal"), { ssr: false });

const TRUST_ITEMS = [
  { icon: Award, label: "25+ Yrs Wisdom", sub: "Veteran Practice" },
  { icon: Star, label: "15,000+ Clients", sub: "Trusted Worldwide" },
  { icon: Languages, label: "Telugu & English", sub: "Bilingual Guidance" },
  { icon: Globe, label: "Online & In-Person", sub: "Vizag & Global" },
];

/**
 * Home hero. Performance notes: everything above the fold renders immediately (no entrance animation that
 * would delay LCP), the decorative layers are static CSS/WebP (no rotating 1 MB wheel, no scroll-linked
 * parallax, no 500px blur filters, no pulsing star DOM), and the large zodiac wheel is skipped on mobile.
 */
export function HeroSection() {
  const { t, language } = useTranslation();
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section
      id="hero-section"
      className="relative min-h-[88vh] lg:min-h-[92vh] bg-midnight text-ivory overflow-hidden flex flex-col justify-center pt-12 pb-16 sm:pb-20 lg:pb-24"
    >
      {/* Static cosmic background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 select-none" aria-hidden="true">
        <div className="absolute inset-0 bg-[#070514]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_75%_25%,_rgba(245,166,35,0.14),_rgba(26,16,53,0.65)_55%,_#070514_100%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,_rgba(255,107,0,0.08),_transparent_60%)]"></div>

        {/* Coastal horizon */}
        <div className="absolute bottom-0 left-0 right-0 h-[260px] sm:h-[360px] lg:h-[420px]">
          <Image
            src="/images/hero-coastal.webp"
            alt="Visakhapatnam coastal night temple skyline"
            width={1280}
            height={714}
            sizes="100vw"
            className="w-full h-full object-cover object-bottom opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/50 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-midnight/80 via-transparent to-midnight/80"></div>
        </div>

        {/* Jupiter orb (small WebP) */}
        <div className="absolute top-4 sm:top-8 right-4 sm:right-10 lg:right-16 w-16 h-16 sm:w-28 sm:h-28 lg:w-36 lg:h-36">
          <Image
            src="/images/jupiter.webp"
            alt="Celestial Jupiter planet orb"
            width={288}
            height={288}
            sizes="(max-width: 640px) 64px, 144px"
            className="w-full h-full rounded-full object-cover opacity-80 ring-1 ring-gold/30 shadow-[0_0_40px_rgba(245,166,35,0.25)]"
          />
        </div>

        {/* Stardust texture */}
        <div className="absolute inset-0 bg-[radial-gradient(#F5A623_0.75px,transparent_1px)] [background-size:24px_24px] opacity-15"></div>

        {/* Zodiac wheel: static, desktop only */}
        <div className="hidden md:block absolute top-[48%] md:-right-20 lg:right-[-5%] xl:right-0 -translate-y-1/2 w-[560px] h-[560px] lg:w-[700px] lg:h-[700px] xl:w-[780px] xl:h-[780px]">
          <Image
            src="/images/zodiac-wheel.webp"
            alt="Vedic Astrological Zodiac Wheel"
            width={640}
            height={640}
            sizes="(max-width: 1280px) 700px, 780px"
            className="w-full h-full rounded-full object-cover opacity-20 shadow-[inset_0_0_70px_rgba(245,166,35,0.3)]"
          />
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-center">
          {/* Left column */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-midnight border border-gold/35 mb-5 sm:mb-6">
              <Sparkles className="w-3.5 h-3.5 text-gold" aria-hidden="true" />
              <span className="text-[0.68rem] sm:text-xs font-semibold tracking-[0.2em] uppercase text-gold">{t("hero.badge")}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] xl:text-[3.65rem] font-bold tracking-tight text-ivory leading-[1.14] mb-5 sm:mb-6">
              Meet the Best Astrologer in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5A623] via-[#FFE29F] to-[#FF8C00]">
                Visakhapatnam
              </span>
            </h1>

            <p className="text-base sm:text-lg text-ivory/80 leading-relaxed max-w-xl mb-7 sm:mb-9">{t("hero.sub")}</p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 w-full sm:w-auto mb-8 sm:mb-10">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 sm:px-8 sm:py-4 rounded-full bg-gradient-to-r from-gold via-saffron to-gold hover:brightness-105 text-midnight font-bold text-sm sm:text-base uppercase tracking-wider shadow-[0_0_25px_rgba(245,166,35,0.35)] transition-all duration-300"
              >
                <Compass className="w-4 h-4 sm:w-5 sm:h-5 text-midnight group-hover:rotate-45 transition-transform duration-300 flex-shrink-0" aria-hidden="true" />
                <span>{t("hero.cta.primary")}</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-midnight group-hover:translate-x-1 transition-transform duration-300 flex-shrink-0" aria-hidden="true" />
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center justify-center px-7 py-3.5 sm:px-8 sm:py-4 rounded-full bg-midnight hover:bg-gold/10 text-ivory hover:text-gold border border-gold/40 hover:border-gold font-bold text-sm sm:text-base uppercase tracking-wider transition-all duration-300"
              >
                <span>{t("hero.cta.secondary")}</span>
              </Link>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 w-full pt-6 border-t border-gold/15">
              {TRUST_ITEMS.map((item) => (
                <div key={item.label} className="flex items-center gap-2.5 p-2.5 rounded-xl bg-midnight/70 border border-gold/15">
                  <item.icon className="w-4 h-4 text-gold flex-shrink-0" aria-hidden="true" />
                  <div className="flex flex-col min-w-0">
                    <span className="text-xs font-semibold text-ivory tracking-wide leading-tight truncate">{item.label}</span>
                    <span className="text-[0.65rem] text-ivory/60 leading-tight truncate">{item.sub}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right column: profile card */}
          <div className="lg:col-span-5 flex justify-center w-full mt-2 lg:mt-0">
            <div className="w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[400px] xl:max-w-[420px] mx-auto lg:ml-auto">
              <div className="relative rounded-2xl overflow-hidden bg-midnight border border-gold/35 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
                <div className="flex items-center justify-between px-4 py-2.5 bg-gradient-to-r from-midnight via-[#180E30] to-midnight border-b border-gold/20 text-xs">
                  <div className="flex items-center gap-2 text-gold font-medium">
                    <Sparkles className="w-3.5 h-3.5 text-gold flex-shrink-0" aria-hidden="true" />
                    <span className="text-[0.72rem] sm:text-xs uppercase tracking-wider font-semibold text-gold">Sri Raghavendra Siddhanti Garu</span>
                  </div>
                  <span className="text-[0.65rem] uppercase tracking-widest text-gold/80 font-bold px-2 py-0.5 rounded bg-gold/10 border border-gold/25">25+ Yrs</span>
                </div>

                <div className="relative aspect-[2/3] w-full bg-[#120B26] select-none overflow-hidden">
                  <Image
                    src="/images/profile.webp"
                    alt="Sri Raghavendra Siddhanti Garu — Chief Vedic Astrologer at Astro Siddhi Visakhapatnam"
                    width={840}
                    height={1260}
                    priority
                    sizes="(max-width: 768px) 340px, (max-width: 1024px) 380px, 420px"
                    className="w-full h-full object-contain object-center"
                  />
                </div>

                <div className="grid grid-cols-3 divide-x divide-gold/15 bg-gradient-to-r from-[#140D2B] via-midnight to-[#140D2B] border-t border-gold/20 text-xs">
                  <a
                    href="tel:9652412221"
                    className="flex items-center justify-center gap-1.5 py-3 px-2 text-ivory hover:text-gold hover:bg-gold/10 transition-colors text-center"
                    aria-label="Call 9652412221"
                  >
                    <Phone className="w-3.5 h-3.5 text-gold" aria-hidden="true" />
                    <span className="text-[0.72rem] font-bold tracking-wider">9652412221</span>
                  </a>
                  <a
                    href="https://maps.google.com/?q=MVP+Colony+Visakhapatnam"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 py-3 px-2 text-ivory hover:text-gold hover:bg-gold/10 transition-colors text-center"
                    aria-label="Visit MVP Colony Visakhapatnam location"
                  >
                    <MapPin className="w-3.5 h-3.5 text-gold" aria-hidden="true" />
                    <span className="text-[0.72rem] font-semibold tracking-wider">MVP Colony</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => setModalOpen(true)}
                    className="flex items-center justify-center gap-1.5 py-3 px-2 text-gold hover:text-amber-300 hover:bg-gold/10 transition-colors text-center font-bold"
                    aria-label="View Details: Sri Raghavendra banner and credentials"
                  >
                    <Maximize2 className="w-3.5 h-3.5" aria-hidden="true" />
                    <span className="text-[0.72rem] tracking-wider uppercase font-semibold">View Details</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {modalOpen && <BannerModal initialLang={language === "te" ? "te" : "en"} onClose={() => setModalOpen(false)} />}
    </section>
  );
}
