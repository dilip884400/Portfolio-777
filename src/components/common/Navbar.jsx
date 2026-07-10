import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { AiOutlineHome, AiOutlineUser, AiFillGithub } from "react-icons/ai";
import { BsGrid3X3Gap, BsFileEarmarkText } from "react-icons/bs";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const navLinks = [
  { to: "/", label: "Home", icon: <AiOutlineHome size={16} /> },
  { to: "/about", label: "About", icon: <AiOutlineUser size={16} /> },
  { to: "/project", label: "Projects", icon: <BsGrid3X3Gap size={15} /> },
  { to: "/resume", label: "Resume", icon: <BsFileEarmarkText size={15} /> },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <>
      {/* ── Desktop / Tablet Navbar ── */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4"
        role="banner"
      >
        <nav
          aria-label="Main navigation"
          className={`
            relative flex items-center justify-between gap-6 px-5 py-3 rounded-2xl
            transition-all duration-500 ease-out w-full max-w-5xl
            ${
              scrolled
                ? "backdrop-blur-2xl bg-obsidian-900/80 border border-white/[0.08] shadow-glass"
                : "backdrop-blur-sm bg-transparent border border-transparent"
            }
          `}
        >
          {/* Logo */}
          <Link
            to="/"
            aria-label="Dilip Lovevanshi — Home"
            className="flex items-center gap-2 flex-shrink-0 group"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-fuchsia-600 flex items-center justify-center shadow-violet group-hover:shadow-violet-lg transition-shadow duration-300">
              <span className="text-white text-sm font-bold font-display">D</span>
            </div>
            <span className="text-white font-display font-semibold text-sm hidden sm:block">
              Dilip
              <span className="gradient-text ml-0.5">.dev</span>
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <ul className="hidden md:flex items-center gap-1" role="list">
            {navLinks.map(({ to, label, icon }) => {
              const isActive = location.pathname === to;
              return (
                <li key={to}>
                  <Link
                    to={to}
                    aria-current={isActive ? "page" : undefined}
                    className={`
                      relative flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium
                      transition-all duration-200
                      ${
                        isActive
                          ? "text-white bg-white/[0.08]"
                          : "text-slate-400 hover:text-white hover:bg-white/[0.05]"
                      }
                    `}
                  >
                    <span className={isActive ? "text-violet-400" : ""}>
                      {icon}
                    </span>
                    {label}
                    {isActive && (
                      <motion.span
                        layoutId="activeNavIndicator"
                        className="absolute inset-0 rounded-lg bg-white/[0.06] border border-white/[0.08]"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* GitHub CTA */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/dilip884400"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View GitHub profile"
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/[0.10] text-slate-300 text-sm font-medium bg-white/[0.03] hover:border-violet-500/40 hover:text-violet-300 hover:bg-violet-500/[0.06] transition-all duration-200"
            >
              <AiFillGithub size={16} />
              <span className="hidden lg:inline">GitHub</span>
            </a>

            {/* Mobile hamburger */}
            <button
              id="mobile-menu-toggle"
              className="md:hidden flex items-center justify-center w-8 h-8 rounded-lg border border-white/[0.10] text-slate-300 hover:text-white hover:border-white/20 transition-all duration-200"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <HiX size={18} /> : <HiMenuAlt3 size={18} />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* ── Mobile Menu Overlay ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed top-20 left-4 right-4 z-40 rounded-2xl backdrop-blur-2xl bg-obsidian-900/95 border border-white/[0.08] shadow-glass p-4 md:hidden"
          >
            <ul className="flex flex-col gap-1" role="list">
              {navLinks.map(({ to, label, icon }) => {
                const isActive = location.pathname === to;
                return (
                  <li key={to}>
                    <Link
                      to={to}
                      aria-current={isActive ? "page" : undefined}
                      className={`
                        flex items-center gap-2.5 px-4 py-3 rounded-xl text-sm font-medium
                        transition-all duration-200
                        ${
                          isActive
                            ? "text-white bg-violet-600/20 border border-violet-500/20"
                            : "text-slate-400 hover:text-white hover:bg-white/[0.05]"
                        }
                      `}
                    >
                      <span className={isActive ? "text-violet-400" : "text-slate-500"}>
                        {icon}
                      </span>
                      {label}
                    </Link>
                  </li>
                );
              })}
              <li className="mt-2 pt-2 border-t border-white/[0.06]">
                <a
                  href="https://github.com/dilip884400"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 px-4 py-3 rounded-xl text-sm font-medium text-slate-400 hover:text-white hover:bg-white/[0.05] transition-all duration-200"
                >
                  <AiFillGithub size={16} />
                  GitHub Profile
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop for mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-30 bg-black/40 backdrop-blur-sm md:hidden"
            onClick={() => setMobileOpen(false)}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
