import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { I18nContext } from "../context/I18nContext";
import strategies from "../data/strategies";
import api from "../api/client";
import { motion } from "framer-motion";

const StrategyDetail = () => {
  const { slug } = useParams();
  const { t, lang } = useContext(I18nContext);

  const strategy = strategies.find((s) => s.slug === slug);

  const [loading, setLoading] = useState(false);
  const [metrics, setMetrics] = useState(null);
  const [error, setError] = useState(null);

  if (!strategy) {
    return (
      <div className="text-red-400 text-xl">
        Strategy not found: <strong>{slug}</strong>
      </div>
    );
  }

  const runBacktest = async () => {
    setLoading(true);
    setError(null);

    try {
      const res = await api.post("/backtest", {
        strategy: strategy.slug,
        params: strategy.default_params,
      });
      setMetrics(res.data);
    } catch (err) {
      console.error(err);
      setError("Cannot fetch backtest result.");
    }

    setLoading(false);
  };

  return (
    <div className="text-white">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10"
      >
        <h1 className="text-4xl font-bold text-quant-cyan">{strategy.name}</h1>
        <p className="text-slate-400 text-lg">
          {strategy.category} • {strategy.market}
        </p>
      </motion.div>

      {/* Description */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-navy-800 border border-slate-700 p-6 rounded-xl mb-8"
      >
        <h2 className="text-xl font-semibold">{t("description")}</h2>
        <p className="text-slate-300 mt-2">
          {lang === "vi" ? strategy.description_vi : strategy.description_en}
        </p>
      </motion.section>

      {/* Logic */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-navy-800 border border-slate-700 p-6 rounded-xl mb-8"
      >
        <h2 className="text-xl font-semibold">{t("logic")}</h2>

        <ul className="list-disc ml-5 mt-3 text-slate-300 space-y-2">
          {strategy.logic.map((line, idx) => (
            <li key={idx}>{line}</li>
          ))}
        </ul>
      </motion.section>

      {/* Parameters */}
      <motion.section className="bg-navy-800 border border-slate-700 p-6 rounded-xl mb-8">
        <h2 className="text-xl font-semibold">{t("parameters")}</h2>

        <div className="mt-3 text-slate-300">
          {Object.entries(strategy.default_params).map(([k, v]) => (
            <div
              key={k}
              className="flex justify-between border-b border-slate-700 py-2"
            >
              <span className="font-mono">{k}</span>
              <span>{v}</span>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Works best on */}
      <motion.section className="bg-navy-800 border border-slate-700 p-6 rounded-xl mb-8">
        <h2 className="text-xl font-semibold">{t("works_best")}</h2>
        <p className="text-slate-300 mt-2">{strategy.works_best}</p>
      </motion.section>

      {/* Run Backtest */}
      <motion.section className="bg-navy-800 border border-slate-700 p-6 rounded-xl mb-10">
        <h2 className="text-xl font-semibold">{t("metrics")}</h2>

        <button
          onClick={runBacktest}
          disabled={loading}
          className="mt-4 px-6 py-3 bg-quant-cyan text-black font-semibold rounded-lg shadow hover:opacity-85 transition disabled:opacity-50"
        >
          {loading ? "Running..." : t("run_backtest")}
        </button>

        {error && <p className="text-red-400 mt-4">{error}</p>}

        {metrics && (
          <div className="mt-6">
            <h3 className="text-xl text-quant-lime font-bold">Metrics:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
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
            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-2">Equity Curve</h3>
              <div className="h-56 bg-slate-800 rounded-lg animate-pulse"></div>
            </div>
          </div>
        )}
      </motion.section>
    </div>
  );
};

export default StrategyDetail;
