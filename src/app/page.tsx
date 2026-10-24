"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useTranslation } from "@/contexts/useTranslation";
import { Testimonials } from "@/components/sections/Testimonials";
import { GoogleReviews } from "@/components/sections/GoogleReviews";
import { MapsSection } from "@/components/sections/MapsSection";
import { HomeSchema, FaqItem } from "@/components/ui/SchemaMarkup";
import { motion } from "framer-motion";
import {
  Star,
  Award,
  Globe,
  Languages,
  ArrowRight,
  Sparkles,
  ChevronRight,
  CheckCircle2,
  ChevronDown,
  Heart,
  Home as HomeIcon,
  Briefcase,
} from "lucide-react";

const HOMEPAGE_FAQS: FaqItem[] = [
  {
    question: "Who is the best astrologer in Visakhapatnam for horoscope reading and Kundali matching?",
    answer:
      "Sri Raghavendra Siddhanti garu, founder of Sri Raghavendra Jyothishalayam (Astro Siddhi), is widely regarded as one of the best astrologers in Visakhapatnam. With over 25 years of authentic Vedic astrology practice in MVP Colony, he specializes in accurate Janma Kundali analysis, Telugu marriage compatibility (Jathaka Poritham), and coastal Vastu Shastra.",
  },
  {
    question: "How does a consultation work at Astro Siddhi in MVP Colony, Visakhapatnam?",
    answer:
      "Consultations begin by casting your Vedic birth chart using your exact date, time, and city of birth. Sri Raghavendra Siddhanti garu analyzes your Mahadasha, Antardasha, and planetary transits, providing clear answers to career, marriage, or financial queries along with practical, non-destructive Vedic remedies. Sessions are available in Telugu and English.",
  },
  {
    question: "Can I get Vastu Shastra consultation for high-rise flats and apartments without demolition?",
    answer:
      "Yes. Living in modern apartments across Visakhapatnam (such as MVP Colony, Madhurawada, or Beach Road) rarely permits structural modifications. We provide non-demolition Vastu remedies using sacred geometry, color balancing, and elemental alignments to harmonize energy flows (Prana) without breaking walls.",
  },
  {
    question: "Are online consultations available for clients outside Visakhapatnam?",
    answer:
      "Yes, we conduct remote video and phone consultations via WhatsApp for clients across Hyderabad, Bangalore, Chennai, the United States, the UK, and Australia. The chart accuracy and depth of guidance are identical to in-person consultations.",
  },
];

export default function Home() {
  const { t } = useTranslation();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="flex flex-col min-h-screen bg-ivory">
      {/* Home JSON-LD Schema (WebSite, Person, LocalBusiness, FAQPage) */}
      <HomeSchema faqs={HOMEPAGE_FAQS} />

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-40 overflow-hidden bg-midnight text-ivory flex items-center min-h-[90vh]">
        {/* Background elements */}
        <div className="absolute inset-0 z-0 bg-midnight overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gold/10 via-midnight to-midnight opacity-80"></div>
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#F5A623_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>
          <div className="absolute -bottom-1/4 -left-1/4 w-[800px] h-[800px] bg-gold/10 blur-[150px] rounded-full pointer-events-none"></div>
          <div className="absolute -top-1/4 -right-1/4 w-[600px] h-[600px] bg-saffron/5 blur-[120px] rounded-full pointer-events-none"></div>

          {/* Abstract Geometric Circles */}
          <div
            className="animate-[spin_120s_linear_infinite] absolute top-[10%] right-0 translate-x-1/4 w-[620px] h-[620px] sm:w-[800px] sm:h-[800px] pointer-events-none opacity-[0.15] flex items-center justify-center"
          >
            <svg className="w-full h-full" viewBox="-100 -100 200 200" fill="none">
              <g stroke="currentColor" className="text-gold" strokeWidth="0.7">
                <circle r="90"></circle>
                <circle r="70"></circle>
                <circle r="50"></circle>
                <circle r="30"></circle>
                <line x1="0" y1="0" x2="90" y2="0"></line>
                <line x1="0" y1="0" x2="-90" y2="0"></line>
                <line x1="0" y1="0" x2="0" y2="90"></line>
                <line x1="0" y1="0" x2="0" y2="-90"></line>
              </g>
            </svg>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full mt-10 lg:mt-0">
          <div className="max-w-4xl mx-auto text-center">
            <div>
              <div className="flex justify-center mb-8">
                <span className="inline-flex items-center gap-2 py-1.5 px-5 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase backdrop-blur-sm">
                  <Sparkles className="w-4 h-4" />
                  {t("hero.badge")}
                </span>
              </div>

              <h1 className="font-cinzel text-4xl sm:text-5xl md:text-7xl lg:text-[4.5rem] font-bold mb-8 leading-[1.1] tracking-tight drop-shadow-lg text-transparent bg-clip-text bg-gradient-to-b from-ivory to-ivory/70 whitespace-pre-line">
                Best Astrologer in Visakhapatnam (Vizag)
              </h1>

              <p className="max-w-3xl mx-auto text-lg sm:text-xl md:text-2xl text-ivory/85 mb-12 leading-relaxed font-cormorant font-medium">
                Welcome to <strong>Astro Siddhi</strong> (Sri Raghavendra Jyothishalayam) in MVP Colony, Visakhapatnam. Guided by Sri Raghavendra Siddhanti garu with 25+ years of Vedic astrology, Kundali matching, and Vastu wisdom in Telugu and English.
              </p>

              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mb-20">
                <Link
                  href="/contact"
                  className="group relative px-8 py-4 bg-gold hover:bg-saffron text-midnight font-bold rounded-full shadow-[0_0_40px_rgba(245,166,35,0.3)] transition-all duration-300 text-sm sm:text-base uppercase tracking-wider w-full sm:w-auto text-center flex items-center justify-center gap-2 overflow-hidden"
                >
                  <span className="relative z-10">{t("hero.cta.primary")}</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                </Link>
                <Link
                  href="/services"
                  className="px-8 py-4 bg-transparent border border-ivory/30 text-ivory hover:bg-ivory/10 font-bold rounded-full transition-all duration-300 text-sm sm:text-base uppercase tracking-wider w-full sm:w-auto text-center backdrop-blur-sm"
                >
                  {t("hero.cta.secondary")}
                </Link>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-ivory/10">
                {[
                  { icon: Star, text: "414+ 5-Star Reviews" },
                  { icon: Award, text: "25+ Years Experience" },
                  { icon: Globe, text: "Online & In-Person" },
                  { icon: Languages, text: "Telugu & English" },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + idx * 0.1 }}
                    className="flex flex-col items-center gap-3"
                  >
                    <item.icon className="w-6 h-6 text-gold mb-1 opacity-80" />
                    <span className="text-xs sm:text-sm font-medium text-ivory/70 uppercase tracking-widest">
                      {item.text}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="bg-gradient-to-r from-gold via-saffron to-gold text-midnight py-4 overflow-hidden whitespace-nowrap shadow-inner relative z-20">
        <div className="animate-marquee inline-flex items-center gap-8 font-semibold tracking-[0.2em] uppercase text-sm">
          {[...Array(6)].map((_, i) => (
            <React.Fragment key={i}>
              <span>✦ Vedic Astrology ✦ Kundali Matching ✦ Horoscope Reading ✦ Vastu Shastra ✦ Numerology ✦ Dosha Parihara ✦ Career Astrology ✦ Visakhapatnam ✦</span>
              <Star className="w-4 h-4 fill-midnight/50 text-midnight/50" />
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* ABOUT / FOUNDER SECTION */}
      <section className="py-32 bg-ivory text-midnight relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-px bg-gold"></div>
                <span className="text-saffron font-bold tracking-[0.2em] uppercase text-sm">
                  {t("about.teaser.label")}
                </span>
              </div>
              <h2 className="font-cinzel text-4xl sm:text-5xl font-bold mb-6 leading-tight text-midnight">
                Sri Raghavendra Jyothishalayam — 25 Years of Vedic Excellence
              </h2>
              <p className="text-lg leading-relaxed mb-6 text-midnight/80 font-cormorant">
                Rooted in authentic South Indian Vedic traditions, <strong>Astro Siddhi</strong> is a veteran-led practice founded by <strong>Sri Raghavendra Siddhanti garu</strong>. Situated in Sector 10, MVP Colony, Visakhapatnam, our sanctuary has provided dependable astrological guidance for over a quarter century to families across Andhra Pradesh and Telangana.
              </p>
              <p className="text-lg leading-relaxed mb-8 text-midnight/80 font-cormorant">
                Whether deciphering birth charts (Janma Kundali), navigating complex Kuja Dosha factors in marriage matching, or providing non-demolition Vastu remedies for coastal high-rises, our focus is empowering clarity rather than fatalistic fear.
              </p>

              <div className="space-y-4 mb-10">
                {[
                  "Personalized Horoscope Analysis & Dasha Timeline",
                  <span key="telugu-matching">Traditional Telugu Kundali Matching (<span lang="te">జాతక పొంతన</span>)</span>,
                  "Practical Vastu Shastra without Structural Demolition",
                  "Career, Business & Financial Muhurtham Selection",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gold shrink-0" />
                    <span className="font-medium tracking-wide text-midnight/85 text-sm sm:text-base">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <Link
                href="/about"
                className="group inline-flex items-center gap-3 text-midnight font-bold border-b-2 border-gold pb-1 hover:text-saffron hover:border-saffron transition-all text-sm uppercase tracking-widest"
              >
                Learn More About Sri Raghavendra Siddhanti
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gold/20 rounded-2xl -rotate-3 scale-105 transition-transform duration-700 hover:rotate-0"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gold/10 bg-midnight">
                <img
                  src="/English%20design_page-0001.jpg"
                  alt="Sri Raghavendra Siddhanti Garu - Best Astrologer in Visakhapatnam"
                  className="w-full object-contain mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/20 to-transparent opacity-80"></div>
                <div className="absolute bottom-0 left-0 w-full p-8 sm:p-10 text-ivory">
                  <div className="flex items-end gap-6">
                    <div className="bg-gold text-midnight p-4 rounded-xl shadow-lg">
                      <p className="font-cinzel text-3xl sm:text-4xl font-bold leading-none">25+</p>
                    </div>
                    <div className="pb-2">
                      <p className="text-sm sm:text-base font-medium tracking-widest uppercase text-ivory/90">
                        Years of Vedic Wisdom in Vizag
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CORE SERVICES OVERVIEW */}
      <section className="py-28 bg-deepPurple text-ivory relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center text-center mb-16">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-px bg-gold/50"></div>
              <span className="text-gold font-bold tracking-[0.2em] uppercase text-sm">
                Authentic Offerings
              </span>
              <div className="w-8 h-px bg-gold/50"></div>
            </div>
            <h2 className="font-cinzel text-3xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-ivory via-gold to-ivory">
              Specialized Vedic Astrology Services
            </h2>
            <p className="font-cormorant text-lg sm:text-xl text-ivory/80 max-w-2xl mt-4">
              Explore our core areas of expertise, conducted in-person at MVP Colony, Visakhapatnam or through dedicated online consultations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-midnight/70 backdrop-blur-md border border-gold/20 p-8 rounded-2xl flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-full bg-gold/10 text-gold flex items-center justify-center mb-6">
                  <Heart className="w-7 h-7" />
                </div>
                <h3 className="font-cinzel text-2xl font-bold text-gold mb-3">Kundali Matching</h3>
                <p className="font-cormorant text-lg text-ivory/80 leading-relaxed mb-6">
                  Traditional 36 Guna Milan, Kuja Dosha (Manglik) analysis, and Nadi compatibility for Telugu marriages. We review both horoscopes holistically for lifelong marital peace.
                </p>
              </div>
              <Link
                href="/services/kundali-matching"
                className="inline-flex items-center gap-2 text-gold hover:text-saffron font-bold text-xs uppercase tracking-widest"
              >
                Explore Kundali Matching <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="bg-midnight/70 backdrop-blur-md border border-gold/20 p-8 rounded-2xl flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-full bg-gold/10 text-gold flex items-center justify-center mb-6">
                  <HomeIcon className="w-7 h-7" />
                </div>
                <h3 className="font-cinzel text-2xl font-bold text-gold mb-3">Vastu Shastra Consultant</h3>
                <p className="font-cormorant text-lg text-ivory/80 leading-relaxed mb-6">
                  Expert spatial balancing for coastal flats and independent houses in Visakhapatnam. Non-demolition remedies designed specifically for modern high-rise apartments.
                </p>
              </div>
              <Link
                href="/services/vastu-visakhapatnam"
                className="inline-flex items-center gap-2 text-gold hover:text-saffron font-bold text-xs uppercase tracking-widest"
              >
                Explore Vastu Services <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="bg-midnight/70 backdrop-blur-md border border-gold/20 p-8 rounded-2xl flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-full bg-gold/10 text-gold flex items-center justify-center mb-6">
                  <Briefcase className="w-7 h-7" />
                </div>
                <h3 className="font-cinzel text-2xl font-bold text-gold mb-3">Career &amp; Business</h3>
                <p className="font-cormorant text-lg text-ivory/80 leading-relaxed mb-6">
                  Analyze your 10th house (Karma Bhava) and dasha periods to identify auspicious windows for job transitions, promotions, business partnerships, and financial investments.
                </p>
              </div>
              <Link
                href="/services/career-astrology"
                className="inline-flex items-center gap-2 text-gold hover:text-saffron font-bold text-xs uppercase tracking-widest"
              >
                Explore Career Astrology <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/services"
              className="inline-flex items-center justify-center px-10 py-4 bg-gold hover:bg-saffron text-midnight font-bold rounded-full transition-all text-xs uppercase tracking-widest shadow-xl"
            >
              Browse All Astrology Services <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* HOW A CONSULTATION WORKS */}
      <section className="py-28 bg-ivory text-midnight">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-gold font-bold tracking-[0.2em] uppercase text-xs">Simple &amp; Authentic Process</span>
            <h2 className="font-cinzel text-3xl sm:text-5xl font-bold mt-2">
              How Your Astrology Consultation Works
            </h2>
            <p className="font-cormorant text-lg text-midnight/70 max-w-2xl mx-auto mt-3">
              We make Vedic astrology transparent, confidential, and directly actionable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="p-6 rounded-2xl bg-white border border-gold/15 shadow-sm text-center">
              <div className="w-12 h-12 rounded-full bg-gold/15 text-gold font-cinzel font-bold text-xl flex items-center justify-center mx-auto mb-4">
                1
              </div>
              <h3 className="font-cinzel font-bold text-lg mb-2">Book Your Slot</h3>
              <p className="font-cormorant text-midnight/80 text-base">
                Message us on WhatsApp or fill out our online form to choose an in-person or video session.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-gold/15 shadow-sm text-center">
              <div className="w-12 h-12 rounded-full bg-gold/15 text-gold font-cinzel font-bold text-xl flex items-center justify-center mx-auto mb-4">
                2
              </div>
              <h3 className="font-cinzel font-bold text-lg mb-2">Share Birth Data</h3>
              <p className="font-cormorant text-midnight/80 text-base">
                Provide your exact birth date, birth time, and birth city for precise mathematical chart casting.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-gold/15 shadow-sm text-center">
              <div className="w-12 h-12 rounded-full bg-gold/15 text-gold font-cinzel font-bold text-xl flex items-center justify-center mx-auto mb-4">
                3
              </div>
              <h3 className="font-cinzel font-bold text-lg mb-2">Detailed Reading</h3>
              <p className="font-cormorant text-midnight/80 text-base">
                Engage in an unrushed conversation with Sri Raghavendra Siddhanti garu in Telugu or English.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-gold/15 shadow-sm text-center">
              <div className="w-12 h-12 rounded-full bg-gold/15 text-gold font-cinzel font-bold text-xl flex items-center justify-center mx-auto mb-4">
                4
              </div>
              <h3 className="font-cinzel font-bold text-lg mb-2">Practical Remedies</h3>
              <p className="font-cormorant text-midnight/80 text-base">
                Receive practical, non-destructive remedies, gemstone guidance, or mantra practices for growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS (HOMEPAGE FAQ ACCORDION) */}
      <section className="py-24 bg-white border-t border-gold/15">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-gold font-bold tracking-[0.2em] uppercase text-xs">Got Questions?</span>
            <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-midnight mt-2">
              Frequently Asked Questions
            </h2>
            <p className="font-cormorant text-lg text-midnight/70 mt-2">
              Common questions about consultations at Sri Raghavendra Jyothishalayam in Visakhapatnam.
            </p>
          </div>

          <div className="space-y-4">
            {HOMEPAGE_FAQS.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl border border-gold/20 overflow-hidden bg-ivory/50 transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-cinzel font-bold text-base sm:text-lg text-midnight hover:text-gold transition-colors"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-gold shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 pt-2 text-midnight/80 font-cormorant text-lg leading-relaxed border-t border-gold/10">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* GOOGLE REVIEWS SECTION (VERIFIED 4.9 RATING) */}
      <GoogleReviews />

      {/* TESTIMONIALS */}
      <Testimonials />

      {/* MAPS & LOCAL MVP COLONY SECTION */}
      <MapsSection />
    </div>
  );
}
