// Broom glyph for "clear filters" actions.
export default function BroomIcon({ size = 16, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>
      <path d="M19.5 3.5l-7.2 7.2" />
      <path d="M13.8 9.2l1.9 1.9c.6.6.6 1.5 0 2.1l-.9.9-4-4 .9-.9c.6-.6 1.5-.6 2.1 0z" />
      <path d="M10.8 10.1L4 16.9c1.4 1.8 3.3 3.2 5.4 3.9l.8-2.4.9 2.1c.9 0 1.8-.3 2.5-.8l1.2-4.8" />
      <path d="M6.4 18.3l1.7-1.7" />
    </svg>
  );
}
