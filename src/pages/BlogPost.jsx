"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Bookmark, AlertTriangle, Lightbulb, Sparkles } from "lucide-react";
import { BLOG_POSTS, getRelatedPosts } from "@/data/blogPosts";
import { AuthorBadge } from "@/components/blog/AuthorBadge";
import { SocialShare } from "@/components/blog/SocialShare";
import { WhatsAppConsultationCard } from "@/components/blog/WhatsAppConsultationCard";
import { FaqAccordion } from "@/components/blog/FaqAccordion";
import { VizagTrustBanner } from "@/components/blog/VizagTrustBanner";

export default function BlogPostView({ post = BLOG_POSTS[0] }) {
  if (!post) return null;

  const related = getRelatedPosts(post.slug, 3);
  const currentUrl = `https://www.astrosiddhi.com/blog/${post.slug}`;
  const formattedDate = new Date(post.publishDate).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric"
  });

  return (
    <article className="min-h-screen bg-ivory text-midnight flex flex-col">
      {/* Article Header */}
      <header className="relative pt-12 pb-16 bg-gradient-to-b from-midnight via-deepPurple to-midnight text-ivory border-b border-gold/20 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#F5A623_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-xs text-ivory/60">
              <li>
                <Link href="/" className="hover:text-gold transition-colors">Home</Link>
              </li>
              <li>/</li>
              <li>
                <Link href="/blog" className="hover:text-gold transition-colors">Blog</Link>
              </li>
              <li>/</li>
              <li className="text-gold truncate max-w-xs">{post.title}</li>
            </ol>
          </nav>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/15 text-gold text-xs font-semibold tracking-wider uppercase border border-gold/25 mb-4">
            <span>{post.category}</span>
          </div>

          <h1 className="font-cinzel text-2xl sm:text-4xl md:text-5xl font-bold text-ivory leading-tight sm:leading-snug mb-6">
            {post.title}
          </h1>

          <p className="text-sm sm:text-base text-ivory/80 leading-relaxed font-light mb-8 max-w-3xl">
            {post.summary}
          </p>

          <AuthorBadge author={post.author} date={formattedDate} readTime={post.readTime} />
        </div>
      </header>

      {/* Main Content Area */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full flex-1">
        {/* Featured Image with Fixed Aspect Ratio (Zero CLS) */}
        <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden shadow-lg border border-gold/20 mb-8 bg-midnight">
          <Image
            src={post.featuredImage}
            alt={post.altText || post.title}
            fill
            priority
            sizes="(max-width: 896px) 100vw, 896px"
            className="object-cover"
          />
        </div>

        {/* Social Share Top */}
        <SocialShare title={post.title} url={currentUrl} />

        {/* Quick Table of Contents */}
        {post.sections && post.sections.length > 0 && (
          <aside className="my-8 p-6 rounded-2xl bg-white border border-gold/25 shadow-sm">
            <h2 className="font-cinzel text-base sm:text-lg font-bold text-midnight mb-3 flex items-center gap-2">
              <Bookmark className="w-4 h-4 text-gold" />
              <span>In This Guide</span>
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-midnight/80">
              {post.sections.map((sec, idx) => (
                <li key={sec.id}>
                  <a
                    href={`#${sec.id}`}
                    className="hover:text-saffron transition-colors flex items-center gap-2 py-0.5 group"
                  >
                    <span className="text-gold font-semibold text-xs group-hover:translate-x-0.5 transition-transform">{idx + 1}.</span>
                    <span className="line-clamp-1">{sec.title}</span>
                  </a>
                </li>
              ))}
              {post.faqs && post.faqs.length > 0 && (
                <li>
                  <a href="#faqs" className="hover:text-saffron transition-colors flex items-center gap-2 py-0.5 group">
                    <span className="text-gold font-semibold text-xs group-hover:translate-x-0.5 transition-transform">★</span>
                    <span>Frequently Asked Questions</span>
                  </a>
                </li>
              )}
            </ul>
          </aside>
        )}

        {/* Body Sections */}
        <div className="space-y-12 text-midnight/90 leading-relaxed font-normal text-base sm:text-lg">
          {post.sections.map((section, idx) => (
            <section key={section.id} id={section.id} className="scroll-mt-28 space-y-4">
              <h2 className="font-cinzel text-xl sm:text-2xl md:text-3xl font-bold text-midnight tracking-tight pt-2 border-b border-gold/20 pb-3">
                {section.title}
              </h2>

              <div className="whitespace-pre-line text-sm sm:text-base leading-relaxed text-midnight/85">
                {section.content}
              </div>

              {/* Subsections if any */}
              {section.subsections && section.subsections.length > 0 && (
                <div className="space-y-6 pt-3">
                  {section.subsections.map((sub, sIdx) => (
                    <div key={sIdx} className="p-4 sm:p-5 rounded-xl bg-white border border-gold/15 shadow-sm space-y-2">
                      <h3 className="font-semibold text-base sm:text-lg text-midnight flex items-start gap-2">
                        <span className="text-gold font-bold">{sIdx + 1}.</span>
                        <span>{sub.subtitle}</span>
                      </h3>
                      <p className="text-xs sm:text-sm text-midnight/80 leading-relaxed">
                        {sub.text}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {/* Data Table if any */}
              {section.table && (
                <div className="my-6 overflow-x-auto rounded-xl border border-gold/25 bg-white shadow-sm">
                  <table className="w-full text-left text-xs sm:text-sm divide-y divide-gold/15">
                    <thead className="bg-midnight text-ivory">
                      <tr>
                        {section.table.headers.map((h, hIdx) => (
                          <th key={hIdx} className="px-4 py-3 font-semibold uppercase tracking-wider text-[11px] sm:text-xs">
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gold/10">
                      {section.table.rows.map((row, rIdx) => (
                        <tr key={rIdx} className="hover:bg-gold/5 transition-colors">
                          {row.map((cell, cIdx) => (
                            <td key={cIdx} className="px-4 py-3 font-normal text-midnight/80">
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {/* Callout box if any */}
              {section.callout && (
                <div className={`p-4 sm:p-5 rounded-xl border my-5 ${
                  section.callout.type === 'warning'
                    ? 'bg-amber-500/10 border-amber-500/30 text-amber-950'
                    : section.callout.type === 'tip'
                    ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-950'
                    : 'bg-gold/10 border-gold/30 text-midnight'
                }`}>
                  <div className="flex items-start gap-3">
                    {section.callout.type === 'warning' ? (
                      <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    ) : section.callout.type === 'tip' ? (
                      <Lightbulb className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    ) : (
                      <Sparkles className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                    )}
                    <div>
                      {section.callout.title && (
                        <h4 className="font-bold text-sm mb-1">{section.callout.title}</h4>
                      )}
                      <p className="text-xs sm:text-sm leading-relaxed">{section.callout.text}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Insert Consultation Card mid-article after section 2 */}
              {idx === 1 && (
                <WhatsAppConsultationCard serviceContext={post.title} />
              )}
            </section>
          ))}
        </div>

        {/* FAQ Section */}
        {post.faqs && post.faqs.length > 0 && (
          <div id="faqs" className="scroll-mt-28">
            <FaqAccordion faqs={post.faqs} />
          </div>
        )}

        {/* Hyper-Local Vizag Trust Banner */}
        <VizagTrustBanner />

        {/* Bottom Social Share */}
        <SocialShare title={post.title} url={currentUrl} />

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap items-center gap-2 pt-6 border-t border-gold/15 mb-10">
            <span className="text-xs font-semibold text-midnight/60">Tagged:</span>
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1 rounded-full bg-white text-midnight/80 border border-gold/20"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* Related Articles */}
        {related.length > 0 && (
          <section className="pt-8 border-t border-gold/20">
            <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-midnight mb-6">
              Related Vedic Astrology &amp; Vastu Guides
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {related.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/blog/${rel.slug}`}
                  className="group bg-white rounded-xl border border-gold/20 p-4 hover:shadow-lg hover:border-gold/50 transition-all flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <span className="text-[10px] text-saffron font-bold uppercase tracking-wider">
                      {rel.category}
                    </span>
                    <h4 className="font-cinzel font-bold text-sm text-midnight group-hover:text-saffron transition-colors line-clamp-2">
                      {rel.title}
                    </h4>
                    <p className="text-xs text-midnight/70 line-clamp-2 leading-relaxed">
                      {rel.summary}
                    </p>
                  </div>
                  <div className="pt-3 mt-3 border-t border-gold/10 flex items-center justify-between text-[11px] text-midnight/60">
                    <span>{rel.readTime}</span>
                    <span className="text-gold font-semibold group-hover:translate-x-1 transition-transform">Read &rarr;</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </article>
  );
}
