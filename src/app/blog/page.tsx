import type { Metadata } from "next";
import Link from "next/link";
import { Sparkles, BookOpen, Clock, Calendar, ArrowRight, User, MapPin, Star, Phone, MessageSquare } from "lucide-react";

export const metadata: Metadata = {
  alternates: { canonical: "/blog" },
  title: "Vedic Astrology, Kundali Matching & Vastu Blog | Astro Siddhi Visakhapatnam",
  description: "Read in-depth articles on Vedic astrology, Kundali matching in Telugu tradition, and Vastu Shastra for Visakhapatnam homes by 25-year veteran Sri Raghavendra Siddhanti Garu.",
  keywords: [
    "astrology blog Visakhapatnam",
    "vedic astrology articles Vizag",
    "kundali matching guide Telugu",
    "vastu tips for Vizag flats",
    "Sri Raghavendra Jyothishalayam blog",
    "Astro Siddhi insights"
  ],
  openGraph: {
    title: "Vedic Astrology, Kundali Matching & Vastu Blog | Astro Siddhi Visakhapatnam",
    description: "Authentic Vedic astrology insights, Telugu marriage matching guidance, and coastal Vastu Shastra tips from Visakhapatnam's top-rated astrologer.",
    url: "https://www.astrosiddhi.com/blog",
    type: "website",
  },
};

const BLOG_POSTS = [
  {
    slug: "best-astrologer-in-visakhapatnam",
    title: "Best Astrologer in Visakhapatnam (Vizag): Complete Guide to Genuine Vedic Consultations",
    category: "Vedic Astrology",
    date: "October 14, 2026",
    readTime: "9 min read",
    excerpt: "Looking for an authentic astrologer in Visakhapatnam? Learn how 25+ years veteran Sri Raghavendra Siddhanti Garu at MVP Colony delivers precise birth chart analysis, planetary remedies, and ethical guidance in Telugu and English.",
    badge: "⭐ Top Local Guide",
    highlights: ["MVP Colony Jyothishalayam", "Parashara Horoscope Analysis", "4.9★ Google Rating across 414+ Reviews"]
  },
  {
    slug: "kundali-matching-marriage-telugu-vedic-astrology",
    title: "Kundali Matching for Marriage in Telugu Vedic Tradition: Ashta Koota, Kuja Dosha & Remedies",
    category: "Kundali Matching",
    date: "October 12, 2026",
    readTime: "11 min read",
    excerpt: "Understand the true science of horoscope matching (జాతక పొంతన) in Telugu weddings. Detailed breakdown of 36 Gunas, Kuja Dosha (Manglik) exceptions, Dasha Sandhi, and effective Vedic pariharas beyond automated software.",
    badge: "💍 Marriage Compatibility",
    highlights: ["36 Gunas Breakdown", "Kuja Dosha Realities & Exceptions", "Telugu Marriage Muhurtham"]
  },
  {
    slug: "vastu-shastra-guide-homes-flats-visakhapatnam",
    title: "Vastu Shastra for Coastal Homes & Modern Flats in Visakhapatnam: Principles & Non-Demolition Remedies",
    category: "Vastu Shastra",
    date: "October 10, 2026",
    readTime: "10 min read",
    excerpt: "Comprehensive Vastu guide tailored for Visakhapatnam's coastal topography. Learn how to optimize Ishanya (Northeast), Nairuthi (Southwest), and Agneya in Vizag apartments and independent houses without breaking walls.",
    badge: "🏛️ Coastal Living Vastu",
    highlights: ["Sea & Hill Directional Balancing", "High-Rise Apartment Rules", "Pyramid & Helix Remedies"]
  }
];

export default function BlogHub() {
  return (
    <div className="flex flex-col min-h-screen bg-ivory text-midnight">
      {/* Hero Section */}
      <section className="relative bg-midnight text-ivory py-24 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-gold/20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gold/15 via-midnight to-midnight pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs font-semibold tracking-widest uppercase mb-6">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            <span>Vedic Wisdom & Local Insights</span>
          </div>
          <h1 className="font-cinzel text-4xl sm:text-5xl lg:text-6xl font-bold text-gold tracking-wide mb-6 drop-shadow-md">
            Astro Siddhi Insights & Guides
          </h1>
          <p className="font-cormorant text-xl sm:text-2xl text-ivory/80 max-w-2xl mx-auto leading-relaxed">
            Ancient Vedic astrology, Telugu marriage horoscope matching, and coastal Vastu principles explained with scientific clarity by Sri Raghavendra Jyothishalayam, MVP Colony, Visakhapatnam.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-xs sm:text-sm text-ivory/60 font-medium">
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-gold" /> Sector 10, MVP Colony, Vizag</span>
            <span className="flex items-center gap-1.5"><Star className="w-4 h-4 text-gold fill-gold" /> 4.9★ (414+ Verified Reviews)</span>
            <span className="flex items-center gap-1.5"><BookOpen className="w-4 h-4 text-gold" /> 25+ Years Lineage</span>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* Articles Feed (2 Columns) */}
          <div className="lg:col-span-2 space-y-10">
            <div className="flex items-center justify-between pb-4 border-b border-gold/20">
              <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-midnight flex items-center gap-2">
                <span>Featured Articles</span>
                <span className="text-xs bg-gold/15 text-gold px-2.5 py-0.5 rounded-full font-sans font-semibold">3 Guides</span>
              </h2>
              <span className="text-xs uppercase tracking-wider text-midnight/60 font-medium">Local SEO & AEO Certified</span>
            </div>

            <div className="space-y-8">
              {BLOG_POSTS.map((post) => (
                <article
                  key={post.slug}
                  className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-xl border border-gold/20 transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden"
                >
                  <div className="flex flex-wrap items-center gap-3 text-xs mb-3 text-midnight/60">
                    <span className="bg-gold/15 text-midnight font-bold px-3 py-1 rounded-full uppercase tracking-wider text-[11px]">
                      {post.category}
                    </span>
                    <span className="text-amber-800 bg-amber-50 font-semibold px-2.5 py-0.5 rounded-md border border-amber-200">
                      {post.badge}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-gold" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-gold" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-midnight group-hover:text-gold transition-colors mb-3 leading-snug">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>

                  <p className="text-midnight/70 text-sm sm:text-base leading-relaxed mb-6 font-poppins">
                    {post.excerpt}
                  </p>

                  {/* Highlights pills */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {post.highlights.map((h, i) => (
                      <span key={i} className="text-xs bg-ivory text-midnight/80 px-2.5 py-1 rounded border border-gold/15">
                        ✓ {h}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gold/10">
                    <div className="flex items-center gap-2 text-xs text-midnight/70">
                      <User className="w-4 h-4 text-gold" />
                      <span>By <strong>Sri Raghavendra Siddhanti Garu</strong></span>
                    </div>

                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-midnight group-hover:text-gold transition-colors"
                    >
                      Read Guide <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Sidebar / Author Spotlight & Quick Booking */}
          <aside className="space-y-8">
            {/* Author Card */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-gold/30 shadow-md text-center">
              <div className="w-20 h-20 mx-auto rounded-full bg-midnight border-2 border-gold flex items-center justify-center text-3xl shadow-inner mb-4">
                🔱
              </div>
              <h3 className="font-cinzel text-xl font-bold text-midnight">Sri Raghavendra Siddhanti Garu</h3>
              <p className="text-xs uppercase tracking-widest text-gold font-semibold mt-1">Chief Astrologer & Vastu Consultant</p>
              
              <div className="flex items-center justify-center gap-1 text-gold my-3 text-sm">
                ★★★★★ <span className="text-midnight/70 text-xs ml-1 font-semibold">(4.9/5 from 414+ Reviews)</span>
              </div>

              <p className="text-xs sm:text-sm text-midnight/75 leading-relaxed font-poppins mb-6">
                Over 25 years of unbroken practice in Visakhapatnam. Renowned for mathematical chart accuracy, honest guidance, and ethical Vedic pariharas without fear-mongering. Consults in Telugu and English.
              </p>

              <div className="bg-ivory rounded-xl p-3.5 text-left border border-gold/15 text-xs space-y-2 mb-6">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                  <span>Sector 10, MVP Double Rd, MVP Colony, Visakhapatnam, AP 530017</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-gold shrink-0" />
                  <a href="tel:+919652412221" className="hover:text-gold transition-colors font-semibold">+91 96524 12221</a>
                </div>
              </div>

              <a
                href="https://wa.me/919652412221?text=Hello%20Sri%20Raghavendra%20Jyothishalayam,%20I%20read%20your%20blog%20and%20would%20like%20to%20book%20a%20consultation."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold py-3 px-4 rounded-xl text-xs uppercase tracking-wider transition-all shadow-md hover:shadow-lg"
              >
                <MessageSquare className="w-4 h-4" /> Book Consultation on WhatsApp
              </a>
            </div>

            {/* Quick Links to Services */}
            <div className="bg-midnight text-ivory rounded-2xl p-6 border border-gold/20 shadow-md">
              <h4 className="font-cinzel text-lg font-bold text-gold uppercase tracking-wider mb-4">
                Popular Services in Vizag
              </h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="/services/kundali-matching" className="flex items-center justify-between text-ivory/80 hover:text-gold transition-colors py-1.5 border-b border-ivory/10">
                    <span>💍 Kundali Matching Online</span>
                    <ArrowRight className="w-3.5 h-3.5 text-gold" />
                  </Link>
                </li>
                <li>
                  <Link href="/services/vastu-visakhapatnam" className="flex items-center justify-between text-ivory/80 hover:text-gold transition-colors py-1.5 border-b border-ivory/10">
                    <span>🏛️ Vastu Shastra Visakhapatnam</span>
                    <ArrowRight className="w-3.5 h-3.5 text-gold" />
                  </Link>
                </li>
                <li>
                  <Link href="/services/career-astrology" className="flex items-center justify-between text-ivory/80 hover:text-gold transition-colors py-1.5 border-b border-ivory/10">
                    <span>💼 Career & Business Astrology</span>
                    <ArrowRight className="w-3.5 h-3.5 text-gold" />
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="flex items-center justify-between text-ivory/80 hover:text-gold transition-colors py-1.5">
                    <span>📍 In-Person Office Visit (MVP Colony)</span>
                    <ArrowRight className="w-3.5 h-3.5 text-gold" />
                  </Link>
                </li>
              </ul>
            </div>
          </aside>

        </div>
      </section>
    </div>
  );
}
