// strategies.js - to paste full content
const strategies = [
  /* ------------------------------------------------------
   A. MOMENTUM STRATEGIES (6)
------------------------------------------------------ */

  {
    slug: "time-series-momentum",
    category: "Momentum",
    markets: ["VN30F1M", "Equity", "Crypto"],
    difficulty: "Intermediate",
    metrics: { sharpe: 1.21 },
    vi: {
      name: "Time-Series Momentum (TSMOM)",
      summary:
        "Dựa trên xu hướng lợi nhuận quá khứ của chính tài sản để dự đoán hướng tiếp theo.",
      description:
        "Chiến lược Time-Series Momentum (TSMOM) xem xét lợi nhuận quá khứ của chính tài sản. Nếu return trong lookback window dương → long; âm → short. Đây là một trong các phát hiện quan trọng của Moskowitz, Ooi, Pedersen.",
    },
    en: {
      name: "Time-Series Momentum (TSMOM)",
      summary: "Uses a market's own past return to decide trend direction.",
      description:
        "Time-Series Momentum (TSMOM) checks a market's previous cumulative return. Positive → long; negative → short. One of the most robust academic findings in momentum literature.",
    },
  },

  {
    slug: "cross-sectional-momentum",
    category: "Momentum",
    markets: ["Equity", "Crypto"],
    difficulty: "Intermediate",
    metrics: { sharpe: 1.05 },
    vi: {
      name: "Cross-Sectional Momentum",
      summary: "Mua tài sản mạnh nhất, bán tài sản yếu nhất trong nhóm.",
      description:
        "Chiến lược momentum theo nhóm tài sản: xếp hạng theo return quá khứ, mua nhóm trên cùng và bán nhóm dưới cùng. Chiến lược thường áp dụng cho equity universe.",
    },
    en: {
      name: "Cross-Sectional Momentum",
      summary: "Buy winners, short losers across the universe.",
      description:
        "Ranks assets by their past returns, buys top performers and shorts laggards. A classical equity factor.",
    },
  },

  {
    slug: "dual-momentum",
    category: "Momentum",
    markets: ["Equity", "Crypto", "Index Futures"],
    difficulty: "Intermediate",
    metrics: { sharpe: 1.32 },
    vi: {
      name: "Dual Momentum",
      summary: "Kết hợp momentum nội bộ + momentum tương đối.",
      description:
        "Dual Momentum (Antonacci) kết hợp Time-Series Momentum và Cross-Sectional Momentum để tăng tính ổn định.",
    },
    en: {
      name: "Dual Momentum",
      summary: "Combines absolute + relative momentum.",
      description:
        "Dual Momentum mixes TSMOM and cross-sectional momentum for enhanced stability.",
    },
  },

  {
    slug: "opening-range-breakout",
    category: "Momentum",
    markets: ["VN30F1M", "Index Futures"],
    difficulty: "Beginner",
    metrics: { sharpe: 0.88 },
    vi: {
      name: "Opening Range Breakout",
      summary: "Breakout vùng giá 30 phút đầu phiên.",
      description:
        "Xác định high/low trong 30 phút đầu tiên của phiên. Giá phá high → long; phá low → short.",
    },
    en: {
      name: "Opening Range Breakout",
      summary: "Breakout from first 30-minute high/low.",
      description:
        "Define opening range high/low and trade breakout. Popular in futures day-trading.",
    },
  },

  {
    slug: "macd-trend-following",
    category: "Momentum",
    markets: ["VN30F1M", "Equity"],
    difficulty: "Beginner",
    metrics: { sharpe: 0.75 },
    vi: {
      name: "MACD Trend Following",
      summary: "Dựa trên đường DIF và DEA để xác định trend.",
      description:
        "MACD sử dụng EMA fast/slow để tạo tín hiệu xu hướng. DIF cắt lên DEA → long, ngược lại → short.",
    },
    en: {
      name: "MACD Trend Following",
      summary: "Uses DIF/DEA crossover to detect trend.",
      description: "Classic trend-following method using MACD (EMA fast/slow).",
    },
  },

  {
    slug: "donchian-breakout",
    category: "Momentum",
    markets: ["VN30F1M", "Commodities", "FX"],
    difficulty: "Intermediate",
    metrics: { sharpe: 1.1 },
    vi: {
      name: "Donchian Breakout",
      summary: "Breakout high/low 20 phiên.",
      description:
        "Richard Donchian: mua khi giá vượt high 20 ngày, bán khi thủng low 20 ngày. Cực kỳ phổ biến trong CTA trend-following.",
    },
    en: {
      name: "Donchian Breakout",
      summary: "20-day high/low breakout.",
      description:
        "Classical trend-following rule used by CTAs: breakout of 20-day channel.",
    },
  },

  /* ------------------------------------------------------
   B. MEAN REVERSION (7)
------------------------------------------------------ */

  {
    slug: "rsi2-mean-reversion",
    category: "Mean Reversion",
    markets: ["Equity", "VN30F1M"],
    difficulty: "Beginner",
    metrics: { sharpe: 0.92 },
    vi: {
      name: "RSI(2) Mean Reversion",
      summary: "Buy-the-dip: RSI(2) thấp → mua.",
      description:
        "Connors RSI(2): Khi RSI(2) < 10 → mua, khi RSI(2) > 90 → thoát. Hiệu quả trên equity index.",
    },
    en: {
      name: "RSI(2) Mean Reversion",
      summary: "RSI(2) short-window reversion.",
      description:
        "Larry Connors’ RSI2 strategy: oversold → buy; overbought → exit.",
    },
  },

  {
    slug: "bollinger-reversion",
    category: "Mean Reversion",
    markets: ["Equity", "VN30F1M"],
    difficulty: "Beginner",
    metrics: { sharpe: 0.85 },
    vi: {
      name: "Bollinger Band Reversion",
      summary: "Chạm dải dưới → long; chạm dải trên → short.",
      description:
        "Giá chạm band dưới BB(20,2) → mean-revert lên; chạm band trên → revert xuống.",
    },
    en: {
      name: "Bollinger Band Reversion",
      summary: "Reversion from upper/lower band.",
      description: "Touches lower band → long; touches upper band → short.",
    },
  },

  {
    slug: "zscore-reversion",
    category: "Mean Reversion",
    markets: ["VN30F1M", "FX"],
    difficulty: "Intermediate",
    metrics: { sharpe: 1.02 },
    vi: {
      name: "Z-Score Price Reversion",
      summary: "Z-score lệch chuẩn cao → revert.",
      description: "Tính Z-score từ SMA. Khi |Z| lớn → mở vị thế ngược chiều.",
    },
    en: {
      name: "Z-Score Price Reversion",
      summary: "Deviation from mean drives reversion.",
      description: "Trade opposite to extreme deviations measured by z-score.",
    },
  },

  {
    slug: "keltner-reversion",
    category: "Mean Reversion",
    markets: ["Equity"],
    difficulty: "Intermediate",
    metrics: { sharpe: 0.83 },
    vi: {
      name: "Keltner Channel Reversion",
      summary: "Quá độ khỏi dải → revert.",
      description:
        "Khi giá vượt lên/hạ xuống khỏi dải Keltner → có xu hướng revert.",
    },
    en: {
      name: "Keltner Channel Reversion",
      summary: "Overshoot of channel → reversion.",
      description: "A volatility-adjusted reversion system using ATR bands.",
    },
  },

  {
    slug: "vwap-reversion",
    category: "Mean Reversion",
    markets: ["VN30F1M", "Futures"],
    difficulty: "Intermediate",
    metrics: { sharpe: 1.14 },
    vi: {
      name: "VWAP Intraday Reversion",
      summary: "Giá lệch xa VWAP → revert.",
      description: "Intraday mean reversion dựa trên chênh lệch giá với VWAP.",
    },
    en: {
      name: "VWAP Intraday Reversion",
      summary: "Deviation from VWAP → revert.",
      description: "Widely used in intraday futures mean reversion.",
    },
  },

  {
    slug: "pairs-trading",
    category: "Mean Reversion",
    markets: ["Equity", "ETF"],
    difficulty: "Advanced",
    metrics: { sharpe: 1.41 },
    vi: {
      name: "Pairs Trading (StatArb)",
      summary: "Spread giữa hai tài sản đồng liên kết → revert.",
      description:
        "Kiểm tra cointegration giữa hai tài sản; spread lệch khỏi mean → mở long/short để kỳ vọng revert.",
    },
    en: {
      name: "Pairs Trading (StatArb)",
      summary: "Cointegrated spread mean-reverts.",
      description:
        "Classic stat-arb: long/short cointegrated asset pairs when spread deviates from mean.",
    },
  },

  {
    slug: "adx-reversion",
    category: "Mean Reversion",
    markets: ["Equity"],
    difficulty: "Beginner",
    metrics: { sharpe: 0.76 },
    vi: {
      name: "ADX Low → Reversion",
      summary: "ADX thấp → thị trường sideway → revert tốt.",
      description: "Nếu ADX < 20 → ưu tiên chiến lược mean reversion.",
    },
    en: {
      name: "ADX Low → Reversion",
      summary: "Low ADX → sideways → good reversion.",
      description: "Filter for mean reversion when market has no strong trend.",
    },
  },

  /* ------------------------------------------------------
   C. VOLATILITY / VOLUME (5)
------------------------------------------------------ */

  {
    slug: "atr-breakout",
    category: "Volatility",
    markets: ["VN30F1M"],
    difficulty: "Beginner",
    metrics: { sharpe: 0.9 },
    vi: {
      name: "ATR Volatility Breakout",
      summary: "Breakout dựa trên ATR × multiplier.",
      description:
        "ATR dùng để đo biến động; breakout vượt ATR threshold → tín hiệu trend.",
    },
    en: {
      name: "ATR Volatility Breakout",
      summary: "ATR-based breakout.",
      description: "ATR range expansion triggers directional trades.",
    },
  },

  {
    slug: "garch-forecast",
    category: "Volatility",
    markets: ["Equity", "Futures"],
    difficulty: "Advanced",
    metrics: { sharpe: 1.22 },
    vi: {
      name: "GARCH Volatility Forecasting",
      summary: "Dự báo volatility → dự đoán hướng return.",
      description:
        "Mô hình GARCH(1,1) dự báo biên độ biến động; cao → breakout; thấp → reversion.",
    },
    en: {
      name: "GARCH Vol Forecasting",
      summary: "Forecast vol → trade logic.",
      description:
        "GARCH predicts volatility regimes which drive directional bias.",
    },
  },

  {
    slug: "volume-surge-breakout",
    category: "Volatility",
    markets: ["VN30F1M"],
    difficulty: "Beginner",
    metrics: { sharpe: 0.84 },
    vi: {
      name: "Volume Surge Breakout",
      summary: "Khối lượng tăng đột biến → breakout.",
      description:
        "Volume spike là dấu hiệu smart money tham gia → breakout mạnh.",
    },
    en: {
      name: "Volume Surge Breakout",
      summary: "Volume spike → breakout.",
      description: "Used to detect high-conviction directional moves.",
    },
  },

  {
    slug: "obv-trend",
    category: "Volatility",
    markets: ["Equity"],
    difficulty: "Beginner",
    metrics: { sharpe: 0.78 },
    vi: {
      name: "OBV Trend Confirmation",
      summary: "OBV xác nhận xu hướng giá.",
      description:
        "Nếu giá tăng + OBV tăng → xác nhận trend. Ngược lại → tín hiệu yếu.",
    },
    en: {
      name: "OBV Trend Confirmation",
      summary: "OBV confirms price trend.",
      description: "On-balance volume used as a trend confirmation indicator.",
    },
  },

  {
    slug: "vol-regime-switching",
    category: "Volatility",
    markets: ["Equity", "Crypto"],
    difficulty: "Advanced",
    metrics: { sharpe: 1.15 },
    vi: {
      name: "Volatility Regime Switching",
      summary: "Xác định chế độ vol → chọn chiến lược phù hợp.",
      description:
        "High vol → momentum tốt. Low vol → mean reversion hiệu quả.",
    },
    en: {
      name: "Volatility Regime Switching",
      summary: "Vol regime determines strategy.",
      description:
        "Adaptive switching between momentum and reversion based on volatility state.",
    },
  },

  /* ------------------------------------------------------
   D. MACHINE LEARNING (6)
------------------------------------------------------ */

  {
    slug: "lstm-direction",
    category: "Machine Learning",
    markets: ["VN30F1M"],
    difficulty: "Advanced",
    metrics: { sharpe: 1.42 },
    vi: {
      name: "LSTM Direction Classifier",
      summary: "Dự đoán Long/Short/Flat bằng LSTM 多时序.",
      description:
        "Model LSTM nhận input OHLCV + indicators để dự đoán direction 0/1/2, dùng cho VN30F1M.",
    },
    en: {
      name: "LSTM Direction Classification",
      summary: "Predict up/flat/down using LSTM.",
      description:
        "Sequence model using OHLCV + features (RSI, ATR, returns, MACD…).",
    },
  },

  {
    slug: "random-forest-direction",
    category: "Machine Learning",
    markets: ["Equity", "Crypto"],
    difficulty: "Intermediate",
    metrics: { sharpe: 1.18 },
    vi: {
      name: "Random Forest Signal",
      summary: "RF dự đoán xác suất tăng/giảm.",
      description:
        "Random Forest với 100–500 trees dự đoán direction, dễ train và avoid overfit hơn NN.",
    },
    en: {
      name: "Random Forest Signal",
      summary: "RF predicts up/down probabilities.",
      description: "Random Forest classifier for short-term signal generation.",
    },
  },

  {
    slug: "xgboost-trend-score",
    category: "Machine Learning",
    markets: ["Futures", "Equity"],
    difficulty: "Advanced",
    metrics: { sharpe: 1.33 },
    vi: {
      name: "XGBoost Trend Scoring",
      summary: "XGBoost xếp hạng momentum score.",
      description:
        "Model gradient-boosting mạnh nhất cho tabular financial data.",
    },
    en: {
      name: "XGBoost Trend Scoring",
      summary: "Boosted tree trend classifier.",
      description: "XGBoost assigns probability to trend continuation.",
    },
  },

  {
    slug: "mlp-direction",
    category: "Machine Learning",
    markets: ["Futures"],
    difficulty: "Intermediate",
    metrics: { sharpe: 1.01 },
    vi: {
      name: "MLP Binary Classifier",
      summary: "MLP dự đoán up/down.",
      description: "Feed-forward network đơn giản.",
    },
    en: {
      name: "MLP Binary Classifier",
      summary: "Simple MLP model.",
      description: "Basic neural network for classification.",
    },
  },

  {
    slug: "catboost-regression",
    category: "Machine Learning",
    markets: ["Equity"],
    difficulty: "Intermediate",
    metrics: { sharpe: 1.16 },
    vi: {
      name: "CatBoost Return Prediction",
      summary: "Dự đoán return tiếp theo bằng CatBoost.",
      description:
        "CatBoost thường outperform XGBoost trong feature dạng categorical/time.",
    },
    en: {
      name: "CatBoost Return Prediction",
      summary: "Return regression.",
      description:
        "CatBoost for predicting next-period return and ranking assets.",
    },
  },

  {
    slug: "rl-dqn-micro",
    category: "Machine Learning",
    markets: ["Crypto", "Futures"],
    difficulty: "Advanced",
    metrics: { sharpe: 1.38 },
    vi: {
      name: "Reinforcement Learning (DQN)",
      summary: "RL cho micro-trading.",
      description: "DQN chọn hành động buy/hold/sell để maximize reward PnL.",
    },
    en: {
      name: "Reinforcement Learning (DQN)",
      summary: "RL for micro-trading.",
      description: "Train DQN agent for short horizon trading.",
    },
  },

  /* ------------------------------------------------------
   E. SEASONAL / CALENDAR (3)
------------------------------------------------------ */

  {
    slug: "day-of-week",
    category: "Seasonal",
    markets: ["Equity", "Futures"],
    difficulty: "Beginner",
    metrics: { sharpe: 0.7 },
    vi: {
      name: "Day-of-Week Effect",
      summary: "Hiệu ứng thứ Hai/Thứ Sáu.",
      description:
        "Nhiều thị trường có return cao hơn vào thứ Sáu và thấp hơn vào thứ Hai.",
    },
    en: {
      name: "Day-of-Week Effect",
      summary: "Returns vary by weekday.",
      description:
        "Well-known seasonal anomaly where Friday tends to be strong.",
    },
  },

  {
    slug: "month-end-momentum",
    category: "Seasonal",
    markets: ["Equity"],
    difficulty: "Intermediate",
    metrics: { sharpe: 0.87 },
    vi: {
      name: "Month-End Momentum",
      summary: "Cuối tháng có xu hướng tăng.",
      description:
        "Institutional flows khiến equity tăng mạnh cuối tháng, giảm nhẹ đầu tháng.",
    },
    en: {
      name: "Month-End Momentum",
      summary: "End-of-month push.",
      description: "Driven by fund rebalancing and institutional behavior.",
    },
  },

  {
    slug: "holiday-effect",
    category: "Seasonal",
    markets: ["Equity"],
    difficulty: "Beginner",
    metrics: { sharpe: 0.66 },
    vi: {
      name: "Holiday Effect",
      summary: "Trước kỳ nghỉ giá thường tăng.",
      description: "Market tâm lý tích cực trước ngày nghỉ lễ.",
    },
    en: {
      name: "Holiday Effect",
      summary: "Holiday drift.",
      description: "Equities tend to rise before major holidays.",
    },
  },

  /* ------------------------------------------------------
   F. MICROSTRUCTURE (3)
------------------------------------------------------ */

  {
    slug: "orderbook-imbalance",
    category: "Microstructure",
    markets: ["Crypto", "Futures"],
    difficulty: "Advanced",
    metrics: { sharpe: 1.52 },
    vi: {
      name: "Order Book Imbalance (OBI)",
      summary: "OB bid/ask cho tín hiệu micro-alpha.",
      description:
        "OBI = (bid_volume - ask_volume) / (bid_volume + ask_volume). Dùng dự đoán micro price move.",
    },
    en: {
      name: "Order Book Imbalance (OBI)",
      summary: "OBI predicts micro moves.",
      description: "OBI forecasts short-horizon price pressure.",
    },
  },

  {
    slug: "short-term-reversion-5m",
    category: "Microstructure",
    markets: ["VN30F1M"],
    difficulty: "Intermediate",
    metrics: { sharpe: 1.08 },
    vi: {
      name: "Short-term Mean Reversion (5m)",
      summary: "Revert nhanh trong 5 phút.",
      description: "Giá bật lại từ micro-overshoot intraday.",
    },
    en: {
      name: "Short-term Mean Reversion (5m)",
      summary: "Fast 5-minute reversion.",
      description: "Uses micro time-frame to capture noise reversion.",
    },
  },

  {
    slug: "volume-imbalance-micro-alpha",
    category: "Microstructure",
    markets: ["Futures", "Crypto"],
    difficulty: "Advanced",
    metrics: { sharpe: 1.25 },
    vi: {
      name: "Volume Imbalance Micro-Alpha",
      summary: "Dựa vào volume tại bid/ask.",
      description: "Volume imbalance dự báo micro alpha ngắn hạn ~30–90 giây.",
    },
    en: {
      name: "Volume Imbalance Micro-Alpha",
      summary: "Volume-based micro alpha.",
      description: "Short-term moves driven by bid/ask volume imbalance.",
    },
  },
];

export default strategies;
