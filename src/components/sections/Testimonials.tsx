"use client";

import React from "react";
import { useTranslation } from "@/contexts/useTranslation";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

export function Testimonials() {
  const { t } = useTranslation();

  return (
    <section className="py-32 bg-midnight text-ivory relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?q=80&w=2171')] bg-cover bg-center opacity-[0.03] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-8 h-px bg-gold/50"></div>
            <span className="text-gold font-bold tracking-[0.2em] uppercase text-sm">Client Stories</span>
            <div className="w-8 h-px bg-gold/50"></div>
          </div>
          <h2 className="font-cinzel text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-ivory via-gold to-ivory">
            {t("testimonials.h2")}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {[1, 2, 3].map((num) => (
            <motion.div 
              key={num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: num * 0.15 }}
              className="bg-deepPurple/80 backdrop-blur-sm border border-gold/10 p-8 sm:p-10 rounded-3xl relative group hover:-translate-y-2 transition-transform duration-500 hover:border-gold/30 hover:shadow-[0_20px_40px_-15px_rgba(245,166,35,0.1)]"
            >
              <Quote className="absolute top-6 right-8 w-12 h-12 text-gold/10 group-hover:text-gold/20 transition-colors duration-500 rotate-180" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              
              <p className="text-ivory/80 leading-relaxed mb-8 font-cormorant text-lg italic relative z-10">
                "{t(`testimonials.${num}.text`)}"
              </p>
              
              <div className="flex items-center gap-4 border-t border-gold/10 pt-6">
                <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center font-cinzel font-bold text-gold text-xl border border-gold/30">
                  {t(`testimonials.${num}.author`).charAt(0)}
                </div>
                <div>
                  <p className="text-gold font-bold tracking-wider text-sm uppercase">
                    {t(`testimonials.${num}.author`)}
                  </p>
                  <p className="text-ivory/50 text-xs tracking-widest mt-1">Verified Client</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
