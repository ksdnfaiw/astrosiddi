"use client";

import Link from "next/link";
import { useTranslation } from "@/contexts/useTranslation";
import { LanguageToggle } from "@/components/ui/LanguageToggle";

export function Navbar() {
  const { t } = useTranslation();

  return (
    <nav className="sticky top-0 z-50 w-full bg-midnight text-ivory border-b border-gold/20 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex flex-col">
              <span className="font-cinzel text-2xl font-bold text-gold tracking-wider">ASTRO SIDDHI</span>
              <span className="text-xs text-mutedGold tracking-widest uppercase mt-1">{t("logo.tagline")}</span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="hover:text-gold transition-colors font-medium text-sm tracking-wide uppercase">{t("nav.home")}</Link>
            <Link href="/about" className="hover:text-gold transition-colors font-medium text-sm tracking-wide uppercase">{t("nav.about")}</Link>
            <Link href="/services" className="hover:text-gold transition-colors font-medium text-sm tracking-wide uppercase">{t("nav.services")}</Link>
            <Link href="/blog" className="hover:text-gold transition-colors font-medium text-sm tracking-wide uppercase">{t("nav.blog")}</Link>
            <Link href="/contact" className="hover:text-gold transition-colors font-medium text-sm tracking-wide uppercase">{t("nav.contact")}</Link>
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-4">
            <LanguageToggle />
            <Link href="/contact" className="hidden md:inline-flex bg-gold hover:bg-saffron text-midnight font-semibold px-5 py-2.5 rounded transition-colors text-sm uppercase tracking-wide">
              {t("nav.book")}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
