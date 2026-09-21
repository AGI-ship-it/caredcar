import { Link } from "react-router-dom";
import type { Offer } from "../data/offers";

export default function OfferCard({ offer }: { offer: Offer }) {
  return (
    <Link
      to={`/offers/${offer.slug}`}
      className="group flex flex-col bg-white rounded-[12px] overflow-hidden cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:shadow-[0px_18px_20px_rgba(28,41,88,0.12)]"
    >
      <div className="h-48 overflow-hidden shrink-0">
        <img src={offer.img} alt={offer.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
      </div>
      <div className="bg-bg-surface p-5 flex flex-1 flex-col">
        <h3 className="text-lg font-extrabold text-text-brand mb-2">{offer.title}</h3>
        <p className="text-text-secondary text-sm mb-4 leading-relaxed">{offer.description}</p>
        <div className="flex items-center justify-between gap-3 mt-auto">
          <span className="text-xs text-text-secondary flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {offer.validity}
          </span>
          <span className="card-arrow" aria-hidden="true">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 18L18 6M8.25 6H18v9.75" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}
