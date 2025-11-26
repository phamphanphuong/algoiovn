import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import { I18nContext } from "../context/I18nContext";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";

const Navbar = () => {
  const { t } = useContext(I18nContext);

  const linkClass =
    "text-sm font-medium px-3 py-2 rounded-md hover:bg-navy-800 transition";

  return (
    <nav className="w-full border-b border-slate-800 bg-navy-900/70 backdrop-blur sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-quant-cyan font-semibold text-lg">
          QuantAlgo
        </Link>

        {/* Menu */}
        <div className="flex items-center gap-4">
          <NavLink to="/" className={linkClass}>
            {t("home")}
          </NavLink>
          <NavLink to="/library" className={linkClass}>
            {t("library")}
          </NavLink>
          <NavLink to="/playground" className={linkClass}>
            {t("playground")}
          </NavLink>
          <NavLink to="/about" className={linkClass}>
            {t("about")}
          </NavLink>
        </div>

        {/* Toggles */}
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <LanguageToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
