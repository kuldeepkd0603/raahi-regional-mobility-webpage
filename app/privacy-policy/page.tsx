import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Raahi Regional Mobility",
  description: "Privacy Policy for Raahi Regional Mobility – how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main className="w-full overflow-x-hidden">
        <div className="bg-gradient-to-br from-[#071B43] to-[#0B2D66] pt-28 pb-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">Privacy Policy</h1>
            <p className="text-blue-200">Last updated: November 2026</p>
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="space-y-8 text-gray-700 max-w-3xl mx-auto">
            <div className="p-5 bg-orange-50 border border-orange-200 rounded-xl">
              <p className="text-orange-700 text-sm font-medium">
                Raahi Regional Mobility is currently in its pre-launch phase. This Privacy Policy outlines our commitments and planned approach to data handling. It will be updated when our platform launches.
              </p>
            </div>

            {[
              {
                title: "1. Introduction",
                content: "Raahi Regional Mobility ('Raahi', 'we', 'us', or 'our') is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or register your interest in our platform.",
              },
              {
                title: "2. Information We Collect",
                content: "We collect information you voluntarily provide, including: your name, mobile number, email address, city, and your interest in Raahi as a passenger or driver. We may also collect usage data about how you interact with our website.",
              },
              {
                title: "3. How We Use Your Information",
                content: "We use collected information to: notify you about Raahi's launch in your city; communicate platform updates and relevant information; improve our website and services; comply with legal obligations. We will never sell your personal information to third parties.",
              },
              {
                title: "4. Data Security",
                content: "We implement appropriate technical and organisational security measures to protect your personal information against unauthorised access, disclosure, alteration, or destruction.",
              },
              {
                title: "5. Data Retention",
                content: "We retain your personal information only as long as necessary to fulfil the purposes for which it was collected, or as required by applicable law.",
              },
              {
                title: "6. Your Rights",
                content: "You have the right to access, correct, or delete your personal information. You may also withdraw your consent at any time. To exercise these rights, contact us at contact@raahi.in.",
              },
              {
                title: "7. Cookies",
                content: "Our website may use cookies to improve your browsing experience. You can control cookie settings through your browser. Disabling cookies may affect some website functionality.",
              },
              {
                title: "8. Changes to This Policy",
                content: "We may update this Privacy Policy from time to time. We will notify you of significant changes by updating the date at the top of this page.",
              },
              {
                title: "9. Contact",
                content: "For privacy-related questions, contact us at: contact@raahi.in",
              },
            ].map((section) => (
              <div key={section.title} className="border-b border-gray-100 pb-6">
                <h2 className="text-xl font-bold text-[#071B43] mb-3">{section.title}</h2>
                <p className="text-gray-600 leading-relaxed">{section.content}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
