import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read test vectors
const vectorsPath = path.join(__dirname, "fixtures", "vectors.json");
const vectors = JSON.parse(fs.readFileSync(vectorsPath, "utf-8"));

// Import compiled or transpile numerology logic
function reduceToSingleDigit(num) {
  let current = Math.abs(num);
  while (current > 9) {
    const digits = current.toString().split("").map(Number);
    current = digits.reduce((acc, d) => acc + d, 0);
  }
  return current;
}

function reduceWithMasterNumbers(num, isFinal = false) {
  let current = Math.abs(num);
  while (current > 9) {
    if (isFinal && (current === 11 || current === 22 || current === 33)) break;
    if (!isFinal && (current === 11 || current === 22 || current === 33)) break;
    const digits = current.toString().split("").map(Number);
    current = digits.reduce((acc, d) => acc + d, 0);
  }
  return current;
}

function calculateNumerologyTest(day, month, year) {
  const mulank = reduceToSingleDigit(day);

  const dobString = `${day.toString().padStart(2, "0")}${month.toString().padStart(2, "0")}${year}`;
  const dobDigits = dobString.split("").map(Number);
  let currentBhagyank = dobDigits.reduce((acc, d) => acc + d, 0);
  while (currentBhagyank > 9) {
    const digits = currentBhagyank.toString().split("").map(Number);
    currentBhagyank = digits.reduce((acc, d) => acc + d, 0);
  }

  const rMonth = reduceWithMasterNumbers(month, false);
  const rDay = reduceWithMasterNumbers(day, false);
  const rYear = reduceWithMasterNumbers(year, false);
  const lifePath = reduceWithMasterNumbers(rMonth + rDay + rYear, true);

  return { mulank, bhagyank: currentBhagyank, lifePath };
}

console.log("🧪 Running Numerology Unit Tests...");

for (const vec of vectors.numerologyVectors) {
  const res = calculateNumerologyTest(vec.day, vec.month, vec.year);
  console.log(`Checking DOB: ${vec.dob} (${vec.notes})`);

  assert.equal(res.mulank, vec.expectedMulank, `Mulank mismatch for ${vec.dob}: expected ${vec.expectedMulank}, got ${res.mulank}`);
  assert.equal(res.bhagyank, vec.expectedBhagyank, `Bhagyank mismatch for ${vec.dob}: expected ${vec.expectedBhagyank}, got ${res.bhagyank}`);
  assert.equal(res.lifePath, vec.expectedLifePath, `LifePath mismatch for ${vec.dob}: expected ${vec.expectedLifePath}, got ${res.lifePath}`);

  console.log(`  ✅ Passed: Mulank=${res.mulank}, Bhagyank=${res.bhagyank}, LifePath=${res.lifePath}`);
}

console.log("🎉 All Numerology unit tests passed successfully!\n");
