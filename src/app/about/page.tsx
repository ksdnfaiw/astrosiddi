"use client";

import React from "react";
import { useTranslation } from "@/contexts/useTranslation";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";

export default function About() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col min-h-screen">
      {/* HERO */}
      <section className="bg-deepPurple text-ivory py-24 border-b border-gold/20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-cinzel text-5xl font-bold mb-6 text-gold">The Soul Behind the Stars</h1>
          <p className="text-xl opacity-80">Over 25 years of dedicated practice in Vedic Jyotish, rooted in the sacred traditions of South India.</p>
        </div>
      </section>

      {/* BIO */}
      <section className="py-24 bg-ivory text-midnight">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-cinzel text-3xl font-bold mb-8 text-gold">Our Story</h2>
          <div className="prose prose-lg">
            <p className="mb-6 leading-relaxed">
              Astro Siddhi was born from a profound calling — not a commercial ambition. The founder was initiated into Vedic Jyotish Shastra at a young age under the guidance of a renowned guru from Andhra Pradesh, inheriting a tradition that traces its roots to the Brihat Parashara Hora Shastra — the foundational text of Vedic astrology.
            </p>
            <p className="mb-6 leading-relaxed">
              For over 25 years, thousands of clients have walked in with uncertainty about their marriages, careers, health challenges, and spiritual blockages — and walked out with clarity, practical remedies, and renewed hope. The practice is deeply personal: every chart is studied with care, every consultation is conducted with compassion, and every remedy is prescribed with practicality.
            </p>
            <p className="font-semibold text-gold">
              Astro Siddhi is built on one truth: the stars do not control your fate — they illuminate the path. You choose the direction.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
