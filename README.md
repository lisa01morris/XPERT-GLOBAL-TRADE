# Xpert Global Trade — AI Site Builder Hub

This branch adds a small static AI Site Builder Hub to the repo. It includes:

- A landing page (pages/index.html) promoting an AI-driven site builder.
- Templates/examples page (pages/templates.html) linking to live demos.
- Tutorials page (pages/tutorials.html) with Vercel + Supabase setup steps.
- Products page (pages/products.html) listing checkout and social links you provided.
- Admin instructions (pages/admin.html) explaining safe Supabase admin practices.
- Static assets (assets/css/style.css, assets/img/logo.svg).
- Example Supabase SQL schema (supabase/schema.sql) and a server-side admin example (server-examples/supabase-admin.example.js).
- .env.example with placeholders for environment variables.

Deploy notes
1. Connect this repo to Vercel (Import Project) and deploy (static pages).  
2. If you later add server endpoints, set SUPABASE_SERVICE_ROLE_KEY in Vercel Project > Environment Variables (server-only).  
3. To run the SQL, open Supabase → SQL Editor and run supabase/schema.sql.  

Links & products
- Demo sites and product links are included in /pages/templates.html and /pages/products.html. Use UTM parameters on outbound links for tracking.

Security
- Do not commit service role keys or any secret to this repo.  
- All admin actions that modify users must run server-side using the service role key.

If you want changes to copy wording, color, or add more pages, tell me and I will update the branch.
