"use client";

import React, { useState } from "react";
import Link from "next/link";
import { calculateNumerology, type NumerologyResult } from "@/lib/numerology";
import { trackToolEvent } from "@/lib/analytics";
import { Sparkles, ArrowRight } from "lucide-react";

export function NumerologyCalculator() {
  const [day, setDay] = useState<number>(29);
  const [month, setMonth] = useState<number>(7);
  const [year, setYear] = useState<number>(1990);
  const [result, setResult] = useState<NumerologyResult | null>(null);

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    const calculated = calculateNumerology(Number(day), Number(month), Number(year));
    setResult(calculated);

    // Track non-PII events
    trackToolEvent("tool_used", { toolName: "numerology_calculator", action: "calculate" });
    trackToolEvent("result_viewed", { toolName: "numerology_calculator", resultMulank: calculated.mulank });
  };

  const handleCtaClick = (destination: string) => {
    trackToolEvent("cta_click", { toolName: "numerology_calculator", destination });
  };

  return (
    <div className="w-full">
      {/* TOOL INPUT CARD */}
      <div className="bg-gradient-to-br from-midnight via-deepPurple to-midnight text-ivory rounded-3xl p-6 sm:p-10 border border-gold/30 shadow-2xl relative overflow-hidden mb-12">
        <div className="absolute top-0 right-0 w-80 h-80 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold/15 text-gold text-xs font-semibold tracking-widest uppercase border border-gold/25 mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              Instant Vedic & Western Numerology
            </span>
            <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-ivory">
              Calculate Your Mulank, Bhagyank & Life Path
            </h2>
            <p className="text-xs sm:text-sm text-ivory/70 mt-2">
              Runs 100% privately in your browser. Your birth date is never stored or transmitted.
            </p>
          </div>

          <form onSubmit={handleCalculate} className="space-y-6">
            <div className="grid grid-cols-3 gap-3 sm:gap-5">
              {/* Day */}
              <div>
                <label htmlFor="dob-day" className="block text-xs uppercase tracking-wider text-gold font-semibold mb-2">
                  Birth Day
                </label>
                <select
                  id="dob-day"
                  value={day}
                  onChange={(e) => setDay(Number(e.target.value))}
                  className="w-full px-3.5 py-3 rounded-xl bg-midnight/90 border border-gold/30 text-ivory focus:border-gold focus:ring-1 focus:ring-gold outline-none text-sm sm:text-base font-medium"
                >
                  {Array.from({ length: 31 }, (_, i) => i + 1).map((d) => (
                    <option key={d} value={d} className="bg-midnight text-ivory">
                      {d}
                    </option>
                  ))}
                </select>
              </div>

              {/* Month */}
              <div>
                <label htmlFor="dob-month" className="block text-xs uppercase tracking-wider text-gold font-semibold mb-2">
                  Month
                </label>
                <select
                  id="dob-month"
                  value={month}
                  onChange={(e) => setMonth(Number(e.target.value))}
                  className="w-full px-3.5 py-3 rounded-xl bg-midnight/90 border border-gold/30 text-ivory focus:border-gold focus:ring-1 focus:ring-gold outline-none text-sm sm:text-base font-medium"
                >
                  {[
                    "Jan (1)", "Feb (2)", "Mar (3)", "Apr (4)", "May (5)", "Jun (6)",
                    "Jul (7)", "Aug (8)", "Sep (9)", "Oct (10)", "Nov (11)", "Dec (12)",
                  ].map((mName, idx) => (
                    <option key={idx + 1} value={idx + 1} className="bg-midnight text-ivory">
                      {mName}
                    </option>
                  ))}
                </select>
              </div>

              {/* Year */}
              <div>
                <label htmlFor="dob-year" className="block text-xs uppercase tracking-wider text-gold font-semibold mb-2">
                  Year
                </label>
                <select
                  id="dob-year"
                  value={year}
                  onChange={(e) => setYear(Number(e.target.value))}
                  className="w-full px-3.5 py-3 rounded-xl bg-midnight/90 border border-gold/30 text-ivory focus:border-gold focus:ring-1 focus:ring-gold outline-none text-sm sm:text-base font-medium"
                >
                  {Array.from({ length: 100 }, (_, i) => 2026 - i).map((y) => (
                    <option key={y} value={y} className="bg-midnight text-ivory">
                      {y}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <button
              type="submit"
              id="btn-calculate-numerology"
              className="w-full py-4 px-6 rounded-full bg-gradient-to-r from-gold via-saffron to-gold text-midnight font-bold text-sm sm:text-base uppercase tracking-widest shadow-[0_0_30px_rgba(245,166,35,0.3)] hover:brightness-110 transition-all flex items-center justify-center gap-2 group"
            >
              <span>Calculate Numbers</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>
      </div>

      {/* RESULTS CARD */}
      {result && (
        <div id="numerology-results" className="space-y-8 mb-16 animate-fadeIn">
          {/* THREE CORE METRICS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Mulank */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border-2 border-gold/30 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-gold/15 text-gold font-bold text-xs uppercase px-3 py-1 rounded-bl-lg">
                Vedic Driver
              </div>
              <h3 className="font-cinzel text-lg font-bold text-midnight mb-1">
                Mulank (Psychic Number)
              </h3>
              <p className="text-xs text-midnight/60 mb-4">Day of birth reduced to 1-9</p>

              <div className="flex items-baseline gap-3 mb-3">
                <span className="font-cinzel text-5xl font-extrabold text-gold">
                  {result.mulank}
                </span>
                <span className="text-sm font-semibold text-midnight/70">
                  {result.rulingPlanet.name} ({result.rulingPlanet.sanskritName})
                </span>
              </div>

              <div className="p-3 rounded-lg bg-ivory text-xs text-midnight/80 font-mono mb-3">
                <strong>Calculation:</strong> {result.mulankWorking}
              </div>

              <p className="text-xs text-midnight/75 leading-relaxed">
                Reflects your innate temperament, conscious desires, mental personality, and immediate instinctual behavior.
              </p>
            </div>

            {/* Bhagyank */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border-2 border-gold/30 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-gold/15 text-gold font-bold text-xs uppercase px-3 py-1 rounded-bl-lg">
                Vedic Destiny
              </div>
              <h3 className="font-cinzel text-lg font-bold text-midnight mb-1">
                Bhagyank (Destiny Number)
              </h3>
              <p className="text-xs text-midnight/60 mb-4">Total birth date digits summed</p>

              <div className="flex items-baseline gap-3 mb-3">
                <span className="font-cinzel text-5xl font-extrabold text-gold">
                  {result.bhagyank}
                </span>
                <span className="text-sm font-semibold text-midnight/70">
                  Life Purpose & Karmic Destiny
                </span>
              </div>

              <div className="p-3 rounded-lg bg-ivory text-xs text-midnight/80 font-mono mb-3">
                <strong>Calculation:</strong> {result.bhagyankWorking}
              </div>

              <p className="text-xs text-midnight/75 leading-relaxed">
                Represents your soul&apos;s karmic mission, worldly life path, and opportunities that unfold after age 32-35.
              </p>
            </div>

            {/* Western Life Path */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border-2 border-gold/30 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-gold/15 text-gold font-bold text-xs uppercase px-3 py-1 rounded-bl-lg">
                Western Life Path
              </div>
              <h3 className="font-cinzel text-lg font-bold text-midnight mb-1">
                Life Path Number
              </h3>
              <p className="text-xs text-midnight/60 mb-4">Reduced separately (Master 11/22/33)</p>

              <div className="flex items-baseline gap-3 mb-3">
                <span className="font-cinzel text-5xl font-extrabold text-gold">
                  {result.lifePath}
                </span>
                {result.isLifePathMaster && (
                  <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-amber-100 text-amber-800 border border-amber-300">
                    Master Number
                  </span>
                )}
              </div>

              <div className="p-3 rounded-lg bg-ivory text-xs text-midnight/80 font-mono mb-3 overflow-x-auto">
                <strong>Working:</strong> {result.lifePathWorking}
              </div>

              <p className="text-xs text-midnight/75 leading-relaxed">
                The Western Pythagorean indicator of major life themes, personal challenges, and highest spiritual evolution.
              </p>
            </div>
          </div>

          {/* RULING PLANET PROFILE */}
          <div className="bg-gradient-to-br from-midnight via-deepPurple to-midnight text-ivory rounded-3xl p-6 sm:p-10 border border-gold/30 shadow-xl">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-gold/20 mb-6">
              <div>
                <span className="text-xs text-gold uppercase tracking-widest font-semibold">
                  Primary Ruling Planetary Influence
                </span>
                <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-ivory mt-1">
                  {result.rulingPlanet.name} — {result.rulingPlanet.teluguName}
                </h3>
                <p className="text-xs sm:text-sm text-ivory/70 mt-1">
                  Vedic Presiding Deity: <strong>{result.rulingPlanet.deity}</strong> | Element: <strong>{result.rulingPlanet.element}</strong>
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {result.rulingPlanet.traits.map((trait) => (
                  <span key={trait} className="px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-gold border border-gold/25">
                    {trait}
                  </span>
                ))}
              </div>
            </div>

            <p className="text-sm sm:text-base text-ivory/85 leading-relaxed mb-6 font-cormorant text-lg">
              {result.rulingPlanet.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 mb-8">
              <div>
                <span className="text-xs uppercase text-gold/80 font-semibold block mb-1">Lucky Colors</span>
                <span className="text-sm text-ivory font-medium">{result.rulingPlanet.luckyColors.join(", ")}</span>
              </div>
              <div>
                <span className="text-xs uppercase text-gold/80 font-semibold block mb-1">Auspicious Days</span>
                <span className="text-sm text-ivory font-medium">{result.rulingPlanet.luckyDays.join(", ")}</span>
              </div>
              <div>
                <span className="text-xs uppercase text-gold/80 font-semibold block mb-1">Harmonious Numbers</span>
                <span className="text-sm text-ivory font-medium">{result.rulingPlanet.compatibleNumbers.join(", ")}</span>
              </div>
            </div>

            {/* CONSULTATION FUNNEL CTA */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-gold/15 via-gold/10 to-transparent border border-gold/30 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="space-y-1 text-center sm:text-left">
                <h4 className="font-cinzel text-lg font-bold text-ivory">
                  Want to Know Your Numerology Career Timing?
                </h4>
                <p className="text-xs sm:text-sm text-ivory/80">
                  While birth numbers show basic traits, accurate career transitions and marriage timing require synthesizing your Mulank with your Janma Kundali Dasha periods.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto shrink-0">
                <a
                  href={`https://wa.me/919652412221?text=${encodeURIComponent(
                    `Hi Sri Raghavendra Siddhanti garu, I calculated my Mulank (${result.mulank}) and Bhagyank (${result.bhagyank}) on your website and would like a detailed horoscope and numerology consultation.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => handleCtaClick("whatsapp_consultation")}
                  className="px-6 py-3 rounded-full bg-gradient-to-r from-gold to-saffron text-midnight font-bold text-xs uppercase tracking-wider text-center shadow-lg hover:brightness-105 transition-all"
                >
                  Consult On WhatsApp
                </a>
                <Link
                  href="/contact"
                  onClick={() => handleCtaClick("contact_page")}
                  className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-ivory text-xs font-semibold uppercase tracking-wider text-center border border-white/20 transition-all"
                >
                  Book MVP Colony / Online
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
