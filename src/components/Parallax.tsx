import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Offsets ease toward their target each frame instead of snapping, which is what makes the drift feel smooth
const EASE = 0.12;
const MAX_CARD_SHIFT = 60;

type Item = { el: HTMLElement; speed: number; current: number; card: boolean };

// Two kinds of drift, both relative to the middle of the viewport:
// - [data-parallax="<speed>"] (photos): moved through `translate`, measured by the parent since its own rect includes the drift.
// - children of [data-parallax-cards]: each column lags a little more than the one before it, so a row settles
//   in a gentle wave. Written to --py, which the card's `transform` reads, so the hover lift on `translate` still works.
export default function Parallax() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    let items: Item[] = [];

    const collect = () => {
      // Carry over offsets already on the page (after a resize), or the card maths starts from the wrong spot
      items = Array.from(document.querySelectorAll<HTMLElement>("[data-parallax]")).map((el) => ({
        el,
        speed: Number(el.dataset.parallax) || 0,
        current: parseFloat(el.style.translate.split(" ")[1]) || 0,
        card: false,
      }));
      document.querySelectorAll<HTMLElement>("[data-parallax-cards]").forEach((grid) => {
        const columns = getComputedStyle(grid).gridTemplateColumns.split(" ").length || 1;
        Array.from(grid.children).forEach((child, i) => {
          const el = child as HTMLElement;
          items.push({ el, speed: -(0.04 + 0.035 * (i % columns)), current: parseFloat(el.style.getPropertyValue("--py")) || 0, card: true });
        });
      });
    };

    const tick = (snap = false) => {
      frame = 0;
      const vh = window.innerHeight;
      let moving = false;
      for (const item of items) {
        const box = item.card ? item.el.getBoundingClientRect() : item.el.parentElement?.getBoundingClientRect();
        if (!box) continue;
        // A card's rect already includes its own offset, so take it back out to find where it really sits
        const top = item.card ? box.top - item.current : box.top;
        if (top + box.height < -200 || top > vh + 200) continue;
        let target = (vh / 2 - (top + box.height / 2)) * item.speed;
        if (item.card) target = Math.max(-MAX_CARD_SHIFT, Math.min(MAX_CARD_SHIFT, target));
        const next = snap ? target : item.current + (target - item.current) * EASE;
        item.current = Math.abs(target - next) < 0.1 ? target : next;
        if (item.current !== target) moving = true;
        const px = `${item.current.toFixed(2)}px`;
        if (item.card) item.el.style.setProperty("--py", px);
        else item.el.style.translate = `0 ${px}`;
      }
      if (moving) schedule();
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(() => tick());
    };
    const reset = () => {
      collect();
      schedule();
    };

    const init = requestAnimationFrame(() => {
      collect();
      // Land on the resting offsets at once, so nothing slides on first paint
      tick(true);
    });
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", reset);

    return () => {
      cancelAnimationFrame(init);
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", reset);
      for (const { el, card } of items) {
        if (card) el.style.removeProperty("--py");
        else el.style.translate = "";
      }
    };
  }, [pathname]);

  return null;
}
