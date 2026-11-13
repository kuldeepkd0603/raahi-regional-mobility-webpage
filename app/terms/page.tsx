import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Raahi Regional Mobility",
  description: "Terms and Conditions for using the Raahi Regional Mobility platform and website.",
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="w-full overflow-x-hidden">
        <div className="bg-gradient-to-br from-[#071B43] to-[#0B2D66] pt-28 pb-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">Terms & Conditions</h1>
            <p className="text-blue-200">Last updated: November 2026</p>
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="space-y-8 text-gray-700">
            <div className="p-5 bg-orange-50 border border-orange-200 rounded-xl">
              <p className="text-orange-700 text-sm font-medium">
                Raahi Regional Mobility is currently in its pre-launch phase. These Terms & Conditions govern your use of this website and registration of interest. Full platform terms will be published at launch.
              </p>
            </div>

            {[
              {
                title: "1. Acceptance of Terms",
                content: "By accessing or using the Raahi Regional Mobility website, you agree to be bound by these Terms & Conditions. If you do not agree with any part of these terms, please do not use our website.",
              },
              {
                title: "2. Use of This Website",
                content: "This website is provided for informational purposes about the Raahi platform, which is currently in development. You may use this website to learn about Raahi and register your interest in our upcoming launch. You may not use this website for any unlawful purpose or in any way that could damage, disable, or impair the website.",
              },
              {
                title: "3. Launch Registration",
                content: "By submitting your details through our launch registration form, you consent to being contacted by Raahi with platform updates and launch information. We will use your information only for the purposes stated in our Privacy Policy.",
              },
              {
                title: "4. No Operational Services",
                content: "Raahi is currently in its pre-launch and development phase. We do not currently operate any ride-hailing or transportation services. Nothing on this website should be interpreted as a commitment to provide any specific service at any specific time.",
              },
              {
                title: "5. Accuracy of Information",
                content: "We strive to ensure the information on this website is accurate and up to date. However, as we are in development, platform features, service areas, and operational details are subject to change without notice.",
              },
              {
                title: "6. Intellectual Property",
                content: "All content on this website, including text, graphics, logos, and images, is the property of Raahi Regional Mobility and is protected by applicable intellectual property laws. You may not reproduce, distribute, or use our content without prior written permission.",
              },
              {
                title: "7. Third-Party Links",
                content: "Our website may contain links to third-party websites. We are not responsible for the content or privacy practices of those sites. We encourage you to review the terms and privacy policies of any third-party sites you visit.",
              },
              {
                title: "8. Limitation of Liability",
                content: "To the fullest extent permitted by law, Raahi Regional Mobility shall not be liable for any indirect, incidental, or consequential damages arising from your use of this website.",
              },
              {
                title: "9. Changes to Terms",
                content: "We reserve the right to update these Terms & Conditions at any time. Changes will be effective upon posting to this page. Continued use of the website after changes constitutes acceptance of the revised terms.",
              },
              {
                title: "10. Governing Law",
                content: "These Terms & Conditions are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Madhya Pradesh, India.",
              },
              {
                title: "11. Contact",
                content: "For questions about these Terms & Conditions, contact us at: contact@raahi.in",
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
