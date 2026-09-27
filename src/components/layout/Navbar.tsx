"use client";

import Link from "next/link";
import { useTranslation } from "@/contexts/useTranslation";
import { LanguageToggle } from "@/components/ui/LanguageToggle";
import { Sparkles } from "lucide-react";

export function Navbar() {
  const { t } = useTranslation();

  return (
    <nav className="sticky top-0 z-50 w-full bg-midnight/90 backdrop-blur-md text-ivory border-b border-gold/10 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex flex-col items-center sm:items-start group">
              <div className="flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-gold group-hover:rotate-12 transition-transform duration-300" />
                <span className="font-cinzel text-2xl sm:text-3xl font-bold text-gold tracking-widest drop-shadow-md">
                  ASTRO SIDDHI
                </span>
              </div>
              <span className="text-[0.65rem] sm:text-xs text-mutedGold/80 tracking-[0.3em] uppercase mt-1 pl-8">
                {t("logo.tagline")}
              </span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-10">
            <Link href="/" className="relative text-ivory/90 hover:text-gold transition-colors font-semibold text-xs tracking-[0.15em] uppercase after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-gold after:transition-all hover:after:w-full">{t("nav.home")}</Link>
            <Link href="/about" className="relative text-ivory/90 hover:text-gold transition-colors font-semibold text-xs tracking-[0.15em] uppercase after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-gold after:transition-all hover:after:w-full">{t("nav.about")}</Link>
            <Link href="/services" className="relative text-ivory/90 hover:text-gold transition-colors font-semibold text-xs tracking-[0.15em] uppercase after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-gold after:transition-all hover:after:w-full">{t("nav.services")}</Link>
            <Link href="/contact" className="relative text-ivory/90 hover:text-gold transition-colors font-semibold text-xs tracking-[0.15em] uppercase after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-gold after:transition-all hover:after:w-full">{t("nav.contact")}</Link>
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-6">
            <LanguageToggle />
            <Link href="/contact" className="hidden md:inline-flex bg-gold hover:bg-saffron text-midnight font-bold px-6 py-2.5 rounded-full transition-all duration-300 text-xs uppercase tracking-widest shadow-[0_0_20px_rgba(245,166,35,0.2)] hover:shadow-[0_0_30px_rgba(255,107,0,0.4)] hover:-translate-y-0.5">
              {t("nav.book")}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
