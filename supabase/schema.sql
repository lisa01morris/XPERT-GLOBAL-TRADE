-- Example Supabase schema for optional admin & audit tables

-- table to store simple site templates / demos (optional)
CREATE TABLE IF NOT EXISTS public.site_templates (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  url text,
  description text,
  created_at timestamptz default now()
);

-- admin audit table for server-side actions
CREATE TABLE IF NOT EXISTS public.admin_audit (
  id uuid primary key default gen_random_uuid(),
  admin_id uuid,
  action text not null,
  target_id text,
  details jsonb,
  created_at timestamptz default now()
);
