import { useNavigate } from "react-router-dom";
import { Car } from "../data/cars";
import Button from "./Button";

interface CompareTrayProps {
  cars: Car[];
  onRemove: (id: number | string) => void;
  onClear: () => void;
}

export default function CompareTray({ cars, onRemove, onClear }: CompareTrayProps) {
  const navigate = useNavigate();

  if (cars.length === 0) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex justify-center px-4 pb-4">
      <div className="flex w-full max-w-[900px] items-center gap-4 rounded-[16px] bg-bg-inverse px-5 py-4 shadow-[0_18px_40px_rgba(0,0,51,0.35)]">
        <div className="flex flex-1 items-center gap-3 overflow-x-auto">
          {cars.map((c) => (
            <div
              key={c.id}
              className="relative flex shrink-0 items-center gap-2 rounded-[10px] bg-white/10 py-1.5 pl-1.5 pr-6"
            >
              <img
                src={c.image}
                alt={`${c.make} ${c.model}`}
                className="h-9 w-12 rounded-[6px] object-cover"
              />
              <span className="text-xs font-semibold text-white whitespace-nowrap">
                {c.make} {c.model}
              </span>
              <button
                onClick={() => onRemove(c.id)}
                className="absolute right-1 top-1 text-white/60 hover:text-white"
                aria-label="Remove from compare"
              >
                <svg viewBox="0 0 20 20" fill="none" className="h-3.5 w-3.5">
                  <path
                    d="M5 5l10 10M15 5L5 15"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>
          ))}
        </div>
        <div className="flex shrink-0 items-center gap-3">
          <button
            onClick={onClear}
            className="text-xs font-medium text-white/60 hover:text-white"
          >
            Clear
          </button>
          <Button
            size="sm"
            disabled={cars.length < 2}
            onClick={() => navigate(`/compare?ids=${cars.map((c) => c.id).join(",")}`)}
          >
            Compare ({cars.length})
          </Button>
        </div>
      </div>
    </div>
  );
}
