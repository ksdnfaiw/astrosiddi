"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { 
  Sparkles, 
  ArrowRight, 
  Phone, 
  MapPin, 
  Globe, 
  Star, 
  Award, 
  Languages, 
  Maximize2, 
  X,
  Compass
} from "lucide-react";
import { useTranslation } from "@/contexts/useTranslation";

// Deterministic subtle star data (prevents hydration mismatch, gentle opacity pulse)
const STATIC_STARS = [
  { top: "10%", left: "14%", size: 2, delay: 0.2, duration: 3.5 },
  { top: "16%", left: "32%", size: 1.5, delay: 1.1, duration: 4.2 },
  { top: "8%", left: "64%", size: 2.5, delay: 0.8, duration: 3.8 },
  { top: "24%", left: "84%", size: 1.5, delay: 2.0, duration: 4.5 },
  { top: "20%", left: "46%", size: 2, delay: 1.4, duration: 4.0 },
  { top: "34%", left: "10%", size: 1.5, delay: 0.5, duration: 3.2 },
  { top: "40%", left: "28%", size: 2, delay: 1.8, duration: 4.1 },
  { top: "28%", left: "94%", size: 1.5, delay: 1.6, duration: 3.6 },
  { top: "48%", left: "74%", size: 2, delay: 0.9, duration: 4.4 },
  { top: "54%", left: "16%", size: 1.5, delay: 2.2, duration: 3.7 },
  { top: "62%", left: "36%", size: 2, delay: 1.2, duration: 3.9 },
  { top: "66%", left: "86%", size: 2.5, delay: 0.4, duration: 4.3 },
  { top: "74%", left: "26%", size: 1.5, delay: 2.1, duration: 3.8 },
  { top: "80%", left: "60%", size: 2, delay: 1.5, duration: 4.0 },
  { top: "86%", left: "82%", size: 1.5, delay: 0.7, duration: 4.2 },
];

export function HeroSection() {
  const { t, language } = useTranslation();
  const shouldReduceMotion = useReducedMotion();
  const [modalOpen, setModalOpen] = useState(false);
  const [activeBannerLang, setActiveBannerLang] = useState<"en" | "te">(
    language === "te" ? "te" : "en"
  );

  // Subtle scroll-based parallax
  const { scrollY } = useScroll();
  const zodiacParallaxY = useTransform(scrollY, [0, 800], [0, 45]);
  const glowOpacity = useTransform(scrollY, [0, 600], [1, 0.45]);

  // Astrologer profile image asset (strictly preserved)
  const profileImageSrc = "/profileImage.jpeg";

  // Official Sri Raghavendra banner images for modal inspection
  const modalBannerSrc =
    activeBannerLang === "te"
      ? "/sri-raghavendra-banner-te.jpg"
      : "/sri-raghavendra-banner-en.jpg";

  // Headline words for staggered cinematic reveal
  const headlineWords = [
    { text: "Meet", highlight: false },
    { text: "the", highlight: false },
    { text: "Best", highlight: false },
    { text: "Astrologer", highlight: false },
    { text: "in", highlight: false },
    { text: "Visakhapatnam", highlight: true },
  ];

  return (
    <section id="hero-section" className="relative min-h-[88vh] lg:min-h-[92vh] bg-midnight text-ivory overflow-hidden flex flex-col justify-center pt-12 pb-16 sm:pt-12 sm:pb-20 lg:pt-12 lg:pb-24">
      {/* ========================================================
          1. REFINED COSMIC BACKGROUND LAYERS
          ======================================================== */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 select-none">
        {/* Base cosmic deep gradients */}
        <div className="absolute inset-0 bg-[#070514]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_75%_25%,_rgba(245,166,35,0.11),_rgba(26,16,53,0.65)_55%,_#070514_100%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,_rgba(255,107,0,0.06),_transparent_60%)]"></div>

        {/* Soft golden and deep purple nebula ambient glow (dims subtly on scroll) */}
        <motion.div style={{ opacity: glowOpacity }} className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 -right-32 w-[550px] h-[550px] bg-gold/10 rounded-full blur-[140px]"></div>
          <div className="absolute -bottom-20 -left-32 w-[500px] h-[500px] bg-saffron/8 rounded-full blur-[150px]"></div>
          <div className="absolute top-12 left-1/3 w-[400px] h-[400px] bg-deepPurple/35 rounded-full blur-[120px]"></div>
        </motion.div>

        {/* Bottom Horizon: Visakhapatnam illuminated temple & coastal water with golden yantra reflection */}
        <div className="absolute bottom-0 left-0 right-0 h-[320px] sm:h-[400px] lg:h-[440px] pointer-events-none z-1">
          <Image
            src="/hero-coastal-bg.jpg"
            alt="Visakhapatnam coastal night temple skyline"
            fill
            priority
            sizes="100vw"
            className="object-cover object-bottom opacity-35 mix-blend-screen"
          />
          {/* Subtle gradient fades so the coastline integrates harmoniously */}
          <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/50 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-midnight/80 via-transparent to-midnight/80"></div>
        </div>

        {/* Realistic Jupiter Celestial Sphere at Top Right (Strictly preserved) */}
        <div className="absolute top-4 sm:top-8 right-4 sm:right-10 lg:right-16 w-20 h-20 sm:w-28 sm:h-28 lg:w-36 lg:h-36 pointer-events-none z-1">
          <div className="relative w-full h-full">
            <div className="absolute inset-0 rounded-full shadow-[0_0_40px_rgba(245,166,35,0.25)]"></div>
            <Image
              src="/jupiter-planet.jpg"
              alt="Celestial Jupiter planet orb"
              fill
              sizes="(max-width: 768px) 100px, 150px"
              className="rounded-full object-cover mix-blend-screen opacity-80"
            />
            {/* Subtle golden rim light ring */}
            <div className="absolute inset-0 rounded-full ring-1 ring-gold/30"></div>
          </div>
        </div>

        {/* Golden Stardust Texture Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(#F5A623_0.75px,transparent_1px)] [background-size:24px_24px] opacity-15"></div>

        {/* ========================================================
            2. ROTATING GOLDEN VEDIC ZODIAC WHEEL (SUBTLE BACKDROP)
            ======================================================== */}
        <motion.div 
          style={{ y: zodiacParallaxY }}
          className="absolute top-[48%] -right-28 sm:-right-20 lg:right-[-5%] xl:right-[0%] -translate-y-1/2 w-[480px] h-[480px] sm:w-[620px] sm:h-[620px] lg:w-[760px] lg:h-[760px] xl:w-[840px] xl:h-[840px] pointer-events-none z-1 flex items-center justify-center"
        >
          {/* Outer elliptical faint planetary orbits */}
          <div className="absolute inset-0 rounded-full border border-gold/10 scale-110 pointer-events-none"></div>
          <div className="absolute inset-0 rounded-full border border-dashed border-gold/10 scale-125 pointer-events-none"></div>

          {/* Golden celestial orbiting node */}
          {!shouldReduceMotion && (
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 75, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 scale-110 pointer-events-none"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-gold shadow-[0_0_10px_#F5A623]"></div>
            </motion.div>
          )}

          {/* The Golden Vedic Zodiac Wheel (Toned down opacity so text is effortless to read) */}
          <motion.div
            animate={shouldReduceMotion ? { rotate: 0 } : { rotate: 360 }}
            transition={{ duration: 160, repeat: Infinity, ease: "linear" }}
            className="relative w-full h-full rounded-full opacity-22 lg:opacity-25 mix-blend-screen select-none"
          >
            <Image
              src="/vedic-zodiac-wheel.jpg"
              alt="Vedic Astrological Zodiac Wheel"
              fill
              sizes="(max-width: 768px) 480px, 840px"
              className="rounded-full object-cover"
            />
            {/* Soft inner ambient golden glow */}
            <div className="absolute inset-0 rounded-full shadow-[inset_0_0_70px_rgba(245,166,35,0.3)]"></div>
          </motion.div>
        </motion.div>

        {/* ========================================================
            3. REFINED GENTLE TWINKLING STARS
            ======================================================== */}
        <div className="absolute inset-0 pointer-events-none">
          {STATIC_STARS.map((star, idx) => (
            <div
              key={`star-${idx}`}
              className="absolute pointer-events-none"
              style={{
                top: star.top,
                left: star.left,
              }}
            >
              <div
                className={`rounded-full bg-gold/75 shadow-[0_0_6px_rgba(245,166,35,0.6)] ${
                  !shouldReduceMotion ? "animate-pulse" : ""
                }`}
                style={{
                  width: `${star.size}px`,
                  height: `${star.size}px`,
                  animationDuration: `${star.duration}s`,
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* ========================================================
          MAIN HERO CONTAINER (BALANCED TWO-COLUMN DESKTOP / CLEAN MOBILE)
          ======================================================== */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-center">
          
          {/* ========================================================
              LEFT COLUMN: HERO CONTENT & CTAs (7 COLS ON DESKTOP)
              ======================================================== */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Step 1: Gold-outlined badge */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-midnight/80 border border-gold/35 shadow-[0_0_15px_rgba(245,166,35,0.15)] backdrop-blur-md mb-5 sm:mb-6"
            >
              <Sparkles className="w-3.5 h-3.5 text-gold" />
              <span className="text-[0.68rem] sm:text-xs font-semibold tracking-[0.2em] uppercase text-gold">
                {t("hero.badge")}
              </span>
            </motion.div>

            {/* Step 2: Bold Headline with Staggered Word Reveal */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] xl:text-[3.65rem] font-bold font-poppins tracking-tight text-ivory leading-[1.14] mb-5 sm:mb-6 drop-shadow-sm">
              <span className="sr-only">Meet the Best Astrologer in Visakhapatnam</span>
              <span aria-hidden="true" className="flex flex-wrap items-baseline gap-x-3 sm:gap-x-3.5 gap-y-1">
                {headlineWords.map((word, i) => (
                  <motion.span
                    key={i}
                    initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.45,
                      delay: shouldReduceMotion ? 0 : 0.1 + i * 0.05,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className={
                      word.highlight
                        ? "text-transparent bg-clip-text bg-gradient-to-r from-[#F5A623] via-[#FFE29F] to-[#FF8C00] drop-shadow-[0_2px_15px_rgba(245,166,35,0.35)]"
                        : "text-ivory"
                    }
                  >
                    {word.text}
                  </motion.span>
                ))}
              </span>
            </h1>

            {/* Step 3: Supporting Description */}
            <motion.p
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: shouldReduceMotion ? 0 : 0.35, ease: "easeOut" }}
              className="text-base sm:text-lg text-ivory/80 leading-relaxed font-normal max-w-xl mb-7 sm:mb-9 text-pretty"
            >
              {t("hero.sub")}
            </motion.p>

            {/* Step 4: Prominent CTA Buttons */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: shouldReduceMotion ? 0 : 0.45, ease: "easeOut" }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 w-full sm:w-auto mb-8 sm:mb-10"
            >
              {/* Primary Consultation CTA */}
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center gap-2.5 px-7 py-3.5 sm:px-8 sm:py-4 rounded-full bg-gradient-to-r from-gold via-saffron to-gold hover:brightness-105 text-midnight font-bold text-sm sm:text-base uppercase tracking-wider shadow-[0_0_25px_rgba(245,166,35,0.35)] hover:shadow-[0_0_35px_rgba(245,166,35,0.55)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 overflow-hidden"
              >
                <Compass className="w-4 h-4 sm:w-5 sm:h-5 text-midnight group-hover:rotate-45 transition-transform duration-300 flex-shrink-0" />
                <span>{t("hero.cta.primary")}</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-midnight group-hover:translate-x-1 transition-transform duration-300 flex-shrink-0" />
              </Link>

              {/* Secondary View Services CTA */}
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-7 py-3.5 sm:px-8 sm:py-4 rounded-full bg-midnight/60 hover:bg-gold/10 text-ivory hover:text-gold border border-gold/40 hover:border-gold font-bold text-sm sm:text-base uppercase tracking-wider backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
              >
                <span>{t("hero.cta.secondary")}</span>
              </Link>
            </motion.div>

            {/* Step 5: Trust Indicators Row */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: shouldReduceMotion ? 0 : 0.55, ease: "easeOut" }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 w-full pt-6 border-t border-gold/15"
            >
              {[
                { icon: Award, label: "25+ Yrs Wisdom", sub: "Veteran Practice" },
                { icon: Star, label: "15,000+ Clients", sub: "Trusted Worldwide" },
                { icon: Languages, label: "Telugu & English", sub: "Bilingual Guidance" },
                { icon: Globe, label: "Online & In-Person", sub: "Vizag & Global" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2.5 p-2.5 rounded-xl bg-midnight/50 border border-gold/15 backdrop-blur-sm"
                >
                  <item.icon className="w-4 h-4 text-gold flex-shrink-0" />
                  <div className="flex flex-col min-w-0">
                    <span className="text-xs font-semibold text-ivory tracking-wide leading-tight truncate">
                      {item.label}
                    </span>
                    <span className="text-[0.65rem] text-ivory/60 leading-tight truncate">
                      {item.sub}
                    </span>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ========================================================
              RIGHT COLUMN: ASTROLOGER PROFILE CARD
              (CONTAINER ADJUSTED TO EXACT PORTRAIT 2:3 PROPORTIONS)
              ======================================================== */}
          <div className="lg:col-span-5 flex justify-center w-full mt-2 lg:mt-0">
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 25, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: shouldReduceMotion ? 0 : 0.35, ease: "easeOut" }}
              className="w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[400px] xl:max-w-[420px] mx-auto lg:ml-auto"
            >
              {/* Refined Profile Card with Subtle Gold Border and Shadow */}
              <div className="relative rounded-2xl overflow-hidden bg-midnight/95 border border-gold/35 shadow-[0_20px_50px_rgba(0,0,0,0.8),_0_0_25px_rgba(245,166,35,0.12)] hover:border-gold/55 transition-all duration-300 group">
                
                {/* Card Header Strip */}
                <div className="flex items-center justify-between px-4 py-2.5 bg-gradient-to-r from-midnight via-[#180E30] to-midnight border-b border-gold/20 text-xs">
                  <div className="flex items-center gap-2 text-gold font-medium">
                    <Sparkles className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                    <span className="text-[0.72rem] sm:text-xs uppercase tracking-wider font-semibold text-gold">
                      Sri Raghavendra Siddhanti Garu
                    </span>
                  </div>

                  <span className="text-[0.65rem] uppercase tracking-widest text-gold/80 font-bold px-2 py-0.5 rounded bg-gold/10 border border-gold/25">
                    25+ Yrs
                  </span>
                </div>

                {/* Profile Portrait Container (aspect-[2/3] matches exact 1000x1500 proportions, zero empty space) */}
                <div className="relative aspect-[2/3] w-full bg-[#120B26] select-none overflow-hidden">
                  <Image
                    src={profileImageSrc}
                    alt="Sri Raghavendra Siddhanti Garu — Chief Vedic Astrologer at Astro Siddhi Visakhapatnam"
                    fill
                    priority
                    sizes="(max-width: 768px) 340px, (max-width: 1024px) 380px, 420px"
                    className="object-contain object-center transition-transform duration-500 group-hover:scale-[1.01]"
                  />
                  {/* Subtle inner dark vignette at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight/35 via-transparent to-transparent pointer-events-none"></div>
                </div>

                {/* Interactive Action Dock Beneath Portrait */}
                <div className="grid grid-cols-3 divide-x divide-gold/15 bg-gradient-to-r from-[#140D2B] via-midnight to-[#140D2B] border-t border-gold/20 text-xs">
                  <a
                    href="tel:9652412221"
                    className="flex items-center justify-center gap-1.5 py-3 px-2 text-ivory hover:text-gold hover:bg-gold/10 transition-colors text-center group/btn"
                    aria-label="Call 9652412221"
                  >
                    <Phone className="w-3.5 h-3.5 text-gold group-hover/btn:scale-110 transition-transform" />
                    <span className="text-[0.72rem] font-bold tracking-wider">9652412221</span>
                  </a>

                  <a
                    href="https://maps.google.com/?q=MVP+Colony+Visakhapatnam"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 py-3 px-2 text-ivory hover:text-gold hover:bg-gold/10 transition-colors text-center group/btn"
                    aria-label="Visit MVP Colony Visakhapatnam location"
                  >
                    <MapPin className="w-3.5 h-3.5 text-gold group-hover/btn:scale-110 transition-transform" />
                    <span className="text-[0.72rem] font-semibold tracking-wider">MVP Colony</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => setModalOpen(true)}
                    className="flex items-center justify-center gap-1.5 py-3 px-2 text-gold hover:text-amber-300 hover:bg-gold/10 transition-colors text-center font-bold"
                    aria-label="View Sri Raghavendra banner and credentials"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span className="text-[0.72rem] tracking-wider uppercase font-semibold">View Details</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* ========================================================
          FULL-RESOLUTION SRI RAGHAVENDRA BANNER MODAL
          ======================================================== */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-midnight/90 backdrop-blur-xl animate-in fade-in duration-200">
          <div className="relative max-w-5xl w-full max-h-[90vh] bg-midnight rounded-2xl border-2 border-gold/40 shadow-2xl overflow-hidden flex flex-col">
            <div className="flex items-center justify-between px-6 py-4 bg-midnight/95 border-b border-gold/20">
              <div className="flex items-center gap-3">
                <Sparkles className="w-5 h-5 text-gold" />
                <h3 className="font-bold text-base sm:text-lg text-ivory tracking-wide">
                  Sri Raghavendra Astrology Official Banner
                </h3>
              </div>

              {/* Language toggle for banner */}
              <div className="flex items-center gap-2">
                <div className="flex items-center bg-midnight border border-gold/30 rounded-lg p-0.5">
                  <button
                    type="button"
                    onClick={() => setActiveBannerLang("en")}
                    className={`px-2.5 py-1 rounded text-xs font-bold transition-all ${
                      activeBannerLang === "en"
                        ? "bg-gold text-midnight"
                        : "text-ivory/60 hover:text-ivory"
                    }`}
                  >
                    EN
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveBannerLang("te")}
                    className={`px-2.5 py-1 rounded text-xs font-bold transition-all ${
                      activeBannerLang === "te"
                        ? "bg-gold text-midnight"
                        : "text-ivory/60 hover:text-ivory"
                    }`}
                  >
                    తెలుగు
                  </button>
                </div>

                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="p-2 rounded-full text-ivory/70 hover:text-ivory hover:bg-gold/20 transition-colors ml-2"
                  aria-label="Close modal"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            <div className="relative flex-1 min-h-[300px] sm:min-h-[500px] bg-black p-2 flex items-center justify-center overflow-auto">
              <Image
                src={modalBannerSrc}
                alt="Sri Raghavendra Astrology full resolution"
                width={1600}
                height={1000}
                className="w-full h-auto object-contain max-h-[75vh]"
              />
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 px-6 py-4 bg-midnight/95 border-t border-gold/20 text-xs">
              <div className="flex items-center gap-4 text-ivory/80">
                <span className="flex items-center gap-1.5">
                  <Phone className="w-4 h-4 text-gold" /> 9652412221
                </span>
                <span className="flex items-center gap-1.5">
                  <Globe className="w-4 h-4 text-gold" /> astrosiddi.com
                </span>
                <span className="hidden sm:flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-gold" /> MVP Colony Double Road, Visakhapatnam
                </span>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href="tel:9652412221"
                  className="px-4 py-2 rounded-full bg-gold text-midnight font-bold tracking-wider uppercase text-xs hover:bg-saffron transition-colors"
                >
                  Call Astrologer
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
