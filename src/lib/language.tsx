import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { startTranslating, stopTranslating } from "./domTranslate";

export type Language = "en" | "ar";

export const LANGUAGES: { code: Language; short: string; label: string }[] = [
  { code: "en", short: "EN", label: "English" },
  { code: "ar", short: "ع", label: "العربية" },
];

const STORAGE_KEY = "cared_lang_v1";

const translations: Record<string, string> = {
  Buy: "شراء",
  Sell: "بيع",
  Compare: "مقارنة",
  Finance: "التمويل",
  Offers: "العروض",
  "About Us": "من نحن",
  "Call Us": "اتصل بنا",
  "Log in": "تسجيل الدخول",
  "Saved cars": "السيارات المحفوظة",
  Language: "اللغة",
  "Open menu": "فتح القائمة",
  "Close menu": "إغلاق القائمة",
};

interface LanguageState {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (text: string) => string;
}

const LanguageContext = createContext<LanguageState | null>(null);

function loadStored(): Language {
  try {
    return localStorage.getItem(STORAGE_KEY) === "ar" ? "ar" : "en";
  } catch {
    return "en";
  }
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(loadStored);

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    if (language === "ar") startTranslating();
    else stopTranslating();
    try {
      localStorage.setItem(STORAGE_KEY, language);
    } catch {}
  }, [language]);

  const t = (text: string) => (language === "ar" ? translations[text] ?? text : text);

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside LanguageProvider");
  return ctx;
}
