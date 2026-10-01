"use client";

import React from "react";
import Link from "next/link";
import { useTranslation } from "@/contexts/useTranslation";
import { Testimonials } from "@/components/sections/Testimonials";
import { motion } from "framer-motion";
import { Eye, Heart, Home, Briefcase, Sparkles, Flame, ChevronRight, Star } from "lucide-react";

const SERVICE_ICONS = [Eye, Heart, Home, Briefcase, Sparkles, Flame];

export default function Services() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col min-h-screen bg-ivory text-midnight">
      {/* HERO */}
      <section className="relative bg-midnight text-ivory py-32 border-b border-gold/10 overflow-hidden text-center">
        <div className="absolute inset-0 bg-cover bg-center opacity-10 mix-blend-luminosity" style={{ backgroundImage: "url('/Untitled design_20260909_011322_0000_page-0001.jpg')" }}></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-px bg-gold/50"></div>
              <span className="text-gold font-bold tracking-[0.2em] uppercase text-sm flex items-center gap-2">
                <Star className="w-4 h-4" /> Our Offerings
              </span>
              <div className="w-12 h-px bg-gold/50"></div>
            </div>
            <h1 className="font-cinzel text-5xl sm:text-6xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-ivory via-gold to-ivory">Services Aligned with the Stars</h1>
            <p className="text-xl md:text-2xl opacity-80 font-cormorant font-medium max-w-2xl mx-auto leading-relaxed">
              From birth chart analysis to Vastu consultations — comprehensive Vedic guidance for every area of life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SERVICES LIST */}
      <section className="py-32 max-w-6xl mx-auto px-4 relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[100px] -translate-y-1/3 translate-x-1/2 pointer-events-none z-0"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
          {[1, 2, 3, 4, 5, 6].map((num, idx) => {
            const Icon = SERVICE_ICONS[idx];
            return (
              <motion.div 
                key={num} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: num * 0.1 }}
                className="bg-white p-10 rounded-2xl shadow-xl border border-gold/10 flex flex-col sm:flex-row gap-8 items-start group hover:-translate-y-2 transition-transform duration-500 hover:shadow-2xl hover:border-gold/30 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700"></div>
                
                <div className="w-16 h-16 rounded-full bg-gold/10 text-gold flex items-center justify-center shrink-0 group-hover:bg-gold group-hover:text-midnight transition-colors duration-500">
                  <Icon className="w-8 h-8" strokeWidth={1.5} />
                </div>
                
                <div className="relative z-10">
                  <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-midnight mb-4 group-hover:text-gold transition-colors">{t(`services.card${num}.title`)}</h2>
                  <p className="text-lg leading-relaxed text-midnight/70 font-cormorant">{t(`services.card${num}.desc`)}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      <Testimonials />

      {/* CTA */}
      <section className="py-32 max-w-5xl mx-auto px-4 w-full">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center bg-midnight text-ivory p-12 md:p-16 rounded-3xl relative overflow-hidden shadow-2xl border border-gold/20"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-transparent"></div>
          <div className="relative z-10">
            <div className="flex justify-center mb-6">
              <Sparkles className="w-10 h-10 text-gold" />
            </div>
            <h2 className="font-cinzel text-4xl sm:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-ivory to-gold">Not Sure Which Service You Need?</h2>
            <p className="mb-10 text-lg sm:text-xl opacity-80 font-cormorant font-medium max-w-2xl mx-auto">
              Book a free 15-minute introductory call and we&apos;ll guide you to the right consultation.
            </p>
            <Link href="/contact" className="group inline-flex items-center justify-center px-10 py-4 bg-gold hover:bg-saffron text-midnight font-bold rounded-full shadow-[0_0_30px_rgba(245,166,35,0.4)] transition-all duration-300 text-sm uppercase tracking-widest">
              Book Free Discovery Call
              <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
