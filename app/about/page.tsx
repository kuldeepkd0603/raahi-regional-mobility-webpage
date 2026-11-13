import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/ui/BackToTop";
import AboutSection from "@/components/sections/AboutSection";
import TechSection from "@/components/sections/TechSection";
import CitiesSection from "@/components/sections/CitiesSection";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "About Raahi | Regional Mobility Platform – Ujjain, Indore, Dewas",
  description: "Learn about Raahi – a regional mobility platform being built to connect passengers and drivers across Ujjain, Indore, and Dewas in Madhya Pradesh.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="w-full overflow-x-hidden">
        {/* Page hero */}
        <div className="bg-gradient-to-br from-[#071B43] to-[#0B2D66] pt-28 pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-5">
              <span className="w-2 h-2 rounded-full bg-[#00C7F7]" />
              <span className="text-sm text-blue-200 font-medium">About Raahi</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold text-white mb-5 leading-tight">
              Building a Better Way to Move
            </h1>
            <p className="text-lg text-blue-200 max-w-2xl mx-auto leading-relaxed">
              Raahi is a regional mobility platform being developed to connect passengers and drivers across Madhya Pradesh through a modern, technology-driven approach to transportation.
            </p>
          </div>
        </div>
        <AboutSection />
        <TechSection />
        <CitiesSection />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
