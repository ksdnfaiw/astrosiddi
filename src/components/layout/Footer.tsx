"use client";

import React from "react";
import Link from "next/link";
import { useTranslation } from "@/contexts/useTranslation";
import { MapPin, Phone, Mail, Sparkles } from "lucide-react";

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-midnight text-ivory/80 pt-20 pb-10 border-t border-gold/10 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Col */}
          <div className="col-span-1 md:col-span-2 pr-0 md:pr-12">
            <Link href="/" className="flex items-center gap-2 mb-6 group inline-flex">
              <Sparkles className="w-5 h-5 text-gold group-hover:rotate-12 transition-transform" />
              <h3 className="font-cinzel text-3xl font-bold text-gold tracking-widest">ASTRO SIDDHI</h3>
            </Link>
            <p className="mb-8 max-w-sm text-sm sm:text-base leading-relaxed font-cormorant text-ivory/70">{t("footer.tagline")}</p>
          </div>

          {/* Links Col */}
          <div>
            <h4 className="font-cinzel text-lg text-gold mb-6 font-bold tracking-widest uppercase">Quick Links</h4>
            <ul className="space-y-4 text-sm font-medium tracking-wide">
              <li><Link href="/" className="hover:text-gold transition-colors inline-flex items-center gap-2 group"><span className="w-1 h-1 bg-gold/50 rounded-full group-hover:w-2 transition-all"></span> {t("nav.home")}</Link></li>
              <li><Link href="/about" className="hover:text-gold transition-colors inline-flex items-center gap-2 group"><span className="w-1 h-1 bg-gold/50 rounded-full group-hover:w-2 transition-all"></span> {t("nav.about")}</Link></li>
              <li><Link href="/services" className="hover:text-gold transition-colors inline-flex items-center gap-2 group"><span className="w-1 h-1 bg-gold/50 rounded-full group-hover:w-2 transition-all"></span> {t("nav.services")}</Link></li>
              <li><Link href="/contact" className="hover:text-gold transition-colors inline-flex items-center gap-2 group"><span className="w-1 h-1 bg-gold/50 rounded-full group-hover:w-2 transition-all"></span> {t("nav.contact")}</Link></li>
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h4 className="font-cinzel text-lg text-gold mb-6 font-bold tracking-widest uppercase">Contact Us</h4>
            <ul className="space-y-5 text-sm font-cormorant text-base">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <span className="leading-relaxed">Visakhapatnam, Andhra Pradesh<br/><span className="text-ivory/50 text-sm">(Also serving Hyderabad)</span></span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold shrink-0" />
                <span>+91 96524 12221</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold shrink-0" />
                <a href="mailto:info@astrosiddhi.com" className="hover:text-gold transition-colors">info@astrosiddhi.com</a>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gold/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs tracking-wider uppercase text-ivory/50">
          <p>© {new Date().getFullYear()} {t("footer.copyright")}</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-gold transition-colors">{t("footer.privacy")}</Link>
            <Link href="/terms" className="hover:text-gold transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
