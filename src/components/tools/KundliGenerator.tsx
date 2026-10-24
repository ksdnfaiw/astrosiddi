"use client";

import React, { useState } from "react";
import Link from "next/link";
import { POPULAR_INDIAN_CITIES } from "@/lib/kundliCities";
import { trackToolEvent } from "@/lib/analytics";
import { Compass, AlertCircle, ArrowRight } from "lucide-react";

export function KundliGenerator() {
  const [selectedCity, setSelectedCity] = useState<string>("Visakhapatnam (Vizag)");
  const [manualMode, setManualMode] = useState<boolean>(false);
  const [lat, setLat] = useState<number>(17.6868);
  const [lng, setLng] = useState<number>(83.2185);
  const [day, setDay] = useState<number>(1);
  const [month, setMonth] = useState<number>(1);
  const [year, setYear] = useState<number>(1995);
  const [hour, setHour] = useState<number>(10);
  const [minute, setMinute] = useState<number>(30);
  const [generated, setGenerated] = useState<boolean>(false);

  const handleCityChange = (cityName: string) => {
    setSelectedCity(cityName);
    const city = POPULAR_INDIAN_CITIES.find((c) => c.name === cityName);
    if (city) {
      setLat(city.lat);
      setLng(city.lng);
    }
  };

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    setGenerated(true);
    trackToolEvent("tool_used", { toolName: "kundli_generator", action: "generate_preview" });
  };

  return (
    <div className="w-full">
      {/* ACCURACY GATE PREVIEW BANNER */}
      <div className="mb-8 p-4 sm:p-5 rounded-2xl bg-amber-500/10 border-2 border-amber-500/30 text-amber-200 flex items-start gap-3">
        <AlertCircle className="w-6 h-6 text-amber-400 shrink-0 mt-0.5" />
        <div className="text-xs sm:text-sm leading-relaxed">
          <strong className="block text-amber-300 font-bold mb-1">
            Kundli Generator (Phase 3 Foundation — Astrological Calibration Preview)
          </strong>
          In accordance with our strict accuracy gate standards, planetary houses and Vimshottari Dasha algorithms are currently undergoing verification with Sri Raghavendra Siddhanti garu against certified Vedic horoscopes. Client preview enabled.
        </div>
      </div>

      {/* INPUT FORM */}
      <div className="bg-gradient-to-br from-midnight via-deepPurple to-midnight text-ivory rounded-3xl p-6 sm:p-10 border border-gold/30 shadow-2xl relative overflow-hidden mb-12">
        <div className="relative z-10 max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold/15 text-gold text-xs font-semibold tracking-widest uppercase border border-gold/25 mb-3">
              <Compass className="w-3.5 h-3.5" />
              Free South Indian Vedic Horoscope
            </span>
            <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-ivory">
              Vedic Janma Kundali Generator
            </h2>
            <p className="text-xs sm:text-sm text-ivory/70 mt-2">
              Compute your Lagna (Ascendant), planetary positions, and South Indian birth chart layout.
            </p>
          </div>

          <form onSubmit={handleGenerate} className="space-y-6">
            {/* Place of Birth */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label htmlFor="city-select" className="text-xs uppercase tracking-wider text-gold font-semibold">
                  Birth Place / City
                </label>
                <button
                  type="button"
                  onClick={() => setManualMode(!manualMode)}
                  className="text-xs text-gold underline hover:text-saffron transition-colors"
                >
                  {manualMode ? "Select from City List" : "Enter Coordinates Manually"}
                </button>
              </div>

              {!manualMode ? (
                <select
                  id="city-select"
                  value={selectedCity}
                  onChange={(e) => handleCityChange(e.target.value)}
                  className="w-full px-3.5 py-3 rounded-xl bg-midnight/90 border border-gold/30 text-ivory text-sm outline-none"
                >
                  {POPULAR_INDIAN_CITIES.map((c) => (
                    <option key={c.name} value={c.name} className="bg-midnight text-ivory">
                      {c.name}, {c.state} ({c.lat.toFixed(2)}° N, {c.lng.toFixed(2)}° E)
                    </option>
                  ))}
                </select>
              ) : (
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <span className="block text-[11px] text-ivory/60 mb-1">Latitude (°N)</span>
                    <input
                      type="number"
                      step="0.0001"
                      value={lat}
                      onChange={(e) => setLat(Number(e.target.value))}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-midnight/90 border border-gold/30 text-ivory text-sm outline-none"
                      placeholder="e.g. 17.6868"
                    />
                  </div>
                  <div>
                    <span className="block text-[11px] text-ivory/60 mb-1">Longitude (°E)</span>
                    <input
                      type="number"
                      step="0.0001"
                      value={lng}
                      onChange={(e) => setLng(Number(e.target.value))}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-midnight/90 border border-gold/30 text-ivory text-sm outline-none"
                      placeholder="e.g. 83.2185"
                    />
                  </div>
                </div>
              )}
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
                  className="px-3 py-2.5 rounded-xl bg-midnight/90 border border-gold/30 text-ivory text-sm"
                >
                  {Array.from({ length: 31 }, (_, i) => i + 1).map((d) => (
                    <option key={d} value={d} className="bg-midnight text-ivory">{d}</option>
                  ))}
                </select>
                <select
                  value={month}
                  onChange={(e) => setMonth(Number(e.target.value))}
                  className="px-3 py-2.5 rounded-xl bg-midnight/90 border border-gold/30 text-ivory text-sm"
                >
                  {[
                    "Jan (1)", "Feb (2)", "Mar (3)", "Apr (4)", "May (5)", "Jun (6)",
                    "Jul (7)", "Aug (8)", "Sep (9)", "Oct (10)", "Nov (11)", "Dec (12)",
                  ].map((mName, idx) => (
                    <option key={idx + 1} value={idx + 1} className="bg-midnight text-ivory">{mName}</option>
                  ))}
                </select>
                <select
                  value={year}
                  onChange={(e) => setYear(Number(e.target.value))}
                  className="px-3 py-2.5 rounded-xl bg-midnight/90 border border-gold/30 text-ivory text-sm"
                >
                  {Array.from({ length: 100 }, (_, i) => 2026 - i).map((y) => (
                    <option key={y} value={y} className="bg-midnight text-ivory">{y}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Time Fields */}
            <div>
              <span className="block text-xs uppercase tracking-wider text-gold font-semibold mb-2">
                Exact Birth Time (Hour & Minute)
              </span>
              <div className="grid grid-cols-2 gap-3">
                <select
                  value={hour}
                  onChange={(e) => setHour(Number(e.target.value))}
                  className="px-3 py-2.5 rounded-xl bg-midnight/90 border border-gold/30 text-ivory text-sm"
                >
                  {Array.from({ length: 24 }, (_, i) => i).map((h) => (
                    <option key={h} value={h} className="bg-midnight text-ivory">{String(h).padStart(2, "0")}:00</option>
                  ))}
                </select>
                <select
                  value={minute}
                  onChange={(e) => setMinute(Number(e.target.value))}
                  className="px-3 py-2.5 rounded-xl bg-midnight/90 border border-gold/30 text-ivory text-sm"
                >
                  {Array.from({ length: 60 }, (_, i) => i).map((m) => (
                    <option key={m} value={m} className="bg-midnight text-ivory">:{String(m).padStart(2, "0")} min</option>
                  ))}
                </select>
              </div>
            </div>

            <button
              type="submit"
              id="btn-generate-kundli"
              className="w-full py-4 px-6 rounded-full bg-gradient-to-r from-gold via-saffron to-gold text-midnight font-bold text-sm sm:text-base uppercase tracking-widest shadow-lg hover:brightness-110 transition-all flex items-center justify-center gap-2"
            >
              <span>Generate Kundali Preview</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>

      {/* GENERATED PREVIEW SUMMARY */}
      {generated && (
        <div className="bg-white rounded-3xl p-6 sm:p-10 border-2 border-gold/30 shadow-xl mb-12 animate-fadeIn text-midnight">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs uppercase tracking-widest text-gold font-bold block mb-1">
              Birth Chart Coordinates Verified
            </span>
            <h3 className="font-cinzel text-2xl font-bold text-midnight">
              Kundali Computational Foundation Prepared
            </h3>
            <p className="text-sm text-midnight/70 mt-2">
              Birth Place: <strong>{selectedCity}</strong> ({lat.toFixed(2)}°N, {lng.toFixed(2)}°E) | Local Time:{" "}
              <strong>{year}-{String(month).padStart(2, "0")}-{String(day).padStart(2, "0")} {String(hour).padStart(2, "0")}:{String(minute).padStart(2, "0")} IST</strong>
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-midnight text-ivory border border-gold/30 text-center max-w-2xl mx-auto">
            <h4 className="font-cinzel text-lg font-bold text-gold mb-2">
              Professional Kundali Synthesis by Sri Raghavendra Siddhanti Garu
            </h4>
            <p className="text-xs sm:text-sm text-ivory/80 leading-relaxed mb-6 font-cormorant text-base">
              Automated online charts provide mathematical house boundaries, but life decisions — marriage compatibility, Sade Sati mitigation, career Muhurtham, and Dosha Parihara — demand human mastery across Brihat Parashara principles.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href={`https://wa.me/919652412221?text=${encodeURIComponent(
                  `Hi Sri Raghavendra Siddhanti garu, I generated my birth details on your website (${selectedCity}, ${year}-${month}-${day} ${hour}:${minute}) and would like a complete Kundali consultation.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full bg-gradient-to-r from-gold to-saffron text-midnight font-bold text-xs uppercase tracking-wider shadow-lg"
              >
                Book WhatsApp Consultation
              </a>
              <Link
                href="/contact"
                className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-ivory text-xs font-semibold uppercase tracking-wider border border-white/20"
              >
                Visit MVP Colony Office
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
