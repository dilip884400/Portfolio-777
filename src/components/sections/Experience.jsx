import React, { useMemo } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "../common/AnimatedSection";

/**
 * Dynamically formats the Aperra Solutions period with month/year.
 */
function useAperraPerod() {
  return useMemo(() => {
    const now = new Date();
    const months = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
    ];
    return `Dec 2023 – ${months[now.getMonth()]} ${now.getFullYear()}`;
  }, []);
}

function Experience() {
  const aperraPeriod = useAperraPerod();

  const experiences = [
    {
      role: "Frontend Developer",
      company: "Aperra Solutions",
      period: aperraPeriod,
      type: "Full-time",
      location: "Nagpur, India",
      description:
        "Successfully delivered multiple projects under tight deadlines while maintaining high quality. Collaborated with cross-functional teams to design and implement new features, enhancing user experience. Conducted code reviews and mentored interns, fostering continuous improvement.",
      skills: ["React.js", "Next.js", "TypeScript", "React Native", "Tailwind CSS", "Redux"],
      accent: "violet",
    },
    {
      role: "Frontend Developer Trainee",
      company: "FunctionUp",
      period: "Feb 2023 – Jun 2023",
      type: "Trainee",
      location: "Remote",
      description:
        "Gained hands-on experience by working on real-world projects under a mentor's supervision. Developed strong skills in teamwork, task ownership, and meeting deadlines.",
      skills: ["HTML", "CSS", "JavaScript", "React.js", "Git"],
      accent: "purple",
    },
    {
      role: "Bachelor of Computer Application (BCA)",
      company: "RTMNU — Nagpur",
      period: "2018 – 2021",
      type: "Education",
      location: "Nagpur",
      description:
        "Bachelor's in Computer Application. Built a strong foundation in programming, data structures, algorithms, and software development fundamentals.",
      skills: ["C++", "Java", "Databases", "Algorithms"],
      accent: "slate",
    },
  ];

  const accentMap = {
    violet: {
      dot: "bg-violet-500 shadow-violet",
      badge: "border-violet-500/20 bg-violet-500/10 text-violet-300",
      type: "bg-violet-500/10 text-violet-400 border-violet-500/20",
    },
    purple: {
      dot: "bg-purple-500",
      badge: "border-purple-500/20 bg-purple-500/10 text-purple-300",
      type: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    },
    slate: {
      dot: "bg-slate-500",
      badge: "border-slate-500/20 bg-slate-500/10 text-slate-400",
      type: "bg-slate-500/10 text-slate-400 border-slate-500/20",
    },
  };

  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="relative py-24 px-6"
    >
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16">
          <p className="text-violet-400 text-sm font-mono font-medium tracking-widest uppercase mb-3">
            — Experience
          </p>
          <h2 id="experience-heading" className="section-heading">
            My{" "}
            <span className="gradient-text">Journey</span>
          </h2>
          <p className="section-subheading mx-auto">
            Every role, every challenge — building toward something greater.
          </p>
        </AnimatedSection>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            aria-hidden="true"
            className="absolute left-4 sm:left-6 top-2 bottom-2 w-px timeline-line opacity-30 rounded-full"
          />

          <ol className="relative flex flex-col gap-10" aria-label="Professional experience timeline">
            {experiences.map((exp, idx) => {
              const accent = accentMap[exp.accent] || accentMap.violet;
              return (
                <motion.li
                  key={exp.role + exp.company}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.6,
                    delay: idx * 0.1,
                    ease: [0.21, 0.47, 0.32, 0.98],
                  }}
                  className="relative pl-12 sm:pl-16"
                >
                  {/* Dot */}
                  <div
                    aria-hidden="true"
                    className={`absolute left-2 sm:left-4 top-1.5 w-4 h-4 rounded-full border-2 border-obsidian-900 ${accent.dot} shadow-lg`}
                  />

                  {/* Card */}
                  <div className="glass glass-hover rounded-2xl p-5 sm:p-6 border border-white/[0.08] group">
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                      <div>
                        <h3 className="font-display font-semibold text-white text-base">
                          {exp.role}
                        </h3>
                        <p className="text-slate-400 text-sm mt-0.5">{exp.company}</p>
                        {exp.location && (
                          <p className="text-slate-500 text-xs mt-0.5 font-mono">📍 {exp.location}</p>
                        )}
                      </div>
                      <div className="flex flex-col items-end gap-1.5">
                        <span
                          className={`text-xs px-2 py-0.5 rounded-full border font-mono ${accent.type}`}
                        >
                          {exp.type}
                        </span>
                        <span className="text-xs text-slate-500 font-mono">{exp.period}</span>
                      </div>
                    </div>

                    <p className="text-slate-400 text-sm leading-relaxed mb-4">
                      {exp.description}
                    </p>

                    <ul
                      className="flex flex-wrap gap-2"
                      aria-label={`Skills used at ${exp.company}`}
                    >
                      {exp.skills.map((skill) => (
                        <li
                          key={skill}
                          className={`text-xs px-2.5 py-1 rounded-full border font-mono ${accent.badge}`}
                        >
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Experience;
