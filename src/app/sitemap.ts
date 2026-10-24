import { MetadataRoute } from 'next';
import { getAllPosts } from '@/data/blogPosts';
import { ASTRO_TOOLS_CONFIG } from '@/config/tools';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.astrosiddi.com';
  const currentDate = new Date('2026-10-24T00:00:00Z');

  const posts = getAllPosts();
  const blogRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.modifiedDate || post.publishDate),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/tools`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/tools/numerology-calculator`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/kundali-matching`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/services/career-astrology`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/services/vastu-visakhapatnam`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];

  const gatedToolRoutes: MetadataRoute.Sitemap = [];
  if (ASTRO_TOOLS_CONFIG.moonSignReleased) {
    gatedToolRoutes.push({
      url: `${baseUrl}/tools/moon-sign-calculator`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.85,
    });
  }
  if (ASTRO_TOOLS_CONFIG.kundliReleased) {
    gatedToolRoutes.push({
      url: `${baseUrl}/tools/kundli-generator`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.85,
    });
  }

  return [...staticRoutes, ...gatedToolRoutes, ...blogRoutes];
}

