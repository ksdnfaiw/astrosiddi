"use client";

import React from "react";
import Link from "next/link";
import { useTranslation } from "@/contexts/useTranslation";
import { MapPin, Phone, Mail, Sparkles } from "lucide-react";
import { BUSINESS } from "@/lib/site";

const FOOTER_CITIES = [
  { href: "/astrologer-in-visakhapatnam", label: "Visakhapatnam" },
  { href: "/astrologer-in-hyderabad", label: "Hyderabad" },
  { href: "/astrologer-in-bangalore", label: "Bangalore" },
  { href: "/astrologer-in-chennai", label: "Chennai" },
  { href: "/astrologer-in-mumbai", label: "Mumbai" },
  { href: "/astrologer-in-delhi", label: "Delhi" },
  { href: "/astrologer-in-vijayawada", label: "Vijayawada" },
];

const linkCls = "hover:text-gold transition-colors inline-flex items-center gap-2 group";

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-midnight text-ivory/80 pt-16 pb-10 border-t border-gold/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-14">
          {/* Brand Col */}
          <div className="md:col-span-4 pr-0 md:pr-8">
            <Link href="/" className="flex items-center gap-2 mb-5 group inline-flex">
              <Sparkles className="w-5 h-5 text-gold group-hover:rotate-12 transition-transform" aria-hidden="true" />
              <span className="font-cinzel text-3xl font-bold text-gold tracking-widest">ASTRO SIDDHI</span>
            </Link>
            <p className="max-w-sm text-sm sm:text-base leading-relaxed text-ivory/70">{t("footer.tagline")}</p>
          </div>

          {/* Links Col */}
          <div className="md:col-span-2">
            <h2 className="font-cinzel text-lg text-gold mb-5 font-bold tracking-widest uppercase">Quick Links</h2>
            <ul className="space-y-3 text-sm font-medium tracking-wide">
              <li><Link href="/" className={linkCls}>{t("nav.home")}</Link></li>
              <li><Link href="/about" className={linkCls}>{t("nav.about")}</Link></li>
              <li><Link href="/services" className={linkCls}>{t("nav.services")}</Link></li>
              <li><Link href="/horoscope" className={linkCls}>{t("nav.horoscope")}</Link></li>
              <li><Link href="/blog" className={linkCls}>{t("nav.blog")}</Link></li>
              <li><Link href="/contact" className={linkCls}>{t("nav.contact")}</Link></li>
            </ul>
          </div>

          {/* Cities Col */}
          <div className="md:col-span-3">
            <h2 className="font-cinzel text-lg text-gold mb-5 font-bold tracking-widest uppercase">Astrologer Near You</h2>
            <ul className="space-y-3 text-sm font-medium tracking-wide">
              {FOOTER_CITIES.map((c) => (
                <li key={c.href}>
                  <Link href={c.href} className={linkCls}>Astrologer in {c.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Col */}
          <div className="md:col-span-3">
            <h2 className="font-cinzel text-lg text-gold mb-5 font-bold tracking-widest uppercase">Contact Us</h2>
            <ul className="space-y-5 text-sm sm:text-base">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5" aria-hidden="true" />
                <span className="leading-relaxed">
                  P8RQ+3P4, MVP Double Rd, Sector 10,<br />MVP Colony, Visakhapatnam, AP 530017<br />
                  <a href={BUSINESS.mapsUrl} target="_blank" rel="noopener noreferrer" className="text-gold hover:underline text-sm inline-flex items-center gap-1 mt-1">View on Google Maps</a>
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold shrink-0" aria-hidden="true" />
                <a href={`tel:${BUSINESS.phone}`} className="hover:text-gold transition-colors">{BUSINESS.phoneDisplay}</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold shrink-0" aria-hidden="true" />
                <a href={`mailto:${BUSINESS.email}`} className="hover:text-gold transition-colors">{BUSINESS.email}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gold/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs tracking-wider uppercase text-ivory/50">
          <p>© {new Date().getFullYear()} {t("footer.copyright")}</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-gold transition-colors">{t("footer.privacy")}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
