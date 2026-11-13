RAAHI REGIONAL MOBILITY – WEBSITE CONFIGURATION GUIDE
=======================================================

## DATABASE INTEGRATION (Launch Notify Form)

The form at /api/launch-notify is integration-ready.
To store form submissions, follow these steps:

### Option A: Supabase (Recommended)
1. Create a Supabase account at https://supabase.com
2. Create a new project
3. Run this SQL in Supabase SQL editor:

   CREATE TABLE launch_registrations (
     id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
     full_name TEXT NOT NULL,
     mobile TEXT NOT NULL,
     city TEXT NOT NULL,
     interest TEXT NOT NULL CHECK (interest IN ('passenger', 'driver')),
     email TEXT,
     registered_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
   );

4. Get your project URL and service role key from Settings → API
5. Add to .env.local:
   SUPABASE_URL=https://your-project.supabase.co
   SUPABASE_SERVICE_KEY=your-service-role-key

6. Install Supabase client:
   pnpm add @supabase/supabase-js

7. Uncomment Option A in app/api/launch-notify/route.ts

### Option B: MongoDB Atlas
1. Create an account at https://mongodb.com/atlas
2. Create a cluster and get your connection string
3. Add to .env.local:
   MONGODB_URI=mongodb+srv://user:password@cluster.mongodb.net/raahi
4. Install driver: pnpm add mongodb
5. Uncomment Option B in app/api/launch-notify/route.ts


## ENVIRONMENT VARIABLES (.env.local)

Create this file in website/ (never commit to git):

# Database (choose one)
SUPABASE_URL=
SUPABASE_SERVICE_KEY=
MONGODB_URI=

# Optional: Google Analytics
NEXT_PUBLIC_GA_ID=

# App URL (for production)
NEXT_PUBLIC_APP_URL=https://www.raahi.in


## VERCEL DEPLOYMENT

1. Push code to GitHub:
   cd c:\regional-mobility
   git add website/
   git commit -m "feat: add Raahi website"
   git push

2. Go to https://vercel.com and import your repository

3. Set "Root Directory" to: website

4. Add Environment Variables in Vercel dashboard (Settings → Environment Variables)

5. Deploy!

6. Connect your domain (raahi.in):
   - Go to Vercel project → Settings → Domains
   - Add raahi.in and www.raahi.in
   - Update your domain DNS to point to Vercel


## MISSING ASSETS TO ADD LATER

When you have app screenshots ready, add them to:
  public/assets/passenger/
    passenger-dashboard.png
    passenger-booking.png
    passenger-tracking.png

  public/assets/driver/
    driver-dashboard.png
    driver-ride-request.png
    driver-earnings.png

Then update the relevant components to use these real screenshots.


## SOCIAL MEDIA LINKS

Update in components/layout/Footer.tsx:
  Instagram: https://instagram.com/raahi.in
  Facebook:  https://facebook.com/raahi.in
  Twitter:   https://twitter.com/raahi_in
  YouTube:   https://youtube.com/@raahi


## CUSTOM DOMAIN EMAIL

Set up contact@raahi.in through:
  - Zoho Mail (free): https://zoho.com/mail
  - Google Workspace: https://workspace.google.com
