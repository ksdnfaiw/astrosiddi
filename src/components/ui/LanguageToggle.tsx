"use client";

import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      role="group"
      aria-label="Language Selector"
      className="inline-flex items-center h-[42px] px-3 rounded-full border border-[rgba(255,255,255,0.12)] bg-[#171226]/50 hover:bg-[#171226] hover:border-[rgba(255,255,255,0.2)] transition-all select-none backdrop-blur-sm"
    >
      <button
        type="button"
        onClick={() => setLanguage("en")}
        aria-pressed={language === "en"}
        aria-label="Switch language to English"
        className={`text-xs font-semibold tracking-wider transition-colors px-1 py-0.5 rounded focus:outline-none ${
          language === "en"
            ? "text-[#F9A51A] font-bold"
            : "text-[#A9A0B4] hover:text-[#EAE6EF]"
        }`}
      >
        EN
      </button>

      <span className="text-white/20 text-xs px-1" aria-hidden="true">
        |
      </span>

      <button
        type="button"
        onClick={() => setLanguage("te")}
        aria-pressed={language === "te"}
        aria-label="తెలుగు భాషకు మార్చండి"
        className={`text-xs font-semibold tracking-wide transition-colors px-1 py-0.5 rounded focus:outline-none font-notoTelugu ${
          language === "te"
            ? "text-[#F9A51A] font-bold"
            : "text-[#A9A0B4] hover:text-[#EAE6EF]"
        }`}
      >
        తెలుగు
      </button>
    </div>
  );
}
