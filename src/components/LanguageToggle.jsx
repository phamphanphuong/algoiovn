import React, { useContext } from "react";
import { I18nContext } from "../context/I18nContext";

const LanguageToggle = () => {
  const { lang, switchLang } = useContext(I18nContext);

  return (
    <button
      onClick={switchLang}
      className="px-3 py-1 border border-slate-400 rounded-md text-sm hover:bg-slate-700 hover:text-white transition"
    >
      {lang === "vi" ? "EN" : "VI"}
    </button>
  );
};

export default LanguageToggle;
