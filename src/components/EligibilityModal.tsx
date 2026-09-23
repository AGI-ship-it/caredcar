import { useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import Select from "./Select";
import { FIELD_CLASS, LABEL_CLASS } from "../lib/fieldStyles";

const RESIDENT_STATUSES = ["UAE", "Saudi Arabia", "India", "United Kingdom"];

interface EligibilityForm {
  firstName: string;
  phone: string;
  email: string;
  residentStatus: string;
  acceptTerms: boolean;
}

const emptyForm: EligibilityForm = { firstName: "", phone: "", email: "", residentStatus: "", acceptTerms: false };

interface EligibilityModalProps {
  onClose: () => void;
  /** Short line shown under the title, e.g. "For the 2024 Toyota Camry — approx. AED 1,234/mo" */
  contextLabel: ReactNode;
}

// Shared "Check Eligibility" modal used by both the Finance page's
// "Apply with this plan" CTA and the Car Detail page's EMI calculator CTA.
export default function EligibilityModal({ onClose, contextLabel }: EligibilityModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState<EligibilityForm>(emptyForm);
  const [errors, setErrors] = useState<Record<string, boolean>>({});

  const setField = <K extends keyof EligibilityForm>(key: K, val: EligibilityForm[K]) => {
    setForm((f) => ({ ...f, [key]: val }));
    setErrors((e) => ({ ...e, [key]: false }));
  };

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const next: Record<string, boolean> = {
      firstName: !form.firstName.trim(),
      phone: !form.phone.trim(),
      email: !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email),
      residentStatus: !form.residentStatus,
      acceptTerms: !form.acceptTerms,
    };
    setErrors(next);
    if (Object.values(next).some(Boolean)) return;
    setSubmitted(true);
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" role="dialog" aria-modal="true">
      <div className="absolute inset-0 bg-bg-inverse/70 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-[480px] bg-white rounded-[20px] shadow-2xl max-h-[90vh] overflow-y-auto">
        <button onClick={onClose} className="absolute top-4 end-4 text-text-secondary hover:text-text-primary z-10" aria-label="Close">
          <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
            <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>

        {submitted ? (
          <div className="p-10 text-center">
            <div className="w-16 h-16 rounded-full bg-bg-accent-soft flex items-center justify-center mx-auto mb-5">
              <svg viewBox="0 0 24 24" fill="var(--color-text-success)" className="w-9 h-9">
                <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-text-brand text-xl font-extrabold mb-2 font-display">Application Submitted</h3>
            <p className="text-text-secondary leading-relaxed mb-8">
              Your application has been submitted successfully. We will contact you shortly.
            </p>
            <button onClick={onClose} className="w-full bg-bg-brand text-white font-bold py-3.5 rounded-full hover:bg-blue-700 transition">
              Done
            </button>
          </div>
        ) : (
          <div className="p-8">
            <h3 className="text-text-brand text-2xl font-extrabold mb-1 font-display">Check Eligibility</h3>
            <p className="text-text-secondary text-sm mb-6">{contextLabel}</p>

            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <div>
                <label className={LABEL_CLASS}>First Name</label>
                <input
                  type="text"
                  value={form.firstName}
                  onChange={(e) => setField("firstName", e.target.value)}
                  placeholder="Enter your first name"
                  className={`${FIELD_CLASS} ${errors.firstName ? "border-red-500 bg-red-50" : ""}`}
                />
              </div>

              <div>
                <label className={LABEL_CLASS}>Phone Number</label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setField("phone", e.target.value)}
                  placeholder="+971 50 123 4567"
                  className={`${FIELD_CLASS} ${errors.phone ? "border-red-500 bg-red-50" : ""}`}
                />
              </div>

              <div>
                <label className={LABEL_CLASS}>Email Address</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setField("email", e.target.value)}
                  placeholder="you@example.com"
                  className={`${FIELD_CLASS} ${errors.email ? "border-red-500 bg-red-50" : ""}`}
                />
              </div>

              <div>
                <label className={LABEL_CLASS}>Resident Status</label>
                <Select
                  value={form.residentStatus}
                  onChange={(v) => setField("residentStatus", v)}
                  options={[{ value: "", label: "Select your country of residence" }, ...RESIDENT_STATUSES.map((s) => ({ value: s, label: s }))]}
                  error={errors.residentStatus}
                  placeholder="Select your country of residence"
                />
              </div>

              <label className="flex items-start gap-3 cursor-pointer select-none pt-1">
                <input
                  type="checkbox"
                  checked={form.acceptTerms}
                  onChange={(e) => setField("acceptTerms", e.target.checked)}
                  className={`mt-0.5 h-4 w-4 accent-bg-brand shrink-0 ${errors.acceptTerms ? "ring-2 ring-red-500 rounded" : ""}`}
                />
                <span className={`text-sm ${errors.acceptTerms ? "text-red-600" : "text-text-secondary"}`}>
                  I agree to the{" "}
                  <Link to="/terms" className="text-text-brand font-medium hover:underline">Terms &amp; Conditions</Link>{" "}
                  and consent to being contacted about this application.
                </span>
              </label>

              <button type="submit" className="w-full bg-bg-brand text-white font-bold py-3.5 rounded-full hover:bg-blue-700 transition mt-2">
                Check Eligibility
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
