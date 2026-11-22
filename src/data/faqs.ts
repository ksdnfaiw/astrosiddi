export interface FaqItem {
  question: string;
  answer: string;
}

/** FAQs shown on the home page. The same array feeds the visible section and the FAQPage JSON-LD. */
export const HOME_FAQS: FaqItem[] = [
  {
    question: "Who is the best astrologer in Visakhapatnam for horoscope reading?",
    answer:
      "Astro Siddhi (Sri Raghavendra Jyothishalayam) in MVP Colony, Visakhapatnam is led by Sri Raghavendra Siddhanti Garu, who has practised Vedic astrology for over 25 years and is rated 4.9 on Google across 414+ reviews. Consultations are available in Telugu and English, in person or online.",
  },
  {
    question: "Can I consult an astrologer online if I do not live in Visakhapatnam?",
    answer:
      "Yes. Consultations are held over video call, phone or WhatsApp, so you can consult from anywhere in India or abroad. The reading uses the same birth-chart analysis as an in-person session.",
  },
  {
    question: "What details do I need to share for a horoscope reading?",
    answer:
      "Your exact date of birth, time of birth and place of birth. An accurate birth time matters because the ascendant (lagna) and house positions change every few minutes. If you are unsure of the time, mention it and the astrologer will advise how to proceed.",
  },
  {
    question: "Which services does Astro Siddhi offer?",
    answer:
      "Vedic horoscope reading, Kundali matching for marriage, career and business astrology, love and relationship guidance, Vastu Shastra consultation for homes and offices, and dosha parihara (remedies) for planetary afflictions.",
  },
  {
    question: "In which languages are consultations conducted?",
    answer:
      "Telugu and English. You can choose your preferred language when you book, and the reading is explained in that language.",
  },
  {
    question: "How do I book a consultation and what are the timings?",
    answer:
      "Use the contact form or message us on WhatsApp at +91 96524 12221. The office at MVP Double Road, MVP Colony, Visakhapatnam is open Monday to Saturday, 9:00 AM to 8:00 PM, and Sundays by advance appointment.",
  },
];

export const SERVICES_FAQS: FaqItem[] = [
  {
    question: "What astrology services are available at Astro Siddhi?",
    answer:
      "Vedic horoscope reading, Kundali matching, career and business astrology, love and relationship guidance, Vastu Shastra consultation, and dosha parihara (remedies and rituals).",
  },
  {
    question: "Are the services available online?",
    answer:
      "Yes. Horoscope readings, Kundali matching, career and relationship consultations are all available by video call, phone or WhatsApp. Vastu consultations can be done on-site in Visakhapatnam or online from your floor plan.",
  },
  {
    question: "Do I need to bring or send my birth chart?",
    answer:
      "No. Share your date, time and place of birth and the chart is prepared from that. If you already have a Kundali, you are welcome to share it too.",
  },
  {
    question: "What kind of remedies do you suggest?",
    answer:
      "Depending on your chart, remedies can include mantras, rituals, gemstone guidance or Vastu corrections. The aim is for remedies to be practical and accessible in everyday life.",
  },
  {
    question: "How do I book a consultation?",
    answer:
      "Use the contact form or message us on WhatsApp at +91 96524 12221. You will be asked for your preferred service, language (Telugu or English) and birth details.",
  },
];

export const KUNDALI_FAQS: FaqItem[] = [
  {
    question: "What is Kundali matching?",
    answer:
      "Kundali (horoscope) matching compares the birth charts of two prospective partners before marriage. It uses the Ashtakoot Guna Milan system, which scores eight areas of compatibility out of 36 points, and also examines doshas such as Manglik dosha and the strength of each chart.",
  },
  {
    question: "Is online Kundali matching as accurate as in-person?",
    answer:
      "Yes. The calculations are identical because they depend only on the birth details, and the analysis is explained in full over a video or phone consultation.",
  },
  {
    question: "What details are required for Kundali matching?",
    answer:
      "The exact date, time and place of birth of both partners. If a birth chart already exists, share it as well.",
  },
  {
    question: "What is a good Guna Milan score?",
    answer:
      "Traditionally a score of 18 out of 36 is regarded as the minimum for compatibility, and higher scores indicate stronger matching. The score alone is not decisive - the astrologer also reviews dosha, planetary strength and dasha periods before advising.",
  },
  {
    question: "Does Manglik dosha mean the marriage cannot go ahead?",
    answer:
      "No. Manglik dosha depends on Mars' placement and has well-established exceptions and cancellations, and it is often reduced when both partners have it. A full chart review is needed before drawing any conclusion.",
  },
];

export const CAREER_FAQS: FaqItem[] = [
  {
    question: "Can astrology predict when I will get a job?",
    answer:
      "By analysing your Mahadasha and Antardasha periods and planetary transits, an astrologer can identify phases that are traditionally favourable for employment, promotion or a job change. It indicates timing and tendencies - it does not guarantee outcomes.",
  },
  {
    question: "Do you provide consultations in Telugu?",
    answer:
      "Yes. Career astrology consultations are offered in both Telugu and English.",
  },
  {
    question: "Is career astrology useful for business owners?",
    answer:
      "Yes. The tenth house, the second and eleventh houses and the running dasha are examined to understand business timing, partnerships and growth periods.",
  },
];

export const VASTU_FAQS: FaqItem[] = [
  {
    question: "Do I have to break walls for Vastu correction?",
    answer:
      "No. Most corrections are non-structural - changes to placement, colour, lighting and elemental balance - so demolition is not required.",
  },
  {
    question: "Do you visit sites in Visakhapatnam?",
    answer:
      "Yes. We offer in-person site visits across Visakhapatnam and online consultations based on your floor plan.",
  },
  {
    question: "Can Vastu be checked for a flat or apartment?",
    answer:
      "Yes. Apartments are assessed by the direction of the main entrance, the placement of the kitchen, bedrooms and pooja space, and practical remedies are suggested within the existing layout.",
  },
];
