import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import imgAboutHero from "@/imports/about-hero.jpg";
import imgAboutPursuit from "@/imports/about-pursuit.jpg";
import imgAboutCared from "@/imports/about-cared.jpg";
import logoAlGhurair from "@/imports/brand/al-ghurair-logo.svg";
import imgWhyShape from "@/imports/brand/about-why-shape.svg";
import PageHero from "../components/PageHero";
import BrandShape from "../components/BrandShape";
import ArrowCircle from "../components/ArrowCircle";

// Headings and body copy match caredcars.com/about-us verbatim.
const FEATURES = [
  {
    title: "Inspect",
    desc: "145-point technical inspection by technicians.",
    icon: "check",
  },
  {
    title: "Warranty",
    desc: "One year or 20,000km warranty",
    icon: "shield",
  },
  {
    title: "6 Centers",
    desc: "6 Service & Repair Centers located across the UAE",
    icon: "wrench",
  },
];


const WHY_POINTS = [
  { title: "Need a car, and you don't know where to start?", desc: "We guide you from first search to final handshake.", icon: "pin" },
  { title: "Worried you don't know what you're buying?", desc: "Every vehicle is inspected and fully disclosed.", icon: "shield" },
  { title: "Who can you trust to buy with confidence?", desc: "Our advisors have no commission pressure — only your interest.", icon: "people" },
  { title: "Buying your next car should be a pleasurable experience!", desc: "We make it enjoyable, from browse to drive-away.", icon: "smile" },
];

const WHY_ICON_PATHS: Record<string, string> = {
  pin: "M12 21s-7-6.1-7-11.5a7 7 0 1114 0C19 14.9 12 21 12 21zm0-9a2.5 2.5 0 100-5 2.5 2.5 0 000 5z",
  shield: "M12 3l7 3v5.5c0 4.4-3 8.3-7 9.5-4-1.2-7-5.1-7-9.5V6l7-3zm-3 9l2 2 4-4",
  people: "M16 20v-1.5a3.5 3.5 0 00-3.5-3.5h-5A3.5 3.5 0 004 18.5V20M10 11.5a3.5 3.5 0 100-7 3.5 3.5 0 000 7zM20 20v-1.5a3.5 3.5 0 00-2.5-3.35M15.5 4.65a3.5 3.5 0 010 6.7",
  smile: "M12 21a9 9 0 100-18 9 9 0 000 18zM8.5 14s1.3 2 3.5 2 3.5-2 3.5-2M9 9.5h.01M15 9.5h.01",
};

function FeatureIcon({ type }: { type: string }) {
  if (type === "check") return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
  if (type === "shield") return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  );
  if (type === "phone") return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );
  if (type === "gauge") return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  );
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
    </svg>
  );
}

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Hero */}
      <PageHero image={imgAboutHero} imagePosition="65% 32%" title="Just Good Cars" subtitle="Dubai's trusted pre-owned cars" />

      {/* Our Promise — same treatment as the "Why Us?" band on the home page */}
      <section className="bg-bg-surface py-20">
        <div className="container-x flex flex-col gap-[32px] sm:gap-[40px]">
          <div className="flex flex-col gap-[8px]">
            <span className="ty-title ty-title-gradient ty-h1">Our Promise</span>
            <span className="text-lg font-normal leading-normal text-text-secondary">Every car is checked, covered and supported across the UAE.</span>
          </div>
          <div data-parallax-cards className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[16px] sm:gap-[24px] w-full">
            {FEATURES.map((f, i) => (
              <div
                key={f.title}
                className="relative flex flex-col p-[32px] rounded-[20px] bg-white ring-1 ring-border-default/70 overflow-hidden"
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r rtl:bg-gradient-to-l from-bg-brand to-bg-accent"
                />
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium tracking-[0.18em] text-text-disabled tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                  <span className="size-[44px] rounded-full flex items-center justify-center text-text-brand ring-1 ring-bg-brand/15 bg-bg-brand-soft/50">
                    <FeatureIcon type={f.icon} />
                  </span>
                </div>
                <span className="mt-[40px] font-display text-[26px] leading-tight text-text-brand">{f.title}</span>
                <span className="mt-[16px] h-px w-[40px] bg-bg-brand/40" />
                <span className="mt-[16px] text-[15px] font-normal leading-relaxed text-text-secondary">{f.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* In Pursuit of Better — Al Ghurair */}
      <section className="container-x py-20 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative h-96 rounded-[24px] overflow-hidden shadow-lg bg-bg-partner">
            <img
              src={imgAboutPursuit}
              alt="A happy customer giving a thumbs up from the driver's seat of his new car"
              data-parallax="0.06"
              className="absolute inset-0 w-full h-full object-cover object-[62%_center] scale-[1.2]"
            />
          </div>
          <div>
            <img src={logoAlGhurair} alt="Al Ghurair" className="h-14 sm:h-[72px] w-auto mb-6" />
            <h2 className="ty-h1 ty-title ty-title-gradient mb-4 font-display">In pursuit of better</h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              At Al Ghurair, we have always been driven by our pursuit of better. As one of the largest diversified family businesses in the Middle East, we drive transformation across industries: food, mobility, infrastructure, and real estate.
            </p>
            <p className="text-text-secondary leading-relaxed">
              Headquartered in Dubai, we operate in 20+ countries and employ over 28,000 people worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Cared / AG Cars values */}
      <section className="container-x py-20 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
 <h2 className="ty-h1 ty-title ty-title-gradient mb-4 font-display">Cared</h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              Cared has inherited the tradition and values built by the Al Ghurair family, so, we believe in enhancing the life of our employees, customers, and the community.
            </p>
            <p className="text-text-secondary leading-relaxed">
              We have the expertise to buy, prepare and sell the right quality vehicles that will meet the needs of our customers to buy with confidence.
            </p>
          </div>
          <div className="order-1 md:order-2 relative h-96 rounded-[24px] overflow-hidden shadow-lg">
            <img
              src={imgAboutCared}
              alt="Cars on display in the Cared showroom"
              data-parallax="0.06"
              className="absolute inset-0 w-full h-full object-cover scale-[1.2]"
            />
          </div>
        </div>
      </section>

      {/* Why choose Cared */}
      <section className="relative overflow-hidden bg-bg-inverse">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(255,255,255,0.08),transparent_35%),radial-gradient(circle_at_100%_100%,rgba(102,161,255,0.14),transparent_40%)]" />
        {/* Only the page-edge side of the shape is cropped so the arrow tip stays whole */}
        <div aria-hidden="true" className="pointer-events-none absolute start-0 top-1/2 hidden h-[64%] aspect-[562/537] max-w-[30%] -translate-y-1/2 overflow-hidden lg:block">
          <img src={imgWhyShape} alt="" className="absolute end-0 top-0 h-full w-auto max-w-none rtl:-scale-x-100" />
        </div>
        <div className="container-x relative py-16 lg:py-24">
          <div className="lg:ms-[32%]">
            <h2 className="ty-h1 ty-title text-white mb-8 font-display">Why choose Cared?</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
              {WHY_POINTS.map((point) => (
                <li key={point.title} className="flex items-start gap-4 rounded-[14px] border border-white/10 bg-white/[0.06] p-6">
                  <span aria-hidden="true" className="flex size-11 shrink-0 items-center justify-center rounded-[10px] bg-bg-brand/25 text-[#66A1FF]">
                    <svg className="size-5" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                      <path d={WHY_ICON_PATHS[point.icon]} />
                    </svg>
                  </span>
                  <span className="flex flex-col gap-1">
                    <span className="text-white text-base font-medium leading-snug">{point.title}</span>
                    <span className="text-white/60 text-sm leading-relaxed">{point.desc}</span>
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-4 md:mt-5 rounded-[16px] border border-white/10 bg-bg-brand/20 px-7 py-6 text-white text-lg leading-relaxed">
              That&apos;s why Cared understands your needs, and we&apos;ll do the worrying for you, so you can feel confident and enjoy owning a Cared car.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      {/* Raised navy so the band reads apart from the navy section above and the footer below */}
      <section className="relative overflow-hidden bg-bg-inverse-raised border-y border-white/10 py-12 md:py-16 text-center md:text-start">
        <BrandShape variant="split" />
        <div className="container-x relative">
          <div className="md:w-1/2 md:pe-10">
            <h2 className="ty-h1 ty-title text-white mb-2 font-display">Still Not Sure What You Need?</h2>
            <p className="text-white/85 text-lg mb-8 max-w-lg mx-auto md:mx-0">
              We&apos;re here to help with sales, finance, or service questions. Reach us in the way that&apos;s easiest for you.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Link
                to="/buy"
                className="group inline-flex items-center gap-3 rounded-full bg-white ps-7 pe-2 py-2 font-bold text-text-brand transition-colors hover:bg-bg-brand-soft text-lg"
              >
                Browse Cars
                <ArrowCircle />
              </Link>
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 rounded-full border border-white/60 ps-7 pe-2 py-2 font-bold text-white transition-colors hover:bg-white/10 text-lg"
              >
                Contact Us
                <ArrowCircle tone="light" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer flushTop />
    </div>
  );
}
