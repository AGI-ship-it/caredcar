import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";

const FAQS = [
  {
    q: "What does the 145-point inspection include?",
    a: "It covers the car's mechanical, electrical, exterior, interior, and safety checks — so you can review the condition clearly before you buy.",
  },
  {
    q: "Do you provide a warranty? What does it cover?",
    a: "Most Cared cars include warranty cover. Our team will confirm exact coverage, duration, mileage limits, and exclusions before you commit.",
  },
  {
    q: "Can I book a test drive? How does it work?",
    a: "Yes. Share your details and preferred car, then we will arrange a showroom slot so you can inspect the vehicle and drive it.",
  },
  {
    q: "Is the vehicle history verified?",
    a: "We verify key history information and share available inspection, ownership, mileage, and service details with you transparently.",
  },
  {
    q: "What finance options are available?",
    a: "Our advisors can explain available finance plans, down payment options, monthly estimates, required documents, and approval next steps.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <PageHero title="Frequently Asked Questions" subtitle="Everything you need to know about buying, selling, and financing with Cared." />

      <main className="flex-1 bg-white py-16">
        <div className="max-w-2xl mx-auto px-4 space-y-3">
          {FAQS.map((faq, i) => (
            <div key={faq.q} className="border border-gray-200 rounded-[10px] overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gray-50 transition"
              >
                <span className="font-semibold text-text-primary">{faq.q}</span>
                <svg
                  className={`w-5 h-5 text-text-brand flex-shrink-0 transition-transform ${openIndex === i ? "rotate-180" : ""}`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === i && (
                <div className="px-6 pb-5 text-text-secondary text-sm leading-relaxed border-t border-gray-100 pt-3">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
