import React, { useContext, useState } from "react";
import { I18nContext } from "../context/I18nContext";
import strategies from "../data/strategies";
import { Link } from "react-router-dom";

const Library = () => {
  const { t } = useContext(I18nContext);
  const [search, setSearch] = useState("");

  const filtered = strategies.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="text-white">
      <h1 className="text-3xl font-bold text-quant-cyan mb-6">
        {t("strategy_library")}
      </h1>

      {/* Search bar */}
      <input
        type="text"
        placeholder={t("search_strategy")}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-3 rounded-lg bg-navy-800 border border-slate-700 mb-8 text-white"
      />

      {/* Strategy Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((s) => (
          <Link
            to={`/strategy/${s.slug}`}
            key={s.slug}
            className="block border border-slate-800 bg-navy-800 p-5 rounded-xl hover:border-quant-cyan transition shadow"
          >
            <h3 className="text-xl font-semibold text-quant-cyan">{s.name}</h3>

            <p className="text-slate-400 text-sm mt-1">
              {s.category} • {s.market}
            </p>

            <div className="mt-4 p-3 bg-navy-900 border border-slate-700 rounded-lg">
              <p className="text-quant-lime text-lg font-bold">
                Sharpe: {s.sharpe ?? "?"}
              </p>
              <p className="text-slate-400 text-sm">
                {t("metric_placeholder")}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Library;
