import { useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FIELD_CLASS_DARK } from "../lib/fieldStyles";
import DirhamSymbol from "../components/DirhamSymbol";
import EligibilityModal from "../components/EligibilityModal";

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
  return <>{shown.toLocaleString("en-AE")}</>;
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
  const [price, setPrice] = useState(150000);
  const [downPayment, setDownPayment] = useState(30000);
  const [duration, setDuration] = useState(60);
  const [annualRate, setAnnualRate] = useState(4.5);
  const [appForm, setAppForm] = useState({ name: "", email: "", phone: "" });
  const [submitted, setSubmitted] = useState(false);
  const [eligibilityOpen, setEligibilityOpen] = useState(false);

  const principal = price - downPayment;
  const monthlyRate = annualRate / 100 / 12;
  const n = duration;
  const monthlyPayment =
    monthlyRate === 0
      ? principal / n
      : (principal * (monthlyRate * Math.pow(1 + monthlyRate, n))) / (Math.pow(1 + monthlyRate, n) - 1);
  const totalAmount = monthlyPayment * n + downPayment;

  function handleAppSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Hero */}
      <section className="bg-bg-inverse page-hero text-center">
        <div className="container-x">
          <h1 className="text-5xl font-bold text-white mb-2 font-display">Finance your car the smart way.</h1>
          <p className="text-text-on-inverse-secondary text-lg max-w-xl mx-auto">
            Check eligibility, compare plans and drive away with clear monthly payments.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="container-x py-16 w-full">
        <div className="text-center mb-10">
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-text-brand font-display">How It Works</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {STEPS.map((step, i) => (
              <div key={step.n} className="relative">
                {i < STEPS.length - 1 && (
                  <div className="hidden md:block absolute top-6 left-1/2 w-full h-0.5 bg-bg-brand/20 z-0" />
                )}
                <div className="relative z-10 text-center bg-white rounded-[12px] p-6 shadow">
                  <div className="w-12 h-12 bg-bg-brand rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                    {step.n}
                  </div>
                  <h3 className="font-extrabold text-text-brand mb-2">{step.title}</h3>
                  <p className="text-text-secondary text-sm">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-text-secondary text-xs mt-8 italic">Final approval is subject to bank assessment.</p>
        </div>
      </section>

      {/* Calculator */}
      <section id="emi-calculator" className="bg-bg-inverse min-h-[100svh] flex flex-col justify-center py-8 xl:pt-[84px] xl:pb-6 scroll-mt-0">
        <div className="container-x">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white font-display inline-flex items-center gap-3">
              <span aria-hidden="true" className="text-[1.1em] leading-none">🧮</span>
              EMI Calculator
            </h2>
            <p className="text-text-on-inverse-secondary text-[15px] mt-3">Adjust your inputs to see a full breakdown of your monthly payment</p>
          </div>

          <div className="calc-card max-w-[1040px] mx-auto rounded-[24px] grid grid-cols-1 lg:grid-cols-2 overflow-hidden">
            {/* LEFT — inputs */}
            <div className="p-5 sm:p-7 flex flex-col gap-4">
              <div className="flex items-center justify-between gap-3">
                <span className="text-[13px] font-semibold uppercase tracking-[0.18em] text-text-on-inverse-secondary">Build your plan</span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-bg-accent/10 border border-(--color-bg-accent)/25 px-3 py-1 text-xs font-semibold text-text-accent">
                  <span aria-hidden="true" className="breathe-dot size-[6px] rounded-full bg-bg-accent" />
                  Live estimate
                </span>
              </div>

              <CalcSlider
                label="Car price"
                value={price}
                min={30000} max={500000} step={5000}
                display={`AED ${price.toLocaleString("en-AE")}`}
                minLabel="AED 30k" maxLabel="AED 500k"
                onChange={(p) => {
                  setPrice(p);
                  setDownPayment(Math.min(downPayment, Math.round(p * 0.8)));
                }}
              />
              <CalcSlider
                label="Down payment"
                value={downPayment}
                min={0} max={Math.round(price * 0.8)} step={1000}
                display={`AED ${downPayment.toLocaleString("en-AE")}`}
                minLabel="0" maxLabel={`${Math.round((downPayment / price) * 100)}% of price`}
                onChange={setDownPayment}
              />

              {/* Tenure */}
              <div>
                <span className="text-[15px] text-text-on-inverse-secondary block mb-2">Tenure</span>
                <div role="radiogroup" aria-label="Tenure" className="relative grid grid-cols-5 p-1 rounded-full bg-white/[0.04] border border-white/10">
                  <span
                    aria-hidden="true"
                    className="absolute top-1 bottom-1 start-1 rounded-full bg-white transition-transform duration-300 ease-out"
                    style={{ width: "calc((100% - 8px) / 5)", transform: `translateX(${[12, 24, 36, 48, 60].indexOf(duration) * 100}%)` }}
                  />
                  {[12, 24, 36, 48, 60].map((m) => {
                    const active = duration === m;
                    return (
                      <button
                        key={m}
                        type="button"
                        role="radio"
                        aria-checked={active}
                        onClick={() => setDuration(m)}
                        className={`relative z-10 h-9 rounded-full text-[13px] font-semibold transition-colors ${active ? "text-text-primary" : "text-white/70 hover:text-white"}`}
                      >
                        {m / 12} {m / 12 === 1 ? "yr" : "yrs"}
                      </button>
                    );
                  })}
                </div>
              </div>

              <CalcSlider
                label="Interest rate"
                value={annualRate}
                min={2} max={15} step={0.1}
                display={`${annualRate.toFixed(1)}%`}
                minLabel="2%" maxLabel="15%"
                onChange={setAnnualRate}
              />
            </div>

            {/* RIGHT — result */}
            {(() => {
              const totalInterest = Math.max(monthlyPayment * n - principal, 0);
              const totalRepayment = principal + totalInterest;
              const principalPct = totalRepayment ? Math.round((principal / totalRepayment) * 100) : 100;
              return (
                <div className="p-5 sm:p-7 flex flex-col border-t lg:border-t-0 lg:border-s border-white/10">
                  <span className="text-[15px] text-text-on-inverse-secondary">Estimated monthly payment</span>
                  <p className="mt-1 flex items-baseline gap-2 text-white">
                    <span className="text-base font-semibold text-text-on-inverse-secondary">AED</span>
                    <span className="text-[48px] sm:text-[56px] font-bold leading-none tracking-[-0.03em] tabular-nums">
                      <AnimatedNumber value={Math.round(monthlyPayment)} />
                    </span>
                    <span className="text-lg text-text-on-inverse-secondary">/mo</span>
                  </p>
                  <p className="mt-2 text-sm text-text-on-inverse-secondary">
                    {`${duration} months at ${annualRate.toFixed(1)}% · AED ${principal.toLocaleString("en-AE")} financed`}
                  </p>

                  {/* Principal vs interest share */}
                  <div className="mt-5 flex h-[8px] gap-[3px] rounded-full overflow-hidden" role="img" aria-label={`Principal ${principalPct}%, interest ${100 - principalPct}%`}>
                    <span className="h-full rounded-s-full bg-bg-brand transition-[width] duration-500 ease-out" style={{ width: `${principalPct}%` }} />
                    <span className="h-full flex-1 rounded-e-full bg-bg-accent" />
                  </div>

                  <dl className="mt-3 divide-y divide-white/10">
                    {[
                      { label: "Principal", dot: "var(--color-text-brand)", value: principal, pct: principalPct },
                      { label: "Total interest", dot: "var(--color-text-accent)", value: totalInterest, pct: 100 - principalPct },
                      { label: "Total repayment", value: totalRepayment },
                    ].map((row) => (
                      <div key={row.label} className="flex items-center gap-3 py-2.5">
                        <dt className="flex items-center gap-2.5 text-[15px] text-text-on-inverse-secondary">
                          {row.dot && <span aria-hidden="true" className="size-2 rounded-full" style={{ background: row.dot }} />}
                          {row.label}
                        </dt>
                        <dd className="ms-auto flex items-baseline gap-2.5 tabular-nums">
                          <span className="text-[15px] font-semibold text-white">
                            AED <AnimatedNumber value={Math.round(row.value)} />
                          </span>
                          {row.pct !== undefined && <span className="w-9 text-end text-sm text-text-on-inverse-secondary">{row.pct}%</span>}
                        </dd>
                      </div>
                    ))}
                  </dl>

                  <button
                    type="button"
                    onClick={() => setEligibilityOpen(true)}
                    className="group mt-5 lg:mt-auto inline-flex items-center justify-center gap-2 bg-bg-brand text-white font-semibold h-[48px] rounded-full hover:bg-bg-brand-hover transition-colors"
                  >
                    Apply with this plan
                    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 transition-transform group-hover:translate-x-1 rtl:-scale-x-100" aria-hidden="true">
                      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  <p className="mt-2.5 text-xs leading-relaxed text-text-on-inverse-secondary">
                    Indicative only. Final rate and approval are subject to bank assessment.
                  </p>
                </div>
              );
            })()}
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="bg-bg-surface py-16">
        <div className="container-x">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-extrabold text-text-brand font-display">Eligibility & Documents</h2>
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
                    <span className="text-text-brand mt-0.5">&#8594;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Application CTA */}
      <section className="bg-bg-inverse py-20">
        <div className="max-w-[640px] mx-auto px-5 text-center">
          <h2 className="text-4xl font-bold text-white mb-2 font-display">Ready to Apply?</h2>
          <p className="text-text-on-inverse-secondary mb-8">Leave your details and our finance team will call you back within 2 hours.</p>

          {submitted ? (
            <div role="status" className="relative bg-bg-accent/10 border border-(--color-bg-accent)/30 rounded-[12px] p-8">
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setAppForm({ name: "", email: "", phone: "" });
                }}
                aria-label="Close"
                className="absolute top-3 end-3 size-9 flex items-center justify-center rounded-full text-text-on-inverse-secondary hover:text-white hover:bg-white/10 transition-colors"
              >
                <svg fill="none" height="16" viewBox="0 0 24 24" width="16" aria-hidden="true"><path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
              </button>
              <div className="w-16 h-16 bg-bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-text-accent font-bold text-lg">Application Received!</p>
              <p className="text-text-on-inverse-secondary text-sm mt-2">Our finance team will contact you within 2 hours.</p>
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
                className={FIELD_CLASS_DARK}
                placeholder="Full Name"
                value={appForm.name}
                onChange={(e) => setAppForm((f) => ({ ...f, name: e.target.value }))}
              />
              <input
                required
                type="email"
                className={FIELD_CLASS_DARK}
                placeholder="Email Address"
                value={appForm.email}
                onChange={(e) => setAppForm((f) => ({ ...f, email: e.target.value }))}
              />
              <input
                required
                className={FIELD_CLASS_DARK}
                placeholder="Phone Number (+971...)"
                value={appForm.phone}
                onChange={(e) => setAppForm((f) => ({ ...f, phone: e.target.value }))}
              />
              <button
                type="submit"
                className="w-full bg-bg-brand text-white font-bold py-4 rounded-full hover:bg-bg-brand-hover transition"
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
