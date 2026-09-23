import { useCallback, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import svgPaths from "@/imports/00HomeV34/svg-qhcw3sf999";
import { useAuth } from "@/lib/auth";
import { LANGUAGES, useLanguage } from "@/lib/language";
import AuthGateModal from "./AuthGateModal";
import ContactMenu from "./ContactMenu";
import SearchPanel from "./SearchPanel";

const navLinks = [
  { label: "Buy", href: "/buy" },
  { label: "Sell", href: "/sell" },
  { label: "Compare", href: "/compare" },
  { label: "Finance", href: "/finance" },
  { label: "Offers", href: "/offers" },
  { label: "About Us", href: "/about" },
];

function AgCarsLogo() {
  return (
    <div className="h-[32px] relative shrink-0 w-[115px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 115 32" width="115">
        <g clipPath="url(#clip0_hdr)">
          <g filter="url(#f0_hdr)"><path d={svgPaths.p30c8d740} fill="white" /></g>
          <g filter="url(#f1_hdr)"><path d={svgPaths.p28d0300} fill="white" /></g>
          <g filter="url(#f2_hdr)"><path d={svgPaths.p33c99600} fill="white" /></g>
          <g filter="url(#f3_hdr)"><path d={svgPaths.p2b3d0ff0} fill="white" /></g>
          <g filter="url(#f4_hdr)"><path d={svgPaths.p16af3c00} fill="white" /></g>
          <g filter="url(#f5_hdr)"><path d={svgPaths.p33cfc900} fill="#00ED99" /></g>
          <g filter="url(#f6_hdr)"><path d={svgPaths.p7ef7a00} fill="#0061FF" /></g>
          <g filter="url(#f7_hdr)"><path d={svgPaths.p35cf8980} fill="white" /></g>
          <g filter="url(#f8_hdr)"><path d={svgPaths.p3b99bd00} fill="white" /></g>
          <g filter="url(#f9_hdr)"><path d={svgPaths.p5e82f80} fill="white" /></g>
          <g filter="url(#f10_hdr)"><path d={svgPaths.p9912800} fill="white" /></g>
          <g filter="url(#f11_hdr)"><path d={svgPaths.p28afd680} fill="white" /></g>
          <g filter="url(#f12_hdr)"><path d={svgPaths.p2f378900} fill="white" /></g>
          <g filter="url(#f13_hdr)"><path d={svgPaths.p30f6c100} fill="white" /></g>
          <g filter="url(#f14_hdr)"><path d={svgPaths.p20729c80} fill="white" /></g>
          <g filter="url(#f15_hdr)"><path d={svgPaths.p11d22c00} fill="white" /></g>
          <g filter="url(#f16_hdr)"><path d={svgPaths.p1cf46c80} fill="white" /></g>
          <g filter="url(#f17_hdr)"><path d={svgPaths.p203ec080} fill="white" /></g>
          <g filter="url(#f18_hdr)"><path d={svgPaths.p9eb4d00} fill="white" /></g>
        </g>
        <defs>
          {[
            { id: "f0_hdr", x: "15.2265", y: "5.82078", w: "24.0292", h: "23.7872" },
            { id: "f1_hdr", x: "33.204", y: "5.83078", w: "15.7409", h: "23.7764" },
            { id: "f2_hdr", x: "59.3037", y: "0.862999", w: "24.0283", h: "28.8978" },
            { id: "f3_hdr", x: "41.6105", y: "5.44826", w: "24.4484", h: "24.3113" },
            { id: "f4_hdr", x: "-4", y: "1.34053", w: "26.7577", h: "28.4926" },
            { id: "f5_hdr", x: "89.8799", y: "0.00295485", w: "29.1205", h: "30.617" },
            { id: "f6_hdr", x: "78.6043", y: "0.00295485", w: "29.1205", h: "30.617" },
            { id: "f7_hdr", x: "15.6787", y: "25.4047", w: "12.0031", h: "14.5965" },
            { id: "f8_hdr", x: "20.3574", y: "27.1149", w: "12.0375", h: "12.8701" },
            { id: "f9_hdr", x: "24.9033", y: "27.0123", w: "12.1601", h: "12.9618" },
            { id: "f10_hdr", x: "29.1777", y: "25.9223", w: "10.6464", h: "14.0284" },
            { id: "f11_hdr", x: "33.8027", y: "25.292", w: "13.9632", h: "14.6986" },
            { id: "f12_hdr", x: "40.1436", y: "27.0074", w: "12.5508", h: "12.9695" },
            { id: "f13_hdr", x: "45.0293", y: "27.0074", w: "12.5508", h: "12.9695" },
            { id: "f14_hdr", x: "49.918", y: "25.4047", w: "12.3607", h: "14.5598" },
            { id: "f15_hdr", x: "56.5362", y: "25.2898", w: "13.8094", h: "14.6972" },
            { id: "f16_hdr", x: "62.6854", y: "27.0223", w: "12.3568", h: "12.9369" },
            { id: "f17_hdr", x: "67.7764", y: "27.0674", w: "10.8205", h: "12.8059" },
            { id: "f18_hdr", x: "70.7061", y: "27.0123", w: "12.1602", h: "12.9618" },
          ].map(({ id, x, y, w, h }) => (
            <filter key={id} colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" id={id} height={h} width={w} x={x} y={y}>
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow" mode="normal" result="shape" />
            </filter>
          ))}
          <clipPath id="clip0_hdr"><rect fill="white" height="32" width="115" /></clipPath>
        </defs>
      </svg>
    </div>
  );
}

function AlGhurairLogo() {
  return (
    <div className="h-[40px] overflow-clip relative shrink-0 w-[124px]">
      <div className="absolute inset-[40.09%_88.17%_34.38%_5.93%]">
        <svg className="absolute block inset-0 size-full" fill="none" height="10.2135" preserveAspectRatio="none" viewBox="0 0 7.32559 10.2135" width="7.32559">
          <path d={svgPaths.p38730500} fill="white" />
        </svg>
      </div>
      <div className="absolute inset-[32.7%_94.33%_40.84%_0]">
        <svg className="absolute block inset-0 size-full" fill="none" height="10.5828" preserveAspectRatio="none" viewBox="0 0 7.03591 10.5828" width="7.03591">
          <path d={svgPaths.p355e100} fill="white" />
        </svg>
      </div>
      <div className="absolute inset-[0.47%_0.69%_1.65%_14.92%] overflow-clip">
        <div className="absolute inset-0 overflow-clip">
          <div className="absolute contents inset-0">
            <div className="absolute inset-[32.69%_38.3%_40.15%_0]">
              <svg className="absolute block inset-0 size-full" fill="none" height="10.6324" preserveAspectRatio="none" viewBox="0 0 64.5662 10.6324" width="64.5662">
                <g>
                  <path d={svgPaths.p114b4340} fill="white" />
                  <path d={svgPaths.p25f35980} fill="white" />
                  <path d={svgPaths.p134d51f0} fill="white" />
                  <path d={svgPaths.p17b46800} fill="white" />
                  <path d={svgPaths.p2701cef0} fill="white" />
                  <path d={svgPaths.p368659c0} fill="white" />
                  <path d={svgPaths.p1eb71f00} fill="white" />
                  <path d={svgPaths.p1186d040} fill="white" />
                  <path d={svgPaths.p156baa80} fill="white" />
                  <path d={svgPaths.p10d68e00} fill="white" />
                </g>
              </svg>
            </div>
            <div className="absolute inset-[0_0_0_65.56%]">
              <svg className="absolute block inset-0 size-full" fill="none" height="39.154" preserveAspectRatio="none" viewBox="0 0 36.0382 39.154" width="36.0382">
                <path d={svgPaths.p5abaf80} fill="white" />
                <path d={svgPaths.p3f298f80} fill="#DE0090" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function LanguageSwitch() {
  const { language, setLanguage, t } = useLanguage();
  return (
    <div
      role="radiogroup"
      aria-label={t("Language")}
      data-no-translate
      className="relative grid grid-cols-2 p-[3px] rounded-full bg-white/10"
    >
      <span
        aria-hidden="true"
        className="lang-switch-thumb absolute top-[3px] bottom-[3px] start-[3px] w-[calc(50%-3px)] rounded-full bg-white shadow-[0_2px_6px_rgba(0,0,30,0.25)]"
        style={{ transform: `translateX(${language === "en" ? "0" : "var(--lang-shift)"})` }}
      />
      {LANGUAGES.map((l) => (
        <button
          key={l.code}
          type="button"
          role="radio"
          aria-checked={language === l.code}
          aria-label={l.label}
          lang={l.code}
          onClick={() => setLanguage(l.code)}
          className={`relative z-10 h-[32px] w-[44px] rounded-full text-sm font-semibold transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--color-bg-accent) ${
            language === l.code ? "text-text-primary" : "text-white/60 hover:text-white"
          }`}
        >
          {l.code.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { user } = useAuth();
  const { language, setLanguage, t } = useLanguage();
  const labelFont = language === "ar" ? "font-arabic" : "";

  const isActive = (href: string) => location.pathname.startsWith(href);
  const [authGateOpen, setAuthGateOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const closeSearch = useCallback(() => setSearchOpen(false), []);
  const navigate = useNavigate();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setSearchOpen(true);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  // The floating pill docks into a full-width bar once the page scrolls.
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Desktop: floating pill header that docks to a full-width bar on scroll */}
      <header
        className={`site-header fixed left-1/2 -translate-x-1/2 z-50 hidden xl:block ${
          scrolled ? "top-0 w-full" : "top-6 w-[min(1280px,calc(100vw-40px))]"
        }`}
      >
        <div
          className={`site-header-bar glass-bar w-full ${
            scrolled
              ? "rounded-none border-b border-white/15 shadow-[0_8px_24px_rgba(0,0,30,0.18)]"
              : "rounded-[40px] border border-white/20 shadow-[0_12px_32px_rgba(0,0,30,0.22)]"
          }`}
        >
          <div className={`flex items-center justify-between relative mx-auto w-full max-w-[1280px] ${scrolled ? "px-8 py-3" : "ps-8 pe-4 py-4"}`}>
            {/* Logos */}
            <Link to="/" className="flex items-center gap-4 shrink-0">
              <AgCarsLogo />
              <AlGhurairLogo />
            </Link>

            {/* Center nav */}
            <nav className="absolute left-1/2 -translate-x-1/2 flex items-center drop-shadow-[0px_4px_2px_rgba(0,0,0,0.12)]">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="flex flex-col items-center px-3 py-2 group"
                >
                  <span className={`text-white text-base leading-normal whitespace-nowrap ${labelFont} font-medium`}>
                    {t(link.label)}
                  </span>
                  <div
                    className={`h-[2px] w-full bg-bg-accent rounded-full origin-center transition-transform duration-300 ease-out motion-reduce:transition-none ${
                      isActive(link.href) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100 group-focus-visible:scale-x-100"
                    }`}
                  />
                </Link>
              ))}
            </nav>

            {/* Right: account + language + call us */}
            <div className="flex items-center gap-3 shrink-0">
              <LanguageSwitch />
              {/* Search + favorites + account */}
              <div className="flex items-center gap-2 me-1">
                <button
                  type="button"
                  onClick={() => setSearchOpen(true)}
                  className="has-tip relative p-[7px] rounded-full text-white opacity-90 transition-[background-color,opacity,transform] duration-200 hover:opacity-100 hover:bg-white/12 focus-visible:opacity-100 focus-visible:bg-white/12 focus-visible:outline focus-visible:outline-2 focus-visible:outline-(--color-bg-accent) active:scale-95"
                  aria-label={t("Search")}
                >
                  <svg fill="none" height="24" viewBox="0 0 24 24" width="24" stroke="white" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                    <circle cx="11" cy="11" r="7" />
                    <path d="m20 20-3.5-3.5" />
                  </svg>
                  <span role="tooltip" className="tip tip--below">{t("Search")} · ⌘K</span>
                </button>
                <Link
                  to="/account?tab=favorites"
                  onClick={(e) => {
                    if (!user) {
                      e.preventDefault();
                      setAuthGateOpen(true);
                    }
                  }}
                  className="has-tip relative p-[7px] rounded-full text-white opacity-90 transition-[background-color,opacity,transform] duration-200 hover:opacity-100 hover:bg-white/12 focus-visible:opacity-100 focus-visible:bg-white/12 focus-visible:outline focus-visible:outline-2 focus-visible:outline-(--color-bg-accent) active:scale-95"
                  aria-label="Favorites"
                >
                  <svg fill="none" height="24" viewBox="0 0 24 24" width="24" aria-hidden="true">
                    <path d={svgPaths.p3f465200} fill="white" />
                  </svg>
                  <span role="tooltip" className="tip tip--below">Favorites</span>
                </Link>
                <Link
                  to={user ? "/account" : "/login"}
                  className="has-tip relative p-[7px] rounded-full text-white opacity-90 transition-[background-color,opacity,transform] duration-200 hover:opacity-100 hover:bg-white/12 focus-visible:opacity-100 focus-visible:bg-white/12 focus-visible:outline focus-visible:outline-2 focus-visible:outline-(--color-bg-accent) active:scale-95"
                  aria-label={user ? `Account: ${user.name}` : "Sign in"}
                >
                  <svg fill="none" height="24" viewBox="0 0 24 24" width="24" aria-hidden="true">
                    <path d={svgPaths.p1d1a2680} fill="white" />
                  </svg>
                  <span role="tooltip" className="tip tip--below">{user ? "My account" : "Sign in"}</span>
                </Link>
              </div>
              {/* Call Us: contact card on desktop */}
              <ContactMenu
                trigger={
                  <span className="bg-bg-brand border border-border-focus flex items-center gap-2 px-5 py-3 rounded-[99px] transition-colors duration-150 hover:bg-bg-brand-hover hover:border-(--color-bg-brand-hover) cursor-pointer">
                    <svg fill="none" height="24" viewBox="0 0 24 24" width="24" aria-hidden="true">
                      <path d={svgPaths.p2740b080} fill="white" />
                    </svg>
                    <span className={`text-white text-base leading-[18px] ${labelFont} font-medium whitespace-nowrap`}>{t("Call Us")}</span>
                  </span>
                }
              />
            </div>
          </div>
        </div>
      </header>

      {/* Mobile header */}
      <header className="xl:hidden w-full glass-bar border-b border-white/15 sticky top-0 z-50">
        <div className="flex items-center justify-between px-5 h-[70px]">
          <Link to="/" className="flex items-center gap-3">
            <AgCarsLogo />
          </Link>
          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              className="p-2 rounded-full text-white opacity-90 transition-[background-color,opacity] duration-200 hover:opacity-100 hover:bg-white/12 active:scale-95"
              aria-label={t("Search")}
            >
              <svg fill="none" height="24" viewBox="0 0 24 24" width="24" stroke="white" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-3.5-3.5" />
              </svg>
            </button>
            <Link
              to="/account?tab=favorites"
              onClick={(e) => {
                if (!user) {
                  e.preventDefault();
                  setAuthGateOpen(true);
                }
              }}
              className="p-2 rounded-full text-white opacity-90 transition-[background-color,opacity] duration-200 hover:opacity-100 hover:bg-white/12 active:scale-95"
              aria-label="Favorites"
            >
              <svg fill="none" height="24" viewBox="0 0 24 24" width="24" aria-hidden="true">
                <path d={svgPaths.p3f465200} fill="white" />
              </svg>
            </Link>
            <Link
              to={user ? "/account" : "/login"}
              className="p-2 rounded-full text-white opacity-90 transition-[background-color,opacity] duration-200 hover:opacity-100 hover:bg-white/12 active:scale-95"
              aria-label={user ? `Account: ${user.name}` : "Sign in"}
            >
              <svg fill="none" height="24" viewBox="0 0 24 24" width="24" aria-hidden="true">
                <path d={svgPaths.p1d1a2680} fill="white" />
              </svg>
            </Link>
            <button
              className="text-white p-2 ms-1"
              onClick={() => setMobileMenuOpen(true)}
              aria-label={t("Open menu")}
            >
              <svg fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-bg-inverse flex flex-col px-5 pt-0 xl:hidden overflow-y-auto">
          <div className="h-[70px] flex items-center justify-between">
            <Link to="/" onClick={() => setMobileMenuOpen(false)}>
              <AgCarsLogo />
            </Link>
            <button className="text-white p-1" onClick={() => setMobileMenuOpen(false)} aria-label={t("Close menu")}>
              <svg fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <nav className="flex flex-col gap-2 mt-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-lg font-medium py-3 border-b border-white/10 transition-colors duration-150 ${language === "ar" ? "font-arabic" : ""} ${
                  isActive(link.href) ? "text-text-accent" : "text-white hover:text-text-accent"
                }`}
              >
                {t(link.label)}
              </Link>
            ))}
          </nav>
          <div className="mt-8 flex flex-col gap-3">
            <div role="radiogroup" aria-label={t("Language")} data-no-translate className="grid grid-cols-2 gap-2 p-1 rounded-full border border-white/20">
              {LANGUAGES.map((l) => (
                <button
                  key={l.code}
                  type="button"
                  role="radio"
                  aria-checked={l.code === language}
                  lang={l.code}
                  onClick={() => setLanguage(l.code)}
                  className={`py-2.5 rounded-full text-base font-medium transition-colors duration-150 ${l.code === "ar" ? "font-arabic" : ""} ${
                    l.code === language ? "bg-white text-text-primary" : "text-white hover:bg-white/10"
                  }`}
                >
                  {l.code.toUpperCase()}
                </button>
              ))}
            </div>
            <a
              href="tel:+97141234567"
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center justify-center gap-2 w-full bg-bg-brand text-white text-center px-5 py-3 rounded-full font-semibold text-base ${language === "ar" ? "font-arabic" : ""}`}
            >
              <svg fill="none" height="20" viewBox="0 0 24 24" width="20">
                <path d={svgPaths.p2740b080} fill="white" />
              </svg>
              {t("Call Us")}
            </a>
          </div>
        </div>
      )}
      {searchOpen && <SearchPanel onClose={closeSearch} />}
      {authGateOpen && <AuthGateModal onClose={() => setAuthGateOpen(false)} onSuccess={() => navigate("/account?tab=favorites")} />}
    </>
  );
}
