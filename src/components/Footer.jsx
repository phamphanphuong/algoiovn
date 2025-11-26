import React, { useContext } from "react";
import { I18nContext } from "../context/I18nContext";

const Footer = () => {
  const { t } = useContext(I18nContext);

  return (
    <footer className="border-t border-slate-800 py-6 mt-10 bg-navy-900/60 backdrop-blur">
      <div className="max-w-6xl mx-auto px-4 text-center text-slate-400 text-sm">
        {t("footer_text")}
      </div>
    </footer>
  );
};

export default Footer;
