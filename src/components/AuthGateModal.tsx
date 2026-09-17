import { useEffect, useState } from "react";
import { useAuth } from "../lib/auth";
import SignInForm from "./SignInForm";

// Shown when a signed-out visitor tries to use favorites. The sign-in form is inline,
// so they can sign in without leaving the page; saving then happens automatically.
export default function AuthGateModal({
  onClose,
  carId,
  onSuccess,
}: {
  onClose: () => void;
  /** When set, the car is saved to favorites as soon as sign-in succeeds. */
  carId?: string;
  onSuccess?: () => void;
}) {
  const { isFavorite, toggleFavorite } = useAuth();
  const [mode, setMode] = useState<"login" | "signup">("login");

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  function finish() {
    if (carId && !isFavorite(carId)) toggleFavorite(carId);
    onClose();
    onSuccess?.();
  }

  const subtitle = carId ? "Sign in to save this car to your favorites." : "Sign in to see your saved cars.";

  return (
    <div
      className="fixed inset-0 z-[300] flex items-center justify-center p-4 overflow-y-auto"
      style={{ background: "rgba(0,0,51,0.6)" }}
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="auth-gate-title"
        className="bg-white rounded-[24px] max-w-[440px] w-full p-[24px] sm:p-[32px] relative my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-[16px] right-[16px] size-[32px] flex items-center justify-center rounded-full text-text-secondary hover:bg-bg-surface transition-colors"
        >
          <svg fill="none" height="16" viewBox="0 0 24 24" width="16" aria-hidden="true">
            <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>

        <div className="pe-[32px]">
          <h3 id="auth-gate-title" className="text-text-brand ty-h1 block mb-[8px]">
            {mode === "login" ? "Sign In" : "Create Account"}
          </h3>
          <p className="text-text-secondary text-[15px] mb-[24px]">
            {mode === "login" ? subtitle : "Sign up to save cars and track your activity."}
          </p>
        </div>

        <SignInForm onSignedIn={finish} saveLabel={Boolean(carId)} autoFocus onModeChange={setMode} />
      </div>
    </div>
  );
}
