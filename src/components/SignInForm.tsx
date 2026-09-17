import { useState } from "react";
import { useAuth } from "../lib/auth";
import { FIELD_CLASS, LABEL_CLASS } from "../lib/fieldStyles";

// Shared sign-in / create-account form used by the Sign In page and the favorites pop-up.
export default function SignInForm({
  onSignedIn,
  saveLabel = false,
  initialMode = "login",
  autoFocus = false,
  onModeChange,
}: {
  onSignedIn: () => void;
  /** Adds "& Save Car" to the submit button, for the favorites pop-up. */
  saveLabel?: boolean;
  initialMode?: "login" | "signup";
  autoFocus?: boolean;
  onModeChange?: (mode: "login" | "signup") => void;
}) {
  const { login, loginWithGoogle } = useAuth();
  const [mode, setModeState] = useState<"login" | "signup">(initialMode);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const setMode = (m: "login" | "signup") => {
    setModeState(m);
    onModeChange?.(m);
  };

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim() || !password.trim() || (mode === "signup" && !name.trim())) {
      setError("Please fill in all fields.");
      return;
    }
    login(email.trim(), mode === "signup" ? name.trim() : undefined);
    onSignedIn();
  }

  function handleGoogle() {
    loginWithGoogle();
    onSignedIn();
  }

  return (
    <div>
        {/* Sign in / Create account */}
        <div role="tablist" className="grid grid-cols-2 p-[4px] rounded-full bg-bg-surface mb-[20px]">
          {(["login", "signup"] as const).map((m) => (
            <button
              key={m}
              type="button"
              role="tab"
              aria-selected={mode === m}
              onClick={() => {
                setMode(m);
                setError(null);
              }}
              className={`h-[38px] rounded-full text-sm font-semibold transition-colors outline-none focus-visible:ring-2 focus-visible:ring-border-focus/40 ${
                mode === m ? "bg-white text-text-primary shadow-[0_1px_3px_rgba(18,42,94,0.15)]" : "text-text-secondary hover:text-text-primary"
              }`}
            >
              {m === "login" ? "Sign In" : "Create Account"}
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={handleGoogle}
          className="w-full h-[48px] flex items-center justify-center gap-[10px] rounded-full border border-border-default font-semibold text-text-primary hover:bg-bg-surface transition-colors mb-[16px]"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.99.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
            <path d="M5.84 14.09A6.98 6.98 0 015.44 12c0-.73.13-1.43.4-2.09V7.07H2.18A11 11 0 001 12c0 1.78.43 3.46 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
          </svg>
          Continue with Google
        </button>

        <div className="flex items-center gap-3 mb-[16px]">
          <div className="h-px bg-bg-subtle flex-1" />
          <span className="text-text-secondary text-xs uppercase tracking-widest">or</span>
          <div className="h-px bg-bg-subtle flex-1" />
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-[14px]" noValidate>
          {mode === "signup" && (
            <div>
              <label htmlFor="gate-name" className={LABEL_CLASS}>Full Name</label>
              <input id="gate-name" className={FIELD_CLASS} value={name} onChange={(e) => setName(e.target.value)} placeholder="Your full name" autoComplete="name" />
            </div>
          )}
          <div>
            <label htmlFor="gate-email" className={LABEL_CLASS}>Email Address</label>
            <input
              id="gate-email"
              type="email"
              className={FIELD_CLASS}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              autoComplete="email"
              autoFocus={autoFocus}
            />
          </div>
          <div>
            <label htmlFor="gate-password" className={LABEL_CLASS}>Password</label>
            <input
              id="gate-password"
              type="password"
              className={FIELD_CLASS}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              autoComplete={mode === "login" ? "current-password" : "new-password"}
            />
          </div>
          {error && <p className="text-red-600 text-sm" role="alert">{error}</p>}
          <button type="submit" className="w-full h-[48px] rounded-full bg-bg-brand text-white font-semibold hover:bg-bg-brand-hover transition-colors mt-[4px]">
            {mode === "login" ? (saveLabel ? "Sign In & Save Car" : "Sign In") : saveLabel ? "Create Account & Save Car" : "Create Account"}
          </button>
        </form>

      <p className="text-center text-text-secondary text-xs mt-[14px]">This is a demo sign-in for design preview only.</p>
    </div>
  );
}
