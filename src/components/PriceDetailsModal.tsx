import DirhamSymbol from "./DirhamSymbol";

interface PriceDetailsModalProps {
  onClose: () => void;
  monthlyPayment: number;
  downPaymentPercent: number;
  tenureMonths: number;
  annualRate: number;
}

const INCLUDED = [
  {
    title: "Warranty Included",
    desc: "12-month coverage (terms apply).",
    icon: (
      <svg fill="none" height="24" viewBox="0 0 24 24" width="24"><path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /><path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
    ),
  },
  {
    title: "Inspection & Verification",
    desc: "Multi-point inspection + quality checks.",
    icon: (
      <svg fill="none" height="24" viewBox="0 0 24 24" width="24"><path d="M3 13l2-5a2 2 0 012-1.5h10a2 2 0 012 1.5l2 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /><rect x="2.5" y="13" width="19" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.6" /><circle cx="7" cy="19" r="1.4" stroke="currentColor" strokeWidth="1.4" /><circle cx="17" cy="19" r="1.4" stroke="currentColor" strokeWidth="1.4" /><path d="M9.5 16.2l1.3 1.3 3-3.2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
    ),
  },
  {
    title: "Verified History",
    desc: "Mileage + ownership records confirmed.",
    icon: (
      <svg fill="none" height="24" viewBox="0 0 24 24" width="24"><path d="M12 8v4l3 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /><path d="M3 12a9 9 0 119 9 9 9 0 01-7-3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /><path d="M3 8v4h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
    ),
  },
  {
    title: "Service-backed support",
    desc: "Registration, insurance, and after-sale support.",
    icon: (
      <svg fill="none" height="24" viewBox="0 0 24 24" width="24"><path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /><path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
    ),
  },
];

// "Price Details" CTA on the Car Detail page — replaces the old "Book a Visit" link.
export default function PriceDetailsModal({ onClose, monthlyPayment, downPaymentPercent, tenureMonths, annualRate }: PriceDetailsModalProps) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" role="dialog" aria-modal="true">
      <div className="absolute inset-0 bg-bg-inverse/70 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-[520px] bg-white rounded-[20px] shadow-2xl max-h-[90vh] overflow-y-auto p-8">
        <div className="flex items-start justify-between mb-6">
          <h3 className="text-text-brand text-3xl font-extrabold font-display">Car Price Breakdown</h3>
          <button onClick={onClose} className="text-text-secondary hover:text-text-primary shrink-0" aria-label="Close">
            <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <div className="text-center mb-6">
          <p className="text-text-primary text-sm mb-1">Estimated monthly</p>
          <p className="inline-flex items-center gap-2 text-text-brand text-4xl font-bold font-display">
            <DirhamSymbol size={26} color="var(--color-text-brand)" />
            {Math.round(monthlyPayment).toLocaleString("en-AE")}
            <span className="text-xl">/mo</span>
          </p>
          <p className="text-text-secondary text-sm mt-2">
            Based on {downPaymentPercent}% down · {Math.round(tenureMonths / 12)} {Math.round(tenureMonths / 12) === 1 ? "year" : "years"} · {annualRate.toFixed(1)}% rate
          </p>
        </div>

        <hr className="border-gray-200 mb-6" />

        <p className="text-text-brand font-bold text-lg mb-5">
          What&apos;s Included? <span className="text-text-secondary font-normal text-sm">(at no extra cost)</span>
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5 mb-6">
          {INCLUDED.map((item) => (
            <div key={item.title} className="flex items-start gap-3">
              <div className="shrink-0 w-11 h-11 rounded-[10px] border border-border-focus/30 bg-bg-brand-soft flex items-center justify-center text-text-brand">
                {item.icon}
              </div>
              <div>
                <p className="text-text-brand font-semibold text-sm">{item.title}</p>
                <p className="text-text-secondary text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <hr className="border-gray-200 mb-4" />
        <p className="text-text-secondary text-xs leading-relaxed">
          Final figures may vary based on bank approval, down payment, and tenure. This breakdown is for transparency. No hidden surprises.
        </p>
      </div>
    </div>
  );
}
