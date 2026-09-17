import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CarCard from "../components/CarCard";
import { cars } from "../data/cars";
import Select from "../components/Select";

export default function SearchResults() {
  const [searchParams] = useSearchParams();
  const q = (searchParams.get("q") || "").toLowerCase().trim();
  const [sort, setSort] = useState("");
  const [visibleCount, setVisibleCount] = useState(9);

  const filtered = useMemo(() => {
    let result = q
      ? cars.filter(
          (c) =>
            c.make.toLowerCase().includes(q) ||
            c.model.toLowerCase().includes(q) ||
            c.bodyType.toLowerCase().includes(q)
        )
      : [...cars];

    if (sort === "price-asc") result.sort((a, b) => a.price - b.price);
    if (sort === "price-desc") result.sort((a, b) => b.price - a.price);
    if (sort === "year-desc") result.sort((a, b) => b.year - a.year);
    if (sort === "year-asc") result.sort((a, b) => a.year - b.year);
    if (sort === "mileage-asc") result.sort((a, b) => a.mileage - b.mileage);
    return result;
  }, [q, sort]);

  const visible = filtered.slice(0, visibleCount);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero */}
      <section className="bg-bg-inverse page-hero">
        <div className="container-x text-center">
          {q ? (
            <h1 className="text-white text-4xl md:text-5xl font-bold font-display">
              Results for{" "}
              <span className="text-text-accent">&ldquo;{searchParams.get("q")}&rdquo;</span>
            </h1>
          ) : (
            <h1 className="text-white text-4xl md:text-5xl font-bold font-display">
              All Vehicles
            </h1>
          )}
          <p className="text-text-secondary mt-4 text-lg">
            {filtered.length} vehicle{filtered.length !== 1 ? "s" : ""} found
          </p>
        </div>
      </section>

      <main className="flex-1 bg-white">
        <div className="container-x py-10">
          {/* Top bar */}
          <div className="flex items-center justify-between mb-6">
            <p className="text-text-secondary text-sm">
              Showing{" "}
              <span className="font-semibold text-text-primary">{filtered.length}</span>{" "}
              vehicles
            </p>
            <Select
              compact
              className="w-[220px]"
              placeholder="Sort By"
              value={sort}
              onChange={(v) => { setSort(v); setVisibleCount(9); }}
              options={[
                { value: "", label: "Sort By" },
                { value: "price-asc", label: "Price: Low to High" },
                { value: "price-desc", label: "Price: High to Low" },
                { value: "year-desc", label: "Year: Newest First" },
                { value: "year-asc", label: "Year: Oldest First" },
                { value: "mileage-asc", label: "Mileage: Low to High" },
              ]}
            />
          </div>

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
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
              <h3 className="text-text-brand font-extrabold text-xl mb-2">No vehicles found</h3>
              <p className="text-text-secondary text-sm mb-6">
                No results for &ldquo;{searchParams.get("q")}&rdquo;. Try a different search term.
              </p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {visible.map((car) => (
                  <CarCard key={car.id} car={car} />
                ))}
              </div>

              {visibleCount < filtered.length && (
                <div className="flex justify-center mt-10">
                  <button
                    onClick={() => setVisibleCount((v) => v + 9)}
                    className="border border-border-focus text-text-brand px-8 py-3 rounded-full font-semibold text-sm hover:bg-bg-brand-soft transition-colors"
                  >
                    Load More ({filtered.length - visibleCount} remaining)
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
