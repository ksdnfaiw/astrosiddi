import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import * as Astronomy from "astronomy-engine";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const vectorsPath = path.join(__dirname, "fixtures", "vectors.json");
const vectors = JSON.parse(fs.readFileSync(vectorsPath, "utf-8"));

function calculateLahiriAyanamsa(date) {
  const jd = date.getTime() / 86400000 + 2440587.5;
  const t = (jd - 2451545.0) / 36525.0;
  return 23.857092 + 1.396971 * t + 0.000308 * t * t;
}

const RASHIS = ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"];
const NAKSHATRAS = [
  "Ashwini", "Bharani", "Krittika", "Rohini", "Mrigashira", "Ardra",
  "Punarvasu", "Pushya", "Ashlesha", "Magha", "Purva Phalguni", "Uttara Phalguni",
  "Hasta", "Chitra", "Swati", "Vishakha", "Anuradha", "Jyeshtha",
  "Mula", "Purva Ashadha", "Uttara Ashadha", "Shravana", "Dhanishta", "Shatabhisha",
  "Purva Bhadrapada", "Uttara Bhadrapada", "Revati"
];

console.log("🧪 Running Moon Sign Calculation Tests...");

const refVector = vectors.moonSignVectors.find((v) => v.id === "astro-ref-1");
assert(refVector, "Reference vector astro-ref-1 must exist");

const [year, month, day] = refVector.date.split("-").map(Number);
const [hour, minute] = refVector.time.split(":").map(Number);

const localEpoch = Date.UTC(year, month - 1, day, hour, minute, 0);
const utcEpoch = localEpoch - refVector.tzOffsetMinutes * 60 * 1000;
const utcDate = new Date(utcEpoch);

const moonVec = Astronomy.GeoVector(Astronomy.Body.Moon, utcDate, false);
const moonEcl = Astronomy.Ecliptic(moonVec);
const tropicalElon = moonEcl.elon;
const ayanamsa = calculateLahiriAyanamsa(utcDate);
const siderealElon = (tropicalElon - ayanamsa + 360) % 360;

const tropicalSign = RASHIS[Math.floor(tropicalElon / 30)];
const siderealSign = RASHIS[Math.floor(siderealElon / 30)];
const nakshatraIndex = Math.floor(siderealElon / (360 / 27));
const nakshatra = NAKSHATRAS[nakshatraIndex];
const degInNak = siderealElon % (360 / 27);
const pada = Math.floor(degInNak / (360 / 27 / 4)) + 1;

console.log(`Checking ${refVector.label}`);
console.log(`  UTC Time: ${utcDate.toISOString()}`);
console.log(`  Tropical Longitude: ${tropicalElon.toFixed(2)}° (${tropicalSign})`);
console.log(`  Lahiri Ayanamsa: ${ayanamsa.toFixed(2)}°`);
console.log(`  Sidereal Longitude: ${siderealElon.toFixed(2)}° (${siderealSign})`);
console.log(`  Nakshatra: ${nakshatra}, Pada ${pada}`);

assert.equal(tropicalSign, refVector.expectedTropicalSign);
assert.equal(siderealSign, refVector.expectedSiderealSign);
assert.equal(nakshatra, refVector.expectedNakshatra);
assert.equal(pada, refVector.expectedPada);

console.log("  ✅ Reference vector passed perfectly!");

// Report Accuracy Gate status
const pendingCount = vectors.moonSignVectors.filter((v) => v.date === "TODO").length;
console.log(`\n🔒 Accuracy Gate Status: ${vectors.accuracyGateStatus.status}`);
console.log(`   Pending Client Verified Charts: ${pendingCount} needed to release moon sign & kundli calculators to public index.`);
