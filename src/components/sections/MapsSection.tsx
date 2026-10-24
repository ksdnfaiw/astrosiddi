"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Navigation, Clock, Phone, ExternalLink, MessageSquarePlus, Compass } from "lucide-react";
import { useTranslation } from "@/contexts/useTranslation";

const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/place/Sri+Raghavendra+Jyothishalayam,+P8RQ%2B3P4,+MVP+Double+Rd,+Sector+10,+MVP+Colony,+Visakhapatnam,+Andhra+Pradesh+530017/@17.740137,83.3393431,17z/";

const WRITE_REVIEW_URL =
  "https://search.google.com/local/writereview?placeid=ChIJ__-_Pp5DSzkR-7rLsvNUxdM";

// Google Maps embed URL with exact coordinates (17.740137, 83.3393431)
const MAPS_EMBED_URL =
  "https://maps.google.com/maps?q=17.740137,83.3393431&t=&z=16&ie=UTF8&iwloc=&output=embed";

export function MapsSection() {
  const { language } = useTranslation();

  return (
    <section id="location-map" className="py-24 sm:py-32 bg-deepPurple text-ivory relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#F5A623_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-gold/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-saffron/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-gold/50"></div>
            <span className="text-gold font-bold tracking-[0.25em] uppercase text-xs sm:text-sm flex items-center gap-2">
              <Compass className="w-4 h-4 text-gold" />
              {language === "te" ? "సందర్శించండి" : "Visit Our Center"}
            </span>
            <div className="w-8 h-px bg-gold/50"></div>
          </div>

          <h2 className="font-cinzel text-3xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-ivory via-gold to-ivory mb-6 leading-tight">
            {language === "te"
              ? "శ్రీ రాఘవేంద్ర జ్యోతిష్యాలయం - వైజాగ్"
              : "Sri Raghavendra Jyothishalayam"}
          </h2>

          <p className="text-ivory/70 font-cormorant text-lg sm:text-xl leading-relaxed">
            {language === "te"
              ? "MVP డబుల్ రోడ్, సెక్టార్ 10, MVP కాలనీ, విశాఖపట్నం. ప్రత్యక్ష మరియు ఆన్‌లైన్ సంప్రదింపులు."
              : "Conveniently located at MVP Colony Double Road, Visakhapatnam. Welcoming devotees and clients for in-person and online consultations."}
          </p>
        </div>

        {/* 2-Column Grid: Location Details Card + Google Maps Embed */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left Column: Details Card (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 bg-midnight/80 backdrop-blur-md border border-gold/20 rounded-3xl p-8 sm:p-10 flex flex-col justify-between shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full blur-xl pointer-events-none"></div>

            <div>
              <div className="flex items-center gap-3 mb-6 pb-6 border-b border-gold/15">
                <div className="w-12 h-12 rounded-2xl bg-gold/10 text-gold flex items-center justify-center border border-gold/30 shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-cinzel text-xl font-bold text-ivory">
                    Sri Raghavendra Jyothishalayam
                  </h3>
                  <p className="text-xs text-gold tracking-widest uppercase">
                    Astro Siddhi &bull; MVP Colony
                  </p>
                </div>
              </div>

              {/* Address Details */}
              <div className="space-y-6 mb-8 text-sm sm:text-base font-cormorant">
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-gold shrink-0 mt-1" />
                  <div>
                    <h4 className="font-poppins font-semibold text-xs tracking-wider uppercase text-ivory/90 mb-1">
                      Center Address
                    </h4>
                    <p className="text-ivory/80 text-lg leading-relaxed">
                      P8RQ+3P4, MVP Double Rd, Sector 10,<br />
                      MVP Colony, Visakhapatnam,<br />
                      Andhra Pradesh 530017
                    </p>
                    <span className="inline-block mt-1 text-xs font-poppins text-gold/90 bg-gold/10 px-2.5 py-1 rounded-md border border-gold/20">
                      Landmark: Opposite Axis Bank
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="w-5 h-5 text-gold shrink-0 mt-1" />
                  <div>
                    <h4 className="font-poppins font-semibold text-xs tracking-wider uppercase text-ivory/90 mb-1">
                      Consultation Timings
                    </h4>
                    <p className="text-ivory/80 text-lg leading-snug">
                      Monday – Saturday: 9:00 AM – 8:00 PM<br />
                      Sunday: By Advance Appointment
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-gold shrink-0 mt-1" />
                  <div>
                    <h4 className="font-poppins font-semibold text-xs tracking-wider uppercase text-ivory/90 mb-1">
                      Contact & Appointments
                    </h4>
                    <a
                      href="tel:+919652412221"
                      className="text-ivory/90 hover:text-gold text-lg transition-colors block"
                    >
                      +91 96524 12221
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-6 border-t border-gold/15 flex flex-col gap-3">
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                id="btn-maps-get-directions"
                className="group w-full py-4 px-6 rounded-xl bg-gold hover:bg-saffron text-midnight font-bold transition-all duration-300 text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(245,166,35,0.2)]"
              >
                <Navigation className="w-4 h-4 group-hover:rotate-45 transition-transform" />
                <span>Get Directions on Google Maps</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <a
                href={WRITE_REVIEW_URL}
                target="_blank"
                rel="noopener noreferrer"
                id="btn-maps-write-review"
                className="w-full py-3.5 px-6 rounded-xl bg-midnight/80 hover:bg-midnight text-ivory hover:text-gold border border-gold/30 transition-all duration-300 text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <MessageSquarePlus className="w-4 h-4 text-gold" />
                <span>Write a Google Review</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Google Maps Embed (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 bg-midnight/90 border border-gold/25 rounded-3xl overflow-hidden shadow-2xl relative min-h-[420px] lg:min-h-full flex flex-col"
          >
            {/* Top Bar for Map preview */}
            <div className="bg-midnight/95 px-6 py-3.5 border-b border-gold/20 flex items-center justify-between text-xs text-ivory/70">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="font-medium text-ivory/90">
                  Google Maps Live Location Pin
                </span>
              </div>
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:underline inline-flex items-center gap-1 font-semibold"
              >
                Open Full Map <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Iframe */}
            <div className="w-full flex-grow relative min-h-[380px] lg:min-h-[460px]">
              <iframe
                title="Google Maps Location - Sri Raghavendra Jyothishalayam"
                src={MAPS_EMBED_URL}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full filter saturate-[1.1] contrast-[1.05]"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
