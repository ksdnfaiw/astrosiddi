"use client";

import React, { useState } from "react";
import Link from "next/link";
import { trackToolEvent } from "@/lib/analytics";
import { MAJOR_WORLD_TIMEZONES } from "@/lib/kundliCities";
import type { MoonSignResult } from "@/lib/moonSign";
import { Moon, ArrowRight, AlertTriangle, Compass } from "lucide-react";

export function MoonSignCalculator() {
  const [day, setDay] = useState<number>(29);
  const [month, setMonth] = useState<number>(7);
  const [year, setYear] = useState<number>(1990);
  const [hour, setHour] = useState<number>(12);
  const [minute, setMinute] = useState<number>(0);
  const [tzOffset, setTzOffset] = useState<number>(330); // Default 330 = IST (+05:30)
  const [isSidereal, setIsSidereal] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);
  const [result, setResult] = useState<MoonSignResult | null>(null);

  const handleCalculate = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Dynamic import to keep global bundles lightweight
      const { calculateMoonSign } = await import("@/lib/moonSign");
      const calc = calculateMoonSign({
        year: Number(year),
        month: Number(month),
        day: Number(day),
        hour: Number(hour),
        minute: Number(minute),
        timezoneOffsetMinutes: Number(tzOffset),
        sidereal: isSidereal,
      });

      setResult(calc);

      // Track non-PII analytics
      trackToolEvent("tool_used", {
        toolName: "moon_sign_calculator",
        action: "calculate",
        isSidereal,
      });
      trackToolEvent("result_viewed", {
        toolName: "moon_sign_calculator",
        sign: calc.rashi.english,
        nakshatra: calc.nakshatra.name,
      });
    } catch (err) {
      console.error("Calculation failed:", err);
    } finally {
      setLoading(false);
    }
  };

  const southIndianSignOrder = [
    [11, 0, 1, 2],
    [10, -1, -1, 3],
    [9, -1, -1, 4],
    [8, 7, 6, 5],
  ];

  const signNamesShort = [
    "Aries (Mesham)", "Taurus (Vrishabham)", "Gemini (Mithunam)", "Cancer (Karkatakam)",
    "Leo (Simham)", "Virgo (Kanya)", "Libra (Tula)", "Scorpio (Vrischikam)",
    "Sagittarius (Dhanus)", "Capricorn (Makaram)", "Aquarius (Kumbham)", "Pisces (Meenam)",
  ];

  return (
    <div className="w-full">
      {/* TOOL INPUT CARD */}
      <div className="bg-gradient-to-br from-midnight via-deepPurple to-midnight text-ivory rounded-3xl p-6 sm:p-10 border border-gold/30 shadow-2xl relative overflow-hidden mb-12">
        <div className="absolute top-0 right-0 w-80 h-80 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold/15 text-gold text-xs font-semibold tracking-widest uppercase border border-gold/25 mb-3">
              <Moon className="w-3.5 h-3.5" />
              Ephemeris-Driven Vedic & Western Calculator
            </span>
            <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-ivory">
              Find Your Moon Sign (Chandra Rashi) & Nakshatra
            </h2>
            <p className="text-xs sm:text-sm text-ivory/70 mt-2">
              Calculated dynamically in your browser using astronomical ephemeris algorithms and Lahiri Ayanamsa.
            </p>
          </div>

          <form onSubmit={handleCalculate} className="space-y-6">
            {/* Calculation System Toggle */}
            <div className="flex items-center justify-center gap-2 p-1 bg-midnight/80 border border-gold/25 rounded-xl max-w-md mx-auto">
              <button
                type="button"
                onClick={() => setIsSidereal(true)}
                className={`flex-1 py-2 px-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
                  isSidereal
                    ? "bg-gold text-midnight shadow"
                    : "text-ivory/70 hover:text-ivory"
                }`}
              >
                Vedic Sidereal (Lahiri)
              </button>
              <button
                type="button"
                onClick={() => setIsSidereal(false)}
                className={`flex-1 py-2 px-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
                  !isSidereal
                    ? "bg-gold text-midnight shadow"
                    : "text-ivory/70 hover:text-ivory"
                }`}
              >
                Western Tropical
              </button>
            </div>

            {/* Date Fields */}
            <div>
              <span className="block text-xs uppercase tracking-wider text-gold font-semibold mb-2">
                Date of Birth
              </span>
              <div className="grid grid-cols-3 gap-3">
                <select
                  value={day}
                  onChange={(e) => setDay(Number(e.target.value))}
                  className="px-3.5 py-3 rounded-xl bg-midnight/90 border border-gold/30 text-ivory text-sm outline-none"
                >
                  {Array.from({ length: 31 }, (_, i) => i + 1).map((d) => (
                    <option key={d} value={d} className="bg-midnight text-ivory">
                      {d}
                    </option>
                  ))}
                </select>

                <select
                  value={month}
                  onChange={(e) => setMonth(Number(e.target.value))}
                  className="px-3.5 py-3 rounded-xl bg-midnight/90 border border-gold/30 text-ivory text-sm outline-none"
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

                <select
                  value={year}
                  onChange={(e) => setYear(Number(e.target.value))}
                  className="px-3.5 py-3 rounded-xl bg-midnight/90 border border-gold/30 text-ivory text-sm outline-none"
                >
                  {Array.from({ length: 100 }, (_, i) => 2026 - i).map((y) => (
                    <option key={y} value={y} className="bg-midnight text-ivory">
                      {y}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Time Fields & Timezone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <span className="block text-xs uppercase tracking-wider text-gold font-semibold mb-2">
                  Birth Time (24h / Hours & Minutes)
                </span>
                <div className="grid grid-cols-2 gap-2">
                  <select
                    value={hour}
                    onChange={(e) => setHour(Number(e.target.value))}
                    className="px-3.5 py-3 rounded-xl bg-midnight/90 border border-gold/30 text-ivory text-sm outline-none"
                  >
                    {Array.from({ length: 24 }, (_, i) => i).map((h) => (
                      <option key={h} value={h} className="bg-midnight text-ivory">
                        {String(h).padStart(2, "0")}:00
                      </option>
                    ))}
                  </select>
                  <select
                    value={minute}
                    onChange={(e) => setMinute(Number(e.target.value))}
                    className="px-3.5 py-3 rounded-xl bg-midnight/90 border border-gold/30 text-ivory text-sm outline-none"
                  >
                    {Array.from({ length: 60 }, (_, i) => i).map((m) => (
                      <option key={m} value={m} className="bg-midnight text-ivory">
                        :{String(m).padStart(2, "0")} min
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <span className="block text-xs uppercase tracking-wider text-gold font-semibold mb-2">
                  Birth Timezone
                </span>
                <select
                  value={tzOffset}
                  onChange={(e) => setTzOffset(Number(e.target.value))}
                  className="w-full px-3.5 py-3 rounded-xl bg-midnight/90 border border-gold/30 text-ivory text-sm outline-none truncate"
                >
                  {MAJOR_WORLD_TIMEZONES.map((tz) => (
                    <option key={tz.label} value={tz.offsetMinutes} className="bg-midnight text-ivory">
                      {tz.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <button
              type="submit"
              id="btn-calculate-moon-sign"
              disabled={loading}
              className="w-full py-4 px-6 rounded-full bg-gradient-to-r from-gold via-saffron to-gold text-midnight font-bold text-sm sm:text-base uppercase tracking-widest shadow-[0_0_30px_rgba(245,166,35,0.3)] hover:brightness-110 transition-all flex items-center justify-center gap-2 group disabled:opacity-70"
            >
              <span>{loading ? "Computing Ephemeris..." : "Calculate Moon Sign"}</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>
      </div>

      {/* RESULTS DISPLAY */}
      {result && (
        <div id="moon-sign-results" className="space-y-8 mb-16 animate-fadeIn">
          {/* BOUNDARY WARNING IF CLOSE TO SIGN CHANGE */}
          {result.isNearBoundary && result.boundaryMessage && (
            <div className="p-4 sm:p-5 rounded-2xl bg-amber-500/10 border-2 border-amber-500/40 text-amber-200 flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-amber-400 shrink-0 mt-0.5" />
              <div className="text-xs sm:text-sm leading-relaxed">
                <strong className="block text-amber-300 font-bold mb-1">
                  Moon Sign Boundary Notice (Rashi Sandhi)
                </strong>
                {result.boundaryMessage}
              </div>
            </div>
          )}

          {/* MAIN RESULTS HERO CARD */}
          <div className="bg-gradient-to-br from-midnight via-deepPurple to-midnight text-ivory rounded-3xl p-6 sm:p-10 border border-gold/30 shadow-2xl">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 pb-8 border-b border-gold/20 mb-8">
              <div>
                <span className="text-xs font-bold text-gold uppercase tracking-widest block mb-1">
                  {result.isSidereal ? "Vedic Chandra Rashi (Sidereal Lahiri)" : "Western Tropical Moon Sign"}
                </span>
                <h3 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-ivory via-gold to-ivory">
                  {result.rashi.english} ({result.rashi.sanskrit})
                </h3>
                <p className="text-lg text-gold font-cormorant font-semibold mt-1">
                  తెలుగు: <span lang="te">{result.rashi.telugu}</span>
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <div className="px-4 py-2.5 rounded-xl bg-white/5 border border-gold/20 text-center">
                  <span className="text-[10px] uppercase text-ivory/60 block">Rashi Lord</span>
                  <span className="text-sm font-bold text-gold">{result.rashi.lord}</span>
                </div>
                <div className="px-4 py-2.5 rounded-xl bg-white/5 border border-gold/20 text-center">
                  <span className="text-[10px] uppercase text-ivory/60 block">Element</span>
                  <span className="text-sm font-bold text-gold">{result.rashi.element}</span>
                </div>
                <div className="px-4 py-2.5 rounded-xl bg-white/5 border border-gold/20 text-center">
                  <span className="text-[10px] uppercase text-ivory/60 block">Exact Position</span>
                  <span className="text-sm font-bold text-gold">{result.formattedDegreesInSign}</span>
                </div>
              </div>
            </div>

            {/* NAKSHATRA & PADA DETAILS */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <span className="text-xs uppercase text-gold font-semibold tracking-wider block mb-1">
                  Janma Nakshatra (Birth Star)
                </span>
                <h4 className="font-cinzel text-xl sm:text-2xl font-bold text-ivory">
                  {result.nakshatra.name} — <span lang="te">{result.nakshatra.teluguName}</span>
                </h4>
                <div className="mt-3 space-y-1.5 text-xs sm:text-sm text-ivory/80">
                  <p>Pada / Quarter: <strong className="text-gold font-bold">Pada {result.nakshatra.pada}</strong></p>
                  <p>Nakshatra Ruling Planet: <strong>{result.nakshatra.lord}</strong></p>
                  <p>Presiding Vedic Deity: <strong>{result.nakshatra.deity}</strong></p>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <span className="text-xs uppercase text-gold font-semibold tracking-wider block mb-1">
                  Ephemeris Calculations
                </span>
                <div className="space-y-1.5 text-xs sm:text-sm text-ivory/80 font-mono">
                  <p>UTC Timestamp: <span className="text-ivory">{result.utcDate.slice(0, 16).replace("T", " ")} UTC</span></p>
                  <p>Tropical Elon: <span className="text-ivory">{result.tropicalLongitude.toFixed(3)}°</span></p>
                  <p>Lahiri Ayanamsa: <span className="text-ivory">{result.ayanamsa.toFixed(3)}°</span></p>
                  <p>Apparent Sidereal Elon: <span className="text-gold font-bold">{result.apparentLongitude.toFixed(3)}°</span></p>
                </div>
              </div>
            </div>

            {/* SOUTH INDIAN STYLE KUNDALI CHART PLACEMENT */}
            <div className="mb-8 p-6 rounded-2xl bg-midnight/80 border border-gold/20">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-cinzel text-base sm:text-lg font-bold text-gold flex items-center gap-2">
                  <Compass className="w-5 h-5 text-gold" />
                  South Indian Kundali Placement (Chandra Kundali)
                </h4>
                <span className="text-[11px] text-ivory/60 uppercase tracking-widest hidden sm:inline">
                  Fixed Zodiac Grid (Dakshin Bhaag)
                </span>
              </div>

              <div className="grid grid-cols-4 gap-1.5 sm:gap-2 max-w-lg mx-auto bg-gold/15 p-2 rounded-2xl border border-gold/40">
                {southIndianSignOrder.map((row, rIdx) =>
                  row.map((signIdx, cIdx) => {
                    if (signIdx === -1) {
                      if (rIdx === 1 && cIdx === 1) {
                        return (
                          <div
                            key={`center-${rIdx}-${cIdx}`}
                            className="col-span-2 row-span-2 bg-midnight/90 rounded-xl flex flex-col items-center justify-center p-2 text-center border border-gold/10"
                          >
                            <span className="font-cinzel text-xs sm:text-sm font-bold text-gold">Chandra Kundali</span>
                            <span className="text-[10px] text-ivory/60 mt-1">Sri Raghavendra Jyothishalayam</span>
                          </div>
                        );
                      }
                      return null;
                    }

                    const isMoonHere = signIdx === result.chartPlacement.signIndex;

                    return (
                      <div
                        key={`cell-${rIdx}-${cIdx}`}
                        className={`min-h-[64px] sm:min-h-[76px] p-2 rounded-xl flex flex-col justify-between text-left transition-all ${
                          isMoonHere
                            ? "bg-gold text-midnight font-bold shadow-lg ring-2 ring-saffron"
                            : "bg-midnight/90 text-ivory/70 hover:bg-midnight/70"
                        }`}
                      >
                        <span className={`text-[10px] leading-tight font-semibold ${isMoonHere ? "text-midnight" : "text-ivory/60"}`}>
                          {signNamesShort[signIdx].split(" ")[0]}
                        </span>
                        {isMoonHere && (
                          <span className="inline-flex items-center gap-1 text-[11px] font-extrabold text-midnight uppercase tracking-wider">
                            <Moon className="w-3 h-3 fill-midnight" /> Moon ({result.formattedDegreesInSign.split(" ")[0]})
                          </span>
                        )}
                      </div>
                    );
                  })
                )}
              </div>
            </div>

            {/* CONSULTATION FUNNEL CTA */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-gold/15 via-gold/10 to-transparent border border-gold/30 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="space-y-1 text-center sm:text-left">
                <h4 className="font-cinzel text-lg font-bold text-ivory">
                  What Does Your Moon Sign Reveal About Your Future?
                </h4>
                <p className="text-xs sm:text-sm text-ivory/80">
                  Your Moon sign governs your emotional core, mental stability, Sade Sati timing, and Telugu marriage matching (Jathaka Porutham). Consult Sri Raghavendra Siddhanti garu for a complete birth chart synthesis.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto shrink-0">
                <a
                  href={`https://wa.me/919652412221?text=${encodeURIComponent(
                    `Hi Sri Raghavendra Siddhanti garu, I calculated my Moon Sign as ${result.rashi.english} (${result.nakshatra.name}) on your website and would like a personal astrology reading.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full bg-gradient-to-r from-gold to-saffron text-midnight font-bold text-xs uppercase tracking-wider text-center shadow-lg hover:brightness-105 transition-all"
                >
                  Consult On WhatsApp
                </a>
                <Link
                  href="/contact"
                  className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-ivory text-xs font-semibold uppercase tracking-wider text-center border border-white/20 transition-all"
                >
                  Book In-Person / Online
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
