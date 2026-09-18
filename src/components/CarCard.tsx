import { useState } from "react";
import SmartImage from "./SmartImage";
import { useNavigate } from "react-router-dom";
import { Car } from "../data/cars";
import svgPaths from "../imports/00HomeV34/svg-qhcw3sf999";
import DirhamSymbol from "./DirhamSymbol";
import SpecIcon from "./SpecIcon";
import FavoriteButton from "./FavoriteButton";

interface CarCardProps {
  car: Car;
  className?: string;
  /** When provided, shows a compare toggle on the card. */
  onToggleCompare?: (car: Car) => void;
  isComparing?: boolean;
}

export default function CarCard({
  car,
  className = "",
  onToggleCompare,
  isComparing = false,
}: CarCardProps) {
  const navigate = useNavigate();

  const handleCompareClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onToggleCompare?.(car);
  };

  const handleCardClick = () => {
    navigate(`/car/${car.id}`);
  };

  const formattedMileage =
    car.mileage >= 1000
      ? `${(car.mileage / 1000).toFixed(0)}k km`
      : `${car.mileage} km`;

  const formattedPrice = car.price.toLocaleString("en-AE");

  return (
    <div
      className={`group bg-white rounded-[12px] overflow-hidden w-full h-full flex flex-col cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:shadow-[0px_18px_20px_rgba(28,41,88,0.12)] ${className}`}
      onClick={handleCardClick}
    >
      {/* Image Section */}
      <div className="relative h-48 w-full shrink-0">
        <SmartImage
          src={car.image}
          alt={`${car.year} ${car.make} ${car.model}`}
          wrapperClassName="h-full w-full"
        />

        {/* Favorite Button */}
        <FavoriteButton
          carId={car.id}
          size={16}
          className="absolute top-0 right-0 m-2 bg-white rounded-full p-1.5 shadow-sm transition-colors duration-150 text-gray-400 hover:text-red-400"
        />

        {/* Compare Toggle */}
        {onToggleCompare && (
          <button
            onClick={handleCompareClick}
            className={`absolute bottom-0 left-0 m-2 flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold shadow-sm transition-colors duration-150 ${
              isComparing
                ? "bg-bg-brand text-white"
                : "bg-white/95 text-text-primary hover:bg-white"
            }`}
            aria-pressed={isComparing}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="w-3.5 h-3.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 7h12m0 0l-4-4m4 4l-4 4M16 17H4m0 0l4 4m-4-4l4-4"
              />
            </svg>
            {isComparing ? "Added" : "Compare"}
          </button>
        )}

        {/* New Badge */}
        {car.isNew && (
          <span className="absolute top-0 left-0 m-2 bg-green-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
            NEW
          </span>
        )}
      </div>

      {/* Content Section */}
      <div className="bg-bg-surface p-4 flex flex-1 flex-col">
        {/* Make */}
        <p className="text-text-secondary text-xs mb-0.5">{car.make}</p>

        {/* Model */}
        <p className="text-text-primary font-semibold text-base mb-3">
          {car.year} {car.model}
        </p>

        {/* Badges Row */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          <span className="bg-bg-brand-soft text-text-primary text-xs px-2 py-0.5 rounded-full inline-flex items-center gap-1">
            <SpecIcon kind="transmission" />
            {car.transmission}
          </span>
          <span className="bg-bg-brand-soft text-text-primary text-xs px-2 py-0.5 rounded-full inline-flex items-center gap-1">
            <SpecIcon kind="mileage" />
            {formattedMileage}
          </span>
          <span className="bg-bg-brand-soft text-text-primary text-xs px-2 py-0.5 rounded-full inline-flex items-center gap-1">
            <SpecIcon kind="engine" />
            {car.engineSize}
          </span>
          {car.badge && (
            <span className="bg-bg-brand text-white text-xs px-2 py-0.5 rounded-full font-medium inline-flex items-center gap-1">
              <SpecIcon kind="generic" />
              {car.badge}
            </span>
          )}
        </div>

        {/* Price + Arrow — estimated monthly primary, total price secondary */}
        <div className="flex justify-between items-end mt-auto">
          <div className="flex flex-col gap-1">
            <div className="flex items-baseline gap-1.5">
              <DirhamSymbol color="var(--color-text-primary)" size={16} />
              <p className="text-text-primary font-bold text-[22px] leading-none tabular-nums">{car.monthlyPayment.toLocaleString("en-AE")}</p>
              <span className="text-text-secondary text-sm font-medium">/mo</span>
            </div>
            <p className="text-text-secondary text-xs flex items-center gap-1">
              <DirhamSymbol color="var(--color-text-secondary)" size={10} />
              <span className="font-semibold tabular-nums">{formattedPrice}</span> total
            </p>
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
