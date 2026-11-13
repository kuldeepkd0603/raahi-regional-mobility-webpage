"use client";

import {
  Car, MapPin, ArrowRightLeft, Star, Calendar, RotateCcw,
  Wallet, Users, FileText, Navigation, History, TrendingUp,
  Smartphone, Shield, Clock, Zap
} from "lucide-react";

const features = [
  { icon: Car, title: "Smart Ride Booking", desc: "Seamless ride booking with just a few taps, designed for speed and simplicity.", color: "text-[#0878E8]", bg: "bg-blue-50" },
  { icon: MapPin, title: "Local City Rides", desc: "Comfortable and affordable transportation within your city, available when you need it.", color: "text-[#00C7F7]", bg: "bg-cyan-50" },
  { icon: ArrowRightLeft, title: "Intercity Travel", desc: "Connect cities with planned, flexible journey options for longer routes.", color: "text-purple-600", bg: "bg-purple-50" },
  { icon: Star, title: "Religious Tours", desc: "Specially designed travel for sacred destinations and pilgrimage journeys.", color: "text-[#FF9418]", bg: "bg-orange-50" },
  { icon: Calendar, title: "Scheduled Bookings", desc: "Plan ahead and schedule your rides in advance for complete peace of mind.", color: "text-green-600", bg: "bg-green-50" },
  { icon: RotateCcw, title: "One-Way & Round Trips", desc: "Flexible trip options to match every type of journey requirement.", color: "text-[#0878E8]", bg: "bg-blue-50" },
  { icon: Wallet, title: "Fare Estimation", desc: "Get transparent fare estimates before confirming, with no hidden charges.", color: "text-emerald-600", bg: "bg-emerald-50" },
  { icon: Users, title: "Driver Availability", desc: "Real-time driver availability visibility to help you plan your journey better.", color: "text-[#00C7F7]", bg: "bg-cyan-50" },
  { icon: FileText, title: "Ride Management", desc: "Manage active bookings, track trips, and access booking details with ease.", color: "text-indigo-600", bg: "bg-indigo-50" },
  { icon: Navigation, title: "GPS & Location Services", desc: "Location-based services for accurate pickup, drop-off, and navigation.", color: "text-red-500", bg: "bg-red-50" },
  { icon: History, title: "Trip History", desc: "Complete history of your journeys available in the app for reference.", color: "text-[#FF9418]", bg: "bg-orange-50" },
  { icon: TrendingUp, title: "Driver Earnings", desc: "Drivers can track their earnings, trip statistics, and performance metrics.", color: "text-green-600", bg: "bg-green-50" },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="w-full py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-5">
            <Zap className="w-4 h-4 text-[#0878E8]" />
            <span className="text-sm text-[#0878E8] font-semibold">Platform Features</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#071B43] leading-tight mb-5">
            Everything You Need for a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0878E8] to-[#00C7F7]">
              Better Journey.
            </span>
          </h2>
          <p className="text-gray-600 text-lg">
            Raahi is designed with a comprehensive feature set to serve every kind of traveller and driver across our launch cities.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group p-6 rounded-2xl border border-gray-100 bg-white hover:border-blue-100 hover:bg-[#F3F8FF] transition-all duration-300 card-shadow hover:card-shadow-hover hover:-translate-y-1 flex flex-col justify-between"
              >
                <div className={`w-12 h-12 ${feature.bg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200`}>
                  <Icon className={`w-6 h-6 ${feature.color}`} />
                </div>
                <h3 className="text-base font-bold text-[#071B43] mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{feature.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Bottom note */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-orange-50 border border-orange-200">
            <Clock className="w-4 h-4 text-orange-500" />
            <span className="text-sm text-orange-700 font-medium">
              Feature availability depends on launch phase and service area. Some features are under development.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
