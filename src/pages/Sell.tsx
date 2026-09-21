import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SellYourCarForm from "../components/SellYourCarForm";
import imgSellHero from "@/imports/sell-hero.jpg";
import PageHero from "../components/PageHero";

const WHY_SELL = [
  { title: "Free Valuation", desc: "Get an accurate, market-based estimate for your car in minutes — no obligation." },
  { title: "Same-Day Inspection", desc: "Book a convenient slot and let our certified experts inspect your vehicle." },
  { title: "Instant Payment", desc: "Accept our offer and get paid securely and quickly, with all paperwork handled." },
];

export default function Sell() {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const initial = {
    plateVin: params.get("plate") ?? "",
    make: params.get("make") ?? "",
    mileage: params.get("mileage") ?? "",
    year: params.get("year") ?? "",
  };
  const fromSearch = Boolean(initial.plateVin || initial.make || initial.mileage || initial.year);
  // Home search covers everything step 1 asks for, so open on step 2 when it is complete
  const startStep = initial.make && initial.mileage && initial.year ? 2 : 1;

  useEffect(() => {
    if (fromSearch) document.getElementById("sell-form")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [fromSearch]);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Hero */}
      <PageHero image={imgSellHero} imagePosition="75% 35%" title="Sell for the Best Price" subtitle="Fill in your details and book a free inspection — we handle the rest." />

      {/* Why sell with us */}
      <section className="py-16 bg-white">
        <div className="container-x">
          <div className="mb-12 text-center">
            <h2 className="ty-h1 ty-title ty-title-gradient font-display">A Simpler Way to Sell</h2>
          </div>
          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
            {/* Dashed path linking the step circles, first to last */}
            <div aria-hidden="true" className="hidden md:block absolute top-[28px] left-[16.667%] right-[16.667%] border-t-2 border-dashed border-bg-brand/20" />
            {WHY_SELL.map((item, i) => (
              <div key={item.title} className="relative text-center">
                <div className="w-14 h-14 bg-bg-brand rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-lg ring-[6px] ring-bg-brand-soft shadow-[0_8px_20px_-8px_rgba(0,99,255,0.55)]">
                  {i + 1}
                </div>
                <h3 className="text-xl font-bold text-text-brand mb-2">{item.title}</h3>
                <p className="text-text-secondary text-[15px] leading-relaxed max-w-[320px] mx-auto">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sell form */}
      <section id="sell-form" className="py-[80px] bg-bg-surface relative overflow-hidden flex-1 scroll-mt-[96px]">
        <SellYourCarForm onNavigate={navigate} className="container-x" initial={initial} startStep={startStep} />
      </section>

      <Footer />
    </div>
  );
}
