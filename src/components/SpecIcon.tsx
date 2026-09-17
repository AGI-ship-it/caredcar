// Small inline icons for car spec tags (transmission, mileage, engine, etc.),
// shared across every product card so spec pills read consistently.

export type SpecKind =
  | "transmission"
  | "mileage"
  | "engine"
  | "fuel"
  | "body"
  | "seats"
  | "color"
  | "year"
  | "generic";

// Guess the icon from a free-text badge label (used where tags are plain strings).
export function inferSpecKind(text: string): SpecKind {
  const t = text.toLowerCase();
  if (/(automatic|manual|cvt|gearbox|transmission)/.test(t)) return "transmission";
  if (/(km|mile|mileage|odometer)/.test(t)) return "mileage";
  if (/(cc|litre|liter|\bl\b|\d\.\dl|v6|v8|v12|engine)/.test(t)) return "engine";
  if (/(petrol|diesel|hybrid|electric|fuel|gasoline)/.test(t)) return "fuel";
  if (/(sedan|suv|hatchback|coupe|pickup|truck|convertible|van)/.test(t)) return "body";
  if (/seat/.test(t)) return "seats";
  return "generic";
}

export default function SpecIcon({
  kind,
  size = 12,
  className = "",
}: {
  kind: SpecKind;
  size?: number;
  className?: string;
}) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className: `shrink-0 ${className}`,
  };

  switch (kind) {
    case "transmission":
      // gear / cog
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="3" />
          <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M19.1 4.9L17 7M7 17l-2.1 2.1" />
        </svg>
      );
    case "mileage":
      // speedometer / gauge
      return (
        <svg {...common}>
          <path d="M3.5 15a9 9 0 1 1 17 0" />
          <path d="M12 13l4-3" />
          <circle cx="12" cy="13" r="1" fill="currentColor" stroke="none" />
        </svg>
      );
    case "engine":
      // engine block
      return (
        <svg {...common}>
          <path d="M5 9h2V7h4v2h3l3 3v0h2v4h-2v2H8l-3-3H3v-4h2z" />
        </svg>
      );
    case "fuel":
      // fuel pump
      return (
        <svg {...common}>
          <path d="M4 20V5a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2v15" />
          <path d="M3 20h11" />
          <path d="M4 11h7" />
          <path d="M13 8l3 3v6a2 2 0 0 0 2 2 2 2 0 0 0 2-2V9l-3-3" />
        </svg>
      );
    case "body":
      // car silhouette
      return (
        <svg {...common}>
          <path d="M3 13l2-5a2 2 0 0 1 1.9-1.3h10.2A2 2 0 0 1 19 8l2 5" />
          <path d="M3 13h18v4H3z" />
          <circle cx="7.5" cy="17.5" r="1.5" />
          <circle cx="16.5" cy="17.5" r="1.5" />
        </svg>
      );
    case "seats":
      // seat
      return (
        <svg {...common}>
          <path d="M6 19v-2h9v2" />
          <path d="M6 17V8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v5h4a2 2 0 0 1 2 2v2" />
        </svg>
      );
    case "color":
      // paint droplet
      return (
        <svg {...common}>
          <path d="M12 3s6 6.5 6 10a6 6 0 0 1-12 0c0-3.5 6-10 6-10z" />
        </svg>
      );
    case "year":
      // calendar
      return (
        <svg {...common}>
          <rect x="3" y="5" width="18" height="16" rx="2" />
          <path d="M3 9h18M8 3v4M16 3v4" />
        </svg>
      );
    default:
      // generic tag / check
      return (
        <svg {...common}>
          <path d="M12 2l2.4 5 5.6.6-4 4 1 5.4-5-2.6-5 2.6 1-5.4-4-4 5.6-.6z" />
        </svg>
      );
  }
}
