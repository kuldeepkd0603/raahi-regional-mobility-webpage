"use client";

import { Smartphone, MapPin, Shield, Zap } from "lucide-react";

const techPoints = [
  {
    icon: Smartphone,
    title: "Dedicated Mobile Applications",
    desc: "Separate, purpose-built apps for passengers and drivers — each designed around the specific needs of its user.",
    color: "text-[#0878E8]",
    bg: "bg-blue-50",
  },
  {
    icon: MapPin,
    title: "Location-Based Services",
    desc: "GPS-powered location detection, pickup identification, route planning, and navigation support built into both apps.",
    color: "text-[#00C7F7]",
    bg: "bg-cyan-50",
  },
  {
    icon: Zap,
    title: "Real-Time Ride Management",
    desc: "Live ride request delivery, booking status updates, and driver-passenger connectivity for a smooth experience.",
    color: "text-[#FF9418]",
    bg: "bg-orange-50",
  },
  {
    icon: Shield,
    title: "Secure & Reliable Platform",
    desc: "Built with security and reliability at its core — protecting user data and ensuring a trustworthy ride experience.",
    color: "text-green-600",
    bg: "bg-green-50",
  },
];

export default function TechSection() {
  return (
    <section id="technology" className="w-full py-20 lg:py-28 bg-[#F3F8FF] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-blue-100 mb-5">
              <Zap className="w-4 h-4 text-[#0878E8]" />
              <span className="text-sm text-[#0878E8] font-semibold">Our Technology</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#071B43] leading-tight mb-5">
              Built Around Real{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0878E8] to-[#00C7F7]">
                Regional Mobility Needs.
              </span>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Raahi is designed from the ground up around the actual transportation needs of regional Indian cities. Our platform addresses the unique challenges of local mobility, intercity travel, and religious tourism that generic ride-hailing solutions often overlook.
            </p>
            <p className="text-gray-600 leading-relaxed">
              With dedicated Passenger and Driver applications, location-aware services, and a focused booking workflow, Raahi brings modern technology to everyday mobility challenges in Madhya Pradesh.
            </p>
          </div>

          {/* Right feature cards */}
          <div className="grid sm:grid-cols-2 gap-5">
            {techPoints.map((point) => {
              const Icon = point.icon;
              return (
                <div
                  key={point.title}
                  className="bg-white p-6 rounded-2xl border border-gray-100 hover:border-blue-100 card-shadow hover:card-shadow-hover transition-all duration-300 group flex flex-col justify-between"
                >
                  <div className={`w-12 h-12 ${point.bg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-6 h-6 ${point.color}`} />
                  </div>
                  <h3 className="font-bold text-[#071B43] mb-2">{point.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{point.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
