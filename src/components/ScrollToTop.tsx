import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Resets the window scroll position to the top whenever the route path changes,
// so navigating between pages always starts at the top instead of retaining the
// previous page's scroll offset.
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
