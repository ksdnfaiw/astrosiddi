"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import {
  MapPin,
  Volume2,
  VolumeX,
  Play,
  Pause,
  RotateCcw,
  RotateCw,
  Volume1,
  X,
  Sliders,
  ChevronRight,
  Music,
  Sparkles,
} from "lucide-react";
import { useTranslation } from "@/contexts/useTranslation";

const AUDIO_SRC = "/02ShriVigneshwaraSuprabhatam.mp3";
const WHATSAPP_URL =
  "https://wa.me/919652412221?text=Hello%20Astro%20Siddhi,%20I%20would%20like%20to%20book%20a%20Vedic%20Astrology%20Consultation%20in%20Visakhapatnam.";
const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/place/Sri+Raghavendra+Jyothishalayam,+P8RQ%2B3P4,+MVP+Double+Rd,+Sector+10,+MVP+Colony,+Visakhapatnam,+Andhra+Pradesh+530017/@17.740137,83.3393431,17z/";

function formatTime(seconds: number): string {
  if (isNaN(seconds) || seconds < 0) return "0:00";
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  if (mins >= 60) {
    const hrs = Math.floor(mins / 60);
    const remMins = mins % 60;
    return `${hrs}:${remMins < 10 ? "0" : ""}${remMins}:${secs < 10 ? "0" : ""}${secs}`;
  }
  return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
}

export function FloatingDevotionalActions() {
  const { language } = useTranslation();
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Playback state
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [volume, setVolume] = useState<number>(0.85);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [showPlayerModal, setShowPlayerModal] = useState<boolean>(false);
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

  // Sync volume with audio element
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  // Audio event listeners
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleLoadedMetadata = () => {
      if (audio.duration && !isNaN(audio.duration)) {
        setDuration(audio.duration);
      }
    };

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
      if (audio.duration && !isNaN(audio.duration) && duration === 0) {
        setDuration(audio.duration);
      }
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setCurrentTime(0);
    };

    const handlePause = () => {
      setIsPlaying(false);
    };

    const handlePlay = () => {
      setIsPlaying(true);
    };

    audio.addEventListener("loadedmetadata", handleLoadedMetadata);
    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("ended", handleEnded);
    audio.addEventListener("pause", handlePause);
    audio.addEventListener("play", handlePlay);

    return () => {
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("ended", handleEnded);
      audio.removeEventListener("pause", handlePause);
      audio.removeEventListener("play", handlePlay);
    };
  }, [duration]);

  // Explicit user-driven play/pause toggle
  const togglePlayPause = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((error) => {
          console.warn("Audio playback was prevented by browser:", error);
          setIsPlaying(false);
        });
    }
  }, [isPlaying]);

  // Seek handler
  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (!audio) return;
    const seekTime = parseFloat(e.target.value);
    audio.currentTime = seekTime;
    setCurrentTime(seekTime);
  };

  // Jump relative seconds
  const jumpTime = (deltaSeconds: number) => {
    const audio = audioRef.current;
    if (!audio) return;
    const newTime = Math.max(0, Math.min(audio.currentTime + deltaSeconds, duration || 9999));
    audio.currentTime = newTime;
    setCurrentTime(newTime);
  };

  // Toggle Mute
  const toggleMute = () => {
    setIsMuted((prev) => !prev);
  };

  // Handle Location Click
  const handleLocationClick = (e: React.MouseEvent) => {
    // If maps section exists on current page, smooth scroll to it
    const mapSection = document.getElementById("location-map");
    if (mapSection) {
      e.preventDefault();
      mapSection.scrollIntoView({ behavior: "smooth", block: "start" });
      // Gentle temporary focus ring
      mapSection.classList.add("ring-2", "ring-gold/60");
      setTimeout(() => {
        mapSection.classList.remove("ring-2", "ring-gold/60");
      }, 2500);
    } else {
      // Fallback: Open Google Maps in new tab
      window.open(GOOGLE_MAPS_URL, "_blank", "noopener,noreferrer");
    }
  };

  // Progress percentage for SVG ring & scrubber
  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;
  const radius = 24;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progressPercent / 100) * circumference;

  return (
    <>
      {/* Hidden HTML5 Audio Element (Autoplay strictly off) */}
      <audio
        ref={audioRef}
        src={AUDIO_SRC}
        preload="metadata"
        autoPlay={false}
      />

      {/* ========================================================
          EXPANDABLE DEVOTIONAL AUDIO PLAYER MODAL / DRAWER
          ======================================================== */}
      {showPlayerModal && (
        <aside
          role="region"
          aria-label="Shri Vigneshwara Suprabhatam Audio Player Controls"
          className="fixed bottom-24 right-4 sm:right-24 z-50 w-[92vw] max-w-[360px] sm:max-w-[400px] bg-midnight/95 backdrop-blur-xl border border-gold/30 rounded-3xl p-5 shadow-[0_20px_50px_rgba(0,0,0,0.6)] text-ivory animate-in fade-in slide-in-from-bottom-4 duration-300 select-none"
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-gold/15">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center text-gold shadow-inner">
                <Sparkles className="w-4 h-4 animate-spin-slow" />
              </div>
              <div>
                <h4 className="font-cinzel text-sm sm:text-base font-bold text-transparent bg-clip-text bg-gradient-to-r from-ivory via-gold to-ivory leading-tight">
                  Shri Vigneshwara Suprabhatam
                </h4>
                <p className="text-[11px] text-mutedGold tracking-wider">
                  {language === "te" ? "శ్రీ విఘ్నేశ్వర సుప్రభాతం" : "Sacred Vedic Chanting"}
                </p>
              </div>
            </div>
            <button
              onClick={() => setShowPlayerModal(false)}
              className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-ivory/70 hover:text-gold transition-colors"
              aria-label="Close audio player controls"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Time & Scrubber */}
          <div className="mb-4">
            <div className="flex justify-between text-xs font-mono text-ivory/60 mb-1.5">
              <span>{formatTime(currentTime)}</span>
              <span className="text-gold/80">{formatTime(duration)}</span>
            </div>
            <div className="relative flex items-center group">
              <input
                type="range"
                min={0}
                max={duration || 100}
                step={0.5}
                value={currentTime}
                onChange={handleSeek}
                className="w-full h-1.5 bg-ivory/20 rounded-lg appearance-none cursor-pointer accent-[#F5A623] hover:h-2 transition-all"
                aria-label="Seek track position"
              />
            </div>
          </div>

          {/* Transport Controls */}
          <div className="flex items-center justify-between mb-3 px-2">
            {/* 10s Rewind */}
            <button
              onClick={() => jumpTime(-10)}
              className="p-2 text-ivory/70 hover:text-gold hover:bg-white/5 rounded-full transition-colors flex items-center gap-0.5 text-xs"
              aria-label="Rewind 10 seconds"
              title="Rewind 10 seconds"
            >
              <RotateCcw className="w-4 h-4" />
              <span className="text-[10px] font-mono">10s</span>
            </button>

            {/* Main Play / Pause */}
            <button
              onClick={togglePlayPause}
              className="w-12 h-12 rounded-full bg-gradient-to-r from-gold to-saffron text-midnight font-bold flex items-center justify-center shadow-[0_4px_20px_rgba(245,166,35,0.4)] hover:scale-105 active:scale-95 transition-all"
              aria-label={isPlaying ? "Pause Suprabhatam" : "Play Suprabhatam"}
            >
              {isPlaying ? (
                <Pause className="w-5 h-5 fill-midnight" />
              ) : (
                <Play className="w-5 h-5 fill-midnight ml-0.5" />
              )}
            </button>

            {/* 10s Forward */}
            <button
              onClick={() => jumpTime(10)}
              className="p-2 text-ivory/70 hover:text-gold hover:bg-white/5 rounded-full transition-colors flex items-center gap-0.5 text-xs"
              aria-label="Forward 10 seconds"
              title="Forward 10 seconds"
            >
              <span className="text-[10px] font-mono">10s</span>
              <RotateCw className="w-4 h-4" />
            </button>
          </div>

          {/* Volume Control */}
          <div className="flex items-center gap-3 pt-2 border-t border-gold/10 px-1">
            <button
              onClick={toggleMute}
              className="text-ivory/60 hover:text-gold transition-colors"
              aria-label={isMuted ? "Unmute" : "Mute"}
            >
              {isMuted || volume === 0 ? (
                <VolumeX className="w-4 h-4 text-red-400" />
              ) : (
                <Volume1 className="w-4 h-4 text-gold" />
              )}
            </button>
            <input
              type="range"
              min={0}
              max={1}
              step={0.05}
              value={isMuted ? 0 : volume}
              onChange={(e) => {
                setVolume(parseFloat(e.target.value));
                if (isMuted) setIsMuted(false);
              }}
              className="w-full h-1 bg-ivory/15 rounded-lg appearance-none cursor-pointer accent-[#F5A623]"
              aria-label="Volume slider"
            />
          </div>
        </aside>
      )}

      {/* ========================================================
          VERTICAL FLOATING ACTION BUTTON GROUP (MATCHING REFERENCE)
          ======================================================== */}
      <aside
        aria-label="Quick Actions & Suprabhatam Player"
        className="fixed bottom-6 right-4 sm:right-6 z-50 flex flex-col items-center gap-3 sm:gap-3.5 select-none"
      >



        {/* ----------------------------------------------------
            3. WHITE AUDIO SUPRABHATAM BUTTON (BOTTOM CIRCLE)
            ---------------------------------------------------- */}
        <div className="relative flex items-center">
          {activeTooltip === "audio" && !showPlayerModal && (
            <div className="absolute right-full mr-3 px-3 py-1.5 rounded-xl bg-midnight/90 backdrop-blur-md text-ivory text-xs font-semibold whitespace-nowrap shadow-xl border border-white/10 animate-in fade-in slide-in-from-right-2 pointer-events-none hidden sm:block">
              {isPlaying
                ? language === "te"
                  ? "ఆపండి (సుప్రభాతం)"
                  : "Pause Shri Vigneshwara Suprabhatam"
                : language === "te"
                  ? "శ్రీ విఘ్నేశ్వర సుప్రభాతం వినండి"
                  : "Play Shri Vigneshwara Suprabhatam"}
            </div>
          )}

          {/* Floating Action Circle with Circular Progress Border */}
          <div className="relative">
            {/* SVG Circular Progress Ring (Active only during playback) */}
            {isPlaying && (
              <svg
                className="absolute -top-1 -left-1 w-[56px] h-[56px] sm:w-[60px] sm:h-[60px] -rotate-90 pointer-events-none z-10"
                viewBox="0 0 60 60"
              >
                <circle
                  cx="30"
                  cy="30"
                  r={radius}
                  stroke="#F5A623"
                  strokeWidth="3.5"
                  fill="transparent"
                  strokeDasharray={circumference}
                  strokeDashoffset={strokeDashoffset}
                  strokeLinecap="round"
                  className="transition-all duration-300"
                />
              </svg>
            )}

            <button
              onClick={() => {
                togglePlayPause();
                // Optionally reveal controls on initial start
                if (!isPlaying && !showPlayerModal) {
                  setShowPlayerModal(true);
                }
              }}
              onMouseEnter={() => setActiveTooltip("audio")}
              onMouseLeave={() => setActiveTooltip(null)}
              className={`w-12 h-12 sm:w-[52px] sm:h-[52px] rounded-full bg-white text-[#4A3E3D] flex items-center justify-center shadow-[0_6px_22px_rgba(0,0,0,0.18)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.25)] hover:scale-105 active:scale-95 transition-all duration-300 border border-black/5 relative ${isPlaying ? "ring-2 ring-gold/80 shadow-[0_0_20px_rgba(245,166,35,0.4)]" : ""
                }`}
              aria-label={
                isPlaying
                  ? "Pause Shri Vigneshwara Suprabhatam"
                  : "Play Shri Vigneshwara Suprabhatam"
              }
            >
              {/* Speaker Icon: Muted/X when paused, soundwaves when playing */}
              {isPlaying ? (
                <div className="relative flex items-center justify-center">
                  <Volume2 className="w-6 h-6 sm:w-7 sm:h-7 text-[#E28E1D] stroke-[2.2]" />
                  {/* Subtle animated sound wave dot */}
                  <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-gold"></span>
                  </span>
                </div>
              ) : (
                <VolumeX className="w-6 h-6 sm:w-7 sm:h-7 text-[#4A3E3D] stroke-[2.2]" />
              )}
            </button>
          </div>

          {/* Quick Mini Player Toggle Button (Pill or Badge for Extra Controls) */}
          {isPlaying && (
            <button
              onClick={() => setShowPlayerModal((prev) => !prev)}
              className="absolute -top-1 -left-2 bg-midnight/90 text-gold text-[10px] px-1.5 py-0.5 rounded-full border border-gold/40 shadow-md font-mono hover:bg-gold hover:text-midnight transition-colors"
              title="Show audio player controls"
              aria-label="Toggle full audio player controls"
            >
              ♫
            </button>
          )}
        </div>
      </aside>
    </>
  );
}
