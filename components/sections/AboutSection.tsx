"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin, Car, ArrowRight, Shield, Clock, Users } from "lucide-react";

const cards = [
  {
    icon: MapPin,
    title: "Local Mobility",
    desc: "Convenient city transportation at your fingertips. Travel within Ujjain, Indore, and Dewas with ease.",
    color: "text-[#0878E8]",
    bg: "bg-blue-50",
  },
  {
    icon: Car,
    title: "Intercity Connectivity",
    desc: "Travel between cities with flexible booking options. Plan your journey across Madhya Pradesh.",
    color: "text-[#00C7F7]",
    bg: "bg-cyan-50",
  },
  {
    icon: Shield,
    title: "Religious Journeys",
    desc: "Convenient travel for pilgrimage destinations. Sacred journeys made comfortable and reliable.",
    color: "text-[#FF9418]",
    bg: "bg-orange-50",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="w-full py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-5">
            <span className="w-2 h-2 rounded-full bg-[#0878E8]" />
            <span className="text-sm text-[#0878E8] font-semibold">About Raahi</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#071B43] leading-tight mb-5">
            More Than a Ride.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0878E8] to-[#00C7F7]">
              A Connected Mobility Experience.
            </span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Raahi is a regional mobility platform being developed to simplify transportation across cities and destinations. Our platform is designed to connect passengers and drivers through dedicated mobile applications and provide convenient access to local rides, intercity journeys, and religious travel.
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="group p-8 rounded-2xl border border-gray-100 hover:border-blue-100 bg-white hover:bg-[#F3F8FF] transition-all duration-300 card-shadow hover:card-shadow-hover flex flex-col justify-between"
              >
                <div className={`w-14 h-14 ${card.bg} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                  <Icon className={`w-7 h-7 ${card.color}`} />
                </div>
                <h3 className="text-xl font-bold text-[#071B43] mb-3">{card.title}</h3>
                <p className="text-gray-600 leading-relaxed">{card.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Mission & Vision */}
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#071B43] to-[#0B2D66] p-8 text-white">
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#0878E8]/20 rounded-full blur-2xl" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 mb-5">
                <Clock className="w-3.5 h-3.5 text-[#00C7F7]" />
                <span className="text-xs text-blue-200 font-semibold uppercase tracking-wide">Our Mission</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Make Regional Transportation Accessible</h3>
              <p className="text-blue-200 leading-relaxed">
                Make regional transportation accessible, convenient, and technology-driven. Connect passengers with drivers through a reliable, technology-driven mobility ecosystem while creating more opportunities for local drivers.
              </p>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#F3F8FF] to-white p-8 border border-blue-100">
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#00C7F7]/10 rounded-full blur-2xl" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200 mb-5">
                <Users className="w-3.5 h-3.5 text-[#0878E8]" />
                <span className="text-xs text-[#0878E8] font-semibold uppercase tracking-wide">Our Vision</span>
              </div>
              <h3 className="text-2xl font-bold text-[#071B43] mb-4">A Connected Mobility Ecosystem</h3>
              <p className="text-gray-600 leading-relaxed">
                Build a connected mobility ecosystem for cities, travellers, and local driver communities. We envision a future where every journey — whether local or intercity — is smooth, reliable, and accessible to all.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
