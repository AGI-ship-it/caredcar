import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

// Front-end-only mock auth: no backend, no real passwords, no real Google OAuth.
// Session + favorites + recently-viewed are persisted to localStorage so the
// experience survives a page reload during a demo.

export interface AuthUser {
  name: string;
  email: string;
  provider: "email" | "google";
}

interface AuthState {
  user: AuthUser | null;
  favorites: string[];
  recentlyViewed: string[];
  login: (email: string, name?: string) => void;
  loginWithGoogle: () => void;
  logout: () => void;
  updateProfile: (patch: Partial<Pick<AuthUser, "name" | "email">>) => void;
  toggleFavorite: (carId: string) => void;
  isFavorite: (carId: string) => boolean;
  addRecentlyViewed: (carId: string) => void;
}

const STORAGE_KEY = "cared_auth_v1";

interface StoredShape {
  user: AuthUser | null;
  favorites: string[];
  recentlyViewed: string[];
}

function loadStored(): StoredShape {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { user: null, favorites: [], recentlyViewed: [] };
    const parsed = JSON.parse(raw);
    return {
      user: parsed.user ?? null,
      favorites: Array.isArray(parsed.favorites) ? parsed.favorites : [],
      recentlyViewed: Array.isArray(parsed.recentlyViewed) ? parsed.recentlyViewed : [],
    };
  } catch {
    return { user: null, favorites: [], recentlyViewed: [] };
  }
}

const AuthContext = createContext<AuthState | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [{ user, favorites, recentlyViewed }, setState] = useState<StoredShape>(loadStored);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ user, favorites, recentlyViewed }));
  }, [user, favorites, recentlyViewed]);

  function login(email: string, name?: string) {
    setState((s) => ({ ...s, user: { name: name || email.split("@")[0], email, provider: "email" } }));
  }

  function loginWithGoogle() {
    setState((s) => ({ ...s, user: { name: "Google User", email: "google.user@gmail.com", provider: "google" } }));
  }

  function logout() {
    setState((s) => ({ ...s, user: null }));
  }

  function updateProfile(patch: Partial<Pick<AuthUser, "name" | "email">>) {
    setState((s) => (s.user ? { ...s, user: { ...s.user, ...patch } } : s));
  }

  function toggleFavorite(carId: string) {
    setState((s) => ({
      ...s,
      favorites: s.favorites.includes(carId)
        ? s.favorites.filter((id) => id !== carId)
        : [...s.favorites, carId],
    }));
  }

  function isFavorite(carId: string) {
    return favorites.includes(carId);
  }

  function addRecentlyViewed(carId: string) {
    setState((s) => ({
      ...s,
      recentlyViewed: [carId, ...s.recentlyViewed.filter((id) => id !== carId)].slice(0, 12),
    }));
  }

  return (
    <AuthContext.Provider
      value={{ user, favorites, recentlyViewed, login, loginWithGoogle, logout, updateProfile, toggleFavorite, isFavorite, addRecentlyViewed }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
