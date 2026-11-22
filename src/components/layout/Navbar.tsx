"use client";

import Link from "next/link";
import { useTranslation } from "@/contexts/useTranslation";
import { LanguageToggle } from "@/components/ui/LanguageToggle";
import { Sparkles, Menu } from "lucide-react";

const LINKS = [
  { href: "/", key: "nav.home", fallback: "Home" },
  { href: "/about", key: "nav.about", fallback: "About" },
  { href: "/services", key: "nav.services", fallback: "Services" },
  { href: "/horoscope", key: "nav.horoscope", fallback: "Horoscope" },
  { href: "/tools", key: "nav.tools", fallback: "Free Tools" },
  { href: "/blog", key: "nav.blog", fallback: "Blog" },
  { href: "/contact", key: "nav.contact", fallback: "Contact" },
];

const desktopLink =
  "relative text-ivory/90 hover:text-gold transition-colors font-semibold text-xs tracking-[0.1em] xl:tracking-[0.12em] uppercase after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-gold after:transition-all hover:after:w-full";

export function Navbar() {
  const { t } = useTranslation();

  return (
    <nav aria-label="Main" className="sticky top-0 z-50 w-full bg-midnight text-ivory border-b border-gold/10 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 sm:h-24">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex flex-col items-center sm:items-start group">
              <div className="flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-gold group-hover:rotate-12 transition-transform duration-300" aria-hidden="true" />
                <span className="font-cinzel text-xl sm:text-2xl xl:text-3xl font-bold text-gold tracking-widest drop-shadow-md">
                  ASTRO SIDDHI
                </span>
              </div>
              <span className="text-[0.65rem] sm:text-xs text-mutedGold/80 tracking-[0.3em] uppercase mt-1 pl-8">
                <span lang="sa">ज्योतिषम्</span> | <span lang="te">జ్యోతిష్యం</span>
              </span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-4 xl:space-x-7">
            {LINKS.map((l) => (
              <Link key={l.href} href={l.href} className={desktopLink}>
                {t(l.key) !== l.key ? t(l.key) : l.fallback}
              </Link>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-3 sm:space-x-6">
            <LanguageToggle />
            <Link
              href="/contact"
              className="hidden xl:inline-flex bg-gold hover:bg-saffron text-midnight font-bold px-5 py-2.5 rounded-full transition-all duration-300 text-xs uppercase tracking-widest shadow-[0_0_20px_rgba(245,166,35,0.2)] hover:shadow-[0_0_30px_rgba(255,107,0,0.4)] hover:-translate-y-0.5"
            >
              {t("nav.book")}
            </Link>

            {/* Mobile menu: native <details>, no JavaScript */}
            <details className="lg:hidden relative group">
              <summary
                aria-label="Open menu"
                className="list-none cursor-pointer p-2 rounded-lg border border-gold/30 text-gold [&::-webkit-details-marker]:hidden"
              >
                <Menu className="w-5 h-5" aria-hidden="true" />
              </summary>
              <div className="absolute right-0 top-full mt-3 w-60 rounded-2xl border border-gold/20 bg-midnight p-3 shadow-2xl">
                <ul className="flex flex-col">
                  {LINKS.map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        className="block rounded-lg px-4 py-3 text-sm font-semibold uppercase tracking-wider text-ivory/90 hover:bg-gold/10 hover:text-gold"
                      >
                        {t(l.key) !== l.key ? t(l.key) : l.fallback}
                      </Link>
                    </li>
                  ))}
                  <li className="pt-2">
                    <Link
                      href="/contact"
                      className="block rounded-full bg-gold px-4 py-3 text-center text-xs font-bold uppercase tracking-widest text-midnight"
                    >
                      {t("nav.book")}
                    </Link>
                  </li>
                </ul>
              </div>
            </details>
          </div>
        </div>
      </div>
    </nav>
  );
}
