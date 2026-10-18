"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { Sparkles, BookOpen, Clock, Calendar, ArrowRight, User, MapPin, Search, Tag } from "lucide-react";
import { BLOG_POSTS, BlogPost } from "@/data/blogPosts";

const CATEGORIES = ["All", "Vastu Shastra", "Kundali Matching", "Career Astrology", "Numerology", "Vedic Astrology"];

export default function BlogList({ initialPosts = BLOG_POSTS }: { initialPosts?: BlogPost[] }) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredPosts = useMemo(() => {
    return initialPosts.filter((post) => {
      const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === "" ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [initialPosts, selectedCategory, searchQuery]);

  return (
    <div className="flex flex-col min-h-screen bg-ivory text-midnight">
      {/* Hero Header */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-b from-midnight via-deepPurple to-midnight text-ivory border-b border-gold/20 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#F5A623_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gold/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold/15 text-gold text-xs font-semibold tracking-widest uppercase border border-gold/30 mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Sri Raghavendra Jyothishalayam • MVP Colony, Vizag</span>
          </div>

          <h1 className="font-cinzel text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-ivory mb-6 leading-tight">
            Vedic Astrology, Kundali &amp; Vastu Blog
          </h1>

          <p className="max-w-3xl mx-auto text-base sm:text-lg text-ivory/80 leading-relaxed font-light mb-8">
            Authentic astrological wisdom, traditional Telugu marriage compatibility insights, and coastal Vastu Shastra guidance curated by 25+ year veteran Sri Raghavendra Siddhanti Garu.
          </p>

          {/* Search Bar */}
          <div className="max-w-xl mx-auto relative">
            <Search className="w-5 h-5 text-gold absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by topic, Vastu, Kuja Dosha, Numerology, Career..."
              className="w-full pl-12 pr-4 py-3.5 rounded-full bg-midnight/80 border border-gold/40 text-ivory placeholder-ivory/50 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all text-sm"
              aria-label="Search blog articles"
            />
          </div>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="sticky top-24 z-40 bg-ivory/95 backdrop-blur-md border-b border-gold/20 py-4 px-4 shadow-sm">
        <div className="max-w-6xl mx-auto flex items-center gap-2 overflow-x-auto no-scrollbar scroll-smooth">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider whitespace-nowrap transition-all duration-200 ${
                  isActive
                    ? "bg-midnight text-gold shadow-md border border-gold/40"
                    : "bg-white text-midnight/70 hover:text-midnight hover:bg-gold/10 border border-gold/15"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-12 sm:py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex-1 w-full">
        {filteredPosts.length === 0 ? (
          <div className="text-center py-20 bg-white/60 rounded-3xl border border-gold/20 p-8">
            <BookOpen className="w-12 h-12 text-gold mx-auto mb-4 opacity-75" />
            <h3 className="font-cinzel text-xl font-bold text-midnight mb-2">No Articles Found</h3>
            <p className="text-sm text-midnight/70 mb-6">
              No articles matched your filter or search query. Try searching for &apos;Vastu&apos;, &apos;Kundali&apos;, or &apos;Career&apos;.
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory("All");
                setSearchQuery("");
              }}
              className="px-6 py-2.5 rounded-full bg-midnight text-gold font-semibold text-xs uppercase tracking-wider hover:bg-deepPurple transition-all"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.slug}
                className="group flex flex-col bg-white rounded-2xl border border-gold/20 overflow-hidden shadow-sm hover:shadow-xl hover:border-gold/50 transition-all duration-300 hover:-translate-y-1.5"
              >
                {/* Image Placeholder with fixed Aspect Ratio (Zero CLS) */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-midnight">
                  <Image
                    src={post.featuredImage}
                    alt={post.altText || post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  {post.badge && (
                    <div className="absolute top-3 left-3 bg-midnight/90 backdrop-blur-md text-gold text-[11px] font-semibold px-2.5 py-1 rounded-full border border-gold/30">
                      {post.badge}
                    </div>
                  )}
                  <div className="absolute bottom-3 right-3 bg-midnight/80 backdrop-blur-md text-ivory text-[11px] font-medium px-2 py-0.5 rounded-md flex items-center gap-1 border border-white/10">
                    <Clock className="w-3 h-3 text-gold" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1 justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs text-midnight/60">
                      <span className="text-saffron font-semibold uppercase tracking-wider text-[11px]">
                        {post.category}
                      </span>
                      <span>{new Date(post.publishDate).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
                    </div>

                    <h2 className="font-cinzel text-lg sm:text-xl font-bold text-midnight group-hover:text-saffron transition-colors line-clamp-2 leading-snug">
                      <Link href={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h2>

                    <p className="text-xs sm:text-sm text-midnight/70 line-clamp-3 leading-relaxed">
                      {post.summary}
                    </p>
                  </div>

                  {/* Read Article CTA */}
                  <div className="pt-5 mt-4 border-t border-gold/15 flex items-center justify-between">
                    <span className="text-[11px] text-midnight/60 font-medium">
                      Telugu &amp; English
                    </span>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-midnight group-hover:text-gold uppercase tracking-wider transition-colors"
                    >
                      <span>Read Article</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
