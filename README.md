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

For this demo, the admin credentials in NextAuth are hardcoded to `admin@astrosiddhi.com` / `admin123`.
In production, you should run an insert statement in your Supabase SQL editor:
```sql
INSERT INTO admin_users (email, password_hash) VALUES ('your_email@example.com', 'hashed_password');
```
Then update `src/app/api/auth/[...nextauth]/route.ts` to query Supabase to verify credentials.
