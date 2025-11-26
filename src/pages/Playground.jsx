import React, { useContext, useState } from "react";
import { I18nContext } from "../context/I18nContext";
import strategies from "../data/strategies";
import api from "../api/client";
import { motion } from "framer-motion";

const Playground = () => {
  const { t } = useContext(I18nContext);

  const [selected, setSelected] = useState(strategies[0].slug);
  const [params, setParams] = useState(strategies[0].default_params);
  const [metrics, setMetrics] = useState(null);
  const [loading, setLoading] = useState(false);

  const currentStrategy = strategies.find((s) => s.slug === selected);

  const updateParam = (key, value) => {
    setParams((prev) => ({
      ...prev,
      [key]: isNaN(Number(value)) ? value : Number(value),
    }));
  };

  const runBacktest = async () => {
    setLoading(true);
    setMetrics(null);

    try {
      const res = await api.post("/backtest", {
        strategy: selected,
        params,
      });
      setMetrics(res.data);
    } catch (err) {
      console.error(err);
      setMetrics({ error: "Cannot fetch backtest results." });
    }

    setLoading(false);
  };

  return (
    <div className="text-white">
      <h1 className="text-3xl font-bold text-quant-cyan">
        {t("playground_title")}
      </h1>
      <p className="text-slate-400 mt-2 mb-10">{t("playground_desc")}</p>

      {/* Strategy Selector */}
      <div className="bg-navy-800 border border-slate-700 p-6 rounded-xl mb-8">
        <h2 className="text-xl font-semibold mb-4">{t("select_strategy")}</h2>

        <select
          className="w-full p-3 bg-navy-900 border border-slate-700 rounded-lg"
          value={selected}
          onChange={(e) => {
            const slug = e.target.value;
            setSelected(slug);
            const s = strategies.find((x) => x.slug === slug);
            setParams(s.default_params);
          }}
        >
          {strategies.map((s) => (
            <option key={s.slug} value={s.slug}>
              {s.name}
            </option>
          ))}
        </select>
      </div>

      {/* Parameters */}
      <div className="bg-navy-800 border border-slate-700 p-6 rounded-xl mb-8">
        <h2 className="text-xl font-semibold mb-4">{t("inputs")}</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {Object.entries(params).map(([k, v]) => (
            <div key={k} className="flex flex-col">
              <label className="text-slate-300 mb-1 font-mono">{k}</label>

              <input
                type="text"
                value={v}
                className="p-3 rounded-lg bg-navy-900 border border-slate-700 text-white"
                onChange={(e) => updateParam(k, e.target.value)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Run Button */}
      <button
        onClick={runBacktest}
        disabled={loading}
        className="px-6 py-3 bg-quant-cyan text-black font-semibold rounded-lg hover:opacity-80 transition disabled:opacity-50"
      >
        {loading ? "Running..." : t("run")}
      </button>

      {/* Results */}
      {metrics && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-10 bg-navy-800 border border-slate-700 p-6 rounded-xl"
        >
          <h2 className="text-xl font-semibold mb-4">{t("results")}</h2>

          {metrics.error ? (
            <p className="text-red-400">{metrics.error}</p>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {Object.entries(metrics).map(([k, v]) => (
                  <div
                    key={k}
                    className="p-4 bg-navy-900 border border-slate-700 rounded-lg"
                  >
                    <p className="text-quant-cyan font-mono">{k}</p>
                    <p className="text-xl font-semibold">{v}</p>
                  </div>
                ))}
              </div>

              {/* Equity Curve */}
              <h3 className="text-lg font-semibold mt-10 mb-2">
                Equity Curve (Demo)
              </h3>
              <div className="h-64 bg-slate-800 rounded-lg animate-pulse"></div>
            </>
          )}
        </motion.div>
      )}
    </div>
  );
};

export default Playground;
