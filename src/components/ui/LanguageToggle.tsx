"use client";

import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === "en" ? "te" : "en")}
      aria-label={`Switch language to ${language === "en" ? "Telugu" : "English"}`}
      className="flex items-center space-x-1.5 sm:space-x-2 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full border border-gold/30 hover:bg-gold/10 active:scale-95 transition-all duration-200 select-none"
    >
      <span className={`text-xs sm:text-sm font-semibold tracking-wider ${language === "en" ? "text-gold" : "text-ivory/70"}`}>
        EN
      </span>
      <span className="text-gold/40 text-xs">|</span>
      <span className={`text-xs sm:text-sm font-semibold ${language === "te" ? "text-gold" : "text-ivory/70"}`}>
        తెలుగు
      </span>
    </button>
  );
}
