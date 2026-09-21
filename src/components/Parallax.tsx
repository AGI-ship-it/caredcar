import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Drifts every [data-parallax="<speed>"] element against the scroll, by its speed times the distance
// between its box and the middle of the viewport. It measures the parent, since the element's own
// rect already includes the drift, and moves through `translate` so Tailwind transforms still apply.
export default function Parallax() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    let els: HTMLElement[] = [];

    const update = () => {
      frame = 0;
      const mid = window.innerHeight / 2;
      for (const el of els) {
        const box = el.parentElement?.getBoundingClientRect();
        if (!box || box.bottom < -200 || box.top > window.innerHeight + 200) continue;
        const speed = Number(el.dataset.parallax) || 0;
        el.style.translate = `0 ${((mid - (box.top + box.height / 2)) * speed).toFixed(1)}px`;
      }
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    const init = requestAnimationFrame(() => {
      els = Array.from(document.querySelectorAll<HTMLElement>("[data-parallax]"));
      update();
    });
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);

    return () => {
      cancelAnimationFrame(init);
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      els.forEach((el) => (el.style.translate = ""));
    };
  }, [pathname]);

  return null;
}
