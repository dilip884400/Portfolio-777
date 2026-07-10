import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { BsArrowDown, BsFileEarmarkPerson } from "react-icons/bs";
import { HiOutlineSparkles } from "react-icons/hi";
import myImg from "../../Assets/About1.jpg";
import pdf from "../../Assets/Dilip-Lovevanshi-Resume-Resume.pdf";

const socials = [
  {
    href: "https://github.com/dilip884400",
    icon: <AiFillGithub size={20} />,
    label: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/dilip884400/",
    icon: <FaLinkedinIn size={18} />,
    label: "LinkedIn",
  },
  {
    href: "https://twitter.com/DilipLovev18944",
    icon: <AiOutlineTwitter size={20} />,
    label: "Twitter",
  },
  {
    href: "https://www.instagram.com/lovevanshi.dilip/",
    icon: <AiFillInstagram size={20} />,
    label: "Instagram",
  },
];

/**
 * Dynamically calculates experience from Dec 18, 2023 to current date.
 * Updates automatically each month.
 */
function useExperience() {
  return useMemo(() => {
    const start = new Date(2023, 11, 18); // Dec 18, 2023
    const now = new Date();
    let years = now.getFullYear() - start.getFullYear();
    let months = now.getMonth() - start.getMonth();
    if (now.getDate() < start.getDate()) months--;
    if (months < 0) {
      years--;
      months += 12;
    }
    const totalMonths = years * 12 + months;
    if (totalMonths < 12) return `${totalMonths} mo`;
    const yearStr = years.toString();
    const remainder = months;
    if (remainder === 0) return `${yearStr}+ yrs`;
    return `${yearStr}.${Math.floor((remainder / 12) * 10)}+ yrs`;
  }, []);
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.21, 0.47, 0.32, 0.98] },
  },
};

function Hero() {
  const experience = useExperience();

  return (
    <section
      id="home"
      aria-label="Hero section"
      className="relative min-h-screen flex items-center justify-center px-6 pt-28 pb-16 overflow-hidden"
    >
      {/* Background orbs */}
      <div
        aria-hidden="true"
        className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-violet-600/[0.08] blur-3xl pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full bg-fuchsia-500/[0.06] blur-3xl pointer-events-none"
      />

      <div className="relative z-10 max-w-5xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* ── Left: Text Content ── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-6 order-2 lg:order-1"
          >
            {/* Status badge */}
            <motion.div variants={itemVariants} className="flex">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/[0.08] text-emerald-400 text-xs font-mono">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Available for opportunities
              </div>
            </motion.div>

            {/* Greeting */}
            <motion.div variants={itemVariants} className="space-y-2">
              <p className="text-slate-400 text-lg font-medium flex items-center gap-2">
                Hi there!{" "}
                <motion.span
                  animate={{ rotate: [0, 15, -10, 15, 0] }}
                  transition={{ duration: 1.5, delay: 1, repeat: Infinity, repeatDelay: 3 }}
                  className="inline-block text-2xl"
                  aria-hidden="true"
                >
                  👋
                </motion.span>
              </p>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                I'm{" "}
                <span className="gradient-text-hero">
                  Dilip
                </span>
                <br />
                <span className="text-slate-100">Lovevanshi</span>
              </h1>
            </motion.div>

            {/* Typewriter */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-2 text-xl font-display font-medium text-slate-300"
            >
              <HiOutlineSparkles className="text-violet-400 flex-shrink-0" size={20} />
              <div className="text-violet-300">
                <Typewriter
                  options={{
                    strings: [
                      "Software Engineer",
                      "Frontend Developer",
                      "React.js Specialist",
                      "React Native Developer",
                      "Next.js Developer",
                    ],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 70,
                    delay: 50,
                  }}
                />
              </div>
            </motion.div>

            {/* Bio */}
            <motion.p
              variants={itemVariants}
              className="text-slate-400 text-base leading-relaxed max-w-lg"
            >
              Frontend Developer with {experience} experience specializing in{" "}
              <span className="text-violet-300 font-medium">React.js</span>,{" "}
              <span className="text-violet-300 font-medium">Next.js</span>,{" "}
              <span className="text-violet-300 font-medium">TypeScript</span>, and{" "}
              <span className="text-violet-300 font-medium">React Native</span>.
              Building scalable, responsive applications with performance
              optimization and high-quality user experiences. 🚀
            </motion.p>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-3">
              <a
                href={pdf}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download resume PDF"
                className="btn-primary font-display"
                id="hero-download-resume"
              >
                <BsFileEarmarkPerson size={17} />
                Download Resume
              </a>
              <Link
                to="/project"
                aria-label="View my projects"
                className="btn-outline font-display"
                id="hero-view-projects"
              >
                View Projects
              </Link>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex items-center gap-3">
              <span className="text-slate-600 text-xs font-mono">find me on</span>
              <div className="h-px flex-1 max-w-12 bg-white/[0.06]" />
              <ul className="flex items-center gap-2" aria-label="Social profiles">
                {socials.map(({ href, icon, label }) => (
                  <li key={label}>
                    <motion.a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${label} profile`}
                      whileHover={{ scale: 1.18, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      className="flex items-center justify-center w-9 h-9 rounded-xl border border-white/[0.08] bg-white/[0.04] text-slate-400 hover:text-violet-400 hover:border-violet-500/30 hover:bg-violet-500/[0.08] transition-colors duration-200"
                    >
                      {icon}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          {/* ── Right: Avatar ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="flex justify-center items-center order-1 lg:order-2"
          >
            <div className="relative">
              {/* Rotating gradient ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                aria-hidden="true"
                className="absolute inset-0 rounded-full"
                style={{
                  background:
                    "conic-gradient(from 0deg, #7c3aed, #d946ef, #7c3aed)",
                  padding: "2px",
                  borderRadius: "9999px",
                }}
              />

              {/* Floating animation wrapper */}
              <motion.div
                animate={{ y: [-8, 8, -8] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10"
              >
                {/* Avatar container */}
                <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-full overflow-hidden">
                  {/* Gradient border */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-violet-600 via-purple-600 to-fuchsia-600 p-0.5">
                    <div className="w-full h-full rounded-full overflow-hidden bg-obsidian-900">
                      <img
                        src={myImg}
                        alt="Dilip Lovevanshi — Software Engineer"
                        className="w-full h-full object-cover"
                        loading="eager"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Stats badges — floating overlays */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                className="absolute -left-16 sm:-left-20 top-1/4 z-20 glass rounded-2xl px-3 py-2 shadow-glass border border-white/[0.10]"
                aria-hidden="true"
              >
                <p className="text-xs text-slate-400 font-mono">Experience</p>
                <p className="text-white font-display font-bold text-lg leading-none">{experience}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.4, duration: 0.5 }}
                className="absolute -right-16 sm:-right-20 bottom-1/3 z-20 glass rounded-2xl px-3 py-2 shadow-glass border border-white/[0.10]"
                aria-hidden="true"
              >
                <p className="text-xs text-slate-400 font-mono">Projects</p>
                <p className="text-white font-display font-bold text-lg leading-none">10+</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* ── Scroll indicator ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="flex justify-center mt-16"
          aria-hidden="true"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-1 text-slate-600 text-xs font-mono"
          >
            <span>scroll</span>
            <BsArrowDown size={14} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
