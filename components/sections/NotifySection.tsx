"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { User, Phone, MapPin, ChevronDown, CheckCircle2, AlertCircle, Loader2, Bell } from "lucide-react";
import { cn } from "@/lib/utils";

const schema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters").max(100),
  mobileNumber: z
    .string()
    .regex(/^[6-9]\d{9}$/, "Please enter a valid 10-digit Indian mobile number"),
  city: z.string().min(1, "Please select your city"),
  interest: z.enum(["passenger", "driver"], { message: "Please select your interest" }),
  email: z.string().email("Please enter a valid email").optional().or(z.literal("")),
  consent: z.literal(true, { message: "You must agree to continue" }),
});

type FormData = z.infer<typeof schema>;

const cities = ["Ujjain", "Indore", "Dewas", "Other City in Madhya Pradesh"];

export default function NotifySection() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const interest = watch("interest");

  const onSubmit = async (data: FormData) => {
    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/launch-notify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStatus("success");
        reset();
      } else {
        const body = await res.json().catch(() => ({}));
        setErrorMsg(body.message || "Something went wrong. Please try again.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Network error. Please check your connection and try again.");
      setStatus("error");
    }
  };

  return (
    <section id="notify" className="w-full py-20 lg:py-28 bg-[#F3F8FF] overflow-hidden">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-blue-100 mb-5">
            <Bell className="w-4 h-4 text-[#0878E8]" />
            <span className="text-sm text-[#0878E8] font-semibold">Join the Launch List</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#071B43] mb-4">
            Be the First to Know When{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0878E8] to-[#00C7F7]">
              Raahi Launches.
            </span>
          </h2>
          <p className="text-gray-600">
            Register your interest and we'll notify you when Raahi becomes available in your city.
          </p>
        </div>

        {/* Success state */}
        {status === "success" && (
          <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center mb-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-green-800 mb-2">You're on the list!</h3>
            <p className="text-green-700 text-sm">
              Thank you for registering your interest in Raahi. We'll get in touch with you as soon as we're ready to launch in your city.
            </p>
          </div>
        )}

        {/* Form */}
        {status !== "success" && (
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white rounded-3xl shadow-lg border border-blue-50 p-8 space-y-5"
            noValidate
          >
            {/* Interest selector */}
            <div>
              <label className="block text-sm font-semibold text-[#172B4D] mb-3">
                I am interested as *
              </label>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { value: "passenger", label: "Passenger", icon: "🧳", desc: "I want to book rides" },
                  { value: "driver", label: "Driver", icon: "🚗", desc: "I want to drive & earn" },
                ].map((option) => (
                  <label
                    key={option.value}
                    className={cn(
                      "flex flex-col items-center gap-2 p-4 rounded-xl border-2 cursor-pointer transition-all duration-200",
                      interest === option.value
                        ? option.value === "passenger"
                          ? "border-[#0878E8] bg-blue-50"
                          : "border-[#FF9418] bg-orange-50"
                        : "border-gray-200 hover:border-gray-300"
                    )}
                  >
                    <input
                      type="radio"
                      value={option.value}
                      {...register("interest")}
                      className="sr-only"
                    />
                    <span className="text-2xl">{option.icon}</span>
                    <span className={cn("font-bold text-sm", interest === option.value ? (option.value === "passenger" ? "text-[#0878E8]" : "text-[#FF9418]") : "text-gray-700")}>
                      {option.label}
                    </span>
                    <span className="text-xs text-gray-500 text-center">{option.desc}</span>
                  </label>
                ))}
              </div>
              {errors.interest && (
                <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {errors.interest.message}
                </p>
              )}
            </div>

            {/* Full name */}
            <div>
              <label htmlFor="fullName" className="block text-sm font-semibold text-[#172B4D] mb-2">
                Full Name *
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  id="fullName"
                  type="text"
                  placeholder="Your full name"
                  {...register("fullName")}
                  className={cn(
                    "w-full pl-10 pr-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-[#0878E8]/30 transition-colors",
                    errors.fullName ? "border-red-300 bg-red-50" : "border-gray-200 bg-gray-50 focus:bg-white focus:border-[#0878E8]"
                  )}
                />
              </div>
              {errors.fullName && (
                <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {errors.fullName.message}
                </p>
              )}
            </div>

            {/* Mobile */}
            <div>
              <label htmlFor="mobileNumber" className="block text-sm font-semibold text-[#172B4D] mb-2">
                Mobile Number *
              </label>
              <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center gap-1.5">
                  <span className="text-sm font-medium text-gray-500">🇮🇳 +91</span>
                </div>
                <input
                  id="mobileNumber"
                  type="tel"
                  placeholder="10-digit mobile number"
                  maxLength={10}
                  {...register("mobileNumber")}
                  className={cn(
                    "w-full pl-20 pr-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-[#0878E8]/30 transition-colors",
                    errors.mobileNumber ? "border-red-300 bg-red-50" : "border-gray-200 bg-gray-50 focus:bg-white focus:border-[#0878E8]"
                  )}
                />
              </div>
              {errors.mobileNumber && (
                <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {errors.mobileNumber.message}
                </p>
              )}
            </div>

            {/* City */}
            <div>
              <label htmlFor="city" className="block text-sm font-semibold text-[#172B4D] mb-2">
                Your City *
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <select
                  id="city"
                  {...register("city")}
                  className={cn(
                    "w-full pl-10 pr-10 py-3 rounded-xl border text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-[#0878E8]/30 transition-colors",
                    errors.city ? "border-red-300 bg-red-50" : "border-gray-200 bg-gray-50 focus:bg-white focus:border-[#0878E8]"
                  )}
                >
                  <option value="">Select your city</option>
                  {cities.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>
              {errors.city && (
                <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {errors.city.message}
                </p>
              )}
            </div>

            {/* Email (optional) */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-[#172B4D] mb-2">
                Email Address <span className="text-gray-400 font-normal">(Optional)</span>
              </label>
              <input
                id="email"
                type="email"
                placeholder="your@email.com"
                {...register("email")}
                className={cn(
                  "w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-[#0878E8]/30 transition-colors",
                  errors.email ? "border-red-300 bg-red-50" : "border-gray-200 bg-gray-50 focus:bg-white focus:border-[#0878E8]"
                )}
              />
              {errors.email && (
                <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {errors.email.message}
                </p>
              )}
            </div>

            {/* Consent */}
            <div>
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  {...register("consent")}
                  className="mt-0.5 w-4 h-4 rounded border-gray-300 text-[#0878E8] focus:ring-[#0878E8]"
                />
                <span className="text-sm text-gray-600">
                  I agree to be contacted by Raahi Regional Mobility regarding launch updates and platform information. I understand my data will be used only for this purpose.
                </span>
              </label>
              {errors.consent && (
                <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {errors.consent.message}
                </p>
              )}
            </div>

            {/* Error message */}
            {status === "error" && (
              <div className="flex items-center gap-2 p-4 bg-red-50 border border-red-200 rounded-xl">
                <AlertCircle className="w-4 h-4 text-red-500 shrink-0" />
                <p className="text-sm text-red-600">{errorMsg}</p>
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={status === "loading"}
              className={cn(
                "w-full flex items-center justify-center gap-2 py-4 rounded-xl font-bold text-white transition-all duration-200",
                interest === "driver"
                  ? "bg-[#FF9418] hover:bg-orange-500"
                  : "bg-[#0878E8] hover:bg-[#0B2D66]",
                status === "loading" && "opacity-70 cursor-not-allowed"
              )}
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Registering...
                </>
              ) : (
                <>
                  <Bell className="w-5 h-5" />
                  Join Launch List
                </>
              )}
            </button>

            <p className="text-center text-xs text-gray-400">
              No spam. No fake launch dates. Just real updates when Raahi is ready.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
