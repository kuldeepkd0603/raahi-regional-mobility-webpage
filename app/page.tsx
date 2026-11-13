import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import AppsSection from "@/components/sections/AppsSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import ServicesSection from "@/components/sections/ServicesSection";
import VehiclesSection from "@/components/sections/VehiclesSection";
import CitiesSection from "@/components/sections/CitiesSection";
import GrandOpeningSection from "@/components/sections/GrandOpeningSection";
import NotifySection from "@/components/sections/NotifySection";
import TechSection from "@/components/sections/TechSection";
import FAQSection from "@/components/sections/FAQSection";
import BackToTop from "@/components/ui/BackToTop";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="w-full overflow-x-hidden">
        <HeroSection />
        <AboutSection />
        <AppsSection />
        <FeaturesSection />
        <HowItWorksSection />
        <ServicesSection />
        <VehiclesSection />
        <CitiesSection />
        <GrandOpeningSection />
        <NotifySection />
        <TechSection />
        <FAQSection />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
