import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Resets the window scroll position to the top whenever the route path changes,
// so navigating between pages always starts at the top instead of retaining the
// previous page's scroll offset. A hash (e.g. /finance#emi-calculator) lands on
// that section instead.
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const target = hash && document.getElementById(decodeURIComponent(hash.slice(1)));
    if (target) target.scrollIntoView();
    else window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}
