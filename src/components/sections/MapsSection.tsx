"use client";

import React from "react";
import { MapPin, Navigation, Clock, Phone, ExternalLink, MessageSquarePlus, Compass } from "lucide-react";
import { useTranslation } from "@/contexts/useTranslation";
import { Reveal } from "@/components/ui/Reveal";
import { BUSINESS } from "@/lib/site";

const WRITE_REVIEW_URL = "https://search.google.com/local/writereview?placeid=ChIJ__-_Pp5DSzkR-7rLsvNUxdM";

// Google Maps embed URL with exact coordinates (17.740137, 83.3393431)
const MAPS_EMBED_URL = "https://maps.google.com/maps?q=17.740137,83.3393431&t=&z=16&ie=UTF8&iwloc=&output=embed";

export function MapsSection() {
  const { language } = useTranslation();

  return (
    <section id="location-map" className="py-24 sm:py-32 bg-deepPurple text-ivory relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-gold/50"></div>
            <span className="text-gold font-bold tracking-[0.25em] uppercase text-xs sm:text-sm flex items-center gap-2">
              <Compass className="w-4 h-4 text-gold" aria-hidden="true" />
              {language === "te" ? "సందర్శించండి" : "Visit Our Center"}
            </span>
            <div className="w-8 h-px bg-gold/50"></div>
          </div>

          <h2 className="font-cinzel text-3xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-ivory via-gold to-ivory mb-6 leading-tight">
            {language === "te" ? "శ్రీ రాఘవేంద్ర జ్యోతిష్యాలయం - వైజాగ్" : "Sri Raghavendra Jyothishalayam"}
          </h2>

          <p className="text-ivory/70 text-base sm:text-lg leading-relaxed">
            {language === "te"
              ? "MVP డబుల్ రోడ్, సెక్టార్ 10, MVP కాలనీ, విశాఖపట్నం. ప్రత్యక్ష మరియు ఆన్‌లైన్ సంప్రదింపులు."
              : "Conveniently located at MVP Colony Double Road, Visakhapatnam. Welcoming devotees and clients for in-person and online consultations."}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Details card */}
          <Reveal direction="left" className="lg:col-span-5 flex">
            <div className="w-full bg-midnight border border-gold/20 rounded-3xl p-8 sm:p-10 flex flex-col justify-between shadow-2xl">
              <div>
                <div className="flex items-center gap-3 mb-6 pb-6 border-b border-gold/15">
                  <div className="w-12 h-12 rounded-2xl bg-gold/10 text-gold flex items-center justify-center border border-gold/30 shrink-0">
                    <MapPin className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-cinzel text-xl font-bold text-ivory">Sri Raghavendra Jyothishalayam</h3>
                    <p className="text-xs text-gold tracking-widest uppercase">Astro Siddhi &bull; MVP Colony</p>
                  </div>
                </div>

                <div className="space-y-6 mb-8 text-sm sm:text-base">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-5 h-5 text-gold shrink-0 mt-1" aria-hidden="true" />
                    <div>
                      <h4 className="font-semibold text-xs tracking-wider uppercase text-ivory/90 mb-1">Center Address</h4>
                      <p className="text-ivory/80 leading-relaxed">
                        P8RQ+3P4, MVP Double Rd, Sector 10,<br />
                        MVP Colony, Visakhapatnam,<br />
                        Andhra Pradesh 530017
                      </p>
                      <span className="inline-block mt-1 text-xs text-gold/90 bg-gold/10 px-2.5 py-1 rounded-md border border-gold/20">
                        Landmark: Opposite Axis Bank
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Clock className="w-5 h-5 text-gold shrink-0 mt-1" aria-hidden="true" />
                    <div>
                      <h4 className="font-semibold text-xs tracking-wider uppercase text-ivory/90 mb-1">Consultation Timings</h4>
                      <p className="text-ivory/80 leading-snug">
                        Monday – Saturday: 9:00 AM – 8:00 PM<br />
                        Sunday: By Advance Appointment
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="w-5 h-5 text-gold shrink-0 mt-1" aria-hidden="true" />
                    <div>
                      <h4 className="font-semibold text-xs tracking-wider uppercase text-ivory/90 mb-1">Contact &amp; Appointments</h4>
                      <a href={`tel:${BUSINESS.phone}`} className="text-ivory/90 hover:text-gold transition-colors block">
                        {BUSINESS.phoneDisplay}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-gold/15 flex flex-col gap-3">
                <a
                  href={BUSINESS.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="btn-maps-get-directions"
                  className="w-full py-4 px-6 rounded-xl bg-gold hover:bg-saffron text-midnight font-bold transition-all duration-300 text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2"
                >
                  <Navigation className="w-4 h-4" aria-hidden="true" />
                  <span>Get Directions on Google Maps</span>
                  <ExternalLink className="w-4 h-4" aria-hidden="true" />
                </a>
                <a
                  href={WRITE_REVIEW_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="btn-maps-write-review"
                  className="w-full py-3.5 px-6 rounded-xl bg-midnight text-ivory hover:text-gold border border-gold/30 transition-all duration-300 text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2"
                >
                  <MessageSquarePlus className="w-4 h-4 text-gold" aria-hidden="true" />
                  <span>Write a Google Review</span>
                </a>
              </div>
            </div>
          </Reveal>

          {/* Map */}
          <Reveal direction="right" className="lg:col-span-7 flex">
            <div className="w-full bg-midnight border border-gold/25 rounded-3xl overflow-hidden shadow-2xl relative min-h-[420px] flex flex-col">
              <div className="bg-midnight px-6 py-3.5 border-b border-gold/20 flex items-center justify-between text-xs text-ivory/70">
                <span className="font-medium text-ivory/90">Google Maps Location</span>
                <a
                  href={BUSINESS.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold hover:underline inline-flex items-center gap-1 font-semibold"
                >
                  Open Full Map <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
              </div>

              <div className="w-full flex-grow relative min-h-[380px] lg:min-h-[460px]">
                <iframe
                  title="Google Maps Location - Sri Raghavendra Jyothishalayam"
                  src={MAPS_EMBED_URL}
                  width="600"
                  height="450"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 w-full h-full"
                ></iframe>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
