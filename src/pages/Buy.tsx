import { useState, useMemo } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CarCard from "../components/CarCard";
import { cars, Car } from "../data/cars";
import SortMenu from "../components/SortMenu";
import BroomIcon from "../components/BroomIcon";
import Button from "../components/Button";
import CompareTray from "../components/CompareTray";

const toOpts = (arr: string[]) => arr.map((v) => ({ value: v, label: v }));

interface Filters {
  make: string;
  bodyType: string;
  fuelType: string;
  transmission: string;
  regionalSpec: string;
  seats: string;
  engineCapacity: string;
  color: string;
  promotion: string;
  minPrice: string;
  maxPrice: string;
  minYear: string;
  maxYear: string;
  model: string;
  maxMileage: string;
}

const emptyFilters: Filters = {
  make: "",
  bodyType: "",
  fuelType: "",
  transmission: "",
  regionalSpec: "",
  seats: "",
  engineCapacity: "",
  color: "",
  promotion: "",
  minPrice: "",
  maxPrice: "",
  minYear: "",
  maxYear: "",
  model: "",
  maxMileage: "",
};

function filtersFromParams(params: URLSearchParams): Filters {
  return {
    ...emptyFilters,
    make: params.get("make") ?? "",
    model: params.get("model") ?? "",
    minPrice: params.get("minPrice") ?? "",
    maxPrice: params.get("maxPrice") ?? "",
    maxMileage: params.get("maxMileage") ?? "",
  };
}

const allMakes = Array.from(new Set(cars.map((c) => c.make))).sort();

// ── Derived attributes (kept consistent between the filter UI and matching) ──
const REGIONAL_SPECS = ["GCC Spec", "European Spec", "American Spec", "Imported"];
function strHash(s: string) {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0;
  return h;
}
function getRegionalSpec(c: Car) {
  return REGIONAL_SPECS[strHash(c.id) % REGIONAL_SPECS.length];
}
function getSeats(c: Car): number {
  switch (c.bodyType) {
    case "SUV": return 7;
    case "Coupe": return 2;
    default: return 5; // Sedan, Hatchback, Pickup
  }
}
const ENGINE_BUCKETS = [
  { value: "0-2", label: "Under 2.0L" },
  { value: "2-3", label: "2.0L – 3.0L" },
  { value: "3-4", label: "3.0L – 4.0L" },
  { value: "4+", label: "4.0L & above" },
];
function getEngineLiters(c: Car) {
  const m = c.engineSize.match(/([\d.]+)/);
  return m ? parseFloat(m[1]) : 0;
}
function getEngineBucket(c: Car) {
  const l = getEngineLiters(c);
  if (l < 2) return "0-2";
  if (l < 3) return "2-3";
  if (l < 4) return "3-4";
  return "4+";
}
const COLOR_KEYWORDS = ["White", "Black", "Silver", "Grey", "Gray", "Blue", "Red", "Green", "Brown", "Beige", "Gold", "Orange", "Yellow"];
function getBaseColor(c: Car) {
  const found = COLOR_KEYWORDS.find((k) => c.color.toLowerCase().includes(k.toLowerCase()));
  if (!found) return "Other";
  return found === "Gray" ? "Grey" : found;
}
const allColors = Array.from(new Set(cars.map(getBaseColor))).sort();
const allSeats = Array.from(new Set(cars.map(getSeats))).sort((a, b) => a - b);

const BODY_TYPES = ["Sedan", "SUV", "Hatchback", "Coupe", "Pickup"] as const;
const FUEL_TYPES = ["Petrol", "Diesel", "Electric", "Hybrid"] as const;
const SWATCH: Record<string, string> = {
  White: "#ffffff", Black: "#111418", Silver: "#c9ced6", Grey: "#7b828e", Blue: "#2f5fd0", Red: "#c8342f",
  Green: "#2f7d4f", Brown: "#7a5236", Beige: "#d9c7a5", Gold: "#c9a24b", Orange: "#e07b2a", Yellow: "#e8c63a", Other: "#b8bcc6",
};
const PRICE_STEP = 5000;
const PRICE_MIN = Math.floor(Math.min(...cars.map((c) => c.price)) / PRICE_STEP) * PRICE_STEP;
const PRICE_MAX = Math.ceil(Math.max(...cars.map((c) => c.price)) / PRICE_STEP) * PRICE_STEP;
const YEAR_MIN = Math.min(...cars.map((c) => c.year));
const YEAR_MAX = Math.max(...cars.map((c) => c.year));

function matchesFilters(c: Car, f: Filters, ignore?: keyof Filters) {
  const on = (k: keyof Filters) => ignore !== k && f[k] !== "";
  if (on("make") && c.make !== f.make) return false;
  if (on("model") && c.model !== f.model) return false;
  if (on("maxMileage") && c.mileage > Number(f.maxMileage)) return false;
  if (on("bodyType") && c.bodyType !== f.bodyType) return false;
  if (on("fuelType") && c.fuelType !== f.fuelType) return false;
  if (on("transmission") && c.transmission !== f.transmission) return false;
  if (on("regionalSpec") && getRegionalSpec(c) !== f.regionalSpec) return false;
  if (on("seats") && String(getSeats(c)) !== f.seats) return false;
  if (on("engineCapacity") && getEngineBucket(c) !== f.engineCapacity) return false;
  if (on("color") && getBaseColor(c) !== f.color) return false;
  if (on("promotion") && ((f.promotion === "featured" && !c.isFeatured) || (f.promotion === "new" && !c.isNew))) return false;
  if (ignore !== "minPrice" && f.minPrice && c.price < Number(f.minPrice)) return false;
  if (ignore !== "minPrice" && f.maxPrice && c.price > Number(f.maxPrice)) return false;
  if (ignore !== "minYear" && f.minYear && c.year < Number(f.minYear)) return false;
  if (ignore !== "minYear" && f.maxYear && c.year > Number(f.maxYear)) return false;
  return true;
}

function BodyIcon({ type }: { type: string }) {
  const paths: Record<string, string> = {
    Sedan: "M3 15.5h26M5 15.5l2.5-4.5c.5-.9 1.4-1.5 2.4-1.5h9.6c.9 0 1.7.4 2.2 1.1l3.3 4.9M5 15.5v2.5h2.2M26.8 15.5v2.5h-2.2M12 18h8",
    SUV: "M3 16h26M5 16l1.5-6c.2-.9 1-1.5 1.9-1.5h13.2c.8 0 1.5.4 1.9 1.1L27 16M5 16v2.5h2.2M27 16v2.5h-2.2M12 18.5h8M15 8.5v7",
    Hatchback: "M4 15.5h24M6 15.5l3-5.3c.4-.7 1.1-1.2 2-1.2h8.2c.8 0 1.5.4 1.9 1l3.9 5.5M6 15.5v2.5h2.2M26 15.5v2.5h-2.2M13 18h6",
    Coupe: "M3 16h26M5 16l4.5-4.2c.9-.8 2-1.3 3.2-1.3h5.8c1.1 0 2.2.5 3 1.2L27 16M5 16v2h2.2M27 16v2h-2.2M12 18h8",
    Pickup: "M3 16h26M5 16l1.8-5.5c.3-.9 1.1-1.5 2-1.5H16v7M16 11.5h11v4.5M5 16v2.5h2.2M27 16v2.5h-2.2M12 18.5h8",
  };
  return (
    <svg width="32" height="24" viewBox="0 0 32 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={paths[type]} />
      <circle cx="9.5" cy="18.5" r="2" />
      <circle cx="22.5" cy="18.5" r="2" />
    </svg>
  );
}

function FuelIcon({ type }: { type: string }) {
  const d: Record<string, string> = {
    Petrol: "M5 20V6a2 2 0 012-2h6a2 2 0 012 2v14M4 20h12M7 9h6M15 10h2a2 2 0 012 2v4a1 1 0 002 0V9l-3-3",
    Diesel: "M12 3.5s6 6.4 6 10.5a6 6 0 01-12 0c0-4.1 6-10.5 6-10.5z",
    Electric: "M13 3L5 13.5h6L10 21l8-10.5h-6L13 3z",
    Hybrid: "M5 19c0-8 6-13 14-14 0 8-5 14-13 14M5 19l7-7",
  };
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={d[type]} />
    </svg>
  );
}

// Collapsible filter group; shows how many options are active in it.
function FilterGroup({ title, active = 0, defaultOpen = true, children }: { title: string; active?: number; defaultOpen?: boolean; children: React.ReactNode }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <section className="border-b border-border-default last:border-b-0 py-4 first:pt-0">
      <button type="button" onClick={() => setOpen((o) => !o)} aria-expanded={open} className="w-full flex items-center justify-between gap-2 text-start">
        <span className="flex items-center gap-2 text-text-primary text-sm font-semibold">
          {title}
          {active > 0 && <span className="min-w-[18px] h-[18px] px-1 rounded-full bg-bg-brand text-white text-[11px] font-semibold flex items-center justify-center tabular-nums">{active}</span>}
        </span>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className={`text-text-secondary transition-transform duration-200 ${open ? "rotate-180" : ""}`} aria-hidden="true">
          <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      {open && <div className="pt-3">{children}</div>}
    </section>
  );
}

const chip = (on: boolean, disabled = false) =>
  `inline-flex items-center gap-1.5 h-[34px] px-3 rounded-full border text-[13px] font-medium transition-colors ${
    on
      ? "bg-bg-brand border-border-focus text-white"
      : disabled
        ? "bg-white border-border-default text-text-disabled cursor-not-allowed"
        : "bg-white border-border-default text-text-primary hover:border-border-focus hover:text-text-brand"
  }`;

// Two thumbs on one track; empty string means "no bound".
function RangeSlider({
  min, max, step, low, high, onChange, format, histogram,
}: {
  min: number; max: number; step: number; low: number; high: number;
  onChange: (low: number, high: number) => void; format: (v: number) => string; histogram?: number[];
}) {
  const pct = (v: number) => ((v - min) / (max - min)) * 100;
  const peak = histogram ? Math.max(1, ...histogram) : 1;
  return (
    <div>
      {histogram && (
        <div className="flex items-end gap-[2px] h-[40px] px-[2px]" aria-hidden="true">
          {histogram.map((n, i) => {
            const binLow = min + (i * (max - min)) / histogram.length;
            const inRange = binLow + (max - min) / histogram.length > low && binLow < high;
            return (
              <span
                key={i}
                className={`flex-1 rounded-t-[3px] transition-colors ${inRange ? "bg-bg-brand/70" : "bg-bg-subtle"}`}
                style={{ height: `${n ? Math.max(12, (n / peak) * 100) : 4}%` }}
              />
            );
          })}
        </div>
      )}
      <div className="range-dual relative h-[24px]">
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[4px] rounded-full bg-bg-subtle" />
        <div className="absolute top-1/2 -translate-y-1/2 h-[4px] rounded-full bg-bg-brand" style={{ left: `${pct(low)}%`, right: `${100 - pct(high)}%` }} />
        <input type="range" aria-label="Minimum" min={min} max={max} step={step} value={low}
          onChange={(e) => onChange(Math.min(Number(e.target.value), high - step), high)} />
        <input type="range" aria-label="Maximum" min={min} max={max} step={step} value={high}
          onChange={(e) => onChange(low, Math.max(Number(e.target.value), low + step))} />
      </div>
      <div className="mt-2 flex items-center justify-between text-[13px] font-semibold text-text-primary tabular-nums">
        <span className="px-2.5 py-1 rounded-[8px] bg-bg-surface">{format(low)}</span>
        <span className="text-text-secondary font-normal">to</span>
        <span className="px-2.5 py-1 rounded-[8px] bg-bg-surface">{format(high)}</span>
      </div>
    </div>
  );
}

export default function Buy() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [filters, setFilters] = useState<Filters>(() => filtersFromParams(searchParams));
  const [showAllMakes, setShowAllMakes] = useState(false);
  const [sort, setSort] = useState("year-desc");
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(9);
  const [compareIds, setCompareIds] = useState<(number | string)[]>([]);

  const compareCars = cars.filter((c) => compareIds.includes(c.id));

  function toggleCompare(car: Car) {
    setCompareIds((prev) =>
      prev.includes(car.id)
        ? prev.filter((id) => id !== car.id)
        : prev.length >= 3
          ? prev
          : [...prev, car.id]
    );
  }

  const filtered = useMemo(() => {
    const result = cars.filter((c) => matchesFilters(c, filters));
    if (sort === "price-asc") result.sort((a, b) => a.price - b.price);
    if (sort === "price-desc") result.sort((a, b) => b.price - a.price);
    if (sort === "year-desc") result.sort((a, b) => b.year - a.year);
    if (sort === "year-asc") result.sort((a, b) => a.year - b.year);
    if (sort === "mileage-asc") result.sort((a, b) => a.mileage - b.mileage);
    return result;
  }, [filters, sort]);

  const visible = filtered.slice(0, visibleCount);

  function clearFilters() {
    setFilters(emptyFilters);
    setVisibleCount(9);
  }

  function setFilter(key: keyof Filters, value: string) {
    setFilters((prev) => ({ ...prev, [key]: prev[key] === value ? "" : value }));
    setVisibleCount(9);
  }

  const facet = (key: keyof Filters, test: (c: Car) => boolean) =>
    cars.filter((c) => matchesFilters(c, filters, key) && test(c)).length;

  const priceLow = filters.minPrice ? Number(filters.minPrice) : PRICE_MIN;
  const priceHigh = filters.maxPrice ? Number(filters.maxPrice) : PRICE_MAX;
  const yearLow = filters.minYear ? Number(filters.minYear) : YEAR_MIN;
  const yearHigh = filters.maxYear ? Number(filters.maxYear) : YEAR_MAX;
  const PRICE_BINS = 16;
  const priceHistogram = Array.from({ length: PRICE_BINS }, (_, i) => {
    const lo = PRICE_MIN + (i * (PRICE_MAX - PRICE_MIN)) / PRICE_BINS;
    const hi = lo + (PRICE_MAX - PRICE_MIN) / PRICE_BINS;
    return cars.filter((c) => matchesFilters(c, filters, "minPrice") && c.price >= lo && (c.price < hi || (i === PRICE_BINS - 1 && c.price <= hi))).length;
  });

  const makeOptions = allMakes
    .map((m) => ({ make: m, count: facet("make", (c) => c.make === m) }))
    .sort((x, y) => y.count - x.count || x.make.localeCompare(y.make));
  const shownMakes = showAllMakes ? makeOptions : makeOptions.slice(0, 8);

  const fmtAed = (v: number) => (v >= 1000 ? `${Math.round(v / 1000)}k` : String(v));

  type ActiveChip = { label: string; clear: () => void };
  const activeChips: ActiveChip[] = [
    ...(["make", "model", "bodyType", "fuelType", "transmission", "regionalSpec", "engineCapacity", "color"] as const)
      .filter((k) => filters[k])
      .map((k) => ({
        label: k === "engineCapacity" ? ENGINE_BUCKETS.find((b) => b.value === filters[k])?.label ?? filters[k] : filters[k],
        clear: () => setFilters((f) => ({ ...f, [k]: "" })),
      })),
    ...(filters.seats ? [{ label: `${filters.seats} Seats`, clear: () => setFilters((f) => ({ ...f, seats: "" })) }] : []),
    ...(filters.promotion ? [{ label: filters.promotion === "new" ? "New Arrival" : "Featured", clear: () => setFilters((f) => ({ ...f, promotion: "" })) }] : []),
    ...(filters.minPrice || filters.maxPrice
      ? [{ label: `AED ${fmtAed(priceLow)} – ${fmtAed(priceHigh)}`, clear: () => setFilters((f) => ({ ...f, minPrice: "", maxPrice: "" })) }]
      : []),
    ...(filters.minYear || filters.maxYear
      ? [{ label: `${yearLow} – ${yearHigh}`, clear: () => setFilters((f) => ({ ...f, minYear: "", maxYear: "" })) }]
      : []),
    ...(filters.maxMileage
      ? [{ label: `Up to ${Number(filters.maxMileage).toLocaleString("en-US")} km`, clear: () => setFilters((f) => ({ ...f, maxMileage: "" })) }]
      : []),
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Hero */}
      <section className="bg-bg-inverse page-hero">
        <div className="container-x text-center">
          <h1 className="text-white text-5xl font-bold font-display">
            Browse Our Cars
          </h1>
          <p className="text-text-secondary mt-2 text-lg">
            Find your perfect pre-owned vehicle from our curated UAE collection
          </p>
        </div>
      </section>

      {/* Main content */}
      <main className="flex-1 bg-white">
        <div className={`container-x py-10 ${compareCars.length > 0 ? "pb-32" : ""}`}>
          <div className="flex flex-col md:flex-row gap-6 md:gap-8">
            {/* Filters toggle (small screens) */}
            <button
              type="button"
              onClick={() => setFiltersOpen((o) => !o)}
              aria-expanded={filtersOpen}
              aria-controls="buy-filters"
              className="md:hidden flex items-center justify-between w-full h-[48px] px-4 rounded-[12px] border border-border-default text-text-primary font-semibold"
            >
              <span className="flex items-center gap-2">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true"><path d="M4 6h16M7 12h10M10 18h4" /></svg>
                Filters
              </span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className={`transition-transform ${filtersOpen ? "rotate-180" : ""}`} aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>

            {/* Sidebar filters */}
            <aside id="buy-filters" className={`w-full md:w-[280px] shrink-0 ${filtersOpen ? "block" : "hidden"} md:block`}>
              <div className="md:sticky md:top-[96px] md:max-h-[calc(100vh-120px)] md:overflow-y-auto rounded-[20px] border border-border-default bg-white p-5 shadow-[0_10px_30px_rgba(28,41,88,0.05)]">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="flex items-center gap-2 font-extrabold text-text-brand text-lg">
                    Filters
                    {activeChips.length > 0 && (
                      <span className="text-xs font-semibold text-text-brand bg-bg-brand-soft rounded-full px-2 py-0.5 tabular-nums">{activeChips.length}</span>
                    )}
                  </h2>
                  <button onClick={clearFilters} disabled={activeChips.length === 0} className="inline-flex items-center gap-1.5 text-sm text-text-brand font-medium hover:underline disabled:text-text-disabled disabled:no-underline">
                    <BroomIcon size={15} />
                    Reset
                  </button>
                </div>

                <FilterGroup title="Price" active={filters.minPrice || filters.maxPrice ? 1 : 0}>
                  <RangeSlider
                    min={PRICE_MIN} max={PRICE_MAX} step={PRICE_STEP} low={priceLow} high={priceHigh}
                    histogram={priceHistogram}
                    format={(v) => `AED ${fmtAed(v)}`}
                    onChange={(lo, hi) => {
                      setFilters((f) => ({ ...f, minPrice: lo <= PRICE_MIN ? "" : String(lo), maxPrice: hi >= PRICE_MAX ? "" : String(hi) }));
                      setVisibleCount(9);
                    }}
                  />
                </FilterGroup>

                <FilterGroup title="Make" active={filters.make ? 1 : 0}>
                  <div className="flex flex-wrap gap-2">
                    {shownMakes.map(({ make, count }) => (
                      <button key={make} type="button" aria-pressed={filters.make === make} disabled={count === 0 && filters.make !== make}
                        onClick={() => setFilter("make", make)} className={chip(filters.make === make, count === 0)}>
                        {make}
                        <span className={`text-[11px] tabular-nums ${filters.make === make ? "text-white/80" : "text-text-secondary"}`}>{count}</span>
                      </button>
                    ))}
                  </div>
                  {makeOptions.length > 8 && (
                    <button type="button" onClick={() => setShowAllMakes((v) => !v)} className="mt-3 text-sm font-medium text-text-brand hover:underline">
                      {showAllMakes ? "Show fewer" : `Show all ${makeOptions.length} makes`}
                    </button>
                  )}
                </FilterGroup>

                <FilterGroup title="Body type" active={filters.bodyType ? 1 : 0}>
                  <div className="grid grid-cols-3 gap-2">
                    {BODY_TYPES.map((t) => {
                      const on = filters.bodyType === t;
                      const count = facet("bodyType", (c) => c.bodyType === t);
                      return (
                        <button key={t} type="button" aria-pressed={on} disabled={count === 0 && !on} onClick={() => setFilter("bodyType", t)}
                          className={`flex flex-col items-center gap-1 rounded-[12px] border py-2.5 text-[12px] font-medium transition-colors ${
                            on ? "border-border-focus bg-bg-brand-soft text-text-brand" : count === 0 ? "border-border-default text-text-disabled cursor-not-allowed" : "border-border-default text-text-primary hover:border-border-focus"
                          }`}>
                          <BodyIcon type={t} />
                          {t}
                        </button>
                      );
                    })}
                  </div>
                </FilterGroup>

                <FilterGroup title="Fuel type" active={filters.fuelType ? 1 : 0}>
                  <div className="grid grid-cols-2 gap-2">
                    {FUEL_TYPES.map((t) => {
                      const on = filters.fuelType === t;
                      const count = facet("fuelType", (c) => c.fuelType === t);
                      return (
                        <button key={t} type="button" aria-pressed={on} disabled={count === 0 && !on} onClick={() => setFilter("fuelType", t)}
                          className={`${chip(on, count === 0)} justify-start rounded-[10px] h-[40px]`}>
                          <FuelIcon type={t} />
                          {t}
                          <span className={`ms-auto text-[11px] tabular-nums ${on ? "text-white/80" : "text-text-secondary"}`}>{count}</span>
                        </button>
                      );
                    })}
                  </div>
                </FilterGroup>

                <FilterGroup title="Transmission" active={filters.transmission ? 1 : 0}>
                  <div className="grid grid-cols-3 p-1 rounded-full bg-bg-surface" role="radiogroup" aria-label="Transmission">
                    {["", "Automatic", "Manual"].map((t) => {
                      const on = filters.transmission === t;
                      return (
                        <button key={t || "any"} type="button" role="radio" aria-checked={on}
                          onClick={() => setFilters((f) => ({ ...f, transmission: t }))}
                          className={`h-[34px] rounded-full text-[13px] font-semibold transition-colors ${on ? "bg-white text-text-primary shadow-[0_1px_3px_rgba(18,42,94,0.15)]" : "text-text-secondary hover:text-text-primary"}`}>
                          {t || "Any"}
                        </button>
                      );
                    })}
                  </div>
                </FilterGroup>

                <FilterGroup title="Year" active={filters.minYear || filters.maxYear ? 1 : 0}>
                  <RangeSlider
                    min={YEAR_MIN} max={YEAR_MAX} step={1} low={yearLow} high={yearHigh}
                    format={(v) => String(v)}
                    onChange={(lo, hi) => {
                      setFilters((f) => ({ ...f, minYear: lo <= YEAR_MIN ? "" : String(lo), maxYear: hi >= YEAR_MAX ? "" : String(hi) }));
                      setVisibleCount(9);
                    }}
                  />
                </FilterGroup>

                <FilterGroup title="Exterior colour" active={filters.color ? 1 : 0}>
                  <div className="flex flex-wrap gap-2.5">
                    {allColors.map((col) => {
                      const on = filters.color === col;
                      const count = facet("color", (c) => getBaseColor(c) === col);
                      return (
                        <button key={col} type="button" aria-pressed={on} aria-label={`${col} (${count})`} disabled={count === 0 && !on}
                          onClick={() => setFilter("color", col)}
                          className={`has-tip relative size-[32px] rounded-full border transition-all disabled:opacity-35 disabled:cursor-not-allowed ${on ? "ring-2 ring-offset-2 ring-border-focus border-transparent" : "border-border-default hover:scale-110"}`}
                          style={{ background: SWATCH[col] ?? SWATCH.Other }}>
                          {on && (
                            <svg className="absolute inset-0 m-auto" width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                              <path d="M3.5 8.5l3 3 6-7" stroke={["White", "Silver", "Beige", "Yellow"].includes(col) ? "var(--color-text-primary)" : "#fff"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          )}
                          <span role="tooltip" className="tip tip--below">{col}</span>
                        </button>
                      );
                    })}
                  </div>
                </FilterGroup>

                <FilterGroup title="Seats" active={filters.seats ? 1 : 0} defaultOpen={false}>
                  <div className="flex flex-wrap gap-2">
                    {allSeats.map((n) => {
                      const v = String(n);
                      const count = facet("seats", (c) => getSeats(c) === n);
                      return (
                        <button key={v} type="button" aria-pressed={filters.seats === v} disabled={count === 0 && filters.seats !== v}
                          onClick={() => setFilter("seats", v)} className={chip(filters.seats === v, count === 0)}>
                          {n} seats
                        </button>
                      );
                    })}
                  </div>
                </FilterGroup>

                <FilterGroup title="Engine size" active={filters.engineCapacity ? 1 : 0} defaultOpen={false}>
                  <div className="flex flex-wrap gap-2">
                    {ENGINE_BUCKETS.map((b) => {
                      const count = facet("engineCapacity", (c) => getEngineBucket(c) === b.value);
                      return (
                        <button key={b.value} type="button" aria-pressed={filters.engineCapacity === b.value} disabled={count === 0 && filters.engineCapacity !== b.value}
                          onClick={() => setFilter("engineCapacity", b.value)} className={chip(filters.engineCapacity === b.value, count === 0)}>
                          {b.label}
                        </button>
                      );
                    })}
                  </div>
                </FilterGroup>

                <FilterGroup title="Regional spec" active={filters.regionalSpec ? 1 : 0} defaultOpen={false}>
                  <div className="flex flex-wrap gap-2">
                    {REGIONAL_SPECS.map((r) => {
                      const count = facet("regionalSpec", (c) => getRegionalSpec(c) === r);
                      return (
                        <button key={r} type="button" aria-pressed={filters.regionalSpec === r} disabled={count === 0 && filters.regionalSpec !== r}
                          onClick={() => setFilter("regionalSpec", r)} className={chip(filters.regionalSpec === r, count === 0)}>
                          {r}
                        </button>
                      );
                    })}
                  </div>
                </FilterGroup>

                <FilterGroup title="Offers" active={filters.promotion ? 1 : 0} defaultOpen={false}>
                  <div className="flex flex-col gap-3">
                    {[{ v: "featured", label: "Featured cars only" }, { v: "new", label: "New arrivals only" }].map((o) => {
                      const on = filters.promotion === o.v;
                      return (
                        <label key={o.v} className="flex items-center justify-between gap-3 text-sm text-text-primary cursor-pointer">
                          {o.label}
                          <button type="button" role="switch" aria-checked={on} onClick={() => setFilter("promotion", o.v)}
                            className={`relative w-[40px] h-[22px] rounded-full transition-colors ${on ? "bg-bg-brand" : "bg-bg-subtle"}`}>
                            <span className={`absolute top-[3px] start-[3px] size-[16px] rounded-full bg-white shadow transition-transform ${on ? "translate-x-[18px] rtl:-translate-x-[18px]" : ""}`} />
                          </button>
                        </label>
                      );
                    })}
                  </div>
                </FilterGroup>
              </div>
            </aside>

            {/* Results */}
            <div className="flex-1 min-w-0">
              {/* Top bar */}
              <div className="flex items-center justify-between mb-6">
                <p className="text-text-secondary text-sm">
                  Showing{" "}
                  <span className="font-semibold text-text-primary">{filtered.length}</span>{" "}
                  vehicles
                </p>
<SortMenu
                  value={sort}
                  onChange={(v) => { setSort(v); setVisibleCount(9); }}
                  options={[
                    { value: "price-asc", label: "Price: Low to High" },
                    { value: "price-desc", label: "Price: High to Low" },
                    { value: "year-desc", label: "Year: Newest First" },
                    { value: "year-asc", label: "Year: Oldest First" },
                    { value: "mileage-asc", label: "Mileage: Low to High" },
                  ]}
                />
              </div>

              {activeChips.length > 0 && (
                <div className="flex flex-wrap items-center gap-2 -mt-2 mb-6">
                  {activeChips.map((c) => (
                    <button
                      key={c.label}
                      type="button"
                      onClick={() => {
                        c.clear();
                        setVisibleCount(9);
                      }}
                      className="inline-flex items-center gap-1.5 bg-bg-brand-soft text-text-primary text-sm font-medium ps-3 pe-2 py-1 rounded-full hover:bg-bg-brand-soft transition-colors"
                      aria-label={`Remove filter: ${c.label}`}
                    >
                      {c.label}
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>
                    </button>
                  ))}
                  <button type="button" onClick={clearFilters} className="inline-flex items-center gap-1.5 text-sm font-medium text-text-brand hover:underline ms-1"><BroomIcon size={15} />Clear all</button>
                </div>
              )}

              {filtered.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-24 text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-16 h-16 text-gray-200 mb-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <h3 className="text-text-brand font-extrabold text-xl mb-2">No vehicles found</h3>
                  <p className="text-text-secondary text-sm mb-6">
                    Try adjusting your filters to see more results.
                  </p>
                  <Button onClick={clearFilters}><BroomIcon size={16} />Clear Filters</Button>
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {visible.map((car) => (
                      <CarCard
                        key={car.id}
                        car={car}
                        onToggleCompare={toggleCompare}
                        isComparing={compareIds.includes(car.id)}
                      />
                    ))}
                  </div>

                  {/* Progress + load more */}
                  {(() => {
                    const shown = Math.min(visibleCount, filtered.length);
                    const pct = Math.round((shown / filtered.length) * 100);
                    return (
                      <div className="mt-12 mx-auto w-full max-w-[420px] flex flex-col items-center gap-4 text-center">
                        <p className="text-text-primary text-base" aria-live="polite">
                          {shown < filtered.length
                            ? `You've viewed ${shown} of ${filtered.length} cars`
                            : `You've viewed all ${filtered.length} cars`}
                        </p>
                        <div
                          role="progressbar"
                          aria-valuemin={0}
                          aria-valuemax={filtered.length}
                          aria-valuenow={shown}
                          aria-label="Cars viewed"
                          className="w-full h-[6px] rounded-full bg-bg-subtle overflow-hidden"
                        >
                          <div className="h-full rounded-full bg-bg-inverse transition-[width] duration-500 ease-out" style={{ width: `${pct}%` }} />
                        </div>
                        {shown < filtered.length && (
                          <button
                            type="button"
                            onClick={() => setVisibleCount((v) => v + 9)}
                            className="mt-2 h-[48px] px-10 rounded-[10px] bg-bg-brand text-white font-semibold hover:bg-bg-brand-hover transition-colors"
                          >
                            Load More
                          </button>
                        )}
                      </div>
                    );
                  })()}
                </>
              )}
            </div>
          </div>
        </div>
      </main>

      <CompareTray
        cars={compareCars}
        onRemove={(id) => setCompareIds((prev) => prev.filter((x) => x !== id))}
        onClear={() => setCompareIds([])}
      />

      <Footer />
    </div>
  );
}
