import { useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FIELD_CLASS_DARK } from "../lib/fieldStyles";
import imgFinanceHero from "@/imports/finance-hero.jpg";
import DirhamSymbol from "../components/DirhamSymbol";
import EligibilityModal from "../components/EligibilityModal";
import PageHero from "../components/PageHero";
import BrandShape from "../components/BrandShape";

// Content sourced from caredcars.com/finance, restyled to match this design system.
const STEPS = [
  { n: 1, title: "Pick your car", desc: "Select from our range of inspected pre-owned cars." },
  { n: 2, title: "Check eligibility", desc: "Get your quick form in minutes." },
  { n: 3, title: "Submit documents", desc: "Share the required documents to finalize your application." },
];

const BENEFITS = [
  {
    icon: (
      <svg className="w-7 h-7 text-text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Low Rates",
    desc: "Competitive rates across our range of verified pre-owned cars.",
  },
  {
    icon: (
      <svg className="w-7 h-7 text-text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: "Flexible Payment Plans",
    desc: "Choose tenures that fit your budget, with transparent monthly payments.",
  },
  {
    icon: (
      <svg className="w-7 h-7 text-text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Fast Approvals",
    desc: "Quick eligibility checks with dedicated support.",
  },
  {
    icon: (
      <svg className="w-7 h-7 text-text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Transparent Process",
    desc: "Clear steps, no surprises, and bank-level privacy.",
  },
];

const ELIGIBILITY = [
  "Minimum income starting from AED 3,000 monthly, subject to employment and credit status",
  "Applicants must be between 18 and 60 years old",
  "UAE residents with valid Emirates ID and residency visa (some banks serve self-employed individuals)",
  "Vehicle must meet bank standards regarding make, model, age, and condition",
];

const DOCUMENTS = [
  "Emirates ID or Passport",
  "Valid UAE residency visa",
  "Salary certificate, payslips, or 3-6 months bank statements",
  "Proof of address (utility bill, tenancy contract, etc.)",
];

// Counts smoothly to the new value so changes in the calculator are easy to follow.
function AnimatedNumber({ value }: { value: number }) {
  const [shown, setShown] = useState(value);
  const from = useRef(value);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShown(value);
      return;
    }
    const start = performance.now();
    const origin = from.current;
    let raf = 0;
    const tick = (t: number) => {
      const k = Math.min((t - start) / 350, 1);
      const eased = 1 - Math.pow(1 - k, 3);
      const next = Math.round(origin + (value - origin) * eased);
      setShown(next);
      from.current = next;
      if (k < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [value]);
  return <>{shown.toLocaleString("en-US")}</>;
}

function CalcSlider({
  label, value, min, max, step, display, minLabel, maxLabel, onChange,
}: {
  label: string; value: number; min: number; max: number; step: number; display: string;
  minLabel: string; maxLabel: string; onChange: (v: number) => void;
}) {
  const fill = max > min ? ((value - min) / (max - min)) * 100 : 0;
  return (
    <div>
      <div className="flex justify-between items-baseline mb-2">
        <label className="text-[15px] text-text-on-inverse-secondary">{label}</label>
        <span className="text-[17px] font-semibold text-white tabular-nums">{display}</span>
      </div>
      <input
        type="range"
        aria-label={label}
        min={min} max={max} step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="calc-range w-full"
        style={{ "--fill": `${fill}%` } as React.CSSProperties}
      />
      <div className="flex justify-between text-[11px] text-text-on-inverse-secondary mt-1.5 tabular-nums">
        <span>{minLabel}</span><span>{maxLabel}</span>
      </div>
    </div>
  );
}

export default function Finance() {
  const [price, setPrice] = useState(120000);
  const [downPaymentInput, setDownPaymentInput] = useState(0);
  const [years, setYears] = useState(5);
  const [annualRate, setAnnualRate] = useState(4);
  const [appForm, setAppForm] = useState({ name: "", email: "", phone: "" });
  const [submitted, setSubmitted] = useState(false);
  const [eligibilityOpen, setEligibilityOpen] = useState(false);

  // Same maths as caredcars.com: down payment is capped at 80% of price (in the handlers), and totals cover the financed amount only
  const downPayment = downPaymentInput;
  const principal = Math.max(price - downPayment, 0);
  const monthlyRate = annualRate / 1200;
  const n = years * 12;
  const monthlyPayment =
    monthlyRate > 0
      ? (principal * monthlyRate * Math.pow(1 + monthlyRate, n)) / (Math.pow(1 + monthlyRate, n) - 1)
      : principal / n;
  const totalPayment = monthlyPayment * n;
  const totalInterest = Math.max(totalPayment - principal, 0);
  const principalPct = totalPayment ? Math.round((principal / totalPayment) * 100) : 100;

  function handleAppSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Hero */}
      <PageHero image={imgFinanceHero} imagePosition="75% 38%" title="Finance Made Simple" subtitle="Check eligibility, compare plans and drive away with clear monthly payments." />

      {/* Benefits */}
      <section className="container-x py-16 w-full">
        <div className="mb-10">
        </div>
        <div data-parallax-cards className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {BENEFITS.map((b) => (
            <div key={b.title} className="text-center">
              <div className="w-16 h-16 bg-bg-brand-soft rounded-full flex items-center justify-center mx-auto mb-5">
                {b.icon}
              </div>
              <h3 className="text-xl font-extrabold text-text-brand mb-2">{b.title}</h3>
              <p className="text-text-secondary leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-bg-surface py-16">
        <div className="container-x">
          <div className="mb-12">
 <h2 className="ty-h1 ty-title ty-title-gradient font-display">How It Works</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {/* One line through the centre of the step circles, running first to last */}
            <div aria-hidden="true" className="hidden md:block absolute top-[48px] -translate-y-1/2 left-[16.667%] right-[16.667%] h-0.5 bg-bg-brand/20 z-0" />
            {STEPS.map((step) => (
              <div key={step.n} className="relative h-full">
                <div className="relative z-10 h-full text-center bg-white rounded-[12px] p-6 shadow">
                  <div className="w-12 h-12 bg-bg-brand rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                    {step.n}
                  </div>
                  <h3 className="font-extrabold text-text-brand mb-2">{step.title}</h3>
                  <p className="text-text-secondary text-sm">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-text-secondary text-xs mt-8 italic">Final approval is subject to bank assessment.</p>
        </div>
      </section>

      {/* Calculator */}
      <section id="emi-calculator" className="bg-bg-inverse py-16 sm:py-20 scroll-mt-[96px]">
        <div className="container-x">
 <h2 className="ty-h1 ty-title text-white font-display mb-10 text-center">EMI Calculator</h2>

          <div className="calc-card max-w-[1040px] mx-auto rounded-[24px] grid grid-cols-1 lg:grid-cols-2 overflow-hidden">
            {/* Inputs */}
            <div className="p-6 sm:p-10 flex flex-col gap-7">
              <CalcSlider
                label="Price"
                value={price}
                min={50000} max={400000} step={5000}
                display={`AED ${price.toLocaleString("en-US")}`}
                minLabel="AED 50,000" maxLabel="AED 400,000"
                onChange={(p) => {
                  setPrice(p);
                  setDownPaymentInput((d) => Math.min(d, p * 0.8));
                }}
              />
              <CalcSlider
                label="Down Payment"
                value={downPayment}
                min={0} max={150000} step={1000}
                display={`AED ${Math.round(downPayment).toLocaleString("en-US")}`}
                minLabel="AED 0" maxLabel="AED 150,000"
                onChange={(d) => setDownPaymentInput(Math.min(d, price * 0.8))}
              />
              <CalcSlider
                label="Years"
                value={years}
                min={1} max={5} step={1}
                display={`${years} ${years === 1 ? "Year" : "Years"}`}
                minLabel="1 Year" maxLabel="5 Years"
                onChange={setYears}
              />
              <CalcSlider
                label="Rate"
                value={annualRate}
                min={1} max={8} step={0.05}
                display={`${annualRate.toFixed(2)}%`}
                minLabel="1.00%" maxLabel="8.00%"
                onChange={setAnnualRate}
              />
            </div>

            {/* Result */}
            <div className="p-6 sm:p-10 flex flex-col border-t lg:border-t-0 lg:border-s border-white/10">
              <span className="text-[15px] font-semibold text-white">Estimated Payment</span>
              <p className="mt-3 flex items-baseline gap-2 text-white">
                <span className="text-[48px] sm:text-[56px] font-bold leading-none tracking-[-0.03em] tabular-nums">
                  <AnimatedNumber value={Math.round(monthlyPayment)} />
                </span>
                <span className="text-lg text-text-on-inverse-secondary">/ month</span>
              </p>

              {/* Principal vs interest share of the total payment */}
              <div className="mt-6 flex h-[8px] gap-[3px] rounded-full overflow-hidden" role="img" aria-label={`Principal ${principalPct}%, interest ${100 - principalPct}%`}>
                <span className="h-full rounded-s-full bg-bg-brand transition-[width] duration-500 ease-out" style={{ width: `${principalPct}%` }} />
                <span className="h-full flex-1 rounded-e-full bg-bg-accent" />
              </div>

              <dl className="mt-4 divide-y divide-white/10">
                {[
                  { label: "Total Payment", dot: "var(--color-text-brand)", value: totalPayment },
                  { label: "Total Interest", dot: "var(--color-text-accent)", value: totalInterest },
                  { label: "Total", value: monthlyPayment },
                ].map((row) => (
                  <div key={row.label} className="flex items-center gap-3 py-3">
                    <dt className="flex items-center gap-2.5 text-[15px] text-text-on-inverse-secondary">
                      {row.dot && <span aria-hidden="true" className="size-2 rounded-full" style={{ background: row.dot }} />}
                      {row.label}
                    </dt>
                    <dd className="ms-auto text-[15px] font-semibold text-white tabular-nums">
                      <AnimatedNumber value={Math.round(row.value)} /> AED
                    </dd>
                  </div>
                ))}
              </dl>

              <button
                type="button"
                onClick={() => setEligibilityOpen(true)}
                className="group mt-8 lg:mt-auto inline-flex items-center justify-center gap-2 bg-bg-brand text-white font-semibold h-[48px] rounded-full hover:bg-bg-brand-hover transition-colors"
              >
                Apply with this plan
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="bg-bg-surface py-16">
        <div className="container-x">
          <div className="mb-10">
 <h2 className="ty-h1 ty-title ty-title-gradient font-display">Eligibility & Documents</h2>
            <p className="text-text-secondary mt-2">What you need to apply for finance</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="bg-white rounded-[12px] p-6 shadow">
              <h3 className="font-extrabold text-text-brand mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Eligibility Criteria
              </h3>
              <ul className="space-y-3">
                {ELIGIBILITY.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-text-secondary">
                    <span className="text-text-accent mt-0.5">&#10003;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-[12px] p-6 shadow">
              <h3 className="font-extrabold text-text-brand mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Required Documents
              </h3>
              <ul className="space-y-3">
                {DOCUMENTS.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-text-secondary">
                    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" className="mt-1 size-4 shrink-0 text-text-brand rtl:-scale-x-100">
                      <path d="M5 12h13M12.5 6l6 6-6 6" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Application CTA */}
      <section className="relative overflow-hidden bg-bg-inverse-raised border-y border-white/10 py-16">
        <BrandShape variant="split" />
        <div className="max-w-[640px] mx-auto px-5 text-center">
 <h2 className="ty-h1 ty-title text-white mb-2 font-display">Ready to Apply?</h2>
          <p className="text-white/85 mb-8">Leave your details and our finance team will call you back within 2 hours.</p>

          {submitted ? (
            <div role="status" className="relative bg-white/10 border border-white/25 rounded-[12px] p-8">
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setAppForm({ name: "", email: "", phone: "" });
                }}
                aria-label="Close"
                className="absolute top-3 end-3 size-9 flex items-center justify-center rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors"
              >
                <svg fill="none" height="16" viewBox="0 0 24 24" width="16" aria-hidden="true"><path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
              </button>
              <div className="w-16 h-16 bg-bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-white font-bold text-lg">Application Received!</p>
              <p className="text-white/85 text-sm mt-2">Our finance team will contact you within 2 hours.</p>
              <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setAppForm({ name: "", email: "", phone: "" });
                  }}
                  className="h-11 px-6 rounded-full border border-white/25 text-white text-sm font-semibold hover:bg-white/10 transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleAppSubmit} className="space-y-4">
              <input
                required
                className={`${FIELD_CLASS_DARK} border-white/30 placeholder-white/75 focus:border-white focus:ring-white/30`}
                placeholder="Full Name"
                value={appForm.name}
                onChange={(e) => setAppForm((f) => ({ ...f, name: e.target.value }))}
              />
              <input
                required
                type="email"
                className={`${FIELD_CLASS_DARK} border-white/30 placeholder-white/75 focus:border-white focus:ring-white/30`}
                placeholder="Email Address"
                value={appForm.email}
                onChange={(e) => setAppForm((f) => ({ ...f, email: e.target.value }))}
              />
              <input
                required
                className={`${FIELD_CLASS_DARK} border-white/30 placeholder-white/75 focus:border-white focus:ring-white/30`}
                placeholder="Phone Number (+971...)"
                value={appForm.phone}
                onChange={(e) => setAppForm((f) => ({ ...f, phone: e.target.value }))}
              />
              <button
                type="submit"
                className="w-full bg-white text-text-brand font-bold py-4 rounded-full hover:bg-bg-brand-soft transition"
              >
                Submit Application
              </button>
            </form>
          )}
        </div>
      </section>

      {eligibilityOpen && (
        <EligibilityModal
          onClose={() => setEligibilityOpen(false)}
          contextLabel={
            <>
              For your plan — approx.{" "}
              <span className="font-semibold text-text-primary inline-flex items-center gap-1">
                <DirhamSymbol size={12} />
                {Math.round(monthlyPayment).toLocaleString("en-AE")}/mo
              </span>
            </>
          }
        />
      )}

      <Footer flushTop />
    </div>
  );
}
