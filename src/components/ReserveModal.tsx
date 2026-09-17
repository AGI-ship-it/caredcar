import { useState } from "react";
import Select from "./Select";
import { FIELD_CLASS, LABEL_CLASS } from "../lib/fieldStyles";

const COUNTRY_CODES = ["+971", "+966", "+974", "+973", "+965", "+968", "+962", "+20", "+91", "+44", "+1"];

interface ReserveModalProps {
  onClose: () => void;
  carLabel: string;
}

// "Reserve" CTA on the Car Detail page — replaces the old "Contact Us" link.
// Collects name / email / phone (with country code) and links the request to this car.
export default function ReserveModal({ onClose, carLabel }: ReserveModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [countryCode, setCountryCode] = useState("+971");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const next = {
      name: !name.trim(),
      email: !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email),
      phone: !phone.trim(),
    };
    setErrors(next);
    if (Object.values(next).some(Boolean)) return;
    setSubmitted(true);
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" role="dialog" aria-modal="true">
      <div className="absolute inset-0 bg-bg-inverse/70 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-[440px] bg-white rounded-[20px] shadow-2xl max-h-[90vh] overflow-y-auto">
        <button onClick={onClose} className="absolute top-4 right-4 text-text-secondary hover:text-text-primary z-10" aria-label="Close">
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
            <h3 className="text-text-brand text-xl font-extrabold mb-2 font-display">Reservation Requested</h3>
            <p className="text-text-secondary leading-relaxed mb-8">
              We&apos;ve received your reservation request for the {carLabel}. Our team will contact you shortly to confirm.
            </p>
            <button onClick={onClose} className="w-full bg-bg-brand text-white font-bold py-3.5 rounded-full hover:bg-blue-700 transition">
              Done
            </button>
          </div>
        ) : (
          <div className="p-8">
            <h3 className="text-text-brand text-2xl font-extrabold mb-1 font-display">Reserve This Car</h3>
            <p className="text-text-secondary text-sm mb-6">
              For the <span className="font-semibold text-text-primary">{carLabel}</span>. Leave your details and we&apos;ll hold it for you.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <div>
                <label className={LABEL_CLASS}>Full Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your full name"
                  className={`${FIELD_CLASS} ${errors.name ? "border-red-500 bg-red-50" : ""}`}
                />
              </div>

              <div>
                <label className={LABEL_CLASS}>Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className={`${FIELD_CLASS} ${errors.email ? "border-red-500 bg-red-50" : ""}`}
                />
              </div>

              <div>
                <label className={LABEL_CLASS}>Phone Number</label>
                <div className="flex gap-2">
                  <div className="shrink-0 w-[110px]">
                    <Select value={countryCode} onChange={setCountryCode} options={COUNTRY_CODES.map((c) => ({ value: c, label: c }))} placeholder="+971" />
                  </div>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="50 123 4567"
                    className={`${FIELD_CLASS} flex-1 min-w-0 ${errors.phone ? "border-red-500 bg-red-50" : ""}`}
                  />
                </div>
              </div>

              <button type="submit" className="w-full bg-bg-brand text-white font-bold py-3.5 rounded-full hover:bg-blue-700 transition mt-2">
                Reserve
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
