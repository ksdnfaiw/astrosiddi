import React from "react";
import Link from "next/link";
import { useTranslation } from "@/contexts/useTranslation";
import { Facebook, Instagram, Youtube, Phone, Mail, MapPin } from "lucide-react";

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
              <a href="#" className="text-mutedGold hover:text-gold transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-mutedGold hover:text-gold transition-colors"><Youtube size={20} /></a>
              <a href="#" className="text-mutedGold hover:text-gold transition-colors"><Facebook size={20} /></a>
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
                <MapPin size={16} className="text-gold mr-2 mt-0.5 shrink-0" />
                <span>Hyderabad / Bengaluru</span>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="text-gold mr-2 shrink-0" />
                <span>+91 XXXXX XXXXX</span>
              </li>
              <li className="flex items-center">
                <Mail size={16} className="text-gold mr-2 shrink-0" />
                <span>contact@astrosiddhi.com</span>
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
