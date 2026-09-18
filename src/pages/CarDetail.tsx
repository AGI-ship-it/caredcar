import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import SmartImage from "../components/SmartImage";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CarCard from "../components/CarCard";
import DirhamSymbol from "../components/DirhamSymbol";
import SpecIcon from "../components/SpecIcon";
import FavoriteButton from "../components/FavoriteButton";
import EligibilityModal from "../components/EligibilityModal";
import ReserveModal from "../components/ReserveModal";
import PriceDetailsModal from "../components/PriceDetailsModal";
import { useAuth } from "../lib/auth";
import { cars } from "../data/cars";

const TABS = ["Overview", "Features", "Specifications", "Inspection"] as const;
type Tab = (typeof TABS)[number];

// Yearly tenure options (1–5 years), matching the Finance page calculator.
const TENURE_YEARS = [1, 2, 3, 4, 5];

const CONDITION_BADGES = [
  { label: "Great Condition", icon: "sparkle" },
  { label: "Accident-Free", icon: "shield" },
  { label: "Interior Well Kept", icon: "seat" },
  { label: "Service Verified", icon: "wrench" },
] as const;

function ConditionIcon({ type }: { type: string }) {
  if (type === "sparkle") return <svg fill="none" height="18" viewBox="0 0 24 24" width="18"><path d="M12 2l1.8 5.4L19 9l-5.2 1.6L12 16l-1.8-5.4L5 9l5.2-1.6L12 2z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" /></svg>;
  if (type === "shield") return <svg fill="none" height="18" viewBox="0 0 24 24" width="18"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>;
  if (type === "seat") return <svg fill="none" height="18" viewBox="0 0 24 24" width="18"><path d="M7 4v9a3 3 0 003 3h5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" /><path d="M17 12v4a2 2 0 01-2 2H9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" /><circle cx="7" cy="4" r="1.6" stroke="currentColor" strokeWidth="1.4" /></svg>;
  return <svg fill="none" height="18" viewBox="0 0 24 24" width="18"><path d="M14.7 6.3a3 3 0 10-4.24 4.24L4 17l3 3 6.46-6.46a3 3 0 104.24-4.24l-1.5-1.5-1.5 1.5z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

function OverviewIcon({ type }: { type: string }) {
  const common = { fill: "none", stroke: "currentColor", strokeWidth: "1.5" } as const;
  switch (type) {
    case "make": return <svg {...common} height="20" viewBox="0 0 24 24" width="20"><path d="M3 13l2-5a2 2 0 012-1.5h10a2 2 0 012 1.5l2 5" strokeLinecap="round" strokeLinejoin="round" /><rect x="2.5" y="13" width="19" height="6" rx="1.5" /><circle cx="7" cy="19" r="1.4" /><circle cx="17" cy="19" r="1.4" /></svg>;
    case "model": return <svg {...common} height="20" viewBox="0 0 24 24" width="20"><circle cx="12" cy="8" r="4.5" /><path d="M4 20c0-3.5 3.5-6 8-6s8 2.5 8 6" strokeLinecap="round" /></svg>;
    case "price": return <svg {...common} height="20" viewBox="0 0 24 24" width="20"><circle cx="12" cy="12" r="9" /><path d="M9.5 9.5c0-1.1 1.1-2 2.5-2s2.5.9 2.5 2-1.1 1.5-2.5 2-2.5 1-2.5 2.2 1.1 2 2.5 2 2.5-.9 2.5-2" strokeLinecap="round" /></svg>;
    case "year": return <svg {...common} height="20" viewBox="0 0 24 24" width="20"><rect x="3.5" y="5" width="17" height="16" rx="2" /><path d="M8 3v4M16 3v4M3.5 10h17" strokeLinecap="round" /></svg>;
    case "mileage": return <svg {...common} height="20" viewBox="0 0 24 24" width="20"><circle cx="12" cy="13" r="8" /><path d="M12 13l3-3M8 20h8" strokeLinecap="round" /></svg>;
    case "body": return <svg {...common} height="20" viewBox="0 0 24 24" width="20"><path d="M4 16l1.5-5A2.5 2.5 0 018 9h8a2.5 2.5 0 012.5 2l1.5 5" strokeLinecap="round" strokeLinejoin="round" /><rect x="3" y="16" width="18" height="4.5" rx="1.5" /><circle cx="7.5" cy="20.5" r="1.2" /><circle cx="16.5" cy="20.5" r="1.2" /></svg>;
    case "seats": return <svg {...common} height="20" viewBox="0 0 24 24" width="20"><path d="M7 4v9a3 3 0 003 3h5" strokeLinecap="round" /><path d="M17 12v4a2 2 0 01-2 2H9" strokeLinecap="round" /><circle cx="7" cy="4" r="1.6" /></svg>;
    case "fuel": return <svg {...common} height="20" viewBox="0 0 24 24" width="20"><rect x="5" y="4" width="9" height="16" rx="1.5" /><path d="M14 9h2.2L18 11v6a1.5 1.5 0 01-3 0" strokeLinecap="round" strokeLinejoin="round" /></svg>;
    case "spec": return <svg {...common} height="20" viewBox="0 0 24 24" width="20"><rect x="4" y="5" width="9" height="15" rx="1.5" /><path d="M13 9h3l2 2v6a1.5 1.5 0 01-3 0" strokeLinecap="round" strokeLinejoin="round" /></svg>;
    default: return <svg {...common} height="20" viewBox="0 0 24 24" width="20"><rect x="3" y="7" width="15" height="10" rx="2" /><path d="M18 10h2l1 2v3h-3" strokeLinecap="round" strokeLinejoin="round" /></svg>;
  }
}

const FEATURES = [
  "Panoramic Sunroof",
  "Leather Seats",
  "Navigation System",
  "Rear Camera",
  "Heated & Ventilated Seats",
  "Apple CarPlay / Android Auto",
  "Blind Spot Monitoring",
  "Lane Departure Warning",
  "Adaptive Cruise Control",
  "Keyless Entry & Push Start",
  "Premium Sound System",
  "Dual-Zone Climate Control",
];

const INSPECTION_CATEGORIES = [
  "Engine & Transmission",
  "Brakes & Suspension",
  "Electrical System",
  "Interior & Exterior",
  "Tyres & Wheels",
  "Air Conditioning",
  "Fuel System",
  "Safety Systems",
];

export default function CarDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addRecentlyViewed } = useAuth();
  const [activeTab, setActiveTab] = useState<Tab>("Overview");

  const car = cars.find((c) => c.id === id);

  useEffect(() => {
    if (car) addRecentlyViewed(car.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [car?.id]);

  // --- EMI calculator state ---
  const [downPayment, setDownPayment] = useState(() =>
    car ? Math.round(car.price * 0.2) : 0
  );
  const [tenureYears, setTenureYears] = useState(5);
  const tenure = tenureYears * 12;
  const [annualRate, setAnnualRate] = useState(4.5);

  // --- Modal state ---
  const [eligibilityOpen, setEligibilityOpen] = useState(false);
  const [reserveOpen, setReserveOpen] = useState(false);
  const [priceDetailsOpen, setPriceDetailsOpen] = useState(false);

  if (!car) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center bg-white">
          <div className="text-center py-24">
            <h2 className="text-text-brand font-extrabold text-2xl mb-2">Car not found</h2>
            <p className="text-text-secondary mb-6">
              This listing may have been removed or does not exist.
            </p>
            <Link
              to="/buy"
              className="bg-bg-brand text-white px-6 py-3 rounded-full font-semibold text-sm hover:bg-blue-700 transition-colors"
            >
              Back to Inventory
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const similarCars = cars
    .filter(
      (c) =>
        c.id !== car.id &&
        (c.bodyType === car.bodyType || c.make === car.make)
    )
    .slice(0, 3);

  const estimatedHP =
    car.engineSize.includes("V8")
      ? "400 hp"
      : car.engineSize.includes("V6")
      ? "300 hp"
      : car.engineSize.includes("5.6")
      ? "400 hp"
      : car.engineSize.includes("3.")
      ? "260 hp"
      : car.engineSize.includes("2.")
      ? "190 hp"
      : car.engineSize === "Electric"
      ? "283 hp"
      : "150 hp";

  const cylinders =
    car.engineSize.includes("V8")
      ? "8"
      : car.engineSize.includes("V6") || car.engineSize.includes("3.")
      ? "6"
      : car.engineSize === "Electric"
      ? "N/A"
      : "4";

  // --- EMI math ---
  const clampedDown = Math.min(Math.max(downPayment, 0), car.price);
  const principal = car.price - clampedDown;
  const monthlyRate = annualRate / 100 / 12;
  const monthlyPayment =
    monthlyRate === 0
      ? principal / tenure
      : (principal * (monthlyRate * (1 + monthlyRate) ** tenure)) /
        ((1 + monthlyRate) ** tenure - 1);
  const totalPayable = monthlyPayment * tenure + clampedDown;
  const totalInterest = totalPayable - car.price;
  const fmt = (n: number) => Math.round(n).toLocaleString("en-AE");

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 bg-white">
        <div className="container-x pt-[124px] pb-[80px]">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-text-secondary mb-6">
            <Link to="/" className="hover:text-text-brand transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link to="/buy" className="hover:text-text-brand transition-colors">
              Buy
            </Link>
            <span>/</span>
            <span className="text-text-primary font-medium">
              {car.make} {car.model}
            </span>
          </nav>

          {/* Main two-column layout */}
          <div className="flex flex-col md:flex-row gap-8 mb-10">
            {/* Left: images */}
            <div className="flex-1 min-w-0">
              <SmartImage
                key={car.id}
                src={car.image}
                alt={`${car.year} ${car.make} ${car.model}`}
                wrapperClassName="w-full h-80 md:h-[500px] rounded-[12px]"
              />
              {/* Thumbnails */}
              <div className="flex gap-3 mt-3 overflow-x-auto pb-1">
                {[1, 0.85, 0.7, 0.55].map((opacity, i) => (
                  <span key={`${car.id}-${i}`} style={{ opacity }} className="shrink-0 rounded-[8px] cursor-pointer hover:ring-2 hover:ring-border-focus transition-all">
                    <SmartImage
                      src={car.image}
                      alt={`${car.make} ${car.model} view ${i + 1}`}
                      wrapperClassName="w-24 h-16 rounded-[8px]"
                    />
                  </span>
                ))}
              </div>
            </div>

            {/* Right: info card */}
            <div className="w-full md:w-80 shrink-0">
              <div className="bg-bg-surface rounded-[12px] p-6 sticky top-[86px]">
                <p className="text-text-secondary text-sm mb-1">{car.make}</p>
                <h1 className="text-text-brand text-2xl font-extrabold mb-2">
                  {car.year} {car.model}
                </h1>

                {/* Year badge */}
                <span className="inline-block bg-bg-brand-soft text-text-brand text-xs font-semibold px-3 py-1 rounded-full mb-4">
                  {car.year}
                </span>

                {/* Price — total price primary, estimated monthly secondary */}
                <div className="mb-4 flex flex-col gap-1.5">
                  <div className="flex items-center gap-1.5">
                    <DirhamSymbol color="var(--color-text-primary)" size={26} />
                    <p className="text-text-primary text-4xl font-bold leading-none tabular-nums">
                      {car.price.toLocaleString("en-AE")}
                    </p>
                  </div>
                  <p className="text-text-secondary text-sm flex items-center gap-1">
                    Est.
                    <DirhamSymbol color="var(--color-text-secondary)" size={12} />
                    <span className="font-semibold tabular-nums">{car.monthlyPayment.toLocaleString("en-AE")}</span>/mo
                  </p>
                </div>

                <hr className="border-gray-200 mb-4" />

                {/* Quick specs badges */}
                <div className="flex flex-wrap gap-2 mb-5">
                  <span className="bg-bg-brand-soft text-text-primary text-xs px-2.5 py-1 rounded-full inline-flex items-center gap-1">
                    <SpecIcon kind="transmission" />
                    {car.transmission}
                  </span>
                  <span className="bg-bg-brand-soft text-text-primary text-xs px-2.5 py-1 rounded-full inline-flex items-center gap-1">
                    <SpecIcon kind="fuel" />
                    {car.fuelType}
                  </span>
                  <span className="bg-bg-brand-soft text-text-primary text-xs px-2.5 py-1 rounded-full inline-flex items-center gap-1">
                    <SpecIcon kind="body" />
                    {car.bodyType}
                  </span>
                </div>

                {/* CTA buttons */}
                <button
                  onClick={() => setReserveOpen(true)}
                  className="block w-full bg-bg-brand text-white text-center py-3 rounded-full font-semibold text-sm hover:bg-blue-700 transition-colors mb-3"
                >
                  Reserve
                </button>
                <button
                  onClick={() => setPriceDetailsOpen(true)}
                  className="block w-full border border-border-focus text-text-brand text-center py-3 rounded-full font-semibold text-sm hover:bg-bg-brand-soft transition-colors mb-4"
                >
                  Price Details
                </button>

                {/* Favorite */}
                <FavoriteButton
                  carId={car.id}
                  size={18}
                  labels={{ on: "Saved to Favorites", off: "Save to Favorites" }}
                  className="flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary transition-colors"
                />
              </div>
            </div>
          </div>

          {/* Condition Details */}
          <div className="mb-8">
            <h2 className="text-text-brand text-xl font-extrabold mb-4">Condition Details</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {CONDITION_BADGES.map((b) => (
                <div key={b.label} className="flex items-center gap-2 bg-bg-inverse text-white rounded-[10px] px-4 py-3.5">
                  <span className="text-text-accent shrink-0"><ConditionIcon type={b.icon} /></span>
                  <span className="text-sm font-semibold">{b.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Vehicle Overview */}
          <section className="bg-bg-brand-soft rounded-[20px] p-8 mb-16">
            <h2 className="text-text-brand text-2xl font-extrabold mb-2">Vehicle Overview</h2>
            <p className="text-text-secondary mb-6">
              Fully inspected, professionally prepared, and approved to Al Ghurair standards. What you see is exactly what you get.
            </p>
            <div className="bg-white rounded-[16px] p-6">
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-6">
                {[
                  { label: "Make", value: car.make, icon: "make" },
                  { label: "Model", value: car.model, icon: "model" },
                  { label: "Total Price", value: `AED ${car.price.toLocaleString("en-AE")}`, icon: "price" },
                  { label: "Year", value: String(car.year), icon: "year" },
                  { label: "Mileage", value: `${car.mileage.toLocaleString("en-AE")} km`, icon: "mileage" },
                  { label: "Body Type", value: car.bodyType, icon: "body" },
                  { label: "Seat Count", value: "5", icon: "seats" },
                  { label: "Fuel Type", value: car.fuelType, icon: "fuel" },
                  { label: "Regional Spec", value: "GCC Spec", icon: "spec" },
                  { label: "Engine Capacity", value: car.engineSize, icon: "spec" },
                ].map((item) => (
                  <div key={item.label} className="flex flex-col gap-2">
                    <div className="w-11 h-11 rounded-[8px] border border-border-default flex items-center justify-center text-text-brand">
                      <OverviewIcon type={item.icon} />
                    </div>
                    <p className="text-text-primary font-bold text-sm">{item.label}</p>
                    <p className="text-text-secondary text-sm">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* EMI Calculator */}
          <section className="bg-bg-inverse rounded-[20px] p-8 md:p-10 mb-16">
            <div className="mb-8">
              <h2 className="text-white text-3xl font-bold font-display">
                Estimate Your Monthly Payment
              </h2>
              <p className="text-text-on-inverse-secondary text-sm mt-2">
                Adjust the values below to see the EMI for this {car.make} {car.model}, then apply in seconds.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
              {/* Inputs */}
              <div className="bg-white/5 border border-white/15 rounded-[16px] p-6 md:p-7">
                {/* Car price (read-only) */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-text-on-inverse-secondary mb-2">Car Price</label>
                  <div className="flex items-center gap-1.5 bg-white/5 border border-white/15 rounded-[10px] px-4 py-3 text-white text-lg font-bold">
                    <DirhamSymbol size={16} color="#ffffff" />
                    {car.price.toLocaleString("en-AE")}
                  </div>
                </div>

                {/* Down payment */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-sm font-medium text-text-on-inverse-secondary">Down Payment</label>
                    <span className="text-white text-sm font-semibold inline-flex items-center gap-1">
                      <DirhamSymbol size={12} color="#ffffff" />
                      {clampedDown.toLocaleString("en-AE")}
                    </span>
                  </div>
                  <input
                    type="range"
                    min={0}
                    max={car.price}
                    step={1000}
                    value={clampedDown}
                    onChange={(e) => setDownPayment(Number(e.target.value))}
                    className="w-full accent-bg-brand"
                  />
                </div>

                {/* Tenure */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-text-on-inverse-secondary mb-2">Tenure</label>
                  <div className="flex flex-wrap gap-2">
                    {TENURE_YEARS.map((y) => (
                      <button
                        key={y}
                        type="button"
                        onClick={() => setTenureYears(y)}
                        className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
                          tenureYears === y
                            ? "bg-white text-text-primary"
                            : "border border-white/30 text-white hover:bg-white/10"
                        }`}
                      >
                        {y} {y === 1 ? "Year" : "Years"}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Interest rate */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-sm font-medium text-text-on-inverse-secondary">Interest Rate (p.a.)</label>
                    <span className="text-white text-sm font-semibold">{annualRate.toFixed(1)}%</span>
                  </div>
                  <input
                    type="range"
                    min={1}
                    max={12}
                    step={0.1}
                    value={annualRate}
                    onChange={(e) => setAnnualRate(Number(e.target.value))}
                    className="w-full accent-bg-brand"
                  />
                </div>
              </div>

              {/* Result */}
              <div className="bg-white/5 border border-white/15 rounded-[16px] p-6 md:p-7 flex flex-col">
                <p className="text-text-on-inverse-secondary text-sm mb-1">Estimated Monthly Payment</p>
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="inline-flex items-center gap-1.5 text-white text-4xl font-bold font-display">
                    <DirhamSymbol size={26} color="var(--color-text-accent)" />
                    {fmt(monthlyPayment)}
                  </span>
                  <span className="text-text-on-inverse-secondary text-sm">/mo</span>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <span className="text-text-on-inverse-secondary text-sm">Loan Amount</span>
                    <span className="text-white font-semibold inline-flex items-center gap-1">
                      <DirhamSymbol size={12} color="#ffffff" />
                      {fmt(principal)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <span className="text-text-on-inverse-secondary text-sm">Total Interest</span>
                    <span className="text-white font-semibold inline-flex items-center gap-1">
                      <DirhamSymbol size={12} color="#ffffff" />
                      {fmt(totalInterest)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-text-on-inverse-secondary text-sm">Total Payable</span>
                    <span className="text-white font-semibold inline-flex items-center gap-1">
                      <DirhamSymbol size={12} color="#ffffff" />
                      {fmt(totalPayable)}
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setEligibilityOpen(true)}
                  className="mt-auto w-full bg-white text-text-primary font-bold py-3.5 rounded-full hover:bg-bg-brand-soft transition inline-flex items-center justify-center gap-2"
                >
                  Apply With This Plan
                </button>
              </div>
            </div>
          </section>

          {/* Tabs */}
          <div className="mb-8">
            <div className="border border-(--color-text-primary) inline-flex items-center p-[4px] rounded-[99px] flex-wrap">
              {TABS.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className="h-[48px] flex items-center justify-center px-[24px] py-[12px] rounded-[99px] transition-all"
                  style={{ background: activeTab === tab ? "var(--color-bg-inverse)" : "transparent" }}
                >
                  <span
                    className="text-base font-bold leading-[1.5] tracking-[-0.32px] whitespace-nowrap"
                    style={{
                      fontFamily: "var(--font-body)",
                      color: activeTab === tab ? "white" : "rgba(18,42,94,0.6)",
                    }}
                  >
                    {tab}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Tab content */}
          <div className="mb-16">
            {activeTab === "Overview" && (
              <div>
                <p className="text-text-secondary leading-relaxed mb-6">
                  This {car.year} {car.make} {car.model} is a well-maintained pre-owned vehicle
                  available at AG Cars, UAE&apos;s trusted dealership. With{" "}
                  {car.mileage.toLocaleString("en-AE")} km on the odometer, it offers an
                  excellent balance of performance and value. The vehicle has been thoroughly
                  inspected and comes with our 145-point quality guarantee.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {[
                    { label: "Year", value: car.year },
                    {
                      label: "Mileage",
                      value: `${car.mileage.toLocaleString("en-AE")} km`,
                    },
                    { label: "Color", value: car.color },
                    { label: "Engine", value: car.engineSize },
                    { label: "Transmission", value: car.transmission },
                    { label: "Fuel Type", value: car.fuelType },
                  ].map(({ label, value }) => (
                    <div key={label} className="bg-bg-surface rounded-[8px] p-4">
                      <p className="text-text-secondary text-xs mb-1">{label}</p>
                      <p className="text-text-primary font-semibold text-sm">{value}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "Features" && (
              <div>
                <h3 className="text-text-brand font-extrabold text-lg mb-4">
                  Vehicle Features
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {FEATURES.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <span className="w-5 h-5 bg-bg-brand-soft rounded-full flex items-center justify-center shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="var(--color-text-brand)"
                          className="w-3 h-3"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                      <span className="text-text-secondary text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {activeTab === "Specifications" && (
              <div>
                <h3 className="text-text-brand font-extrabold text-lg mb-4">
                  Technical Specifications
                </h3>
                <div className="rounded-[12px] border border-gray-100 overflow-hidden">
                  {[
                    { label: "Engine Size", value: car.engineSize },
                    { label: "Estimated Horsepower", value: estimatedHP },
                    { label: "Cylinders", value: cylinders },
                    { label: "Transmission", value: car.transmission },
                    { label: "Fuel Type", value: car.fuelType },
                    { label: "Body Type", value: car.bodyType },
                    { label: "Year", value: String(car.year) },
                    { label: "Mileage", value: `${car.mileage.toLocaleString("en-AE")} km` },
                    { label: "Exterior Color", value: car.color },
                  ].map(({ label, value }, i) => (
                    <div
                      key={label}
                      className={`flex items-center justify-between px-5 py-3.5 text-sm ${
                        i % 2 === 0 ? "bg-bg-surface" : "bg-white"
                      }`}
                    >
                      <span className="text-text-secondary">{label}</span>
                      <span className="text-text-primary font-semibold">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "Inspection" && (
              <div>
                {/* Passed banner */}
                <div className="flex items-center gap-3 bg-bg-accent-soft border border-(--color-bg-accent) rounded-[12px] px-5 py-4 mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="var(--color-text-success)"
                    className="w-7 h-7 shrink-0"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <div>
                    <p className="text-text-primary font-bold">
                      145-Point Inspection Passed
                    </p>
                    <p className="text-text-secondary text-sm">
                      This vehicle has passed our rigorous multi-point quality check.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {INSPECTION_CATEGORIES.map((category) => (
                    <div
                      key={category}
                      className="flex items-center gap-3 bg-bg-surface rounded-[8px] px-4 py-3"
                    >
                      <span className="w-6 h-6 bg-bg-accent rounded-full flex items-center justify-center shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="white"
                          className="w-3.5 h-3.5"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                      <span className="text-text-primary text-sm font-medium">
                        {category}
                      </span>
                      <span className="ml-auto text-text-success text-xs font-semibold">
                        Passed
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Similar Vehicles */}
          {similarCars.length > 0 && (
            <section>
              <h2 className="text-text-brand text-2xl font-extrabold mb-6">
                Similar Vehicles
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {similarCars.map((c) => (
                  <CarCard key={c.id} car={c} />
                ))}
              </div>
            </section>
          )}
        </div>
      </main>

      {eligibilityOpen && (
        <EligibilityModal
          onClose={() => setEligibilityOpen(false)}
          contextLabel={
            <>
              For the {car.year} {car.make} {car.model} — approx.{" "}
              <span className="font-semibold text-text-primary inline-flex items-center gap-1">
                <DirhamSymbol size={12} />
                {fmt(monthlyPayment)}/mo
              </span>
            </>
          }
        />
      )}
      {reserveOpen && (
        <ReserveModal onClose={() => setReserveOpen(false)} carLabel={`${car.year} ${car.make} ${car.model}`} />
      )}
      {priceDetailsOpen && (
        <PriceDetailsModal
          onClose={() => setPriceDetailsOpen(false)}
          monthlyPayment={monthlyPayment}
          downPaymentPercent={Math.round((clampedDown / car.price) * 100)}
          tenureMonths={tenure}
          annualRate={annualRate}
        />
      )}

      <Footer />
    </div>
  );
}
