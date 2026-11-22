import type { Metadata } from "next";
import { BLOG_POSTS } from "@/data/blogPosts";
import BlogList from "@/components/blog/BlogList";
import { JsonLd } from "@/components/ui/SchemaMarkup";
import { SCHEMA_IDS, SITE_URL, absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/blog" },
  title: "Vedic Astrology, Kundali Matching & Vastu Blog | Astro Siddhi Visakhapatnam",
  description:
    "Read in-depth guides on Vedic astrology, Telugu marriage Kundali matching, Numerology, and coastal Vastu Shastra by 25-year veteran Sri Raghavendra Siddhanti Garu in Visakhapatnam.",
  keywords: [
    "astrology blog Visakhapatnam",
    "vedic astrology articles Vizag",
    "kundali matching guide Telugu",
    "vastu tips for Vizag flats",
    "career astrology kundali",
    "manglik dosha myths",
    "numerology career timing",
    "Sri Raghavendra Jyothishalayam blog",
    "Astro Siddhi insights",
  ],
  openGraph: {
    title: "Vedic Astrology, Kundali Matching & Vastu Blog | Astro Siddhi Visakhapatnam",
    description:
      "Authentic Vedic astrology insights, Telugu marriage matching guidance, and coastal Vastu Shastra tips from Visakhapatnam's top-rated astrologer.",
    url: absoluteUrl("/blog"),
    siteName: "Astro Siddhi",
    type: "website",
    images: [
      {
        url: absoluteUrl("/images/blog/best-astrologer-in-visakhapatnam.webp"),
        width: 1200,
        height: 630,
        alt: "Astro Siddhi Vedic Astrology and Vastu Blog Hub",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vedic Astrology & Vastu Insights Blog | Astro Siddhi",
    description:
      "Authentic Vedic astrology insights and coastal Vastu Shastra tips from Visakhapatnam's top-rated astrologer.",
    images: [absoluteUrl("/images/blog/best-astrologer-in-visakhapatnam.webp")],
  },
};

export default function BlogHubPage() {
  const blogListSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Astro Siddhi Vedic Astrology & Vastu Blog",
    description:
      "Authentic guides on Vedic astrology, Telugu marriage Kundali matching, Numerology, and coastal Vastu Shastra for Visakhapatnam residents.",
    url: absoluteUrl("/blog"),
    publisher: { "@id": SCHEMA_IDS.business },
    blogPost: BLOG_POSTS.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      url: `${SITE_URL}/blog/${post.slug}`,
      datePublished: post.publishDate,
      image: absoluteUrl(post.featuredImage),
      author: { "@type": "Person", name: "Sri Raghavendra Siddhanti Garu" },
    })),
  };

  return (
    <>
      <JsonLd data={blogListSchema} />
      <BlogList initialPosts={BLOG_POSTS} />
    </>
  );
}
