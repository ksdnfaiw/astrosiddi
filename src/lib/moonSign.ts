import * as Astronomy from "astronomy-engine";

export interface RashiInfo {
  index: number;
  english: string;
  sanskrit: string;
  telugu: string;
  lord: string;
  element: string;
  quality: string;
  symbol: string;
}

export interface NakshatraInfo {
  index: number;
  name: string;
  teluguName: string;
  lord: string;
  deity: string;
  pada: number;
}

export interface MoonSignResult {
  utcDate: string;
  localDate: string;
  timezone: string;
  isSidereal: boolean;
  tropicalLongitude: number;
  ayanamsa: number;
  apparentLongitude: number;
  rashi: RashiInfo;
  nakshatra: NakshatraInfo;
  degreesInSign: number;
  formattedDegreesInSign: string;
  isNearBoundary: boolean;
  boundaryMessage?: string;
  chartPlacement: {
    signIndex: number;
    houseName: string;
    southIndianGridRow: number;
    southIndianGridCol: number;
  };
}

export const RASHIS: RashiInfo[] = [
  { index: 0, english: "Aries", sanskrit: "Mesha", telugu: "మేషం (Mesham)", lord: "Mars (Kuja)", element: "Fire", quality: "Chara (Movable)", symbol: "Ram ♈" },
  { index: 1, english: "Taurus", sanskrit: "Vrishabha", telugu: "వృషభం (Vrishabham)", lord: "Venus (Shukra)", element: "Earth", quality: "Sthira (Fixed)", symbol: "Bull ♉" },
  { index: 2, english: "Gemini", sanskrit: "Mithuna", telugu: "మిథునం (Mithunam)", lord: "Mercury (Budha)", element: "Air", quality: "Dwiswabhava (Dual)", symbol: "Twins ♊" },
  { index: 3, english: "Cancer", sanskrit: "Karkata", telugu: "కర్కాటకం (Karkatakam)", lord: "Moon (Chandra)", element: "Water", quality: "Chara (Movable)", symbol: "Crab ♋" },
  { index: 4, english: "Leo", sanskrit: "Simha", telugu: "సింహం (Simham)", lord: "Sun (Surya)", element: "Fire", quality: "Sthira (Fixed)", symbol: "Lion ♌" },
  { index: 5, english: "Virgo", sanskrit: "Kanya", telugu: "కన్య (Kanya)", lord: "Mercury (Budha)", element: "Earth", quality: "Dwiswabhava (Dual)", symbol: "Maiden ♍" },
  { index: 6, english: "Libra", sanskrit: "Tula", telugu: "తుల (Tula)", lord: "Venus (Shukra)", element: "Air", quality: "Chara (Movable)", symbol: "Scales ♎" },
  { index: 7, english: "Scorpio", sanskrit: "Vrischika", telugu: "వృశ్చికం (Vrischikam)", lord: "Mars (Kuja)", element: "Water", quality: "Sthira (Fixed)", symbol: "Scorpion ♏" },
  { index: 8, english: "Sagittarius", sanskrit: "Dhanus", telugu: "ధనుస్సు (Dhanussu)", lord: "Jupiter (Guru)", element: "Fire", quality: "Dwiswabhava (Dual)", symbol: "Archer ♐" },
  { index: 9, english: "Capricorn", sanskrit: "Makara", telugu: "మకరం (Makaram)", lord: "Saturn (Shani)", element: "Earth", quality: "Chara (Movable)", symbol: "Sea-Goat ♑" },
  { index: 10, english: "Aquarius", sanskrit: "Kumbha", telugu: "కుంభం (Kumbham)", lord: "Saturn (Shani)", element: "Air", quality: "Sthira (Fixed)", symbol: "Water Bearer ♒" },
  { index: 11, english: "Pisces", sanskrit: "Meena", telugu: "మీనం (Meenam)", lord: "Jupiter (Guru)", element: "Water", quality: "Dwiswabhava (Dual)", symbol: "Two Fishes ♓" },
];

export const NAKSHATRAS = [
  { name: "Ashwini", teluguName: "అశ్విని", lord: "Ketu", deity: "Ashwini Kumaras" },
  { name: "Bharani", teluguName: "భరణి", lord: "Venus", deity: "Yama" },
  { name: "Krittika", teluguName: "కృత్తిక", lord: "Sun", deity: "Agni" },
  { name: "Rohini", teluguName: "రోహిణి", lord: "Moon", deity: "Brahma / Prajapati" },
  { name: "Mrigashira", teluguName: "మృగశిర", lord: "Mars", deity: "Soma (Moon)" },
  { name: "Ardra", teluguName: "ఆరుద్ర", lord: "Rahu", deity: "Rudra" },
  { name: "Punarvasu", teluguName: "పునర్వసు", lord: "Jupiter", deity: "Aditi" },
  { name: "Pushya", teluguName: "పుష్యమి", lord: "Saturn", deity: "Brihaspati" },
  { name: "Ashlesha", teluguName: "ఆశ్లేష", lord: "Mercury", deity: "Nagas (Serpents)" },
  { name: "Magha", teluguName: "మఖ", lord: "Ketu", deity: "Pitris (Ancestors)" },
  { name: "Purva Phalguni", teluguName: "పూర్వఫల్గుణి (పుబ్బ)", lord: "Venus", deity: "Bhaga" },
  { name: "Uttara Phalguni", teluguName: "ఉత్తరఫల్గుణి (ఉత్తర)", lord: "Sun", deity: "Aryaman" },
  { name: "Hasta", teluguName: "హస్త", lord: "Moon", deity: "Savitr (Sun)" },
  { name: "Chitra", teluguName: "చిత్త", lord: "Mars", deity: "Tvashtr / Vishwakarma" },
  { name: "Swati", teluguName: "స్వాతి", lord: "Rahu", deity: "Vayu (Wind)" },
  { name: "Vishakha", teluguName: "విశాఖ", lord: "Jupiter", deity: "Indragni" },
  { name: "Anuradha", teluguName: "అనూరాధ", lord: "Saturn", deity: "Mitra" },
  { name: "Jyeshtha", teluguName: "జ్యేష్ఠ", lord: "Mercury", deity: "Indra" },
  { name: "Mula", teluguName: "మూల", lord: "Ketu", deity: "Nirriti" },
  { name: "Purva Ashadha", teluguName: "పూర్వాషాఢ", lord: "Venus", deity: "Apas (Water)" },
  { name: "Uttara Ashadha", teluguName: "ఉత్తరాషాఢ", lord: "Sun", deity: "Vishwadevas" },
  { name: "Shravana", teluguName: "శ్రవణం", lord: "Moon", deity: "Vishnu" },
  { name: "Dhanishta", teluguName: "ధనిష్ట", lord: "Mars", deity: "Eight Vasus" },
  { name: "Shatabhisha", teluguName: "శతభిషం", lord: "Rahu", deity: "Varuna" },
  { name: "Purva Bhadrapada", teluguName: "పూర్వాభాద్ర", lord: "Jupiter", deity: "Aja Ekapada" },
  { name: "Uttara Bhadrapada", teluguName: "ఉత్తరాభాద్ర", lord: "Saturn", deity: "Ahirbudhnya" },
  { name: "Revati", teluguName: "రేవతి", lord: "Mercury", deity: "Pushan" },
];

/**
 * South Indian Chart 4x4 Grid Coordinates for each Rashi:
 * Fixed positions clockwise:
 * [Pisces (0,1),  Aries (0,2),    Taurus (0,3),   Gemini (0,4)]
 * [Aquarius (1,1),  CENTER,         CENTER,       Cancer (1,4)]
 * [Capricorn (2,1), CENTER,         CENTER,       Leo (2,4)]
 * [Sagittarius (3,1), Scorpio (3,2), Libra (3,3), Virgo (3,4)]
 */
export const SOUTH_INDIAN_GRID_COORDS: Record<number, { row: number; col: number }> = {
  11: { row: 0, col: 0 }, // Pisces / Meenam
  0: { row: 0, col: 1 },  // Aries / Mesham
  1: { row: 0, col: 2 },  // Taurus / Vrishabham
  2: { row: 0, col: 3 },  // Gemini / Mithunam
  3: { row: 1, col: 3 },  // Cancer / Karkatakam
  4: { row: 2, col: 3 },  // Leo / Simham
  5: { row: 3, col: 3 },  // Virgo / Kanya
  6: { row: 3, col: 2 },  // Libra / Tula
  7: { row: 3, col: 1 },  // Scorpio / Vrischikam
  8: { row: 3, col: 0 },  // Sagittarius / Dhanussu
  9: { row: 2, col: 0 },  // Capricorn / Makaram
  10: { row: 1, col: 0 }, // Aquarius / Kumbham
};

/**
 * Standard Lahiri (Chitra Paksha) Ayanamsa calculation
 */
export function calculateLahiriAyanamsa(date: Date): number {
  const jd = date.getTime() / 86400000 + 2440587.5;
  const t = (jd - 2451545.0) / 36525.0;
  return 23.857092 + 1.396971 * t + 0.000308 * t * t;
}

/**
 * Format decimal degrees into Deg° Min' Sec"
 */
export function formatDMS(deg: number): string {
  const d = Math.floor(deg);
  const minFloat = (deg - d) * 60;
  const m = Math.floor(minFloat);
  const s = Math.round((minFloat - m) * 60);
  return `${d}° ${m}' ${s}"`;
}

/**
 * Core Moon Sign Calculation
 */
export function calculateMoonSign({
  year,
  month,
  day,
  hour,
  minute,
  timezoneOffsetMinutes = 330, // Default 330 min = Asia/Kolkata (+05:30)
  sidereal = true,
}: {
  year: number;
  month: number;
  day: number;
  hour: number;
  minute: number;
  timezoneOffsetMinutes?: number;
  sidereal?: boolean;
}): MoonSignResult {
  // Convert local birth time to UTC Date
  const localEpoch = Date.UTC(year, month - 1, day, hour, minute, 0);
  const utcEpoch = localEpoch - timezoneOffsetMinutes * 60 * 1000;
  const utcDate = new Date(utcEpoch);

  // Compute Lunar position via astronomy-engine
  const moonVec = Astronomy.GeoVector(Astronomy.Body.Moon, utcDate, false);
  const moonEcl = Astronomy.Ecliptic(moonVec);
  const tropicalLongitude = moonEcl.elon;

  const ayanamsa = calculateLahiriAyanamsa(utcDate);

  let apparentLongitude = tropicalLongitude;
  if (sidereal) {
    apparentLongitude = (tropicalLongitude - ayanamsa + 360) % 360;
  }

  // Rashi (30 degrees each)
  const rashiIndex = Math.floor(apparentLongitude / 30);
  const rashi = RASHIS[rashiIndex] || RASHIS[0];
  const degreesInSign = apparentLongitude % 30;

  // Nakshatra (360 / 27 = 13.333333 degrees each)
  const nakshatraSpan = 360 / 27;
  const nakshatraIndex = Math.floor(apparentLongitude / nakshatraSpan);
  const nakshatraRaw = NAKSHATRAS[nakshatraIndex] || NAKSHATRAS[0];

  // Pada (Each nakshatra has 4 padas of 3.333333 degrees)
  const degInNakshatra = apparentLongitude % nakshatraSpan;
  const pada = Math.floor(degInNakshatra / (nakshatraSpan / 4)) + 1;

  // Boundary check: within 0.5 degrees (30 arcminutes) of sign boundary
  const distToStartOfSign = degreesInSign;
  const distToEndOfSign = 30 - degreesInSign;
  const isNearSignBoundary = distToStartOfSign < 0.5 || distToEndOfSign < 0.5;

  // Boundary check for Nakshatra boundary: within 0.3 degrees
  const distToStartOfNak = degInNakshatra;
  const distToEndOfNak = nakshatraSpan - degInNakshatra;
  const isNearNakBoundary = distToStartOfNak < 0.3 || distToEndOfNak < 0.3;

  const isNearBoundary = isNearSignBoundary || isNearNakBoundary;
  let boundaryMessage: string | undefined;
  if (isNearSignBoundary) {
    boundaryMessage =
      "Your Moon is within 0.5° of a sign change (Sandhi). Because the Moon moves quickly (~13.2°/day), an exact birth time is essential to confirm whether your Moon sits in this sign or the adjacent one. We advise verifying with an astrologer.";
  } else if (isNearNakBoundary) {
    boundaryMessage =
      "Your Moon sits close to a Nakshatra junction. We recommend confirming your exact birth minute for precise sub-lord and Dasha balance predictions.";
  }

  const gridCoord = SOUTH_INDIAN_GRID_COORDS[rashiIndex] || { row: 0, col: 0 };

  return {
    utcDate: utcDate.toISOString(),
    localDate: `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")} ${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}`,
    timezone: timezoneOffsetMinutes === 330 ? "Asia/Kolkata (IST +05:30)" : `UTC ${timezoneOffsetMinutes >= 0 ? "+" : ""}${Math.floor(timezoneOffsetMinutes / 60)}:${Math.abs(timezoneOffsetMinutes % 60).toString().padStart(2, "0")}`,
    isSidereal: sidereal,
    tropicalLongitude,
    ayanamsa,
    apparentLongitude,
    rashi,
    nakshatra: {
      index: nakshatraIndex,
      name: nakshatraRaw.name,
      teluguName: nakshatraRaw.teluguName,
      lord: nakshatraRaw.lord,
      deity: nakshatraRaw.deity,
      pada,
    },
    degreesInSign,
    formattedDegreesInSign: formatDMS(degreesInSign),
    isNearBoundary,
    boundaryMessage,
    chartPlacement: {
      signIndex: rashiIndex,
      houseName: rashi.sanskrit,
      southIndianGridRow: gridCoord.row,
      southIndianGridCol: gridCoord.col,
    },
  };
}
