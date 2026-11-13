# Raahi – Regional Mobility Official Website

> **Your City. Your Ride. Your Way.**  
> Official corporate and platform introduction website for **Raahi**, a modern regional Indian mobility technology startup preparing for its grand launch across **Ujjain**, **Indore**, and **Dewas**, Madhya Pradesh.

---

## 📌 Executive Summary

**Raahi** connects passengers and driver partners through dedicated, purpose-built mobile applications. Designed from the ground up to solve the unique challenges of regional Indian transportation, Raahi brings reliable daily city commutes, intercity travel corridors, and sacred pilgrimage journeys under a single, transparent technology platform.

---

## 🎨 Brand Identity & Design System

The website mirrors the visual identity of the Raahi mobile application ecosystem:

* **Primary Palette**:
  * Navy: `#071B43` (Foundation & Primary Driver Theme)
  * Dark Blue: `#0B2D66` (Elevated Panels & Cards)
  * Primary Blue: `#0878E8` (Passenger Brand Identity & Action Buttons)
  * Vibrant Cyan: `#00C7F7` (Interactive Accents & Gradients)
  * Regional Orange: `#FF9418` (Saffron / Pilgrimage Accents & Driver Highlights)
  * Light Background: `#F3F8FF` (Clean, High-Readability Page Background)
* **Typography**: Plus Jakarta Sans, Inter, Manrope (Clean, modern geometric sans-serif).
* **Emblem & Logo Assets**:
  * Light theme: `public/assets/brand/raahi_logo.png` (Navy lettering, orange accents, regional temple & road motif).
  * Dark theme: `public/assets/brand/raahi_logo_light.png` (High-contrast white lettering for dark navy banners & footer).

---

## 🗺️ Website Pages & Information Architecture

The website is architected using **Next.js App Router** with 10 dedicated routes and an API endpoint:

### 1. Home Page (`/`)
* **File**: `app/page.tsx`
* **Purpose**: Comprehensive platform overview and launch announcement.
* **Sections Included**:
  1. **Sticky Navigation Bar (`components/layout/Navbar.tsx`)**:
     * Enlarged brand logo (`h-14 sm:h-16 lg:h-[70px]`), navigation links, *"Grand Opening Soon"* badge, and mobile drawer.
  2. **Hero Section (`components/sections/HeroSection.tsx`)**:
     * Main headline: *"Your City. Your Ride. Your Way."*
     * Supporting pitch: *"Introducing Raahi – A Smarter Way to Move."*
     * Interactive mobile phone chassis cycling through the **4 authentic Raahi Passenger App screens**.
     * Key value pillars: Fixed & Transparent Fares, Local Drivers, Pilgrimage Ready.
  3. **About Raahi (`components/sections/AboutSection.tsx`)**:
     * Explains the regional mobility mission: Local Mobility, Intercity Connectivity, and Religious Journeys.
     * Core company mission and vision statement.
  4. **Two Applications (`components/sections/AppsSection.tsx`)**:
     * Side-by-side showcase comparing the **Passenger App** (Blue/Cyan/White theme) and **Driver App** (Navy/Electric Blue/Orange theme).
     * Interactive passenger screen viewer allowing visitors to preview 4 live app screens.
  5. **Platform Features Grid (`components/sections/FeaturesSection.tsx`)**:
     * 12 core platform capabilities: Smart Ride Booking, Local City Rides, Intercity Travel, Religious Tours, Scheduled Bookings, One-Way & Round Trips, Fare Estimation, Driver Availability, Ride Management, GPS Tracking, Trip History, and Driver Earnings.
  6. **How Raahi Works (`components/sections/HowItWorksSection.tsx`)**:
     * Visual 7-step **Passenger Journey** (Booking to Arrival).
     * Visual 7-step **Driver Partner Journey** (Onboarding to Payout).
  7. **Our Services (`components/sections/ServicesSection.tsx`)**:
     * Overview of the 4 operational pillars: Local Daily Rides, Intercity Corridors, Religious Pilgrimages, and Pre-scheduled Group Journeys.
  8. **Vehicle Fleet Categories (`components/sections/VehiclesSection.tsx`)**:
     * Showcase of vehicle tiers: Hatchbacks (Eeco/WagonR), Sedans (Dzire), SUVs (Ertiga), Premium MPVs (Innova), and Group Minibuses (Urbania).
  9. **Initial Launch Cities (`components/sections/CitiesSection.tsx`)**:
     * Focus cards for **Ujjain** (Mahakal Pilgrimage), **Indore** (Commercial Capital), and **Dewas** (Industrial & Chamunda Mata Tekri).
     * Phase 2 highlight for **Omkareshwar Jyotirlinga**.
  10. **Grand Opening Announcement (`components/sections/GrandOpeningSection.tsx`)**:
      * Centered celebration section with prominent Raahi emblem, launch timeline context, and early-access call-to-action.
  11. **Launch Updates / Early Access Form (`components/sections/NotifySection.tsx`)**:
      * Interactive lead capture form validating Indian mobile numbers (+91) and emails with user-role selection (Passenger vs Driver Partner).
  12. **Technology & Trust Architecture (`components/sections/TechSection.tsx`)**:
      * Security highlights: 256-bit encryption, strict OTP ride verification, 24/7 emergency SOS, and cloud-native reliability.
  13. **Frequently Asked Questions (`components/sections/FAQSection.tsx`)**:
      * Collapsible accordion answering launch timeline, booking mechanics, driver onboarding, and fare policies.
  14. **Footer (`components/layout/Footer.tsx`)**:
      * Enlarged high-contrast logo, regional office details, social channels, and legal links.

---

### 2. About Us (`/about`)
* **File**: `app/about/page.tsx`
* **Purpose**: Details Raahi's regional origin, mission, values, and vision for Central India.
* **Key Content**:
  * Why regional mobility matters: solving fragmented rural-to-urban transport.
  * 4 foundational principles: **Passenger-First Safety**, **Driver Prosperity**, **Regional Pride**, and **Zero Hidden Pricing**.
  * Roadmap for Tier-2 and Tier-3 smart city connectivity.

---

### 3. Passenger App Showcase (`/passenger-app`)
* **File**: `app/passenger-app/page.tsx`
* **Purpose**: In-depth tour of the Raahi Passenger Application.
* **Key Content**:
  * **Real App Screens Showcase**: Hardware-accurate phone mockups featuring the 4 authentic screens:
    1. *Home & Ride Search*: Clean pickup/drop interface with fast location autocomplete.
    2. *Route Selection & Pinpoints*: Precise map rendering and route distance calculator.
    3. *Transparent Fares & Vehicle Choice*: Upfront pricing across Hatchback, Sedan, and SUV.
    4. *Live Ride Status & Tracking*: Real-time GPS driver tracking with vehicle & OTP details.
  * Detailed feature checklist (scheduled rides, emergency contacts, digital payments, trip receipts).
  * App Store & Google Play pre-registration badges (*Coming Soon for Launch*).

---

### 4. Driver App Showcase (`/driver-app`)
* **File**: `app/driver-app/page.tsx`
* **Purpose**: Dedicated onboarding and value proposition page for commercial driver partners.
* **Key Content**:
  * Why drive with Raahi: Low commission structure, fast daily payouts, local language support.
  * Feature tour: Online/Offline status switch, route optimization, trip heatmaps, and instant earnings summary.
  * Partner onboarding criteria (commercial driver license, vehicle fitness, background verification).
  * Direct link to early driver registration form.

---

### 5. Our Services (`/services`)
* **File**: `app/services/page.tsx`
* **Purpose**: Complete catalog of travel services provided by Raahi.
* **Key Content**:
  * **Local City Rides**: Affordable point-to-point transit for work, shopping, and station drops.
  * **Intercity Corridors**: Seamless travel across Indore, Ujjain, Dewas, and neighboring districts.
  * **Religious & Pilgrimage Travel**: Specialized pilgrim travel packages with waiting time flexibility for Mahakaleshwar, Harsiddhi Mata, and Omkareshwar.
  * **Scheduled & Round Trips**: Planned family travel, airport transfers, and event car rentals.

---

### 6. Launch Cities Guide (`/cities`)
* **File**: `app/cities/page.tsx`
* **Purpose**: Localized travel information for Raahi's launch markets in Madhya Pradesh.
* **Key Content**:
  * **Ujjain**: Temple logistics, Mahakal Lok corridor, Ram Ghat connectivity.
  * **Indore**: Rajwada, Sarafa, 56 Dukan, Devi Ahilyabai Holkar Airport transfers, IT hubs.
  * **Dewas**: Tekri Chamunda Mata Temple, industrial corridor transit.
  * **Phase 2 Expansion**: Omkareshwar, Maheshwar, and Bhopal corridors.

---

### 7. Contact Us (`/contact`)
* **File**: `app/contact/page.tsx`
* **Purpose**: Direct touchpoint for customer support, driver inquiries, and partnership proposals.
* **Key Content**:
  * Interactive contact form with inquiry categorization (Passenger Support, Driver Partnership, Media/Corporate).
  * Office location in Indore / Ujjain.
  * Official contact email (`support@raahi.co.in`) and working hours.

---

### 8. Legal: Privacy Policy (`/privacy-policy`)
* **File**: `app/privacy-policy/page.tsx`
* **Purpose**: Full legal compliance documentation aligned with the Indian Information Technology Act and Digital Personal Data Protection (DPDP) Act.
* **Key Content**:
  * Data collection disclosures (location data, device IDs, transaction history).
  * Data security and retention practices.
  * Passenger and driver privacy rights and grievance officer contact.

---

### 9. Legal: Terms of Service (`/terms`)
* **File**: `app/terms/page.tsx`
* **Purpose**: Terms of use governing the Raahi website and platform.
* **Key Content**:
  * Platform facilitation role.
  * Booking guidelines, cancellation terms, and fair use policies.
  * Code of conduct for passengers and driver partners.

---

### 10. API: Launch Notification Handler (`/api/launch-notify`)
* **File**: `app/api/launch-notify/route.ts`
* **Purpose**: Next.js route handler processing early access launch signups.
* **Specifications**:
  * Request method: `POST`
  * Validation: Zod schema enforcing valid email and Indian 10-digit mobile number (`^[6-9]\d{9}$`).
  * In-memory rate limiting to prevent spam submissions.
  * Pre-configured hook for connecting to PostgreSQL / Supabase / MongoDB.

---

### 11. SEO & Discovery (`/sitemap.xml`, `/robots.txt`)
* **Files**: `app/sitemap.ts`, `app/robots.ts`
* **Specifications**: Automatically generates an XML sitemap and search engine crawler instructions for indexation.

---

## 💻 Tech Stack & Architecture

| Layer | Technology | Version | Purpose |
| :--- | :--- | :--- | :--- |
| **Framework** | Next.js (App Router) | `16.4.6` | Server-rendered & static page optimization |
| **Language** | TypeScript | `5.9.3` | Type safety and robust codebase maintenance |
| **UI Library** | React | `19.0.0` | Component composition |
| **Styling** | Tailwind CSS v4 | `@tailwindcss/postcss` | Utility-first, responsive, zero-runtime CSS |
| **Animations** | Framer Motion | `12.4.7` | Smooth scroll reveals and micro-interactions |
| **Icons** | Lucide React | `1.16.0` | Clean, modern iconography |
| **Forms** | React Hook Form & Zod | `7.54.2` / `4.1.8` | Form state management and schema validation |

---

## 📁 Project Directory Structure

```text
website/
├── app/
│   ├── about/
│   │   └── page.tsx                # About Raahi company page
│   ├── api/
│   │   └── launch-notify/
│   │       └── route.ts            # Early access lead capture API
│   ├── cities/
│   │   └── page.tsx                # Ujjain, Indore, Dewas city guides
│   ├── contact/
│   │   └── page.tsx                # Contact form & office locations
│   ├── driver-app/
│   │   └── page.tsx                # Driver partner portal & onboarding
│   ├── passenger-app/
│   │   └── page.tsx                # Passenger app tour & 4 authentic screens
│   ├── privacy-policy/
│   │   └── page.tsx                # DPDP & IT Act compliant privacy policy
│   ├── services/
│   │   └── page.tsx                # Local, Intercity, Pilgrimage & Group services
│   ├── terms/
│   │   └── page.tsx                # Terms of service & platform guidelines
│   ├── globals.css                 # Tailwind v4 styles & strict overflow containment
│   ├── layout.tsx                  # Root layout with fonts, metadata, and Navbar/Footer
│   ├── page.tsx                    # Master Home page assembling all hero sections
│   ├── robots.ts                   # Search crawler directives
│   └── sitemap.ts                  # Next.js dynamic XML sitemap generator
├── components/
│   ├── layout/
│   │   ├── Footer.tsx              # 4-column footer with enlarged logo & social links
│   │   └── Navbar.tsx              # Sticky header with enlarged brand emblem & mobile drawer
│   ├── sections/
│   │   ├── AboutSection.tsx        # Mission, vision, and core pillars
│   │   ├── AppsSection.tsx         # Passenger vs Driver app interactive showcase
│   │   ├── CitiesSection.tsx       # Initial launch city cards
│   │   ├── FAQSection.tsx          # Collapsible accordion FAQ
│   │   ├── FeaturesSection.tsx     # 12-feature platform grid
│   │   ├── GrandOpeningSection.tsx # Grand opening celebration banner
│   │   ├── HeroSection.tsx         # Hero banner with real phone mockup carousel
│   │   ├── HowItWorksSection.tsx   # Dual passenger & driver journeys
│   │   ├── NotifySection.tsx       # Launch updates form with Zod validation
│   │   ├── ServicesSection.tsx     # 4 mobility service verticals
│   │   ├── TechSection.tsx         # Security & technical infrastructure
│   │   └── VehiclesSection.tsx     # 5 vehicle categories
│   └── ui/
│       └── AppPhoneMockup.tsx      # Realistic smartphone frame with exact 916/1717 ratio
├── public/
│   └── assets/
│       ├── brand/
│       │   ├── raahi_logo.png       # Official logo for light backgrounds
│       │   └── raahi_logo_light.png # Official logo for dark navy backgrounds
│       ├── destinations/           # Ujjain, Indore, Dewas, Omkareshwar imagery
│       ├── passenger/              # 4 real passenger app screenshots
│       └── vehicles/               # Sedan, Hatchback, SUV, MPV, Minibus assets
├── .gitignore                      # Git exclusion rules for node, next, env, and OS files
├── next.config.ts                  # Webpack & Next.js production build config
├── package.json                    # Dependencies & build scripts
├── postcss.config.js               # PostCSS Tailwind plugin configuration
├── README.md                       # Comprehensive documentation (this file)
└── tsconfig.json                   # Strict TypeScript compiler options
```

---

## 🚀 Getting Started & Local Development

### 1. Prerequisites
* **Node.js**: v18.17.0 or higher (v20+ recommended).
* **Package Manager**: `pnpm` (or `npm` / `yarn`).

### 2. Installation
Open your terminal in the website folder:

```powershell
cd c:\regional-mobility\website
pnpm install
```

### 3. Run Development Server
```powershell
pnpm dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Production Build & Verification
To test the production build locally:

```powershell
pnpm run build
pnpm start
```

---

## 🚢 Deployment Guide

### Deploying to Vercel (Recommended)
1. Push the code to a GitHub, GitLab, or Bitbucket repository.
2. In the [Vercel Dashboard](https://vercel.com), click **Add New Project**.
3. Import your repository and set the **Root Directory** to `website`.
4. The build settings will be automatically detected:
   * **Framework Preset**: Next.js
   * **Build Command**: `pnpm run build`
   * **Output Directory**: `.next`
5. Click **Deploy**.

---

## 📄 License & Intellectual Property

Copyright © 2026 **Raahi – Regional Mobility**. All rights reserved.  
All brand assets, application screen designs, and regional mobility trademarks are property of Raahi.
