"use client";

import Image from "next/image";
import { Users, Info } from "lucide-react";

const vehicles = [
  {
    name: "Hatchback",
    image: "/assets/vehicles/hatchback.png",
    realName: "Maruti Eeco",
    seats: "Up to 7 seats",
    desc: "Practical and economical for everyday city rides. Best for small groups and short city trips.",
    tags: ["City Rides", "Budget Friendly"],
    color: "from-blue-50 to-white",
    badge: "bg-blue-100 text-[#0878E8]",
  },
  {
    name: "Sedan",
    image: "/assets/vehicles/sedan.png",
    realName: "Maruti Dzire",
    seats: "4 passengers",
    desc: "Comfortable and stylish for city and intercity journeys. The popular choice for most rides.",
    tags: ["City & Intercity", "Most Popular"],
    color: "from-cyan-50 to-white",
    badge: "bg-cyan-100 text-[#00C7F7]",
  },
  {
    name: "SUV / MUV",
    image: "/assets/vehicles/suv.png",
    realName: "Maruti Ertiga",
    seats: "Up to 7 passengers",
    desc: "Spacious and comfortable for families and larger groups, ideal for intercity and religious travel.",
    tags: ["Family Travel", "Intercity"],
    color: "from-indigo-50 to-white",
    badge: "bg-indigo-100 text-indigo-600",
  },
  {
    name: "MPV / Innova",
    image: "/assets/vehicles/mpv.png",
    realName: "Toyota Innova",
    seats: "Up to 7 passengers",
    desc: "Premium comfort for important journeys. Perfect for religious tours and special occasions.",
    tags: ["Premium", "Religious Tours"],
    color: "from-orange-50 to-white",
    badge: "bg-orange-100 text-[#FF9418]",
  },
  {
    name: "Mini Bus",
    image: "/assets/vehicles/minibus.png",
    realName: "Force Urbania",
    seats: "Up to 17 passengers",
    desc: "For large group travel, corporate bookings, and organized religious pilgrimages.",
    tags: ["Group Travel", "Pilgrimages"],
    color: "from-green-50 to-white",
    badge: "bg-green-100 text-green-600",
  },
];

export default function VehiclesSection() {
  return (
    <section id="vehicles" className="w-full py-20 lg:py-28 bg-[#F3F8FF] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-blue-100 mb-5">
            <span className="w-2 h-2 rounded-full bg-[#0878E8]" />
            <span className="text-sm text-[#0878E8] font-semibold">Vehicle Categories</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#071B43] leading-tight mb-5">
            The Right Vehicle for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0878E8] to-[#00C7F7]">
              Every Journey.
            </span>
          </h2>
          <p className="text-gray-600 text-lg">
            Raahi is designed to offer a range of vehicle categories to suit every travel need and budget.
          </p>
        </div>

        {/* Vehicle cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {vehicles.map((v) => (
            <div
              key={v.name}
              className={`group rounded-3xl overflow-hidden bg-gradient-to-br ${v.color} border border-gray-100 hover:border-blue-100 card-shadow hover:card-shadow-hover hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between`}
            >
              {/* Vehicle image */}
              <div className="relative h-44 overflow-hidden bg-white/50 flex items-center justify-center p-4">
                <Image
                  src={v.image}
                  alt={v.name}
                  width={260}
                  height={150}
                  className="object-contain w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-lg font-bold text-[#071B43]">{v.name}</h3>
                    <p className="text-xs text-gray-500 font-medium">{v.realName}</p>
                  </div>
                  <div className="flex items-center gap-1 px-2 py-1 bg-white rounded-lg border border-gray-100">
                    <Users className="w-3 h-3 text-gray-400" />
                    <span className="text-xs text-gray-600 font-medium">{v.seats}</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">{v.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {v.tags.map((tag) => (
                    <span key={tag} className={`text-xs px-3 py-1 rounded-full font-semibold ${v.badge}`}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="mt-10 flex items-start gap-3 p-5 rounded-2xl bg-white border border-blue-100 max-w-2xl mx-auto">
          <Info className="w-5 h-5 text-[#0878E8] shrink-0 mt-0.5" />
          <p className="text-sm text-gray-600">
            Vehicle availability depends on the service area and launch operations. Specific vehicle models and categories will be confirmed at the time of our grand opening.
          </p>
        </div>
      </div>
    </section>
  );
}
