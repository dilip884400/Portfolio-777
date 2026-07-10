import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useLocation,
} from "react-router-dom";

import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Resume from "./components/Resume/ResumeNew";
import ScrollToTop from "./components/ScrollToTop";

import "./App.css";
import "./index.css";

/* ── Preloader ── */
function Preloader({ visible }) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-obsidian-950"
          aria-label="Loading"
          role="status"
          aria-live="polite"
        >
          {/* Logo mark */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col items-center gap-4"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-600 to-fuchsia-600 flex items-center justify-center shadow-violet-lg">
              <span className="text-white text-3xl font-bold font-display">D</span>
            </div>
            <p className="text-slate-400 text-sm font-mono tracking-widest">
              loading<span className="animate-pulse">...</span>
            </p>
          </motion.div>

          {/* Progress bar */}
          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/[0.05]">
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.1, ease: "easeInOut" }}
              className="h-full bg-gradient-to-r from-violet-600 to-fuchsia-500"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ── Animated Routes with location key ── */
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AnimatePresence>
  );
}

/* ── App Root ── */
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader visible={loading} />

      <div
        className="App relative min-h-screen bg-obsidian-900"
        id={loading ? "no-scroll" : "scroll"}
      >
        {/* Ambient background glows */}
        <div
          aria-hidden="true"
          className="ambient-glow-violet"
        />
        <div
          aria-hidden="true"
          className="ambient-glow-fuchsia"
        />

        {/* Skip to main content (accessibility) */}
        <a
          href="#home-page"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-violet-600 focus:text-white focus:font-medium"
        >
          Skip to main content
        </a>

        <Navbar />
        <ScrollToTop />
        <AnimatedRoutes />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
