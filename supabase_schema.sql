-- Supabase Schema for Astro Siddhi

CREATE TABLE public.blog_posts (
  id uuid default gen_random_uuid() primary key,
  title_en text,
  title_te text,
  slug text unique,
  excerpt_en text,
  excerpt_te text,
  content_en text,
  content_te text,
  category text,
  cover_image_url text,
  author text,
  published boolean default false,
  meta_title text,
  meta_description text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

CREATE TABLE public.contact_submissions (
  id uuid default gen_random_uuid() primary key,
  name text,
  phone text,
  email text,
  dob date,
  tob text,
  pob text,
  service text,
  language_pref text,
  message text,
  created_at timestamptz default now()
);

CREATE TABLE public.admin_users (
  id uuid default gen_random_uuid() primary key,
  email text unique,
  password_hash text
);

-- Note: Enable Row Level Security (RLS) on these tables and configure appropriate policies depending on read/write needs.
