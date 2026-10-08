-- Run this once in the Supabase SQL Editor (Project -> SQL Editor -> New query).
-- Replace YOUR_ADMIN_EMAIL below with the email you'll log into /admin with,
-- then create that user under Authentication -> Users -> Add user.

create table if not exists posts (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text not null unique,
  excerpt text,
  content text not null default '',
  cover_image_url text,
  cover_image_alt text,
  category text,
  canonical_url text,
  seo_title text,
  seo_description text,
  seo_keywords text,
  -- Optional FAQPage rich-result data: [{ "q": "...", "a": "..." }, ...].
  -- Rendered as FAQPage JSON-LD on the post page when present.
  faq_json jsonb,
  -- Optional gated lead-magnet download (e.g. a free template). When
  -- download_xlsx_url or download_sheets_url is set, the blog post page
  -- renders a download-gate form (name/work email/company size) before
  -- revealing these links. Null on every ordinary post.
  download_xlsx_url text,
  download_xlsx_filename text,
  download_sheets_url text,
  published boolean not null default false,
  published_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists posts_published_idx on posts (published, published_at desc);

alter table posts enable row level security;

-- Anyone (including logged-out visitors) can read published posts.
create policy "Public can read published posts"
  on posts for select
  using (published = true);

-- Only the admin account can create, read all (incl. drafts), update, or delete.
create policy "Admin can manage all posts"
  on posts for all
  using (auth.jwt() ->> 'email' = 'YOUR_ADMIN_EMAIL')
  with check (auth.jwt() ->> 'email' = 'YOUR_ADMIN_EMAIL');

-- Keep updated_at current on every change.
create or replace function set_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

drop trigger if exists posts_set_updated_at on posts;
create trigger posts_set_updated_at
  before update on posts
  for each row
  execute function set_updated_at();

-- Jobs Table
create table if not exists jobs (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text not null unique,
  department text,
  location text,
  job_type text,
  description text not null default '',
  expected_salary text,
  published boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists jobs_published_idx on jobs (published);

alter table jobs enable row level security;

-- Public can read published jobs
create policy "Public can read published jobs"
  on jobs for select
  using (published = true);

-- Admin can manage all jobs
create policy "Admin can manage all jobs"
  on jobs for all
  using (auth.jwt() ->> 'email' = 'YOUR_ADMIN_EMAIL')
  with check (auth.jwt() ->> 'email' = 'YOUR_ADMIN_EMAIL');

drop trigger if exists jobs_set_updated_at on jobs;
create trigger jobs_set_updated_at
  before update on jobs
  for each row
  execute function set_updated_at();

-- Job Applications Table
create table if not exists job_applications (
  id uuid primary key default gen_random_uuid(),
  job_id uuid references jobs(id) on delete cascade,
  name text not null,
  email text not null,
  phone text,
  expected_salary text,
  cv_url text not null,
  created_at timestamptz not null default now()
);

alter table job_applications enable row level security;

-- Anyone can insert an application
create policy "Public can insert applications"
  on job_applications for insert
  with check (true);

-- Only Admin can read/manage applications
create policy "Admin can manage all applications"
  on job_applications for all
  using (auth.jwt() ->> 'email' = 'YOUR_ADMIN_EMAIL')
  with check (auth.jwt() ->> 'email' = 'YOUR_ADMIN_EMAIL');

-- You'll also need to create a storage bucket in Supabase called "cv_uploads"
-- Ensure it has public insert policies but admin-only read policies.

-- Contact Form Submissions Table
create table if not exists contact_submissions (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  phone text not null,
  users text,
  message text,
  created_at timestamptz not null default now()
);

create index if not exists contact_submissions_created_at_idx on contact_submissions (created_at desc);

alter table contact_submissions enable row level security;

-- Anyone can insert a contact form submission
create policy "Public can insert contact submissions"
  on contact_submissions for insert
  with check (true);

-- Only Admin can read/manage contact submissions
create policy "Admin can manage all contact submissions"
  on contact_submissions for all
  using (auth.jwt() ->> 'email' = 'YOUR_ADMIN_EMAIL')
  with check (auth.jwt() ->> 'email' = 'YOUR_ADMIN_EMAIL');

-- Template Downloads Table (gated lead-magnet downloads, e.g. the free
-- employee database template post). Kept separate from contact_submissions
-- since the form fields differ (no phone) and it's useful to see which
-- blog post ("source") actually produces leads.
create table if not exists template_downloads (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  work_email text not null,
  company_size text,
  -- Used by the /templates library gate (name/email/phone), null for the
  -- original free-employee-database-template gate (name/email/company_size).
  phone text,
  source text not null,
  created_at timestamptz not null default now()
);

create index if not exists template_downloads_created_at_idx on template_downloads (created_at desc);

alter table template_downloads enable row level security;

-- Anyone can submit the download form
create policy "Public can insert template downloads"
  on template_downloads for insert
  with check (true);

-- Only Admin can read/manage template download leads
create policy "Admin can manage all template downloads"
  on template_downloads for all
  using (auth.jwt() ->> 'email' = 'YOUR_ADMIN_EMAIL')
  with check (auth.jwt() ->> 'email' = 'YOUR_ADMIN_EMAIL');

-- HR Templates Library (/templates, /templates/[slug]) — downloadable HR
-- letters, policies, forms and trackers. Files are hosted on ImageKit, not
-- Supabase storage. Gated behind a name/email/phone lead form (see
-- template_downloads above) rather than real user accounts; the real file
-- URLs are only ever returned in that form's API response, never persisted
-- client-side (no cookie, no localStorage) — a fresh visit always shows the
-- form again, by design.
create table if not exists hr_templates (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  category text not null,
  seo_title text,
  seo_description text,
  intro text not null,
  content text not null,
  faq_json jsonb,
  -- [{ format: "docx", label: "Word (.docx)", url, filename }, ...]
  files jsonb not null default '[]'::jsonb,
  -- [{ label, href }, ...] -- links to matching feature pages / blog posts
  related_links jsonb,
  published boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists hr_templates_published_idx on hr_templates (published);

alter table hr_templates enable row level security;

-- Anyone can read published template pages (the page text itself, not a
-- bypass of the download gate -- the gate is enforced by the API route,
-- which only returns real file URLs in direct response to a submitted
-- name/email/phone form, never embedded in the page itself)
create policy "Public can read published hr_templates"
  on hr_templates for select
  using (published = true);

-- Only Admin can manage template pages
create policy "Admin can manage all hr_templates"
  on hr_templates for all
  using (auth.jwt() ->> 'email' = 'YOUR_ADMIN_EMAIL')
  with check (auth.jwt() ->> 'email' = 'YOUR_ADMIN_EMAIL');
