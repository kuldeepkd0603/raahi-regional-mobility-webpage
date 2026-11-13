"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

const faqs = [
  {
    q: "What is Raahi?",
    a: "Raahi is a regional mobility platform being developed to simplify transportation across cities in Madhya Pradesh. It provides two dedicated mobile applications — a Passenger App for booking rides and a Driver App for managing trips — connecting local drivers with travellers for city rides, intercity journeys, and religious travel.",
  },
  {
    q: "Which cities will Raahi launch in?",
    a: "Raahi's initial launch is planned for three cities in Madhya Pradesh: Ujjain, Indore, and Dewas. We also plan to support travel to religious destinations like Omkareshwar. We intend to expand to more cities as the platform grows.",
  },
  {
    q: "Does Raahi have separate Passenger and Driver Apps?",
    a: "Yes. Raahi has two separate mobile applications — the Raahi Passenger App designed for travellers to book and manage rides, and the Raahi Driver App designed for local drivers to manage their availability, receive ride requests, and track their earnings.",
  },
  {
    q: "How can I join as a driver?",
    a: "Driver registration will be available through the Raahi Driver App. When we launch, drivers will be able to register, complete their profile, submit vehicle details, and start accepting ride requests. For now, you can register your interest through the form on this page and we'll notify you when driver registration opens.",
  },
  {
    q: "What types of rides will Raahi support?",
    a: "Raahi is designed to support a range of journey types including local city rides, intercity travel, religious and pilgrimage tours, one-way trips, round trips, and scheduled bookings. Exact service availability will depend on the launch operations in each city.",
  },
  {
    q: "When will Raahi launch?",
    a: "We have not announced a specific launch date. We are currently in the development and preparation phase. Register your interest through the form on this page and you will be among the first to know when we are ready to launch.",
  },
  {
    q: "How can I receive launch updates?",
    a: "Fill in the 'Join Launch List' form on this page with your name, mobile number, and city. We will contact you directly when Raahi launches in your area.",
  },
  {
    q: "Where can I contact Raahi?",
    a: "You can reach us through the Contact page on this website. We are available to answer any questions about the platform, our launch plans, or how you can get involved as a passenger or driver.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="w-full py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-5">
            <HelpCircle className="w-4 h-4 text-[#0878E8]" />
            <span className="text-sm text-[#0878E8] font-semibold">Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#071B43]">
            Got Questions?{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0878E8] to-[#00C7F7]">
              We've Got Answers.
            </span>
          </h2>
        </div>

        {/* FAQ accordion */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                openIndex === i ? "border-[#0878E8] bg-blue-50/50" : "border-gray-100 bg-white hover:border-blue-100"
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 p-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0878E8] rounded-2xl"
                aria-expanded={openIndex === i}
              >
                <span className="font-semibold text-[#071B43] text-sm sm:text-base">{faq.q}</span>
                {openIndex === i ? (
                  <ChevronUp className="w-5 h-5 text-[#0878E8] shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400 shrink-0" />
                )}
              </button>
              {openIndex === i && (
                <div className="px-5 pb-5">
                  <div className="w-full h-px bg-blue-100 mb-4" />
                  <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-gray-500 text-sm">
            Have more questions?{" "}
            <a href="/contact" className="text-[#0878E8] font-semibold hover:underline">
              Contact us
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
