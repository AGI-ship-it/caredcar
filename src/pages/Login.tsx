import { useState } from "react";
import { useNavigate, useSearchParams, Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SignInForm from "../components/SignInForm";

export default function Login() {
  const [searchParams] = useSearchParams();
  const initialMode = searchParams.get("mode") === "signup" ? "signup" : "login";
  const [mode, setMode] = useState<"login" | "signup">(initialMode);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1 bg-bg-surface flex items-center justify-center py-[160px] px-4">
        <div className="w-full max-w-[440px] bg-white rounded-[24px] p-[32px]" style={{ boxShadow: "0px 30px 30px rgba(28,41,88,0.08)" }}>
          <span className="text-text-brand ty-h1 block mb-[8px]">
            {mode === "login" ? "Sign In" : "Create Account"}
          </span>
          <p className="text-text-secondary text-[15px] mb-[24px]">
            {mode === "login" ? "Sign in to manage your favorites and profile." : "Sign up to save cars and track your activity."}
          </p>

          <SignInForm initialMode={initialMode} onSignedIn={() => navigate("/account")} onModeChange={setMode} />
          <p className="text-center text-xs mt-[8px]">
            <Link to="/" className="text-text-secondary underline">Back to home</Link>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
