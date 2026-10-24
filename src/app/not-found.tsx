import React from "react";
import Link from "next/link";
import { Sparkles, Home, Compass, MessageCircle, BookOpen, ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Page Not Found | 404",
  description: "The astrological page you are looking for cannot be found. Explore our Vedic astrology services and guides.",
};

export default function NotFound() {
  return (
    <div className="min-h-[80vh] bg-ivory text-midnight flex items-center justify-center px-4 py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-2xl mx-auto text-center relative z-10 space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/15 text-gold text-xs font-semibold tracking-widest uppercase border border-gold/30">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Cosmic Coordinates Misaligned</span>
        </div>

        <h1 className="font-cinzel text-6xl sm:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold via-saffron to-gold">
          404
        </h1>

        <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-midnight">
          Page Not Found in the Celestial Chart
        </h2>

        <p className="font-cormorant text-lg sm:text-xl text-midnight/80 max-w-lg mx-auto leading-relaxed">
          The page you requested may have moved or no longer exists. Let us guide you back to our primary Vedic services and astrological resources.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 text-left">
          <Link
            href="/"
            className="p-4 rounded-xl bg-white border border-gold/20 hover:border-gold hover:shadow-md transition-all group flex flex-col justify-between"
          >
            <Home className="w-5 h-5 text-gold mb-2 group-hover:scale-110 transition-transform" />
            <span className="font-cinzel font-bold text-xs uppercase tracking-wider text-midnight">
              Home
            </span>
          </Link>

          <Link
            href="/services"
            className="p-4 rounded-xl bg-white border border-gold/20 hover:border-gold hover:shadow-md transition-all group flex flex-col justify-between"
          >
            <Compass className="w-5 h-5 text-gold mb-2 group-hover:scale-110 transition-transform" />
            <span className="font-cinzel font-bold text-xs uppercase tracking-wider text-midnight">
              Services Hub
            </span>
          </Link>

          <Link
            href="/services/kundali-matching"
            className="p-4 rounded-xl bg-white border border-gold/20 hover:border-gold hover:shadow-md transition-all group flex flex-col justify-between"
          >
            <Sparkles className="w-5 h-5 text-gold mb-2 group-hover:scale-110 transition-transform" />
            <span className="font-cinzel font-bold text-xs uppercase tracking-wider text-midnight">
              Kundali Matching
            </span>
          </Link>

          <Link
            href="/services/vastu-visakhapatnam"
            className="p-4 rounded-xl bg-white border border-gold/20 hover:border-gold hover:shadow-md transition-all group flex flex-col justify-between"
          >
            <Compass className="w-5 h-5 text-gold mb-2 group-hover:scale-110 transition-transform" />
            <span className="font-cinzel font-bold text-xs uppercase tracking-wider text-midnight">
              Vastu Vizag
            </span>
          </Link>

          <Link
            href="/blog"
            className="p-4 rounded-xl bg-white border border-gold/20 hover:border-gold hover:shadow-md transition-all group flex flex-col justify-between"
          >
            <BookOpen className="w-5 h-5 text-gold mb-2 group-hover:scale-110 transition-transform" />
            <span className="font-cinzel font-bold text-xs uppercase tracking-wider text-midnight">
              Blog &amp; Guides
            </span>
          </Link>

          <Link
            href="/contact"
            className="p-4 rounded-xl bg-white border border-gold/20 hover:border-gold hover:shadow-md transition-all group flex flex-col justify-between"
          >
            <MessageCircle className="w-5 h-5 text-gold mb-2 group-hover:scale-110 transition-transform" />
            <span className="font-cinzel font-bold text-xs uppercase tracking-wider text-midnight">
              Book Appointment
            </span>
          </Link>
        </div>

        <div className="pt-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-gold hover:bg-saffron text-midnight font-bold rounded-full transition-all text-xs uppercase tracking-widest shadow-lg"
          >
            <ArrowLeft className="w-4 h-4" /> Return to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
