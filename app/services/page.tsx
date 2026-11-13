import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/ui/BackToTop";
import ServicesSection from "@/components/sections/ServicesSection";
import VehiclesSection from "@/components/sections/VehiclesSection";
import NotifySection from "@/components/sections/NotifySection";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services | Raahi – Local, Intercity & Religious Travel",
  description: "Raahi offers local city rides, intercity travel, religious pilgrimage tours, and scheduled bookings in Ujjain, Indore, and Dewas.",
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="w-full overflow-x-hidden">
        <div className="bg-gradient-to-br from-[#071B43] to-[#0B2D66] pt-28 pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-5">
              <span className="w-2 h-2 rounded-full bg-[#00C7F7]" />
              <span className="text-sm text-blue-200 font-medium">Our Services</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold text-white mb-5 leading-tight">
              Mobility for Every Kind of Journey
            </h1>
            <p className="text-lg text-blue-200 max-w-2xl mx-auto leading-relaxed">
              Whether you need a quick city ride, an intercity journey, or comfortable transport for a religious pilgrimage, Raahi is designed to serve every kind of travel.
            </p>
          </div>
        </div>
        <ServicesSection />
        <VehiclesSection />
        <NotifySection />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
