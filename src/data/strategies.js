const strategies = [
  // ============================================================
  // A. MOMENTUM STRATEGIES (6)
  // ============================================================

  {
    slug: "tsmomentum",
    name: "Time-Series Momentum",
    category: "Momentum",
    market: "Multi-market",
    description_vi:
      "Chiến lược Momentum theo thời gian (TSMOM) dựa trên hướng lợi nhuận trong quá khứ. Giá tăng trong  lookback → Long, giảm → Short.",
    description_en:
      "Time-Series Momentum (TSMOM) follows past return direction. Positive past return → Long, negative → Short.",
    logic: [
      "Tính return N ngày gần nhất",
      "Nếu return > 0 → Long",
      "Nếu return < 0 → Short",
      "Giữ vị thế đến kỳ tiếp theo",
    ],
    default_params: { lookback: 20 },
    works_best: "Markets có xu hướng mạnh: equities, futures, forex.",
    sharpe: "?",
  },

  {
    slug: "cross-sectional-momentum",
    name: "Cross-Sectional Momentum",
    category: "Momentum",
    market: "Multi-asset basket",
    description_vi:
      "Mua tài sản mạnh nhất và bán tài sản yếu nhất dựa trên momentum cross-sectional.",
    description_en:
      "Buys winners and shorts losers based on cross-sectional momentum ranking.",
    logic: [
      "Tính return lookback cho danh mục tài sản",
      "Xếp hạng từ mạnh → yếu",
      "Long top 20%, short bottom 20%",
    ],
    default_params: { lookback: 60, top_pct: 0.2, bottom_pct: 0.2 },
    works_best: "Danh mục tài sản đa dạng.",
    sharpe: "?",
  },

  {
    slug: "dual-momentum",
    name: "Dual Momentum – Gary Antonacci",
    category: "Momentum",
    market: "Global Equities",
    description_vi:
      "Kết hợp Momentum tương đối và tuyệt đối. Một trong các chiến lược academic nổi tiếng.",
    description_en:
      "Combines relative and absolute momentum. One of the most cited momentum models.",
    logic: [
      "So sánh return của tài sản với benchmark",
      "Nếu return > 0 và outperform → Long",
      "Nếu < 0 → chuyển sang tài sản phòng thủ",
    ],
    default_params: { lookback: 90 },
    works_best: "ETF / Global equities.",
    sharpe: "?",
  },

  {
    slug: "opening-range-momentum",
    name: "Intraday Opening Range Breakout",
    category: "Momentum (Intraday)",
    market: "VN30F1M / Index Futures",
    description_vi:
      "Dùng vùng giá mở cửa 30 phút đầu để xác định breakout trong ngày.",
    description_en:
      "Uses the first 30-minute opening range to detect intraday breakout direction.",
    logic: [
      "Xác định High/Low của 30 phút mở cửa",
      "Giá breakout High → Long",
      "Break Low → Short",
    ],
    default_params: { or_window: 30 },
    works_best: "VN30F1M, NQ, ES futures.",
    sharpe: "?",
  },

  {
    slug: "macd-trend",
    name: "MACD Trend Following",
    category: "Momentum / Trend",
    market: "All markets",
    description_vi: "Dùng MACD để xác định xu hướng: DIF cắt lên → Long.",
    description_en: "Use MACD crossover for trend direction.",
    logic: [
      "MACD Line > Signal Line → Long",
      "MACD Line < Signal Line → Short",
    ],
    default_params: { fast: 12, slow: 26, signal: 9 },
    works_best: "Cổ phiếu và futures có trend.",
    sharpe: "?",
  },

  {
    slug: "donchian-breakout",
    name: "Donchian Channel Breakout",
    category: "Momentum / Breakout",
    market: "Futures",
    description_vi:
      "Breakout kênh Donchian 20 phiên – chiến lược gốc của Turtle Trading.",
    description_en: "Donchian 20-day breakout. Core of Turtle Trading system.",
    logic: ["High 20 phiên bị phá → Long", "Low 20 phiên bị phá → Short"],
    default_params: { period: 20 },
    works_best: "Markets trending strongly.",
    sharpe: "?",
  },

  // ============================================================
  // B. MEAN REVERSION STRATEGIES (7)
  // ============================================================

  {
    slug: "rsi2",
    name: "RSI(2) Mean Reversion – Connors",
    category: "Mean Reversion",
    market: "Equities / VN30F1M",
    description_vi: "RSI(2) < 10 → Long. Khi RSI hồi phục → thoát.",
    description_en: "RSI(2) < 10 → Long. Exit on mean reversion bounce.",
    logic: ["RSI(2) < 10 → Long", "RSI(2) > 70 → Exit"],
    default_params: { rsi_period: 2, rsi_long: 10, rsi_exit: 70 },
    works_best: "Thị trường mean-reverting như equities lớn.",
    sharpe: "?",
  },

  {
    slug: "bollinger-reversion",
    name: "Bollinger Band Reversion",
    category: "Mean Reversion",
    market: "Multi",
    description_vi: "Giá chạm lower band → Long, upper band → Short.",
    description_en: "Touch lower band → Long, upper band → Short.",
    logic: ["Close < LowerBand → Long", "Close > UpperBand → Short"],
    default_params: { period: 20, std: 2 },
    works_best: "VN30F1M, Forex, Stocks.",
    sharpe: "?",
  },

  {
    slug: "zscore-reversion",
    name: "Z-Score Price Reversion",
    category: "Mean Reversion",
    market: "All markets",
    description_vi: "Zscore < -2 → Long. Zscore > +2 → Short.",
    description_en: "-2 Zscore → Long. +2 → Short.",
    logic: ["Zscore = (Price - SMA) / Std", "Zscore < -2 → Long"],
    default_params: { lookback: 20, z_long: -2, z_short: 2 },
    works_best: "Markets không quá trending.",
    sharpe: "?",
  },

  {
    slug: "keltner-reversion",
    name: "Keltner Channel Reversion",
    category: "Mean Reversion",
    market: "All",
    description_vi: "Giá phá channel → kỳ vọng quay lại EMA.",
    description_en: "Price outside channel reverts to EMA.",
    logic: ["Close < LowerKC → Long", "Close > UpperKC → Short"],
    default_params: { period: 20, atr_mult: 1.5 },
    works_best: "Equities, VN30F1M.",
    sharpe: "?",
  },

  {
    slug: "vwap-reversion",
    name: "VWAP Intraday Reversion",
    category: "Intraday Mean Reversion",
    market: "VN30F1M",
    description_vi: "Giá lệch xa VWAP → có xác suất quay về.",
    description_en: "Price deviates from VWAP → mean reversion.",
    logic: ["Close < VWAP - K → Long", "Close > VWAP + K → Short"],
    default_params: { k: 5 },
    works_best: "Intraday futures.",
    sharpe: "?",
  },

  {
    slug: "pairs-trading",
    name: "Pairs Trading (Statistical Arbitrage)",
    category: "Mean Reversion / Stat Arb",
    market: "Stocks",
    description_vi:
      "Chiến lược kinh điển: spread giữa 2 tài sản mean reverting.",
    description_en:
      "Classic stat-arb: mean-reverting spread between paired assets.",
    logic: ["Spread = A - beta*B", "Spread > 2σ → Short", "< -2σ → Long"],
    default_params: { z_entry: 2, z_exit: 0 },
    works_best: "Cổ phiếu cùng ngành.",
    sharpe: "?",
  },

  {
    slug: "adx-reversion",
    name: "ADX Low → Reversion",
    category: "Mean Reversion",
    market: "VN30F1M",
    description_vi: "ADX thấp → thị trường sideway → ưu tiên mean reversion.",
    description_en: "Low ADX indicates non-trend regime → mean reversion.",
    logic: ["ADX < 20 → ưu tiên mean reversion signals"],
    default_params: { threshold: 20 },
    works_best: "Futures, equity indices.",
    sharpe: "?",
  },

  // ============================================================
  // C. VOLATILITY / VOLUME STRATEGIES (5)
  // ============================================================

  {
    slug: "atr-breakout",
    name: "ATR Volatility Breakout",
    category: "Volatility / Breakout",
    market: "VN30F1M",
    description_vi: "Breakout dựa vào ATR × hệ số K.",
    description_en: "Breakout using ATR × K factor.",
    logic: ["Long if Close > SMA + ATR*K", "Short if Close < SMA - ATR*K"],
    default_params: { period: 14, k: 2 },
    works_best: "Futures volatile.",
    sharpe: "?",
  },

  {
    slug: "garch-vol",
    name: "GARCH Volatility Forecasting",
    category: "Volatility Forecast",
    market: "Equities / Futures",
    description_vi: "Dùng mô hình GARCH để dự đoán độ biến động.",
    description_en: "Uses GARCH forecast as signal.",
    logic: ["Vol forecast ↑ → expect expansion"],
    default_params: { window: 100 },
    works_best: "Equities, crypto.",
    sharpe: "?",
  },

  {
    slug: "volume-surge",
    name: "Volume Surge Breakout",
    category: "Volume",
    market: "VN30F1M",
    description_vi: "Khi volume tăng mạnh → xác suất breakout cao.",
    description_en: "Volume spike indicates breakout probability.",
    logic: ["Volume > MA(volume)*2 → trade breakout"],
    default_params: { vol_mult: 2 },
    works_best: "Futures & intraday.",
    sharpe: "?",
  },

  {
    slug: "obv-trend",
    name: "OBV Trend Confirmation",
    category: "Volume Trend",
    market: "All",
    description_vi: "OBV tăng → xác nhận xu hướng tăng.",
    description_en: "Rising OBV confirms bullish trend.",
    logic: ["OBV slope > 0 → Long bias"],
    default_params: { window: 10 },
    works_best: "VN30, stocks.",
    sharpe: "?",
  },

  {
    slug: "vol-regime-switch",
    name: "Volatility Regime Switching",
    category: "Volatility",
    market: "All",
    description_vi:
      "Chuyển đổi chiến lược dựa theo regime volatility (cao/thấp).",
    description_en: "Switch behavior based on volatility regimes.",
    logic: [
      "Nếu ATR tăng → dùng momentum",
      "Nếu ATR thấp → dùng mean reversion",
    ],
    default_params: { threshold: 1.5 },
    works_best: "Markets with alternating regimes.",
    sharpe: "?",
  },

  // ============================================================
  // D. MACHINE LEARNING (6)
  // ============================================================

  {
    slug: "lstm-vn30",
    name: "LSTM Direction Classifier",
    category: "Machine Learning",
    market: "VN30F1M",
    description_vi: "Dùng mô hình LSTM để dự đoán hướng giá (Up/Down/Flat).",
    description_en: "LSTM neural network predicts next candle direction.",
    logic: [
      "Input features: ATR, RSI, MOM, returns...",
      "Label: Up/Down/Flat",
      "Train LSTM → Predict next bar",
    ],
    default_params: { seq_len: 60 },
    works_best: "VN30F1M.",
    sharpe: "?",
  },

  {
    slug: "rf-classifier",
    name: "Random Forest Classifier",
    category: "Machine Learning",
    market: "Stocks / Futures",
    description_vi: "RF dự đoán hướng giá ngắn hạn.",
    description_en: "Random Forest predicts next move.",
    logic: ["Train RF on technical features", "Predict direction"],
    default_params: { trees: 200 },
    works_best: "VN30F1M / stocks.",
    sharpe: "?",
  },

  {
    slug: "xgboost-trend",
    name: "XGBoost Trend Strength Scoring",
    category: "Machine Learning",
    market: "All",
    description_vi: "XGBoost chấm điểm độ mạnh xu hướng.",
    description_en: "XGBoost scores trend strength.",
    logic: ["Train XGB with engineered features"],
    default_params: { depth: 6, lr: 0.1 },
    works_best: "VN30F1M.",
    sharpe: "?",
  },

  {
    slug: "mlp-binary",
    name: "MLP Binary Classifier",
    category: "Machine Learning",
    market: "All",
    description_vi: "MLP đơn giản dự đoán tăng/giảm.",
    description_en: "Simple MLP predicts Up/Down.",
    logic: ["Feedforward NN"],
    default_params: { hidden: 64 },
    works_best: "Equities.",
    sharpe: "?",
  },

  {
    slug: "catboost-regression",
    name: "CatBoost Return Prediction",
    category: "Machine Learning",
    market: "Stocks",
    description_vi: "Dự đoán return bằng CatBoost.",
    description_en: "CatBoost regression on returns.",
    logic: ["Predict expected return next period"],
    default_params: { depth: 8 },
    works_best: "Stocks.",
    sharpe: "?",
  },

  {
    slug: "rl-dqn",
    name: "Reinforcement Learning (DQN)",
    category: "RL / ML",
    market: "Crypto / Futures",
    description_vi: "DQN học chính sách giao dịch tối ưu.",
    description_en: "DQN learns optimal trading policy.",
    logic: [
      "State: price + indicators",
      "Action: Long/Short/Flat",
      "Reward: PnL",
    ],
    default_params: { episodes: 50 },
    works_best: "Crypto & futures.",
    sharpe: "?",
  },

  // ============================================================
  // E. SEASONAL / CALENDAR EFFECTS (3)
  // ============================================================

  {
    slug: "dow-effect",
    name: "Day-of-Week Effect",
    category: "Calendar Effect",
    market: "VN30 / Stocks",
    description_vi: "Tín hiệu dựa theo hành vi các ngày trong tuần.",
    description_en: "Return pattern based on day-of-week.",
    logic: ["Monday: bearish bias", "Friday: bullish bias"],
    default_params: {},
    works_best: "Equities.",
    sharpe: "?",
  },

  {
    slug: "month-end-momentum",
    name: "Month-End Momentum",
    category: "Seasonality",
    market: "Global Equities",
    description_vi: "Thị trường thường tăng vào cuối tháng do fund flow.",
    description_en: "Month-end flow causes momentum effect.",
    logic: ["Buy 5 days before month-end", "Sell 1 day into next month"],
    default_params: {},
    works_best: "Big cap equities.",
    sharpe: "?",
  },

  {
    slug: "holiday-effect",
    name: "Holiday Effect",
    category: "Calendar",
    market: "Equities",
    description_vi: "Thị trường tăng trước ngày lễ.",
    description_en: "Markets rally before holidays.",
    logic: ["Buy 1–3 days before holiday"],
    default_params: {},
    works_best: "VN30, US equities.",
    sharpe: "?",
  },

  // ============================================================
  // F. MICROSTRUCTURE (3)
  // ============================================================

  {
    slug: "obi-orderbook",
    name: "Order Book Imbalance Prediction",
    category: "Microstructure",
    market: "Futures",
    description_vi: "Dựa vào Order Book Imbalance để dự đoán hướng ngắn hạn.",
    description_en: "Order Book Imbalance predicts micro price movements.",
    logic: ["OBI > 20% → bullish", "OBI < -20% → bearish"],
    default_params: { threshold: 0.2 },
    works_best: "Futures / Crypto.",
    sharpe: "?",
  },

  {
    slug: "intraday-5min-revert",
    name: "Short-Term Mean Reversion (5-min)",
    category: "Intraday",
    market: "VN30F1M",
    description_vi: "Short-term bounce dựa trên candle 5 phút.",
    description_en: "5-min mean reversion opportunities.",
    logic: ["Large down candle → bounce", "Large up candle → fade"],
    default_params: { threshold: 0.6 },
    works_best: "VN30F1M.",
    sharpe: "?",
  },

  {
    slug: "volume-imbalance",
    name: "Volume Imbalance Micro-Alpha",
    category: "Microstructure",
    market: "Crypto / Futures",
    description_vi: "Volume Buy/Sell lệch lớn → tín hiệu vi mô.",
    description_en: "Volume buy/sell imbalance micro-alpha signal.",
    logic: ["Volume imbalance > X → Long", "< -X → Short"],
    default_params: { x: 1.5 },
    works_best: "Crypto.",
    sharpe: "?",
  },
];

// Export
export default strategies;
