import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/ui/BackToTop";
import CitiesSection from "@/components/sections/CitiesSection";
import NotifySection from "@/components/sections/NotifySection";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Launch Cities | Raahi – Ujjain, Indore & Dewas",
  description: "Raahi is launching in Ujjain, Indore, and Dewas, Madhya Pradesh. Discover our initial launch cities and what services we plan to offer.",
};

export default function CitiesPage() {
  return (
    <>
      <Navbar />
      <main className="w-full overflow-x-hidden">
        <div className="bg-gradient-to-br from-[#071B43] to-[#0B2D66] pt-28 pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-5">
              <span className="w-2 h-2 rounded-full bg-[#00C7F7]" />
              <span className="text-sm text-blue-200 font-medium">Our Launch Cities</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold text-white mb-5 leading-tight">
              Starting Local. Connecting More.
            </h1>
            <p className="text-lg text-blue-200 max-w-2xl mx-auto leading-relaxed">
              Raahi begins in three key cities of Madhya Pradesh. These are the cities where we are building our foundation for a larger regional mobility network.
            </p>
          </div>
        </div>
        <CitiesSection />
        <NotifySection />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
