"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin, Car, ArrowRightLeft, Star } from "lucide-react";

const cities = [
  {
    name: "Ujjain",
    state: "Madhya Pradesh",
    image: "/assets/cities/ujjain.png",
    highlights: ["Local Mobility", "Religious Tourism", "Intercity Connectivity"],
    desc: "The ancient city of Mahakal. Home to the sacred Mahakaleshwar Temple, Ujjain is a major religious and cultural destination.",
    icons: [MapPin, Star, ArrowRightLeft],
    primaryColor: "from-[#0878E8] to-[#0B2D66]",
    badge: "bg-blue-100 text-[#0878E8]",
  },
  {
    name: "Indore",
    state: "Madhya Pradesh",
    image: "/assets/cities/indore.png",
    highlights: ["City Transportation", "Intercity Travel", "Regional Connectivity"],
    desc: "Madhya Pradesh's commercial capital. A fast-growing metropolitan city with strong business and connectivity needs.",
    icons: [Car, ArrowRightLeft, MapPin],
    primaryColor: "from-[#0B2D66] to-[#071B43]",
    badge: "bg-indigo-100 text-indigo-600",
  },
  {
    name: "Dewas",
    state: "Madhya Pradesh",
    image: "/assets/cities/dewas.png",
    highlights: ["Local Transportation", "City-to-City Travel", "Regional Travel"],
    desc: "An emerging industrial and residential city connecting Indore and Ujjain. A key part of the central Madhya Pradesh corridor.",
    icons: [MapPin, Car, ArrowRightLeft],
    primaryColor: "from-[#00C7F7] to-[#0878E8]",
    badge: "bg-cyan-100 text-[#00C7F7]",
  },
];

export default function CitiesSection() {
  return (
    <section id="cities" className="w-full py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-5">
            <MapPin className="w-4 h-4 text-[#0878E8]" />
            <span className="text-sm text-[#0878E8] font-semibold">Launch Cities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#071B43] leading-tight mb-5">
            Starting Local.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0878E8] to-[#00C7F7]">
              Connecting More.
            </span>
          </h2>
          <p className="text-gray-600 text-lg">
            Raahi begins its journey in three key cities of Madhya Pradesh — building a foundation for a larger regional mobility network.
          </p>
        </div>

        {/* City cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {cities.map((city) => (
            <div
              key={city.name}
              className="group rounded-3xl overflow-hidden border border-gray-100 bg-white hover:border-blue-100 card-shadow hover:card-shadow-hover hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between"
            >
              {/* City image */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={city.image}
                  alt={city.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${city.primaryColor} opacity-50`} />
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-2xl font-bold text-white">{city.name}</h3>
                  <div className="flex items-center gap-1.5 text-white/80">
                    <MapPin className="w-3.5 h-3.5" />
                    <span className="text-sm">{city.state}</span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <p className="text-sm text-gray-600 leading-relaxed mb-4">{city.desc}</p>
                <div className="space-y-2.5">
                  {city.highlights.map((h, i) => {
                    const Icon = city.icons[i];
                    return (
                      <div key={h} className="flex items-center gap-2.5">
                        <div className={`w-7 h-7 rounded-lg ${city.badge.replace("text-", "text-").replace("bg-", "bg-")} bg-blue-50 flex items-center justify-center`}>
                          <Icon className={`w-3.5 h-3.5 ${city.badge.split(" ")[1]}`} />
                        </div>
                        <span className="text-sm font-medium text-[#172B4D]">{h}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Omkareshwar mention */}
        <div className="rounded-2xl bg-gradient-to-r from-[#F3F8FF] to-white border border-blue-100 p-6 flex flex-col sm:flex-row gap-5 items-center">
          <div className="relative w-24 h-24 rounded-2xl overflow-hidden shrink-0">
            <Image
              src="/assets/cities/omkareshwar.png"
              alt="Omkareshwar"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <Star className="w-4 h-4 text-[#FF9418]" />
              <span className="text-sm font-semibold text-[#FF9418]">Religious Destination</span>
            </div>
            <h4 className="text-lg font-bold text-[#071B43] mb-1">Omkareshwar, Madhya Pradesh</h4>
            <p className="text-sm text-gray-600">
              One of the twelve sacred Jyotirlinga shrines of India. Raahi plans to support pilgrimage journeys to Omkareshwar from Indore, Ujjain, and Dewas.
            </p>
          </div>
        </div>

        {/* Future expansion note */}
        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm">
            🚀 These are our initial launch cities. We plan to expand to more cities in Madhya Pradesh as we grow.
          </p>
        </div>
      </div>
    </section>
  );
}
