export interface Rashi {
  slug: string;
  sanskrit: string;
  english: string;
  telugu: string;
  symbol: string;
  glyph: string;
  rulingPlanet: string;
  element: "Fire" | "Earth" | "Air" | "Water";
  modality: "Movable (Chara)" | "Fixed (Sthira)" | "Dual (Dwiswabhava)";
  nakshatras: string;
  sunTransit: string;
  gemstone: string;
  metaDescription: string;
  intro: string;
  personality: string[];
  strengths: string[];
  challenges: string[];
  career: string;
  relationships: string;
  compatibleWith: string[];
  consultationFocus: string;
}

export const RASHIS: Rashi[] = [
  {
    slug: "mesha-rashi",
    sanskrit: "Mesha",
    english: "Aries",
    telugu: "మేషం",
    symbol: "The Ram",
    glyph: "♈",
    rulingPlanet: "Mars (Kuja)",
    element: "Fire",
    modality: "Movable (Chara)",
    nakshatras: "Ashwini, Bharani, Krittika (1st pada)",
    sunTransit: "Roughly mid-April to mid-May",
    gemstone: "Red Coral (Moonga)",
    metaDescription:
      "Mesha Rashi (Aries) horoscope: Mars-ruled Moon sign traits, career and relationships. Telugu and English consultation in Visakhapatnam, Andhra Pradesh.",
    intro:
      "In Vedic astrology, Mesha Rashi is the sign the Moon occupied at your birth, not where the Sun stood. It is the first sign of the sidereal zodiac and is ruled by Mars, setting a tone of initiative, directness and restless energy in the way a person feels and reacts.",
    personality: [
      "Natives of Mesha Rashi tend to meet the world head-on. With the Moon in the sign of the Ram, emotions arrive quickly and are usually expressed just as quickly, which gives these people a refreshing candour. They like to start things, to be the first to speak up, and to test an idea in action rather than debate it for weeks. Mars as ruler adds courage and a competitive streak, and the fiery, movable nature of the sign keeps attention pointed toward whatever is new.",
      "The same quickness can show up as impatience. Mesha minds often know what they want before they have gathered every detail, and they may find slow processes or lukewarm people tiring. Over time, many learn to channel the Moon's fire into steady projects, physical activity and leadership roles where decisive action is valued. Their loyalty is straightforward: they defend those they care about readily, and they tend to forgive and move on without holding long grudges.",
    ],
    strengths: [
      "Courageous and decisive",
      "Honest, straightforward communication",
      "Natural initiative and drive",
      "Quick recovery after setbacks",
    ],
    challenges: [
      "Impatience with slow or detailed work",
      "Speaking or acting before reflecting",
      "Difficulty sustaining interest once novelty fades",
    ],
    career:
      "Mesha natives often do well where initiative is rewarded: entrepreneurship, sales, the armed and police services, engineering, construction, sports and project leadership. Mars rules these themes of action, tools and competition. They usually prefer autonomy to constant supervision and thrive when given a clear goal and freedom in method. Traditional analysis also studies the tenth house and its lord in the birth chart, since the Moon sign is only one layer of career indications.",
    relationships:
      "In close relationships, Mesha natives are ardent, loyal and expressive. They prefer partners who are confident, honest and able to hold their own, and they can feel stifled by games or prolonged ambiguity. Arguments flare quickly but rarely linger. Growth in partnership often comes from pausing to listen before responding, and from recognising that a quieter partner may need time to process. Family life benefits from shared activity and plain speaking.",
    compatibleWith: ["simha-rashi", "dhanu-rashi", "kumbha-rashi"],
    consultationFocus:
      "In a Mesha Rashi consultation, an astrologer typically begins with Mars: its sign, house and aspects in the birth chart, and whether it is strong or under strain. The Moon's exact nakshatra and pada, the current Vimshottari dasha and antardasha, and the Kuja (Mangal) dosha considerations used in marriage matching are also reviewed. The aim is to explain tendencies and periods of emphasis in context, not to promise any particular outcome.",
  },
  {
    slug: "vrishabha-rashi",
    sanskrit: "Vrishabha",
    english: "Taurus",
    telugu: "వృషభం",
    symbol: "The Bull",
    glyph: "♉",
    rulingPlanet: "Venus (Shukra)",
    element: "Earth",
    modality: "Fixed (Sthira)",
    nakshatras: "Krittika (2nd-4th pada), Rohini, Mrigashira (1st-2nd pada)",
    sunTransit: "Roughly mid-May to mid-June",
    gemstone: "Diamond (Vajra)",
    metaDescription:
      "Vrishabha Rashi (Taurus) horoscope: Venus-ruled Moon sign character, career and family life. Telugu and English consultation in Visakhapatnam.",
    intro:
      "Vrishabha Rashi is the Moon sign of those born when the Moon moved through the sidereal Bull, which is a different matter from the Sun sign printed in a Western almanac. Ruled by Venus and fixed in nature, it is associated with steadiness, appreciation of comfort and a strong sense of what is worth keeping.",
    personality: [
      "The Moon is exalted in Vrishabha, and traditional texts often read this as a calm, receptive emotional nature. These natives usually prefer rhythm to disruption: regular meals, familiar places, dependable people. They notice textures, tastes, music and beauty with unusual care, a gift of Venus. Decisions are made slowly but, once made, are held firmly. Others often describe them as grounded and patient, someone to sit beside when a situation feels unsettled.",
      "Fixity has its other face. Vrishabha natives may resist change long after it has become necessary, and a stubborn silence can replace open discussion. Attachment to possessions, routines or old opinions can narrow their options. Yet when they do decide to adapt, they usually do so thoroughly and reliably. Their generosity is practical: they show care through food, gifts, a well-kept home and quiet presence rather than through grand declarations.",
    ],
    strengths: [
      "Patience and perseverance",
      "Reliable, loyal character",
      "Refined sense of beauty and value",
      "Practical money sense",
    ],
    challenges: [
      "Resistance to change",
      "Possessiveness or over-attachment",
      "Slow to forgive after being hurt",
    ],
    career:
      "Venus-ruled fields suit many Vrishabha natives: finance and banking, agriculture and food, hospitality, fashion, jewellery, music, interior design and the arts. They tend to build careers slowly and sustainably, valuing a secure base over risky leaps, and employers often trust them with long-term responsibilities. An astrologer would also study the second and tenth houses, since wealth and profession are judged from the whole chart rather than the Moon sign alone.",
    relationships:
      "Vrishabha natives approach love as a long-term commitment. They are affectionate, appreciative of shared comforts and deeply faithful once trust is established, though courtship may unfold gradually. The challenge is possessiveness and a tendency to dig in during disagreements, so partners benefit from flexibility and gentle humour. Shared meals, a pleasant home and consistent routines often anchor their sense of closeness.",
    compatibleWith: ["kanya-rashi", "makara-rashi", "karka-rashi"],
    consultationFocus:
      "For Vrishabha Rashi, the astrologer looks closely at Venus: its house, its dignity and any conjunction with malefic planets, as well as the Moon's placement by nakshatra, especially whether it falls in Krittika, Rohini or Mrigashira. Finances, family matters and the second house are commonly discussed. Venus dasha and antardasha periods receive attention, along with marriage compatibility factors, always as context for decisions rather than fixed verdicts.",
  },
  {
    slug: "mithuna-rashi",
    sanskrit: "Mithuna",
    english: "Gemini",
    telugu: "మిథునం",
    symbol: "The Twins",
    glyph: "♊",
    rulingPlanet: "Mercury (Budha)",
    element: "Air",
    modality: "Dual (Dwiswabhava)",
    nakshatras: "Mrigashira (3rd-4th pada), Ardra, Punarvasu (1st-3rd pada)",
    sunTransit: "Roughly mid-June to mid-July",
    gemstone: "Emerald (Panna)",
    metaDescription:
      "Mithuna Rashi (Gemini) horoscope: Mercury-ruled Moon sign mind, career and relationships. Telugu and English consultation in Visakhapatnam, India.",
    intro:
      "Mithuna Rashi, the sidereal Gemini, is the Moon sign of those whose minds lean toward curiosity, conversation and quick connections. Ruled by Mercury and dual in nature, it describes a restless, adaptable inner life that is always collecting stories, words and possibilities.",
    personality: [
      "Where the Moon sits in Mithuna, thought and feeling are tightly woven. These natives often process emotions by talking, writing or reading about them, and they can seem to be in two moods at once. Mercury gives wit, dexterity with language and numbers, and a talent for explaining complex matters simply. They make friends easily, enjoy variety in company and pastimes, and are rarely bored for long because there is always another question to pursue.",
      "The cost of this versatility is scattered attention. A Mithuna mind may begin several projects and carry few to completion, or worry by running through every imaginable scenario. They can appear inconsistent when they are simply exploring. Depth tends to come with maturity, when they choose a few subjects or relationships to commit to. Light humour, a love of learning and a gift for seeing both sides help them mediate where others take sides.",
    ],
    strengths: [
      "Quick, versatile intellect",
      "Excellent communication",
      "Adaptability in new situations",
      "Sociable and curious nature",
    ],
    challenges: [
      "Scattered focus",
      "Overthinking and mental restlessness",
      "Difficulty committing to a single path",
    ],
    career:
      "Mithuna natives are often drawn to work that moves information or connects people: writing, teaching, journalism, publishing, translation, software, analytics, trade, advertising and public speaking. Mercury also favours accounting, commerce and intermediary roles. Variety keeps them engaged, so portfolio careers or positions with changing tasks suit them. In chart study, the third house of skill and communication, and the tenth house, are examined alongside Mercury.",
    relationships:
      "In relationships, Mithuna natives value conversation above nearly everything. They want a companion who can banter, share ideas and keep pace with changing interests, and boredom, rather than conflict, is their greater threat to closeness. They are generally light-hearted, youthful in spirit and good at defusing tension. Partners may need to offer reassurance when the native withdraws into thought, while the native can practise saying plainly what they feel.",
    compatibleWith: ["tula-rashi", "kumbha-rashi", "simha-rashi"],
    consultationFocus:
      "A Mithuna Rashi reading usually centres on Mercury: its sign, house, closeness to the Sun, and its relationship with the Moon. Because the sign is dual, the astrologer also checks how the third, seventh and eleventh houses support communication and partnerships. The Moon's nakshatra among Mrigashira, Ardra and Punarvasu refines the picture, and dasha periods are reviewed to understand when study, travel or change may be emphasised, without making guarantees.",
  },
  {
    slug: "karka-rashi",
    sanskrit: "Karka",
    english: "Cancer",
    telugu: "కర్కాటకం",
    symbol: "The Crab",
    glyph: "♋",
    rulingPlanet: "Moon (Chandra)",
    element: "Water",
    modality: "Movable (Chara)",
    nakshatras: "Punarvasu (4th pada), Pushya, Ashlesha",
    sunTransit: "Roughly mid-July to mid-August",
    gemstone: "Pearl (Moti)",
    metaDescription:
      "Karka Rashi (Cancer) horoscope: Moon-ruled sign of home, memory and care. Telugu and English astrology consultation in Visakhapatnam, Andhra Pradesh.",
    intro:
      "Karka Rashi, the sidereal Cancer, is the only sign ruled by the Moon itself, so a Karka native carries the planet of mind and emotion in its own home. In the Vedic tradition your Janma Rashi is where the Moon stood at birth, and for Karka that makes feeling, memory and belonging central themes.",
    personality: [
      "Natives of Karka Rashi are often deeply sensitive to atmosphere. They sense moods in a room before anyone speaks, remember occasions and kindnesses for decades, and hold family and home as their emotional centre. The Moon in its own sign gives imagination and a nurturing instinct that extends beyond relatives to friends, colleagues and anyone who seems in need. Their feelings tend to move in tides, rising and ebbing, and they are most settled among familiar, trusted people.",
      "Protectiveness can turn into guardedness. A Karka native may retreat into a shell when hurt, hold on to old grievances, or take neutral remarks personally. Learning to name feelings aloud, instead of expecting others to guess, is a common lesson. When they do, their warmth becomes a real asset. They are resourceful with household matters, careful with what they save, and often the person a family quietly relies on during difficult seasons.",
    ],
    strengths: [
      "Caring, protective nature",
      "Strong memory and intuition",
      "Resourceful and thrifty",
      "Deep loyalty to family and friends",
    ],
    challenges: [
      "Mood swings and sensitivity to criticism",
      "Holding on to past hurts",
      "Reluctance to let others see vulnerability",
    ],
    career:
      "Karka natives often find satisfaction in roles that involve care, nourishment or stewardship: teaching, social work, counselling, hospitality, food businesses, real estate, childcare, history and archives, and water-linked trades. The Moon's public association also suits work that serves the community. They tend to be thoughtful managers who remember people's circumstances. The fourth and tenth houses of the chart, together with the Moon's strength, are studied for career direction.",
    relationships:
      "Karka natives give relationships a home-like quality. They are tender, attentive and dedicated to making a partner feel safe, and they place great value on family gatherings, rituals and shared history. They need to feel emotionally secure before opening up. Misunderstandings can arise when they withdraw rather than speak. Patient reassurance from a partner helps, as does the native's willingness to voice needs directly instead of hinting.",
    compatibleWith: ["vrischika-rashi", "meena-rashi", "vrishabha-rashi"],
    consultationFocus:
      "With Karka Rashi the Moon is both ruler and the defining point, so the astrologer examines its house, its phase at birth (waxing or waning), aspects to it, and the exact nakshatra among Punarvasu, Pushya and Ashlesha. Mother-related themes, the fourth house and emotional patterns are explored. Moon dasha and Saturn's transits over the Moon sign are explained as phases to understand and prepare for.",
  },
  {
    slug: "simha-rashi",
    sanskrit: "Simha",
    english: "Leo",
    telugu: "సింహం",
    symbol: "The Lion",
    glyph: "♌",
    rulingPlanet: "Sun (Surya)",
    element: "Fire",
    modality: "Fixed (Sthira)",
    nakshatras: "Magha, Purva Phalguni, Uttara Phalguni (1st pada)",
    sunTransit: "Roughly mid-August to mid-September",
    gemstone: "Ruby (Manikya)",
    metaDescription:
      "Simha Rashi (Leo) horoscope: Sun-ruled Moon sign leadership, career and love. Telugu and English consultation in Visakhapatnam for natives and families.",
    intro:
      "Simha Rashi, the sidereal Leo, belongs to those whose Moon was in the sign of the Lion at birth. It is ruled by the Sun, the natural significator of authority and the self, and the sign is associated with dignity, generosity and a wish to be seen as someone dependable.",
    personality: [
      "With the Moon in Simha, the emotional life has a regal bearing. These natives want respect, and they extend it generously when it is returned. They tend to be warm hosts, enthusiastic supporters and natural focal points in a gathering. The Sun's rulership gives steady confidence and a sense of purpose, while the fixed, fiery quality sustains effort over time. They dislike pettiness and are happiest when they can act on principle, with a clear role to play.",
      "Pride is the sign's tender spot. Simha natives may feel wounded by being overlooked or corrected in public, and may find it hard to ask for help. Authority can drift into insisting on their own way. The remedy lies in listening, sharing credit and letting others shine. When they do, their loyalty and big-heartedness make them beloved leaders, mentors and elders, the sort of people who protect those under their care without expecting to be thanked.",
    ],
    strengths: [
      "Natural leadership and presence",
      "Generosity and warmth",
      "Dignity and integrity",
      "Steady confidence under pressure",
    ],
    challenges: [
      "Sensitivity to being ignored or criticised",
      "Tendency to dominate decisions",
      "Difficulty asking for help",
    ],
    career:
      "Simha natives are frequently suited to positions of visible responsibility: government service, administration, politics, management, performing arts, direction, teaching and gold or luxury trades. The Sun's link to authority favours roles with a clear mandate and public standing, and they work best when they can take ownership. Astrologers consult the tenth house, the Sun's placement and the fifth house of creativity when considering vocation.",
    relationships:
      "Simha natives love generously and with flair. They enjoy celebrating a partner, remembering occasions and creating memorable moments, and they hope for admiration and faithfulness in return. Their warmth makes family gatherings lively. Friction usually appears around pride, when neither side is willing to speak first. A partner who offers sincere appreciation, and a native who practises humility in disagreements, tend to build a lasting and affectionate bond.",
    compatibleWith: ["mesha-rashi", "dhanu-rashi", "mithuna-rashi"],
    consultationFocus:
      "In a Simha Rashi consultation, the focus is on the Sun: its house, sign, any conjunction with Saturn or the nodes, and its role as lord of the Moon's sign. The astrologer also reviews the Moon's nakshatra among Magha, Purva Phalguni and Uttara Phalguni, the fifth and tenth houses, and the Sun's dasha. Career recognition, relationships with father figures and leadership style are discussed as tendencies only.",
  },
  {
    slug: "kanya-rashi",
    sanskrit: "Kanya",
    english: "Virgo",
    telugu: "కన్య",
    symbol: "The Maiden",
    glyph: "♍",
    rulingPlanet: "Mercury (Budha)",
    element: "Earth",
    modality: "Dual (Dwiswabhava)",
    nakshatras: "Uttara Phalguni (2nd-4th pada), Hasta, Chitra (1st-2nd pada)",
    sunTransit: "Roughly mid-September to mid-October",
    gemstone: "Emerald (Panna)",
    metaDescription:
      "Kanya Rashi (Virgo) horoscope: Mercury-ruled Moon sign of detail, service and order. Telugu and English consultation in Visakhapatnam, Andhra Pradesh.",
    intro:
      "Kanya Rashi, the sidereal Virgo, is the Moon sign of people who naturally notice detail and seek order. Ruled by Mercury like Mithuna but earthy and dual in temperament, it channels intellect toward service, refinement and practical problem-solving rather than debate.",
    personality: [
      "When the Moon rests in Kanya, the mind becomes an instrument of discernment. These natives observe closely, sort information easily and feel calmer once things are arranged properly. They are modest about their gifts and often undervalue them, preferring to help quietly rather than be praised. Mercury lends analytical skill and a precise way with words and numbers, while the earthy side keeps them attentive to schedules, routines and the useful completion of tasks.",
      "The same sharp eye can turn inward as self-criticism, or outward as fault-finding. Kanya natives may worry about getting things wrong and hold themselves, and sometimes others, to demanding standards. Small matters can occupy more attention than they deserve. Maturity brings a gentler perspective: recognising that good is often enough and that people are not projects to be improved. At their best they are dependable, thoughtful companions whose help arrives exactly when it is needed.",
    ],
    strengths: [
      "Analytical and detail-oriented",
      "Dependable and conscientious",
      "Humble, service-minded outlook",
      "Practical problem-solving",
    ],
    challenges: [
      "Perfectionism and self-criticism",
      "Excessive worry over small matters",
      "Reserve about expressing feelings",
    ],
    career:
      "Kanya natives often thrive in careers that reward accuracy and care: accountancy, auditing, editing, research, data analysis, teaching, administration, logistics planning, quality assurance and craft work. Mercury supports commerce and technical writing as well. They are valued for reliability and for noticing what others miss. In the chart, the sixth house of service and the tenth house are examined, along with Mercury's strength, to understand vocational fit.",
    relationships:
      "Kanya natives show love through practical acts: remembering a preference, fixing what is broken, being present when needed. They may be shy at the start and slow to declare feelings, preferring to observe whether a person is sincere. Once committed, they are steady and considerate. Difficulties arise when criticism, however well intended, is heard as rejection, so warm words of appreciation, both given and received, strengthen the bond.",
    compatibleWith: ["vrishabha-rashi", "makara-rashi", "vrischika-rashi"],
    consultationFocus:
      "An astrologer reading Kanya Rashi looks at Mercury's house, dignity and relation to the Sun, since Mercury is exalted in this sign, and at the Moon's nakshatra among Uttara Phalguni, Hasta and Chitra. The sixth house, daily routines, studies and workplace dynamics are commonly reviewed. Mercury dasha and antardasha periods are considered as phases of emphasis, offered as guidance for planning, not as predictions of fixed results.",
  },
  {
    slug: "tula-rashi",
    sanskrit: "Tula",
    english: "Libra",
    telugu: "తుల",
    symbol: "The Scales",
    glyph: "♎",
    rulingPlanet: "Venus (Shukra)",
    element: "Air",
    modality: "Movable (Chara)",
    nakshatras: "Chitra (3rd-4th pada), Swati, Vishakha (1st-3rd pada)",
    sunTransit: "Roughly mid-October to mid-November",
    gemstone: "Diamond (Vajra)",
    metaDescription:
      "Tula Rashi (Libra) horoscope: Venus-ruled Moon sign of balance, fairness and partnership. Telugu and English consultation in Visakhapatnam, India.",
    intro:
      "Tula Rashi, the sidereal Libra, is the Moon sign of those drawn to balance, fairness and harmony. Ruled by Venus and movable in nature, it is symbolised by the scales and describes a temperament that weighs situations before acting and values the company of others.",
    personality: [
      "Natives with the Moon in Tula tend to be gracious, diplomatic and attentive to how others feel. They dislike conflict and often serve as peacemakers, finding the phrase that lets both sides save face. Venus gives an eye for aesthetics, a pleasant manner and an interest in art, music and well-arranged spaces. They think best in dialogue and may seek a second opinion before committing, because fairness matters more to them than speed.",
      "Weighing every side can become hesitation. A Tula native may postpone decisions, agree outwardly to avoid friction, or feel quietly resentful when their own wishes go unspoken. Learning to state preferences kindly but clearly is a recurring theme. When they find that balance they become respected negotiators, advisers and partners, people whose judgment others trust because it is evidently even-handed and free from the need to win.",
    ],
    strengths: [
      "Diplomacy and tact",
      "Strong sense of fairness",
      "Aesthetic sensibility",
      "Easy, pleasant sociability",
    ],
    challenges: [
      "Indecision when options are evenly matched",
      "Avoiding necessary confrontation",
      "Dependence on others' approval",
    ],
    career:
      "Tula natives are often well placed in law, mediation, diplomacy, human resources, design, fashion, the performing arts, public relations and partnership-based businesses. Venus supports luxury, beauty and cultural industries. They work well in teams and with clients, and often prefer collaborative offices to isolated posts. Chart study includes the seventh house of partnerships, the tenth house and Venus placement, as vocation is never read from the Moon sign alone.",
    relationships:
      "Partnership is central to Tula natives, who often feel most complete in a committed relationship. They are courteous, romantic and keen on shared outings and beautiful surroundings. They may avoid raising difficulties to keep the peace, which can let small issues accumulate. Honest, calm conversation, and a partner who offers consistency without pressure, helps them feel safe enough to say what they truly think.",
    compatibleWith: ["mithuna-rashi", "kumbha-rashi", "dhanu-rashi"],
    consultationFocus:
      "For Tula Rashi, the astrologer studies Venus: its sign, house, dignity and conjunctions, along with the seventh house of marriage and partnership. Saturn is exalted in Tula, so its placement also receives attention. The Moon's nakshatra among Chitra, Swati and Vishakha is noted, and Venus dasha periods are reviewed, together with marriage matching considerations, as context for thoughtful decisions rather than certainty.",
  },
  {
    slug: "vrischika-rashi",
    sanskrit: "Vrischika",
    english: "Scorpio",
    telugu: "వృశ్చికం",
    symbol: "The Scorpion",
    glyph: "♏",
    rulingPlanet: "Mars (Kuja)",
    element: "Water",
    modality: "Fixed (Sthira)",
    nakshatras: "Vishakha (4th pada), Anuradha, Jyeshtha",
    sunTransit: "Roughly mid-November to mid-December",
    gemstone: "Red Coral (Moonga)",
    metaDescription:
      "Vrischika Rashi (Scorpio) horoscope: Mars-ruled Moon sign of depth and resolve. Telugu and English consultation in Visakhapatnam, Andhra Pradesh.",
    intro:
      "Vrischika Rashi, the sidereal Scorpio, is the Moon sign of those with intense, private and determined emotional natures. Ruled by Mars and fixed in quality, it is associated with depth, research and a capacity for renewal that grows through experience.",
    personality: [
      "Vrischika natives feel deeply but show little. Behind a composed surface lies strong emotion, sharp intuition and a long memory. They are drawn to what is hidden: psychology, mysteries, research, spiritual practice, the reasons behind behaviour. Mars supplies stamina and resolve, so once a goal is set they pursue it quietly and tirelessly. They are selective with trust, but those admitted into their circle usually find unusual loyalty and honesty.",
      "Intensity can slip into suspicion, secrecy or an all-or-nothing outlook. A Vrischika native may test people before relaxing, or brood over a slight. Learning to share thoughts earlier, and to forgive without forgetting the lesson, softens this. Many find meaning through disciplined pursuits such as study, meditation or craft. When their strong will is directed toward renewal rather than resistance, they become resilient guides for others going through hard transitions.",
    ],
    strengths: [
      "Determination and resilience",
      "Penetrating intuition",
      "Fierce loyalty",
      "Capacity for focused research",
    ],
    challenges: [
      "Secrecy and difficulty trusting",
      "Brooding over perceived slights",
      "All-or-nothing attitudes",
    ],
    career:
      "Vrischika natives are often drawn to investigative and in-depth work: research, forensics, intelligence, psychology and counselling, mining and metallurgy, insurance, finance and spiritual or occult studies. Mars also supports engineering and defence roles. They prefer substance to show and can sustain long projects with little supervision. The eighth house of research and transformation, along with the tenth house, is examined in the birth chart.",
    relationships:
      "In love, Vrischika natives seek depth and total sincerity. They commit slowly and wholeheartedly, and expect honesty and discretion from a partner. Their emotional world is rich, though it may stay unspoken until trust is firm. Jealousy or silence can strain closeness if left unaddressed. Open conversation, privacy that is respected, and shared purpose tend to turn their intensity into a durable, protective devotion.",
    compatibleWith: ["karka-rashi", "meena-rashi", "kanya-rashi"],
    consultationFocus:
      "A Vrischika Rashi consultation examines Mars by sign, house and aspect, as well as the strength of the Moon, which traditional texts regard as weaker in this sign, and the chart factors that modify it. The Moon's nakshatra among Vishakha, Anuradha and Jyeshtha, eighth-house themes, and Kuja dosha considerations in marriage matching are reviewed. Dasha periods are explained as backdrops for decisions, with no promises about specific results.",
  },
  {
    slug: "dhanu-rashi",
    sanskrit: "Dhanu",
    english: "Sagittarius",
    telugu: "ధనుస్సు",
    symbol: "The Archer",
    glyph: "♐",
    rulingPlanet: "Jupiter (Guru)",
    element: "Fire",
    modality: "Dual (Dwiswabhava)",
    nakshatras: "Moola, Purva Ashadha, Uttara Ashadha (1st pada)",
    sunTransit: "Roughly mid-December to mid-January",
    gemstone: "Yellow Sapphire (Pushkaraj)",
    metaDescription:
      "Dhanu Rashi (Sagittarius) horoscope: Jupiter-ruled Moon sign of learning and optimism. Telugu and English consultation in Visakhapatnam, Andhra Pradesh.",
    intro:
      "Dhanu Rashi, the sidereal Sagittarius, is the Moon sign of those whose feelings lean toward meaning, travel and truth-seeking. Ruled by Jupiter, the planet of wisdom and guidance, it is a fiery but benevolent sign, often described as the philosopher's archer aiming at distant targets.",
    personality: [
      "Dhanu natives carry an optimistic, expansive spirit. The Moon here inclines the mind toward big questions: ethics, religion, higher education, other cultures and the long view. They are usually frank, cheerful and generous with encouragement, and they enjoy teaching what they have learned. Jupiter lends a sense of fairness and faith in a larger order. Wide horizons matter to them, whether through journeys, books or ideals, and routine alone rarely satisfies them.",
      "Their frankness can arrive without much tact, and enthusiasm can outrun preparation. Promises are made with sincere intent but may be forgotten when a new interest appears. Dhanu natives sometimes preach when they should listen, or overlook the fine print. Growth comes through patience with details and with people who see things differently. At their best they are inspiring mentors and good-humoured companions who help others to see a situation in a wider light.",
    ],
    strengths: [
      "Optimism and open-mindedness",
      "Honesty and generosity",
      "Love of learning and teaching",
      "Adventurous, adaptable spirit",
    ],
    challenges: [
      "Blunt speech that may hurt",
      "Overcommitting or neglecting details",
      "Restlessness with routine",
    ],
    career:
      "Dhanu natives often gravitate toward teaching, law, publishing, philosophy, spiritual guidance, international trade, tourism, advisory roles and higher education. Jupiter favours professions built on knowledge and trust. They tend to do best when work has a sense of purpose and some freedom of movement. In the chart, the ninth house of dharma and higher learning, the tenth house and Jupiter's condition are considered for vocational insight.",
    relationships:
      "Dhanu natives want a partner who is also a friend and fellow explorer. They are warm, humorous and uncomplicated in affection, and they value freedom within commitment. Straight talk is their way of showing respect, though it may need softening. Shared learning, travel or a common ideal helps the bond mature. They do best with partners who are secure enough to give space and honest enough to meet their candour.",
    compatibleWith: ["mesha-rashi", "simha-rashi", "tula-rashi"],
    consultationFocus:
      "For Dhanu Rashi, the focus falls on Jupiter: its house, sign, dignity and aspects, because Jupiter also signifies guidance and fortune in a chart. The Moon's nakshatra among Moola, Purva Ashadha and Uttara Ashadha is examined, as are the ninth house, dharma-related questions, education and mentors. Jupiter dasha and antardasha periods are discussed to help plan with awareness, not to claim a definite outcome.",
  },
  {
    slug: "makara-rashi",
    sanskrit: "Makara",
    english: "Capricorn",
    telugu: "మకరం",
    symbol: "The Sea-Goat",
    glyph: "♑",
    rulingPlanet: "Saturn (Shani)",
    element: "Earth",
    modality: "Movable (Chara)",
    nakshatras: "Uttara Ashadha (2nd-4th pada), Shravana, Dhanishta (1st-2nd pada)",
    sunTransit: "Roughly mid-January to mid-February",
    gemstone: "Blue Sapphire (Neelam)",
    metaDescription:
      "Makara Rashi (Capricorn) horoscope: Saturn-ruled Moon sign of discipline and ambition. Telugu and English consultation in Visakhapatnam, Andhra Pradesh.",
    intro:
      "Makara Rashi, the sidereal Capricorn, is the Moon sign of people who treat responsibility as a form of respect. Ruled by Saturn and movable in nature, it is symbolised by the sea-goat and is associated with discipline, ambition and a steady climb toward long-term goals.",
    personality: [
      "A Makara Moon often shows early maturity. These natives take duties seriously, plan carefully and measure progress by what lasts. Saturn gives patience, a sense of structure and respect for hard work, while the earthy, movable quality keeps them organised and moving upward. They are reserved in public and may seem serious, yet beneath lies a dry sense of humour and a protective feeling for family. Time tends to be kind to them, and many grow lighter as they age.",
      "Their challenge is allowing softness. A Makara native may suppress emotion, work too long, or feel that affection must be earned through achievement. Pessimism can creep in when progress is slow, and they may judge themselves by demanding standards. Learning to rest, to delegate and to accept appreciation is valuable. Once they do, their reliability becomes a gift: they are the people who follow through, honour commitments and quietly hold institutions and families together.",
    ],
    strengths: [
      "Discipline and perseverance",
      "Practical vision and organisation",
      "Strong sense of responsibility",
      "Patience with long-term goals",
    ],
    challenges: [
      "Emotional reserve",
      "Overworking at the cost of rest",
      "Pessimism during slow periods",
    ],
    career:
      "Makara natives often rise steadily in administration, management, engineering, construction, government service, law, banking, manufacturing, mining and any field where structure matters. Saturn rewards persistence, so success may come gradually yet durably, and they can be excellent institution builders. In the horoscope, the tenth house is especially relevant, since Makara corresponds to the natural tenth sign, along with the strength of Saturn and the Moon.",
    relationships:
      "Makara natives commit with sobriety and treat marriage and family as lifelong responsibilities. They may seem reserved at first, expressing love through reliability, provision and loyalty rather than effusive words. Partners may sometimes wish for more openness. A little deliberate warmth, shared downtime and honest conversation about feelings can balance their seriousness. Over the years their affection usually deepens, and they become steadfast, protective companions.",
    compatibleWith: ["vrishabha-rashi", "kanya-rashi", "meena-rashi"],
    consultationFocus:
      "A Makara Rashi consultation looks at Saturn's house, sign, strength and aspects, and at the Moon's nakshatra among Uttara Ashadha, Shravana and Dhanishta. The tenth house, career milestones and Saturn's dasha and transits, including the phases known as Sade Sati and Ashtama Shani, are commonly explained. These are framed as periods calling for patience and planning, and the discussion aims to be practical and reassuring.",
  },
  {
    slug: "kumbha-rashi",
    sanskrit: "Kumbha",
    english: "Aquarius",
    telugu: "కుంభం",
    symbol: "The Water-Bearer",
    glyph: "♒",
    rulingPlanet: "Saturn (Shani)",
    element: "Air",
    modality: "Fixed (Sthira)",
    nakshatras: "Dhanishta (3rd-4th pada), Shatabhisha, Purva Bhadrapada (1st-3rd pada)",
    sunTransit: "Roughly mid-February to mid-March",
    gemstone: "Blue Sapphire (Neelam)",
    metaDescription:
      "Kumbha Rashi (Aquarius) horoscope: Saturn-ruled Moon sign of independent thought. Telugu and English consultation in Visakhapatnam, Andhra Pradesh.",
    intro:
      "Kumbha Rashi, the sidereal Aquarius, is the Moon sign of those who think independently and care about the wider community. Ruled by Saturn and fixed in nature, it is symbolised by the water-bearer pouring out knowledge for everyone, blending detachment with humanitarian feeling.",
    personality: [
      "Natives with the Moon in Kumbha tend to be original thinkers. They question accepted habits, enjoy unusual ideas and are comfortable standing slightly apart from the crowd. Saturn gives them a methodical streak, so their innovations are often grounded rather than fanciful. They value friendship deeply, though they prefer it based on shared interests and mutual freedom. Technology, science and social causes often capture their imagination, and they like to see systems work better for everyone.",
      "Their detachment can look like coolness. A Kumbha native may analyse feelings instead of expressing them, or hold firmly to an opinion once formed, since the sign is fixed. Others may find them unpredictable, or aloof at emotional moments. Letting themselves be personally warm, not only principled, is a useful lesson. When they do, their loyalty to friends and ideals shines, and they become dependable allies who work patiently for the common good.",
    ],
    strengths: [
      "Independent, inventive thinking",
      "Humanitarian outlook",
      "Loyal, principled friendship",
      "Comfort with unconventional ideas",
    ],
    challenges: [
      "Emotional detachment",
      "Stubbornness about opinions",
      "Feeling misunderstood by others",
    ],
    career:
      "Kumbha natives often find fulfilment in science, technology, engineering, research, social work, public policy, community organisations, astrology and other knowledge-based fields. Saturn lends discipline for long projects, while the sign's group orientation suits networks, associations and collaborative ventures. They tend to value meaningful contribution above status. The eleventh house of gains and networks, and the tenth house, are studied together with Saturn's placement.",
    relationships:
      "Kumbha natives want friendship at the heart of love. They respect a partner's independence and expect the same in return, and they are drawn to shared ideals, conversation and joint projects. Emotional expression may take them time, and they can seem reserved at tender moments. A partner who values mind and freedom, and who gently invites openness, will find the native a faithful, thoughtful and surprisingly steady companion.",
    compatibleWith: ["mithuna-rashi", "tula-rashi", "mesha-rashi"],
    consultationFocus:
      "In Kumbha Rashi readings the astrologer examines Saturn's condition, the Moon's nakshatra among Dhanishta, Shatabhisha and Purva Bhadrapada, and Rahu's placement, since Rahu is traditionally linked with Shatabhisha. Eleventh-house themes of friendships, goals and income sources are reviewed, along with Saturn dasha and transit phases, including Sade Sati. The purpose is to give a clear, balanced view of tendencies, not to forecast fixed events.",
  },
  {
    slug: "meena-rashi",
    sanskrit: "Meena",
    english: "Pisces",
    telugu: "మీనం",
    symbol: "The Fish",
    glyph: "♓",
    rulingPlanet: "Jupiter (Guru)",
    element: "Water",
    modality: "Dual (Dwiswabhava)",
    nakshatras: "Purva Bhadrapada (4th pada), Uttara Bhadrapada, Revati",
    sunTransit: "Roughly mid-March to mid-April",
    gemstone: "Yellow Sapphire (Pushkaraj)",
    metaDescription:
      "Meena Rashi (Pisces) horoscope: Jupiter-ruled Moon sign of compassion and intuition. Telugu and English consultation in Visakhapatnam, Andhra Pradesh.",
    intro:
      "Meena Rashi, the sidereal Pisces, is the Moon sign of people whose inner world is vast, imaginative and compassionate. Ruled by Jupiter and dual in nature, it is symbolised by two fish and is traditionally associated with spirituality, intuition and the softening of boundaries between self and others.",
    personality: [
      "Natives with the Moon in Meena are gentle and perceptive. They absorb the feelings of those around them and respond with sympathy, often before a word is said. Imagination runs strong, showing up in music, poetry, devotion, dreams and creative work. Jupiter adds a benevolent, faith-oriented outlook and an instinct for helping. Many feel a pull toward the inner life, whether through prayer, meditation or quiet solitude, and they recharge best near water, nature or silence.",
      "Sensitivity brings questions of boundaries. A Meena native may give too freely, avoid unpleasant facts or drift between plans without a clear anchor. Idealism can make disappointment sharper. Practical routines, trusted advisers and clear commitments help turn their gifts into something sustained. When they find that structure, their compassion becomes a real strength, and they are often the ones who comfort others, forgive generously and see possibilities no one else has noticed.",
    ],
    strengths: [
      "Compassion and empathy",
      "Rich imagination and creativity",
      "Spiritual and intuitive depth",
      "Forgiving, generous nature",
    ],
    challenges: [
      "Difficulty setting boundaries",
      "Avoiding practical realities",
      "Tendency to absorb others' moods",
    ],
    career:
      "Meena natives often flourish in creative, caring and contemplative work: music, art, film, writing, counselling, teaching, charity and welfare organisations, spiritual guidance, shipping and marine fields, hospitality and research. Jupiter supports advisory and educational roles. They do well when work carries meaning and room for imagination, supported by a practical partner or system. The twelfth and tenth houses, plus Jupiter's strength, are studied in the chart.",
    relationships:
      "Meena natives love with tenderness, selflessness and a touch of romance. They sense a partner's needs intuitively and are quick to forgive. Because they give so much, they benefit from partners who reciprocate and who help ground practical matters. Clear communication about boundaries is important so that kindness does not become self-neglect. Shared spiritual practice, music or quiet time together often deepens the connection.",
    compatibleWith: ["karka-rashi", "vrischika-rashi", "makara-rashi"],
    consultationFocus:
      "A Meena Rashi consultation reviews Jupiter's house, sign and aspects, the Moon's nakshatra among Purva Bhadrapada, Uttara Bhadrapada and Revati, and twelfth-house themes such as foreign connections, solitude and spiritual practice. The astrologer also studies the dasha periods of Jupiter, Saturn and Mercury, which rule these three nakshatras. All of it is presented as insight for reflection, not as assurance of particular events.",
  },
];

export function getRashi(slug: string): Rashi | undefined {
  return RASHIS.find((r) => r.slug === slug);
}
