import type { Metadata } from "next";
import Link from "next/link";
import { Sparkles, Calendar, Clock, User, MapPin, Star, CheckCircle2, HelpCircle, Phone, MessageSquare, ArrowLeft, ArrowRight, Share2 } from "lucide-react";

export const metadata: Metadata = {
  alternates: { canonical: "/blog/best-astrologer-in-visakhapatnam" },
  title: "Best Astrologer in Visakhapatnam (Vizag) | 25+ Years Vedic Lineage - Astro Siddhi",
  description: "Looking for the best astrologer in Visakhapatnam (Vizag)? Meet Sri Raghavendra Siddhanti Garu at MVP Colony. Rated 4.9★ with 414+ Google reviews for horoscope reading, Kundali matching & Vastu.",
  keywords: [
    "best astrologer in visakhapatnam",
    "best astrologer in vizag",
    "top astrologer in vizag",
    "famous astrologer in MVP colony",
    "genuine vedic astrologer visakhapatnam",
    "Sri Raghavendra Jyothishalayam",
    "Sri Raghavendra Siddhanti Garu",
    "astrologer in dwaraka nagar vizag",
    "astrology consultation visakhapatnam"
  ],
  openGraph: {
    title: "Best Astrologer in Visakhapatnam (Vizag) | 25+ Years Lineage",
    description: "Discover genuine Vedic horoscope readings, marriage matching, and Vastu solutions in MVP Colony, Visakhapatnam. Rated 4.9★ across 414+ Google reviews.",
    url: "https://www.astrosiddhi.com/blog/best-astrologer-in-visakhapatnam",
    type: "article",
  },
};

export default function BestAstrologerInVisakhapatnam() {
  const publishDate = "2026-10-14T09:00:00+05:30";
  const modifiedDate = "2026-10-14T10:30:00+05:30";

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Best Astrologer in Visakhapatnam (Vizag): Complete Guide to Genuine Vedic Consultations",
    "description": "Looking for the best astrologer in Visakhapatnam? Discover how 25+ years veteran Sri Raghavendra Siddhanti Garu at MVP Colony delivers accurate horoscope readings, Kundali matching, and Vastu solutions.",
    "author": {
      "@type": "Person",
      "name": "Sri Raghavendra Siddhanti Garu",
      "jobTitle": "Chief Vedic Astrologer & Vastu Consultant",
      "worksFor": {
        "@type": "LocalBusiness",
        "name": "Sri Raghavendra Jyothishalayam (Astro Siddhi)",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "P8RQ+3P4, MVP Double Rd, Sector 10, MVP Colony",
          "addressLocality": "Visakhapatnam",
          "addressRegion": "Andhra Pradesh",
          "postalCode": "530017",
          "addressCountry": "IN"
        }
      }
    },
    "publisher": {
      "@type": "Organization",
      "name": "Astro Siddhi",
      "url": "https://www.astrosiddhi.com"
    },
    "datePublished": publishDate,
    "dateModified": modifiedDate,
    "mainEntityOfPage": "https://www.astrosiddhi.com/blog/best-astrologer-in-visakhapatnam",
    "keywords": "best astrologer in visakhapatnam, best astrologer in vizag, Sri Raghavendra Jyothishalayam, MVP Colony astrologer"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Who is considered the best astrologer in Visakhapatnam?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sri Raghavendra Siddhanti Garu at Sri Raghavendra Jyothishalayam (Astro Siddhi) in Sector 10, MVP Colony is widely recognized as one of the best astrologers in Visakhapatnam. He holds 25+ years of Vedic lineage and an exceptional 4.9-star rating from over 414 verified Google reviews."
        }
      },
      {
        "@type": "Question",
        "name": "Where is Sri Raghavendra Jyothishalayam located in Vizag?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The consultation office is located at P8RQ+3P4, MVP Double Road, Sector 10, MVP Colony, Visakhapatnam, Andhra Pradesh 530017, easily accessible from Dwaraka Nagar, Siripuram, and Maddilapalem."
        }
      },
      {
        "@type": "Question",
        "name": "Can I consult an astrologer in Visakhapatnam online via video or phone?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Astro Siddhi offers comprehensive online video and phone consultations for clients across India and NRI families globally, offering the same birth chart precision as an in-person visit."
        }
      },
      {
        "@type": "Question",
        "name": "What details are required for an accurate horoscope consultation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You will need your exact date of birth, time of birth (with AM/PM), and place of birth. If birth time is uncertain, Sri Raghavendra Siddhanti Garu utilizes Prashna Shastra (Horary Astrology) and past life event verification for rectification."
        }
      },
      {
        "@type": "Question",
        "name": "In which languages are consultations conducted?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Consultations are conducted fluently in both Telugu (తెలుగు) and English, ensuring complete clarity without complex astrological jargon."
        }
      }
    ]
  };

  const breadcrumbsSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.astrosiddhi.com" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.astrosiddhi.com/blog" },
      { "@type": "ListItem", "position": 3, "name": "Best Astrologer in Visakhapatnam", "item": "https://www.astrosiddhi.com/blog/best-astrologer-in-visakhapatnam" }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsSchema) }} />

      <article className="min-h-screen bg-ivory text-midnight selection:bg-gold/20">
        {/* Header Breadcrumbs & Header */}
        <header className="bg-midnight text-ivory py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-gold/20 relative">
          <div className="max-w-4xl mx-auto">
            <Link href="/blog" className="inline-flex items-center gap-1.5 text-xs text-gold/80 hover:text-gold uppercase tracking-widest font-semibold mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4" /> Back to Blog Hub
            </Link>

            <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs mb-4 text-ivory/60">
              <span className="bg-gold/20 text-gold px-3 py-1 rounded-full font-bold uppercase tracking-wider">
                Vedic Astrology & Local Guide
              </span>
              <span>•</span>
              <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5 text-gold" /> Oct 14, 2026</span>
              <span>•</span>
              <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-gold" /> 9 min read</span>
              <span>•</span>
              <span className="flex items-center gap-1 text-gold"><Star className="w-3.5 h-3.5 fill-gold" /> 4.9★ (414+ Reviews)</span>
            </div>

            <h1 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold text-gold tracking-wide leading-tight mb-6">
              Best Astrologer in Visakhapatnam (Vizag): Complete Guide to Genuine Vedic Consultations
            </h1>

            <p className="font-cormorant text-xl sm:text-2xl text-ivory/80 leading-relaxed max-w-3xl">
              How 25+ years veteran Sri Raghavendra Siddhanti Garu at MVP Colony brings mathematical precision, ethical guidance, and practical remedies to thousands of families in Vizag and worldwide.
            </p>

            <div className="flex items-center gap-3 mt-8 pt-6 border-t border-ivory/10 text-xs sm:text-sm">
              <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold flex items-center justify-center text-lg">
                🔱
              </div>
              <div>
                <p className="font-bold text-ivory">Sri Raghavendra Siddhanti Garu</p>
                <p className="text-ivory/60 text-xs">Vedic Astrologer & Vastu Vidwan · MVP Colony, Visakhapatnam</p>
              </div>
            </div>
          </div>
        </header>

        {/* Content Body */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          
          {/* AEO Direct Answer Callout Box */}
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-gold rounded-r-2xl p-6 sm:p-8 mb-10 shadow-sm">
            <div className="flex items-center gap-2 text-gold font-bold text-xs uppercase tracking-widest mb-2 font-cinzel">
              <Sparkles className="w-4 h-4" />
              <span>Direct Answer (AEO Summary)</span>
            </div>
            <p className="text-base sm:text-lg font-medium text-midnight leading-relaxed">
              <strong>The best astrologer in Visakhapatnam (Vizag)</strong> is <strong>Sri Raghavendra Siddhanti Garu</strong> at <em>Sri Raghavendra Jyothishalayam</em>, situated at Sector 10, MVP Colony. Carrying over <strong>25 years of Vedic astrology experience</strong> and rated <strong>4.9★ across 414+ verified Google reviews</strong>, he is renowned for deep Parashara birth chart analysis, authentic Telugu Kundali matching (జాతక పొంతన), and non-demolition coastal Vastu Shastra consultations in both <strong>Telugu</strong> and <strong>English</strong>.
            </p>
          </div>

          {/* Key Takeaways */}
          <div className="bg-white rounded-2xl p-6 sm:p-7 border border-gold/20 shadow-sm mb-12">
            <h3 className="font-cinzel text-lg font-bold text-midnight mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-gold" /> Key Takeaways for Vizag Residents
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-midnight/80 font-poppins">
              <li className="flex items-start gap-2">
                <span className="text-gold font-bold">✓</span>
                <span><strong>Prime Location:</strong> MVP Double Road, Sector 10 (Minutes from Maddilapalem & Siripuram).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold font-bold">✓</span>
                <span><strong>No Superstition:</strong> Only authentic Vedic mathematical chart rectification.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold font-bold">✓</span>
                <span><strong>Bilingual Clarity:</strong> Consultations available fluently in Telugu (తెలుగు) & English.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold font-bold">✓</span>
                <span><strong>Full Spectrum:</strong> Horoscope, Marriage Matching, Vastu, Career, and Dosha Parihara.</span>
              </li>
            </ul>
          </div>

          {/* Table of Contents */}
          <nav className="bg-ivory/50 rounded-xl p-5 border border-gold/15 mb-12">
            <p className="font-cinzel text-xs font-bold uppercase tracking-widest text-gold mb-3">Table of Contents</p>
            <ol className="space-y-2 text-sm text-midnight/80 font-medium">
              <li><a href="#why-astrology-matters" className="hover:text-gold transition-colors">1. The Spiritual & Astrological Heritage of Visakhapatnam</a></li>
              <li><a href="#selection-criteria" className="hover:text-gold transition-colors">2. 5 Essential Criteria When Choosing an Astrologer in Vizag</a></li>
              <li><a href="#services-offered" className="hover:text-gold transition-colors">3. Signature Consultations at Sri Raghavendra Jyothishalayam</a></li>
              <li><a href="#in-person-vs-online" className="hover:text-gold transition-colors">4. Visiting MVP Colony vs. Online Consultations</a></li>
              <li><a href="#client-experiences" className="hover:text-gold transition-colors">5. What 414+ Verified Google Reviews Say</a></li>
              <li><a href="#faqs" className="hover:text-gold transition-colors">6. Frequently Asked Questions (Pricing, Booking, Rectification)</a></li>
            </ol>
          </nav>

          {/* Section 1 */}
          <section id="why-astrology-matters" className="prose prose-lg max-w-none mb-12">
            <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-midnight mb-4">
              1. The Spiritual & Astrological Heritage of Visakhapatnam
            </h2>
            <p className="text-midnight/80 leading-relaxed font-poppins">
              Visakhapatnam, often celebrated as the <em>City of Destiny</em>, carries a spiritual aura anchored by the sacred <strong>Simhachalam Temple of Lord Sri Varaha Lakshmi Narasimha Swamy</strong> and blessed by coastal breezes from the Bay of Bengal. From the bustling commercial sectors of <strong>Dwaraka Nagar</strong> and <strong>Jagadamba</strong> to the modern IT corridors of <strong>Rushikonda</strong> and <strong>Madhurawada</strong>, thousands of families and entrepreneurs frequently seek clarity when navigating career crossroads, marriage alliances, and new house constructions.
            </p>
            <p className="text-midnight/80 leading-relaxed font-poppins">
              However, in an age flooded with computer-generated horoscope apps and commercialized claims, finding a genuine practitioner who respects the sacred canons of <em>Brihat Parashara Hora Shastra</em> and <em>Jaimini Sutras</em> can be challenging. A true Vedic astrologer does not invoke fear or prescribe unaffordable rituals; rather, they diagnose planetary dasha periods and provide ethical remedies (శాంతి పరిహారాలు) that align with your karma.
            </p>
          </section>

          {/* Section 2 */}
          <section id="selection-criteria" className="mb-12">
            <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-midnight mb-6">
              2. 5 Essential Criteria When Choosing an Astrologer in Vizag
            </h2>
            <div className="space-y-4">
              {[
                {
                  title: "1. Verified Client Reviews & Local Reputation",
                  desc: "Never rely on unverified claims. Sri Raghavendra Jyothishalayam maintains a stellar 4.9★ rating on Google across 414+ honest reviews from local residents across MVP Colony, Seethammadhara, Gajuwaka, and international NRIs."
                },
                {
                  title: "2. Deep Expertise in Traditional Parashara Calculations",
                  desc: "Automated software frequently miscalculates sensitive planetary sub-periods (Antardashas and Pratyantardashas) or divisional charts (Navamsha D9, Dashamsha D10). Sri Raghavendra Siddhanti Garu cross-examines planetary degrees and bhavas by hand."
                },
                {
                  title: "3. Ethical, Non-Fear-Based Remedies (దోష పరిహారాలు)",
                  desc: "A genuine scholar never suggests that your life is doomed due to Kuja Dosha, Sade Sati, or Kala Sarpa Dosha. Instead, practical mantras, targeted gemstone advice, charity, and simple temple visits are prescribed."
                },
                {
                  title: "4. Fluency in Both Telugu & English",
                  desc: "Astrological guidance must be understood deeply. Explaining complex planetary influences in everyday Telugu (తెలుగు) or crisp English ensures youth and senior family members alike feel completely reassured."
                },
                {
                  title: "5. Accessible Physical Practice in Visakhapatnam",
                  desc: "While online consultations are convenient, having a permanent, established office in MVP Colony gives clients confidence and continuity across generations."
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-5 rounded-xl border border-gold/15 shadow-sm">
                  <h3 className="font-cinzel text-lg font-bold text-midnight mb-2 text-amber-900">{item.title}</h3>
                  <p className="text-sm text-midnight/75 leading-relaxed font-poppins">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Comparison Table */}
          <section className="mb-12">
            <h3 className="font-cinzel text-xl font-bold text-midnight mb-4">
              Comparing Traditional Consultations at Sri Raghavendra Jyothishalayam vs. Generic Online Apps
            </h3>
            <div className="overflow-x-auto rounded-xl border border-gold/20 shadow-sm">
              <table className="w-full text-left text-sm bg-white">
                <thead className="bg-midnight text-gold font-cinzel uppercase text-xs">
                  <tr>
                    <th className="p-4">Aspect</th>
                    <th className="p-4">Sri Raghavendra Jyothishalayam (MVP Colony)</th>
                    <th className="p-4">Generic Automated Horoscope Apps</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gold/10 font-poppins">
                  <tr>
                    <td className="p-4 font-semibold text-midnight">Chart Accuracy</td>
                    <td className="p-4 text-emerald-800 font-medium">Verified by hand using classical Parashara ephemeris</td>
                    <td className="p-4 text-rose-800">Static algorithms with generic pre-written paragraphs</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-midnight">Divisional Charts (D9, D10)</td>
                    <td className="p-4 text-emerald-800 font-medium">Navamsha & Dashamsha analyzed for marriage and career</td>
                    <td className="p-4 text-rose-800">Rarely factored into actual predictions</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-midnight">Remedies (పరిహారాలు)</td>
                    <td className="p-4 text-emerald-800 font-medium">Personalized, ethical, simple spiritual pariharas</td>
                    <td className="p-4 text-rose-800">Expensive stones or generic fear-inducing pop-ups</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-midnight">Language Support</td>
                    <td className="p-4 text-emerald-800 font-medium">Fluent Telugu (తెలుగు) & English discussions</td>
                    <td className="p-4 text-rose-800">Rigid English or broken automated translations</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 3 */}
          <section id="services-offered" className="mb-12">
            <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-midnight mb-6">
              3. Signature Consultations at Sri Raghavendra Jyothishalayam
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-2xl border border-gold/20 shadow-sm">
                <span className="text-2xl mb-2 block">💍</span>
                <h3 className="font-cinzel text-lg font-bold text-midnight mb-2">Vedic Kundali Matching (జాతక పొంతన)</h3>
                <p className="text-xs sm:text-sm text-midnight/70 leading-relaxed mb-3">
                  Comprehensive 36-Guna matching along with Kuja Dosha, Dasha Sandhi, and longevity (Aayush) assessment for enduring matrimonial bliss.
                </p>
                <Link href="/services/kundali-matching" className="text-xs font-bold text-gold uppercase hover:underline">
                  Learn About Kundali Matching →
                </Link>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-gold/20 shadow-sm">
                <span className="text-2xl mb-2 block">🏛️</span>
                <h3 className="font-cinzel text-lg font-bold text-midnight mb-2">Coastal Vastu Shastra Consultation</h3>
                <p className="text-xs sm:text-sm text-midnight/70 leading-relaxed mb-3">
                  Specialized residential and commercial Vastu for Visakhapatnam's unique geography. Focuses on remedies without structural demolition.
                </p>
                <Link href="/services/vastu-visakhapatnam" className="text-xs font-bold text-gold uppercase hover:underline">
                  Explore Vastu Services →
                </Link>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-gold/20 shadow-sm">
                <span className="text-2xl mb-2 block">💼</span>
                <h3 className="font-cinzel text-lg font-bold text-midnight mb-2">Career & Business Timing</h3>
                <p className="text-xs sm:text-sm text-midnight/70 leading-relaxed mb-3">
                  Detailed analysis of the 10th house, Saturn (Shani), and Sun transitions to guide promotions, business launches, and job switches.
                </p>
                <Link href="/services/career-astrology" className="text-xs font-bold text-gold uppercase hover:underline">
                  Read Career Astrology →
                </Link>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-gold/20 shadow-sm">
                <span className="text-2xl mb-2 block">🕉️</span>
                <h3 className="font-cinzel text-lg font-bold text-midnight mb-2">Dosha Parihara & Muhurtham</h3>
                <p className="text-xs sm:text-sm text-midnight/70 leading-relaxed mb-3">
                  Calculation of auspicious muhurtham dates for Griha Pravesham, weddings, and naming ceremonies, alongside targeted Vedic remedies.
                </p>
                <Link href="/contact" className="text-xs font-bold text-gold uppercase hover:underline">
                  Book a Consultation →
                </Link>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section id="in-person-vs-online" className="mb-12 bg-white rounded-2xl p-6 sm:p-8 border border-gold/20 shadow-sm">
            <h2 className="font-cinzel text-2xl font-bold text-midnight mb-4">
              4. Visiting MVP Colony vs. Online Consultations
            </h2>
            <p className="text-midnight/80 leading-relaxed font-poppins text-sm sm:text-base mb-6">
              Sri Raghavendra Jyothishalayam welcomes clients both at its peaceful consultation chamber in <strong>Sector 10, MVP Colony</strong> and via seamless online phone/video sessions:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-ivory/60 p-5 rounded-xl border border-gold/15">
                <h4 className="font-bold text-midnight font-cinzel mb-2">📍 In-Person Consultations (MVP Colony)</h4>
                <p className="text-xs sm:text-sm text-midnight/70 leading-relaxed">
                  Ideal for families, matching physical horoscopes, and reviewing architectural floor plans for Vastu. Located on MVP Double Road with ample parking and serene temple vibrations.
                </p>
              </div>
              <div className="bg-ivory/60 p-5 rounded-xl border border-gold/15">
                <h4 className="font-bold text-midnight font-cinzel mb-2">💻 Online Phone & Video Consultations</h4>
                <p className="text-xs sm:text-sm text-midnight/70 leading-relaxed">
                  Convenient for tech executives in Madhurawada/Gajuwaka or NRI families across the US, UK, and Gulf. Birth charts are calculated digitally with live phone or Google Meet explanations.
                </p>
              </div>
            </div>
          </section>

          {/* Call to Action Banner */}
          <div className="bg-midnight text-ivory rounded-2xl p-8 sm:p-10 border border-gold/30 shadow-xl my-12 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
            <span className="text-xs uppercase tracking-widest text-gold font-bold mb-2 block">Direct Access to Authentic Guidance</span>
            <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-gold mb-4">
              Ready to Seek Clarity on Career, Marriage, or Vastu?
            </h3>
            <p className="font-cormorant text-lg sm:text-xl text-ivory/80 max-w-xl mx-auto mb-6">
              Schedule your confidential consultation with Sri Raghavendra Siddhanti Garu at MVP Colony or over the phone.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://wa.me/919652412221?text=Hello%20Sri%20Raghavendra%20Siddhanti%20Garu,%20I%20would%20like%20to%20book%20an%20astrology%20consultation."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold py-3.5 px-6 rounded-full text-xs uppercase tracking-wider transition-all shadow-md"
              >
                <MessageSquare className="w-4 h-4" /> Book Consultation on WhatsApp
              </a>
              <a
                href="tel:+919652412221"
                className="inline-flex items-center gap-2 bg-gold hover:bg-saffron text-midnight font-bold py-3.5 px-6 rounded-full text-xs uppercase tracking-wider transition-all shadow-md"
              >
                <Phone className="w-4 h-4" /> Call +91 96524 12221
              </a>
            </div>
          </div>

          {/* Section 5: Real Client Experiences */}
          <section id="client-experiences" className="mb-12">
            <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-midnight mb-6">
              5. What 414+ Verified Google Reviews Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-2xl border border-gold/20 shadow-sm">
                <div className="flex text-gold mb-2 text-sm">★★★★★</div>
                <p className="text-xs sm:text-sm text-midnight/80 italic mb-4 font-poppins leading-relaxed">
                  "I was facing severe career stagnation despite 8 years in the IT sector at Rushikonda. Siddhanti Garu analyzed my Dashamsha chart and advised on Rahu dasha remedies. Within 4 months, I secured a leadership role in Hyderabad. Highly recommended for accurate advice!"
                </p>
                <p className="text-xs font-bold text-midnight">— Satish V., IT Professional, Madhurawada</p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-gold/20 shadow-sm">
                <div className="flex text-gold mb-2 text-sm">★★★★★</div>
                <p className="text-xs sm:text-sm text-midnight/80 italic mb-4 font-poppins leading-relaxed">
                  "We came for my daughter's marriage matching. Unlike other astrologers who terrified us about Kuja Dosha, Raghavendra Garu explained the cancellation exceptions calmly in Telugu and gave practical guidance. Both families were relieved and satisfied."
                </p>
                <p className="text-xs font-bold text-midnight">— Padmavathi Devi, Sector 4, MVP Colony</p>
              </div>
            </div>
          </section>

          {/* Section 6: FAQs (AEO Target) */}
          <section id="faqs" className="mb-12">
            <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-midnight mb-6 flex items-center gap-2">
              <HelpCircle className="w-6 h-6 text-gold" /> Frequently Asked Questions (FAQ)
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: "Who is considered the best astrologer in Visakhapatnam?",
                  a: "Sri Raghavendra Siddhanti Garu at Sri Raghavendra Jyothishalayam in MVP Colony is widely regarded as one of the best astrologers in Visakhapatnam due to 25+ years of Vedic scholarship, over 414 five-star Google reviews, and deep proficiency in Parashara Jyotisha."
                },
                {
                  q: "Where is Sri Raghavendra Jyothishalayam located in Vizag?",
                  a: "The center is located at P8RQ+3P4, MVP Double Road, Sector 10, MVP Colony, Visakhapatnam, AP 530017. It is easily reachable from Maddilapalem, Siripuram, and Dwaraka Nagar."
                },
                {
                  q: "Can I consult via WhatsApp or phone if I live outside Vizag?",
                  a: "Yes. Sri Raghavendra Siddhanti Garu conducts scheduled telephone and video consultations for clients across Hyderabad, Bangalore, Vijayawada, the USA, UK, and Australia."
                },
                {
                  q: "What if I do not know my exact birth time?",
                  a: "If your birth time is uncertain, Prashna Shastra (Horary Astrology based on the moment of query) and past major life event verification (marriage date, career start) are used for birth time rectification (జన్మ సమయ శుద్ధి)."
                },
                {
                  q: "How can I book an appointment?",
                  a: "You can book directly by calling +91 96524 12221 or messaging on WhatsApp. Walk-ins at MVP Colony are also accommodated subject to daily consultation slots."
                }
              ].map((faq, i) => (
                <div key={i} className="bg-white p-5 rounded-xl border border-gold/15 shadow-sm">
                  <h3 className="font-bold text-midnight text-base mb-2 font-cinzel">{faq.q}</h3>
                  <p className="text-xs sm:text-sm text-midnight/75 leading-relaxed font-poppins">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Location & Contact Card */}
          <section className="bg-ivory border-2 border-gold/30 rounded-2xl p-6 sm:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-gold">Visit Us In Person</span>
                <h3 className="font-cinzel text-2xl font-bold text-midnight mt-1 mb-3">
                  Sri Raghavendra Jyothishalayam
                </h3>
                <p className="text-sm text-midnight/80 mb-4 leading-relaxed font-poppins">
                  <strong>Address:</strong> P8RQ+3P4, MVP Double Rd, Sector 10, MVP Colony, Visakhapatnam, Andhra Pradesh 530017
                </p>
                <p className="text-sm text-midnight/80 mb-4">
                  <strong>Hours:</strong> Mon - Sat: 9:00 AM – 8:00 PM | Sun: By Appointment
                </p>
                <div className="flex items-center gap-3">
                  <a
                    href="https://www.google.com/maps/place/Sri+Raghavendra+Jyothishalayam,+P8RQ%2B3P4,+MVP+Double+Rd,+Sector+10,+MVP+Colony,+Visakhapatnam,+Andhra+Pradesh+530017/@17.740137,83.3393431,17z/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider bg-midnight text-gold px-4 py-2.5 rounded-lg hover:bg-gold hover:text-midnight transition-colors"
                  >
                    <MapPin className="w-3.5 h-3.5" /> View on Google Maps
                  </a>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl border border-gold/20 text-center">
                <span className="text-3xl mb-2 block">🔱</span>
                <h4 className="font-cinzel font-bold text-midnight text-lg">Direct WhatsApp Consultation</h4>
                <p className="text-xs text-midnight/70 my-2">Instant slot confirmation & horoscope chart verification</p>
                <a
                  href="https://wa.me/919652412221?text=Hello%20Sri%20Raghavendra%20Jyothishalayam,%20I%20would%20like%20to%20book%20a%20consultation."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold py-2.5 px-4 rounded-lg text-xs uppercase tracking-wider hover:opacity-90 transition-opacity mt-2"
                >
                  <MessageSquare className="w-4 h-4" /> Chat on WhatsApp (+91 96524 12221)
                </a>
              </div>
            </div>
          </section>

        </div>
      </article>
    </>
  );
}
