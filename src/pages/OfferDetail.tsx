import { Link, useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import OfferCard from "../components/OfferCard";
import { OFFERS } from "../data/offers";

export default function OfferDetail() {
  const { slug } = useParams();
  const offer = OFFERS.find((o) => o.slug === slug);

  if (!offer) {
    return (
      <div className="min-h-screen flex flex-col bg-white">
        <Header />
        <section className="container-x flex-1 py-24 text-center">
          <h1 className="ty-h1 ty-title ty-title-gradient mb-4 font-display">Offer not found</h1>
          <p className="text-text-secondary mb-8">This offer may have ended. Take a look at what's on now.</p>
          <Link to="/offers" className="inline-block bg-bg-brand text-white font-bold px-8 py-4 rounded-full hover:bg-bg-brand-hover transition">
            View All Offers
          </Link>
        </section>
        <Footer />
      </div>
    );
  }

  const others = OFFERS.filter((o) => o.id !== offer.id).slice(0, 3);
  // Card images are requested at 600px; the banner needs a wider crop
  const heroImg = offer.img.replace("w=600", "w=1800");

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <PageHero image={heroImg} title={offer.title} subtitle={offer.description} wrapTitle />

      <section className="container-x py-16 w-full">
        <Link to="/offers" className="inline-flex items-center gap-1.5 text-sm font-semibold text-text-brand hover:underline mb-8">
          <svg className="w-4 h-4 rtl:-scale-x-100" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          All Offers
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-10 lg:gap-16 items-start">
          <div className="flex flex-col gap-12">
            <div>
              <h2 className="ty-h2 ty-title ty-title-gradient mb-6 font-display">What you get</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {offer.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3 rounded-[12px] bg-bg-surface p-5">
                    <span aria-hidden="true" className="flex size-7 shrink-0 items-center justify-center rounded-full bg-bg-brand-soft text-text-brand">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-text-primary font-medium leading-relaxed">{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="ty-h2 ty-title ty-title-gradient mb-6 font-display">How it works</h2>
              <ol className="flex flex-col gap-5">
                {offer.steps.map((step, i) => (
                  <li key={step} className="flex items-center gap-4">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-bg-brand text-white font-bold">{i + 1}</span>
                    <span className="text-text-primary text-lg leading-snug">{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div>
              <h2 className="ty-h3 text-text-primary mb-3">Terms &amp; conditions</h2>
              <ul className="list-disc ps-5 flex flex-col gap-1.5 text-sm text-text-secondary leading-relaxed">
                {offer.terms.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
          </div>

          <aside className="lg:sticky lg:top-[112px] rounded-[20px] bg-bg-inverse text-white p-7 flex flex-col gap-5">
            <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-bg-accent text-text-on-accent text-xs font-bold px-3 py-1">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {offer.validity}
            </span>
            <p className="text-2xl font-bold leading-snug font-display">{offer.title}</p>
            <p className="text-white/70 leading-relaxed">{offer.description}</p>
            <div className="flex flex-col gap-3 pt-2">
              <Link to={offer.cta.to} className="text-center bg-bg-brand text-white font-bold px-6 py-4 rounded-full hover:bg-bg-brand-hover transition">
                {offer.cta.label}
              </Link>
              <Link to={offer.secondary.to} className="text-center border border-white/30 text-white font-bold px-6 py-4 rounded-full hover:bg-white/10 transition">
                {offer.secondary.label}
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-bg-surface py-16">
        <div className="container-x">
          <h2 className="ty-h1 ty-title ty-title-gradient mb-10 font-display">More offers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {others.map((o) => (
              <OfferCard key={o.id} offer={o} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
