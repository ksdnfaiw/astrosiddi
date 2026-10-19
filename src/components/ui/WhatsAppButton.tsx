"use client";

import React, { useState, useEffect } from "react";

export function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // The WhatsApp consultation button must not be visible in the hero section.
      // It should appear smoothly only after scrolling past the hero section.
      const heroElement = document.getElementById("hero-section");
      if (heroElement) {
        const rect = heroElement.getBoundingClientRect();
        // When bottom of hero section is <= 80px (scrolled past), reveal button smoothly
        setIsVisible(rect.bottom <= 80);
      } else {
        // Fallback for pages without hero section
        setIsVisible(window.scrollY > 400);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <a
      href="https://wa.me/919652412221?text=Hello%20Astro%20Siddhi,%20I%20would%20like%20to%20book%20a%20Vedic%20Astrology%20Consultation"
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 bg-[#25D366] hover:bg-[#20ba5a] text-white px-4 py-2.5 sm:px-6 sm:py-3.5 rounded-full shadow-[0_10px_30px_rgba(37,211,102,0.4)] hover:shadow-[0_15px_40px_rgba(37,211,102,0.6)] transition-all duration-700 ease-out z-50 flex items-center gap-2 font-bold text-xs sm:text-sm tracking-wider uppercase group backdrop-blur-sm border border-white/20 active:scale-95 ${
        isVisible
          ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
          : "opacity-0 translate-y-12 scale-90 pointer-events-none"
      }`}
      aria-label="Book WhatsApp Consultation"
    >
      <span className="relative flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
      </span>
      <svg
        viewBox="0 0 32 32"
        fill="currentColor"
        shapeRendering="geometricPrecision"
        className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
      >
        <path d="M16.004 3C9.005 3 3.334 8.671 3.334 15.67c0 2.503.732 4.834 1.994 6.794L3 29l6.702-2.288a12.578 12.578 0 006.302 1.687h.006c6.998 0 12.669-5.671 12.669-12.67C28.679 8.73 23.002 3 16.004 3zm0 23.183h-.005a10.474 10.474 0 01-5.34-1.463l-.383-.227-3.978 1.359 1.376-3.876-.25-.398a10.463 10.463 0 01-1.605-5.588c0-5.796 4.716-10.512 10.516-10.512 2.809 0 5.448 1.095 7.435 3.083a10.45 10.45 0 013.08 7.438c0 5.797-4.716 10.512-10.516 10.512l-.33-.328zm5.758-7.87c-.316-.158-1.87-.923-2.16-1.028-.29-.106-.502-.158-.712.158-.21.316-.816 1.028-1.001 1.238-.184.211-.368.238-.684.08-.317-.159-1.336-.492-2.545-1.57-.94-.838-1.575-1.874-1.759-2.19-.184-.316-.02-.487.138-.645.142-.14.317-.369.475-.554.158-.184.21-.316.316-.527.106-.21.053-.395-.026-.554-.079-.158-.712-1.716-.976-2.35-.257-.617-.518-.534-.712-.544l-.606-.011c-.21 0-.553.079-.843.395-.29.316-1.106 1.08-1.106 2.638s1.132 3.06 1.29 3.271c.158.211 2.228 3.4 5.397 4.766.754.326 1.343.52 1.802.665.757.24 1.446.207 1.991.126.607-.091 1.87-.764 2.134-1.501.264-.738.264-1.37.185-1.501-.079-.132-.29-.211-.606-.37z" />
      </svg>
      <span className="font-semibold tracking-wider">WhatsApp Consultation</span>
    </a>
  );
}
