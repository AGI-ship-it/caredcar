// The trailing arrow on pill CTAs. It takes the button's text colour; put it inside a button or link with the `group` class so it nudges forward on hover.
export default function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-[18px] shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 rtl:-scale-x-100 rtl:group-hover:-translate-x-0.5"
    >
      <path d="M5 12h13M12.5 6l6 6-6 6" />
    </svg>
  );
}
