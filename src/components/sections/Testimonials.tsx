"use client";

import React from "react";
import { useTranslation } from "@/contexts/useTranslation";
import { Reveal } from "@/components/ui/Reveal";
import { Quote, Star } from "lucide-react";

export function Testimonials() {
  const { t } = useTranslation();

  return (
    <section className="py-24 sm:py-32 bg-midnight text-ivory relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(#F5A623_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 sm:mb-20">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-8 h-px bg-gold/50"></div>
            <span className="text-gold font-bold tracking-[0.2em] uppercase text-sm">Client Stories</span>
            <div className="w-8 h-px bg-gold/50"></div>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-ivory via-gold to-ivory">
            {t("testimonials.h2")}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {[1, 2, 3].map((num) => (
            <Reveal key={num} delay={num * 100}>
              <figure className="h-full bg-deepPurple border border-gold/10 p-8 sm:p-10 rounded-3xl relative group hover:border-gold/30 transition-colors duration-500">
                <Quote className="absolute top-6 right-8 w-12 h-12 text-gold/10 rotate-180" aria-hidden="true" />

                <div className="flex gap-1 mb-6" role="img" aria-label="5 out of 5 stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold text-gold" aria-hidden="true" />
                  ))}
                </div>

                <blockquote className="text-ivory/80 leading-relaxed mb-8 text-base italic relative z-10">
                  {t(`testimonials.${num}.text`)}
                </blockquote>

                <figcaption className="flex items-center gap-4 border-t border-gold/10 pt-6">
                  <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center font-cinzel font-bold text-gold text-xl border border-gold/30" aria-hidden="true">
                    {t(`testimonials.${num}.author`).replace(/^[—–-]\s*/, "").charAt(0)}
                  </div>
                  <div>
                    <p className="text-gold font-bold tracking-wider text-sm uppercase">{t(`testimonials.${num}.author`)}</p>
                    <p className="text-ivory/50 text-xs tracking-widest mt-1">Verified Client</p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
