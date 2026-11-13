import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/ui/BackToTop";
import NotifySection from "@/components/sections/NotifySection";
import AppPhoneMockup from "@/components/ui/AppPhoneMockup";
import Image from "next/image";
import {
  MapPin, Car, Calendar, Star, ArrowRightLeft, CheckCircle2,
  Navigation, Wallet, History, User, Shield, Clock, RotateCcw,
  Smartphone, Sparkles
} from "lucide-react";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Raahi Passenger App | Book Local, Intercity & Religious Rides",
  description: "The Raahi Passenger App lets you book local city rides, intercity journeys, and religious travel across Ujjain, Indore, and Dewas. Coming soon.",
};

const screens = [
  {
    num: "01",
    title: "Home & Ride Search",
    desc: "Clean, intuitive home screen to quickly set pickup and drop locations.",
    src: "/assets/passenger/passenger_screen_1.png",
  },
  {
    num: "02",
    title: "Route & Pinpoints",
    desc: "Interactive map navigation with precise pickup locations across your city.",
    src: "/assets/passenger/passenger_screen_2.png",
  },
  {
    num: "03",
    title: "Transparent Fares",
    desc: "Instant upfront fare estimates with Hatchback, Sedan, SUV, and MPV choices.",
    src: "/assets/passenger/passenger_screen_3.png",
  },
  {
    num: "04",
    title: "Live Ride Tracking",
    desc: "Monitor your driver's real-time arrival and track your trip progress safely.",
    src: "/assets/passenger/passenger_screen_4.png",
  },
];

const features = [
  { icon: MapPin, label: "Easy Ride Booking", desc: "Book your ride with just a few taps. Select pickup and destination with ease." },
  { icon: Car, label: "Local City Rides", desc: "Comfortable rides within Ujjain, Indore, and Dewas on demand." },
  { icon: ArrowRightLeft, label: "Intercity Journeys", desc: "Travel between cities with pre-planned intercity booking options." },
  { icon: Star, label: "Religious Tours", desc: "Specially designed travel for Mahakal, Omkareshwar, and other sacred destinations." },
  { icon: Calendar, label: "Scheduled Bookings", desc: "Book rides in advance for important occasions and regular travel." },
  { icon: RotateCcw, label: "Round Trips", desc: "One-way and round-trip options for complete journey flexibility." },
  { icon: Wallet, label: "Fare Estimation", desc: "Get transparent fare estimates before confirming your booking." },
  { icon: Navigation, label: "Driver Tracking", desc: "Track your driver's arrival and monitor your trip in real time." },
  { icon: CheckCircle2, label: "Booking Management", desc: "View, manage, and track all your active and past bookings." },
  { icon: History, label: "Trip History", desc: "Complete history of your journeys available within the app." },
  { icon: Wallet, label: "Payment & Fare Details", desc: "Clear payment breakdown and trip cost information." },
  { icon: User, label: "Passenger Profile", desc: "Manage your profile, preferences, and account information." },
];

export default function PassengerAppPage() {
  return (
    <>
      <Navbar />
      <main className="w-full overflow-hidden">
        
        {/* Hero */}
        <div className="bg-gradient-to-br from-[#071B43] via-[#0878E8] to-[#0B2D66] pt-32 pb-20 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 border border-white/25 backdrop-blur-md">
                  <Image src="/assets/brand/passenger_app_icon.png" alt="Passenger App" width={20} height={20} className="rounded object-contain" />
                  <span className="text-xs sm:text-sm text-blue-100 font-bold">Raahi Passenger App</span>
                </div>
                
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
                  Your Journey Starts with Raahi.
                </h1>
                
                <p className="text-base sm:text-lg text-blue-100/90 leading-relaxed max-w-xl">
                  The Raahi Passenger App is engineered to make booking and managing your journeys simple and convenient — from quick city rides to sacred religious pilgrimages.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <div className="flex items-center gap-2.5 px-6 py-3.5 bg-white/15 rounded-xl border border-white/20 backdrop-blur-md">
                    <span className="w-2.5 h-2.5 bg-[#FF9418] rounded-full animate-pulse" />
                    <span className="text-white font-bold text-sm">Preparing for Grand Opening</span>
                  </div>
                  <a
                    href="#screens"
                    className="flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-[#071B43] font-bold text-sm rounded-xl shadow-lg hover:bg-blue-50 transition-colors"
                  >
                    <span>View App Screens</span>
                    <Smartphone className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Real Phone Showcase */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full max-w-[280px]">
                  <AppPhoneMockup
                    src="/assets/passenger/passenger_screen_1.png"
                    alt="Raahi Passenger App - Home Screen"
                    priority
                  />
                  <div className="text-center text-xs text-blue-100/70 mt-3 font-medium">
                    Actual Raahi Passenger App Interface
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* 4 REAL SCREENS GALLERY */}
        <section id="screens" className="py-20 lg:py-28 bg-[#F3F8FF] border-b border-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-blue-100 mb-4 shadow-sm">
                <Sparkles className="w-4 h-4 text-[#0878E8]" />
                <span className="text-sm text-[#0878E8] font-bold">Real Application Experience</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#071B43] tracking-tight mb-4">
                Designed for Simplicity & Speed
              </h2>
              <p className="text-gray-600 text-sm sm:text-base">
                Explore the actual screens of the Raahi Passenger App designed to bring seamless mobility to Ujjain, Indore, and Dewas.
              </p>
            </div>

            {/* 4 Phones Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {screens.map((s) => (
                <div
                  key={s.num}
                  className="bg-white rounded-3xl p-5 border border-blue-100 shadow-md flex flex-col justify-between hover:shadow-xl transition-shadow"
                >
                  <div className="mb-4">
                    <span className="text-xs font-mono font-extrabold text-[#0878E8] bg-blue-50 px-2.5 py-1 rounded-lg">
                      SCREEN {s.num}
                    </span>
                    <h3 className="text-lg font-bold text-[#071B43] mt-2 mb-1">{s.title}</h3>
                    <p className="text-xs text-gray-500 leading-relaxed">{s.desc}</p>
                  </div>
                  <div className="w-full max-w-[230px] mx-auto pt-2">
                    <AppPhoneMockup src={s.src} alt={s.title} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#071B43] mb-4">Everything You Need to Move</h2>
              <p className="text-gray-600 max-w-xl mx-auto text-sm sm:text-base">Designed with passenger comfort, safety, and pricing transparency at its core.</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((f) => {
                const Icon = f.icon;
                return (
                  <div
                    key={f.label}
                    className="p-6 rounded-2xl border border-gray-100 hover:border-blue-100 bg-white hover:bg-[#F3F8FF] card-shadow hover:card-shadow-hover transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-[#0878E8]" />
                      </div>
                      <h3 className="font-bold text-[#071B43] mb-2">{f.label}</h3>
                      <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-12 p-5 rounded-2xl bg-orange-50 border border-orange-200 text-center max-w-2xl mx-auto">
              <p className="text-sm text-orange-700 font-medium">
                Feature availability depends on launch operations in each service area. Full functionality will roll out with the grand opening.
              </p>
            </div>
          </div>
        </section>

        <NotifySection />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
