import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import imgAboutHero from "@/imports/about-hero.jpg";
import imgAboutPursuit from "@/imports/about-pursuit.jpg";
import imgAboutCared from "@/imports/about-cared.jpg";
import logoAlGhurairColor from "@/imports/brand/al-ghurair-color.svg";
import logoAlGhurairWhite from "@/imports/brand/al-ghurair-white.svg";
import logoCaredWhite from "@/imports/brand/cared-white.svg";
import PageHero from "../components/PageHero";

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
    <svg className="w-6 h-6 text-text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
  if (type === "shield") return (
    <svg className="w-6 h-6 text-text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  );
  if (type === "phone") return (
    <svg className="w-6 h-6 text-text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );
  if (type === "gauge") return (
    <svg className="w-6 h-6 text-text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  );
  return (
    <svg className="w-6 h-6 text-text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
    </svg>
  );
}

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Hero */}
      <PageHero overlap image={imgAboutHero} imagePosition="65% 32%" title="Just Good Cars" subtitle="Dubai's trusted pre-owned cars" />

      {/* Key Features */}
      <section className="container-x py-20 w-full -mt-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FEATURES.map((f) => (
            <div key={f.title} className="bg-white rounded-[16px] shadow-[0px_18px_40px_rgba(28,41,88,0.12)] p-8">
              <div className="w-12 h-12 bg-bg-brand-soft rounded-full flex items-center justify-center mb-5">
                <FeatureIcon type={f.icon} />
              </div>
              <h3 className="font-extrabold text-text-brand text-lg mb-2 font-display">{f.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* In Pursuit of Better — Al Ghurair */}
      <section className="relative overflow-hidden bg-bg-partner">
        <img
          src={imgAboutPursuit}
          alt="A happy customer giving a thumbs up from the driver's seat of his new car"
          className="absolute inset-y-0 end-0 h-full w-full md:w-[65%] object-cover object-[62%_center]"
        />
        {/* Al Ghurair purple washes over the photo so the copy stays readable while the customer shows through */}
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r rtl:bg-gradient-to-l from-bg-partner from-30% via-bg-partner/85 to-bg-partner/50 max-md:via-bg-partner/80 max-md:to-bg-partner/75" />
        <div className="container-x relative py-20 md:py-28">
          <div className="max-w-[560px] text-white">
            <img src={logoAlGhurairColor} alt="Al Ghurair" className="h-16 md:h-20 w-auto mb-10" />
            <h2 className="text-4xl md:text-5xl font-bold mb-5 font-display">In pursuit of better</h2>
            <p className="text-white/90 text-lg leading-relaxed">
              At Al Ghurair, we have always been driven by our pursuit of better. As one of the largest diversified family businesses in the Middle East, we drive transformation across industries: food, mobility, infrastructure, and real estate. Headquartered in Dubai, we operate in 20+ countries and employ over 28,000 people worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Cared / AG Cars values */}
      <section className="container-x py-20 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-4xl font-extrabold text-text-brand mb-4 font-display">Cared</h2>
            <p className="text-text-secondary leading-relaxed">
              Cared has inherited the tradition and values built by the Al Ghurair family, so, we believe in enhancing the life of our employees, customers, and the community. We have the expertise to buy, prepare and sell the right quality vehicles that will meet the needs of our customers to buy with confidence. What you can expect from us? Vehicles that will meet the needs of customers to buy with confidence.
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
              <span className="flex items-center gap-2 text-white text-lg sm:text-xl font-medium">
                by
                <img src={logoAlGhurairWhite} alt="Al Ghurair" className="h-9 sm:h-11 w-auto" />
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Why choose Cared */}
      <section className="bg-bg-surface py-20">
        <div className="max-w-[880px] mx-auto">
          <h2 className="text-4xl font-extrabold text-text-brand mb-8 font-display">Why choose Cared?</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {WHY_POINTS.map((point) => (
              <li key={point} className="flex items-start gap-3 bg-white rounded-[12px] border border-border-default p-5">
                <span className="mt-0.5 w-8 h-8 shrink-0 bg-bg-brand-soft rounded-full flex items-center justify-center">
                  <FeatureIcon type="check" />
                </span>
                <span className="text-text-primary font-medium leading-relaxed">{point}</span>
              </li>
            ))}
          </ul>
          <p className="text-text-secondary text-lg leading-relaxed">
            That&apos;s why Cared understands your needs, and we&apos;ll do the worrying for you, so you can feel confident and enjoy owning an Cared Car.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="brand-pattern bg-bg-brand py-20 text-center">
        <div className="container-x">
          <h2 className="text-4xl font-bold text-white mb-2 font-display">Still Not Sure What You Need?</h2>
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
