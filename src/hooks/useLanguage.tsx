import { createContext, useContext, ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { translations, Language } from "@/lib/translations";

interface LanguageContextType {
  lang: Language;
  t: typeof translations.fr;
  otherLang: Language;
  otherLangPath: string;
  allLangs: Language[];
  getLangPath: (lang: Language) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const location = useLocation();

  // Determine language from URL path
  let lang: Language = "fr";
  if (location.pathname.startsWith("/en")) {
    lang = "en";
  } else if (location.pathname.startsWith("/de")) {
    lang = "de";
  }

  const t = translations[lang];
  const allLangs: Language[] = ["fr", "en", "de"];
  const otherLang: Language = lang === "fr" ? "en" : "fr";
  const otherLangPath = lang === "fr" ? "/en" : "/";

  const getLangPath = (targetLang: Language): string => {
    if (targetLang === "fr") return "/";
    if (targetLang === "en") return "/en";
    if (targetLang === "de") return "/de";
    return "/";
  };

  return (
    <LanguageContext.Provider
      value={{ lang, t, otherLang, otherLangPath, allLangs, getLangPath }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};
