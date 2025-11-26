import React, { createContext, useState } from "react";
import translations from "../i18n/translations";

export const I18nContext = createContext();

export const I18nProvider = ({ children }) => {
  const [lang, setLang] = useState(localStorage.getItem("lang") || "vi");

  const t = (key) => {
    return translations?.[lang]?.[key] || key;
  };

  const switchLang = () => {
    const newLang = lang === "vi" ? "en" : "vi";
    setLang(newLang);
    localStorage.setItem("lang", newLang);
  };

  return (
    <I18nContext.Provider value={{ lang, t, switchLang }}>
      {children}
    </I18nContext.Provider>
  );
};
