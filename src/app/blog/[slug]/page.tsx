import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPostBySlug, getAllPosts } from "@/data/blogPosts";
import BlogPostView from "@/views/BlogPost";

interface PageProps {
  params: {
    slug: string;
  };
}

const BLOG_SEO_TITLES: Record<string, string> = {
  "signs-you-need-vastu-correction-at-home": "Signs You Need Vastu Correction at Home",
  "how-kundali-matching-really-works-telugu-tradition": "How Telugu Kundali Matching Works",
  "numerology-basics-birth-number-career-timing": "Numerology Basics for Career & Wealth",
  "career-astrology-reading-kundali-for-job-business-timing": "Career Astrology: Job & Business Timing",
  "manglik-dosha-myths-vs-facts": "Manglik Dosha Myths vs Facts in Marriage",
  "vastu-tips-visakhapatnam-apartments": "Vastu Tips for Visakhapatnam Apartments",
  "best-astrologer-in-visakhapatnam": "Best Astrologer in Visakhapatnam Guide",
  "kundali-matching-marriage-telugu-vedic-astrology": "Kundali Matching Telugu Marriage Guide",
  "vastu-shastra-guide-homes-flats-visakhapatnam": "Vizag Vastu Guide for Homes & Flats",
  "how-to-calculate-your-moon-sign": "How to Calculate Moon Sign Guide",
  "telugu-jyothisham-books": "Telugu Jyothisham Books Guide",
};

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) {
    return {
      title: "Article Not Found",
      description: "The requested astrological guide was not found.",
    };
  }

  const siteUrl = "https://www.astrosiddi.com";
  const canonicalUrl = `${siteUrl}/blog/${post.slug}`;
  // Title template in layout will append " | Astro Siddhi" (15 chars)
  // SEO title is ≤ 42 chars so final title is ≤ 57 characters
  const seoTitle =
    BLOG_SEO_TITLES[post.slug] ||
    (post.title.length > 42 ? `${post.title.slice(0, 39)}...` : post.title);

  return {
    title: seoTitle,
    description: post.metaDescription,
    keywords: [post.targetKeyword, ...post.secondaryKeywords, ...post.tags],
    alternates: {
      canonical: canonicalUrl,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      title: `${seoTitle} | Astro Siddhi`,
      description: post.metaDescription,
      url: canonicalUrl,
      siteName: "Astro Siddhi",
      type: "article",
      publishedTime: post.publishDate,
      modifiedTime: post.modifiedDate,
      authors: [post.author],
      tags: post.tags,
      images: [
        {
          url: `${siteUrl}${post.featuredImage}`,
          width: 1200,
          height: 630,
          alt: post.altText || post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${seoTitle} | Astro Siddhi`,
      description: post.metaDescription,
      images: [`${siteUrl}${post.featuredImage}`],
    },
  };
}

export default function BlogPostPage({ params }: PageProps) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const siteUrl = "https://www.astrosiddi.com";
  const pageUrl = `${siteUrl}/blog/${post.slug}`;

  // 1. Article / BlogPosting Schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${pageUrl}#article`,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": pageUrl,
    },
    "headline": post.title,
    "description": post.metaDescription,
    "image": [`${siteUrl}${post.featuredImage}`],
    "datePublished": post.publishDate,
    "dateModified": post.modifiedDate,
    "author": {
      "@type": "Person",
      "name": "Sri Raghavendra Siddhanti Garu",
      "url": `${siteUrl}/about`,
    },
    "publisher": {
      "@type": "Organization",
      "@id": `${siteUrl}/#business`,
      "name": "Astro Siddhi",
      "url": siteUrl,
      "logo": {
        "@type": "ImageObject",
        "url": `${siteUrl}/icon.svg`,
      },
    },
    "keywords": [post.targetKeyword, ...post.secondaryKeywords].join(", "),
  };

  // 2. BreadcrumbList Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": siteUrl,
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": `${siteUrl}/blog`,
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": post.title,
        "item": pageUrl,
      },
    ],
  };

  // 3. FAQPage Schema (only rendered if FAQs are present on page)
  const faqSchema =
    post.faqs && post.faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": post.faqs.map((faq) => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answer,
            },
          })),
        }
      : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <BlogPostView post={post} />
    </>
  );
}
