export interface NumerologyResult {
  day: number;
  month: number;
  year: number;
  mulank: number;
  mulankWorking: string;
  bhagyank: number;
  bhagyankWorking: string;
  lifePath: number;
  lifePathWorking: string;
  isLifePathMaster: boolean;
  rulingPlanet: {
    number: number;
    name: string;
    sanskritName: string;
    teluguName: string;
    deity: string;
    element: string;
    luckyColors: string[];
    luckyDays: string[];
    compatibleNumbers: number[];
    traits: string[];
    description: string;
    careerGuidance: string;
  };
}

export const PLANET_DATA: Record<
  number,
  {
    name: string;
    sanskritName: string;
    teluguName: string;
    deity: string;
    element: string;
    luckyColors: string[];
    luckyDays: string[];
    compatibleNumbers: number[];
    traits: string[];
    description: string;
    careerGuidance: string;
  }
> = {
  1: {
    name: "Sun",
    sanskritName: "Surya",
    teluguName: "సూర్యుడు (Suryudu)",
    deity: "Lord Surya Narayana",
    element: "Fire (Tejas)",
    luckyColors: ["Gold", "Ruby Red", "Orange", "Copper"],
    luckyDays: ["Sunday"],
    compatibleNumbers: [1, 2, 3, 5, 9],
    traits: ["Leadership", "Ambition", "Vitality", "Self-Reliance", "Originality"],
    description:
      "Ruled by the Sun, Number 1 natives possess an innate drive to pioneer and lead. You have natural authority, executive willpower, and a desire to create unique pathways rather than follow beaten tracks.",
    careerGuidance:
      "Thrives in entrepreneurship, administrative leadership, civil services, medical administration, politics, and executive management.",
  },
  2: {
    name: "Moon",
    sanskritName: "Chandra",
    teluguName: "చంద్రుడు (Chandrudu)",
    deity: "Lord Chandra / Parvati",
    element: "Water (Jala)",
    luckyColors: ["Pearl White", "Silver", "Cream", "Sea Green"],
    luckyDays: ["Monday"],
    compatibleNumbers: [1, 2, 4, 7],
    traits: ["Intuition", "Diplomacy", "Empathy", "Creativity", "Peace-making"],
    description:
      "Ruled by the Moon, Number 2 radiates gentleness, deep emotional sensitivity, and intuitive receptivity. You are a natural mediator, artistic, cooperative, and deeply connected to ancestral and family roots.",
    careerGuidance:
      "Excels in counseling, psychology, fine arts, hospitality, healthcare, diplomacy, writing, and cooperative ventures.",
  },
  3: {
    name: "Jupiter",
    sanskritName: "Brihaspati / Guru",
    teluguName: "బృహస్పతి / గురుడు (Gurudu)",
    deity: "Lord Dakshinamurthy / Shiva",
    element: "Ether (Akasha)",
    luckyColors: ["Yellow", "Saffron", "Golden Yellow"],
    luckyDays: ["Thursday"],
    compatibleNumbers: [1, 3, 5, 6, 9],
    traits: ["Wisdom", "Optimism", "Counseling", "Expansiveness", "Integrity"],
    description:
      "Ruled by Devaguru Brihaspati, Number 3 symbolizes higher wisdom, teaching, expansive intellect, and spiritual morality. You inspire others through knowledge, optimism, and dignified speech.",
    careerGuidance:
      "Ideal for education, legal advocacy, financial planning, spiritual mentorship, literature, and advisory roles.",
  },
  4: {
    name: "Rahu",
    sanskritName: "Rahu (North Lunar Node)",
    teluguName: "రాహువు (Rahuvu)",
    deity: "Goddess Durga",
    element: "Air / Shadow (Vayu)",
    luckyColors: ["Electric Blue", "Grey", "Smoky Blue"],
    luckyDays: ["Saturday", "Wednesday"],
    compatibleNumbers: [1, 2, 4, 6, 8],
    traits: ["Unconventionality", "Practical Engineering", "Perseverance", "Research"],
    description:
      "Ruled by Rahu, Number 4 represents practical realism, out-of-the-box thinking, technical genius, and disruptive breakthroughs. You often question dogmas and construct lasting structures through grit.",
    careerGuidance:
      "Outstanding in software engineering, modern technology, architecture, statistical research, logistics, and data sciences.",
  },
  5: {
    name: "Mercury",
    sanskritName: "Budha",
    teluguName: "బుధుడు (Budhudu)",
    deity: "Lord Vishnu",
    element: "Earth (Prithvi)",
    luckyColors: ["Emerald Green", "Mint", "Turquoise"],
    luckyDays: ["Wednesday"],
    compatibleNumbers: [1, 3, 5, 6],
    traits: ["Versatility", "Commerce", "Communication", "Quick Wit", "Adaptability"],
    description:
      "Ruled by Budha, Number 5 is the embodiment of intellect, agility, and business acumen. You have rapid learning abilities, eloquence, and a knack for thriving in dynamic environments.",
    careerGuidance:
      "Excels in trade, stock markets, marketing, public relations, journalism, foreign trade, and tech consulting.",
  },
  6: {
    name: "Venus",
    sanskritName: "Shukra",
    teluguName: "శుక్రుడు (Shukrudu)",
    deity: "Goddess Mahalakshmi",
    element: "Water (Jala)",
    luckyColors: ["Light Blue", "Pink", "Silver White", "Pastels"],
    luckyDays: ["Friday"],
    compatibleNumbers: [3, 4, 5, 6, 9],
    traits: ["Harmony", "Aesthetics", "Compassion", "Luxury", "Devotion"],
    description:
      "Ruled by Shukra, Number 6 embodies refined taste, warmth, artistic talent, and magnetic charisma. You bring harmony to family life, create comfort, and naturally attract goodwill and abundance.",
    careerGuidance:
      "Flourishes in interior design, cinema, luxury branding, hospitality, architecture, fashion, and social welfare.",
  },
  7: {
    name: "Ketu",
    sanskritName: "Ketu (South Lunar Node)",
    teluguName: "కేతువు (Kethuvu)",
    deity: "Lord Ganesha",
    element: "Ether / Fire (Agni-Akasha)",
    luckyColors: ["White", "Light Green", "Gold", "Light Yellow"],
    luckyDays: ["Thursday", "Tuesday"],
    compatibleNumbers: [1, 2, 7],
    traits: ["Spiritual Insight", "Analytical Depth", "Introspection", "Philosophical"],
    description:
      "Ruled by Ketu, Number 7 is the mystic and thinker. You seek underlying cosmic truths beneath superficial appearances. You possess acute psychic sensitivity and investigative brilliance.",
    careerGuidance:
      "Naturally suited for research science, philosophical writing, astrology, psychiatric research, spiritual coaching, and cybersecurity.",
  },
  8: {
    name: "Saturn",
    sanskritName: "Shani",
    teluguName: "శని (Shani)",
    deity: "Lord Shani / Shiva",
    element: "Air (Vayu)",
    luckyColors: ["Dark Blue", "Black", "Charcoal Grey"],
    luckyDays: ["Saturday"],
    compatibleNumbers: [4, 5, 6, 8],
    traits: ["Discipline", "Endurance", "Karmic Justice", "Organizational Mastery"],
    description:
      "Ruled by Shani Dev, Number 8 represents discipline, patience, karmic accountability, and gradual but unbreakable success. You are the architect of enduring enterprises and monumental tasks.",
    careerGuidance:
      "Commanding in heavy industry, civil engineering, judiciary, corporate governance, real estate infrastructure, and mining.",
  },
  9: {
    name: "Mars",
    sanskritName: "Mangala / Kuja",
    teluguName: "కుజుడు / అంగారకుడు (Kujudu)",
    deity: "Lord Subrahmanya / Hanuman",
    element: "Fire (Agni)",
    luckyColors: ["Bright Red", "Crimson", "Coral"],
    luckyDays: ["Tuesday"],
    compatibleNumbers: [1, 2, 3, 6, 9],
    traits: ["Courage", "Humanitarian Drive", "Direct Action", "Resilience"],
    description:
      "Ruled by Mangala, Number 9 vibrates with boundless energy, protective instincts, and humanitarian zeal. You champion righteous causes, stand boldly against obstacles, and inspire others through valor.",
    careerGuidance:
      "Superb in surgical medicine, defense forces, sports leadership, social activism, engineering, and disaster management.",
  },
};

/**
 * Reduce a number to a single digit (1-9) by summing digits.
 * Returns { value, steps } for educational transparency.
 */
export function reduceToSingleDigit(num: number): { value: number; steps: string[] } {
  const steps: string[] = [];
  let current = Math.abs(num);

  while (current > 9) {
    const digits = current.toString().split("").map(Number);
    const sum = digits.reduce((acc, d) => acc + d, 0);
    steps.push(`${digits.join(" + ")} = ${sum}`);
    current = sum;
  }

  return { value: current, steps };
}

/**
 * Reduce a number while preserving Master Numbers 11, 22, 33 if requested.
 */
export function reduceWithMasterNumbers(num: number, isFinalStep = false): { value: number; steps: string[] } {
  const steps: string[] = [];
  let current = Math.abs(num);

  while (current > 9) {
    if (isFinalStep && (current === 11 || current === 22 || current === 33)) {
      break;
    }
    // For intermediate parts, 11, 22, 33 can be preserved
    if (!isFinalStep && (current === 11 || current === 22 || current === 33)) {
      break;
    }

    const digits = current.toString().split("").map(Number);
    const sum = digits.reduce((acc, d) => acc + d, 0);
    steps.push(`${digits.join(" + ")} = ${sum}`);
    current = sum;
  }

  return { value: current, steps };
}

/**
 * Calculate complete Numerology Profile from Day, Month, Year
 */
export function calculateNumerology(day: number, month: number, year: number): NumerologyResult {
  // 1. Mulank (Psychic Number) - Day reduced to 1-9
  const mulankReduction = reduceToSingleDigit(day);
  const mulank = mulankReduction.value;
  const mulankWorking =
    day > 9 ? `Day ${day} ➔ ${mulankReduction.steps.join(" ➔ ")}` : `Day ${day} (Single digit)`;

  // 2. Bhagyank (Destiny Number) - All digits of DOB summed and reduced to 1-9
  const dobString = `${day.toString().padStart(2, "0")}${month.toString().padStart(2, "0")}${year}`;
  const dobDigits = dobString.split("").map(Number);
  const firstSum = dobDigits.reduce((acc, d) => acc + d, 0);
  const bhagyankSteps: string[] = [`${dobDigits.join(" + ")} = ${firstSum}`];

  let currentBhagyank = firstSum;
  while (currentBhagyank > 9) {
    const nextDigits = currentBhagyank.toString().split("").map(Number);
    const nextSum = nextDigits.reduce((acc, d) => acc + d, 0);
    bhagyankSteps.push(`${nextDigits.join(" + ")} = ${nextSum}`);
    currentBhagyank = nextSum;
  }
  const bhagyank = currentBhagyank;
  const bhagyankWorking = bhagyankSteps.join(" ➔ ");

  // 3. Western Life Path: reduce month, day, year separately, then sum. Keep 11, 22, 33.
  const rMonth = reduceWithMasterNumbers(month, false);
  const rDay = reduceWithMasterNumbers(day, false);
  const rYear = reduceWithMasterNumbers(year, false);

  const lifePathIntermediate = rMonth.value + rDay.value + rYear.value;
  const lifePathFinal = reduceWithMasterNumbers(lifePathIntermediate, true);
  const lifePath = lifePathFinal.value;
  const isLifePathMaster = lifePath === 11 || lifePath === 22 || lifePath === 33;

  const lpParts = [
    `Month ${month}${rMonth.steps.length ? " (" + rMonth.steps[rMonth.steps.length - 1] + ")" : ""} = ${rMonth.value}`,
    `Day ${day}${rDay.steps.length ? " (" + rDay.steps[rDay.steps.length - 1] + ")" : ""} = ${rDay.value}`,
    `Year ${year}${rYear.steps.length ? " (" + rYear.steps[rYear.steps.length - 1] + ")" : ""} = ${rYear.value}`,
  ];
  const lifePathWorking = `${lpParts.join(" | ")} ➔ Sum: ${rMonth.value} + ${rDay.value} + ${rYear.value} = ${lifePathIntermediate}${
    lifePathFinal.steps.length ? " ➔ " + lifePathFinal.steps.join(" ➔ ") : ""
  }`;

  // Planet for Mulank (or Life Path base if reduced)
  const planetBaseNumber = isLifePathMaster ? reduceToSingleDigit(lifePath).value : mulank;
  const planet = PLANET_DATA[mulank] || PLANET_DATA[planetBaseNumber] || PLANET_DATA[1];

  return {
    day,
    month,
    year,
    mulank,
    mulankWorking,
    bhagyank,
    bhagyankWorking,
    lifePath,
    lifePathWorking,
    isLifePathMaster,
    rulingPlanet: {
      number: mulank,
      ...planet,
    },
  };
}
