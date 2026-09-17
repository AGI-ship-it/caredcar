import { Fragment, useMemo, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Select from "../components/Select";
import Button from "../components/Button";
import DirhamSymbol from "../components/DirhamSymbol";
import imgCompareHero from "@/imports/compare-hero.jpg";
import { cars, type Car } from "../data/cars";

const MAX_SLOTS = 3;

type Cell = { value: React.ReactNode; raw: string };

interface SpecRow {
  label: string;
  cell: (c: Car) => Cell;
  // Rows with a clear "better" direction get a Best badge on the winning car(s)
  best?: { pick: "min" | "max"; get: (c: Car) => number };
}

interface SpecGroup {
  title: string;
  rows: SpecRow[];
}

const text = (raw: string): Cell => ({ value: raw, raw });

const yesNo = (yes: boolean): Cell => ({
  raw: yes ? "yes" : "no",
  value: yes ? (
    <span className="inline-flex items-center gap-1.5 text-text-success font-medium">
      <svg viewBox="0 0 20 20" fill="none" className="size-4" aria-hidden="true"><path d="M4.5 10.5l3.5 3.5 7.5-8" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
      Yes
    </span>
  ) : (
    <span className="inline-flex items-center gap-1.5 text-text-disabled">
      <svg viewBox="0 0 20 20" fill="none" className="size-4" aria-hidden="true"><path d="M6 6l8 8M14 6l-8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
      No
    </span>
  ),
});

const specGroups: SpecGroup[] = [
  {
    title: "Pricing",
    rows: [
      {
        label: "Price",
        best: { pick: "min", get: (c) => c.price },
        cell: (c) => ({
          raw: String(c.price),
          value: (
            <span className="inline-flex items-center gap-1.5 font-bold text-text-primary tabular-nums">
              <DirhamSymbol size={16} />
              {c.price.toLocaleString("en-AE")}
            </span>
          ),
        }),
      },
      {
        label: "Monthly (est.)",
        best: { pick: "min", get: (c) => c.monthlyPayment },
        cell: (c) => ({
          raw: String(c.monthlyPayment),
          value: (
            <span className="inline-flex items-center gap-1 text-text-primary tabular-nums">
              <DirhamSymbol size={12} color="var(--color-text-secondary)" />
              {c.monthlyPayment.toLocaleString("en-AE")}
              <span className="text-text-secondary">/mo</span>
            </span>
          ),
        }),
      },
    ],
  },
  {
    title: "Engine & Performance",
    rows: [
      { label: "Engine", cell: (c) => text(c.engineSize) },
      { label: "Fuel Type", cell: (c) => text(c.fuelType) },
      { label: "Transmission", cell: (c) => text(c.transmission) },
    ],
  },
  {
    title: "Body & Design",
    rows: [
      { label: "Body Type", cell: (c) => text(c.bodyType) },
      { label: "Model Year", best: { pick: "max", get: (c) => c.year }, cell: (c) => text(String(c.year)) },
      { label: "Exterior Colour", cell: (c) => text(c.color) },
    ],
  },
  {
    title: "Usage",
    rows: [
      {
        label: "Mileage",
        best: { pick: "min", get: (c) => c.mileage },
        cell: (c) => ({ raw: String(c.mileage), value: <span className="tabular-nums">{c.mileage.toLocaleString("en-US")} km</span> }),
      },
    ],
  },
  {
    title: "Highlights",
    rows: [
      { label: "Certified New", cell: (c) => yesNo(Boolean(c.isNew)) },
      { label: "Featured Pick", cell: (c) => yesNo(Boolean(c.isFeatured)) },
      { label: "Automatic", cell: (c) => yesNo(c.transmission === "Automatic") },
      { label: "Eco Friendly", cell: (c) => yesNo(c.fuelType === "Electric" || c.fuelType === "Hybrid") },
    ],
  },
];

// Starter pairs for the empty state: the two cheapest cars of each popular body type
const SUGGESTIONS = (["SUV", "Sedan", "Pickup"] as const)
  .map((type) => cars.filter((c) => c.bodyType === type).sort((x, y) => x.price - y.price).slice(0, 2))
  .filter((pair) => pair.length === 2);

const carLabel = (c: Car) => `${c.year} ${c.make} ${c.model}`;

export default function Compare() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const [highlight, setHighlight] = useState(true);
  const [onlyDiffs, setOnlyDiffs] = useState(false);
  const [copied, setCopied] = useState(false);

  const selectedIds = useMemo(() => {
    const raw = (searchParams.get("ids") || "")
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);
    // de-dupe, keep only real cars, cap at MAX_SLOTS
    const seen = new Set<string>();
    const out: string[] = [];
    for (const id of raw) {
      if (!seen.has(id) && cars.some((c) => c.id === id)) {
        seen.add(id);
        out.push(id);
      }
      if (out.length >= MAX_SLOTS) break;
    }
    return out;
  }, [searchParams]);

  const selectedCars = selectedIds
    .map((id) => cars.find((c) => c.id === id))
    .filter((c): c is Car => Boolean(c));

  function commitIds(ids: string[]) {
    if (ids.length) setSearchParams({ ids: ids.join(",") });
    else setSearchParams({});
  }

  function setSlot(index: number, id: string) {
    const next = [...selectedIds];
    if (!id) {
      next.splice(index, 1);
    } else if (index >= next.length) {
      next.push(id);
    } else {
      next[index] = id;
    }
    commitIds(Array.from(new Set(next)).slice(0, MAX_SLOTS));
  }

  function removeSlot(index: number) {
    const next = [...selectedIds];
    next.splice(index, 1);
    commitIds(next);
  }

  // Options for a given slot: all cars minus ones already picked in other slots.
  function optionsForSlot(currentId?: string) {
    const taken = new Set(selectedIds.filter((id) => id !== currentId));
    return [
      { value: "", label: "Select a model" },
      ...cars
        .filter((c) => !taken.has(c.id))
        .map((c) => ({ value: c.id, label: carLabel(c) })),
    ];
  }

  // Slots to render: filled cars + one empty "add" slot if room remains.
  const slotCount = Math.min(selectedCars.length + 1, MAX_SLOTS);

  const rowDiffers = (row: SpecRow) => {
    if (selectedCars.length < 2) return false;
    const first = row.cell(selectedCars[0]).raw;
    return selectedCars.some((c) => row.cell(c).raw !== first);
  };

  // A car wins a row only when the values actually differ, so ties don't all get badges
  const isBest = (row: SpecRow, car: Car) => {
    if (!row.best || !rowDiffers(row)) return false;
    const values = selectedCars.map(row.best.get);
    const target = row.best.pick === "min" ? Math.min(...values) : Math.max(...values);
    return row.best.get(car) === target;
  };

  const allRows = specGroups.flatMap((g) => g.rows);
  const diffCount = allRows.filter(rowDiffers).length;

  function copyLink() {
    navigator.clipboard?.writeText(window.location.href).then(() => {
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden bg-bg-inverse page-hero">
        <img
          src={imgCompareHero}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* Light studio shot with the car behind the centred heading, so tint it and darken the text band */}
        <div aria-hidden="true" className="absolute inset-0 bg-bg-inverse/55" />
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse 60% 55% at 50% 58%, color-mix(in srgb, var(--color-bg-inverse) 70%, transparent), transparent)" }}
        />
        <div className="container-x relative text-center">
          <h1 className="text-white text-5xl font-bold font-display">
            Compare Models
          </h1>
          <p className="text-white/85 mt-2 text-lg">
            Pick up to {MAX_SLOTS} cars and weigh their specs, pricing and features side by side.
          </p>
        </div>
      </section>

      <main className="flex-1 bg-white">
        <div className="container-x py-10">
          {/* Controls */}
          <div className="flex items-center justify-between gap-4 mb-6 flex-wrap">
            <p className="text-text-secondary text-sm">
              {selectedCars.length === 0 ? (
                "No cars selected yet."
              ) : (
                <>
                  Comparing <span className="font-semibold text-text-primary">{selectedCars.length}</span> of {MAX_SLOTS} cars
                  {selectedCars.length > 1 && (
                    <>
                      {" · "}
                      <span className="font-semibold text-text-primary">{diffCount}</span> {diffCount === 1 ? "difference" : "differences"}
                    </>
                  )}
                </>
              )}
            </p>
            {selectedCars.length > 0 && (
              <div className="flex items-center gap-x-5 gap-y-2 flex-wrap">
                <label className="flex items-center gap-2 cursor-pointer select-none text-sm text-text-primary">
                  <input type="checkbox" checked={highlight} onChange={(e) => setHighlight(e.target.checked)} className="size-4 accent-bg-brand" />
                  Highlight differences
                </label>
                <label className={`flex items-center gap-2 select-none text-sm ${selectedCars.length > 1 ? "cursor-pointer text-text-primary" : "text-text-disabled"}`}>
                  <input type="checkbox" checked={onlyDiffs} disabled={selectedCars.length < 2} onChange={(e) => setOnlyDiffs(e.target.checked)} className="size-4 accent-bg-brand" />
                  Only differences
                </label>
                <button type="button" onClick={copyLink} className="inline-flex items-center gap-1.5 text-sm font-medium text-text-brand hover:underline" aria-live="polite">
                  <svg viewBox="0 0 20 20" fill="none" className="size-4" aria-hidden="true"><path d="M8.5 11.5a3.5 3.5 0 005 0l2.5-2.5a3.5 3.5 0 00-5-5l-1 1M11.5 8.5a3.5 3.5 0 00-5 0L4 11a3.5 3.5 0 005 5l1-1" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" /></svg>
                  {copied ? "Link copied" : "Copy link"}
                </button>
                <button onClick={() => commitIds([])} className="text-sm font-medium text-text-brand hover:underline">
                  Clear all
                </button>
              </div>
            )}
          </div>

          {/* Selection slots */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            {Array.from({ length: slotCount }).map((_, i) => {
              const car = selectedCars[i];
              return (
                <div
                  key={i}
                  className="rounded-[14px] border border-border-default bg-bg-surface p-4 flex flex-col"
                >
                  {car ? (
                    <>
                      <div className="relative mb-3 aspect-[4/3] w-full">
                        <img
                          src={car.image}
                          alt={carLabel(car)}
                          className="absolute inset-0 h-full w-full rounded-[10px] object-cover"
                        />
                        <button
                          onClick={() => removeSlot(i)}
                          className="absolute top-2 right-2 bg-white rounded-full p-1.5 shadow-sm text-text-secondary hover:text-text-primary"
                          aria-label="Remove car"
                        >
                          <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4">
                            <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                          </svg>
                        </button>
                      </div>
                      <p className="text-text-secondary text-xs">{car.make}</p>
                      <p className="text-text-primary font-semibold mb-3">
                        {car.year} {car.model}
                      </p>
                      <Select
                        value={car.id}
                        onChange={(v) => setSlot(i, v)}
                        options={optionsForSlot(car.id)}
                        placeholder="Change model"
                        searchable
                      />
                    </>
                  ) : (
                    <div className="flex flex-col items-center justify-center text-center h-full min-h-[220px]">
                      <div className="h-12 w-12 rounded-full bg-bg-brand-soft flex items-center justify-center text-text-brand mb-3">
                        <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
                          <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                      </div>
                      <p className="text-text-primary font-semibold mb-1">Add a car</p>
                      <p className="text-text-secondary text-xs mb-4">Choose a model to compare</p>
                      <div className="w-full">
                        <Select
                          value=""
                          onChange={(v) => setSlot(i, v)}
                          options={optionsForSlot()}
                          placeholder="Select a model"
                          searchable
                        />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Comparison table */}
          {selectedCars.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 text-center border-t border-border-default">
              <p className="text-text-primary font-bold text-xl mb-2">Nothing to compare yet</p>
              <p className="text-text-secondary text-sm mb-6">
                Add at least two cars above, or start with a popular comparison.
              </p>
              {SUGGESTIONS.length > 0 && (
                <div className="flex flex-wrap justify-center gap-3 mb-8">
                  {SUGGESTIONS.map((pair) => (
                    <button
                      key={pair.map((c) => c.id).join("-")}
                      type="button"
                      onClick={() => commitIds(pair.map((c) => c.id))}
                      className="inline-flex items-center gap-2 h-10 px-4 rounded-full border border-border-default bg-white text-sm font-medium text-text-primary hover:border-border-focus hover:text-text-brand transition-colors"
                    >
                      {pair[0].make} {pair[0].model}
                      <span className="text-text-secondary text-xs font-semibold">vs</span>
                      {pair[1].make} {pair[1].model}
                    </button>
                  ))}
                </div>
              )}
              <Button variant="outline" onClick={() => navigate("/buy")}>Browse Cars</Button>
            </div>
          ) : (
            <div className="overflow-x-auto rounded-[16px] border border-border-default">
              <table className="w-full min-w-[640px] border-collapse">
                <colgroup>
                  <col className="w-[180px] sm:w-[220px]" />
                  {selectedCars.map((c) => (
                    <col key={c.id} />
                  ))}
                </colgroup>
                <thead>
                  <tr className="bg-bg-surface">
                    <th className="text-start align-bottom px-4 py-4 text-xs font-semibold uppercase tracking-widest text-text-secondary">Specs</th>
                    {selectedCars.map((c) => (
                      <th key={c.id} scope="col" className="text-start align-bottom px-4 py-4">
                        <div className="flex items-center gap-3">
                          <img src={c.image} alt="" className="size-14 shrink-0 rounded-[10px] object-cover" />
                          <div className="min-w-0">
                            <p className="text-xs font-medium text-text-secondary">{c.year} {c.make}</p>
                            <p className="text-sm font-bold text-text-primary truncate">{c.model}</p>
                          </div>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {specGroups.map((group) => {
                    const rows = onlyDiffs ? group.rows.filter(rowDiffers) : group.rows;
                    if (rows.length === 0) return null;
                    return (
                      <Fragment key={group.title}>
                        <tr>
                          <th
                            colSpan={selectedCars.length + 1}
                            scope="colgroup"
                            className="bg-bg-inverse text-white text-start text-xs font-semibold uppercase tracking-widest px-4 py-2.5"
                          >
                            {group.title}
                          </th>
                        </tr>
                        {rows.map((row) => {
                          const differs = highlight && rowDiffers(row);
                          return (
                            <tr key={row.label} className="border-b border-border-default last:border-b-0">
                              <th
                                scope="row"
                                className={`text-start align-middle px-4 py-3 text-sm font-medium text-text-secondary ${differs ? "shadow-[inset_3px_0_0_var(--color-bg-brand)]" : ""}`}
                              >
                                {row.label}
                              </th>
                              {selectedCars.map((c) => (
                                <td key={c.id} className={`px-4 py-3 text-sm text-text-primary align-middle ${differs ? "bg-bg-brand-soft/60" : ""}`}>
                                  <span className="inline-flex flex-wrap items-center gap-2">
                                    {row.cell(c).value}
                                    {isBest(row, c) && (
                                      <span className="inline-flex items-center rounded-full bg-bg-accent-soft px-2 py-0.5 text-[11px] font-semibold text-text-success">
                                        Best
                                      </span>
                                    )}
                                  </span>
                                </td>
                              ))}
                            </tr>
                          );
                        })}
                      </Fragment>
                    );
                  })}
                  {onlyDiffs && diffCount === 0 && (
                    <tr>
                      <td colSpan={selectedCars.length + 1} className="px-4 py-10 text-center text-sm text-text-secondary">
                        These cars match on every spec.
                      </td>
                    </tr>
                  )}
                </tbody>
                <tfoot>
                  <tr className="bg-bg-surface border-t border-border-default">
                    <td className="px-4 py-4" />
                    {selectedCars.map((c) => (
                      <td key={c.id} className="px-4 py-4">
                        <Button variant="outline" size="sm" onClick={() => navigate(`/car/${c.id}`)}>
                          View details
                        </Button>
                      </td>
                    ))}
                  </tr>
                </tfoot>
              </table>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
