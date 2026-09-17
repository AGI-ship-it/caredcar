import { useState, useMemo } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CarCard from "../components/CarCard";
import { cars, type Car } from "../data/cars";
import SortMenu from "../components/SortMenu";
import BroomIcon from "../components/BroomIcon";
import Button from "../components/Button";
import CompareTray from "../components/CompareTray";

type MultiKey = "make" | "bodyType" | "seats" | "regionalSpec" | "transmission" | "fuelType" | "color" | "engineCapacity" | "promotion";
type RangeKey = "priceRange" | "mileageRange" | "yearRange";

interface Filters extends Record<MultiKey, string[]>, Record<RangeKey, string> {
  model: string;
  minPrice: string;
  maxPrice: string;
  maxMileage: string;
}

const emptyFilters: Filters = {
  make: [], bodyType: [], seats: [], regionalSpec: [], transmission: [], fuelType: [], color: [], engineCapacity: [], promotion: [],
  priceRange: "", mileageRange: "", yearRange: "",
  model: "", minPrice: "", maxPrice: "", maxMileage: "",
};

// Home search hands over make/model plus loose price and mileage bounds that don't line up with the range options
function filtersFromParams(params: URLSearchParams): Filters {
  const make = params.get("make");
  return {
    ...emptyFilters,
    make: make ? [make] : [],
    model: params.get("model") ?? "",
    minPrice: params.get("minPrice") ?? "",
    maxPrice: params.get("maxPrice") ?? "",
    maxMileage: params.get("maxMileage") ?? "",
  };
}

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
function getSeats(c: Car) {
  return c.bodyType === "SUV" ? "7" : c.bodyType === "Coupe" ? "2" : "5";
}
const BODY_LABELS: Record<Car["bodyType"], string> = { Sedan: "Sedan", SUV: "SUV", Hatchback: "Hatchback", Coupe: "Coupe", Pickup: "Pick Up Truck" };
// 500 cc buckets, e.g. "1500 - 1999 cc"; electric cars have no engine capacity
function getEngineBucket(c: Car) {
  const m = c.engineSize.match(/([\d.]+)\s*L/i);
  if (!m) return "";
  const low = Math.floor((parseFloat(m[1]) * 1000) / 500) * 500;
  return `${low} - ${low + 499} cc`;
}
const COLOR_KEYWORDS = ["White", "Black", "Silver", "Grey", "Gray", "Blue", "Red", "Green", "Brown", "Beige", "Gold", "Orange", "Yellow"];
function getBaseColor(c: Car) {
  const found = COLOR_KEYWORDS.find((k) => c.color.toLowerCase().includes(k.toLowerCase()));
  if (!found) return "Other Color";
  return found === "Gray" ? "Grey" : found;
}
const PROMOTIONS = [
  { value: "featured", label: "Featured" },
  { value: "new_arrival", label: "New Arrivals" },
];

const ATTR: Record<Exclude<MultiKey, "promotion">, (c: Car) => string> = {
  make: (c) => c.make,
  bodyType: (c) => BODY_LABELS[c.bodyType],
  seats: getSeats,
  regionalSpec: getRegionalSpec,
  transmission: (c) => c.transmission,
  fuelType: (c) => c.fuelType,
  color: getBaseColor,
  engineCapacity: getEngineBucket,
};
const optionsFor = (get: (c: Car) => string, byNumber = false) =>
  Array.from(new Set(cars.map(get).filter(Boolean))).sort((x, y) => (byNumber ? parseInt(x) - parseInt(y) : x.localeCompare(y)));

// Range options use fixed cut-offs, with the top bucket capped at the highest value in stock
type RangeOption = { value: string; label: string; min: number; max: number };
function buildRanges(cuts: number[], values: number[], label: (lo: number, hi: number) => string): RangeOption[] {
  const top = Math.max(...values);
  return cuts
    .filter((lo) => lo <= top)
    .map((lo, i, arr) => {
      const hi = i < arr.length - 1 ? arr[i + 1] : top;
      return { value: `${lo === 0 ? 0 : lo + 1}:${hi}`, label: label(lo, hi), min: lo === 0 ? 0 : lo + 1, max: hi };
    });
}
const fmtNum = (n: number) => n.toLocaleString("en-US");
const PRICE_OPTIONS = buildRanges([0, 150000, 350000], cars.map((c) => c.price), (lo, hi) => `${fmtNum(lo)} - ${fmtNum(hi)} AED`);
const MILEAGE_OPTIONS = buildRanges([0, 60000, 130000], cars.map((c) => c.mileage), (lo, hi) => `${fmtNum(lo)} - ${fmtNum(hi)} km`);
const YEAR_OPTIONS: RangeOption[] = Array.from(new Set(cars.map((c) => c.year - ((c.year - 2017) % 5 + 5) % 5)))
  .sort((a, b) => a - b)
  .map((lo) => ({ value: `${lo}:${lo + 4}`, label: `${lo} - ${lo + 4}`, min: lo, max: lo + 4 }));
const RANGES: Record<RangeKey, { options: RangeOption[]; get: (c: Car) => number }> = {
  priceRange: { options: PRICE_OPTIONS, get: (c) => c.price },
  mileageRange: { options: MILEAGE_OPTIONS, get: (c) => c.mileage },
  yearRange: { options: YEAR_OPTIONS, get: (c) => c.year },
};

function matchesFilters(c: Car, f: Filters) {
  for (const key of Object.keys(ATTR) as (keyof typeof ATTR)[]) {
    if (f[key].length && !f[key].includes(ATTR[key](c))) return false;
  }
  if (f.promotion.length && !f.promotion.some((p) => (p === "featured" ? c.isFeatured : c.isNew))) return false;
  for (const key of Object.keys(RANGES) as RangeKey[]) {
    const opt = RANGES[key].options.find((o) => o.value === f[key]);
    const v = RANGES[key].get(c);
    if (opt && (v < opt.min || v > opt.max)) return false;
  }
  if (f.model && c.model !== f.model) return false;
  if (f.minPrice && c.price < Number(f.minPrice)) return false;
  if (f.maxPrice && c.price > Number(f.maxPrice)) return false;
  if (f.maxMileage && c.mileage > Number(f.maxMileage)) return false;
  return true;
}

// Collapsible filter group, closed by default like caredcars.com
function FilterGroup({ title, active = 0, children }: { title: string; active?: number; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <section className="border-b border-border-default last:border-b-0">
      <button type="button" onClick={() => setOpen((o) => !o)} aria-expanded={open} className="w-full flex items-center justify-between gap-2 py-4 text-start">
        <span className="flex items-center gap-2 text-text-primary text-[15px] font-semibold">
          {title}
          {active > 0 && <span className="min-w-[18px] h-[18px] px-1 rounded-full bg-bg-brand text-white text-[11px] font-semibold flex items-center justify-center tabular-nums">{active}</span>}
        </span>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className={`text-text-secondary transition-transform duration-200 ${open ? "rotate-180" : ""}`} aria-hidden="true">
          <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      {open && <div className="flex flex-col gap-3 pb-4">{children}</div>}
    </section>
  );
}

function FilterOption({ type, name, checked, onChange, children }: { type: "checkbox" | "radio"; name: string; checked: boolean; onChange: () => void; children: React.ReactNode }) {
  return (
    <label className="flex items-center gap-3 text-sm text-text-primary cursor-pointer">
      <input
        type={type}
        name={name}
        checked={checked}
        onChange={onChange}
        onClick={type === "radio" && checked ? onChange : undefined}
        className="size-[18px] shrink-0 accent-bg-brand"
      />
      <span>{children}</span>
    </label>
  );
}

export default function Buy() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [filters, setFilters] = useState<Filters>(() => filtersFromParams(searchParams));
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

  function toggleMulti(key: MultiKey, value: string) {
    setFilters((prev) => ({ ...prev, [key]: prev[key].includes(value) ? prev[key].filter((v) => v !== value) : [...prev[key], value] }));
    setVisibleCount(9);
  }

  // Clicking the selected range again clears it, since radios can't be unticked
  function toggleRange(key: RangeKey, value: string) {
    setFilters((prev) => ({ ...prev, [key]: prev[key] === value ? "" : value }));
    setVisibleCount(9);
  }

  type ActiveChip = { key: string; label: string; clear: () => void };
  const labelFor = (key: MultiKey, v: string) => (key === "seats" ? `${v} Seats` : key === "promotion" ? PROMOTIONS.find((p) => p.value === v)?.label ?? v : v);
  const activeChips: ActiveChip[] = [
    ...(["make", "bodyType", "seats", "regionalSpec", "transmission", "fuelType", "color", "engineCapacity", "promotion"] as const).flatMap((key) =>
      filters[key].map((v) => ({ key: `${key}:${v}`, label: labelFor(key, v), clear: () => toggleMulti(key, v) })),
    ),
    ...(["priceRange", "mileageRange", "yearRange"] as const)
      .filter((key) => filters[key])
      .map((key) => ({
        key,
        label: RANGES[key].options.find((o) => o.value === filters[key])?.label ?? filters[key],
        clear: () => toggleRange(key, filters[key]),
      })),
    ...(filters.model ? [{ key: "model", label: filters.model, clear: () => setFilters((f) => ({ ...f, model: "" })) }] : []),
    ...(filters.minPrice || filters.maxPrice
      ? [{
          key: "price",
          label: `AED ${fmtNum(Number(filters.minPrice || 0))}${filters.maxPrice ? ` - ${fmtNum(Number(filters.maxPrice))}` : "+"}`,
          clear: () => setFilters((f) => ({ ...f, minPrice: "", maxPrice: "" })),
        }]
      : []),
    ...(filters.maxMileage
      ? [{ key: "maxMileage", label: `Up to ${fmtNum(Number(filters.maxMileage))} km`, clear: () => setFilters((f) => ({ ...f, maxMileage: "" })) }]
      : []),
  ];

  const multiGroups: { key: MultiKey; title: string; options: { value: string; label: string }[] }[] = [
    { key: "make", title: "Make", options: optionsFor(ATTR.make).map((v) => ({ value: v, label: v })) },
    { key: "bodyType", title: "Body Type", options: optionsFor(ATTR.bodyType).map((v) => ({ value: v, label: v })) },
    { key: "seats", title: "Seat Count", options: optionsFor(ATTR.seats, true).map((v) => ({ value: v, label: v })) },
    { key: "regionalSpec", title: "Regional Spec", options: optionsFor(ATTR.regionalSpec).map((v) => ({ value: v, label: v })) },
    { key: "transmission", title: "Transmission", options: optionsFor(ATTR.transmission).map((v) => ({ value: v, label: v })) },
    { key: "fuelType", title: "Fuel Type", options: optionsFor(ATTR.fuelType).map((v) => ({ value: v, label: v })) },
    { key: "color", title: "Exterior Color", options: optionsFor(ATTR.color).map((v) => ({ value: v, label: v })) },
    { key: "engineCapacity", title: "Engine Capacity", options: optionsFor(ATTR.engineCapacity, true).map((v) => ({ value: v, label: v })) },
    { key: "promotion", title: "Promotions", options: PROMOTIONS },
  ];
  const rangeGroups: { key: RangeKey; title: string }[] = [
    { key: "priceRange", title: "Total Price" },
    { key: "mileageRange", title: "Mileage" },
    { key: "yearRange", title: "Year" },
  ];
  const group = (title: string) => {
    const multi = multiGroups.find((g) => g.title === title);
    if (multi) {
      return (
        <FilterGroup key={multi.key} title={multi.title} active={filters[multi.key].length}>
          {multi.options.map((o) => (
            <FilterOption key={o.value} type="checkbox" name={multi.key} checked={filters[multi.key].includes(o.value)} onChange={() => toggleMulti(multi.key, o.value)}>
              {o.label}
            </FilterOption>
          ))}
        </FilterGroup>
      );
    }
    const range = rangeGroups.find((g) => g.title === title)!;
    return (
      <FilterGroup key={range.key} title={range.title} active={filters[range.key] ? 1 : 0}>
        {RANGES[range.key].options.map((o) => (
          <FilterOption key={o.value} type="radio" name={range.key} checked={filters[range.key] === o.value} onChange={() => toggleRange(range.key, o.value)}>
            {o.label}
          </FilterOption>
        ))}
      </FilterGroup>
    );
  };
  const GROUP_ORDER = ["Make", "Total Price", "Body Type", "Seat Count", "Mileage", "Year", "Regional Spec", "Transmission", "Fuel Type", "Exterior Color", "Engine Capacity", "Promotions"];

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
                    Filter
                    {activeChips.length > 0 && (
                      <span className="text-xs font-semibold text-text-brand bg-bg-brand-soft rounded-full px-2 py-0.5 tabular-nums">{activeChips.length}</span>
                    )}
                  </h2>
                  <button onClick={clearFilters} disabled={activeChips.length === 0} className="inline-flex items-center gap-1.5 text-sm text-text-brand font-medium hover:underline disabled:text-text-disabled disabled:no-underline">
                    <BroomIcon size={15} />
                    Reset
                  </button>
                </div>

                {GROUP_ORDER.map(group)}
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
                      key={c.key}
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
