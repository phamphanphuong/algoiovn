import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="text-white">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-10"
      >
        <h1 className="text-4xl font-bold text-quant-cyan">
          QuantAlgo Research
        </h1>
        <p className="text-slate-400 text-lg max-w-3xl mt-3">
          Nền tảng nghiên cứu và triển khai các chiến lược giao dịch định lượng
          (Quantitative Trading) được phát triển theo phong cách của
          QuantConnect × Quantpedia, tối ưu hoá riêng cho VN30F1M và thị trường
          Việt Nam.
        </p>
      </motion.div>

      {/* Mission */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="bg-navy-800 border border-slate-700 p-6 rounded-xl mb-8"
      >
        <h2 className="text-2xl font-semibold">Sứ mệnh</h2>

        <p className="text-slate-300 mt-3 leading-relaxed">
          Xây dựng hệ sinh thái phân tích định lượng hoàn chỉnh cho thị trường
          Việt Nam, bao gồm:
        </p>

        <ul className="list-disc ml-6 mt-4 text-slate-300 space-y-2">
          <li>Thư viện chiến lược chuẩn hoá theo hướng Quantpedia</li>
          <li>Backtest thời gian thực qua FastAPI backend</li>
          <li>Ứng dụng các mô hình Machine Learning (LSTM, XGBoost…)</li>
          <li>Dashboard trực quan: Equity Curve, Sharpe, Drawdown…</li>
          <li>Tích hợp với bot giao dịch thật (Trading Bot Engine)</li>
        </ul>
      </motion.section>

      {/* Architecture Overview */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="bg-navy-800 border border-slate-700 p-6 rounded-xl mb-8"
      >
        <h2 className="text-2xl font-semibold">Kiến trúc nền tảng</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-5">
          <div className="p-5 bg-navy-900 border border-slate-700 rounded-xl">
            <h3 className="text-xl font-semibold text-quant-cyan">
              Frontend (React + Vite)
            </h3>
            <p className="text-slate-300 mt-2">
              Giao diện Web hiện đại, nhanh, hỗ trợ animation qua Framer Motion
              và theme dark/light.
            </p>
          </div>

          <div className="p-5 bg-navy-900 border border-slate-700 rounded-xl">
            <h3 className="text-xl font-semibold text-quant-cyan">Backend</h3>
            <p className="text-slate-300 mt-2">
              FastAPI chạy các backtest thời gian thực, kết nối dữ liệu OHLCV,
              xử lý logic chiến lược.
            </p>
          </div>

          <div className="p-5 bg-navy-900 border border-slate-700 rounded-xl">
            <h3 className="text-xl font-semibold text-quant-cyan">
              Strategy Library
            </h3>
            <p className="text-slate-300 mt-2">
              Gồm hơn 30 chiến lược: Momentum, Mean Reversion, Intraday, Machine
              Learning… theo chuẩn academic.
            </p>
          </div>

          <div className="p-5 bg-navy-900 border border-slate-700 rounded-xl">
            <h3 className="text-xl font-semibold text-quant-cyan">
              Playground
            </h3>
            <p className="text-slate-300 mt-2">
              Nhập tham số chiến lược, chạy backtest, xem kết quả Sharpe, Win
              Rate, Equity Curve và Drawdown.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Credits */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.35 }}
        className="bg-navy-800 border border-slate-700 p-6 rounded-xl mb-20"
      >
        <h2 className="text-2xl font-semibold">Credits & Tech Stack</h2>

        <p className="text-slate-300 mt-3 mb-4">
          Website được phát triển dựa trên:
        </p>

        <ul className="list-disc ml-6 text-slate-300 space-y-2">
          <li>React 18 + Vite</li>
          <li>TailwindCSS</li>
          <li>Framer Motion</li>
          <li>FastAPI backend</li>
          <li>Python: Pandas, Backtesting.py, LSTM/Keras</li>
        </ul>
      </motion.section>
    </div>
  );
};

export default About;
