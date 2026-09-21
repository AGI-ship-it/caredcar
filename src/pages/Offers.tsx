import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import DirhamSymbol from "../components/DirhamSymbol";
import imgOffersHero from "@/imports/offers-hero.jpg";
import PageHero from "../components/PageHero";
import OfferCard from "../components/OfferCard";
import { OFFERS } from "../data/offers";

export default function Offers() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Hero */}
      <PageHero image={imgOffersHero} imagePosition="70% 38%" title="Exclusive Offers" subtitle="Limited-time deals on premium pre-owned vehicles — transparent pricing, zero hidden fees." />

      {/* Featured Banner */}
      <section className="container-x py-12 w-full">
        <div className="bg-gradient-to-r from-bg-brand to-bg-brand-hover rounded-[12px] p-10 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/4" />
          <div className="absolute bottom-0 left-1/2 w-48 h-48 bg-white/5 rounded-full translate-y-1/2" />
          <div className="relative z-10">
            <div className="inline-block bg-bg-accent text-text-on-accent text-xs font-bold px-3 py-1 rounded-full mb-4">
              LIMITED TIME
            </div>
            <h2 className="ty-title text-4xl md:text-5xl font-bold text-white mb-2 font-display">0% Finance Available</h2>
            <p className="text-blue-200 text-lg">On selected vehicles for 60 months</p>
          </div>
          <div className="relative z-10 flex-shrink-0">
            <Link
              to="/finance#emi-calculator"
              className="inline-block bg-white text-text-brand font-bold px-8 py-4 rounded-full text-sm hover:bg-blue-50 transition shadow-lg"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </section>

      {/* Current Offers */}
      <section className="container-x pb-16 w-full">
        <div className="mb-10">
 <h2 className="ty-h1 ty-title ty-title-gradient mb-2 font-display">Current Offers</h2>
          <p className="text-text-secondary">Take advantage of these deals before they expire</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {OFFERS.map((offer) => (
            <OfferCard key={offer.id} offer={offer} />
          ))}
        </div>
      </section>

      {/* Finance Section */}
      <section className="bg-bg-surface py-16">
        <div className="container-x text-center">
          <h2 className="ty-h1 ty-title ty-title-gradient mb-4 flex items-center justify-center gap-2 font-display">
            Finance from
            <span className="inline-flex items-center gap-1.5">
              <DirhamSymbol size={26} />
              1,299
            </span>
            <span className="text-text-secondary text-lg font-medium self-end mb-1">/mo</span>
          </h2>
          <p className="text-text-secondary text-lg mb-8 max-w-xl mx-auto">
            Use our interactive calculator to find a plan that fits your budget. Quick approval, competitive rates.
          </p>
          <div className="bg-white rounded-[16px] shadow p-8 max-w-lg mx-auto mb-8 text-start">
            <div className="space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-text-secondary">Vehicle Price</span>
                <span className="font-semibold text-text-primary inline-flex items-center gap-1">
                  <DirhamSymbol size={13} />
                  150,000
                </span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full">
                <div className="h-2 bg-bg-brand rounded-full" style={{ width: "30%" }} />
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-text-secondary">Down Payment</span>
                <span className="font-semibold text-text-primary inline-flex items-center gap-1">
                  <DirhamSymbol size={13} />
                  30,000 (20%)
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-text-secondary">Duration</span>
                <span className="font-semibold text-text-primary">60 months</span>
              </div>
              <div className="border-t pt-4 flex justify-between items-center">
                <span className="text-text-secondary font-medium">Monthly Payment</span>
                <span className="text-2xl font-bold text-text-brand inline-flex items-center gap-1.5">
                  <DirhamSymbol size={18} color="var(--color-text-brand)" />
                  2,199
                </span>
              </div>
            </div>
          </div>
          <Link
            to="/finance#emi-calculator"
            className="inline-block bg-bg-brand text-white font-bold px-8 py-4 rounded-full hover:bg-bg-brand-hover transition"
          >
            Try Full Calculator
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
