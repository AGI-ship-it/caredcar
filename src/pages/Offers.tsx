import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import DirhamSymbol from "../components/DirhamSymbol";
import imgOffersHero from "@/imports/offers-hero.jpg";
import PageHero from "../components/PageHero";
import OfferCard from "../components/OfferCard";
import BrandShape from "../components/BrandShape";
import { OFFERS } from "../data/offers";
import ArrowCircle from "../components/ArrowCircle";

export default function Offers() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Hero */}
      <PageHero image={imgOffersHero} imagePosition="70% 38%" title="Limited-Time Special Offers" subtitle="Limited-time deals on premium pre-owned vehicles — transparent pricing, zero hidden fees." />

      {/* Featured Banner */}
      <section className="container-x py-12 w-full">
        <div className="relative overflow-hidden rounded-[24px] bg-bg-inverse px-8 py-8 md:px-12 md:py-10">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_100%_0%,rgba(0,99,255,0.35),transparent_55%)] rtl:-scale-x-100" />
          <span aria-hidden="true" className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r rtl:bg-gradient-to-l from-bg-brand to-bg-accent" />
          <BrandShape variant="split" />
          <div className="relative flex flex-col md:flex-row md:items-center gap-6 md:gap-12">
            <div>
              <span className="inline-flex items-center gap-2.5 text-xs font-semibold tracking-[0.22em] text-text-accent">
                <span aria-hidden="true" className="breathe-dot size-1.5 rounded-full bg-bg-accent" />
                LIMITED TIME
              </span>
              <h2 className="ty-title mt-3 text-3xl md:text-5xl font-bold leading-tight text-white font-display lg:whitespace-nowrap">0% Finance Available</h2>
              <p className="mt-2 text-lg text-white/70">On selected vehicles for 60 months</p>
            </div>
            <Link
              to="/finance#emi-calculator"
              className="group self-start md:self-auto shrink-0 inline-flex items-center gap-3 rounded-full bg-white ps-7 pe-2 py-2 text-sm font-bold text-text-brand transition-colors hover:bg-bg-brand-soft"
            >
              Apply Now
              <ArrowCircle />
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
        <div data-parallax-cards className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
