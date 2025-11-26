import React, { useContext } from "react";
import { motion } from "framer-motion";
import { I18nContext } from "../context/I18nContext";
import { Link } from "react-router-dom";

const Home = () => {
  const { t } = useContext(I18nContext);

  return (
    <div className="text-white">
      {/* HERO */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center py-20"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-quant-cyan">
          {t("hero_title")}
        </h1>

        <p className="text-slate-400 max-w-2xl mx-auto mt-4 text-lg">
          {t("hero_subtitle")}
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Link
            to="/library"
            className="px-6 py-3 bg-quant-cyan text-black font-semibold rounded-lg shadow hover:opacity-90 transition"
          >
            {t("explore_strategies")}
          </Link>

          <Link
            to="/playground"
            className="px-6 py-3 border border-slate-600 rounded-lg hover:bg-slate-800 transition"
          >
            {t("open_playground")}
          </Link>
        </div>
      </motion.section>

      {/* VALUE SECTION */}
      <section className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            title: "20+ Curated Strategies",
            desc: "Được tuyển chọn theo tư duy của Quantpedia và academic research.",
          },
          {
            title: "Live FastAPI Backtesting",
            desc: "Playground hỗ trợ backtest thời gian thực qua backend thật.",
          },
          {
            title: "Optimized for VN30F1M",
            desc: "Tối ưu đặc biệt cho thị trường phái sinh Việt Nam.",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-navy-800/40 border border-slate-800 p-6 rounded-xl shadow"
          >
            <h3 className="text-xl font-semibold text-quant-cyan">
              {item.title}
            </h3>
            <p className="mt-2 text-slate-400">{item.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* DEMO IMAGE (placeholder) */}
      <section className="mt-24 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="bg-navy-800 border border-slate-700 rounded-xl p-10 max-w-4xl mx-auto"
        >
          <h2 className="text-2xl font-semibold mb-4">Demo Equity Curve</h2>
          <div className="h-48 bg-slate-800 rounded-md animate-pulse"></div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
