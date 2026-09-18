// Brand outline shape for the solid-blue bands. Drawn as a stroked path rather than
// the masked SVG asset, so the line stays crisp at any size.
const PATH =
  "M491.681 201.2L204.931 20.2334C113.839 -37.2581 0 34.6159 0 149.561V511.455C0 626.4 113.839 698.236 204.931 640.783L491.681 459.816C582.773 402.325 582.773 258.653 491.681 201.162";

function Shape({ className, opacity }: { className: string; opacity: number }) {
  return (
    <svg
      viewBox="0 0 560 661"
      fill="none"
      aria-hidden="true"
      className={`pointer-events-none absolute select-none ${className}`}
      style={{ opacity }}
    >
      <path d={PATH} stroke="white" strokeWidth={1.5} vectorEffect="non-scaling-stroke" />
    </svg>
  );
}

export default function BrandShape() {
  return (
    <>
      <Shape className="-start-[9%] top-[-22%] h-[145%] w-auto" opacity={0.3} />
      <Shape className="-end-[11%] bottom-[-28%] h-[135%] w-auto rotate-180" opacity={0.22} />
    </>
  );
}
