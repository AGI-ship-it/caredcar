import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Heroes have their own load animation, so only the sections below them reveal on scroll
const SELECTOR = "section:not(.page-hero):not(.hero-parallax)";
// Long enough for the last staggered card to finish
const CLEANUP_MS = 1500;

// Fades each page section up as it scrolls into view. The classes are removed once the
// animation ends, so a finished section keeps no stacking context to trap dropdowns or modals.
export default function ScrollReveal() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const timers: number[] = [];
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const el = entry.target;
          observer.unobserve(el);
          el.classList.add("is-visible");
          timers.push(window.setTimeout(() => el.classList.remove("reveal", "is-visible"), CLEANUP_MS));
        }
      },
      { rootMargin: "0px 0px -12% 0px" },
    );

    const frame = requestAnimationFrame(() => {
      document.querySelectorAll(SELECTOR).forEach((el) => {
        el.classList.add("reveal");
        observer.observe(el);
      });
    });

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      timers.forEach(clearTimeout);
      document.querySelectorAll(".reveal").forEach((el) => el.classList.remove("reveal", "is-visible"));
    };
  }, [pathname]);

  return null;
}
