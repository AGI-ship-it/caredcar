import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CarCard from "../components/CarCard";
import { FIELD_CLASS, LABEL_CLASS } from "../lib/fieldStyles";
import { useAuth } from "../lib/auth";
import { cars } from "../data/cars";
import PageHero from "../components/PageHero";

const TABS = [
  { id: "profile", label: "Profile Settings" },
  { id: "password", label: "Password" },
  { id: "favorites", label: "Favorites" },
] as const;
type TabId = (typeof TABS)[number]["id"];

export default function Account() {
  const { user, favorites, updateProfile, logout } = useAuth();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const tabParam = searchParams.get("tab") as TabId | null;
  const activeTab: TabId = tabParam && TABS.some((t) => t.id === tabParam) ? tabParam : "profile";

  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");
  const [savedMsg, setSavedMsg] = useState(false);

  const [currentPw, setCurrentPw] = useState("");
  const [newPw, setNewPw] = useState("");
  const [confirmPw, setConfirmPw] = useState("");
  const [pwError, setPwError] = useState<string | null>(null);
  const [pwSaved, setPwSaved] = useState(false);

  if (!user) {
    return (
      <div className="min-h-screen flex flex-col bg-white">
        <Header />
        <main className="flex-1 flex flex-col items-center justify-center py-[160px] text-center px-4">
          <h1 className="text-text-brand text-2xl font-extrabold mb-2">You&apos;re not logged in</h1>
          <p className="text-text-secondary mb-6">Log in to view your profile and favorite cars.</p>
          <button onClick={() => navigate("/login")} className="bg-bg-brand text-white px-6 py-3 rounded-full font-semibold hover:bg-bg-brand-hover transition-colors">
            Log In
          </button>
        </main>
        <Footer />
      </div>
    );
  }

  const favoriteCars = cars.filter((c) => favorites.includes(c.id));

  function setTab(id: TabId) {
    setSearchParams({ tab: id });
  }

  function handleProfileSave(e: React.FormEvent) {
    e.preventDefault();
    updateProfile({ name: name.trim() || user.name, email: email.trim() || user.email });
    setSavedMsg(true);
    setTimeout(() => setSavedMsg(false), 3000);
  }

  function handlePasswordSave(e: React.FormEvent) {
    e.preventDefault();
    if (!currentPw || !newPw || !confirmPw) { setPwError("Please fill in all fields."); return; }
    if (newPw !== confirmPw) { setPwError("New passwords do not match."); return; }
    setPwError(null);
    setCurrentPw(""); setNewPw(""); setConfirmPw("");
    setPwSaved(true);
    setTimeout(() => setPwSaved(false), 3000);
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1 bg-bg-surface">
        <PageHero title={`Hi, ${user.name}`} subtitle={user.email} />

        <div className="container-x py-10 flex flex-col md:flex-row gap-8">
          {/* Sidebar tabs */}
          <div className="w-full md:w-[240px] shrink-0 flex flex-col gap-2">
            {TABS.map((t) => (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                className={`text-start px-4 py-3 rounded-[10px] font-semibold text-sm transition-colors ${
                  activeTab === t.id ? "bg-bg-brand text-white" : "text-text-primary hover:bg-white"
                }`}
              >
                {t.label}
                {t.id === "favorites" && favoriteCars.length > 0 && (
                  <span className={`ml-2 text-xs ${activeTab === t.id ? "text-white/80" : "text-text-secondary"}`}>({favoriteCars.length})</span>
                )}
              </button>
            ))}
            <button
              onClick={() => { logout(); navigate("/"); }}
              className="text-start px-4 py-3 rounded-[10px] font-semibold text-sm text-red-600 hover:bg-white transition-colors mt-2"
            >
              Log Out
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 bg-white rounded-[16px] p-6 md:p-8">
            {activeTab === "profile" && (
              <form onSubmit={handleProfileSave} className="max-w-[420px] flex flex-col gap-4">
 <h2 className="ty-h2 ty-title ty-title-gradient mb-2">Profile Settings</h2>
                <div>
                  <label className={LABEL_CLASS}>Full Name</label>
                  <input className={FIELD_CLASS} value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                  <label className={LABEL_CLASS}>Email Address</label>
                  <input type="email" className={FIELD_CLASS} value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                {savedMsg && <p className="text-text-success text-sm font-semibold">Profile updated.</p>}
                <button type="submit" className="self-start bg-bg-brand text-white px-6 py-3 rounded-full font-semibold hover:bg-bg-brand-hover transition-colors mt-2">
                  Save Changes
                </button>
              </form>
            )}

            {activeTab === "password" && (
              <form onSubmit={handlePasswordSave} className="max-w-[420px] flex flex-col gap-4">
 <h2 className="ty-h2 ty-title ty-title-gradient mb-2">Change Password</h2>
                <div>
                  <label className={LABEL_CLASS}>Current Password</label>
                  <input type="password" className={FIELD_CLASS} value={currentPw} onChange={(e) => setCurrentPw(e.target.value)} />
                </div>
                <div>
                  <label className={LABEL_CLASS}>New Password</label>
                  <input type="password" className={FIELD_CLASS} value={newPw} onChange={(e) => setNewPw(e.target.value)} />
                </div>
                <div>
                  <label className={LABEL_CLASS}>Confirm New Password</label>
                  <input type="password" className={FIELD_CLASS} value={confirmPw} onChange={(e) => setConfirmPw(e.target.value)} />
                </div>
                {pwError && <p className="text-red-600 text-sm">{pwError}</p>}
                {pwSaved && <p className="text-text-success text-sm font-semibold">Password updated.</p>}
                <button type="submit" className="self-start bg-bg-brand text-white px-6 py-3 rounded-full font-semibold hover:bg-bg-brand-hover transition-colors mt-2">
                  Update Password
                </button>
              </form>
            )}

            {activeTab === "favorites" && (
              <div>
 <h2 className="ty-h2 ty-title ty-title-gradient mb-6">Saved Cars</h2>
                {favoriteCars.length === 0 ? (
                  <p className="text-text-secondary">You haven&apos;t saved any cars yet. Tap the heart icon on any car to save it here.</p>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {favoriteCars.map((c) => <CarCard key={c.id} car={c} />)}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
