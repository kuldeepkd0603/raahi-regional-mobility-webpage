"use client";

import Image from "next/image";
import Link from "next/link";
import { Bell, Car, ArrowRight, Sparkles } from "lucide-react";

export default function GrandOpeningSection() {
  return (
    <section id="opening" className="w-full py-20 lg:py-28 bg-[#071B43] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#071B43] via-[#0B2D66] to-[#071B43]" />
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <svg viewBox="0 0 1440 500" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
          <path d="M 0 250 Q 360 100 720 250 T 1440 250" fill="none" stroke="#00C7F7" strokeWidth="2" strokeDasharray="10 8" />
          <path d="M 0 350 Q 360 200 720 350 T 1440 350" fill="none" stroke="#0878E8" strokeWidth="2" strokeDasharray="10 8" />
          <circle cx="360" cy="175" r="8" fill="#00C7F7" opacity="0.8" />
          <circle cx="720" cy="250" r="6" fill="#FF9418" opacity="0.8" />
          <circle cx="1080" cy="175" r="8" fill="#00C7F7" opacity="0.8" />
        </svg>
      </div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-[#0878E8]/15 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-56 h-56 bg-[#FF9418]/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Brand Emblem */}
        <div className="flex justify-center mb-6">
          <div className="relative h-28 sm:h-36 w-72 sm:w-96 flex items-center justify-center">
            <Image
              src="/assets/brand/raahi_logo_light.png"
              alt="Raahi Regional Mobility"
              width={384}
              height={144}
              className="h-full w-auto object-contain mx-auto"
            />
          </div>
        </div>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FF9418]/20 border border-[#FF9418]/30 mb-6">
          <Sparkles className="w-4 h-4 text-[#FF9418]" />
          <span className="text-sm text-[#FF9418] font-semibold">Exciting News</span>
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          A New Journey Is{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF9418] to-yellow-300">
            About to Begin!
          </span>
        </h2>

        <p className="text-lg sm:text-xl text-blue-200 max-w-2xl mx-auto mb-6 leading-relaxed">
          Raahi is getting ready to bring a smarter regional mobility experience to Ujjain, Indore and Dewas.
        </p>

        <div className="inline-block mb-12">
          <div className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#00C7F7] to-[#0878E8] tracking-wider uppercase">
            GRAND OPENING COMING SOON
          </div>
          <div className="flex items-center justify-center gap-2 mt-2">
            <div className="w-16 h-px bg-[#0878E8]/50" />
            <span className="w-2 h-2 rounded-full bg-[#FF9418] animate-pulse" />
            <div className="w-16 h-px bg-[#0878E8]/50" />
          </div>
        </div>

        {/* Two cards */}
        <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto mb-12">
          {/* Passenger card */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-left hover:bg-white/15 transition-colors">
            <div className="w-12 h-12 bg-[#0878E8] rounded-xl flex items-center justify-center mb-4">
              <Bell className="w-6 h-6 text-white" />
            </div>
            <div className="text-[#00C7F7] text-xs font-semibold uppercase tracking-wide mb-2">For Passengers</div>
            <h3 className="text-white font-bold text-lg mb-2">Be Among the First</h3>
            <p className="text-blue-200 text-sm leading-relaxed mb-4">
              Be among the first to experience Raahi when we open our doors. Register your interest and we'll notify you at launch.
            </p>
            <Link
              href="/#notify"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#00C7F7] hover:text-white transition-colors"
            >
              Notify Me – Passenger
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Driver card */}
          <div className="bg-[#FF9418]/10 backdrop-blur-sm border border-[#FF9418]/30 rounded-2xl p-6 text-left hover:bg-[#FF9418]/15 transition-colors">
            <div className="w-12 h-12 bg-[#FF9418] rounded-xl flex items-center justify-center mb-4">
              <Car className="w-6 h-6 text-white" />
            </div>
            <div className="text-[#FF9418] text-xs font-semibold uppercase tracking-wide mb-2">For Drivers</div>
            <h3 className="text-white font-bold text-lg mb-2">Join the Driver Community</h3>
            <p className="text-blue-200 text-sm leading-relaxed mb-4">
              Get ready to join the Raahi driver community and start earning. Register your interest and be first in line.
            </p>
            <Link
              href="/#notify"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#FF9418] hover:text-white transition-colors"
            >
              Notify Me – Driver
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <p className="text-blue-400 text-sm">
          No launch date has been announced. Register your interest and we'll keep you updated.
        </p>
      </div>
    </section>
  );
}
