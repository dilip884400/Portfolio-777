import React from "react";
import { motion } from "framer-motion";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const socials = [
  {
    href: "https://github.com/dilip884400",
    icon: <AiFillGithub size={18} />,
    label: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/dilip884400/",
    icon: <FaLinkedinIn size={16} />,
    label: "LinkedIn",
  },
  {
    href: "https://twitter.com/DilipLovev18944",
    icon: <AiOutlineTwitter size={18} />,
    label: "Twitter",
  },
  {
    href: "https://www.instagram.com/lovevanshi.dilip/",
    icon: <AiFillInstagram size={18} />,
    label: "Instagram",
  },
];

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      role="contentinfo"
      className="relative z-10 border-t border-white/[0.06] bg-obsidian-900/60 backdrop-blur-xl"
    >
      <div className="max-w-5xl mx-auto px-6 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex flex-col items-center sm:items-start gap-1">
            <span className="font-display font-bold text-white text-base">
              Dilip<span className="gradient-text">.dev</span>
            </span>
            <p className="text-slate-500 text-xs font-mono">
              Designed & built by Dilip Lovevanshi
            </p>
          </div>

          {/* Social Icons */}
          <ul className="flex items-center gap-3" aria-label="Social media links">
            {socials.map(({ href, icon, label }) => (
              <li key={label}>
                <motion.a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${label} profile`}
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.92 }}
                  className="flex items-center justify-center w-9 h-9 rounded-xl border border-white/[0.08] bg-white/[0.03] text-slate-400 hover:text-violet-400 hover:border-violet-500/30 hover:bg-violet-500/[0.08] transition-colors duration-200"
                >
                  {icon}
                </motion.a>
              </li>
            ))}
          </ul>

          {/* Copyright */}
          <p className="text-slate-500 text-xs font-mono text-center sm:text-right">
            © {year} · All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
