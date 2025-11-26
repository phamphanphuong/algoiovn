import axios from "axios";

// ================================
// 🔧 CONFIG BACKEND API
// ================================
//
// ❗ Bạn cần đổi URL sau cho phù hợp với VPS:
//
// Example nếu dùng localhost:
//   http://127.0.0.1:8000
//
// Example nếu deploy FastAPI trên VPS domain:
//   https://api.algo.io.vn
//
// ================================
const API_BASE_URL = "http://127.0.0.1:8000"; // CHANGE THIS IF USING VPS

// Axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 20000,
  headers: {
    "Content-Type": "application/json",
  },
});

// ===== Request =====
api.interceptors.request.use(
  (config) => {
    // console.log("API request:", config.url);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// ===== Response =====
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.error("API Error:", error?.response || error);
    return Promise.reject(error);
  }
);

export default api;
