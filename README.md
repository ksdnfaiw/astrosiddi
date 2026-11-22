# Astro Siddhi Website

Full-stack Next.js 14 astrology website built with Tailwind CSS, Supabase, and NextAuth.

## Local Setup Instructions

1. Clone the repository
2. Run `npm install`
3. Copy `.env.local.example` to `.env.local` and fill in the environment variables:
   ```env
   NEXTAUTH_SECRET="generate-a-secret-key"
   NEXTAUTH_URL="http://localhost:3000"
   NEXT_PUBLIC_SUPABASE_URL="your-supabase-url"
   NEXT_PUBLIC_SUPABASE_ANON_KEY="your-supabase-anon-key"
   SUPABASE_SERVICE_ROLE_KEY="your-supabase-service-role-key"
   ```
4. Run `npm run dev` to start the development server.

## Supabase Setup Steps

1. Create a new project in your Supabase dashboard.
2. Go to the SQL Editor and execute the schema provided in `supabase_schema.sql`.
3. Set the generated API keys in your environment variables.

## Vercel Deployment Steps

1. Push this repository to GitHub.
2. Log into Vercel and Import your GitHub repository.
3. In the environment variables section, add all the keys from `.env.local`.
4. Click Deploy.

## How to Create First Admin User

For this demo, the admin credentials in NextAuth are hardcoded to `admin@astrosiddi.com` / `admin123`.
In production, you should run an insert statement in your Supabase SQL editor:

```sql
INSERT INTO admin_users (email, password_hash) VALUES ('your_email@example.com', 'hashed_password');
```

Then update `src/app/api/auth/[...nextauth]/route.ts` to query Supabase to verify credentials.

## Performance & SEO conventions

- **Single source of truth for the domain:** `src/lib/site.ts` (`SITE_URL`). Canonicals, sitemap, robots and JSON-LD all derive from it - never hard-code a domain elsewhere.
- **Canonicals:** set `alternates.canonical` per page (relative path). Do **not** set one in the root layout - it would be inherited by every page.
- **Structured data:** builders live in `src/lib/schema.ts`, rendered via `src/components/ui/SchemaMarkup.tsx`. LocalBusiness (with AggregateRating) is emitted on Home, Contact and the Visakhapatnam city page only; other pages reference it by `@id`.
- **Images:** keep sources in `public/images/*.webp`, always pass explicit `width`/`height` to `next/image`, and give every image meaningful `alt` text. Below-the-fold images are lazy by default; only the LCP image gets `priority`.
- **Animation:** use `components/ui/Reveal.tsx` (CSS + IntersectionObserver) for below-the-fold reveals. Do not render above-the-fold content hidden until hydration.
- **Third-party scripts:** Google Ads `gtag` is loaded once in `app/layout.tsx` (library deferred to idle; `/success` loads it eagerly for conversions). The Elfsight reviews widget loads only when its section nears the viewport.
- **New landing pages:** Rashi pages are generated from `src/data/rashis.ts` (`/horoscope/<slug>`), city pages from `src/data/cities.ts` (`/astrologer-in-<city>`). Adding an entry creates the page, sitemap entry and footer/home links need to be added by hand.

### Technical SEO audit

```bash
npm run build && npm start          # terminal 1
npm run audit:seo                   # terminal 2 - audits http://localhost:3000
npm run audit:seo -- https://www.astrosiddi.com   # audit production (also checks HTTPS redirect, TLS and HSTS)
```

It crawls every sitemap URL and fails on: non-200 pages, wrong/missing canonicals, not exactly one H1, skipped heading levels, images missing alt/width/height, `http://` (mixed-content) references, invalid JSON-LD, and internal links that 404 or redirect.
