"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin, Calendar, Clock, Car, ArrowRight, CheckCircle2,
  Navigation, Wallet, History, User, Shield, Star, Smartphone
} from "lucide-react";
import AppPhoneMockup from "@/components/ui/AppPhoneMockup";

const passengerFeatures = [
  { icon: MapPin, label: "Easy Ride Booking" },
  { icon: Car, label: "Local City Rides" },
  { icon: Navigation, label: "Intercity Journeys" },
  { icon: Star, label: "Religious Pilgrimages" },
  { icon: Calendar, label: "Scheduled Bookings" },
  { icon: Clock, label: "Round Trips" },
  { icon: Wallet, label: "Fare Estimation" },
  { icon: History, label: "Trip History" },
  { icon: Shield, label: "Live Ride Tracking" },
  { icon: User, label: "Passenger Profile" },
];

const driverFeatures = [
  { icon: User, label: "Driver Registration" },
  { icon: Car, label: "Vehicle Management" },
  { icon: MapPin, label: "Service Area Choice" },
  { icon: Star, label: "Ride Requests Feed" },
  { icon: CheckCircle2, label: "Accept or Reject" },
  { icon: Navigation, label: "Pickup Navigation" },
  { icon: Shield, label: "Passenger OTP Verify" },
  { icon: Wallet, label: "Earnings Summary" },
  { icon: History, label: "Trip History" },
  { icon: Clock, label: "Go Online / Offline" },
];

const realScreens = [
  { id: 1, name: "Home & Search", src: "/assets/passenger/passenger_screen_1.png" },
  { id: 2, name: "Route Selection", src: "/assets/passenger/passenger_screen_2.png" },
  { id: 3, name: "Fare Estimation", src: "/assets/passenger/passenger_screen_3.png" },
  { id: 4, name: "Ride Tracking", src: "/assets/passenger/passenger_screen_4.png" },
];

export default function AppsSection() {
  const [selectedScreen, setSelectedScreen] = useState(0);

  return (
    <section id="apps" className="w-full py-20 lg:py-28 bg-[#F3F8FF] overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-blue-100 mb-4 shadow-sm">
            <Smartphone className="w-4 h-4 text-[#0878E8]" />
            <span className="text-sm text-[#0878E8] font-bold">Two Dedicated Applications</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#071B43] tracking-tight mb-4">
            One Platform.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0878E8] to-[#00C7F7]">
              Two Powerful Apps.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            Raahi separates the passenger and driver experiences into two dedicated applications engineered for their unique needs.
          </p>
        </div>

        {/* 1. RAAHI PASSENGER APP CARD */}
        <div className="mb-14 rounded-3xl overflow-hidden bg-white border border-blue-100 shadow-xl">
          <div className="grid lg:grid-cols-12 gap-8 items-center p-6 sm:p-10 lg:p-12">
            
            {/* Left Content (7 cols) */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-[#0878E8] flex items-center justify-center p-2 shadow-md">
                  <Image
                    src="/assets/brand/passenger_app_icon.png"
                    alt="Passenger App"
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
                <div>
                  <div className="font-extrabold text-[#071B43] text-xl">Raahi Passenger App</div>
                  <div className="text-xs font-semibold text-[#0878E8] uppercase tracking-wider">For Travellers & Commuters</div>
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#071B43] tracking-tight">
                Your Journey Starts with Raahi.
              </h3>
              
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                The Raahi Passenger App is designed to make booking and managing your journeys simple and convenient. From city commutes across Ujjain, Indore, and Dewas to scheduled pilgrimages and intercity trips, travel on your own terms.
              </p>

              {/* Feature Chips */}
              <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 pt-2">
                {passengerFeatures.map((f) => {
                  const Icon = f.icon;
                  return (
                    <div key={f.label} className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                        <Icon className="w-3.5 h-3.5 text-[#0878E8]" />
                      </div>
                      <span className="text-xs sm:text-sm text-gray-700 font-semibold">{f.label}</span>
                    </div>
                  );
                })}
              </div>

              {/* Screen Selector Buttons */}
              <div className="pt-2">
                <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                  Preview Actual App Screens:
                </div>
                <div className="flex flex-wrap gap-2">
                  {realScreens.map((s, idx) => (
                    <button
                      key={s.id}
                      onClick={() => setSelectedScreen(idx)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                        selectedScreen === idx
                          ? "bg-[#0878E8] text-white shadow-sm"
                          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                      }`}
                    >
                      {s.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Link
                  href="/passenger-app"
                  className="flex items-center justify-center gap-2 px-6 py-3.5 bg-[#0878E8] text-white font-bold rounded-xl hover:bg-[#0B2D66] shadow-md transition-colors"
                >
                  <span>Explore Passenger App</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <div className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-gray-200 text-gray-500 font-semibold text-xs">
                  <span className="w-2 h-2 rounded-full bg-[#FF9418] animate-pulse" />
                  <span>Grand Opening Soon · Google Play & App Store</span>
                </div>
              </div>
            </div>

            {/* Right Phone Visual (5 cols) */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              <div className="relative w-full max-w-[280px]">
                <AppPhoneMockup
                  src={realScreens[selectedScreen].src}
                  alt={`Raahi Passenger App - ${realScreens[selectedScreen].name}`}
                />
              </div>
              <span className="text-xs text-gray-500 font-medium mt-3">
                Live Preview: {realScreens[selectedScreen].name}
              </span>
            </div>

          </div>
        </div>

        {/* 2. RAAHI DRIVER APP CARD */}
        <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-[#071B43] to-[#0B2D66] border border-blue-900/60 shadow-2xl text-white">
          <div className="grid lg:grid-cols-12 gap-8 items-center p-6 sm:p-10 lg:p-12">
            
            {/* Left Phone Visual (5 cols) */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center order-2 lg:order-1">
              <div className="relative w-full max-w-[280px]">
                {/* Styled Driver App Device */}
                <div className="relative rounded-[40px] p-2.5 bg-gradient-to-b from-gray-700 via-gray-900 to-black shadow-2xl border-2 border-[#FF9418]/40 phone-shadow">
                  {/* Notch */}
                  <div className="w-20 h-4 bg-black rounded-full mx-auto mb-2" />
                  {/* Driver Screen Display */}
                  <div className="rounded-[32px] overflow-hidden bg-[#071B43] text-left">
                    <div className="bg-[#0B2D66] p-4 border-b border-white/10">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-bold text-[#FF9418]">Raahi Driver Partner</span>
                        <div className="flex items-center gap-1">
                          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                          <span className="text-[10px] font-bold text-green-400">ONLINE</span>
                        </div>
                      </div>
                      <div className="text-[11px] text-blue-200">Today&apos;s Earnings</div>
                      <div className="text-lg font-extrabold text-white">₹ 1,840</div>
                    </div>
                    <div className="p-4 space-y-3">
                      <div className="bg-[#0B2D66] rounded-2xl p-3 border border-[#FF9418]/50 shadow-md">
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-xs font-bold text-[#FF9418] flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#FF9418] animate-ping" />
                            New Trip Request
                          </span>
                          <span className="text-sm font-extrabold text-white">₹ 260</span>
                        </div>
                        <div className="text-xs font-bold text-white mb-1">Freeganj ➔ Mahakal Lok</div>
                        <div className="text-[11px] text-blue-200">Pickup: 1.1 km away · 4 mins</div>
                        <div className="grid grid-cols-2 gap-2 mt-2.5">
                          <button className="py-2 rounded-xl bg-white/10 text-gray-300 text-xs font-bold">Decline</button>
                          <button className="py-2 rounded-xl bg-[#FF9418] text-white text-xs font-bold shadow-md">Accept</button>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-center text-xs">
                        <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                          <div className="font-extrabold text-white text-sm">8</div>
                          <div className="text-blue-300 text-[10px]">Trips Today</div>
                        </div>
                        <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                          <div className="font-extrabold text-green-400 text-sm">4.92 ★</div>
                          <div className="text-blue-300 text-[10px]">Rating</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <span className="text-xs text-blue-200 font-medium mt-3">
                Raahi Driver App Dashboard Preview
              </span>
            </div>

            {/* Right Content (7 cols) */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-6 order-1 lg:order-2">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-[#FF9418] flex items-center justify-center p-2 shadow-md">
                  <Image
                    src="/assets/brand/driver_app_icon.png"
                    alt="Driver App"
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
                <div>
                  <div className="font-extrabold text-white text-xl">Raahi Driver App</div>
                  <div className="text-xs font-semibold text-[#FF9418] uppercase tracking-wider">For Driver Partners</div>
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Drive with Raahi. Move Forward.
              </h3>

              <p className="text-blue-200/90 leading-relaxed text-sm sm:text-base">
                The Raahi Driver App empowers local drivers with transparent trip assignments, fair earnings, flexible working hours, and real-time navigation. Earn more within your city and across regional routes.
              </p>

              {/* Driver Feature Chips */}
              <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 pt-2">
                {driverFeatures.map((f) => {
                  const Icon = f.icon;
                  return (
                    <div key={f.label} className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                        <Icon className="w-3.5 h-3.5 text-[#FF9418]" />
                      </div>
                      <span className="text-xs sm:text-sm text-blue-100 font-semibold">{f.label}</span>
                    </div>
                  );
                })}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Link
                  href="/driver-app"
                  className="flex items-center justify-center gap-2 px-6 py-3.5 bg-[#FF9418] hover:bg-orange-500 text-white font-bold rounded-xl shadow-md transition-colors"
                >
                  <span>Explore Driver App</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <div className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-white/20 text-blue-200 font-semibold text-xs">
                  <span className="w-2 h-2 rounded-full bg-[#FF9418] animate-pulse" />
                  <span>Driver Registration Opening Soon</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
