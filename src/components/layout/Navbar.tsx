"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslation } from "@/contexts/useTranslation";
import { LanguageToggle } from "@/components/ui/LanguageToggle";
import {
  Sparkles,
  Calendar,
  ChevronDown,
  Menu,
  X,
  Phone,
  MessageCircle,
} from "lucide-react";

interface SubItem {
  href: string;
  label: string;
  labelTe?: string;
  desc?: string;
}

interface NavItem {
  href: string;
  key: string;
  fallback: string;
  subItems?: SubItem[];
}

const NAV_ITEMS: NavItem[] = [
  { href: "/", key: "nav.home", fallback: "Home" },
  { href: "/about", key: "nav.about", fallback: "About" },
  {
    href: "/services",
    key: "nav.services",
    fallback: "Services",
    subItems: [
      {
        href: "/services",
        label: "All Vedic Services",
        labelTe: "అన్ని వేద సేవలు",
        desc: "Comprehensive astrology consultations & guidance",
      },
      {
        href: "/services/kundali-matching",
        label: "Kundali Matching",
        labelTe: "కుండలి మిలాప్",
        desc: "36 Guna Milan & marriage compatibility",
      },
      {
        href: "/services/career-astrology",
        label: "Career & Business",
        labelTe: "కెరీర్ & వ్యాపార జ్యోతిష్యం",
        desc: "Planetary timing for job, promotion & business",
      },
      {
        href: "/services/vastu-visakhapatnam",
        label: "Vastu Shastra",
        labelTe: "వాస్తు శాస్త్ర సంప్రదింపులు",
        desc: "Non-demolition spatial energy correction",
      },
    ],
  },
  { href: "/horoscope", key: "nav.horoscope", fallback: "Horoscope" },
  {
    href: "/tools",
    key: "nav.tools",
    fallback: "Free Tools",
    subItems: [
      {
        href: "/tools",
        label: "Tools Overview",
        labelTe: "సాధనాల వివరాలు",
        desc: "Explore the Vedic calculation suite",
      },
      {
        href: "/tools/numerology-calculator",
        label: "Numerology Calculator",
        labelTe: "సంఖ్యాశాస్త్ర కాలిక్యులేటర్",
        desc: "Mulank, Bhagyank & Life Path insights",
      },
      {
        href: "/tools/moon-sign-calculator",
        label: "Moon Sign Calculator",
        labelTe: "చంద్ర రాశి కాలిక్యులేటర్",
        desc: "Accurate Janma Rashi & Nakshatra finder",
      },
      {
        href: "/tools/kundli-generator",
        label: "Free Kundli Generator",
        labelTe: "కుండలి జనరేటర్",
        desc: "Complete Vedic birth chart computation",
      },
    ],
  },
  { href: "/blog", key: "nav.blog", fallback: "Blog" },
  { href: "/contact", key: "nav.contact", fallback: "Contact" },
];

export function Navbar() {
  const { t, language } = useTranslation();
  const pathname = usePathname();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [expandedMobileAccordions, setExpandedMobileAccordions] = useState<Record<string, boolean>>({});

  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Close menus upon route navigation
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  // Lock background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [mobileMenuOpen]);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
        setActiveDropdown(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleDropdownEnter = (key: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setActiveDropdown(key);
  };

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 160);
  };

  const toggleMobileAccordion = (key: string) => {
    setExpandedMobileAccordions((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const isRouteActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0D0A19] border-b border-[rgba(255,255,255,0.09)] select-none">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-6 lg:px-8 h-[84px] flex items-center justify-between">
        {/* ========================================================
            SECTION 1 (LEFT): COMPACT ASTRO SIDDHI LOGO (~195px)
            ======================================================== */}
        <div className="flex-shrink-0 w-[190px] sm:w-[195px] flex items-center">
          <Link
            href="/"
            className="flex items-center gap-2.5 select-none group"
            aria-label="Astro Siddhi Home"
          >
            {/* Sophisticated celestial astrology emblem with Sparkles icon */}
            <div className="w-[32px] h-[32px] rounded-lg bg-[#F9A51A]/10 border border-[#F9A51A]/25 flex items-center justify-center shrink-0 group-hover:border-[#F9A51A]/50 transition-all shadow-[0_0_12px_rgba(249,165,26,0.15)]">
              <Sparkles
                className="w-4 h-4 text-[#F9A51A] group-hover:rotate-12 transition-transform duration-300"
                aria-hidden="true"
              />
            </div>

            {/* Brand typography */}
            <div className="flex flex-col justify-center min-w-0">
              <span className="font-outfit font-bold text-[21px] sm:text-[22px] leading-tight text-[#F9A51A] tracking-[0.03em] whitespace-nowrap">
                ASTRO SIDDHI
              </span>
              <span className="text-[9.5px] text-[#A9A0B4] tracking-[0.18em] uppercase font-medium leading-none mt-0.5 whitespace-nowrap">
                <span lang="sa">ज्योतिषम्</span> | <span lang="te">జ్యోతిష్యం</span>
              </span>
            </div>
          </Link>
        </div>

        {/* ========================================================
            SECTION 2 (CENTER): DESKTOP NAVIGATION LINKS (LG & ABOVE)
            ======================================================== */}
        <nav
          aria-label="Main Navigation"
          className="hidden lg:flex items-center justify-center gap-4 xl:gap-5 2xl:gap-6 flex-1 px-4"
        >
          {NAV_ITEMS.map((item) => {
            const active = isRouteActive(item.href);
            const label = t(item.key) !== item.key ? t(item.key) : item.fallback;

            if (item.subItems) {
              const isOpen = activeDropdown === item.key;
              return (
                <div
                  key={item.href}
                  className="relative group py-2"
                  onMouseEnter={() => handleDropdownEnter(item.key)}
                  onMouseLeave={handleDropdownLeave}
                >
                  <div className="flex items-center">
                    <Link
                      href={item.href}
                      className={`inline-flex items-center gap-1 text-[13px] xl:text-[13.5px] 2xl:text-[14px] font-medium tracking-wide transition-colors duration-200 relative whitespace-nowrap py-1 ${
                        active
                          ? "text-[#F9A51A] font-semibold"
                          : "text-[#EAE6EF] hover:text-[#F9A51A]"
                      }`}
                    >
                      <span>{label}</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          isOpen ? "rotate-180 text-[#F9A51A]" : "text-[#A9A0B4] group-hover:text-[#F9A51A]"
                        }`}
                        aria-hidden="true"
                      />
                      {/* Active subtle golden underline */}
                      {active && (
                        <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#F9A51A] rounded-full" />
                      )}
                    </Link>
                  </div>

                  {/* Dropdown Menu Window */}
                  {isOpen && (
                    <div
                      className="absolute top-full left-1/2 -translate-x-1/2 pt-2.5 w-72 z-50 animate-in fade-in slide-in-from-top-1.5 duration-200"
                      role="menu"
                      aria-label={`${label} submenu`}
                    >
                      <div className="rounded-2xl bg-[#171226] border border-[rgba(255,255,255,0.09)] shadow-[0_16px_40px_rgba(0,0,0,0.65)] p-2 backdrop-blur-xl">
                        <ul className="space-y-0.5">
                          {item.subItems.map((sub) => {
                            const isSubActive = pathname === sub.href;
                            const subLabel =
                              language === "te" && sub.labelTe ? sub.labelTe : sub.label;
                            return (
                              <li key={sub.href} role="none">
                                <Link
                                  href={sub.href}
                                  role="menuitem"
                                  className={`block px-3.5 py-2.5 rounded-xl transition-all duration-150 ${
                                    isSubActive
                                      ? "bg-[#F9A51A]/15 text-[#F9A51A] font-semibold"
                                      : "text-[#EAE6EF] hover:bg-white/[0.04] hover:text-[#F9A51A]"
                                  }`}
                                >
                                  <div className="text-[13px] font-medium leading-snug">
                                    {subLabel}
                                  </div>
                                  {sub.desc && (
                                    <div className="text-[10.5px] text-[#A9A0B4] mt-0.5 leading-tight line-clamp-1">
                                      {sub.desc}
                                    </div>
                                  )}
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative text-[13px] xl:text-[13.5px] 2xl:text-[14px] font-medium tracking-wide transition-colors duration-200 whitespace-nowrap py-1 ${
                  active
                    ? "text-[#F9A51A] font-semibold"
                    : "text-[#EAE6EF] hover:text-[#F9A51A]"
                }`}
              >
                <span>{label}</span>
                {active && (
                  <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#F9A51A] rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* ========================================================
            SECTION 3 (RIGHT): LANGUAGE SWITCHER & CONSULTATION CTA
            ======================================================== */}
        <div className="flex items-center gap-3 sm:gap-3.5 flex-shrink-0">
          {/* Language Switcher */}
          <LanguageToggle />

          {/* Primary Consultation CTA Button (Desktop) */}
          <Link
            href="/contact"
            className="hidden lg:inline-flex items-center justify-center gap-2 h-[44px] px-5 xl:px-6 rounded-[24px] bg-[#F9A51A] text-[#0D0A19] font-bold text-[12px] xl:text-[12.5px] uppercase tracking-wider shadow-[0_2px_12px_rgba(249,165,26,0.25)] hover:bg-[#FFB338] hover:shadow-[0_4px_20px_rgba(249,165,26,0.4)] active:scale-[0.98] transition-all duration-200 whitespace-nowrap"
          >
            <Calendar className="w-4 h-4 text-[#0D0A19] shrink-0" aria-hidden="true" />
            <span>{t("nav.book")}</span>
          </Link>

          {/* Mobile Navigation Toggle Button (<LG) */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            className="lg:hidden h-[42px] w-[42px] rounded-xl border border-[rgba(255,255,255,0.12)] bg-[#171226]/50 text-[#F9A51A] hover:bg-[#171226] flex items-center justify-center active:scale-95 transition-all focus:outline-none"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 text-[#F9A51A]" aria-hidden="true" />
            ) : (
              <Menu className="w-5 h-5 text-[#F9A51A]" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* ========================================================
          MOBILE NAVIGATION DRAWER & BACKDROP (<LG)
          ======================================================== */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop Overlay */}
          <div
            className="fixed inset-0 top-[84px] bg-black/75 backdrop-blur-sm z-40 lg:hidden animate-in fade-in duration-200"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Mobile Navigation Drawer */}
          <nav
            aria-label="Mobile Navigation Drawer"
            className="fixed top-[84px] left-0 right-0 max-h-[calc(100vh-84px)] overflow-y-auto bg-[#0D0A19]/98 border-b border-[rgba(255,255,255,0.09)] shadow-[0_20px_50px_rgba(0,0,0,0.8)] z-50 lg:hidden animate-in slide-in-from-top-3 duration-250"
          >
            <div className="px-5 py-6 space-y-4 max-w-md mx-auto">
              {/* Navigation Items List */}
              <ul className="space-y-1">
                {NAV_ITEMS.map((item) => {
                  const active = isRouteActive(item.href);
                  const label = t(item.key) !== item.key ? t(item.key) : item.fallback;
                  const isAccordionOpen = !!expandedMobileAccordions[item.key];

                  if (item.subItems) {
                    return (
                      <li key={item.href} className="rounded-xl overflow-hidden border border-[rgba(255,255,255,0.06)] bg-[#171226]/40">
                        <div className="flex items-center justify-between">
                          <Link
                            href={item.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className={`flex-1 px-4 py-3 text-[13.5px] font-medium tracking-wide flex items-center gap-2 ${
                              active ? "text-[#F9A51A] font-semibold" : "text-[#EAE6EF]"
                            }`}
                          >
                            <span>{label}</span>
                          </Link>
                          <button
                            type="button"
                            onClick={() => toggleMobileAccordion(item.key)}
                            aria-label={`Toggle ${label} sub-services`}
                            className="p-3 text-[#A9A0B4] hover:text-[#F9A51A] transition-colors"
                          >
                            <ChevronDown
                              className={`w-4 h-4 transition-transform duration-200 ${
                                isAccordionOpen ? "rotate-180 text-[#F9A51A]" : ""
                              }`}
                              aria-hidden="true"
                            />
                          </button>
                        </div>

                        {/* Accordion Sub-items */}
                        {isAccordionOpen && (
                          <div className="bg-[#171226] border-t border-[rgba(255,255,255,0.06)] py-1 px-3 space-y-0.5">
                            {item.subItems.map((sub) => {
                              const isSubActive = pathname === sub.href;
                              const subLabel =
                                language === "te" && sub.labelTe ? sub.labelTe : sub.label;
                              return (
                                <Link
                                  key={sub.href}
                                  href={sub.href}
                                  onClick={() => setMobileMenuOpen(false)}
                                  className={`block px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                                    isSubActive
                                      ? "bg-[#F9A51A]/15 text-[#F9A51A] font-semibold"
                                      : "text-[#A9A0B4] hover:text-[#EAE6EF] hover:bg-white/[0.04]"
                                  }`}
                                >
                                  <div>{subLabel}</div>
                                  {sub.desc && (
                                    <div className="text-[10px] text-[#A9A0B4]/60 mt-0.5">
                                      {sub.desc}
                                    </div>
                                  )}
                                </Link>
                              );
                            })}
                          </div>
                        )}
                      </li>
                    );
                  }

                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`block rounded-xl px-4 py-3 text-[13.5px] font-medium tracking-wide transition-all ${
                          active
                            ? "bg-[#F9A51A]/15 text-[#F9A51A] font-semibold border border-[#F9A51A]/30"
                            : "text-[#EAE6EF] hover:bg-white/[0.04] hover:text-[#F9A51A]"
                        }`}
                      >
                        {label}
                      </Link>
                    </li>
                  );
                })}
              </ul>

              {/* Mobile Actions: CTA Button & Quick Call/WhatsApp */}
              <div className="pt-3 border-t border-[rgba(255,255,255,0.09)] space-y-3">
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 h-[46px] rounded-[24px] bg-[#F9A51A] text-[#0D0A19] text-xs font-bold uppercase tracking-wider shadow-[0_2px_12px_rgba(249,165,26,0.3)] active:scale-[0.98] transition-all"
                >
                  <Calendar className="w-4 h-4 text-[#0D0A19]" aria-hidden="true" />
                  <span>{t("nav.book")}</span>
                </Link>

                <div className="grid grid-cols-2 gap-2.5 pt-1">
                  <a
                    href="tel:9652412221"
                    className="flex items-center justify-center gap-1.5 h-[40px] px-3 rounded-xl bg-[#171226] border border-[rgba(255,255,255,0.09)] text-[#EAE6EF] text-xs font-medium hover:text-[#F9A51A] transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#F9A51A] shrink-0" aria-hidden="true" />
                    <span>Call Now</span>
                  </a>
                  <a
                    href="https://wa.me/919652412221?text=Hello%20Astro%20Siddhi,%20I%20would%20like%20to%20book%20a%20Vedic%20Astrology%20Consultation."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 h-[40px] px-3 rounded-xl bg-[#25D366]/15 border border-[#25D366]/30 text-[#25D366] text-xs font-medium hover:bg-[#25D366]/25 transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </>
      )}
    </header>
  );
}
