import { useEffect, useRef, useState } from "react";
import { FIELD_CLASS, FIELD_ERROR_CLASS, FIELD_BASE } from "../lib/fieldStyles";

export type SelectOption = { value: string; label: string };

// A custom dropdown with a white floating list. The closed trigger matches the shared field style.
export default function Select({
  value,
  onChange,
  options,
  placeholder = "Select",
  error = false,
  className = "",
  compact = false,
  searchable = false,
  searchPlaceholder = "Search by name or brand…",
}: {
  value: string;
  onChange: (v: string) => void;
  options: SelectOption[];
  placeholder?: string;
  error?: boolean;
  className?: string;
  compact?: boolean;
  searchable?: boolean;
  searchPlaceholder?: string;
}) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const ref = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  // Clear the query and focus the search box whenever the dropdown opens.
  useEffect(() => {
    if (!open) {
      setQuery("");
      return;
    }
    if (searchable) {
      const t = setTimeout(() => searchRef.current?.focus(), 0);
      return () => clearTimeout(t);
    }
  }, [open, searchable]);

  useEffect(() => {
    if (!open) return;
    const onDocClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const selected = options.find((o) => o.value === value);
  const displayLabel = selected && selected.value !== "" ? selected.label : null;

  const triggerBase = compact ? `${FIELD_BASE} py-2 w-full` : error ? FIELD_ERROR_CLASS : FIELD_CLASS;

  const q = query.trim().toLowerCase();
  const visibleOptions =
    searchable && q
      ? options.filter((o) => o.value === "" || o.label.toLowerCase().includes(q))
      : options;

  return (
    <div className={`relative ${compact ? "" : "w-full"} ${className}`} ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className={`${triggerBase} flex items-center justify-between gap-2 text-left ${open ? "!border-border-focus ring-4 ring-border-focus/15" : ""}`}
      >
        <span className={`truncate ${displayLabel ? "text-text-primary" : "text-text-secondary"}`}>
          {displayLabel || placeholder}
        </span>
        <svg
          className="shrink-0 transition-transform duration-200"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path d="M4 6l4 4 4-4" stroke={open ? "var(--color-text-brand)" : "var(--color-text-secondary)"} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open && (
        <div className="select-menu absolute top-full start-0 mt-[8px] w-full rounded-[14px] overflow-hidden z-[60] bg-white border border-border-default shadow-[0_16px_40px_rgba(18,42,94,0.14)]">
          {searchable && (
            <div className="p-2 border-b border-border-default">
              <div className="relative">
                <svg className="absolute start-3 top-1/2 -translate-y-1/2 pointer-events-none text-text-secondary" width="15" height="15" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="1.6" />
                  <path d="M14 14l3 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
                <input
                  ref={searchRef}
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder={searchPlaceholder}
                  className="w-full rounded-[10px] bg-bg-surface border border-transparent ps-[34px] pe-3 py-2 text-sm text-text-primary placeholder-text-secondary outline-none focus:bg-white focus:border-border-focus focus:ring-4 focus:ring-border-focus/15"
                />
              </div>
            </div>
          )}
          <div role="listbox" className="max-h-[260px] overflow-y-auto p-1.5">
            {searchable && visibleOptions.filter((o) => o.value !== "").length === 0 && (
              <div className="px-4 py-3 text-sm text-text-secondary">No matches found</div>
            )}
            {visibleOptions.map((opt) => {
              const isSelected = opt.value === value;
              return (
                <button
                  key={opt.value}
                  type="button"
                  role="option"
                  aria-selected={isSelected}
                  onClick={() => {
                    onChange(opt.value);
                    setOpen(false);
                  }}
                  className={`w-full flex items-center justify-between gap-3 text-start px-3.5 py-2.5 rounded-[10px] text-[15px] transition-colors ${
                    isSelected ? "bg-bg-brand-soft text-text-brand font-semibold" : "text-text-primary hover:bg-bg-surface"
                  }`}
                >
                  <span className="truncate">{opt.label}</span>
                  {isSelected && (
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="shrink-0">
                      <path d="M3.5 8.5l3 3 6-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
