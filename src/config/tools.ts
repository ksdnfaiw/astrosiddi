/**
 * Global Configuration for Free Astrology & Numerology Tools
 *
 * ACCURACY GATE POLICY:
 * - Numerology: Pure arithmetic based on classical Cheiro/Pythagorean/Vedic traditions. Validated & released immediately.
 * - Moon Sign & Kundli Generator: Gated behind client verification.
 *   Kept NOINDEX, excluded from sitemap and primary public navigation until at least 5 verified
 *   horoscope test vectors from Sri Raghavendra Siddhanti garu pass our automated test suite.
 */

export const ASTRO_TOOLS_CONFIG = {
  // Numerology Calculator ships immediately (Indexed, in sitemap, in navigation)
  numerologyReleased: true,

  // Moon Sign Calculator: Built & fully functional, but gated until 5 client charts are verified
  moonSignReleased: false,

  // Kundli Generator: Phase 3 foundational engine, gated until full planetary ephemeris validation
  kundliReleased: false,
};
