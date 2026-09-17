import { useEffect, useRef, useState } from "react";

type Option = { value: string; label: string };

// Compact sort control: outlined trigger with a sort icon, and a floating list
// where the current choice sits on a tinted row.
export default function SortMenu({ value, options, onChange }: { value: string; options: Option[]; onChange: (v: string) => void }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const current = options.find((o) => o.value === value) ?? options[0];

  useEffect(() => {
    if (!open) return;
    setActive(Math.max(0, options.findIndex((o) => o.value === value)));
    const onDown = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  function choose(v: string) {
    onChange(v);
    setOpen(false);
  }

  function onKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Escape") return setOpen(false);
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault();
      if (!open) return setOpen(true);
      setActive((i) => (i + (e.key === "ArrowDown" ? 1 : -1) + options.length) % options.length);
    }
    if ((e.key === "Enter" || e.key === " ") && open) {
      e.preventDefault();
      choose(options[active].value);
    }
  }

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        onKeyDown={onKeyDown}
        className={`flex items-center gap-2.5 h-[44px] ps-3.5 pe-3 rounded-[10px] border bg-white text-[15px] font-medium text-text-primary transition-colors ${
          open ? "border-(--color-text-primary)" : "border-(--color-text-primary)/70 hover:border-(--color-text-primary)"
        }`}
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
          <path d="M3 5.5h14M3 10h9M3 14.5h5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
        <span className="whitespace-nowrap">{current.label}</span>
        <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true" className={`ms-1 transition-transform duration-200 ${open ? "" : "rotate-180"}`}>
          <path d="M6 3.5l4 5H2l4-5z" fill="currentColor" />
        </svg>
      </button>

      {open && (
        <ul
          role="listbox"
          className="sort-menu absolute end-0 top-[calc(100%+8px)] z-40 min-w-full w-max p-2 rounded-[14px] bg-white border border-border-default shadow-[0_16px_40px_rgba(18,42,94,0.14)]"
        >
          {options.map((o, i) => {
            const selected = o.value === value;
            return (
              <li key={o.value || "default"} role="option" aria-selected={selected}>
                <button
                  type="button"
                  onMouseEnter={() => setActive(i)}
                  onClick={() => choose(o.value)}
                  className={`w-full px-5 py-2.5 rounded-[10px] text-center text-[15px] whitespace-nowrap transition-colors ${
                    selected
                      ? "bg-bg-brand-soft text-text-brand font-semibold"
                      : active === i
                        ? "bg-bg-surface text-text-primary"
                        : "text-text-secondary"
                  }`}
                >
                  {o.label}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
