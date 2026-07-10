import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "../common/AnimatedSection";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiGit,
  DiMongodb,
} from "react-icons/di";
import {
  SiTypescript,
  SiVisualstudiocode,
  SiPostman,
  SiNetlify,
  SiVercel,
  SiCss3,
  SiTailwindcss,
  SiNextdotjs,
  SiExpo,
  SiMui,
  SiGraphql,
  SiApollographql,
  SiAndroidstudio,
  SiGithubactions,
} from "react-icons/si";
import { AiFillHtml5, AiFillAndroid, AiFillApple } from "react-icons/ai";
import { TbBrandRedux, TbBrandReactNative, TbApi } from "react-icons/tb";
import { FaBootstrap, FaRobot, FaAws, FaChartLine } from "react-icons/fa";
import { BsCursorFill } from "react-icons/bs";

const categories = ["All", "Frontend", "Mobile", "Backend & DB", "Tools"];

const skills = [
  // Frontend
  { name: "HTML5", icon: <AiFillHtml5 />, category: "Frontend", color: "text-orange-400" },
  { name: "CSS3", icon: <SiCss3 />, category: "Frontend", color: "text-blue-400" },
  { name: "JavaScript", icon: <DiJavascript1 />, category: "Frontend", color: "text-yellow-400" },
  { name: "TypeScript", icon: <SiTypescript />, category: "Frontend", color: "text-blue-500" },
  { name: "React.js", icon: <DiReact />, category: "Frontend", color: "text-cyan-400" },
  { name: "Next.js", icon: <SiNextdotjs />, category: "Frontend", color: "text-slate-300" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, category: "Frontend", color: "text-teal-400" },
  { name: "Material UI", icon: <SiMui />, category: "Frontend", color: "text-blue-500" },
  { name: "Bootstrap", icon: <FaBootstrap />, category: "Frontend", color: "text-purple-400" },
  { name: "Redux", icon: <TbBrandRedux />, category: "Frontend", color: "text-violet-400" },
  { name: "Highcharts", icon: <FaChartLine />, category: "Frontend", color: "text-emerald-400" },
  { name: "Apollo Client", icon: <SiApollographql />, category: "Frontend", color: "text-violet-300" },
  // Mobile
  { name: "React Native", icon: <TbBrandReactNative />, category: "Mobile", color: "text-cyan-300" },
  { name: "Expo", icon: <SiExpo />, category: "Mobile", color: "text-slate-200" },
  { name: "Android", icon: <AiFillAndroid />, category: "Mobile", color: "text-green-400" },
  { name: "iOS", icon: <AiFillApple />, category: "Mobile", color: "text-slate-300" },
  // Backend & DB
  { name: "GraphQL API", icon: <SiGraphql />, category: "Backend & DB", color: "text-pink-600" },
  { name: "REST API", icon: <TbApi />, category: "Backend & DB", color: "text-cyan-400" },
  { name: "Node.js", icon: <DiNodejs />, category: "Backend & DB", color: "text-green-400" },
  { name: "MongoDB", icon: <DiMongodb />, category: "Backend & DB", color: "text-green-500" },
  { name: "AWS", icon: <FaAws />, category: "Backend & DB", color: "text-amber-400" },
  // Tools
  { name: "Git", icon: <DiGit />, category: "Tools", color: "text-orange-500" },
  { name: "VS Code", icon: <SiVisualstudiocode />, category: "Tools", color: "text-blue-500" },
  { name: "Android Studio", icon: <SiAndroidstudio />, category: "Tools", color: "text-green-500" },
  { name: "Postman", icon: <SiPostman />, category: "Tools", color: "text-orange-400" },
  { name: "Netlify", icon: <SiNetlify />, category: "Tools", color: "text-teal-300" },
  { name: "Vercel", icon: <SiVercel />, category: "Tools", color: "text-slate-200" },
  { name: "Claude", icon: <FaRobot />, category: "Tools", color: "text-amber-400" },
  { name: "Cursor AI", icon: <BsCursorFill />, category: "Tools", color: "text-slate-300" },
  { name: "CI/CD Pipeline", icon: <SiGithubactions />, category: "Tools", color: "text-blue-400" },
];

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.04,
      duration: 0.4,
      ease: [0.21, 0.47, 0.32, 0.98],
    },
  }),
  exit: { opacity: 0, scale: 0.8, transition: { duration: 0.2 } },
};

function Skills() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? skills
      : skills.filter((s) => s.category === activeCategory);

  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="relative py-24 px-6"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-12">
          <p className="text-violet-400 text-sm font-mono font-medium tracking-widest uppercase mb-3">
            — Skills
          </p>
          <h2 id="skills-heading" className="section-heading">
            My{" "}
            <span className="gradient-text">Tech Stack</span>
          </h2>
          <p className="section-subheading mx-auto">
            Technologies I work with to craft fast, accessible, and beautiful
            web & mobile experiences.
          </p>
        </AnimatedSection>

        {/* Category Filter Tabs */}
        <AnimatedSection delay={0.1} className="flex flex-wrap justify-center gap-2 mb-12">
          <div
            role="tablist"
            aria-label="Filter skills by category"
            className="flex flex-wrap justify-center gap-2"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                role="tab"
                id={`tab-${cat.replace(/\s+/g, "-").toLowerCase()}`}
                aria-selected={activeCategory === cat}
                onClick={() => setActiveCategory(cat)}
                className={`
                  px-4 py-2 rounded-xl text-sm font-medium font-display transition-all duration-200
                  ${
                    activeCategory === cat
                      ? "bg-violet-600 text-white shadow-violet border border-violet-500/40"
                      : "bg-white/[0.04] border border-white/[0.08] text-slate-400 hover:text-white hover:bg-white/[0.08] hover:border-white/[0.12]"
                  }
                `}
              >
                {cat}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Skills Grid */}
        <AnimatePresence mode="wait">
          <motion.ul
            key={activeCategory}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3"
            role="list"
            aria-label={`${activeCategory} skills`}
          >
            {filtered.map((skill, i) => (
              <motion.li
                key={skill.name}
                custom={i}
                variants={badgeVariants}
                whileHover={{ y: -4, scale: 1.06 }}
                whileTap={{ scale: 0.95 }}
                className="glass glass-hover rounded-2xl p-4 flex flex-col items-center gap-2 border border-white/[0.08] cursor-default"
                title={skill.name}
              >
                <span
                  className={`text-3xl ${skill.color}`}
                  aria-hidden="true"
                >
                  {skill.icon}
                </span>
                <span className="text-slate-400 text-xs font-mono text-center leading-tight">
                  {skill.name}
                </span>
              </motion.li>
            ))}
          </motion.ul>
        </AnimatePresence>
      </div>
    </section>
  );
}

export default Skills;
