import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/ui/BackToTop";
import NotifySection from "@/components/sections/NotifySection";
import Image from "next/image";
import { User, Car, MapPin, CheckCircle2, Navigation, Wallet, History, Clock, Shield, Star, TrendingUp } from "lucide-react";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Raahi Driver App | Drive, Earn & Manage Rides",
  description: "The Raahi Driver App helps local drivers manage ride requests, availability, trips, and earnings. Join the Raahi driver community in Ujjain, Indore, and Dewas.",
};

const features = [
  { icon: User, label: "Driver Registration", desc: "Register as a driver through the app with a simple onboarding process." },
  { icon: Car, label: "Profile & Vehicle Management", desc: "Manage your driver profile, vehicle details, and documents in one place." },
  { icon: Clock, label: "Go Online / Go Offline", desc: "Full control over your availability — go online when you're ready to accept rides." },
  { icon: MapPin, label: "Service Area Selection", desc: "Set your preferred service area and ride preferences for better matched requests." },
  { icon: Star, label: "New Ride Requests", desc: "Receive real-time ride requests from passengers in your service area." },
  { icon: CheckCircle2, label: "Accept or Reject Rides", desc: "Review trip details before accepting, with full freedom to decline requests." },
  { icon: Navigation, label: "Pickup Navigation", desc: "In-app navigation to guide you to the passenger's pickup location." },
  { icon: Shield, label: "Passenger OTP Verification", desc: "Secure trip start with OTP verification to confirm the right passenger." },
  { icon: Car, label: "Live Trip Management", desc: "Manage active trips, track navigation, and handle trip completion in the app." },
  { icon: Wallet, label: "Earnings Summary", desc: "Track your daily, weekly, and monthly earnings with a clear breakdown." },
  { icon: History, label: "Trip History", desc: "Complete log of all past trips available within the app." },
  { icon: TrendingUp, label: "Driver Profile & Support", desc: "Access your driver rating, performance metrics, and support from the app." },
];

export default function DriverAppPage() {
  return (
    <>
      <Navbar />
      <main className="w-full overflow-hidden">
        {/* Hero */}
        <div className="bg-gradient-to-br from-[#071B43] via-[#0B2D66] to-[#071B43] pt-32 pb-20 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20">
                  <Image src="/assets/brand/driver_app_icon.png" alt="Driver App" width={20} height={20} className="rounded object-contain" />
                  <span className="text-xs sm:text-sm text-blue-200 font-bold">Raahi Driver Partner App</span>
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
                  Drive with Raahi. <br />
                  <span className="text-[#FF9418]">Move Forward.</span>
                </h1>
                <p className="text-base sm:text-lg text-blue-200/90 leading-relaxed max-w-xl">
                  The Raahi Driver App is engineered to help local drivers manage ride requests, availability, trips, and earnings — all from one reliable dashboard.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <div className="flex items-center gap-2 px-5 py-3.5 bg-[#FF9418]/20 rounded-xl border border-[#FF9418]/30">
                    <span className="w-2.5 h-2.5 bg-[#FF9418] rounded-full animate-pulse" />
                    <span className="text-[#FF9418] font-bold text-sm">Driver Registration Coming Soon</span>
                  </div>
                </div>
              </div>
              
              {/* Phone mockup */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full max-w-[280px]">
                  <div className="rounded-[40px] p-2.5 bg-gradient-to-b from-gray-700 via-gray-900 to-black shadow-2xl border-2 border-[#FF9418]/40 phone-shadow">
                    <div className="w-20 h-4 bg-black rounded-full mx-auto mb-2" />
                    <div className="rounded-[32px] overflow-hidden bg-[#071B43] text-left">
                      <div className="bg-[#0B2D66] p-4 border-b border-white/10">
                        <div className="flex items-center justify-between mb-2">
                          <div className="h-6 w-16 relative bg-white/10 rounded-md px-1 py-0.5 flex items-center justify-center">
                            <Image src="/assets/brand/raahi_logo_light.png" alt="Raahi" width={64} height={20} className="h-full w-auto object-contain" />
                          </div>
                          <div className="flex items-center gap-1.5">
                            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                            <span className="text-green-400 text-xs font-bold">ONLINE</span>
                          </div>
                        </div>
                        <div className="text-white font-bold text-sm mb-1">Welcome, Partner!</div>
                        <div className="text-blue-300 text-xs">Ready for new ride requests</div>
                      </div>
                      <div className="p-4 space-y-3">
                        <div className="bg-[#0B2D66] rounded-2xl p-3 border border-[#FF9418]/50 shadow-md">
                          <div className="flex items-center justify-between mb-1.5">
                            <span className="text-xs font-bold text-[#FF9418] flex items-center gap-1">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#FF9418] animate-ping" />
                              New Ride Request
                            </span>
                            <span className="text-sm font-extrabold text-white">₹ 240</span>
                          </div>
                          <div className="text-xs font-bold text-white mb-1">Freeganj ➔ Mahakal Lok</div>
                          <div className="text-[11px] text-blue-300">Pickup: 1.2 km away · 4 mins</div>
                          <div className="grid grid-cols-2 gap-2 mt-2.5">
                            <button className="py-2 rounded-xl bg-white/10 text-gray-300 text-xs font-bold">Decline</button>
                            <button className="py-2 rounded-xl bg-[#FF9418] text-white text-xs font-bold shadow-md">Accept</button>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-center text-xs">
                          <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                            <div className="font-extrabold text-white text-sm">₹ 1,840</div>
                            <div className="text-blue-300 text-[10px]">Today&apos;s Pay</div>
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
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#071B43] mb-4">What the Driver App Offers</h2>
              <p className="text-gray-600 max-w-xl mx-auto">Built for local drivers, every feature is designed to help you earn more and work smarter.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {features.map((f) => {
                const Icon = f.icon;
                return (
                  <div key={f.label} className="p-6 rounded-2xl border border-gray-100 hover:border-orange-100 bg-white hover:bg-orange-50/30 card-shadow hover:card-shadow-hover transition-all duration-200 group">
                    <div className="w-11 h-11 bg-orange-50 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5 text-[#FF9418]" />
                    </div>
                    <h3 className="font-bold text-[#071B43] mb-2">{f.label}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
                  </div>
                );
              })}
            </div>
            <div className="mt-10 p-5 rounded-2xl bg-orange-50 border border-orange-200 text-center max-w-2xl mx-auto">
              <p className="text-sm text-orange-700">
                <span className="font-semibold">Note:</span> Feature availability depends on the launch phase. Some features listed are under development and will be available progressively.
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
