import React from "react";
import { MapPin, Award, Phone } from "lucide-react";

export function VizagTrustBanner() {
  const localities = [
    "Dwaraka Nagar",
    "MVP Colony",
    "Madhurawada",
    "Gajuwaka",
    "Siripuram",
    "Rushikonda"
  ];

  return (
    <div className="my-10 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-midnight via-deepPurple to-midnight text-ivory border border-gold/30 shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-3 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/15 text-gold text-xs font-semibold tracking-wider uppercase border border-gold/20">
            <Award className="w-3.5 h-3.5" />
            <span>25+ Years of Vedic Lineage in Vizag</span>
          </div>
          
          <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-ivory tracking-wide leading-snug">
            Authentic Astrological Guidance for Visakhapatnam Residents
          </h3>
          
          <p className="text-sm sm:text-base text-ivory/85 leading-relaxed">
            Serving Visakhapatnam for 25+ Years across <span className="text-gold font-medium">Dwaraka Nagar, MVP Colony, Madhurawada, Gajuwaka, Siripuram, and Rushikonda</span>. Consultations available in Telugu & English — In-Person & Online.
          </p>
          
          <div className="flex flex-wrap gap-2 pt-1">
            {localities.map((loc) => (
              <span key={loc} className="inline-flex items-center gap-1 text-[11px] px-2.5 py-1 rounded-md bg-white/5 text-ivory/80 border border-white/10">
                <MapPin className="w-3 h-3 text-gold" />
                {loc}
              </span>
            ))}
          </div>
        </div>

        <div className="flex-shrink-0 w-full md:w-auto flex flex-col sm:flex-row md:flex-col gap-3">
          <a
            href="https://wa.me/919652412221?text=Hi%20Astro%20Siddhi,%20I%20would%20like%20to%20book%20a%20consultation%20in%20Visakhapatnam."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-gold to-saffron text-midnight font-bold text-xs uppercase tracking-widest shadow-lg hover:shadow-gold/30 hover:scale-[1.02] transition-all text-center"
          >
            <span>Book On WhatsApp</span>
          </a>
          <a
            href="tel:+919652412221"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-ivory font-semibold text-xs tracking-wider transition-all border border-white/15 text-center"
          >
            <Phone className="w-3.5 h-3.5 text-gold" />
            <span>Call +91 96524 12221</span>
          </a>
        </div>
      </div>
    </div>
  );
}
