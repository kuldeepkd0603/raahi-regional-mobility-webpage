"use client";

import { Smartphone, MapPin, Car, CheckCircle2, Navigation, IndianRupee, ArrowRight } from "lucide-react";

const passengerSteps = [
  { icon: Smartphone, title: "Open the Passenger App", desc: "Launch the Raahi Passenger App on your smartphone." },
  { icon: MapPin, title: "Select Pickup & Destination", desc: "Enter your current location and where you want to go." },
  { icon: Car, title: "Choose Your Ride Type", desc: "Pick from Local, Intercity, Religious Tour, or Scheduled options." },
  { icon: IndianRupee, title: "Review Estimated Fare", desc: "See a transparent fare estimate before confirming your booking." },
  { icon: CheckCircle2, title: "Confirm Your Booking", desc: "Confirm and your request is sent to available drivers." },
  { icon: Navigation, title: "Connect with Your Driver", desc: "Track your driver's arrival and get OTP for verification." },
  { icon: CheckCircle2, title: "Complete Your Journey", desc: "Reach your destination and review your trip details." },
];

const driverSteps = [
  { icon: Smartphone, title: "Register Through Driver App", desc: "Download the Raahi Driver App and complete your registration." },
  { icon: CheckCircle2, title: "Complete Your Profile", desc: "Add your vehicle details, documents, and personal information." },
  { icon: MapPin, title: "Set Your Availability", desc: "Choose your service area and go online when you're ready." },
  { icon: Car, title: "Receive Ride Requests", desc: "New ride requests will appear on your screen in real time." },
  { icon: CheckCircle2, title: "Accept a Suitable Request", desc: "Review the ride details and accept requests that work for you." },
  { icon: Navigation, title: "Navigate to Passenger", desc: "Use in-app navigation to reach the passenger's pickup location." },
  { icon: IndianRupee, title: "Complete Trip & View Earnings", desc: "Finish the trip, verify OTP, and track your earnings instantly." },
];

function StepCard({ step, index, color }: { step: typeof passengerSteps[0]; index: number; color: "blue" | "orange" }) {
  const Icon = step.icon;
  return (
    <div className="flex gap-4 group">
      {/* Step number & line */}
      <div className="flex flex-col items-center">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm shrink-0 transition-all duration-200
          ${color === "blue" ? "bg-[#0878E8] text-white group-hover:bg-[#0B2D66]" : "bg-[#FF9418] text-white group-hover:bg-orange-500"}
        `}>
          {index + 1}
        </div>
        {index < 6 && (
          <div className={`w-px flex-1 mt-2 ${color === "blue" ? "bg-blue-100" : "bg-orange-100"}`} />
        )}
      </div>
      {/* Content */}
      <div className="pb-6">
        <div className="flex items-center gap-2 mb-1">
          <Icon className={`w-4 h-4 ${color === "blue" ? "text-[#0878E8]" : "text-[#FF9418]"}`} />
          <h4 className="font-bold text-[#071B43] text-sm">{step.title}</h4>
        </div>
        <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
      </div>
    </div>
  );
}

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="w-full py-20 lg:py-28 bg-[#F3F8FF] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-blue-100 mb-5">
            <span className="w-2 h-2 rounded-full bg-[#0878E8]" />
            <span className="text-sm text-[#0878E8] font-semibold">How Raahi Works</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#071B43] leading-tight">
            Simple Steps.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0878E8] to-[#00C7F7]">
              Smooth Journeys.
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Passenger Journey */}
          <div className="bg-white rounded-3xl p-8 border border-blue-100 shadow-sm">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-[#0878E8] flex items-center justify-center">
                <Smartphone className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="font-bold text-[#071B43] text-lg">Passenger Journey</div>
                <div className="text-sm text-[#0878E8]">From booking to destination</div>
              </div>
            </div>
            <div>
              {passengerSteps.map((step, i) => (
                <StepCard key={step.title} step={step} index={i} color="blue" />
              ))}
            </div>
          </div>

          {/* Driver Journey */}
          <div className="bg-[#071B43] rounded-3xl p-8 border border-blue-900/50">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-[#FF9418] flex items-center justify-center">
                <Car className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="font-bold text-white text-lg">Driver Journey</div>
                <div className="text-sm text-[#FF9418]">From registration to earnings</div>
              </div>
            </div>
            <div>
              {driverSteps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <div key={step.title} className="flex gap-4 group">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-full bg-[#FF9418] flex items-center justify-center font-bold text-sm shrink-0 text-white group-hover:bg-orange-500 transition-colors">
                        {i + 1}
                      </div>
                      {i < 6 && <div className="w-px flex-1 mt-2 bg-orange-900/40" />}
                    </div>
                    <div className="pb-6">
                      <div className="flex items-center gap-2 mb-1">
                        <Icon className="w-4 h-4 text-[#FF9418]" />
                        <h4 className="font-bold text-white text-sm">{step.title}</h4>
                      </div>
                      <p className="text-sm text-blue-300 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
