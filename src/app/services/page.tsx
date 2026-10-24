"use client";

import React from "react";
import Link from "next/link";
import { useTranslation } from "@/contexts/useTranslation";
import { Testimonials } from "@/components/sections/Testimonials";
import { motion } from "framer-motion";
import { Eye, Heart, Home, Briefcase, Sparkles, Flame, ChevronRight, Star, BookOpen } from "lucide-react";

const SERVICE_ICONS = [Eye, Heart, Home, Briefcase, Sparkles, Flame];

const SERVICE_LINKS: Record<number, { href: string; label: string }> = {
  2: { href: "/services/kundali-matching", label: "View Kundali Matching Service" },
  3: { href: "/services/vastu-visakhapatnam", label: "View Visakhapatnam Vastu Service" },
  4: { href: "/services/career-astrology", label: "View Career Astrology Service" },
};

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
            <h1 className="font-cinzel text-5xl sm:text-6xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-ivory via-gold to-ivory">Vedic Astrology Services in Visakhapatnam</h1>
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
            const dedicated = SERVICE_LINKS[num];
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
                
                <div className="relative z-10 flex-1">
                  <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-midnight mb-4 group-hover:text-gold transition-colors">{t(`services.card${num}.title`)}</h2>
                  <p className="text-lg leading-relaxed text-midnight/70 font-cormorant mb-4">{t(`services.card${num}.desc`)}</p>
                  
                  {dedicated && (
                    <Link
                      href={dedicated.href}
                      className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest font-bold text-gold hover:text-saffron transition-colors mt-2"
                    >
                      <span>{dedicated.label}</span>
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* TOPIC GUIDES (INTERNAL LINKING) */}
      <section className="py-16 max-w-6xl mx-auto px-4 border-t border-gold/10">
        <div className="text-center mb-12">
          <span className="text-gold font-bold tracking-[0.2em] uppercase text-xs">Knowledge Hub</span>
          <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-midnight mt-2">Guides &amp; Specialized Articles</h2>
          <p className="font-cormorant text-lg text-midnight/70 max-w-2xl mx-auto mt-2">
            In-depth guides on marriage matching, coastal Vastu, and career timing written by Sri Raghavendra Siddhanti garu.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-gold/15 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-cinzel text-lg font-bold text-midnight mb-2">Marriage &amp; Kundali</h3>
            <p className="font-cormorant text-midnight/70 text-base mb-4">
              Explore Telugu marriage matching traditions, Ashtakoota Gunas, and Kuja Dosha facts.
            </p>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services/kundali-matching" className="text-gold hover:underline font-medium inline-flex items-center gap-1">
                  <ChevronRight className="w-3.5 h-3.5" /> Kundali Matching Service
                </Link>
              </li>
              <li>
                <Link href="/blog/how-kundali-matching-really-works-telugu-tradition" className="text-midnight/80 hover:text-gold inline-flex items-center gap-1">
                  <BookOpen className="w-3.5 h-3.5 text-gold/60" /> Telugu Kundali Tradition &amp; 36 Gunas
                </Link>
              </li>
              <li>
                <Link href="/blog/manglik-dosha-myths-vs-facts" className="text-midnight/80 hover:text-gold inline-flex items-center gap-1">
                  <BookOpen className="w-3.5 h-3.5 text-gold/60" /> Manglik Dosha Myths vs. Facts
                </Link>
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gold/15 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-cinzel text-lg font-bold text-midnight mb-2">Coastal Vastu Shastra</h3>
            <p className="font-cormorant text-midnight/70 text-base mb-4">
              Practical non-demolition remedies tailored specifically for Visakhapatnam apartments and flats.
            </p>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services/vastu-visakhapatnam" className="text-gold hover:underline font-medium inline-flex items-center gap-1">
                  <ChevronRight className="w-3.5 h-3.5" /> Vastu Consultant in Vizag
                </Link>
              </li>
              <li>
                <Link href="/blog/signs-you-need-vastu-correction-at-home" className="text-midnight/80 hover:text-gold inline-flex items-center gap-1">
                  <BookOpen className="w-3.5 h-3.5 text-gold/60" /> 7 Signs You Need Vastu Correction
                </Link>
              </li>
              <li>
                <Link href="/blog/vastu-tips-visakhapatnam-apartments" className="text-midnight/80 hover:text-gold inline-flex items-center gap-1">
                  <BookOpen className="w-3.5 h-3.5 text-gold/60" /> Vizag Coastal Flat Vastu Tips
                </Link>
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gold/15 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-cinzel text-lg font-bold text-midnight mb-2">Career &amp; Numerology</h3>
            <p className="font-cormorant text-midnight/70 text-base mb-4">
              Identify optimal timing for job switches, promotion opportunities, and entrepreneurial ventures.
            </p>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services/career-astrology" className="text-gold hover:underline font-medium inline-flex items-center gap-1">
                  <ChevronRight className="w-3.5 h-3.5" /> Career Astrology Consultation
                </Link>
              </li>
              <li>
                <Link href="/blog/career-astrology-reading-kundali-for-job-business-timing" className="text-midnight/80 hover:text-gold inline-flex items-center gap-1">
                  <BookOpen className="w-3.5 h-3.5 text-gold/60" /> Reading Kundali for Job Transitions
                </Link>
              </li>
              <li>
                <Link href="/blog/numerology-basics-birth-number-career-timing" className="text-midnight/80 hover:text-gold inline-flex items-center gap-1">
                  <BookOpen className="w-3.5 h-3.5 text-gold/60" /> Numerology for Career &amp; Wealth
                </Link>
              </li>
            </ul>
          </div>
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
