"use client";

import React, { useState, useEffect, useCallback } from "react";
import { MessageCircle, MapPin, Volume2, VolumeX } from "lucide-react";
import { useTranslation } from "@/contexts/useTranslation";

const AUDIO_SRC = "/02ShriVigneshwaraSuprabhatam.mp3";
const WHATSAPP_URL =
  "https://wa.me/919652412221?text=Hello%20Astro%20Siddhi,%20I%20would%20like%20to%20book%20a%20Vedic%20Astrology%20Consultation%20in%20Visakhapatnam.";
const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/place/Sri+Raghavendra+Jyothishalayam,+P8RQ%2B3P4,+MVP+Double+Rd,+Sector+10,+MVP+Colony,+Visakhapatnam,+Andhra+Pradesh+530017/@17.740137,83.3393431,17z/";

// Module-level global singleton to ensure continuous playback
// across Next.js page transitions without creating duplicate audio instances.
declare global {
  interface Window {
    __astroSiddhiAudio?: HTMLAudioElement;
  }
}

function getAudioInstance(): HTMLAudioElement | null {
  if (typeof window === "undefined") return null;
  if (!window.__astroSiddhiAudio) {
    const audio = new Audio(AUDIO_SRC);
    audio.loop = true;
    audio.preload = "auto";
    audio.volume = 0.75;
    window.__astroSiddhiAudio = audio;
  }
  return window.__astroSiddhiAudio;
}

export function FloatingDevotionalActions() {
  const { language } = useTranslation();
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

  useEffect(() => {
    const audio = getAudioInstance();
    if (!audio) return;

    // Synchronize initial muted state
    setIsMuted(audio.muted);

    // If audio is paused, attempt automatic continuous playback
    if (audio.paused) {
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsMuted(audio.muted);
          })
          .catch(() => {
            // Browser autoplay restrictions blocked unmuted audio playback.
            // Gracefully fall back to muted autoplay as required.
            audio.muted = true;
            setIsMuted(true);
            audio.play().catch((err) => {
              console.warn("Muted autoplay also restricted:", err);
            });
          });
      }
    }

    const onVolumeChange = () => {
      setIsMuted(audio.muted);
    };

    audio.addEventListener("volumechange", onVolumeChange);

    return () => {
      audio.removeEventListener("volumechange", onVolumeChange);
    };
  }, []);

  // Simple, minimal Mute / Unmute toggle
  const toggleMute = useCallback(() => {
    const audio = getAudioInstance();
    if (!audio) return;

    if (audio.muted) {
      audio.muted = false;
      setIsMuted(false);
      if (audio.paused) {
        audio.play().catch(console.warn);
      }
    } else {
      audio.muted = true;
      setIsMuted(true);
    }
  }, []);

  // Handle WhatsApp Click tracking for Google Ads
  const handleWhatsAppClick = () => {
    if (typeof window !== "undefined" && typeof (window as any).gtag === "function") {
      (window as any).gtag("event", "whatsapp_click", {
        event_category: "Engagement",
        event_label: "WhatsApp Consultation Initiated",
      });
    }
  };

  // Handle Location Click: Smooth scroll to #location-map or open Google Maps
  const handleLocationClick = (e: React.MouseEvent) => {
    const mapSection = document.getElementById("location-map");
    if (mapSection) {
      e.preventDefault();
      mapSection.scrollIntoView({ behavior: "smooth", block: "start" });
      mapSection.classList.add("ring-2", "ring-[#E28E1D]/60");
      setTimeout(() => {
        mapSection.classList.remove("ring-2", "ring-[#E28E1D]/60");
      }, 2500);
    } else {
      window.open(GOOGLE_MAPS_URL, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <aside
      aria-label="Quick Actions & Audio Control"
      className="fixed bottom-6 right-4 sm:right-6 z-50 flex flex-col items-center gap-3 sm:gap-3.5 select-none"
    >
      {/* ----------------------------------------------------
          1. GREEN WHATSAPP BUTTON (TOP CIRCLE)
          ---------------------------------------------------- */}
      <div className="relative flex items-center">
        {activeTooltip === "whatsapp" && (
          <div className="absolute right-full mr-3 px-3 py-1.5 rounded-xl bg-midnight/90 backdrop-blur-md text-ivory text-xs font-semibold whitespace-nowrap shadow-xl border border-white/10 animate-in fade-in slide-in-from-right-2 pointer-events-none hidden sm:block">
            {language === "te" ? "వాట్సాప్ సంప్రదింపులు" : "WhatsApp Consultation"}
          </div>
        )}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleWhatsAppClick}
          onMouseEnter={() => setActiveTooltip("whatsapp")}
          onMouseLeave={() => setActiveTooltip(null)}
          className="w-12 h-12 sm:w-[52px] sm:h-[52px] rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_4px_18px_rgba(37,211,102,0.35)] hover:shadow-[0_6px_24px_rgba(37,211,102,0.5)] hover:scale-105 active:scale-95 transition-all duration-300"
          aria-label="Chat with Astro Siddhi on WhatsApp"
        >
          <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 text-white stroke-[2.3]" />
        </a>
      </div>

      {/* ----------------------------------------------------
          2. AMBER LOCATION BUTTON (MIDDLE CIRCLE)
          ---------------------------------------------------- */}
      <div className="relative flex items-center">
        {activeTooltip === "location" && (
          <div className="absolute right-full mr-3 px-3 py-1.5 rounded-xl bg-midnight/90 backdrop-blur-md text-ivory text-xs font-semibold whitespace-nowrap shadow-xl border border-white/10 animate-in fade-in slide-in-from-right-2 pointer-events-none hidden sm:block">
            {language === "te" ? "మా స్థానం / మ్యాప్" : "Our Location / Google Maps"}
          </div>
        )}
        <button
          onClick={handleLocationClick}
          onMouseEnter={() => setActiveTooltip("location")}
          onMouseLeave={() => setActiveTooltip(null)}
          className="w-12 h-12 sm:w-[52px] sm:h-[52px] rounded-full bg-[#E28E1D] text-white flex items-center justify-center shadow-[0_4px_18px_rgba(226,142,29,0.35)] hover:shadow-[0_6px_24px_rgba(226,142,29,0.5)] hover:scale-105 active:scale-95 transition-all duration-300"
          aria-label="View Location Map on Google Maps"
        >
          <MapPin className="w-6 h-6 sm:w-7 sm:h-7 text-white stroke-[2.3]" />
        </button>
      </div>

      {/* ----------------------------------------------------
          3. MINIMAL MUTE / UNMUTE BUTTON (BOTTOM CIRCLE)
          ---------------------------------------------------- */}
      <div className="relative flex items-center">
        {activeTooltip === "audio" && (
          <div className="absolute right-full mr-3 px-3 py-1.5 rounded-xl bg-midnight/90 backdrop-blur-md text-ivory text-xs font-semibold whitespace-nowrap shadow-xl border border-white/10 animate-in fade-in slide-in-from-right-2 pointer-events-none hidden sm:block">
            {isMuted
              ? language === "te"
                ? "శబ్దము ఆన్ చేయండి"
                : "Unmute background audio"
              : language === "te"
                ? "శబ్దము నిశ్శబ్దం చేయండి"
                : "Mute background audio"}
          </div>
        )}

        <button
          onClick={toggleMute}
          onMouseEnter={() => setActiveTooltip("audio")}
          onMouseLeave={() => setActiveTooltip(null)}
          className={`w-12 h-12 sm:w-[52px] sm:h-[52px] rounded-full bg-white text-[#4A3E3D] flex items-center justify-center shadow-[0_4px_18px_rgba(0,0,0,0.18)] hover:shadow-[0_6px_24px_rgba(0,0,0,0.25)] hover:scale-105 active:scale-95 transition-all duration-300 border border-black/5 relative ${
            !isMuted ? "ring-2 ring-[#E28E1D]/70 shadow-[0_0_16px_rgba(226,142,29,0.3)]" : ""
          }`}
          aria-label={isMuted ? "Unmute background audio" : "Mute background audio"}
        >
          {isMuted ? (
            <VolumeX className="w-6 h-6 sm:w-7 sm:h-7 text-[#4A3E3D] stroke-[2.3]" />
          ) : (
            <div className="relative flex items-center justify-center">
              <Volume2 className="w-6 h-6 sm:w-7 sm:h-7 text-[#E28E1D] stroke-[2.3]" />
              <span className="absolute -top-1 -right-1 flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E28E1D] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E28E1D]"></span>
              </span>
            </div>
          )}
        </button>
      </div>
    </aside>
  );
}
