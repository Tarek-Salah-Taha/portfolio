import { translations } from "@/translations/translations";
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

type Language = "en" | "ar";
type Direction = "ltr" | "rtl";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  direction: Direction;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguage] = useState<Language>("en");

  const direction: Direction = language === "ar" ? "rtl" : "ltr";

  const t = (key: string): string => {
    return (
      translations[language][key as keyof (typeof translations)["en"]] || key
    );
  };

  useEffect(() => {
    document.documentElement.dir = direction;
    document.documentElement.lang = language;
  }, [direction, language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, direction, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Export the context for the hook to use
export { LanguageContext };
export type { LanguageContextType };
