"use client";

import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === "en" ? "te" : "en")}
      className="flex items-center space-x-2 px-3 py-1 rounded-full border border-gold/30 hover:bg-gold/10 transition-colors duration-200"
    >
      <span className={`text-sm font-medium ${language === "en" ? "text-gold" : "text-foreground"}`}>EN</span>
      <span className="text-foreground/50">|</span>
      <span className={`text-sm font-medium font-notoTelugu ${language === "te" ? "text-gold" : "text-foreground"}`}>తెలుగు</span>
    </button>
  );
}
