"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslation } from "@/contexts/useTranslation";
import { LanguageToggle } from "@/components/ui/LanguageToggle";
import {
  Sparkles,
  Menu,
  X,
  ChevronDown,
  Phone,
  MessageCircle,
  Compass,
  Calendar,
  Layers,
  Wrench,
  BookOpen,
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
        desc: "Complete astrological guidance & consultations",
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
        desc: "Home, flat & office spatial harmony without demolition",
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
        desc: "Explore our Vedic calculation suite",
      },
      {
        href: "/tools/numerology-calculator",
        label: "Numerology Calculator",
        labelTe: "సంఖ్యాశాస్త్ర కాలిక్యులేటర్",
        desc: "Discover your Mulank, Bhagyank & Life Path",
      },
      {
        href: "/tools/moon-sign-calculator",
        label: "Moon Sign Calculator",
        labelTe: "చంద్ర రాశి కాలిక్యులేటర్",
        desc: "Find your Janma Rashi & Nakshatra",
      },
      {
        href: "/tools/kundli-generator",
        label: "Free Kundli Generator",
        labelTe: "కుండలి జనరేటర్",
        desc: "Generate your Vedic birth chart",
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

  // Close mobile menu and dropdowns upon route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalStyle;
      };
    }
  }, [mobileMenuOpen]);

  // Close on Escape key
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
    }, 150);
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
    <header className="sticky top-0 z-50 w-full bg-midnight/95 backdrop-blur-md text-ivory border-b border-gold/15 shadow-xl transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 sm:h-22 lg:h-24">
          {/* ========================================================
              1. BRAND LOGO (ACCURATE ALIGNMENT ACROSS SCREEN SIZES)
              ======================================================== */}
          <div className="flex-shrink-0 flex items-center">
            <Link
              href="/"
              className="flex flex-col items-start group select-none py-1"
              aria-label="Astro Siddhi Home"
            >
              <div className="flex items-center gap-2 sm:gap-2.5">
                <Sparkles
                  className="w-5 h-5 sm:w-6 sm:h-6 text-gold group-hover:rotate-12 transition-transform duration-300 shrink-0"
                  aria-hidden="true"
                />
                <span className="font-cinzel text-lg sm:text-2xl lg:text-[1.65rem] xl:text-3xl font-bold text-gold tracking-widest drop-shadow-md whitespace-nowrap leading-none">
                  ASTRO SIDDHI
                </span>
              </div>
              <span className="text-[0.6rem] sm:text-[0.68rem] text-gold/80 tracking-[0.25em] sm:tracking-[0.3em] uppercase mt-1 pl-7 sm:pl-8 font-medium">
                <span lang="sa">ज्योतिषम्</span> | <span lang="te">జ్యోతిష్యం</span>
              </span>
            </Link>
          </div>

          {/* ========================================================
              2. DESKTOP NAVIGATION LINKS & DROPDOWNS (LG & ABOVE)
              ======================================================== */}
          <nav
            aria-label="Desktop Navigation"
            className="hidden lg:flex items-center space-x-1 xl:space-x-2 2xl:space-x-4"
          >
            {NAV_ITEMS.map((item) => {
              const active = isRouteActive(item.href);
              const label = t(item.key) !== item.key ? t(item.key) : item.fallback;

              if (item.subItems) {
                const isOpen = activeDropdown === item.key;
                return (
                  <div
                    key={item.href}
                    className="relative group"
                    onMouseEnter={() => handleDropdownEnter(item.key)}
                    onMouseLeave={handleDropdownLeave}
                  >
                    <div className="flex items-center">
                      <Link
                        href={item.href}
                        className={`inline-flex items-center gap-1 px-2.5 xl:px-3 py-2 text-xs xl:text-[13px] font-semibold uppercase tracking-wider transition-colors duration-200 relative ${
                          active ? "text-gold font-bold" : "text-ivory/85 hover:text-gold"
                        }`}
                      >
                        <span>{label}</span>
                        <ChevronDown
                          className={`w-3.5 h-3.5 transition-transform duration-200 ${
                            isOpen ? "rotate-180 text-gold" : "text-ivory/60 group-hover:text-gold"
                          }`}
                          aria-hidden="true"
                        />
                        {/* Active underline indicator */}
                        {active && (
                          <span className="absolute bottom-0 left-2.5 right-2.5 h-0.5 bg-gold rounded-full" />
                        )}
                      </Link>
                    </div>

                    {/* Dropdown Menu Box */}
                    {isOpen && (
                      <div
                        className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-72 z-50 animate-in fade-in slide-in-from-top-2 duration-200"
                        role="menu"
                        aria-label={`${label} submenu`}
                      >
                        <div className="rounded-2xl bg-midnight/98 border border-gold/30 shadow-[0_15px_40px_rgba(0,0,0,0.6)] p-2.5 backdrop-blur-xl">
                          <ul className="space-y-1">
                            {item.subItems.map((sub) => {
                              const isSubActive = pathname === sub.href;
                              const subLabel = language === "te" && sub.labelTe ? sub.labelTe : sub.label;
                              return (
                                <li key={sub.href} role="none">
                                  <Link
                                    href={sub.href}
                                    role="menuitem"
                                    className={`block px-3.5 py-2.5 rounded-xl transition-all duration-200 ${
                                      isSubActive
                                        ? "bg-gold/15 text-gold font-bold"
                                        : "text-ivory/85 hover:bg-gold/10 hover:text-gold"
                                    }`}
                                  >
                                    <div className="text-xs font-bold tracking-wide">{subLabel}</div>
                                    {sub.desc && (
                                      <div className="text-[10px] text-ivory/50 mt-0.5 leading-snug line-clamp-1">
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
                  className={`relative px-2.5 xl:px-3 py-2 text-xs xl:text-[13px] font-semibold uppercase tracking-wider transition-colors duration-200 whitespace-nowrap ${
                    active ? "text-gold font-bold" : "text-ivory/85 hover:text-gold"
                  }`}
                >
                  <span>{label}</span>
                  {active && (
                    <span className="absolute bottom-0 left-2.5 right-2.5 h-0.5 bg-gold rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* ========================================================
              3. RIGHT ACTIONS (LANGUAGE TOGGLE, CTA BUTTON, MOBILE TOGGLE)
              ======================================================== */}
          <div className="flex items-center space-x-2.5 sm:space-x-4">
            <LanguageToggle />

            {/* Book Consultation CTA Button (Desktop) */}
            <Link
              href="/contact"
              className="hidden lg:inline-flex items-center gap-1.5 bg-gradient-to-r from-gold via-saffron to-gold text-midnight font-bold px-4 xl:px-5 py-2 xl:py-2.5 rounded-full transition-all duration-300 text-[11px] xl:text-xs uppercase tracking-wider shadow-[0_0_15px_rgba(245,166,35,0.25)] hover:shadow-[0_0_25px_rgba(255,107,0,0.4)] hover:-translate-y-0.5 whitespace-nowrap"
            >
              <Calendar className="w-3.5 h-3.5 text-midnight shrink-0" aria-hidden="true" />
              <span>{t("nav.book")}</span>
            </Link>

            {/* Mobile / Tablet Menu Button Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
              className="lg:hidden p-2.5 rounded-xl border border-gold/30 text-gold hover:bg-gold/10 active:scale-95 transition-all focus:outline-none focus:ring-2 focus:ring-gold/50"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true" />
              ) : (
                <Menu className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* ========================================================
          4. MOBILE NAVIGATION DRAWER & BACKDROP OVERLAY
          ======================================================== */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop blur overlay */}
          <div
            className="fixed inset-0 top-20 sm:top-22 bg-black/70 backdrop-blur-sm z-40 lg:hidden animate-in fade-in duration-200"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Mobile Navigation Drawer */}
          <nav
            aria-label="Mobile Navigation"
            className="fixed top-20 sm:top-22 left-0 right-0 max-h-[calc(100vh-5rem)] overflow-y-auto bg-midnight/98 border-b border-gold/25 shadow-2xl z-50 lg:hidden animate-in slide-in-from-top-4 duration-300"
          >
            <div className="px-4 py-6 space-y-4 max-w-md mx-auto">
              {/* Navigation Links List */}
              <ul className="space-y-1.5">
                {NAV_ITEMS.map((item) => {
                  const active = isRouteActive(item.href);
                  const label = t(item.key) !== item.key ? t(item.key) : item.fallback;
                  const isAccordionOpen = !!expandedMobileAccordions[item.key];

                  if (item.subItems) {
                    return (
                      <li key={item.href} className="rounded-xl overflow-hidden border border-gold/10">
                        <div className="flex items-center justify-between bg-white/[0.03] hover:bg-white/[0.06] transition-colors">
                          <Link
                            href={item.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className={`flex-1 px-4 py-3 text-sm font-semibold uppercase tracking-wider flex items-center gap-2.5 ${
                              active ? "text-gold font-bold" : "text-ivory/90"
                            }`}
                          >
                            <span>{label}</span>
                          </Link>
                          <button
                            type="button"
                            onClick={() => toggleMobileAccordion(item.key)}
                            aria-label={`Toggle ${label} submenu`}
                            className="p-3 text-gold/70 hover:text-gold transition-colors"
                          >
                            <ChevronDown
                              className={`w-4 h-4 transition-transform duration-200 ${
                                isAccordionOpen ? "rotate-180" : ""
                              }`}
                              aria-hidden="true"
                            />
                          </button>
                        </div>

                        {/* Accordion Sub-items */}
                        {isAccordionOpen && (
                          <div className="bg-black/30 border-t border-gold/10 py-1.5 px-3 space-y-1">
                            {item.subItems.map((sub) => {
                              const isSubActive = pathname === sub.href;
                              const subLabel = language === "te" && sub.labelTe ? sub.labelTe : sub.label;
                              return (
                                <Link
                                  key={sub.href}
                                  href={sub.href}
                                  onClick={() => setMobileMenuOpen(false)}
                                  className={`block px-3 py-2 rounded-lg text-xs font-medium tracking-wide transition-colors ${
                                    isSubActive
                                      ? "bg-gold/15 text-gold font-bold"
                                      : "text-ivory/80 hover:text-gold hover:bg-white/5"
                                  }`}
                                >
                                  <div>{subLabel}</div>
                                  {sub.desc && (
                                    <div className="text-[10px] text-ivory/50 mt-0.5">{sub.desc}</div>
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
                        className={`block rounded-xl px-4 py-3 text-sm font-semibold uppercase tracking-wider transition-all ${
                          active
                            ? "bg-gold/15 text-gold font-bold border border-gold/30"
                            : "text-ivory/90 hover:bg-gold/10 hover:text-gold"
                        }`}
                      >
                        {label}
                      </Link>
                    </li>
                  );
                })}
              </ul>

              {/* Action Buttons in Mobile Menu */}
              <div className="pt-3 border-t border-gold/15 space-y-3">
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold via-saffron to-gold py-3.5 px-6 text-center text-xs font-bold uppercase tracking-widest text-midnight shadow-[0_4px_20px_rgba(245,166,35,0.35)]"
                >
                  <Calendar className="w-4 h-4 text-midnight" aria-hidden="true" />
                  <span>{t("nav.book")}</span>
                </Link>

                <div className="grid grid-cols-2 gap-2.5 pt-1">
                  <a
                    href="tel:9652412221"
                    className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-midnight border border-gold/30 text-gold text-xs font-semibold hover:bg-gold/10 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                    <span>Call Now</span>
                  </a>
                  <a
                    href="https://wa.me/919652412221?text=Hello%20Astro%20Siddhi,%20I%20would%20like%20to%20book%20a%20Vedic%20Astrology%20Consultation."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366] text-xs font-semibold hover:bg-[#25D366]/30 transition-colors"
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
