import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Script from "next/script";
import { getPostBySlug, getAllPosts, BlogPost } from "@/data/blogPosts";
import BlogPostView from "@/pages/BlogPost";

interface PageProps {
  params: {
    slug: string;
  };
}

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
      title: "Article Not Found | Astro Siddhi",
      description: "The requested astrological guide was not found.",
    };
  }

  const siteUrl = "https://www.astrosiddhi.com";
  const canonicalUrl = `${siteUrl}/blog/${post.slug}`;
  // Ensure title is concise and under 60 characters for optimal SERP display
  const truncatedTitle = post.title.length > 55 ? `${post.title.slice(0, 52)}...` : post.title;

  return {
    title: `${truncatedTitle} | Astro Siddhi`,
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
      title: `${post.title} | Astro Siddhi`,
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
      title: `${post.title} | Astro Siddhi`,
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

  const siteUrl = "https://www.astrosiddhi.com";
  const pageUrl = `${siteUrl}/blog/${post.slug}`;

  // 1. Article / BlogPosting Schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
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
      "@type": "Organization",
      "name": post.author,
      "url": siteUrl,
    },
    "publisher": {
      "@type": "Organization",
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

  // 3. FAQPage Schema
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

  // 4. LocalBusiness Schema (Visakhapatnam Sri Raghavendra Jyothishalayam)
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Astro Siddhi - Sri Raghavendra Jyothishalayam",
    "image": `${siteUrl}/icon.svg`,
    "telephone": "+919652412221",
    "priceRange": "₹₹",
    "url": siteUrl,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "P8RQ+3P4, MVP Double Rd, Sector 10, MVP Colony",
      "addressLocality": "Visakhapatnam",
      "addressRegion": "Andhra Pradesh",
      "postalCode": "530017",
      "addressCountry": "IN",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 17.740137,
      "longitude": 83.3393431,
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "09:00",
      "closes": "20:00",
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "414",
    },
  };

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      <BlogPostView post={post} />
    </>
  );
}
