import { MetadataRoute } from "next";
import { getAllPosts } from "@/data/blogPosts";
import { RASHIS } from "@/data/rashis";
import { CITIES } from "@/data/cities";
import { absoluteUrl } from "@/lib/site";

/**
 * Update when site content meaningfully changes. A stable date is more truthful than `new Date()`,
 * which would claim every page changed on every build and teaches crawlers to ignore <lastmod>.
 */
const CONTENT_UPDATED = new Date("2026-11-18");

type Entry = MetadataRoute.Sitemap[number];
const entry = (path: string, priority: number, changeFrequency: Entry["changeFrequency"]): Entry => ({
  url: absoluteUrl(path),
  lastModified: CONTENT_UPDATED,
  changeFrequency,
  priority,
});

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    entry("/", 1.0, "weekly"),
    entry("/services", 0.9, "weekly"),
    entry("/services/kundali-matching", 0.9, "monthly"),
    entry("/services/career-astrology", 0.85, "monthly"),
    entry("/services/vastu-visakhapatnam", 0.9, "monthly"),
    entry("/horoscope", 0.85, "monthly"),
    entry("/blog", 0.9, "weekly"),
    entry("/about", 0.8, "monthly"),
    entry("/contact", 0.8, "monthly"),
    entry("/privacy", 0.3, "yearly"),
  ];

  const rashiRoutes = RASHIS.map((r) => entry(`/horoscope/${r.slug}`, 0.7, "monthly"));
  const cityRoutes = CITIES.map((c) => entry(`/${c.slug}`, c.isLocal ? 0.9 : 0.75, "monthly"));

  const blogRoutes: MetadataRoute.Sitemap = getAllPosts().map((post) => ({
    url: absoluteUrl(`/blog/${post.slug}`),
    lastModified: new Date(post.modifiedDate || post.publishDate),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...rashiRoutes, ...cityRoutes, ...blogRoutes];
}
