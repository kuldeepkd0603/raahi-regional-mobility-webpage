import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/ui/BackToTop";
import NotifySection from "@/components/sections/NotifySection";
import FAQSection from "@/components/sections/FAQSection";
import { Mail, MapPin, MessageCircle } from "lucide-react";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Raahi | Get in Touch",
  description: "Contact Raahi Regional Mobility for questions about our platform, launch plans, or how to get involved as a passenger or driver.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="w-full overflow-x-hidden">
        <div className="bg-gradient-to-br from-[#071B43] to-[#0B2D66] pt-28 pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-5">
              <MessageCircle className="w-4 h-4 text-[#00C7F7]" />
              <span className="text-sm text-blue-200 font-medium">Contact Us</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold text-white mb-5 leading-tight">
              Get in Touch with Raahi
            </h1>
            <p className="text-lg text-blue-200 max-w-2xl mx-auto">
              Have a question about our platform, launch plans, or how to get involved? We'd love to hear from you.
            </p>
          </div>
        </div>

        {/* Contact info */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="p-8 rounded-2xl bg-[#F3F8FF] border border-blue-100">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6 text-[#0878E8]" />
                </div>
                <h3 className="text-lg font-bold text-[#071B43] mb-2">Email Us</h3>
                <p className="text-gray-600 text-sm mb-3">For general enquiries and information about Raahi.</p>
                <a href="mailto:contact@raahi.in" className="text-[#0878E8] font-semibold hover:underline">
                  contact@raahi.in
                </a>
              </div>
              <div className="p-8 rounded-2xl bg-[#F3F8FF] border border-blue-100">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-[#0878E8]" />
                </div>
                <h3 className="text-lg font-bold text-[#071B43] mb-2">Our Coverage Area</h3>
                <p className="text-gray-600 text-sm mb-3">Initially serving passengers and drivers in:</p>
                <div className="space-y-1">
                  {["Ujjain, Madhya Pradesh", "Indore, Madhya Pradesh", "Dewas, Madhya Pradesh"].map(c => (
                    <div key={c} className="flex items-center gap-2 text-sm text-[#172B4D] font-medium">
                      <span className="w-1.5 h-1.5 bg-[#0878E8] rounded-full" />
                      {c}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-orange-50 border border-orange-200 text-center">
              <p className="text-orange-700 text-sm">
                <span className="font-semibold">Please note:</span> Raahi is currently in its pre-launch phase. We are not yet operational and do not have a public office address. All contact is through our online channels. Contact details will be updated at launch.
              </p>
            </div>
          </div>
        </section>

        <FAQSection />
        <NotifySection />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
