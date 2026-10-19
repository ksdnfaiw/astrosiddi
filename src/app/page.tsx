"use client";

import React from "react";
import Link from "next/link";
import { useTranslation } from "@/contexts/useTranslation";
import Image from "next/image";
import { Testimonials } from "@/components/sections/Testimonials";
import { HeroSection } from "@/components/sections/HeroSection";
import { GoogleReviews } from "@/components/sections/GoogleReviews";
import { MapsSection } from "@/components/sections/MapsSection";
import { motion } from "framer-motion";
import { Star, ChevronRight, CheckCircle2, Sparkles, ArrowRight } from "lucide-react";

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col min-h-screen bg-ivory">
      {/* CINEMATIC VEDIC ASTROLOGY HERO SECTION */}
      <HeroSection />

      {/* MARQUEE */}
      <div className="marquee-container group bg-gradient-to-r from-gold via-saffron to-gold text-midnight py-4 overflow-hidden whitespace-nowrap shadow-inner relative z-20 cursor-pointer select-none">
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
      <section className="py-32 bg-ivory text-midnight relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-px bg-gold"></div>
                <span className="text-saffron font-bold tracking-[0.2em] uppercase text-sm">{t("about.teaser.label")}</span>
              </div>
              <h2 className="font-cinzel text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 leading-tight text-midnight">{t("about.teaser.h2")}</h2>
              <p className="text-lg sm:text-xl leading-relaxed mb-10 text-midnight/70 font-cormorant font-medium">
                {t("about.teaser.body")}
              </p>
              
              <div className="space-y-4 mb-12">
                {["Vedic Astrology Specialist", "Vastu Shastra Consultant", "Kundali Matching Expert"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gold" />
                    <span className="font-medium tracking-wide text-midnight/80">{item}</span>
                  </div>
                ))}
              </div>

              <Link href="/about" className="group inline-flex items-center gap-3 text-midnight font-bold border-b-2 border-gold pb-1 hover:text-saffron hover:border-saffron transition-all text-sm uppercase tracking-widest">
                {t("about.teaser.link")}
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gold/20 rounded-2xl -rotate-3 scale-105 transition-transform duration-700 hover:rotate-0"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gold/10 bg-midnight aspect-[16/10]">
                <Image
                  src="/English%20design_page-0001.jpg"
                  alt="Sri Raghavendra Siddhanti Garu"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/20 to-transparent opacity-80"></div>
                
                <div className="absolute bottom-0 left-0 w-full p-8 sm:p-10 text-ivory">
                  <div className="flex items-end gap-6">
                    <div className="bg-gold text-midnight p-4 rounded-xl shadow-lg">
                      <p className="font-cinzel text-3xl sm:text-4xl font-bold leading-none">25+</p>
                    </div>
                    <div className="pb-2">
                      <p className="text-sm sm:text-base font-medium tracking-widest uppercase text-ivory/90">{t("stats.exp.label")}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SERVICES OVERVIEW */}
      <section className="py-32 bg-deepPurple text-ivory relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=2094')] bg-fixed bg-cover bg-center opacity-5 mix-blend-overlay pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center text-center mb-20">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-px bg-gold/50"></div>
              <span className="text-gold font-bold tracking-[0.2em] uppercase text-sm">{t("services.label")}</span>
              <div className="w-8 h-px bg-gold/50"></div>
            </div>
            <h2 className="font-cinzel text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-ivory via-gold to-ivory">{t("services.h2")}</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            {[
              { title: "Kundali Matching", desc: "Marriage Compatibility" },
              { title: "Love & Relationship", desc: "Solutions for relationship issues" },
              { title: "Planetary Dosha Remedies", desc: "Effective Pariharam" },
              { title: "Vashikaran", desc: "Attraction & Harmony" },
              { title: "House & Property", desc: "Vastu Solutions" },
              { title: "Health & Wellness", desc: "Guidance for well-being" },
              { title: "Career & Business", desc: "Astrological Guidance" },
              { title: "Foreign Travel", desc: "Settled Abroad Yogas" }
            ].map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative bg-midnight/50 backdrop-blur-md border border-gold/10 p-8 sm:p-10 rounded-2xl hover:bg-midnight transition-all duration-500 overflow-hidden flex flex-col"
              >
                <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity duration-500 group-hover:scale-110 transform">
                  <Star className="w-24 h-24 text-gold" />
                </div>
                
                <div className="w-12 h-12 bg-gold/10 text-gold rounded-full flex items-center justify-center mb-8 border border-gold/20 group-hover:bg-gold group-hover:text-midnight transition-colors duration-300">
                  <Sparkles className="w-5 h-5" />
                </div>
                
                <h3 className="font-cinzel text-xl font-bold mb-4 text-ivory group-hover:text-gold transition-colors duration-300 relative z-10">
                  {service.title}
                </h3>
                
                <p className="text-ivory/60 leading-relaxed font-cormorant text-lg mb-8 relative z-10 flex-grow">
                  {service.desc}
                </p>

                <div className="mt-auto flex items-center gap-2 text-gold text-sm font-semibold tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-4 group-hover:translate-x-0 relative z-10">
                  <span>Explore</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-20 text-center">
            <Link href="/services" className="inline-flex items-center justify-center px-10 py-4 bg-transparent border-2 border-gold text-gold hover:bg-gold hover:text-midnight font-bold rounded-full transition-all duration-300 text-sm uppercase tracking-[0.2em] group">
              {t("services.cta")}
              <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-32 bg-ivory text-midnight">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="font-cinzel text-4xl sm:text-5xl font-bold">{t("how.h2")}</h2>
            <div className="w-24 h-1 bg-gold mx-auto mt-8 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-10 left-[10%] right-[10%] h-0.5 bg-gold/20 -z-10"></div>
            
            {[1, 2, 3, 4].map((step) => (
              <motion.div 
                key={step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: step * 0.1 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="relative mb-8">
                  <div className="w-20 h-20 rounded-full bg-ivory border-4 border-gold text-midnight flex items-center justify-center font-cinzel text-3xl font-bold shadow-xl group-hover:scale-110 group-hover:bg-gold group-hover:text-ivory transition-all duration-300 z-10 relative">
                    {step}
                  </div>
                  <div className="absolute -inset-4 bg-gold/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 z-0"></div>
                </div>
                <h3 className="font-cinzel font-bold text-xl mb-4 text-midnight group-hover:text-gold transition-colors">{t(`how.step${step}.title`)}</h3>
                <p className="text-midnight/70 font-cormorant text-lg px-2">{t(`how.step${step}.desc`)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <GoogleReviews />
      <Testimonials />
      <MapsSection />
    </div>
  );
}
