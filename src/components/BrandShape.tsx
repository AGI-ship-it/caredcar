// The Cared play-mark drawn as two overlapping outlines, used on the solid-blue bands.
// Stroked paths rather than an image asset, so the lines stay crisp at any size.
const MARK =
  "M491.681 201.2L204.931 20.2334C113.839 -37.2581 0 34.6159 0 149.561V511.455C0 626.4 113.839 698.236 204.931 640.783L491.681 459.816C582.773 402.325 582.773 258.653 491.681 201.162";

// Fades out before it reaches the copy, so nothing shows through translucent fields
const FADE = "linear-gradient(to left, #000 55%, transparent 100%)";

export default function BrandShape() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-y-0 end-0 hidden md:block w-[30%] max-w-[380px] overflow-hidden select-none rtl:-scale-x-100"
      style={{ maskImage: FADE, WebkitMaskImage: FADE }}
    >
      {/* Front mark: white on the brand blue, where the reference uses blue on navy */}
      <svg viewBox="0 0 560 661" fill="none" className="absolute top-1/2 -translate-y-1/2 end-[34%] h-[48%] w-auto opacity-40">
        <path d={MARK} stroke="white" strokeWidth={1.5} vectorEffect="non-scaling-stroke" />
      </svg>
      {/* Back mark in the brand green, offset so the two overlap */}
      <svg viewBox="0 0 560 661" fill="none" className="absolute top-1/2 -translate-y-1/2 end-[2%] h-[48%] w-auto opacity-60">
        <path d={MARK} stroke="var(--color-bg-accent)" strokeWidth={1.5} vectorEffect="non-scaling-stroke" />
      </svg>
    </div>
  );
}
