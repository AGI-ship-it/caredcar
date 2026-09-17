import { useCallback, useState, type ImgHTMLAttributes } from "react";

// Shows a shimmer placeholder until the image has loaded, then fades the image in.
// The wrapper takes the size and shape; the image always fills it.
export default function SmartImage({
  wrapperClassName = "",
  className = "",
  style,
  onLoad,
  onError,
  ...img
}: ImgHTMLAttributes<HTMLImageElement> & { wrapperClassName?: string }) {
  const [status, setStatus] = useState<"loading" | "loaded" | "error">("loading");

  // Cached images can finish before React attaches onLoad.
  const ref = useCallback((el: HTMLImageElement | null) => {
    if (el?.complete) setStatus(el.naturalWidth > 0 ? "loaded" : "error");
  }, []);

  // A wrapper that is itself absolutely positioned must not also get `relative`,
  // or it collapses to zero height and the image never shows.
  const positioned = /(^|\s)(absolute|fixed|sticky)(\s|$)/.test(wrapperClassName);

  return (
    <span className={`${positioned ? "" : "relative"} block overflow-hidden bg-bg-subtle ${wrapperClassName}`} aria-busy={status === "loading"}>
      {status === "loading" && <span aria-hidden="true" className="img-shimmer absolute inset-0" />}
      {status === "error" && (
        <span className="absolute inset-0 flex flex-col items-center justify-center gap-1 text-text-secondary text-xs">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M3 13l2-5a2 2 0 011.9-1.4h10.2A2 2 0 0119 8l2 5v4a1 1 0 01-1 1h-1.2a2 2 0 01-3.6 0H8.8a2 2 0 01-3.6 0H4a1 1 0 01-1-1v-4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
            <path d="M3 13h18" stroke="currentColor" strokeWidth="1.5" />
          </svg>
          Image unavailable
        </span>
      )}
      <img
        ref={ref}
        {...img}
        onLoad={(e) => {
          setStatus("loaded");
          onLoad?.(e);
        }}
        onError={(e) => {
          setStatus("error");
          onError?.(e);
        }}
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${status === "loaded" ? "opacity-100" : "opacity-0"} ${className}`}
        style={style}
      />
    </span>
  );
}
