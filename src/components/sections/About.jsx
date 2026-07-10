import React, { useMemo } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "../common/AnimatedSection";
import myImg from "../../Assets/About1.jpg";
import { HiCode, HiLightBulb, HiHeart, HiAcademicCap } from "react-icons/hi";
import { BsRocketTakeoff } from "react-icons/bs";

/**
 * Dynamically calculates experience from Dec 18, 2023.
 */
function useExperience() {
  return useMemo(() => {
    const start = new Date(2023, 11, 18);
    const now = new Date();
    let years = now.getFullYear() - start.getFullYear();
    let months = now.getMonth() - start.getMonth();
    if (now.getDate() < start.getDate()) months--;
    if (months < 0) { years--; months += 12; }
    const totalMonths = years * 12 + months;
    if (totalMonths < 12) return `${totalMonths} months`;
    const remainder = months;
    if (remainder === 0) return `${years}+ years`;
    return `${years}.${Math.floor((remainder / 12) * 10)}+ years`;
  }, []);
}

const bentoItems = [
  {
    icon: <BsRocketTakeoff size={22} className="text-violet-400" />,
    title: "Frontend Developer at Aperra Solutions",
    desc: "Successfully delivered multiple projects under tight deadlines. Collaborated with cross-functional teams to design and implement features enhancing user experience.",
    className: "lg:col-span-2",
    accent: "from-violet-600/10 to-purple-600/5",
  },
  {
    icon: <HiCode size={24} className="text-fuchsia-400" />,
    title: "Mentored Interns",
    desc: "Conducted code reviews and mentored interns at Aperra Solutions, fostering continuous improvement in team quality.",
    className: "",
    accent: "from-fuchsia-600/10 to-pink-600/5",
  },
  {
    icon: <HiLightBulb size={24} className="text-amber-400" />,
    title: "FunctionUp Trainee",
    desc: "Gained hands-on experience working on real-world projects under mentor supervision. Developed strong skills in teamwork and task ownership.",
    className: "",
    accent: "from-amber-600/10 to-orange-600/5",
  },
  {
    icon: <HiAcademicCap size={24} className="text-emerald-400" />,
    title: "BCA — RTMNU, Nagpur",
    desc: "Bachelor of Computer Application (2018 – 2021). Strong foundation in programming, algorithms, and software development principles.",
    className: "",
    accent: "from-emerald-600/10 to-teal-600/5",
  },
  {
    icon: <HiHeart size={24} className="text-rose-400" />,
    title: "Beyond Code",
    desc: "🌍 Travelling · 🎮 Gaming · 🌐 Exploring the internet · 🤖 AI Enthusiast",
    className: "",
    accent: "from-rose-600/10 to-pink-600/5",
  },
];

const staggerContainer = {
  visible: { transition: { staggerChildren: 0.09 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 30, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] },
  },
};

function About() {
  const experience = useExperience();

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative py-24 px-6"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16">
          <p className="text-violet-400 text-sm font-mono font-medium tracking-widest uppercase mb-3">
            — About Me
          </p>
          <h2 id="about-heading" className="section-heading">
            The Story{" "}
            <span className="gradient-text">Behind the Code</span>
          </h2>
          <p className="section-subheading mx-auto">
            A passionate Software Engineer with {experience} of experience, building
            scalable and beautiful digital products.
          </p>
        </AnimatedSection>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {/* Avatar card */}
          <AnimatedSection
            direction="left"
            className="lg:col-span-1 lg:row-span-2"
          >
            <div className="glass glass-hover rounded-2xl p-6 h-full flex flex-col items-center justify-center gap-5 min-h-64 border border-white/[0.08] bg-gradient-to-br from-violet-600/[0.06] to-transparent">
              <div className="relative">
                <div className="w-36 h-36 rounded-full overflow-hidden border-2 border-violet-500/30 shadow-violet">
                  <img
                    src={myImg}
                    alt="Dilip Lovevanshi"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-emerald-500 rounded-full border-2 border-obsidian-900 flex items-center justify-center">
                  <div className="w-2 h-2 bg-emerald-300 rounded-full animate-pulse" />
                </div>
              </div>
              <div className="text-center">
                <h3 className="font-display font-bold text-lg text-white">
                  Dilip Lovevanshi
                </h3>
                <p className="text-slate-400 text-sm mt-0.5">Software Engineer</p>
                <p className="text-slate-500 text-xs mt-1 font-mono">
                  📍 Nagpur, India
                </p>
                <p className="text-slate-500 text-xs mt-0.5 font-mono">
                  📧 dilip.884400@gmail.com
                </p>
              </div>
              <blockquote className="text-slate-400 text-sm italic text-center border-l-2 border-violet-500/40 pl-3">
                "Building products that make a difference"
              </blockquote>
            </div>
          </AnimatedSection>

          {/* Bento Cards */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {bentoItems.map(({ icon, title, desc, className, accent }) => (
              <motion.div
                key={title}
                variants={cardVariant}
                whileHover={{ scale: 1.02, y: -2 }}
                className={`
                  glass rounded-2xl p-5 border border-white/[0.08] 
                  bg-gradient-to-br ${accent}
                  hover:border-white/[0.14] hover:shadow-glass-hover 
                  transition-all duration-300 cursor-default
                  ${className}
                `}
              >
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-white/[0.06] border border-white/[0.08] flex items-center justify-center">
                    {icon}
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-white text-sm mb-1.5">
                      {title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
