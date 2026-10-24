import type { Metadata } from "next";
import { BLOG_POSTS } from "@/data/blogPosts";
import BlogList from "@/views/BlogList";

export const metadata: Metadata = {
  alternates: { canonical: "https://www.astrosiddi.com/blog" },
  title: "Vedic Astrology & Vastu Insights Blog",
  description:
    "Explore authentic Vedic astrology, Telugu marriage Kundali & coastal Vastu guides from Sri Raghavendra Siddhanti in Vizag. Read our latest articles.",
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
    title: "Vedic Astrology & Vastu Insights Blog | Astro Siddhi",
    description:
      "Authentic Vedic astrology insights, Telugu marriage matching guidance, and coastal Vastu Shastra tips from Visakhapatnam's top-rated astrologer.",
    url: "https://www.astrosiddi.com/blog",
    siteName: "Astro Siddhi",
    type: "website",
    images: [
      {
        url: "https://www.astrosiddi.com/images/blog/best-astrologer-in-visakhapatnam.svg",
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
    images: ["https://www.astrosiddi.com/images/blog/best-astrologer-in-visakhapatnam.svg"],
  },
};

export default function BlogHubPage() {
  const blogListSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Astro Siddhi Vedic Astrology & Vastu Blog",
    "description":
      "Authentic guides on Vedic astrology, Telugu marriage Kundali matching, Numerology, and coastal Vastu Shastra for Visakhapatnam residents.",
    "url": "https://www.astrosiddi.com/blog",
    "publisher": {
      "@type": "Organization",
      "@id": "https://www.astrosiddi.com/#business",
      "name": "Astro Siddhi",
      "url": "https://www.astrosiddi.com",
    },
    "blogPost": BLOG_POSTS.map((post) => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "url": `https://www.astrosiddi.com/blog/${post.slug}`,
      "datePublished": post.publishDate,
      "author": {
        "@type": "Person",
        "name": post.author || "Sri Raghavendra Siddhanti Garu",
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogListSchema) }}
      />
      <BlogList initialPosts={BLOG_POSTS} />
    </>
  );
}
