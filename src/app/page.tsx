"use client";

import React from "react";
import Link from "next/link";
import { useTranslation } from "@/contexts/useTranslation";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { motion } from "framer-motion";

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col min-h-screen">
      {/* HERO SECTION */}
      <section className="relative pt-20 pb-32 overflow-hidden bg-deepPurple text-ivory">
        <div className="absolute inset-0 bg-[url('/placeholder-om.svg')] opacity-5 bg-center bg-no-repeat bg-contain"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block py-1 px-3 rounded-full bg-gold/20 text-gold text-sm font-semibold tracking-wider mb-6">
              {t("hero.badge")}
            </span>
            <h1 className="font-cinzel text-5xl md:text-7xl font-bold mb-6 leading-tight whitespace-pre-line">
              {t("hero.h1")}
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-ivory/80 mb-10 leading-relaxed font-notoTelugu">
              {t("hero.sub")}
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
              <Link href="/contact" className="px-8 py-4 bg-gold hover:bg-saffron text-midnight font-bold rounded shadow-lg transition-all text-lg w-full sm:w-auto text-center">
                {t("hero.cta.primary")}
              </Link>
              <Link href="/services" className="px-8 py-4 bg-transparent border-2 border-gold text-gold hover:bg-gold/10 font-bold rounded transition-all text-lg w-full sm:w-auto text-center">
                {t("hero.cta.secondary")}
              </Link>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-gold/80 uppercase tracking-wide">
              <span>⭐ {t("hero.trust.clients")}</span>
              <span>🏆 {t("hero.trust.experience")}</span>
              <span>🌐 {t("hero.trust.online")}</span>
              <span className="font-notoTelugu">🗣️ {t("hero.trust.languages")}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="bg-gold text-midnight py-3 overflow-hidden whitespace-nowrap">
        <div className="animate-marquee inline-block font-semibold tracking-widest uppercase">
          {t("marquee.text")} &nbsp; {t("marquee.text")}
        </div>
      </div>

      {/* ABOUT TEASER */}
      <section className="py-24 bg-ivory text-midnight">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-saffron font-bold tracking-widest uppercase text-sm mb-2 block">{t("about.teaser.label")}</span>
              <h2 className="font-cinzel text-4xl font-bold mb-6">{t("about.teaser.h2")}</h2>
              <p className="text-lg leading-relaxed mb-8 opacity-80 font-notoTelugu">
                {t("about.teaser.body")}
              </p>
              <Link href="/about" className="text-gold font-bold hover:text-saffron transition-colors inline-flex items-center text-lg">
                {t("about.teaser.link")}
              </Link>
            </div>
            <div className="relative">
              <ImagePlaceholder className="w-full h-96" text="Astrologer Image" />
              <div className="absolute -bottom-6 -left-6 bg-deepPurple text-ivory p-6 rounded-lg shadow-xl">
                <p className="font-cinzel text-3xl text-gold font-bold mb-1">25+</p>
                <p className="text-sm uppercase tracking-wider">{t("stats.exp.label")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES OVERVIEW */}
      <section className="py-24 bg-midnight text-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-gold font-bold tracking-widest uppercase text-sm mb-2 block">{t("services.label")}</span>
            <h2 className="font-cinzel text-4xl font-bold">{t("services.h2")}</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Cards */}
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <div key={num} className="bg-deepPurple border border-gold/20 p-8 rounded hover:border-gold/50 transition-colors group">
                <h3 className="font-cormorant text-2xl text-gold font-bold mb-4 font-notoTelugu group-hover:text-saffron transition-colors">
                  {t(`services.card${num}.title` as any)}
                </h3>
                <p className="text-ivory/70 leading-relaxed font-notoTelugu">
                  {t(`services.card${num}.desc` as any)}
                </p>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Link href="/services" className="inline-block px-8 py-4 bg-gold hover:bg-saffron text-midnight font-bold rounded shadow-lg transition-all text-lg">
              {t("services.cta")}
            </Link>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 bg-ivory text-midnight">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-cinzel text-4xl font-bold mb-16">{t("how.h2")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((step) => (
              <div key={step} className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-gold/20 text-gold flex items-center justify-center font-cinzel text-2xl font-bold mb-6">
                  {step}
                </div>
                <h3 className="font-bold text-xl mb-3 font-notoTelugu">{t(`how.step${step}.title` as any)}</h3>
                <p className="text-midnight/70 font-notoTelugu">{t(`how.step${step}.desc` as any)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
