import { useEffect, useRef, useState } from "react";
import { HOURS_LINES, PHONE_DISPLAY, showroomStatus } from "../lib/contactInfo";

// Desktop "Call Us": a small contact card instead of a raw tel: link, since most
// computers can't place a call. Offers the number and opening hours.
export default function ContactMenu({ trigger }: { trigger: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const status = showroomStatus();

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  async function copyNumber() {
    try {
      await navigator.clipboard.writeText(PHONE_DISPLAY);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="relative" ref={ref}>
      <button type="button" aria-haspopup="dialog" aria-expanded={open} onClick={() => setOpen((o) => !o)} className="block rounded-[99px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--color-bg-accent)">
        {trigger}
      </button>

      {open && (
        <div role="dialog" aria-label="Contact us" className="contact-card absolute end-0 top-[calc(100%+14px)] z-[70] w-[340px] rounded-[20px] bg-white text-start shadow-[0_24px_60px_rgba(0,0,40,0.28)] border border-border-default overflow-hidden">
          <div className="p-5">
            <p className="text-xs font-medium text-text-secondary">Sales & enquiries</p>
            <div className="mt-1 flex items-center gap-3">
              <p className="text-lg font-bold text-text-primary tabular-nums">{PHONE_DISPLAY}</p>
              <button
                type="button"
                onClick={copyNumber}
                className={`inline-flex items-center gap-1.5 h-8 ps-2.5 pe-3 rounded-full text-xs font-semibold transition-colors ${copied ? "bg-bg-accent-soft text-text-success" : "bg-bg-surface text-text-primary hover:bg-bg-brand-soft hover:text-text-brand"}`}
                aria-live="polite"
              >
                {copied ? (
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M3.5 8.5l3 3 6-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ) : (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="9" y="9" width="11" height="11" rx="2.5" />
                    <path d="M15 9V6.5A2.5 2.5 0 0012.5 4h-6A2.5 2.5 0 004 6.5v6A2.5 2.5 0 006.5 15H9" />
                  </svg>
                )}
                {copied ? "Copied" : "Copy"}
              </button>
            </div>

            <div className="mt-3 flex items-start gap-2.5 rounded-[12px] bg-bg-surface px-3 py-2.5">
              <span aria-hidden="true" className={`mt-[6px] size-2 shrink-0 rounded-full ${status.open ? "bg-state-success" : "bg-state-warning"}`} />
              <div className="text-[13px] leading-snug">
                <p className={`font-semibold ${status.open ? "text-text-success" : "text-[#9a5b00]"}`}>{status.label}</p>
                {HOURS_LINES.map((l) => (
                  <p key={l} className="text-text-secondary">{l}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
