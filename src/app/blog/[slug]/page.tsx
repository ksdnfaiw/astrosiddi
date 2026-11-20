import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPostBySlug, getAllPosts } from "@/data/blogPosts";
import BlogPostView from "@/components/blog/BlogPost";
import { BreadcrumbSchema, FaqSchema, JsonLd } from "@/components/ui/SchemaMarkup";
import { SCHEMA_IDS, SITE_URL, absoluteUrl } from "@/lib/site";

interface PageProps {
  params: {
    slug: string;
  };
}

export const dynamicParams = false;

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) {
    return {
      title: "Article Not Found | Astro Siddhi",
      description: "The requested astrological guide was not found.",
    };
  }

  const canonicalUrl = absoluteUrl(`/blog/${post.slug}`);
  const imageUrl = absoluteUrl(post.featuredImage);
  // Keep titles concise (<60 chars) for optimal SERP display
  const truncatedTitle = post.title.length > 55 ? `${post.title.slice(0, 52)}...` : post.title;

  return {
    title: `${truncatedTitle} | Astro Siddhi`,
    description: post.metaDescription,
    keywords: [post.targetKeyword, ...post.secondaryKeywords, ...post.tags],
    alternates: { canonical: canonicalUrl },
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
      images: [{ url: imageUrl, width: 1200, height: 630, alt: post.altText || post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | Astro Siddhi`,
      description: post.metaDescription,
      images: [imageUrl],
    },
  };
}

export default function BlogPostPage({ params }: PageProps) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const pageUrl = absoluteUrl(`/blog/${post.slug}`);
  // post.author is "<Team> — Reviewed by <credential>": split into the author entity and the reviewer note.
  const [authorName, reviewNote] = post.author.split(/\s+—\s+/);
  const wordCount = post.sections
    .map((s) => `${s.content} ${(s.subsections ?? []).map((x) => x.text).join(" ")}`)
    .join(" ")
    .split(/\s+/).length;

  // Article schema (BlogPosting is a subtype of Article)
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    mainEntityOfPage: { "@type": "WebPage", "@id": pageUrl },
    headline: post.title.length > 110 ? `${post.title.slice(0, 107)}...` : post.title,
    description: post.metaDescription,
    image: [absoluteUrl(post.featuredImage)],
    datePublished: post.publishDate,
    dateModified: post.modifiedDate,
    inLanguage: "en",
    articleSection: post.category,
    wordCount,
    author: { "@type": "Organization", name: authorName, url: SITE_URL },
    ...(reviewNote ? { reviewedBy: { "@type": "Person", "@id": SCHEMA_IDS.founder, name: "Sri Raghavendra Siddhanti Garu" } } : {}),
    publisher: { "@id": SCHEMA_IDS.business },
    keywords: [post.targetKeyword, ...post.secondaryKeywords].join(", "),
  };

  return (
    <>
      <JsonLd data={articleSchema} />
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: post.title, path: `/blog/${post.slug}` },
        ]}
      />
      {post.faqs && post.faqs.length > 0 && <FaqSchema faqs={post.faqs} />}

      <BlogPostView post={post} />
    </>
  );
}
