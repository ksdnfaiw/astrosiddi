"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Sparkles, Phone, Globe, MapPin, X } from "lucide-react";

interface BannerModalProps {
  initialLang: "en" | "te";
  onClose: () => void;
}

/** User-triggered credentials modal. Loaded on demand so its images/JS never cost anything on first paint. */
export default function BannerModal({ initialLang, onClose }: BannerModalProps) {
  const [lang, setLang] = useState<"en" | "te">(initialLang);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  const src = lang === "te" ? "/images/sri-raghavendra-banner-te.webp" : "/images/sri-raghavendra-banner-en.webp";

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Sri Raghavendra Astrology official banner"
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-midnight/95"
    >
      <div className="relative max-w-5xl w-full max-h-[90vh] bg-midnight rounded-2xl border-2 border-gold/40 shadow-2xl overflow-hidden flex flex-col">
        <div className="flex items-center justify-between px-4 sm:px-6 py-4 bg-midnight border-b border-gold/20">
          <div className="flex items-center gap-3">
            <Sparkles className="w-5 h-5 text-gold" aria-hidden="true" />
            <h2 className="font-bold text-base sm:text-lg text-ivory tracking-wide">Sri Raghavendra Astrology Official Banner</h2>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center bg-midnight border border-gold/30 rounded-lg p-0.5">
              {(["en", "te"] as const).map((l) => (
                <button
                  key={l}
                  type="button"
                  onClick={() => setLang(l)}
                  className={`px-2.5 py-1 rounded text-xs font-bold transition-all ${
                    lang === l ? "bg-gold text-midnight" : "text-ivory/60 hover:text-ivory"
                  }`}
                >
                  {l === "en" ? "EN" : "తెలుగు"}
                </button>
              ))}
            </div>
            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-full text-ivory/70 hover:text-ivory hover:bg-gold/20 transition-colors ml-2"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="relative flex-1 min-h-[240px] bg-black p-2 flex items-center justify-center overflow-auto">
          <Image
            src={src}
            alt={
              lang === "te"
                ? "Sri Raghavendra Jyothishalayam official banner in Telugu with services and contact details"
                : "Sri Raghavendra Jyothishalayam official banner in English with services and contact details"
            }
            width={1600}
            height={1083}
            sizes="(max-width: 1024px) 100vw, 1000px"
            className="w-full h-auto object-contain max-h-[75vh]"
          />
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 px-4 sm:px-6 py-4 bg-midnight border-t border-gold/20 text-xs">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-ivory/80">
            <span className="flex items-center gap-1.5"><Phone className="w-4 h-4 text-gold" aria-hidden="true" /> 9652412221</span>
            <span className="flex items-center gap-1.5"><Globe className="w-4 h-4 text-gold" aria-hidden="true" /> astrosiddi.com</span>
            <span className="hidden sm:flex items-center gap-1.5"><MapPin className="w-4 h-4 text-gold" aria-hidden="true" /> MVP Colony Double Road, Visakhapatnam</span>
          </div>
          <a
            href="tel:+919652412221"
            className="px-4 py-2 rounded-full bg-gold text-midnight font-bold tracking-wider uppercase text-xs hover:bg-saffron transition-colors"
          >
            Call Astrologer
          </a>
        </div>
      </div>
    </div>
  );
}
