"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  ReactNode,
} from "react";
import en from "@/locales/en.json";
import th from "@/locales/th.json";

// ✅ ประเภทภาษา
type Lang = "EN" | "TH";

// ✅ ให้ Type ของ Dictionary ปลอดภัย (รวมทุกไฟล์)
type Dictionary = typeof en & typeof th;

// ✅ เก็บไฟล์ dictionary ไว้ใน object
const dictionaries: Record<Lang, Dictionary> = { EN: en, TH: th };

// ✅ รูปแบบข้อมูลใน Context
interface LangContextProps {
  lang: Lang;
  t: Dictionary;
  setLang: (l: Lang) => void;
  toggleLang: () => void;
}

// ✅ สร้าง Context
const LanguageContext = createContext<LangContextProps | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Lang>("TH");

  // โหลดค่าจาก localStorage หรือภาษา browser
  useEffect(() => {
    if (typeof window === "undefined") return;

    const stored = localStorage.getItem("lang");
    if (stored === "EN" || stored === "TH") {
      setLangState(stored);
    } else {
      // ตรวจสอบภาษาจาก browser
      const browserLang = navigator.language.startsWith("th") ? "TH" : "EN";
      setLangState(browserLang);
    }
  }, []);

  // อัปเดต localStorage และ <html lang="...">
  useEffect(() => {
    if (typeof window === "undefined") return;

    localStorage.setItem("lang", lang);
    document.documentElement.lang = lang === "EN" ? "en" : "th";
  }, [lang]);

  // ฟังก์ชันสลับภาษา (memoized)
  const toggleLang = useCallback(() => {
    setLangState((prev) => (prev === "EN" ? "TH" : "EN"));
  }, []);

  return (
    <LanguageContext.Provider
      value={{ lang, t: dictionaries[lang], setLang: setLangState, toggleLang }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

// ✅ Hook สำหรับเรียกใช้งานภาษา
export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};
