import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Select from "../components/Select";
import { FIELD_CLASS, LABEL_CLASS } from "../lib/fieldStyles";
import SellYourCarForm, { SELL_MAKES, SELL_MILEAGES, YEARS } from "../components/SellYourCarForm";
import { cars } from "../data/cars";
import { useLanguage } from "../lib/language";
import SmartImage from "../components/SmartImage";
import FavoriteButton from "../components/FavoriteButton";
import SpecIcon, { inferSpecKind } from "../components/SpecIcon";
import ArrowCircle from "../components/ArrowCircle";

const toOpts = (arr: string[]) => arr.map((v) => ({ value: v, label: v }));
import svgPaths from "@/imports/00HomeV34/svg-qhcw3sf999";
import brandMazda from "@/imports/brands/mazda.png";
import brandPeugeot from "@/imports/brands/peugeot.png";
import brandInfiniti from "@/imports/brands/infiniti.png";
import brandToyota from "@/imports/brands/toyota.png";
import brandChevrolet from "@/imports/brands/chevrolet.png";
import brandFord from "@/imports/brands/ford.png";
import brandHyundai from "@/imports/brands/hyundai.png";
import brandJeep from "@/imports/brands/jeep.png";
import brandLexus from "@/imports/brands/lexus.png";
import brandNissan from "@/imports/brands/nissan.png";
import brandMitsubishi from "@/imports/brands/mitsubishi.png";
import brandMHERO from "@/imports/brands/mhero.png";
import imgHero from "@/imports/cared-banner.jpg";
import imgRectangle12 from "@/imports/00HomeV34/0ad5b83199955ac5ae8c4d7d4333acedbc34e386.png";
import imgRectangle13 from "@/imports/00HomeV34/b620b241b3ae0b1e5b1b3471022a86964635e438.png";
import imgRectangle14 from "@/imports/00HomeV34/e6cfe8099341ecab48a7319fc8a0f8bee6073ec1.png";
import imgRectangle15 from "@/imports/00HomeV34/9c2cd8426059bf421672ff69c6ebe964241801fa.png";
import imgRectangle16 from "@/imports/00HomeV34/13a56f4ec7766f7243affaa6050a9eb378a0324c.png";
import imgSellCarVisual from "@/imports/00HomeV34-1/58585cb2eb4b1f52ba66d3e9acb8985098441a98.png";

// ─── Shared AED symbol ────────────────────────────────────────────────────────
function AedSymbol({ color = "var(--color-text-primary)", size = 18 }: { color?: string; size?: number }) {
  const width = (size * 21) / 18;
  return (
    <div className="-scale-y-100 flex-none">
      <div className="relative" style={{ height: size, width }}>
        <svg className="absolute block inset-0 size-full" fill="none" height={size} preserveAspectRatio="none" viewBox="0 0 21 18" width={width}>
          <path d={svgPaths.p1fc68680} fill={color} />
        </svg>
      </div>
    </div>
  );
}

// ─── Hero search options ──────────────────────────────────────────────────────
type Option = { value: string; label: string; count?: number };

const PRICE_RANGES = [
  { value: "0-50000", label: "Under AED 50,000", min: 0, max: 50000 },
  { value: "50000-100000", label: "AED 50,000 – 100,000", min: 50000, max: 100000 },
  { value: "100000-150000", label: "AED 100,000 – 150,000", min: 100000, max: 150000 },
  { value: "150000-250000", label: "AED 150,000 – 250,000", min: 150000, max: 250000 },
  { value: "250000-", label: "AED 250,000 and above", min: 250000, max: Infinity },
];
const MILEAGE_CAPS = [
  { value: "10000", label: "Up to 10,000 km" },
  { value: "30000", label: "Up to 30,000 km" },
  { value: "60000", label: "Up to 60,000 km" },
  { value: "100000", label: "Up to 100,000 km" },
];

type BuyQuery = { make: string; model: string; price: string; mileage: string };

function matchCars(q: BuyQuery, ignore?: keyof BuyQuery) {
  const range = PRICE_RANGES.find((r) => r.value === q.price);
  return cars.filter(
    (c) =>
      (ignore === "make" || !q.make || c.make === q.make) &&
      (ignore === "model" || !q.model || c.model === q.model) &&
      (ignore === "price" || !range || (c.price >= range.min && c.price < range.max)) &&
      (ignore === "mileage" || !q.mileage || c.mileage <= Number(q.mileage)),
  );
}

// ─── Hero field dropdown ──────────────────────────────────────────────────────
function HeroDropdownField({
  id, label, value, options, placeholder, anyLabel, onChange, disabled = false, compact = false,
}: {
  id: string; label: string; value: string; options: Option[]; placeholder: string; anyLabel: string;
  onChange: (v: string) => void; disabled?: boolean; compact?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(-1);
  const ref = useRef<HTMLDivElement>(null);
  const all: Option[] = [{ value: "", label: anyLabel }, ...options];
  const selected = options.find((o) => o.value === value);

  useEffect(() => {
    if (!open) return;
    setActive(Math.max(0, all.findIndex((o) => o.value === value)));
    const onDown = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  function choose(v: string) {
    onChange(v);
    setOpen(false);
  }

  function onKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Escape") return setOpen(false);
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault();
      if (!open) return setOpen(true);
      setActive((i) => (i + (e.key === "ArrowDown" ? 1 : -1) + all.length) % all.length);
    }
    if ((e.key === "Enter" || e.key === " ") && open && active >= 0) {
      e.preventDefault();
      const opt = all[active];
      if (opt.count !== 0) choose(opt.value);
    }
  }

  return (
    <div className="flex-1 min-w-0 flex flex-col items-start relative" ref={ref}>
      <label htmlFor={id} className="text-white text-[13px] sm:text-[14px] font-semibold leading-normal mb-[5px] sm:mb-[8px]">{label}</label>
      <button
        id={id}
        type="button"
        disabled={disabled}
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        onKeyDown={onKeyDown}
        className={`hero-field group flex items-center justify-between ${compact ? "h-[42px] text-[15px]" : "h-[48px] text-base"} px-[14px] rounded-[10px] w-full text-start ${open ? "is-open" : ""}`}
      >
        <span className={`leading-normal whitespace-nowrap truncate flex-1 ${selected ? "text-white" : "text-white/65"}`}>
          {selected ? selected.label : placeholder}
        </span>
        <svg
          className={`shrink-0 size-[16px] ms-2 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          fill="none" height="16" viewBox="0 0 16 16" width="16" aria-hidden="true"
        >
          <path d={svgPaths.p3410b100} fill="white" />
        </svg>
      </button>

      {open && (
        <div role="listbox" aria-labelledby={id} className="hero-menu absolute top-full start-0 mt-[8px] w-full rounded-[14px] overflow-hidden z-50">
          <div className="max-h-[260px] overflow-y-auto dropdown-dark-scroll p-[6px]">
            {all.map((opt, i) => {
              const isSelected = opt.value === value;
              const empty = opt.count === 0;
              return (
                <button
                  key={opt.value || "any"}
                  type="button"
                  role="option"
                  aria-selected={isSelected}
                  disabled={empty}
                  onMouseEnter={() => setActive(i)}
                  onClick={() => choose(opt.value)}
                  className={`w-full flex items-center justify-between gap-3 px-[12px] py-[9px] rounded-[8px] text-[15px] text-start transition-colors duration-100 ${
                    empty ? "text-white/35 cursor-not-allowed" : isSelected ? "text-text-accent" : "text-white/90"
                  } ${active === i && !empty ? "bg-white/10" : ""}`}
                >
                  <span className="truncate">{opt.label}</span>
                  {opt.count !== undefined && (
                    <span className={`text-xs tabular-nums ${isSelected ? "text-text-accent/80" : "text-white/50"}`}>{opt.count}</span>
                  )}
                  {isSelected && opt.count === undefined && (
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3.5 8.5l3 3 6-7" stroke="var(--color-text-accent)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Hero Section ─────────────────────────────────────────────────────────────
function HeroSection({ onNavigate }: { onNavigate: (path: string) => void }) {
  const isArabic = useLanguage().language === "ar";
  const [activeTab, setActiveTab] = useState<"buy" | "sell">("buy");

  const [buy, setBuy] = useState<BuyQuery>({ make: "", model: "", price: "", mileage: "" });
  const setBuyField = (key: keyof BuyQuery, v: string) =>
    setBuy((q) => (key === "make" ? { ...q, make: v, model: "" } : { ...q, [key]: v }));

  const [sellPlate, setSellPlate] = useState("");
  const plateRef = useRef<HTMLInputElement>(null);
  const tabSwitched = useRef(false);

  // Switching to the Sell tab puts the cursor straight into the plate field.
  useEffect(() => {
    if (!tabSwitched.current) return;
    if (activeTab === "sell") plateRef.current?.focus({ preventScroll: true });
  }, [activeTab]);
  const [sellMake, setSellMake] = useState("");
  const [sellYear, setSellYear] = useState("");
  const [sellMileage, setSellMileage] = useState("");

  const results = matchCars(buy);
  const makeOptions: Option[] = Array.from(new Set(cars.map((c) => c.make)))
    .sort()
    .map((m) => ({ value: m, label: m, count: matchCars({ ...buy, make: m, model: "" }, "model").length }));
  const modelOptions: Option[] = buy.make
    ? Array.from(new Set(cars.filter((c) => c.make === buy.make).map((c) => c.model)))
        .sort()
        .map((m) => ({ value: m, label: m, count: matchCars({ ...buy, model: m }).length }))
    : [];
  const priceOptions: Option[] = PRICE_RANGES.map((r) => ({ value: r.value, label: r.label, count: matchCars({ ...buy, price: r.value }).length }));
  const mileageOptions: Option[] = MILEAGE_CAPS.map((m) => ({ value: m.value, label: m.label, count: matchCars({ ...buy, mileage: m.value }).length }));

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (activeTab === "buy") {
      const params = new URLSearchParams();
      const range = PRICE_RANGES.find((r) => r.value === buy.price);
      if (buy.make) params.set("make", buy.make);
      if (buy.model) params.set("model", buy.model);
      if (range) {
        params.set("minPrice", String(range.min));
        if (Number.isFinite(range.max)) params.set("maxPrice", String(range.max));
      }
      if (buy.mileage) params.set("maxMileage", buy.mileage);
      const qs = params.toString();
      onNavigate(qs ? `/buy?${qs}` : "/buy");
    } else {
      const params = new URLSearchParams();
      if (sellPlate.trim()) params.set("plate", sellPlate.trim());
      if (sellMake) params.set("make", sellMake);
      if (sellYear) params.set("year", sellYear);
      if (sellMileage) params.set("mileage", sellMileage);
      const qs = params.toString();
      onNavigate(qs ? `/sell?${qs}` : "/sell");
    }
  }

  const ctaDisabled = activeTab === "buy" && results.length === 0;

  // Subtle parallax: pointer position is written to CSS variables, so no re-render per move.
  const heroRef = useRef<HTMLElement>(null);
  const frame = useRef(0);
  function onHeroPointerMove(e: React.PointerEvent) {
    if (e.pointerType !== "mouse" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = heroRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const mx = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const my = ((e.clientY - rect.top) / rect.height) * 2 - 1;
    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      el.style.setProperty("--mx", mx.toFixed(3));
      el.style.setProperty("--my", my.toFixed(3));
    });
  }
  function onHeroPointerLeave() {
    cancelAnimationFrame(frame.current);
    heroRef.current?.style.setProperty("--mx", "0");
    heroRef.current?.style.setProperty("--my", "0");
  }
  const ctaLabel =
    activeTab === "sell"
      ? "Get Valuation"
      : results.length === 0
        ? "No matches"
        : `Show ${results.length} ${results.length === 1 ? "car" : "cars"}`;

  return (
    <section ref={heroRef} onPointerMove={onHeroPointerMove} onPointerLeave={onHeroPointerLeave} className="hero-parallax relative z-20 min-h-[calc(100svh-70px)] xl:h-[100svh] xl:min-h-[620px] flex flex-col">
      {/* Background */}
      <div aria-hidden className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Sky extension: matches the banner's top edge so the headline has open sky above the cars */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, #374667 0%, #977f93 50%, #f6c4a1 100%)" }} />
        {/* Intro: the photo eases in from a slight zoom; parallax runs on the image inside */}
        <div className="hero-intro absolute inset-0">
          <img
            alt=""
            className="hero-parallax-bg absolute inset-x-0 bottom-0 top-[10%] w-full h-[90%] object-cover object-top"
            style={{
              maskImage: "linear-gradient(to bottom, transparent 0%, #000 10%)",
              WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, #000 10%)",
            }}
            src={imgHero}
          />
        </div>
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent 55%, rgba(0,0,20,0.5) 100%)" }} />
      </div>

      <div className="relative flex-1 flex flex-col items-center justify-between xl:justify-end gap-[24px] sm:gap-[32px] px-4 sm:px-5 pt-[32px] sm:pt-[40px] xl:pt-0 pb-[140px] sm:pb-[32px] xl:pb-[clamp(12px,3svh,36px)]">
      {/* Hero text: centred between the floating nav and the car roofs */}
      <div className="relative xl:absolute xl:inset-x-0 xl:top-[calc(60px+17%)] xl:-translate-y-1/2 px-5 flex justify-center pointer-events-none">
      <div className="hero-parallax-fg hero-intro-text pointer-events-auto flex flex-col items-center gap-[20px] text-center">
        <h1 data-no-translate className="relative isolate ty-display-xl normal-case! text-text-brand">
          {/* Soft light halo so the brand blue stays legible on the sunset sky */}
          <span
            aria-hidden="true"
            className="absolute -inset-x-[16%] -inset-y-[40%] -z-10 pointer-events-none"
            style={{ background: "radial-gradient(closest-side, rgba(255,255,255,0.7), rgba(255,255,255,0.35) 55%, transparent)" }}
          />
          {/* The tagline is written per language so the swoosh stays under the word "good" in both */}
          {isArabic ? "سيارات " : "Just "}
          <span className="relative inline-block">
            {isArabic ? "جيدة" : "Good"}
            {/* Brand-green brush stroke under "Good" */}
            <svg
              aria-hidden="true"
              viewBox="0 0 200 24"
              preserveAspectRatio="none"
              className={`hero-swoosh absolute left-[-4%] right-[-4%] w-[108%] h-[0.3em] ${isArabic ? "-bottom-[0.34em]" : "-bottom-[0.16em]"}`}
            >
              <path d="M4 16C46 7 104 4 196 10" fill="none" stroke="var(--color-text-accent)" strokeWidth="9" strokeLinecap="round" />
            </svg>
          </span>
          {isArabic ? "، ببساطة" : " Cars"}
          {/* Cared play-mark motif */}
          <svg aria-hidden="true" viewBox="0 0 40 28" className="hero-mark inline-block align-baseline ms-[0.18em] h-[0.5em] w-auto -translate-y-[0.05em]">
            <path d="M3 5.2c0-3 3.2-4.9 5.8-3.4l13 7.6c2.6 1.5 2.6 5.3 0 6.8l-13 7.6C6.2 25.3 3 23.4 3 20.4V5.2z" fill="var(--color-text-brand)" />
            <path d="M17 5.2c0-3 3.2-4.9 5.8-3.4l13 7.6c2.6 1.5 2.6 5.3 0 6.8l-13 7.6c-2.6 1.5-5.8-.4-5.8-3.4V5.2z" fill="var(--color-text-accent)" style={{ mixBlendMode: "multiply" }} />
          </svg>
        </h1>
        <p className="relative isolate font-body text-text-primary text-2xl sm:text-3xl font-medium leading-snug">
          {/* Same light halo as the headline, so the line stays readable on the sunset sky */}
          <span
            aria-hidden="true"
            className="absolute -inset-x-[12%] -inset-y-[55%] -z-10 pointer-events-none"
            style={{ background: "radial-gradient(closest-side, rgba(255,255,255,0.7), rgba(255,255,255,0.3) 55%, transparent)" }}
          />
          {"UAE's trusted pre-owned cars"}
        </p>
      </div>
      </div>

      {/* Search card */}
      <div className="w-full max-w-[1040px] mt-[36px] mb-[20px] sm:mt-[152px] sm:mb-[32px] flex flex-col gap-[12px] sm:gap-[16px]">
          {/* Type toggle sits above the search card */}
          <div role="tablist" aria-label="Search type" className="hero-tabs relative z-30 grid grid-cols-2 p-[6px] rounded-full w-full sm:w-[78%] sm:max-w-[640px] sm:mx-auto h-[68px] sm:h-[80px]">
            <span
              aria-hidden="true"
              className="hero-tab-indicator absolute top-[6px] bottom-[6px] start-[6px] w-[calc(50%-6px)] rounded-full"
              style={{ transform: `translateX(${activeTab === "buy" ? "0" : "var(--tab-shift)"})` }}
            />
            {(["buy", "sell"] as const).map((tab) => (
              <button
                key={tab}
                type="button"
                role="tab"
                aria-selected={activeTab === tab}
                onClick={() => {
                tabSwitched.current = true;
                setActiveTab(tab);
              }}
                className={`relative z-10 h-[56px] sm:h-[68px] flex items-center justify-center rounded-full text-[18px] sm:text-[21px] font-bold transition-colors duration-200 ${
                  activeTab === tab ? "text-white" : "text-white/70 hover:text-white"
                }`}
              >
                {tab === "buy" ? "Buy a Car" : "Sell a Car"}
              </button>
            ))}
          </div>
        <form onSubmit={submit} className="hero-search relative w-full rounded-[20px] p-[20px] sm:p-[36px] flex flex-col gap-[14px] sm:gap-[16px]">

          {/* Row 2: fields + action */}
          <div className="flex flex-col lg:flex-row lg:items-end gap-[10px] sm:gap-[12px]">
            <div key={`fields-${activeTab}`} className="hero-fields relative z-20 flex-1 min-w-0 grid grid-cols-1 sm:grid-cols-2 lg:flex gap-[10px] sm:gap-[12px]">
              {activeTab === "buy" ? (
                <>
                  <HeroDropdownField id="hero-make" label="Make" value={buy.make} options={makeOptions} anyLabel="Any make" placeholder="Select make" onChange={(v) => setBuyField("make", v)} />
                  <HeroDropdownField id="hero-model" label="Model" value={buy.model} options={modelOptions} anyLabel="Any model" placeholder="Select model" disabled={!buy.make} onChange={(v) => setBuyField("model", v)} />
                  <HeroDropdownField id="hero-price" label="Price" value={buy.price} options={priceOptions} anyLabel="Any price" placeholder="Select price range" onChange={(v) => setBuyField("price", v)} />
                  <HeroDropdownField id="hero-mileage" label="Mileage" value={buy.mileage} options={mileageOptions} anyLabel="Any mileage" placeholder="Select mileage (max)" onChange={(v) => setBuyField("mileage", v)} />
                </>
              ) : (
                <>
                  <div className="flex-1 min-w-0 flex flex-col items-start">
                    <label htmlFor="hero-plate" className="text-white text-[13px] sm:text-[14px] font-semibold leading-normal mb-[5px] sm:mb-[8px]">Plate / VIN</label>
                    <input
                      id="hero-plate"
                      ref={plateRef}
                      type="text"
                      value={sellPlate}
                      onChange={(e) => setSellPlate(e.target.value)}
                      placeholder="e.g. Dubai A 12345 or VIN..."
                      className="hero-field h-[48px] px-[14px] rounded-[10px] w-full text-base text-white placeholder:text-white/65"
                    />
                  </div>
                  <HeroDropdownField id="hero-sell-make" label="Make" value={sellMake} options={toOptions(SELL_MAKES)} anyLabel="Not sure" placeholder="Select make" onChange={setSellMake} />
                  <HeroDropdownField id="hero-sell-year" label="Year" value={sellYear} options={toOptions(YEARS)} anyLabel="Not sure" placeholder="Select year" onChange={setSellYear} />
                  <HeroDropdownField id="hero-sell-mileage" label="Mileage" value={sellMileage} options={toOptions(SELL_MILEAGES)} anyLabel="Not sure" placeholder="Select mileage" onChange={setSellMileage} />
                </>
              )}
            </div>

            <button type="submit" disabled={ctaDisabled} className={`hero-cta group shrink-0 w-full lg:w-auto lg:min-w-[180px] h-[48px] ps-[20px] ${ctaDisabled ? "pe-[20px]" : "pe-[6px]"} flex items-center justify-center gap-[10px] rounded-[999px]">
              <svg className="block size-[20px]" fill="none" height="24" viewBox="0 0 24 24" width="24" aria-hidden="true">
                <path d={svgPaths.p3ee3db00} fill="white" />
              </svg>
              <span className="text-white text-base font-semibold leading-[18px] tabular-nums" aria-live="polite">{ctaLabel}</span>
              {!ctaDisabled && <ArrowCircle tone="light" />}
            </button>
          </div>
        </form>
      </div>
      </div>
    </section>
  );
}

const toOptions = (arr: string[]): Option[] => arr.map((v) => ({ value: v, label: v }));

// ─── Best Sellers ─────────────────────────────────────────────────────────────
const carById = (id: string) => {
  const car = cars.find((c) => c.id === id);
  if (!car) throw new Error(`Home card references missing car ${id}`);
  return car;
};

const ALL_BEST_SELLER_CARS = ["25", "26", "27", "3", "4", "28", "29", "11", "32", "31"].map((id) => {
  const c = carById(id);
  return {
    id,
    img: c.image,
    name: `${c.make} ${c.model}`,
    badges: [c.transmission, `${c.mileage.toLocaleString("en-AE")} km`, c.engineSize],
    price: c.price.toLocaleString("en-AE"),
    monthly: c.monthlyPayment.toLocaleString("en-AE"),
  };
});


function BestSellerCard({ car, onClick }: { car: typeof ALL_BEST_SELLER_CARS[0]; onClick: () => void }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="group flex flex-col flex-1 min-w-0 cursor-pointer"
      style={{ filter: hovered ? "drop-shadow(0px 18px 20px rgba(28,41,88,0.18))" : "none", transition: "filter 0.2s ease, transform 0.2s ease", transform: hovered ? "translateY(-4px)" : "none" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
    >
      <div className="h-[220px] sm:h-[293px] relative rounded-tl-[12px] rounded-tr-[12px] shrink-0 w-full overflow-hidden">
        <SmartImage alt={car.name} src={car.img} wrapperClassName="absolute inset-0" className="transition-[opacity,transform] duration-300" style={{ transform: hovered ? "scale(1.04)" : "scale(1)" }} />
      </div>
      <div className="bg-bg-surface rounded-bl-[12px] rounded-br-[12px] p-[16px] flex flex-col items-start">
        <div className="flex flex-col gap-[8px] items-start w-full">
          <span className="text-text-primary text-lg font-semibold leading-snug tracking-[-0.01em] w-full">{car.name}</span>
          <div className="flex gap-[8px] items-center w-full flex-wrap">
            {car.badges.map((b) => (
              <span key={b} className="bg-bg-brand-soft flex items-center justify-center gap-[4px] px-[8px] py-[4px] rounded-[99px] text-text-primary text-xs font-medium leading-normal whitespace-nowrap">
                <SpecIcon kind={inferSpecKind(b)} size={13} />
                {b}
              </span>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-between mt-[24px] sm:mt-[40px] w-full shrink-0">
          <div className="flex flex-col gap-[4px] items-start">
            <div className="flex gap-[6px] items-baseline">
              <AedSymbol size={16} />
              <span className="text-text-primary text-[22px] font-bold leading-none tracking-[-0.01em] whitespace-nowrap tabular-nums">{car.monthly}</span>
              <span className="text-text-secondary text-sm font-medium leading-none">/mo</span>
            </div>
            <div className="flex gap-[3px] items-center text-text-secondary">
              <AedSymbol color="var(--color-text-secondary)" size={11} />
              <span className="text-[13px] font-semibold leading-normal tabular-nums">{car.price}</span>
              <span className="text-xs font-medium leading-normal">total</span>
            </div>
          </div>
          <span className="card-arrow" aria-hidden="true">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 18L18 6M8.25 6H18v9.75" />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
}

function BestSellersSection({ onNavigate }: { onNavigate: (path: string) => void }) {
  const [startIndex, setStartIndex] = useState(0);
  const pageSize = 3;
  const canGoLeft = startIndex > 0;
  const canGoRight = startIndex + pageSize < ALL_BEST_SELLER_CARS.length;
  const visible = ALL_BEST_SELLER_CARS.slice(startIndex, startIndex + pageSize);
  const progress = ((startIndex + pageSize) / ALL_BEST_SELLER_CARS.length) * 100;

  return (
    <section className="py-[56px] sm:py-[80px] bg-white">
      <div className="container-x">
        {/* Header */}
        <div className="flex flex-wrap items-end justify-between gap-[16px] mb-[32px] sm:mb-[40px]">
          <div className="flex flex-col gap-[8px] max-w-[611px]">
            <span className="ty-title ty-title-gradient ty-h1">Best Sellers</span>
            <span className="text-text-secondary text-lg leading-normal font-normal">Quickly browse popular car categories in your budget.</span>
          </div>
          <div className="flex gap-[8px] items-center h-[50px]">
            <button
              disabled={!canGoLeft}
              onClick={() => setStartIndex((i) => Math.max(0, i - pageSize))}
              className="bg-[#e5efff] flex items-center justify-center p-[12px] rounded-[999px] size-[50px] transition-opacity"
              style={{ opacity: canGoLeft ? 1 : 0.4 }}
            >
              <svg fill="none" height="24" viewBox="0 0 24 24" width="24" className="rtl:-scale-x-100">
                <path d={svgPaths.p12a78bc0} fill="var(--color-text-brand)" />
              </svg>
            </button>
            <button
              disabled={!canGoRight}
              onClick={() => setStartIndex((i) => Math.min(ALL_BEST_SELLER_CARS.length - pageSize, i + pageSize))}
              className="bg-bg-brand flex items-center justify-center p-[12px] rounded-[999px] size-[50px] transition-opacity hover:bg-bg-brand-hover"
              style={{ opacity: canGoRight ? 1 : 0.4 }}
            >
              <svg fill="none" height="24" viewBox="0 0 24 24" width="24" className="rtl:-scale-x-100">
                <path d={svgPaths.p24860100} fill="white" />
              </svg>
            </button>
          </div>
        </div>

        {/* Cards */}
        <div data-parallax-cards className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
          {visible.map((car) => (
            <BestSellerCard key={car.id} car={car} onClick={() => onNavigate(`/car/${car.id}`)} />
          ))}
        </div>

        {/* Progress bar */}
        <div className="relative mt-[40px] h-[8px]">
          <div className="absolute inset-0 bg-bg-subtle rounded-[99px]" />
          <div className="absolute left-0 top-0 h-[8px] bg-bg-accent rounded-[99px] transition-all duration-300" style={{ width: `${progress}%` }} />
        </div>

        {/* Explore All */}
        <div className="flex justify-center mt-[48px]">
          <button
            onClick={() => onNavigate("/buy")}
            className="group flex items-center gap-[12px] px-[28px] py-[13px] rounded-[999px] bg-bg-brand text-white transition-colors hover:bg-bg-brand-hover"
          >
            <span className="text-base font-semibold leading-[18px] whitespace-nowrap">Explore All</span>
            <svg className="block size-[24px] shrink-0 rtl:-scale-x-100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M6 18L18 6M8.25 6H18v9.75" /></svg>
          </button>
        </div>
      </div>
    </section>
  );
}

// ─── Why Us ───────────────────────────────────────────────────────────────────
// One consistent line-icon set: 24px grid, 1.6px stroke, round joins.
function WhyUsIcon({ name }: { name: "warranty" | "inspection" | "support" | "mileage" }) {
  const common = { fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden="true">
      {name === "warranty" && (
        <g {...common}>
          <path d="M12 3l7 2.8v5.4c0 4.3-2.9 8.1-7 9.8-4.1-1.7-7-5.5-7-9.8V5.8L12 3z" />
          <path d="M8.8 12.2l2.2 2.2 4.2-4.4" />
        </g>
      )}
      {name === "inspection" && (
        <g {...common}>
          <path d="M9 4.5H7a2 2 0 00-2 2v12.5a2 2 0 002 2h10a2 2 0 002-2V6.5a2 2 0 00-2-2h-2" />
          <rect x="9" y="3" width="6" height="3" rx="1" />
          <path d="M8.5 11.5l1.5 1.5 2.5-2.5" />
          <path d="M14 12h2" />
          <path d="M8.5 16.5l1.5 1.5 2.5-2.5" />
          <path d="M14 17h2" />
        </g>
      )}
      {name === "support" && (
        <g {...common}>
          <path d="M4.5 13v-1.5a7.5 7.5 0 0115 0V13" />
          <rect x="3.5" y="12.5" width="4" height="6" rx="1.5" />
          <rect x="16.5" y="12.5" width="4" height="6" rx="1.5" />
          <path d="M18.5 18.5v.5a2.5 2.5 0 01-2.5 2.5h-3" />
        </g>
      )}
      {name === "mileage" && (
        <g {...common}>
          <path d="M4.2 16.5a8.5 8.5 0 1115.6 0" />
          <path d="M12 13.5l3.5-3.5" />
          <circle cx="12" cy="13.5" r="1.2" />
          <path d="M6.5 12.5h1M16.5 12.5h1M12 7v1M8.1 8.6l.7.7" />
          <path d="M9 19.5h6" />
        </g>
      )}
    </svg>
  );
}

function WhyUsSection() {
  const features = [
    { title: "Warranty Included", desc: "Drive with peace of mind", icon: "warranty" as const },
    { title: "145-Point Inspection", desc: "Checked inside and out", icon: "inspection" as const },
    { title: "360 Support", desc: "We're here whenever you need us", icon: "support" as const },
    { title: "Mileage Certified", desc: "Quality you can trust", icon: "mileage" as const },
  ];

  return (
    <section className="bg-bg-inverse py-[56px] sm:py-[80px]">
      <div className="container-x flex flex-col gap-[32px] sm:gap-[40px] items-center">
        <div className="flex flex-col gap-[8px] items-center text-center text-white">
          <span className="ty-title ty-h1">Why Us?</span>
          <span className="text-lg font-normal leading-normal">A trusted car-buying experience, built around your peace of mind.</span>
        </div>
        <div data-parallax-cards className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[16px] sm:gap-[24px] w-full">
          {features.map((f) => (
            <div
              key={f.title}
              className="group flex flex-col gap-[20px] items-center p-[28px] rounded-[16px] transition-all duration-200 hover:-translate-y-1 hover:border-(--color-bg-accent)/40"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.14)" }}
            >
              <div className="size-[56px] rounded-[14px] flex items-center justify-center text-text-accent bg-bg-accent/10 ring-1 ring-inset ring-(--color-bg-accent)/25 transition-colors duration-200 group-hover:bg-bg-accent/15">
                <WhyUsIcon name={f.icon} />
              </div>
              <div className="flex flex-col gap-[6px] items-center text-center text-white w-full">
                <span className="text-lg font-semibold leading-snug">{f.title}</span>
                <span className="text-[15px] font-normal leading-relaxed text-white/70">{f.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Featured Cars ────────────────────────────────────────────────────────────
const CATALOG_DATA = [
  { id: "3", popular: true, isNew: false },
  { id: "29", popular: true, isNew: false },
  { id: "30", popular: false, isNew: true },
  { id: "31", popular: false, isNew: true },
  { id: "4", popular: true, isNew: false },
  { id: "11", popular: true, isNew: false },
  { id: "32", popular: false, isNew: true },
  { id: "28", popular: false, isNew: true },
].map(({ id, popular, isNew }) => {
  const c = carById(id);
  return {
    id,
    popular,
    isNew,
    img: c.image,
    name: c.model,
    make: c.make,
    body: c.bodyType,
    price: c.price.toLocaleString("en-AE"),
    monthly: c.monthlyPayment.toLocaleString("en-AE"),
  };
});

function CatalogCard({ id, name, make, img, price, monthly, onClick }: { id: string; name: string; make: string; img: string; price: string; monthly: string; onClick: () => void }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="group h-[388px] overflow-clip relative rounded-[12px] w-full cursor-pointer"
      style={{ transition: "box-shadow 0.2s ease, transform 0.2s ease", boxShadow: hovered ? "0px 20px 32px rgba(28,41,88,0.18)" : "none", transform: hovered ? "translateY(-4px)" : "none" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
    >
      {/* Full-card image */}
      <SmartImage
        alt={name}
        src={img}
        wrapperClassName="absolute inset-0 rounded-[12px]"
        className="transition-[opacity,transform] duration-300"
        style={{ transform: hovered ? "scale(1.04)" : "scale(1)" }}
      />
      {/* No gradient overlay */}
      {/* Car name */}
      <div className="absolute flex flex-col gap-[4px] items-start start-[16px] top-[16px]">
        <span className="font-bold text-text-primary text-lg tracking-[-0.01em] leading-snug">{name}</span>
        <span className="font-normal text-text-secondary text-sm leading-normal">{make}</span>
      </div>
      {/* Heart */}
      <FavoriteButton
        carId={id}
        size={20}
        className="absolute end-[12px] top-[12px] size-[36px] flex items-center justify-center rounded-full bg-white/80 backdrop-blur-sm text-text-primary hover:text-text-brand hover:bg-white transition-colors"
      />
      {/* Bottom panel */}
      <div className="absolute bottom-[16px] flex items-end justify-between start-[16px] end-[16px]">
        <div className="flex flex-col gap-[4px] items-start justify-end">
          <div className="flex gap-[6px] items-baseline">
            <AedSymbol size={16} />
            <span className="text-text-primary text-[22px] font-bold leading-none tracking-[-0.01em] tabular-nums">{monthly}</span>
            <span className="text-text-secondary text-sm font-medium leading-none">/mo</span>
          </div>
          <div className="flex gap-[3px] items-center text-text-secondary">
            <AedSymbol color="var(--color-text-secondary)" size={11} />
            <span className="text-[13px] font-semibold leading-normal tabular-nums">{price}</span>
            <span className="text-xs font-medium leading-normal">total</span>
          </div>
        </div>
        <span className="card-arrow" aria-hidden="true">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 18L18 6M8.25 6H18v9.75" />
            </svg>
          </span>
      </div>
    </div>
  );
}

function FeaturedCarsSection({ onNavigate }: { onNavigate: (path: string) => void }) {
  const [activeFilter, setActiveFilter] = useState("Popular");
  const filters = ["Popular", "SUV", "Sedan", "New Arrivals"];
  const matches = (car: (typeof CATALOG_DATA)[number], f: string) =>
    f === "Popular" ? car.popular : f === "New Arrivals" ? car.isNew : car.body === f;
  const visibleCars = CATALOG_DATA.filter((car) => matches(car, activeFilter));

  return (
    <section className="bg-bg-surface py-[56px] sm:py-[80px]">
      <div className="container-x">
        <div className="flex flex-col gap-[8px] items-start mb-[40px]">
          <span className="ty-title ty-title-gradient ty-h1">Featured Cars</span>
          <span className="text-text-secondary text-lg font-normal leading-normal">Handpicked deals with verified inspection.</span>
        </div>

        {/* Filter tabs */}
        <div role="tablist" aria-label="Filter featured cars" className="border border-(--color-text-primary) inline-flex max-w-full overflow-x-auto items-center p-[4px] rounded-[99px] mb-[32px] sm:mb-[40px]">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              role="tab"
              aria-selected={activeFilter === f}
              onClick={() => setActiveFilter(f)}
              className="h-[44px] sm:h-[48px] shrink-0 flex items-center justify-center px-[16px] sm:px-[24px] py-[12px] rounded-[99px] transition-all"
              style={{ background: activeFilter === f ? "var(--color-bg-inverse)" : "transparent" }}
            >
              <span className="text-base font-bold leading-[1.5] tracking-[-0.32px] whitespace-nowrap" style={{ color: activeFilter === f ? "white" : "rgba(18,42,94,0.6)" }}>
                {f}
              </span>
              <span
                className="ms-[8px] min-w-[22px] h-[22px] px-[6px] rounded-full text-xs font-semibold flex items-center justify-center tabular-nums"
                style={{ background: activeFilter === f ? "rgba(255,255,255,0.18)" : "rgba(18,42,94,0.08)", color: activeFilter === f ? "white" : "var(--color-text-primary)" }}
              >
                {CATALOG_DATA.filter((car) => matches(car, f)).length}
              </span>
            </button>
          ))}
        </div>

        {/* Filtered grid */}
        <div className="featured-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[16px] sm:gap-[24px]">
          {visibleCars.map((car) => (
            <CatalogCard key={`${activeFilter}-${car.id}`} id={car.id} name={car.name} make={car.make} img={car.img} price={car.price} monthly={car.monthly} onClick={() => onNavigate(`/car/${car.id}`)} />
          ))}
        </div>

        {/* Explore All – outlined blue */}
        <div className="flex justify-center mt-[48px]">
          <button
            onClick={() => onNavigate("/buy")}
            className="group flex items-center gap-[12px] px-[28px] py-[13px] rounded-[999px] bg-bg-brand text-white transition-colors hover:bg-bg-brand-hover"
          >
            <span className="text-base font-semibold leading-[18px] whitespace-nowrap">Explore All</span>
            <svg className="block size-[24px] shrink-0 rtl:-scale-x-100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M6 18L18 6M8.25 6H18v9.75" /></svg>
          </button>
        </div>
      </div>
    </section>
  );
}

// ─── Shop by Brands ───────────────────────────────────────────────────────────
// Logos are trimmed to their artwork, then sized by equal visual area rather than equal
// height, so wide wordmarks and compact badges carry the same weight.
const LOGO_AREA = 3000;
const logoSize = (ratio: number) => {
  let w = Math.sqrt(LOGO_AREA * ratio);
  let h = w / ratio;
  if (w > 120) { w = 120; h = w / ratio; }
  if (h > 56) { h = 56; w = h * ratio; }
  return { width: Math.round(w), height: Math.round(h) };
};

const BRAND_ITEMS = [
  { img: brandMazda, ratio: 1.127, name: "Mazda" },
  { img: brandPeugeot, ratio: 0.910, name: "Peugeot" },
  { img: brandInfiniti, ratio: 2.564, name: "Infiniti" },
  { img: brandToyota, ratio: 3.636, name: "Toyota" },
  { img: brandChevrolet, ratio: 2.260, name: "Chevrolet" },
  { img: brandFord, ratio: 2.667, name: "Ford" },
  { img: brandHyundai, ratio: 2.235, name: "Hyundai" },
  { img: brandJeep, ratio: 2.484, name: "Jeep" },
  { img: brandLexus, ratio: 2.235, name: "Lexus" },
  { img: brandNissan, ratio: 1.194, name: "Nissan" },
  { img: brandMitsubishi, ratio: 0.932, name: "Mitsubishi" },
  { img: brandMHERO, ratio: 5.556, name: "MHERO" },
];

function ShopByBrandsSection({ onNavigate }: { onNavigate: (path: string) => void }) {
  const doubled = [...BRAND_ITEMS, ...BRAND_ITEMS];
  return (
    <section className="py-[56px] sm:py-[80px] bg-white">
      <div className="container-x mb-[32px] sm:mb-[40px]">
        <div className="flex flex-col gap-[8px]">
          <span className="ty-title ty-title-gradient ty-h1">Shop by Brands</span>
          <span className="text-text-secondary text-lg font-normal leading-normal">Choose from a wide range of trusted car brands.</span>
        </div>
      </div>
      <div className="overflow-hidden w-full">
        <div className="marquee-track">
          {doubled.map((brand, i) => (
            <button
              key={`${brand.name}-${i}`}
              type="button"
              onClick={() => onNavigate(`/buy?make=${brand.name}`)}
              aria-label={`Shop ${brand.name}`}
              className="group flex-none mx-[10px] w-[168px] h-[96px] rounded-[16px] border border-border-default bg-white flex items-center justify-center px-[24px] transition-all duration-200 hover:border-border-strong hover:shadow-[0_10px_24px_rgba(28,41,88,0.08)]"
            >
              <img
                alt={brand.name}
                src={brand.img}
                style={logoSize(brand.ratio)}
                className="object-contain grayscale opacity-55 transition-all duration-200 group-hover:grayscale-0 group-hover:opacity-100"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}


// ─── Customer Reviews ─────────────────────────────────────────────────────────
const GOOGLE_REVIEWS_URL =
  "https://www.google.com.tr/search?sca_esv=7c3c44d1206346ec&sxsrf=APpeQnvKeiBQMu3wvS4kJZceQQYFmxDBIA:1782136792920&q=AG+Used+Cars+Al+Aweer&si=APenkKm7iecQ4G6P-TsbSMFKIQtv3EFIqRAFw-i8uEbk55Z-_0tBwuv8bvpkNSl_impxZN3D8jcaSLDSC6dMFaggomndfA16EBRGj_fCYywQZSDchf7KyJg%3D&uds=AJ5uw18DPBJOn80cbboS56WlwpSFBl508p70PRb-zdRncf3V_6uXMYYrgMWXWFEWBrH0akBVLpUP_XKyu2qpnkiHAylA9ivVZ2YlX9H4imulQvmnYdfd1M7mpGLTld3_NjleFZkDreHx&sa=X&ved=2ahUKEwj_-e3zgJuVAxU4hv0HHS-jF10Q3PALegQIGRAE&biw=1920&bih=911&dpr=1";

const REVIEW_CARDS = [
  { name: "Mohab Abuosbaa", initial: "m", color: "#3d85c6", text: "My experience buying from Al Ghurair was absolutely fantastic, especially with Ziad, who was so cheerful and helpful. Anyone wanting to buy from Al Ghurair should go to Ziad. Everything is easy to deal with." },
  { name: "Farhan Feroze", initial: "F", color: "#5d4037", text: "I bought a 2024 Mazda CX-5 from AG Cars. It was truly my dream car. I had been searching for the right vehicle for a long time, and finally I found it at AG Cars. Mr. Dinesh helped me throughout the entire journey, from beginning to the end, making the process seamless and enjoyable." },
  { name: "Abdul Khadar", initial: "A", color: "#3f949f", text: "I happened to interact with the representative of AG Used Cars, they sounded very knowledgeable on used cars and multiple car brands. They are very thorough in explaining how the…" },
  { name: "Akhil Dileep", initial: "A", color: "#6a8f3a", text: "Heartfelt thanks to Al Ghurair for an exceptional experience. Delivering my Nissan X-Trail in top condition, at a great price, with remarkable speed and care truly meant a lot. Special…" },
  { name: "Shahid Shareef", initial: "S", color: "#1e4d3f", text: "I recently purchased my Haval Jolion Pro from AG Used Car at Al Aweer Motor Market, and I would like to sincerely thank Mr. Akash for his excellent service. He was professional…" },
  { name: "Sabir Shajahan", initial: "S", color: "#5d4037", text: "We had a great experience dealing with Al Ghurair Used Cars. Mr. Abdulrahman was extremely hospitable and informative throughout the whole process. He really…" },
  { name: "Ivan S.", initial: "I", color: "var(--color-text-primary)", text: "Great experience with AG cars. Car which I purchased was in great condition. Recommendations for Mr Zeyad for the best deal and giving me the best car Mazda CX5 from…" },
];

function useVisibleSlides() {
  const get = () => (typeof window === "undefined" ? 3 : window.matchMedia("(min-width: 1280px)").matches ? 3 : window.matchMedia("(min-width: 1024px)").matches ? 2 : 1);
  const [count, setCount] = useState(get);
  useEffect(() => {
    const onResize = () => setCount(get());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  return count;
}

function CustomerReviewsSection() {
  const visible = useVisibleSlides();
  const positions = Math.max(1, REVIEW_CARDS.length - visible + 1);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const dragStart = useRef<number | null>(null);
  const current = Math.min(index, positions - 1);
  const isRtl = typeof document !== "undefined" && document.documentElement.dir === "rtl";

  const go = (i: number) => setIndex((i + positions) % positions);

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => setIndex((i) => (Math.min(i, positions - 1) + 1) % positions), 5000);
    return () => window.clearInterval(id);
  }, [paused, positions]);

  return (
    <section className="py-[56px] sm:py-[80px] bg-white">
      <div className="container-x">
        <div className="flex flex-col gap-[8px] items-start mb-[40px]">
          <span className="ty-title ty-title-gradient ty-h1">Customer Reviews</span>
          <span className="text-text-secondary text-lg font-normal leading-normal">What people say after they drive away</span>
        </div>

        <div className="flex flex-col md:flex-row gap-[24px] items-stretch">
          {/* Rating card */}
          <div
            className="bg-gradient-to-r from-bg-brand to-[#001dd9] flex flex-col gap-[24px] items-center justify-between p-[24px] relative rounded-[12px] shrink-0 md:w-[302px]"
            style={{ boxShadow: "0px 18px 20px rgba(28,41,88,0.12)" }}
          >
            <div className="flex flex-col items-center text-center">
              <span className="text-white text-5xl font-bold leading-none tabular-nums">4.9</span>
              <span className="text-state-warning text-2xl leading-none mt-[8px] tracking-[2px]" aria-label="Rated 4.9 out of 5">★★★★★</span>
            </div>
            <span className="text-white text-lg font-semibold leading-normal text-center">Google Rating</span>
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white flex gap-[8px] h-[50px] items-center justify-center px-[24px] py-[12px] rounded-[99px] w-full hover:bg-blue-50 transition-colors"
            >
              <svg fill="none" height="24" viewBox="0 0 24 24" width="24" aria-hidden="true">
                <path d={svgPaths.p2ffca980} fill="var(--color-state-warning)" />
                <path d={svgPaths.p239ad280} fill="#FF3D00" />
                <path d={svgPaths.p34e48800} fill="#4CAF50" />
                <path d={svgPaths.p35fbea00} fill="#1976D2" />
              </svg>
              <span className="text-text-brand text-sm font-semibold leading-[18px] whitespace-nowrap">Read Our Reviews</span>
              <svg className="block size-[24px] shrink-0 text-text-brand rtl:-scale-x-100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M6 18L18 6M8.25 6H18v9.75" /></svg>
            </a>
          </div>

          {/* Review slider */}
          <div className="flex-1 min-w-0 flex flex-col gap-[24px]">
            <div
              className="overflow-hidden flex-1 rounded-[12px]"
              role="region"
              tabIndex={0}
              aria-roledescription="carousel"
              aria-label="Customer reviews"
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
              onFocus={() => setPaused(true)}
              onBlur={() => setPaused(false)}
              onPointerDown={(e) => (dragStart.current = e.clientX)}
              onPointerUp={(e) => {
                if (dragStart.current === null) return;
                const dx = e.clientX - dragStart.current;
                dragStart.current = null;
                if (Math.abs(dx) < 40) return;
                go(current + ((dx < 0) !== isRtl ? 1 : -1));
              }}
              onKeyDown={(e) => {
                if (e.key === "ArrowRight") go(current + (isRtl ? -1 : 1));
                if (e.key === "ArrowLeft") go(current + (isRtl ? 1 : -1));
              }}
            >
              <div
                className="flex h-full -mx-[12px] transition-transform duration-500 ease-out motion-reduce:transition-none"
                style={{ transform: `translateX(${(isRtl ? 1 : -1) * current * (100 / visible)}%)` }}
              >
                {REVIEW_CARDS.map((r, i) => (
                  <div
                    key={r.name}
                    className="shrink-0 px-[12px] select-none"
                    style={{ width: `${100 / visible}%` }}
                    aria-hidden={i < current || i >= current + visible}
                  >
                    <figure className="bg-bg-surface h-full flex flex-col justify-between p-[16px] rounded-[12px]">
                      <div className="flex flex-col gap-[16px]">
                        <svg className="block" fill="none" height="28" viewBox="0 0 34 28" width="34" aria-hidden="true">
                          <path d={svgPaths.p2c269600} fill="#486284" fillOpacity="0.1" />
                        </svg>
                        <blockquote className="text-text-primary text-base font-normal leading-[1.5] line-clamp-6">
                          {r.text}
                        </blockquote>
                      </div>
                      <figcaption className="flex gap-[8px] items-center mt-[16px]">
                        <span
                          className="size-[40px] rounded-full shrink-0 flex items-center justify-center text-white text-lg leading-none"
                          style={{ background: r.color }}
                          aria-hidden="true"
                        >
                          {r.initial}
                        </span>
                        <div className="flex flex-col min-w-0">
                          <span className="text-text-primary text-base font-semibold leading-normal truncate">{r.name}</span>
                          <span className="text-state-warning leading-normal" aria-label="5 stars">★★★★★</span>
                        </div>
                      </figcaption>
                    </figure>
                  </div>
                ))}
              </div>
            </div>

            {positions > 1 && (
              <div className="flex justify-center gap-[10px]">
                {Array.from({ length: positions }).map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => go(i)}
                    aria-label={`Show reviews ${i + 1} to ${i + visible}`}
                    aria-current={i === current}
                    className={`h-[10px] rounded-full transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-border-focus ${
                      i === current ? "w-[28px] bg-bg-brand" : "w-[10px] bg-border-default hover:bg-border-strong"
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Car Tips & Guides ────────────────────────────────────────────────────────
const BLOG_POSTS = [
  { id: "1", img: imgRectangle12, title: "Used Car Test Drive Checklist: What to Inspect Before Making a Purchase", readTime: "7 min read" },
  { id: "2", img: imgRectangle13, title: "How to check a car history report in the UAE", readTime: "2 min read" },
  { id: "3", img: imgRectangle14, title: "Signs a used car has been well maintained", readTime: "2 min read", featured: true },
  { id: "traffic-fines", img: imgRectangle16, title: "UAE Traffic Fines Every Driver Should Know", readTime: "6 min read" },
  { id: "5", img: imgRectangle15, title: "Financing basics: down payment and tenure", readTime: "2 min read" },
];

function BlogCard({ post, onClick }: { post: typeof BLOG_POSTS[0]; onClick: () => void }) {
  return (
    <button type="button" onClick={onClick} className="group flex flex-col gap-[14px] text-start w-full rounded-[16px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-border-focus">
      <div className="relative w-full aspect-square sm:aspect-[416/375] rounded-[16px] overflow-hidden bg-bg-surface">
        <img
          alt=""
          src={post.img}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04] motion-reduce:transition-none"
        />
      </div>
      <div className="flex flex-col gap-[6px] px-[2px]">
        <span className="text-text-primary text-lg font-semibold leading-[1.4] line-clamp-2 transition-colors duration-150 group-hover:text-text-brand">
          {post.title}
        </span>
        <span className="flex items-center gap-[6px] text-text-secondary text-sm leading-normal">
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <circle cx="8" cy="8" r="6.25" stroke="currentColor" strokeWidth="1.5" />
            <path d="M8 4.75V8l2.25 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          {post.readTime}
        </span>
      </div>
    </button>
  );
}

function CarTipsSection({ onNavigate }: { onNavigate: (path: string) => void }) {
  const open = (i: number) => () => onNavigate(`/blog/${BLOG_POSTS[i].id}`);
  return (
    <section className="py-[56px] sm:py-[96px] bg-white">
      <div className="container-x">
        {/* 3 × 2 grid: the title sits in the top-middle cell and stretches to the row height */}
        <div data-parallax-cards className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[24px] lg:gap-x-[32px] gap-y-[32px] lg:gap-y-[40px]">
          <BlogCard post={BLOG_POSTS[0]} onClick={open(0)} />

          <div className="order-first md:col-span-2 lg:col-span-1 lg:order-none flex flex-col gap-[24px] items-center justify-center text-center px-[16px] pb-[8px] lg:pb-0">
            <div className="flex flex-col gap-[8px] items-center">
              <h2 className="ty-title ty-title-gradient ty-h1">{"Car Tips & Guides"}</h2>
              <p className="text-text-secondary text-lg leading-[1.6] max-w-[320px]">Tips and insights to help you make confident car decisions.</p>
            </div>
            <button
              onClick={() => onNavigate("/blog")}
              className="group flex items-center gap-[10px] h-[48px] px-[28px] rounded-[999px] bg-bg-brand text-white transition-colors duration-150 hover:bg-bg-brand-hover"
            >
              <span className="text-base font-semibold leading-none">View All</span>
              <svg className="block size-[22px] rtl:-scale-x-100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M6 18L18 6M8.25 6H18v9.75" /></svg>
            </button>
          </div>

          <BlogCard post={BLOG_POSTS[3]} onClick={open(3)} />
          <BlogCard post={BLOG_POSTS[1]} onClick={open(1)} />
          <BlogCard post={BLOG_POSTS[2]} onClick={open(2)} />
          <BlogCard post={BLOG_POSTS[4]} onClick={open(4)} />
        </div>
      </div>
    </section>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection onNavigate={navigate} />
      <BestSellersSection onNavigate={navigate} />
      <WhyUsSection />
      <FeaturedCarsSection onNavigate={navigate} />
      <ShopByBrandsSection onNavigate={navigate} />
      <section className="py-[56px] sm:py-[80px] bg-bg-surface relative overflow-hidden">
        <SellYourCarForm onNavigate={navigate} className="container-x" />
      </section>
      <CustomerReviewsSection />
      {/* Both sections sit on white, so a hairline separates them */}
      <div className="container-x" aria-hidden="true">
        <div className="h-px bg-gradient-to-r from-transparent via-bg-subtle to-transparent" />
      </div>
      <CarTipsSection onNavigate={navigate} />
      <Footer />
    </div>
  );
}
