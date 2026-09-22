import { useState } from "react";
import Select from "./Select";
import { FIELD_CLASS, FIELD_ERROR_CLASS, LABEL_CLASS } from "../lib/fieldStyles";
import imgSellCarVisual from "@/imports/Car.png";
import ArrowCircle from "./ArrowCircle";

const toOpts = (arr: string[]) => arr.map((v) => ({ value: v, label: v }));

// ─── Sell Your Car – 3-step form ──────────────────────────────────────────────
type SellStep = 1 | 2 | 3;

interface SellFormData {
  plateVin: string;
  make: string;
  mileage: string;
  year: string;
  kilometers: string;
  serviceHistory: string;
  gccSpecs: string;
  condition: string;
  name: string;
  countryCode: string;
  phone: string;
  email: string;
  date: string;
  location: string;
}

export const SELL_MAKES = ["Toyota", "BMW", "Mercedes-Benz", "Audi", "Nissan", "Ford", "Chevrolet", "Hyundai", "Kia", "Honda"];
export const SELL_MILEAGES = ["0–10,000 km", "10,000–30,000 km", "30,000–60,000 km", "60,000–100,000 km", "100,000+ km"];
export const YEARS = Array.from({ length: 15 }, (_, i) => String(2024 - i));
const SERVICE_HISTORY = ["Full", "Partial", "No History"];
const GCC_SPECS = ["GCC Spec", "Imported", "European Spec", "American Spec"];
const CONDITIONS = ["Excellent", "Good", "Fair"];
const COUNTRY_CODES = ["+971", "+966", "+974", "+973", "+965", "+968", "+962", "+20", "+91", "+44", "+1"];

// Fields required per step. `plateVin` is intentionally never required.
const REQUIRED_FIELDS: Record<SellStep, (keyof SellFormData)[]> = {
  1: ["make", "mileage", "year"],
  2: ["kilometers", "serviceHistory", "gccSpecs", "condition"],
  3: ["name", "phone", "email"],
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function fieldError(key: keyof SellFormData, value: string): string | null {
  if (key === "email") {
    if (!value.trim()) return "Email address is required.";
    if (!EMAIL_RE.test(value.trim())) return "Enter a valid email address.";
    return null;
  }
  if (key === "phone") {
    if (!value.trim()) return "Phone number is required.";
    if (!/^\d{6,}$/.test(value.replace(/[\s-]/g, ""))) return "Enter a valid phone number.";
    return null;
  }
  if (!value.trim()) return "This field is required.";
  return null;
}

interface SellYourCarFormProps {
  onNavigate: (path: string) => void;
  /** When false, hides the right-hand car visual (e.g. on the dedicated Sell page). */
  showVisual?: boolean;
  className?: string;
  /** Prefills step 1, e.g. from the home page search. */
  initial?: Partial<Pick<SellFormData, "plateVin" | "make" | "mileage" | "year">>;
  // Home search already collects the step 1 details, so it can drop people straight into step 2
  startStep?: SellStep;
}

export default function SellYourCarForm({ onNavigate, showVisual = true, className = "", initial, startStep = 1 }: SellYourCarFormProps) {
  const [step, setStep] = useState<SellStep>(startStep);
  const [form, setForm] = useState<SellFormData>({ plateVin: "", make: "", mileage: "", year: "", ...initial, kilometers: "", serviceHistory: "", gccSpecs: "", condition: "", name: "", countryCode: "+971", phone: "", email: "", date: "", location: "" });
  const [touched, setTouched] = useState<Partial<Record<keyof SellFormData, boolean>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [tradeInOpen, setTradeInOpen] = useState(false);

  function set(key: keyof SellFormData, value: string) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function touch(key: keyof SellFormData) {
    setTouched((t) => ({ ...t, [key]: true }));
  }

  function errorFor(key: keyof SellFormData): string | null {
    if (!touched[key]) return null;
    return fieldError(key, form[key]);
  }

  const currentStepValid = REQUIRED_FIELDS[step].every((key) => !fieldError(key, form[key]));

  function touchStep(stepFields: (keyof SellFormData)[]) {
    setTouched((t) => {
      const next = { ...t };
      stepFields.forEach((key) => { next[key] = true; });
      return next;
    });
  }

  function handlePrimaryClick() {
    if (!currentStepValid) {
      touchStep(REQUIRED_FIELDS[step]);
      return;
    }
    if (step < 3) {
      setStep((s) => (s + 1) as SellStep);
    } else {
      setSubmitted(true);
    }
  }

  const stepLabels = ["Enter car details", "Get your valuation", "Book inspection"];

  function resetForm() {
    setSubmitted(false);
    setStep(1);
    setTouched({});
    setForm((f) => ({ ...f, plateVin: "", make: "", mileage: "", year: "", kilometers: "", serviceHistory: "", gccSpecs: "", condition: "", date: "", location: "" }));
  }

  if (submitted) {
    return (
      <div className={`flex items-center ${className}`}>
        <div
          role="status"
          className="relative w-full max-w-[628px] mx-auto flex flex-col items-center gap-[24px] px-[24px] sm:px-[40px] py-[40px] rounded-[24px] text-center"
          style={{ background: "white", boxShadow: "0px 30px 30px rgba(28,41,88,0.08)" }}
        >
          <button
            type="button"
            onClick={resetForm}
            aria-label="Close"
            className="absolute top-[16px] end-[16px] size-[36px] flex items-center justify-center rounded-full text-text-secondary hover:bg-bg-surface hover:text-text-primary transition-colors"
          >
            <svg fill="none" height="16" viewBox="0 0 24 24" width="16" aria-hidden="true">
              <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
          <div className="flex items-center justify-center size-[64px] rounded-full bg-bg-accent-soft">
            <svg fill="none" height="32" viewBox="0 0 24 24" width="32" aria-hidden="true">
              <path d="M5 13l4 4L19 7" stroke="var(--color-text-success)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div>
            <span className="text-text-brand ty-h2 block">
              Request Received
            </span>
            <span className="text-text-secondary text-base leading-normal block mt-[12px] font-normal">
              We have received your request and the team will contact you soon.
            </span>
          </div>
          <div className="flex flex-col sm:flex-row gap-[12px] w-full sm:w-auto">
            <button
              type="button"
              onClick={() => onNavigate("/buy")}
              className="h-[48px] px-[24px] rounded-full bg-bg-brand text-white font-semibold hover:bg-bg-brand-hover transition-colors"
            >
              Browse Cars
            </button>
            <button
              type="button"
              onClick={resetForm}
              className="h-[48px] px-[24px] rounded-full border border-border-default text-text-primary font-semibold hover:bg-bg-surface transition-colors"
            >
              Value Another Car
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`flex flex-col lg:flex-row gap-[24px] lg:gap-[40px] items-center ${className}`}>
      {/* Left form card */}
      <div
        className={`${showVisual ? "w-full lg:w-[628px] lg:shrink-0" : "w-full max-w-[628px] mx-auto"} flex flex-col gap-[32px] sm:gap-[40px] p-[20px] sm:p-[24px] rounded-[24px] relative z-10`}
        style={{ background: "white", boxShadow: "0px 30px 30px rgba(28,41,88,0.08)" }}
      >
        {/* Title */}
        <div>
          <span className="ty-title ty-title-gradient ty-h1 block">Sell your car in 3 steps</span>
          <span className="text-text-secondary text-lg leading-normal block mt-[8px] font-normal">
            Get an instant valuation, then book an inspection.<br />Fast, transparent, verified.
          </span>
        </div>

        {/* Step progress */}
        <ol className="flex items-center w-full shrink-0" aria-label="Progress">
          {stepLabels.map((label, i) => {
            const n = i + 1;
            const active = n === step;
            const done = n < step;
            return (
              <li key={label} className={`flex items-center ${i < stepLabels.length - 1 ? "flex-1" : ""}`} aria-current={active ? "step" : undefined}>
                <div className="flex items-center gap-[12px] shrink-0">
                  <span
                    className={`size-[36px] rounded-full flex items-center justify-center text-sm font-semibold tabular-nums transition-all duration-300 ${
                      done
                        ? "bg-state-success text-white"
                        : active
                          ? "bg-bg-brand text-white ring-4 ring-border-focus/15"
                          : "bg-white text-text-secondary border border-border-default"
                    }`}
                  >
                    {done ? (
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                        <path d="M3.5 8.5l3 3 6-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    ) : (
                      n
                    )}
                  </span>
                  <span className="flex flex-col leading-tight">
                    <span className="text-xs font-medium text-text-secondary">Step {n}</span>
                    <span className={`hidden sm:inline text-[15px] font-semibold whitespace-nowrap ${active ? "text-text-brand" : done ? "text-text-primary" : "text-text-secondary"}`}>
                      {label}
                    </span>
                  </span>
                </div>
                {i < stepLabels.length - 1 && (
                  <span aria-hidden="true" className="flex-1 mx-[8px] sm:mx-[16px] h-[3px] rounded-full bg-bg-subtle overflow-hidden">
                    <span className={`block h-full bg-state-success transition-all duration-500 ${done ? "w-full" : "w-0"}`} />
                  </span>
                )}
              </li>
            );
          })}
        </ol>

        {/* Step 1: Car details */}
        {step === 1 && (
          <div className="flex flex-col gap-[16px] items-start w-full">
            <InputField label="Plate / VIN" optional value={form.plateVin} onChange={(v) => set("plateVin", v)} placeholder="e.g. Dubai A 12345 or VIN17..." />
            <SelectField label="Make" value={form.make} onChange={(v) => set("make", v)} onBlur={() => touch("make")} error={errorFor("make")} options={SELL_MAKES} placeholder="Select Make" />
            <SelectField label="Mileage" value={form.mileage} onChange={(v) => set("mileage", v)} onBlur={() => touch("mileage")} error={errorFor("mileage")} options={SELL_MILEAGES} placeholder="Select Mileage" />
            <SelectField label="Year" value={form.year} onChange={(v) => set("year", v)} onBlur={() => touch("year")} error={errorFor("year")} options={YEARS} placeholder="Select Year" />
          </div>
        )}

        {/* Step 2: Get your valuation – vehicle details */}
        {step === 2 && (
          <div className="flex flex-col gap-[16px] w-full">
            <InputField label="Kilometers" value={form.kilometers} onChange={(v) => set("kilometers", v)} onBlur={() => touch("kilometers")} error={errorFor("kilometers")} placeholder="e.g. 45,000" type="number" />
            <SelectField label="Service History" value={form.serviceHistory} onChange={(v) => set("serviceHistory", v)} onBlur={() => touch("serviceHistory")} error={errorFor("serviceHistory")} options={SERVICE_HISTORY} placeholder="Select service history" />
            <SelectField label="GCC Specs" value={form.gccSpecs} onChange={(v) => set("gccSpecs", v)} onBlur={() => touch("gccSpecs")} error={errorFor("gccSpecs")} options={GCC_SPECS} placeholder="Select specification" />
            <SelectField label="Condition" value={form.condition} onChange={(v) => set("condition", v)} onBlur={() => touch("condition")} error={errorFor("condition")} options={CONDITIONS} placeholder="Select condition" />
          </div>
        )}

        {/* Step 3: Your contact details */}
        {step === 3 && (
          <div className="flex flex-col gap-[16px] w-full">
            <InputField label="Full Name" value={form.name} onChange={(v) => set("name", v)} onBlur={() => touch("name")} error={errorFor("name")} placeholder="Your full name" />
            <div className="flex flex-col gap-[8px] items-start w-full">
              <span className={LABEL_CLASS.replace(" mb-2", "")}>Phone Number</span>
              <div className="flex gap-[8px] w-full">
                <div className="shrink-0 w-[110px]">
                  <Select value={form.countryCode} onChange={(v) => set("countryCode", v)} options={toOpts(COUNTRY_CODES)} placeholder="+971" />
                </div>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => set("phone", e.target.value)}
                  onBlur={() => touch("phone")}
                  placeholder="50 000 0000"
                  className={`${errorFor("phone") ? FIELD_ERROR_CLASS : FIELD_CLASS} flex-1 min-w-px`}
                />
              </div>
              {errorFor("phone") && <span className="text-red-600 text-[13px]">{errorFor("phone")}</span>}
            </div>
            <InputField label="Email Address" value={form.email} onChange={(v) => set("email", v)} onBlur={() => touch("email")} error={errorFor("email")} placeholder="you@example.com" type="email" />
          </div>
        )}

        {/* Navigation buttons */}
        <div className="flex items-center justify-between w-full">
          <button
            type="button"
            onClick={() => setTradeInOpen(true)}
            className="text-text-primary text-base font-semibold leading-[26.4px] cursor-pointer hover:underline hover:text-text-brand transition-colors"
           
          >
            How to Trade-in Works?
          </button>
          <div className="flex gap-[8px] items-center">
            {step > 1 && (
              <button
                onClick={() => setStep((s) => (s - 1) as SellStep)}
                className="flex h-[50px] items-center justify-center px-[24px] py-[12px] rounded-[999px] transition-colors hover:bg-bg-surface"
                style={{ border: "1px solid var(--color-border-default)" }}
              >
                <span className="text-text-brand text-base font-semibold">Back</span>
              </button>
            )}
            <button
              onClick={handlePrimaryClick}
              disabled={!currentStepValid}
              aria-disabled={!currentStepValid}
              className="group flex h-[50px] items-center ps-[24px] pe-[7px] py-[7px] rounded-[999px] transition-colors"
              style={{
                background: currentStepValid ? "var(--color-bg-brand)" : "var(--color-bg-brand-disabled)",
                cursor: currentStepValid ? "pointer" : "not-allowed",
              }}
            >
              <div className="flex gap-[12px] items-center">
                <span className="text-white text-base font-semibold leading-[18px] whitespace-nowrap">
                  {step < 3 ? `Continue (${step}/3)` : "Get My Valuation"}
                </span>
                <ArrowCircle tone="light" />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Right: car visual */}
      {showVisual && (
        <div className="hidden lg:block flex-1 relative h-[720px] -my-[40px]">
          <img
            alt="Car"
            src={imgSellCarVisual}
            className="absolute inset-0 w-full h-full object-contain object-center scale-125"
          />
        </div>
      )}

      {tradeInOpen && <TradeInModal onClose={() => setTradeInOpen(false)} />}
    </div>
  );
}

function TradeInModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4" style={{ background: "rgba(0,0,51,0.6)" }} onClick={onClose}>
      <div
        className="bg-white rounded-[24px] max-w-[520px] w-full p-[32px] relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-[20px] end-[20px] size-[36px] flex items-center justify-center rounded-full border border-border-default text-text-primary hover:bg-bg-surface transition-colors"
        >
          <svg fill="none" height="16" viewBox="0 0 24 24" width="16"><path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
        </button>
        <span className="text-text-brand ty-h2 block mb-[16px]">
          How Does Trade-in Work?
        </span>
        <p className="text-text-secondary text-base leading-relaxed">
          Trading in a used car means selling your current vehicle to a dealership and applying its value toward the purchase price of a new or different used car. We inspect and value your car, then deduct that amount from the price of your next vehicle — so you only pay the difference, with no separate sale to arrange.
        </p>
      </div>
    </div>
  );
}

// Shared form field components
function InputField({
  label, value, onChange, placeholder, type = "text", error, onBlur, optional = false,
}: {
  label: string; value: string; onChange: (v: string) => void; placeholder: string; type?: string;
  error?: string | null; onBlur?: () => void; optional?: boolean;
}) {
  return (
    <div className="flex flex-col gap-[8px] items-start w-full">
      <span className={LABEL_CLASS.replace(" mb-2", "")}>
        {label}
        {optional && <span className="text-text-secondary font-normal"> (optional)</span>}
      </span>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        placeholder={placeholder}
        className={error ? FIELD_ERROR_CLASS : FIELD_CLASS}
      />
      {error && <span className="text-red-600 text-[13px]">{error}</span>}
    </div>
  );
}

function SelectField({
  label, value, onChange, options, placeholder, error, onBlur,
}: {
  label: string; value: string; onChange: (v: string) => void; options: string[]; placeholder: string;
  error?: string | null; onBlur?: () => void;
}) {
  return (
    <div className="flex flex-col gap-[8px] items-start w-full">
      <span className={LABEL_CLASS.replace(" mb-2", "")}>{label}</span>
      <div className="w-full" onBlur={onBlur}>
        <Select value={value} onChange={onChange} options={toOpts(options)} placeholder={placeholder} error={Boolean(error)} />
      </div>
      {error && <span className="text-red-600 text-[13px]">{error}</span>}
    </div>
  );
}
