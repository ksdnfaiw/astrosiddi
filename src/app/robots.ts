import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://www.astrosiddi.com';
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/', '/success'],
      },
      {
        userAgent: ['GPTBot', 'ClaudeBot', 'PerplexityBot', 'Google-Extended', 'Applebot-Extended', 'CCBot'],
        allow: '/',
        disallow: ['/api/', '/admin/', '/success'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
