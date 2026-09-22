// The round arrow that ends every pill CTA. Put it inside a button or link with the `group` class so it nudges forward on hover.
export default function ArrowCircle({ tone = "brand" }: { tone?: "brand" | "light" }) {
  return (
    <span
      aria-hidden="true"
      className={`flex size-9 shrink-0 items-center justify-center rounded-full transition-transform duration-300 group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5 ${
        tone === "brand" ? "bg-bg-brand text-white" : "bg-white/15 text-white"
      }`}
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" className="size-4 rtl:-scale-x-100">
        <path d="M5 12h13M12.5 6l6 6-6 6" />
      </svg>
    </span>
  );
}
