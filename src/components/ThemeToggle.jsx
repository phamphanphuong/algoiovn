import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-navy-800 hover:bg-navy-700 transition border border-slate-700"
    >
      {theme === "dark" ? (
        <SunIcon className="w-5 h-5 text-yellow-300" />
      ) : (
        <MoonIcon className="w-5 h-5 text-slate-800" />
      )}
    </button>
  );
};

export default ThemeToggle;
