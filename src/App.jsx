import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Library from "./pages/Library";
import StrategyDetail from "./pages/StrategyDetail";
import Playground from "./pages/Playground";
import About from "./pages/About";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/library" element={<Library />} />
        <Route path="/strategy/:slug" element={<StrategyDetail />} />
        <Route path="/playground" element={<Playground />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Layout>
  );
};

export default App;
