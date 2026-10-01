"use client";

import React from "react";
import Link from "next/link";
import { useTranslation } from "@/contexts/useTranslation";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { Testimonials } from "@/components/sections/Testimonials";
import { motion } from "framer-motion";
import { Users, Award, Smile, CheckCircle, ChevronRight, Sparkles } from "lucide-react";

export default function About() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col min-h-screen bg-ivory text-midnight">
      {/* HERO */}
      <section className="relative bg-midnight text-ivory py-32 border-b border-gold/10 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-10 mix-blend-luminosity" style={{ backgroundImage: "url('/Untitled design_20260909_011322_0000_page-0001.jpg')" }}></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-px bg-gold/50"></div>
              <span className="text-gold font-bold tracking-[0.2em] uppercase text-sm flex items-center gap-2">
                <Sparkles className="w-4 h-4" /> About Us
              </span>
              <div className="w-12 h-px bg-gold/50"></div>
            </div>
            <h1 className="font-cinzel text-5xl sm:text-6xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-ivory via-gold to-ivory">The Soul Behind the Stars</h1>
            <p className="text-xl md:text-2xl opacity-80 font-cormorant font-medium max-w-3xl mx-auto leading-relaxed">
              Visakhapatnam&apos;s trusted Vedic astrologer, with over 25 years of dedicated practice rooted in the sacred traditions of South India.
            </p>
          </motion.div>
        </div>
      </section>

      {/* BIO + PHOTO */}
      <section className="py-32 bg-ivory text-midnight relative">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gold/20 rounded-2xl -rotate-2 scale-105 transition-transform duration-700"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gold/10">
                <img
                  src="/100__20260911_234216_0000_page-0001.jpg"
                  alt="Sri Raghavendra Siddhanti Garu"
                  className="w-full object-contain mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
                />
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-cinzel text-4xl sm:text-5xl font-bold mb-8 text-midnight">Our Story</h2>
              <div className="prose prose-lg prose-p:font-cormorant prose-p:text-lg md:prose-p:text-xl text-midnight/80">
                <p className="mb-6 leading-relaxed">
                  Astro Siddhi was born from a profound calling — not a commercial ambition. The founder was initiated into Vedic Jyotish Shastra at a young age under the guidance of a renowned guru from Andhra Pradesh, inheriting a tradition that traces its roots to the Brihat Parashara Hora Shastra — the foundational text of Vedic astrology.
                </p>
                <p className="mb-6 leading-relaxed">
                  For over 25 years, thousands of clients across Visakhapatnam and Hyderabad have walked in with uncertainty about their marriages, careers, health challenges, and spiritual blockages — and walked out with clarity, practical remedies, and renewed hope.
                </p>
                <div className="bg-gold/10 border-l-4 border-gold p-6 rounded-r-lg mt-8">
                  <p className="font-semibold text-midnight italic m-0">
                    "Astro Siddhi is built on one truth: the stars do not control your fate — they illuminate the path. You choose the direction."
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* EXPERIENCE HIGHLIGHTS */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center border-t border-b border-gold/20 py-16">
            {[
              { id: "clients", icon: Users },
              { id: "exp", icon: Award },
              { id: "sat", icon: Smile },
              { id: "spec", icon: CheckCircle }
            ].map((item, idx) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex flex-col items-center group"
              >
                <item.icon className="w-8 h-8 text-gold mb-4 group-hover:scale-110 transition-transform" />
                <p className="font-cinzel text-4xl md:text-5xl font-bold text-midnight mb-2">{t(`stats.${item.id}`)}</p>
                <p className="text-xs sm:text-sm uppercase tracking-widest text-midnight/60 font-medium">{t(`stats.${item.id}.label`)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      {/* CTA */}
      <section className="py-32 bg-ivory text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gold/5 opacity-50"></div>
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <h2 className="font-cinzel text-4xl sm:text-5xl font-bold mb-8 text-midnight">Ready to Find Your Clarity?</h2>
          <p className="font-cormorant text-xl text-midnight/70 mb-12">Take the first step towards unlocking your true potential.</p>
          <Link href="/contact" className="group inline-flex items-center justify-center px-10 py-4 bg-gold hover:bg-saffron text-midnight font-bold rounded-full shadow-[0_0_30px_rgba(245,166,35,0.3)] transition-all duration-300 text-sm uppercase tracking-widest">
            {t("nav.book")}
            <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

    </div>
  );
}
