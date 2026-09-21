import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import imgAboutHero from "@/imports/about-hero.jpg";
import imgAboutPursuit from "@/imports/about-pursuit.jpg";
import imgAboutCared from "@/imports/about-cared.jpg";
import logoAlGhurairWhite from "@/imports/brand/al-ghurair-white.svg";
import logoCaredWhite from "@/imports/brand/cared-white.svg";
import imgWhyShape from "@/imports/brand/about-why-shape.svg";
import PageHero from "../components/PageHero";
import BrandShape from "../components/BrandShape";

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
  "Need a car, and you don't know where to start?",
  "Worried you don't know what you're buying?",
  "Who can you trust to buy with confidence?",
  "Buying your next car should be a pleasurable experience!",
];

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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[16px] sm:gap-[24px] w-full">
            {FEATURES.map((f) => (
              <div
                key={f.title}
                className="group flex flex-col gap-[20px] items-start p-[28px] rounded-[20px] bg-white shadow-[0_2px_4px_rgba(28,41,88,0.04),0_18px_40px_-24px_rgba(28,41,88,0.18)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_4px_8px_rgba(28,41,88,0.05),0_26px_50px_-24px_rgba(28,41,88,0.24)]"
              >
                <div className="size-[56px] rounded-[18px] flex items-center justify-center text-text-brand bg-bg-brand-soft/70">
                  <FeatureIcon type={f.icon} />
                </div>
                <div className="flex flex-col gap-[6px] w-full">
                  <span className="text-lg font-semibold leading-snug text-text-primary">{f.title}</span>
                  <span className="text-[15px] font-normal leading-relaxed text-text-secondary">{f.desc}</span>
                </div>
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
              className="absolute inset-0 w-full h-full object-cover object-[62%_center]"
            />
            {/* Al Ghurair purple over the photo, so the white logo reads on top of it */}
            <div aria-hidden="true" className="absolute inset-0 bg-bg-partner/55" />
            <div aria-hidden="true" className="absolute inset-x-0 top-0 h-2/5 bg-gradient-to-b from-bg-partner/85 to-transparent" />
            <div className="absolute inset-x-0 top-0 p-6 sm:p-8">
              <img src={logoAlGhurairWhite} alt="Al Ghurair" className="h-9 sm:h-11 w-auto" />
            </div>
          </div>
          <div>
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
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Navy fade behind the logos so the white marks read against the bright showroom ceiling */}
            <div aria-hidden="true" className="absolute inset-x-0 top-0 h-3/5 bg-gradient-to-b from-bg-inverse/90 via-bg-inverse/45 to-transparent" />
            <div className="absolute inset-x-0 top-0 flex items-start justify-between gap-4 p-6 sm:p-8">
              <img src={logoCaredWhite} alt="Cared — Just Good Cars" className="h-9 sm:h-11 w-auto" />
              <img src={logoAlGhurairWhite} alt="by Al Ghurair" className="h-9 sm:h-11 w-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Why choose Cared */}
      <section className="bg-white py-10 lg:py-24">
        <div className="relative bg-bg-inverse">
          {/* Shape bleeds past the band top and bottom; only its page-edge side is cropped so the arrow tip stays whole */}
          <div aria-hidden="true" className="pointer-events-none absolute start-0 top-[-10%] hidden h-[120%] aspect-[562/537] max-w-[42%] overflow-hidden lg:block">
            <img
              src={imgWhyShape}
              alt=""
              className="absolute end-0 top-0 h-full w-auto max-w-none rtl:-scale-x-100"
            />
          </div>
          <div className="container-x relative py-16 lg:py-24">
            <div className="lg:ms-[45%] lg:max-w-[760px]">
              <h2 className="ty-h1 ty-title text-white mb-5 font-display">Why choose Cared?</h2>
              <ul className="list-disc ps-9 text-white text-lg leading-[1.75]">
                {WHY_POINTS.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <p className="text-white text-lg leading-[1.75]">
                That&apos;s why Cared understands your needs, and we&apos;ll do the worrying for you, so you can feel confident and enjoy owning a Cared car.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-bg-brand py-20 text-center">
        <BrandShape />
        <div className="container-x">
 <h2 className="ty-h1 ty-title text-white mb-2 font-display">Still Not Sure What You Need?</h2>
          <p className="text-white/85 text-lg mb-8 max-w-lg mx-auto">
            We&apos;re here to help with sales, finance, or service questions. Reach us in the way that&apos;s easiest for you.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/buy"
              className="inline-block bg-white text-text-brand font-bold px-10 py-4 rounded-full hover:bg-bg-brand-soft transition text-lg"
            >
              Browse Cars
            </Link>
            <Link
              to="/contact"
              className="inline-block border border-white/60 text-white font-bold px-10 py-4 rounded-full hover:bg-white/10 transition text-lg"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer flushTop />
    </div>
  );
}
