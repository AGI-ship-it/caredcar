import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import DirhamSymbol from "../components/DirhamSymbol";
import imgOffersHero from "@/imports/offers-hero.jpg";
import PageHero from "../components/PageHero";

const OFFER_CARDS = [
  {
    id: 1,
    category: "Finance",
    title: "0% APR Finance",
    description: "Drive away today with zero interest on selected vehicles. Available for up to 60 months with flexible repayment options.",
    validity: "Valid until 31 Oct 2026",
    img: "https://images.unsplash.com/photo-1617615544432-4dfd6b8dbd25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxjYXIlMjBmaW5hbmNlJTIwYnVzaW5lc3MlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzg5MDM3ODYwfDA&ixlib=rb-4.1.0&q=80&w=600",
  },
  {
    id: 2,
    category: "Warranty",
    title: "Free 2-Year Warranty",
    description: "Every car sold comes with a complimentary 2-year comprehensive warranty covering mechanical and electrical components.",
    validity: "On all purchases in Sep 2026",
    img: "https://images.unsplash.com/photo-1618642624018-a370cbf3cd80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxsdXh1cnklMjBjYXIlMjBleHRlcmlvciUyMG9mZmVyJTIwcHJvbW90aW9ufGVufDF8fHx8MTc4OTAzNzg2NXww&ixlib=rb-4.1.0&q=80&w=600",
  },
  {
    id: 3,
    category: "Trade-In",
    title: "AED 5,000 Trade-In Bonus",
    description: "Get AED 5,000 extra on top of your trade-in valuation when you purchase any car from our current stock.",
    validity: "Valid until 15 Oct 2026",
    img: "https://images.unsplash.com/photo-1610099610040-ab19f3a5ec35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXIlMjBleHRlcmlvciUyMG9mZmVyJTIwcHJvbW90aW9ufGVufDF8fHx8MTc4OTAzNzg2NXww&ixlib=rb-4.1.0&q=80&w=600",
  },
  {
    id: 4,
    category: "Service",
    title: "Free Service Package",
    description: "Receive 3 free services including oil change, filter replacement, and full vehicle health check for the first year.",
    validity: "Valid until 30 Nov 2026",
    img: "https://images.unsplash.com/photo-1673166105764-a6aa7e0e73a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxsdXh1cnklMjBjYXIlMjBleHRlcmlvciUyMG9mZmVyJTIwcHJvbW90aW9ufGVufDF8fHx8MTc4OTAzNzg2NXww&ixlib=rb-4.1.0&q=80&w=600",
  },
  {
    id: 5,
    category: "Test Drive",
    title: "Extended Test Drive",
    description: "Take the car home for 48 hours. Experience it in your daily routine before making any commitment.",
    validity: "Available weekends only",
    img: "https://images.unsplash.com/photo-1599912027611-484b9fc447af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxsdXh1cnklMjBjYXIlMjBleHRlcmlvciUyMG9mZmVyJTIwcHJvbW90aW9ufGVufDF8fHx8MTc4OTAzNzg2NXww&ixlib=rb-4.1.0&q=80&w=600",
  },
  {
    id: 6,
    category: "Referral",
    title: "Referral Reward",
    description: "Refer a friend and earn AED 1,000 cash when they complete a purchase. No limit on referrals.",
    validity: "Ongoing offer",
    img: "https://images.unsplash.com/photo-1574023240744-64c47c8c0676?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBkZWFsZXJzaGlwJTIwbHV4dXJ5JTIwc2hvd3Jvb218ZW58MXx8fHwxNzg5MDM3ODU5fDA&ixlib=rb-4.1.0&q=80&w=600",
  },
];

const CATEGORY_COLORS: Record<string, string> = {
  Finance: "bg-blue-100 text-blue-700",
  Warranty: "bg-green-100 text-green-700",
  "Trade-In": "bg-orange-100 text-orange-700",
  Service: "bg-purple-100 text-purple-700",
  "Test Drive": "bg-yellow-100 text-yellow-700",
  Referral: "bg-pink-100 text-pink-700",
};

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
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-2 font-display">0% Finance Available</h2>
            <p className="text-blue-200 text-lg">On selected vehicles for 60 months</p>
          </div>
          <div className="relative z-10 flex-shrink-0">
            <Link
              to="/finance"
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
          <h2 className="text-3xl font-extrabold text-text-brand mb-2 font-display">Current Offers</h2>
          <p className="text-text-secondary">Take advantage of these deals before they expire</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {OFFER_CARDS.map((offer) => (
            <Link
              key={offer.id}
              to="/finance"
              className="group flex flex-col bg-white rounded-[12px] overflow-hidden cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:shadow-[0px_18px_20px_rgba(28,41,88,0.12)]"
            >
              <div className="h-48 overflow-hidden shrink-0">
                <img src={offer.img} alt={offer.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="bg-bg-surface p-5 flex flex-1 flex-col">
                <span className={`self-start text-xs font-bold px-3 py-1 rounded-full ${CATEGORY_COLORS[offer.category] || "bg-gray-100 text-gray-600"}`}>
                  {offer.category}
                </span>
                <h3 className="text-lg font-extrabold text-text-brand mt-3 mb-2">{offer.title}</h3>
                <p className="text-text-secondary text-sm mb-4 leading-relaxed">{offer.description}</p>
                <div className="flex items-center justify-between gap-3 mt-auto">
                  <span className="text-xs text-text-secondary flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {offer.validity}
                  </span>
                  <span className="card-arrow" aria-hidden="true">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M6 18L18 6M8.25 6H18v9.75" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Finance Section */}
      <section className="bg-bg-surface py-16">
        <div className="container-x">
          <h2 className="text-4xl font-extrabold text-text-brand mb-4 flex items-center gap-2 font-display">
            Finance from
            <span className="inline-flex items-center gap-1.5">
              <DirhamSymbol size={26} />
              1,299
            </span>
            <span className="text-text-secondary text-lg font-medium self-end mb-1">/mo</span>
          </h2>
          <p className="text-text-secondary text-lg mb-8 max-w-xl">
            Use our interactive calculator to find a plan that fits your budget. Quick approval, competitive rates.
          </p>
          <div className="bg-white rounded-[16px] shadow p-8 max-w-lg mx-auto mb-8 text-left">
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
            to="/finance"
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
