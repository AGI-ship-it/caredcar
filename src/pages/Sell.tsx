import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SellYourCarForm from "../components/SellYourCarForm";
import imgSellHero from "@/imports/sell-hero.jpg";

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
  };
  const fromSearch = Boolean(initial.plateVin || initial.make || initial.mileage);

  useEffect(() => {
    if (fromSearch) document.getElementById("sell-form")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [fromSearch]);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden bg-bg-inverse page-hero text-white">
        <img
          src={imgSellHero}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-[75%_center]"
        />
        {/* The sky behind the heading is near-white, so fade navy in from the text side */}
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r rtl:bg-gradient-to-l from-bg-inverse/90 via-bg-inverse/60 to-bg-inverse/10 lg:via-bg-inverse/35 lg:to-transparent" />
        <div className="container-x relative">
          <div className="text-center lg:text-start lg:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold mb-2 font-display">Get the Best Price for Your Car</h1>
            <p className="text-white/85 text-lg max-w-xl mx-auto lg:mx-0">
              Fill in your details and book a free inspection — we handle the rest.
            </p>
          </div>
        </div>
      </section>

      {/* Why sell with us */}
      <section className="py-16 bg-white">
        <div className="container-x">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-text-brand font-display">A Simpler Way to Sell</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {WHY_SELL.map((item, i) => (
              <div key={item.title} className="text-center">
                <div className="w-14 h-14 bg-bg-brand rounded-full flex items-center justify-center mx-auto mb-5 text-white font-bold text-lg">
                  {i + 1}
                </div>
                <h3 className="text-xl font-extrabold text-text-brand mb-2">{item.title}</h3>
                <p className="text-text-secondary leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sell form */}
      <section id="sell-form" className="py-[80px] bg-bg-surface relative overflow-hidden flex-1 scroll-mt-[96px]">
        <SellYourCarForm onNavigate={navigate} className="container-x" initial={initial} />
      </section>

      <Footer />
    </div>
  );
}
