"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  ChevronRight,
  Shield,
  Clock,
  Sparkles,
  ArrowRight,
  Navigation,
  CheckCircle2,
  Car,
  Compass,
  Smartphone,
} from "lucide-react";
import AppPhoneMockup from "@/components/ui/AppPhoneMockup";

const passengerScreens = [
  { id: 1, title: "Book Ride", src: "/assets/passenger/passenger_screen_1.png", tag: "Home & Booking" },
  { id: 2, title: "Select Route", src: "/assets/passenger/passenger_screen_2.png", tag: "Route Picker" },
  { id: 3, title: "Compare Fares", src: "/assets/passenger/passenger_screen_3.png", tag: "Fare Estimation" },
  { id: 4, title: "Live Tracking", src: "/assets/passenger/passenger_screen_4.png", tag: "Trip Tracking" },
];

export default function HeroSection() {
  const [activeScreen, setActiveScreen] = useState(0);

  return (
    <section className="relative w-full overflow-hidden bg-[#071B43] pt-24 pb-16 lg:pt-32 lg:pb-24">
      {/* Background Gradient Base */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#071B43] via-[#0B2D66] to-[#071B43]" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#00C7F7" strokeWidth="0.5" strokeDasharray="2 4" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>
      </div>

      {/* Glow Orbs (Strictly bounded with overflow-hidden) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[36rem] h-[36rem] bg-[#0878E8]/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-[#00C7F7]/15 rounded-full blur-[100px] pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: HERO CONTENT (7 cols) */}
          <div className="lg:col-span-7 text-left space-y-6">
            
            {/* Brand Logo & Launch City Badge */}
            <div className="flex flex-wrap items-center gap-4">
              <div className="relative h-14 sm:h-16 w-44 sm:w-52">
                <Image
                  src="/assets/brand/raahi_logo_light.png"
                  alt="Raahi – Regional Mobility"
                  width={208}
                  height={64}
                  className="h-full w-auto object-contain"
                  priority
                />
              </div>
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md">
                <span className="flex h-2.5 w-2.5 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF9418] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#FF9418]"></span>
                </span>
                <span className="text-xs sm:text-sm font-semibold tracking-wide text-blue-100">
                  Opening Soon · Ujjain · Indore · Dewas
                </span>
              </div>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
                Your City.{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C7F7] via-[#0878E8] to-blue-300">
                  Your Ride.
                </span>{" "}
                <br />
                Your Way.
              </h1>
              <p className="text-xl sm:text-2xl font-bold text-[#FF9418] tracking-tight">
                Introducing Raahi – A Smarter Way to Move.
              </p>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-blue-100/90 max-w-2xl leading-relaxed">
              One connected regional mobility platform designed to bring passengers and drivers closer. From everyday city rides to intercity journeys and religious travel, Raahi is building a better way to move.
            </p>

            {/* 3 Value Pillars */}
            <div className="grid grid-cols-3 gap-2.5 sm:gap-4 max-w-xl">
              <div className="p-3 sm:p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="text-xs text-blue-300 font-medium">Local Rides</div>
                <div className="text-sm sm:text-base font-bold text-white">City Mobility</div>
              </div>
              <div className="p-3 sm:p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="text-xs text-[#00C7F7] font-medium">Intercity</div>
                <div className="text-sm sm:text-base font-bold text-white">City to City</div>
              </div>
              <div className="p-3 sm:p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="text-xs text-[#FF9418] font-medium">Religious</div>
                <div className="text-sm sm:text-base font-bold text-white">Pilgrim Tours</div>
              </div>
            </div>

            {/* Call to Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <Link
                href="#about"
                className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#0878E8] to-[#00C7F7] text-white font-bold text-base shadow-lg shadow-blue-500/25 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>Explore Platform</span>
                <ChevronRight className="w-5 h-5" />
              </Link>
              <Link
                href="#notify"
                className="flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-base border border-white/20 backdrop-blur-md transition-all"
              >
                <span className="w-2 h-2 rounded-full bg-[#FF9418] animate-pulse" />
                <span>Join Launch Updates</span>
              </Link>
            </div>

            {/* Launching in note */}
            <div className="flex items-center gap-2 text-xs sm:text-sm text-blue-200/80 pt-1">
              <MapPin className="w-4 h-4 text-[#FF9418] shrink-0" />
              <span>Initial focus on <strong>Ujjain</strong>, <strong>Indore</strong> & <strong>Dewas</strong></span>
            </div>
          </div>

          {/* RIGHT COLUMN: REAL APP SHOWCASE (5 cols) */}
          <div className="lg:col-span-5 relative flex flex-col items-center justify-center">
            
            {/* Interactive Screen Selector Pills */}
            <div className="flex items-center justify-center gap-1.5 p-1 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md mb-5 w-full max-w-[320px]">
              {passengerScreens.map((screen, idx) => (
                <button
                  key={screen.id}
                  onClick={() => setActiveScreen(idx)}
                  className={`flex-1 py-1.5 px-2 rounded-xl text-[11px] font-bold transition-all ${
                    activeScreen === idx
                      ? "bg-[#0878E8] text-white shadow-sm"
                      : "text-blue-200 hover:text-white"
                  }`}
                >
                  {screen.title}
                </button>
              ))}
            </div>

            {/* The Real Phone Mockup with Actual App Screen */}
            <div className="relative w-full flex items-center justify-center">
              {/* Floating App Badge */}
              <div className="absolute -top-3 left-4 sm:-left-4 z-30 px-3 py-1 rounded-full bg-[#0878E8] text-white text-[11px] font-bold shadow-lg border border-white/30 flex items-center gap-1.5">
                <Smartphone className="w-3.5 h-3.5" />
                <span>Raahi Passenger App</span>
              </div>

              {/* Real Phone Mockup */}
              <AppPhoneMockup
                src={passengerScreens[activeScreen].src}
                alt={`Raahi Passenger App - ${passengerScreens[activeScreen].tag}`}
                priority
              />

              {/* Floating Verified Feature Pill */}
              <div className="absolute -bottom-3 right-4 sm:-right-4 z-30 px-3.5 py-1.5 rounded-2xl bg-white/95 text-[#071B43] text-xs font-bold shadow-xl border border-gray-100 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span>{passengerScreens[activeScreen].tag}</span>
              </div>
            </div>

            <p className="text-center text-xs text-blue-200/70 mt-4">
              Actual Raahi Passenger App screens · Preparing for public release
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
