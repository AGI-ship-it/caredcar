import svgPaths from "../imports/LayerCopy/svg-4unp76bud4";

// Reusable UAE Dirham symbol, rendered from the imported Figma glyph.
// The raw path is authored upside-down, so it is flipped vertically to
// render right-side up (matching the design).
export default function DirhamSymbol({
  color = "var(--color-text-primary)",
  size = 16,
  className = "",
}: {
  color?: string;
  size?: number;
  className?: string;
}) {
  const width = (size * 21) / 18;
  return (
    <span
      role="img"
      aria-label="AED"
      className={`inline-block flex-none -scale-y-100 ${className}`}
      style={{ width, height: size }}
    >
      <svg
        className="block size-full"
        fill="none"
        height="18"
        preserveAspectRatio="none"
        viewBox="0 0 21 18"
        width="21"
      >
        <path d={svgPaths.p1fc68680} fill={color} />
      </svg>
    </span>
  );
}
