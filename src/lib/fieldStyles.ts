// Shared form-field styling used across every page so inputs, selects,
// and textareas look and behave identically site-wide.

// Base (without width) — for inline toolbar selects that shouldn't stretch.
export const FIELD_BASE =
  "rounded-[10px] border border-border-default bg-white px-4 py-3 text-sm text-text-primary placeholder-text-secondary outline-none transition hover:border-border-strong focus:border-border-focus focus:ring-4 focus:ring-border-focus/15";

// Full-width field — the default for form layouts.
export const FIELD_CLASS = `w-full ${FIELD_BASE}`;

// Error state for form validation (used by the Sell form).
export const FIELD_ERROR_CLASS =
  "w-full rounded-[10px] border border-red-500 bg-red-50 px-4 py-3 text-sm text-text-primary placeholder-text-secondary outline-none transition focus:border-border-focus focus:ring-4 focus:ring-border-focus/15";

// Dark variant — for fields sitting on a dark background (e.g. Finance form).
export const FIELD_CLASS_DARK =
  "w-full rounded-[10px] border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder-text-on-inverse-secondary outline-none transition focus:border-border-focus focus:ring-2 focus:ring-border-focus/25";

// Consistent label above a field.
export const LABEL_CLASS = "block text-sm font-semibold text-text-primary mb-2";

// Convenience: pick field or error class.
export const fieldClass = (error?: boolean) => (error ? FIELD_ERROR_CLASS : FIELD_CLASS);
