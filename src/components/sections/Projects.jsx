import React from "react";
import { motion } from "framer-motion";
import { BsGithub, BsBoxArrowUpRight, BsGooglePlay, BsApple } from "react-icons/bs";
import AnimatedSection from "../common/AnimatedSection";
import EAuctionsHub from "../../Assets/Projects/EAuctionsHub.png";
import GKCKlinica from "../../Assets/Projects/GKCKlinica.png";
import HoneyBeeHarry from "../../Assets/Projects/HoneyBeeHarry.png";

const projects = [
  {
    title: "E AuctionsHub — Mobile App",
    description:
      "EAuctionsHub connects users with verified bank auctions for properties. Helped users discover and participate in 5000+ bank property auctions across India. Led the frontend development, achieving a smooth UX. Deployed successfully to Google Play and Apple App Store.",
    image: EAuctionsHub,
    tags: ["React Native", "Expo", "Nest.js", "PostgreSQL", "Razorpay"],
    github: null,
    demo: null,
    appLinks: {
      android: "https://play.google.com/store/apps/details?id=com.diliplovevanshi.exporouterexample&pli=1",
      ios: "https://apps.apple.com/in/app/e-auctionshub/id6742784366",
    },
    featured: true,
    accent: "violet",
  },
  {
    title: "GKC Klinica — Web Application",
    description:
      "Full-stack healthcare platform enabling global appointment bookings, doctor searches, and hospital registrations. Implemented profile management for doctors and hospitals. Applied SEO best practices, leading to 30% faster search engine indexing.",
    image: GKCKlinica,
    tags: ["Next.js", "Tailwind CSS", "Nest.js", "AWS"],
    github: null,
    demo: "https://gkcklinica.com",
    appLinks: null,
    featured: true,
    accent: "fuchsia",
  },
  {
    title: "HoneyBee Harry Referral Club",
    description:
      "A referral-based web platform where businesses register their products and members generate leads. Designed seamless responsive UI to enhance lead generation. Implemented Redux for efficient state management and Next.js for scalable architecture.",
    image: HoneyBeeHarry,
    tags: ["Next.js", "Tailwind CSS", "Redux"],
    github: null,
    demo: "https://honeybeeharry.com",
    appLinks: null,
    featured: false,
    accent: "purple",
  },
];

const accentMap = {
  violet: {
    badge: "badge",
    glow: "hover:shadow-violet",
    border: "hover:border-violet-500/30",
    overlay: "from-violet-900/90",
  },
  fuchsia: {
    badge: "badge badge-fuchsia",
    glow: "hover:shadow-fuchsia",
    border: "hover:border-fuchsia-500/30",
    overlay: "from-fuchsia-900/90",
  },
  purple: {
    badge: "badge",
    glow: "hover:shadow-violet",
    border: "hover:border-purple-500/30",
    overlay: "from-purple-900/90",
  },
};

const containerVariants = {
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] },
  },
};

function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="relative py-24 px-6"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16">
          <p className="text-violet-400 text-sm font-mono font-medium tracking-widest uppercase mb-3">
            — Portfolio
          </p>
          <h2 id="projects-heading" className="section-heading">
            Things I've{" "}
            <span className="gradient-text">Built</span>
          </h2>
          <p className="section-subheading mx-auto">
            Production applications used by real users — from mobile apps to
            full-stack web platforms.
          </p>
        </AnimatedSection>

        {/* Project Cards Grid */}
        <motion.ul
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          role="list"
          aria-label="Projects list"
        >
          {projects.map((project) => {
            const accent = accentMap[project.accent] || accentMap.violet;
            return (
              <motion.li
                key={project.title}
                variants={cardVariants}
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className={`
                  group relative glass rounded-2xl overflow-hidden border border-white/[0.08]
                  ${accent.glow} ${accent.border}
                  transition-all duration-300 shadow-glass
                  ${project.featured ? "sm:col-span-1" : ""}
                `}
              >
                {/* Image with hover overlay */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Hover overlay with links */}
                  <div
                    className={`
                      absolute inset-0 bg-gradient-to-t ${accent.overlay} via-obsidian-900/60 to-transparent
                      opacity-0 group-hover:opacity-100 transition-opacity duration-300
                      flex items-center justify-center gap-3 flex-wrap px-4
                    `}
                  >
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.title} source code on GitHub`}
                        className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.12] border border-white/20 text-white text-sm font-medium backdrop-blur-sm hover:bg-white/20 transition-all duration-200 font-display"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <BsGithub size={16} />
                        Code
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.title} live demo`}
                        className="flex items-center gap-2 px-4 py-2 rounded-xl bg-violet-600/80 border border-violet-500/40 text-white text-sm font-medium backdrop-blur-sm hover:bg-violet-500/90 transition-all duration-200 font-display"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <BsBoxArrowUpRight size={14} />
                        Live
                      </a>
                    )}
                    {project.appLinks && project.appLinks.android && (
                      <a
                        href={project.appLinks.android}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.title} on Google Play`}
                        className="flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600/80 border border-emerald-500/40 text-white text-sm font-medium backdrop-blur-sm hover:bg-emerald-500/90 transition-all duration-200 font-display"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <BsGooglePlay size={14} />
                        Android
                      </a>
                    )}
                    {project.appLinks && project.appLinks.ios && (
                      <a
                        href={project.appLinks.ios}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.title} on App Store`}
                        className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-600/80 border border-slate-500/40 text-white text-sm font-medium backdrop-blur-sm hover:bg-slate-500/90 transition-all duration-200 font-display"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <BsApple size={14} />
                        iOS
                      </a>
                    )}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-display font-semibold text-white text-base group-hover:text-violet-300 transition-colors duration-200">
                      {project.title}
                    </h3>
                    {project.featured && (
                      <span className="flex-shrink-0 text-xs px-2 py-0.5 rounded-full border border-violet-500/20 bg-violet-500/10 text-violet-400 font-mono">
                        Featured
                      </span>
                    )}
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  {/* Tags */}
                  <ul className="flex flex-wrap gap-2" aria-label="Technologies used">
                    {project.tags.map((tag) => (
                      <li key={tag} className={accent.badge}>
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
    </section>
  );
}

export default Projects;
