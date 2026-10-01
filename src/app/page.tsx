"use client";

import React from "react";
import Link from "next/link";
import { useTranslation } from "@/contexts/useTranslation";
import Image from "next/image";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { Testimonials } from "@/components/sections/Testimonials";
import { motion } from "framer-motion";
import { Star, Award, Globe, Languages, ArrowRight, Sparkles, ChevronRight, CheckCircle2 } from "lucide-react";

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col min-h-screen bg-ivory">
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-40 overflow-hidden bg-midnight text-ivory flex items-center min-h-[90vh]">
        {/* Background elements */}
        <div className="absolute inset-0 z-0 bg-midnight overflow-hidden">
          {/* Deep gradient overlay for cinematic feel */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gold/10 via-midnight to-midnight opacity-80"></div>
          
          {/* Subtle star dust pattern */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30 mix-blend-screen"></div>
          
          {/* Glowing bottom-left and top-right ambient orbs */}
          <div className="absolute -bottom-1/4 -left-1/4 w-[800px] h-[800px] bg-gold/10 blur-[150px] rounded-full pointer-events-none"></div>
          <div className="absolute -top-1/4 -right-1/4 w-[600px] h-[600px] bg-saffron/5 blur-[120px] rounded-full pointer-events-none"></div>

          {/* Abstract Geometric Circles (Right aligned) */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
            className="absolute top-[10%] right-0 translate-x-1/4 w-[620px] h-[620px] sm:w-[800px] sm:h-[800px] pointer-events-none opacity-[0.15] flex items-center justify-center"
          >
            <svg className="w-full h-full" viewBox="-100 -100 200 200" fill="none">
              <g stroke="currentColor" className="text-gold" strokeWidth="0.7">
                <circle r="90"></circle>
                <circle r="70"></circle>
                <circle r="50"></circle>
                <circle r="30"></circle>
                <line x1="0" y1="0" x2="90" y2="0"></line>
                <line x1="0" y1="0" x2="77.942286" y2="45"></line>
                <line x1="0" y1="0" x2="45" y2="77.942286"></line>
                <line x1="0" y1="0" x2="0" y2="90"></line>
                <line x1="0" y1="0" x2="-45" y2="77.942286"></line>
                <line x1="0" y1="0" x2="-77.942286" y2="45"></line>
                <line x1="0" y1="0" x2="-90" y2="0"></line>
                <line x1="0" y1="0" x2="-77.942286" y2="-45"></line>
                <line x1="0" y1="0" x2="-45" y2="-77.942286"></line>
                <line x1="0" y1="0" x2="0" y2="-90"></line>
                <line x1="0" y1="0" x2="45" y2="-77.942286"></line>
                <line x1="0" y1="0" x2="77.942286" y2="-45"></line>
                <circle cx="60" cy="0" r="15"></circle>
                <circle cx="42.4264" cy="42.4264" r="15"></circle>
                <circle cx="0" cy="60" r="15"></circle>
                <circle cx="-42.4264" cy="42.4264" r="15"></circle>
                <circle cx="-60" cy="0" r="15"></circle>
                <circle cx="-42.4264" cy="-42.4264" r="15"></circle>
                <circle cx="0" cy="-60" r="15"></circle>
                <circle cx="42.4264" cy="-42.4264" r="15"></circle>
              </g>
            </svg>
          </motion.div>
          
          {/* Extremely subtle floating particles */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-gold"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  width: `${Math.random() * 3 + 1}px`,
                  height: `${Math.random() * 3 + 1}px`,
                }}
                animate={{
                  opacity: [0, Math.random() * 0.5 + 0.2, 0],
                  scale: [0.5, 1.5, 0.5],
                  y: [0, -30, 0]
                }}
                transition={{
                  duration: 4 + Math.random() * 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: Math.random() * 4,
                }}
              />
            ))}
          </div>

          {/* Shining glowing stars with cross beams */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(25)].map((_, i) => (
              <motion.div
                key={`star-${i}`}
                className="absolute flex items-center justify-center"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
                animate={{
                  opacity: [0, 0.8, 0],
                  scale: [0.5, 1.2, 0.5],
                  rotate: [0, 45, 90]
                }}
                transition={{
                  duration: 5 + Math.random() * 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: Math.random() * 5,
                }}
              >
                {/* Subtle outer cross */}
                <div className="absolute w-[1px] h-12 bg-gradient-to-b from-transparent via-gold/60 to-transparent blur-[0.5px]"></div>
                <div className="absolute h-[1px] w-12 bg-gradient-to-r from-transparent via-gold/60 to-transparent blur-[0.5px]"></div>
                {/* Core bright cross */}
                <div className="absolute w-[2px] h-6 bg-gradient-to-b from-transparent via-ivory to-transparent blur-[1px]"></div>
                <div className="absolute h-[2px] w-6 bg-gradient-to-r from-transparent via-ivory to-transparent blur-[1px]"></div>
                {/* Intense central glow */}
                <div className="absolute w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_15px_4px_rgba(255,255,255,0.9)] blur-[1px]"></div>
                <div className="absolute w-3 h-3 bg-gold/50 rounded-full blur-[4px]"></div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full mt-10 lg:mt-0">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="flex justify-center mb-8">
                <span className="inline-flex items-center gap-2 py-1.5 px-5 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase backdrop-blur-sm">
                  <Sparkles className="w-4 h-4" />
                  {t("hero.badge")}
                </span>
              </div>
              
              <h1 className="font-cinzel text-4xl sm:text-5xl md:text-7xl lg:text-[5rem] font-bold mb-8 leading-[1.1] tracking-tight drop-shadow-lg text-transparent bg-clip-text bg-gradient-to-b from-ivory to-ivory/70 whitespace-pre-line">
                {t("hero.h1")}
              </h1>
              
              <p className="max-w-2xl mx-auto text-lg sm:text-xl md:text-2xl text-ivory/80 mb-12 leading-relaxed font-cormorant font-medium">
                {t("hero.sub")}
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mb-20">
                <Link href="/contact" className="group relative px-8 py-4 bg-gold hover:bg-saffron text-midnight font-bold rounded-full shadow-[0_0_40px_rgba(245,166,35,0.3)] transition-all duration-300 text-sm sm:text-base uppercase tracking-wider w-full sm:w-auto text-center flex items-center justify-center gap-2 overflow-hidden">
                  <span className="relative z-10">{t("hero.cta.primary")}</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                </Link>
                <Link href="/services" className="px-8 py-4 bg-transparent border border-ivory/30 text-ivory hover:bg-ivory/10 font-bold rounded-full transition-all duration-300 text-sm sm:text-base uppercase tracking-wider w-full sm:w-auto text-center backdrop-blur-sm">
                  {t("hero.cta.secondary")}
                </Link>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-ivory/10">
                {[
                  { icon: Star, text: t("hero.trust.clients") },
                  { icon: Award, text: t("hero.trust.experience") },
                  { icon: Globe, text: t("hero.trust.online") },
                  { icon: Languages, text: t("hero.trust.languages") }
                ].map((item, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + (idx * 0.1) }}
                    className="flex flex-col items-center gap-3"
                  >
                    <item.icon className="w-6 h-6 text-gold mb-1 opacity-80" />
                    <span className="text-xs sm:text-sm font-medium text-ivory/70 uppercase tracking-widest">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="bg-gradient-to-r from-gold via-saffron to-gold text-midnight py-4 overflow-hidden whitespace-nowrap shadow-inner relative z-20">
        <div className="animate-marquee inline-flex items-center gap-8 font-semibold tracking-[0.2em] uppercase text-sm">
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
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gold/10 bg-midnight">
                <img
                  src="/English%20design_page-0001.jpg"
                  alt="Sri Raghavendra Siddhanti Garu"
                  className="w-full object-contain mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
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

      <Testimonials />
    </div>
  );
}
