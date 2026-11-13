"use client";

import { MapPin, Car, ArrowRightLeft, Star, Calendar, Clock } from "lucide-react";

const services = [
  {
    icon: MapPin,
    title: "Local City Rides",
    desc: "Convenient travel within your city. Whether you need a quick ride across town or a comfortable journey to your destination, Raahi connects you with local drivers.",
    features: ["Within city travel", "Quick booking", "Multiple vehicle options", "Fare estimation"],
    color: "from-[#0878E8] to-[#0B2D66]",
    iconBg: "bg-blue-100",
    iconColor: "text-[#0878E8]",
  },
  {
    icon: ArrowRightLeft,
    title: "Intercity Travel",
    desc: "Connect destinations through planned journeys. Travel between Ujjain, Indore, Dewas and beyond with comfortable intercity booking options.",
    features: ["City to city travel", "Flexible scheduling", "One-way options", "Round trip support"],
    color: "from-[#0B2D66] to-[#071B43]",
    iconBg: "bg-indigo-100",
    iconColor: "text-indigo-600",
  },
  {
    icon: Star,
    title: "Religious & Pilgrimage Travel",
    desc: "Travel to important religious destinations with peace of mind. Specially designed for pilgrims visiting Ujjain's Mahakal, Omkareshwar, and other sacred places.",
    features: ["Pilgrimage routes", "Temple destinations", "Group bookings", "Comfortable vehicles"],
    color: "from-[#FF9418] to-orange-600",
    iconBg: "bg-orange-100",
    iconColor: "text-[#FF9418]",
  },
  {
    icon: Calendar,
    title: "Scheduled & Round Trips",
    desc: "Plan your journey in advance. Schedule your rides ahead of time for special occasions, medical appointments, airport transfers, or regular commutes.",
    features: ["Advance booking", "Return trip planning", "Reliable timing", "Pre-confirmed rides"],
    color: "from-[#00C7F7] to-[#0878E8]",
    iconBg: "bg-cyan-100",
    iconColor: "text-[#00C7F7]",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="w-full py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-5">
            <Car className="w-4 h-4 text-[#0878E8]" />
            <span className="text-sm text-[#0878E8] font-semibold">Our Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#071B43] leading-tight mb-5">
            Mobility for Every Kind of{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0878E8] to-[#00C7F7]">
              Journey.
            </span>
          </h2>
          <p className="text-gray-600 text-lg">
            Whatever your travel need, Raahi is being designed to serve every kind of journey across our launch cities.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group rounded-3xl overflow-hidden border border-gray-100 bg-white hover:border-blue-100 transition-all duration-300 card-shadow hover:card-shadow-hover hover:-translate-y-1 flex flex-col justify-between"
              >
                {/* Top gradient bar */}
                <div className={`h-1.5 bg-gradient-to-r ${service.color}`} />
                <div className="p-8 flex-1 flex flex-col justify-between">
                  <div className={`w-14 h-14 ${service.iconBg} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-7 h-7 ${service.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-bold text-[#071B43] mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-5">{service.desc}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {service.features.map((f) => (
                      <div key={f} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#0878E8]" />
                        <span className="text-sm text-gray-600">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Disclaimer */}
        <div className="mt-10 text-center">
          <div className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-orange-50 border border-orange-200">
            <Clock className="w-4 h-4 text-orange-500" />
            <span className="text-sm text-orange-700 font-medium">
              Service availability depends on launch operations. We will update this as we expand.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
