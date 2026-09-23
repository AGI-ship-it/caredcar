import { Fragment, useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { useNavigate } from "react-router-dom";
import { cars } from "../data/cars";
import { OFFERS } from "../data/offers";
import { blogPosts } from "../pages/BlogDetail";
import { FAQS } from "../pages/Faq";
import { HOURS_LINES } from "../lib/contactInfo";
import { useLanguage } from "../lib/language";
import DirhamSymbol from "./DirhamSymbol";

type GroupKey = "cars" | "offers" | "services" | "locations" | "articles" | "help";

interface Entry {
  group: GroupKey;
  title: string;
  subtitle: string;
  href: string;
  image?: string;
  price?: number;
  keywords?: string;
}

const SERVICES: Omit<Entry, "group">[] = [
  { title: "Buy a Car", subtitle: "Browse certified pre-owned cars", href: "/buy", keywords: "shop stock inventory used" },
  { title: "Sell Your Car", subtitle: "Get an instant offer and same-day payment", href: "/sell", keywords: "trade in valuation" },
  { title: "Car Finance", subtitle: "Flexible plans through our partner banks", href: "/finance", keywords: "loan bank installment" },
  { title: "EMI Calculator", subtitle: "Estimate your monthly payment", href: "/finance#emi-calculator", keywords: "finance loan monthly" },
  { title: "Compare Cars", subtitle: "Put models side by side", href: "/compare", keywords: "versus vs specs" },
  { title: "Contact Us", subtitle: "Call, WhatsApp or visit our team", href: "/contact", keywords: "phone email support" },
];

const INDEX: Entry[] = [
  ...cars.map((c) => ({
    group: "cars" as const,
    title: `${c.year} ${c.make} ${c.model}`,
    subtitle: `${c.bodyType} · ${c.fuelType} · ${c.mileage.toLocaleString("en-AE")} km`,
    href: `/car/${c.id}`,
    image: c.image,
    price: c.price,
    keywords: `${c.transmission} ${c.color} ${c.engineSize}`,
  })),
  ...OFFERS.map((o) => ({ group: "offers" as const, title: o.title, subtitle: o.description, href: `/offers/${o.slug}` })),
  ...SERVICES.map((s) => ({ group: "services" as const, ...s })),
  {
    group: "locations",
    title: "AG Cars Showroom",
    subtitle: `Dubai Motor City, Dubai · ${HOURS_LINES[0]}`,
    href: "/contact",
    keywords: "branch address map directions visit",
  },
  ...blogPosts.map((p) => ({ group: "articles" as const, title: p.title, subtitle: `${p.category} · ${p.readTime}`, href: `/blog/${p.id}`, keywords: p.excerpt })),
  ...FAQS.map((f) => ({ group: "help" as const, title: f.q, subtitle: f.a, href: "/faq" })),
];

const GROUPS: { key: GroupKey; label: string; limit: number }[] = [
  { key: "cars", label: "Cars", limit: 4 },
  { key: "offers", label: "Offers", limit: 3 },
  { key: "services", label: "Services", limit: 3 },
  { key: "locations", label: "Locations", limit: 2 },
  { key: "articles", label: "Articles", limit: 3 },
  { key: "help", label: "Help", limit: 3 },
];

const POPULAR = ["SUV", "Electric", "Land Cruiser", "Finance", "Warranty", "Sell"];

const ICON_PATHS: Record<GroupKey, ReactNode> = {
  cars: <path d="M5 17h14M5 17a2 2 0 1 1-4 0v-5l2.5-5.5A2 2 0 0 1 5.3 5h13.4a2 2 0 0 1 1.8 1.5L23 12v5a2 2 0 1 1-4 0M5 17H3m16 0h2M1 12h22" />,
  offers: <path d="M20.6 13.4 13.4 20.6a2 2 0 0 1-2.8 0L2 12V2h10l8.6 8.6a2 2 0 0 1 0 2.8ZM7 7h.01" />,
  services: <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76Z" />,
  locations: <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0ZM12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />,
  articles: <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-4 0v-9h4M18 14h-8M15 18h-5M10 6h8v4h-8Z" />,
  help: <path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20ZM9.1 9a3 3 0 0 1 5.8 1c0 2-3 3-3 3M12 17h.01" />,
};

function GroupIcon({ group, size = 18 }: { group: GroupKey; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {ICON_PATHS[group]}
    </svg>
  );
}

function tokenize(q: string) {
  return q.toLowerCase().split(/\s+/).filter(Boolean);
}

function Highlight({ text, tokens }: { text: string; tokens: string[] }) {
  if (!tokens.length) return <>{text}</>;
  const escaped = tokens.map((t) => t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  const parts = text.split(new RegExp(`(${escaped.join("|")})`, "gi"));
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <mark key={i} className="bg-bg-accent-soft text-text-primary rounded-[3px] px-px">
            {part}
          </mark>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        )
      )}
    </>
  );
}

export default function SearchPanel({ onClose }: { onClose: () => void }) {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const { t } = useLanguage();

  const tokens = useMemo(() => tokenize(query), [query]);

  const groups = useMemo(() => {
    if (!tokens.length) return [];
    const matches = INDEX.filter((e) => {
      const hay = `${e.title} ${e.subtitle} ${e.keywords ?? ""}`.toLowerCase();
      return tokens.every((tok) => hay.includes(tok));
    });
    return GROUPS.map((g) => {
      const all = matches.filter((e) => e.group === g.key);
      return { ...g, total: all.length, items: all.slice(0, g.limit) };
    }).filter((g) => g.total > 0);
  }, [tokens]);

  const flat = useMemo(() => groups.flatMap((g) => g.items), [groups]);
  const total = groups.reduce((n, g) => n + g.total, 0);
  const carTotal = groups.find((g) => g.key === "cars")?.total ?? 0;

  useEffect(() => setActive(-1), [query]);

  useEffect(() => {
    inputRef.current?.focus();
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  function go(href: string) {
    onClose();
    navigate(href);
  }

  function onInputKey(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "ArrowDown" && flat.length) {
      e.preventDefault();
      setActive((i) => (i + 1) % flat.length);
    } else if (e.key === "ArrowUp" && flat.length) {
      e.preventDefault();
      setActive((i) => (i <= 0 ? flat.length - 1 : i - 1));
    } else if (e.key === "Enter" && query.trim()) {
      e.preventDefault();
      if (active >= 0) go(flat[active].href);
      else if (carTotal > 0 || !flat.length) go(`/search?q=${encodeURIComponent(query.trim())}`);
      else go(flat[0].href);
    }
  }

  useEffect(() => {
    if (active >= 0) document.getElementById(`search-opt-${active}`)?.scrollIntoView({ block: "nearest" });
  }, [active]);

  let flatIndex = -1;

  return createPortal(
    <div className="fixed inset-0 z-[200] flex flex-col" onClick={onClose} style={{ background: "rgba(0,0,51,0.55)" }}>
      <div
        role="dialog"
        aria-modal="true"
        aria-label={t("Search")}
        className="search-panel bg-bg-page shadow-[0_24px_48px_rgba(0,0,30,0.25)] rounded-b-[24px] max-h-[min(88vh,820px)] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="container-x w-full py-5 md:py-6">
          <div className="flex items-center gap-3 h-[56px] ps-5 pe-2 rounded-full border border-border-default bg-bg-page transition-[border-color,box-shadow] duration-150 focus-within:border-border-focus focus-within:shadow-[0_0_0_4px_var(--color-bg-brand-soft)]">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-text-secondary shrink-0" aria-hidden="true">
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-3.5-3.5" />
            </svg>
            <input
              ref={inputRef}
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={onInputKey}
              placeholder={t("Search cars, offers, services, articles…")}
              aria-label={t("Search")}
              role="combobox"
              aria-expanded={flat.length > 0}
              aria-controls="search-results"
              aria-activedescendant={active >= 0 ? `search-opt-${active}` : undefined}
              autoComplete="off"
              className="flex-1 min-w-0 bg-transparent text-text-primary text-base md:text-lg placeholder:text-text-disabled outline-none [&::-webkit-search-cancel-button]:hidden"
            />
            {query && (
              <button
                type="button"
                onClick={() => {
                  setQuery("");
                  inputRef.current?.focus();
                }}
                className="text-sm font-medium text-text-secondary hover:text-text-primary px-2 py-1 rounded-full transition-colors"
              >
                {t("Clear")}
              </button>
            )}
            <button
              type="button"
              onClick={onClose}
              aria-label={t("Close search")}
              className="size-[40px] shrink-0 flex items-center justify-center rounded-full text-text-primary hover:bg-bg-surface transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        <div id="search-results" role="listbox" className="container-x w-full overflow-y-auto overscroll-contain pb-8">
          {!tokens.length && (
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-text-secondary mb-3">{t("Popular searches")}</p>
              <div className="flex flex-wrap gap-2">
                {POPULAR.map((term) => (
                  <button
                    key={term}
                    type="button"
                    onClick={() => {
                      setQuery(term);
                      inputRef.current?.focus();
                    }}
                    className="px-4 py-2 rounded-full border border-border-default text-sm font-medium text-text-primary hover:border-border-focus hover:text-text-brand hover:bg-bg-brand-soft transition-colors duration-150"
                  >
                    {t(term)}
                  </button>
                ))}
              </div>
            </div>
          )}

          {tokens.length > 0 && total === 0 && (
            <div className="py-10 text-center">
              <p className="text-text-primary font-semibold text-lg">{t("No results for")} “{query.trim()}”</p>
              <p className="text-text-secondary mt-1">{t("Try a make, model, body type or service.")}</p>
              <button type="button" onClick={() => go("/buy")} className="mt-5 px-5 py-2.5 rounded-full bg-bg-brand text-white font-medium hover:bg-bg-brand-hover transition-colors">
                {t("Browse all cars")}
              </button>
            </div>
          )}

          {total > 0 && (
            <>
              <p className="text-sm text-text-secondary mb-5" aria-live="polite">
                {total} {total === 1 ? t("result") : t("results")} {t("for")} “{query.trim()}”
              </p>
              <div className="flex flex-col gap-7">
                {groups.map((g) => (
                  <section key={g.key} aria-label={t(g.label)}>
                    <div className="flex items-center gap-2 mb-2.5 text-text-secondary">
                      <GroupIcon group={g.key} size={16} />
                      <h3 className="text-xs font-semibold uppercase tracking-[0.12em]">{t(g.label)}</h3>
                      <span className="text-xs font-semibold tabular-nums bg-bg-subtle text-text-secondary rounded-full px-2 py-0.5">{g.total}</span>
                    </div>
                    <ul className="flex flex-col gap-2">
                      {g.items.map((item) => {
                        flatIndex += 1;
                        const idx = flatIndex;
                        const isActive = idx === active;
                        return (
                          <li key={item.href + item.title}>
                            <button
                              id={`search-opt-${idx}`}
                              role="option"
                              aria-selected={isActive}
                              type="button"
                              onClick={() => go(item.href)}
                              onMouseEnter={() => setActive(idx)}
                              className={`group w-full flex items-center gap-4 p-3 pe-4 rounded-2xl border text-start transition-colors duration-150 ${
                                isActive ? "border-border-focus bg-bg-brand-soft" : "border-border-default bg-bg-page"
                              }`}
                            >
                              {item.image ? (
                                <img src={item.image} alt="" loading="lazy" className="w-[72px] h-[48px] rounded-lg object-cover shrink-0 bg-bg-subtle" />
                              ) : (
                                <span className="size-[44px] shrink-0 rounded-full bg-bg-surface text-text-brand flex items-center justify-center">
                                  <GroupIcon group={item.group} />
                                </span>
                              )}
                              <span className="flex-1 min-w-0">
                                <span className="block text-text-primary font-medium truncate">
                                  <Highlight text={item.title} tokens={tokens} />
                                </span>
                                <span className="block text-sm text-text-secondary truncate">
                                  <Highlight text={item.subtitle} tokens={tokens} />
                                </span>
                              </span>
                              {item.price !== undefined && (
                                <span className="hidden sm:flex items-center gap-1 shrink-0 text-text-primary font-semibold tabular-nums">
                                  <DirhamSymbol size={13} />
                                  {item.price.toLocaleString("en-AE")}
                                </span>
                              )}
                              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`shrink-0 rtl:-scale-x-100 transition-[color,transform] duration-150 ${isActive ? "text-text-brand translate-x-0.5 rtl:-translate-x-0.5" : "text-text-secondary"}`} aria-hidden="true">
                                <path d="M5 12h14M13 6l6 6-6 6" />
                              </svg>
                            </button>
                          </li>
                        );
                      })}
                    </ul>
                    {g.key === "cars" && carTotal > g.limit && (
                      <button
                        type="button"
                        onClick={() => go(`/search?q=${encodeURIComponent(query.trim())}`)}
                        className="mt-2.5 text-sm font-semibold text-text-brand hover:underline underline-offset-4"
                      >
                        {t("See all")} {carTotal} {t("cars")} →
                      </button>
                    )}
                  </section>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
}
