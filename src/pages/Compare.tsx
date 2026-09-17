import { Fragment, useMemo, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Select from "../components/Select";
import Button from "../components/Button";
import DirhamSymbol from "../components/DirhamSymbol";
import { cars, Car } from "../data/cars";

const MAX_SLOTS = 3;

type Cell = { value: React.ReactNode; raw: string };

interface SpecRow {
  label: string;
  cell: (c: Car) => Cell;
}

interface SpecGroup {
  title: string;
  rows: SpecRow[];
}

const text = (raw: string): Cell => ({ value: raw, raw });

const specGroups: SpecGroup[] = [
  {
    title: "Pricing",
    rows: [
      {
        label: "Price",
        cell: (c) => ({
          raw: String(c.price),
          value: (
            <span className="inline-flex items-center gap-1.5 font-bold text-text-primary">
              <DirhamSymbol size={16} />
              {c.price.toLocaleString("en-AE")}
            </span>
          ),
        }),
      },
      {
        label: "Monthly (est.)",
        cell: (c) => ({
          raw: String(c.monthlyPayment),
          value: (
            <span className="inline-flex items-center gap-1 text-text-secondary">
              <DirhamSymbol size={12} color="var(--color-text-secondary)" />
              {c.monthlyPayment.toLocaleString("en-AE")}/mo
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
      { label: "Model Year", cell: (c) => text(String(c.year)) },
      { label: "Exterior Colour", cell: (c) => text(c.color) },
    ],
  },
  {
    title: "Usage",
    rows: [
      {
        label: "Mileage",
        cell: (c) =>
          text(
            c.mileage >= 1000
              ? `${(c.mileage / 1000).toFixed(0)}k km`
              : `${c.mileage} km`
          ),
      },
    ],
  },
  {
    title: "Highlights",
    rows: [
      { label: "Certified New", cell: (c) => text(c.isNew ? "Yes" : "No") },
      { label: "Featured Pick", cell: (c) => text(c.isFeatured ? "Yes" : "No") },
      {
        label: "Automatic",
        cell: (c) => text(c.transmission === "Automatic" ? "Yes" : "No"),
      },
      {
        label: "Eco Friendly",
        cell: (c) =>
          text(c.fuelType === "Electric" || c.fuelType === "Hybrid" ? "Yes" : "No"),
      },
    ],
  },
];

const carLabel = (c: Car) => `${c.year} ${c.make} ${c.model}`;

export default function Compare() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const [highlight, setHighlight] = useState(true);

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
  const columnBasis = `${100 / MAX_SLOTS}%`;

  const rowDiffers = (row: SpecRow) => {
    if (selectedCars.length < 2) return false;
    const first = row.cell(selectedCars[0]).raw;
    return selectedCars.some((c) => row.cell(c).raw !== first);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Hero */}
      <section className="bg-bg-inverse page-hero">
        <div className="container-x text-center">
          <h1 className="text-white text-5xl font-bold font-display">
            Compare Models
          </h1>
          <p className="text-text-secondary mt-2 text-lg">
            Pick up to {MAX_SLOTS} cars and weigh their specs, pricing and features side by side.
          </p>
        </div>
      </section>

      <main className="flex-1 bg-white">
        <div className="container-x py-10">
          {/* Controls */}
          <div className="flex items-center justify-between gap-4 mb-6 flex-wrap">
            <p className="text-text-secondary text-sm">
              {selectedCars.length === 0
                ? "No cars selected yet."
                : `Comparing ${selectedCars.length} of ${MAX_SLOTS} cars.`}
            </p>
            <div className="flex items-center gap-4">
              <label className="flex items-center gap-2 cursor-pointer select-none text-sm text-text-primary">
                <input
                  type="checkbox"
                  checked={highlight}
                  onChange={(e) => setHighlight(e.target.checked)}
                  className="h-4 w-4 accent-bg-brand"
                />
                Highlight differences
              </label>
              {selectedCars.length > 0 && (
                <button
                  onClick={() => commitIds([])}
                  className="text-sm font-medium text-text-brand hover:underline"
                >
                  Clear all
                </button>
              )}
            </div>
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
            <div className="flex flex-col items-center justify-center py-20 text-center border-t border-border-default">
              <p className="text-text-primary font-bold text-xl mb-2">Nothing to compare yet</p>
              <p className="text-text-secondary text-sm mb-6">
                Add at least two cars above, or browse the inventory to get started.
              </p>
              <Button onClick={() => navigate("/buy")}>Browse Cars</Button>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <colgroup>
                  <col style={{ width: "220px" }} />
                  {selectedCars.map((c) => (
                    <col key={c.id} style={{ width: columnBasis }} />
                  ))}
                </colgroup>
                <tbody>
                  {specGroups.map((group) => (
                    <Fragment key={group.title}>
                      <tr>
                        <td
                          colSpan={selectedCars.length + 1}
                          className="bg-bg-inverse text-white text-xs font-semibold uppercase tracking-widest px-4 py-2.5 rounded-[6px]"
                        >
                          {group.title}
                        </td>
                      </tr>
                      {group.rows.map((row) => {
                        const differs = highlight && rowDiffers(row);
                        return (
                          <tr key={row.label} className="border-b border-border-default">
                            <th className="text-left align-middle px-4 py-3 text-sm font-medium text-text-secondary">
                              {row.label}
                            </th>
                            {selectedCars.map((c) => (
                              <td
                                key={c.id}
                                className={`px-4 py-3 text-sm text-text-primary align-middle ${
                                  differs ? "bg-[#fff7e6]" : ""
                                }`}
                              >
                                {row.cell(c).value}
                              </td>
                            ))}
                          </tr>
                        );
                      })}
                    </Fragment>
                  ))}
                </tbody>
              </table>

              <div className="flex flex-wrap gap-3 mt-8">
                {selectedCars.map((c) => (
                  <Button
                    key={c.id}
                    variant="outline"
                    onClick={() => navigate(`/car/${c.id}`)}
                  >
                    View {c.model}
                  </Button>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
