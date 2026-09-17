import { useState } from "react";
import { useAuth } from "../lib/auth";
import AuthGateModal from "./AuthGateModal";

interface FavoriteButtonProps {
  carId: string;
  className?: string;
  size?: number;
  /** When set, renders text next to the icon, e.g. "Save to Favorites" / "Saved to Favorites". */
  labels?: { on: string; off: string };
}

// Heart toggle used on car cards and the car detail page. Gates behind login:
// a logged-out click opens AuthGateModal instead of saving.
export default function FavoriteButton({ carId, className = "", size = 16, labels }: FavoriteButtonProps) {
  const { user, isFavorite, toggleFavorite } = useAuth();
  const [gateOpen, setGateOpen] = useState(false);
  const favorited = isFavorite(carId);

  function handleClick(e: React.MouseEvent) {
    e.stopPropagation();
    if (!user) {
      setGateOpen(true);
      return;
    }
    toggleFavorite(carId);
  }

  return (
    <>
      <button
        onClick={handleClick}
        className={`${labels ? "" : "has-tip"} ${className}`}
        aria-label={favorited ? "Remove from favorites" : "Add to favorites"}
        aria-pressed={favorited}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width={size}
          height={size}
          fill={favorited ? "var(--color-state-error)" : "none"}
          stroke={favorited ? "var(--color-state-error)" : "currentColor"}
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
          />
        </svg>
        {labels ? (
          favorited ? labels.on : labels.off
        ) : (
          <span role="tooltip" className="tip tip--below tip--end">
            {favorited ? "Remove from favorites" : "Add to favorites"}
          </span>
        )}
      </button>
      {gateOpen && <AuthGateModal carId={carId} onClose={() => setGateOpen(false)} />}
    </>
  );
}
