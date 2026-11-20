"use client";

import React, { useEffect, useRef } from "react";
import { Star, ExternalLink, MessageSquarePlus, MapPin, CheckCircle } from "lucide-react";
import { useTranslation } from "@/contexts/useTranslation";
import { Reveal } from "@/components/ui/Reveal";
import { BUSINESS } from "@/lib/site";

const WRITE_REVIEW_URL = "https://search.google.com/local/writereview?placeid=ChIJ__-_Pp5DSzkR-7rLsvNUxdM";
const ELFSIGHT_SRC = "https://elfsightcdn.com/platform.js";

// Elfsight Google Reviews Widget ID provided by the client
const ELFSIGHT_WIDGET_ID = "a4db0604-8de7-44d7-9816-41c8a356fde7";

const GoogleG = ({ className, label }: { className: string; label?: string }) => (
  <svg className={className} viewBox="0 0 24 24" {...(label ? { role: "img", "aria-label": label } : { "aria-hidden": true })}>
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05" />
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335" />
  </svg>
);

export function GoogleReviews() {
  const { language } = useTranslation();
  const widgetRef = useRef<HTMLDivElement>(null);

  // Elfsight's platform.js is a large third-party script. Inject it only once the reviews section is about to
  // scroll into view so it never competes with first paint or hydration (and is never injected twice).
  useEffect(() => {
    const el = widgetRef.current;
    if (!el) return;

    const load = () => {
      if (document.querySelector(`script[src="${ELFSIGHT_SRC}"]`)) return;
      const script = document.createElement("script");
      script.src = ELFSIGHT_SRC;
      script.async = true;
      document.body.appendChild(script);
    };

    if (typeof IntersectionObserver === "undefined") {
      load();
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          load();
          io.disconnect();
        }
      },
      { rootMargin: "600px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section id="google-reviews" className="py-24 sm:py-32 bg-midnight text-ivory relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-gold/50"></div>
            <span className="text-gold font-bold tracking-[0.25em] uppercase text-xs sm:text-sm flex items-center gap-2">
              <GoogleG className="w-4 h-4" />
              {language === "te" ? "గూగుల్ సమీక్షలు" : "Verified Google Reviews"}
            </span>
            <div className="w-8 h-px bg-gold/50"></div>
          </div>

          <h2 className="font-cinzel text-3xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-ivory via-gold to-ivory mb-6 leading-tight">
            {language === "te" ? "భక్తుల అనుభవాలు & విశ్వసనీయత" : "Trusted by Hundreds Across Visakhapatnam"}
          </h2>

          <p className="text-ivory/70 text-base sm:text-lg leading-relaxed">
            {language === "te"
              ? "శ్రీ రాఘవేంద్ర జ్యోతిష్యాలయం - ఎంవిపి కాలనీ, విశాఖపట్నం. వేలాది మంది భక్తులకు కచ్చితమైన జ్యోతిష్య మార్గదర్శకత్వం."
              : "Authentic Google reviews and client feedback for Sri Raghavendra Jyothishalayam, MVP Colony, Visakhapatnam."}
          </p>
        </div>

        {/* Business Rating & Action Bar Card */}
        <Reveal>
          <div className="bg-deepPurple border border-gold/20 rounded-3xl p-6 sm:p-10 mb-12 shadow-2xl relative overflow-hidden">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-6">
                <div className="w-20 h-20 rounded-2xl bg-white shadow-xl flex items-center justify-center p-3 shrink-0 border border-gold/30">
                  <GoogleG className="w-full h-full" label="Google" />
                </div>

                <div>
                  <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-2">
                    <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-ivory">Sri Raghavendra Jyothishalayam</h3>
                    <span className="inline-flex items-center gap-1 text-xs px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                      <CheckCircle className="w-3.5 h-3.5" aria-hidden="true" />
                      Verified Business Profile
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-ivory/60 flex items-center justify-center sm:justify-start gap-1.5 mb-3">
                    <MapPin className="w-3.5 h-3.5 text-gold shrink-0" aria-hidden="true" />
                    <span>MVP Double Rd, Sector 10, MVP Colony, Visakhapatnam, AP 530017</span>
                  </p>

                  <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3">
                    <div className="flex items-center gap-1.5 bg-midnight px-3 py-1.5 rounded-xl border border-gold/20">
                      <span className="font-cinzel text-2xl font-bold text-gold">{BUSINESS.rating.value}</span>
                      <div className="flex gap-0.5" role="img" aria-label={`Rated ${BUSINESS.rating.value} out of 5`}>
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-gold text-gold" aria-hidden="true" />
                        ))}
                      </div>
                    </div>
                    <span className="text-sm text-ivory/80 font-medium">
                      Based on <strong className="text-gold font-bold">{BUSINESS.rating.count}+</strong> Google Reviews
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full lg:w-auto">
                <a
                  href={BUSINESS.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="btn-view-google-maps"
                  className="group px-6 py-3.5 rounded-xl bg-midnight hover:bg-gold hover:text-midnight text-ivory border border-gold/40 transition-all duration-300 font-semibold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg"
                >
                  <span>View on Google Maps</span>
                  <ExternalLink className="w-4 h-4" aria-hidden="true" />
                </a>
                <a
                  href={WRITE_REVIEW_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="btn-write-google-review"
                  className="group px-6 py-3.5 rounded-xl bg-gradient-to-r from-gold to-saffron text-midnight font-bold transition-all duration-300 text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg hover:brightness-105"
                >
                  <MessageSquarePlus className="w-4 h-4" aria-hidden="true" />
                  <span>Write a Review</span>
                </a>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Live Elfsight Google Reviews Widget (lazy: script injected near viewport) */}
        <div className="my-8 relative z-20 min-h-[300px] rounded-3xl bg-deepPurple/40 border border-gold/15 p-4 sm:p-8 shadow-2xl">
          <div ref={widgetRef} className={`elfsight-app-${ELFSIGHT_WIDGET_ID}`} data-elfsight-app-lazy></div>
        </div>

        <div className="mt-12 text-center flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={BUSINESS.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-midnight border border-gold/30 hover:border-gold text-ivory hover:text-gold transition-all duration-300 text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2"
          >
            <span>Read All Google Reviews</span>
            <ExternalLink className="w-4 h-4" aria-hidden="true" />
          </a>
          <a
            href={WRITE_REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gold text-midnight font-bold hover:bg-saffron transition-all duration-300 text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg"
          >
            <MessageSquarePlus className="w-4 h-4" aria-hidden="true" />
            <span>Leave Your Review on Google</span>
          </a>
        </div>
      </div>
    </section>
  );
}
