"use client";

import React from "react";
import Link from "next/link";
import { useTranslation } from "@/contexts/useTranslation";


export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-midnight text-ivory/80 pt-16 pb-8 border-t border-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Col */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="font-cinzel text-2xl font-bold text-gold mb-4">ASTRO SIDDHI</h3>
            <p className="mb-6 max-w-sm text-sm leading-relaxed">{t("footer.tagline")}</p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-mutedGold hover:text-gold transition-colors" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-mutedGold hover:text-gold transition-colors" aria-label="YouTube">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 7.1C2.5 7.1 2.3 5.4 3 4.6 3.8 3.7 4.9 3.7 5.4 3.6 8 3.4 12 3.4 12 3.4s4 0 6.6.2c.5.1 1.6.1 2.4.9.7.8.9 2.5.9 2.5s.2 2 .2 4v2c0 2-.2 4-.2 4s-.2 1.7-.9 2.5c-.8.9-1.9.9-2.4.9-2.6.2-6.6.2-6.6.2s-4 0-6.6-.2c-.5-.1-1.6-.1-2.4-.9-.7-.8-.9-2.5-.9-2.5s-.2-2-.2-4v-2c0-2 .2-4 .2-4z"/><polygon points="9.5 15.5 15.5 12 9.5 8.5 9.5 15.5"/></svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-mutedGold hover:text-gold transition-colors" aria-label="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
            </div>
          </div>

          {/* Links Col */}
          <div>
            <h4 className="font-cormorant text-xl text-gold mb-4 font-semibold tracking-wide">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-gold transition-colors">{t("nav.home")}</Link></li>
              <li><Link href="/about" className="hover:text-gold transition-colors">{t("nav.about")}</Link></li>
              <li><Link href="/services" className="hover:text-gold transition-colors">{t("nav.services")}</Link></li>
              <li><Link href="/blog" className="hover:text-gold transition-colors">{t("nav.blog")}</Link></li>
              <li><Link href="/contact" className="hover:text-gold transition-colors">{t("nav.contact")}</Link></li>
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h4 className="font-cormorant text-xl text-gold mb-4 font-semibold tracking-wide">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <span className="text-gold mr-2 shrink-0">📍</span>
                <span>Vizag & Hyderabad</span>
              </li>
              <li className="flex items-center">
                <span className="text-gold mr-2 shrink-0">📞</span>
                <span>+91 96524 12221</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center text-xs">
          <p>{t("footer.copyright")}</p>
          <div className="mt-4 md:mt-0 space-x-4">
            <Link href="/privacy" className="hover:text-gold transition-colors">{t("footer.privacy")}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
