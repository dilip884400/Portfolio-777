
import React from "react";
import { motion } from "framer-motion";
import {
  BsGithub,
  BsBoxArrowUpRight,
  BsGooglePlay,
  BsApple,
} from "react-icons/bs";

import AnimatedSection from "../common/AnimatedSection";

import EAuctionsHub from "../../Assets/Projects/EAuctionsHub.png";
import GKCKlinica from "../../Assets/Projects/GKCKlinica.png";
import HoneyBeeHarry from "../../Assets/Projects/HoneyBeeHarry.png";
import OasisThemes from "../../Assets/Projects/OasisThemes.png";
import Woogyy from "../../Assets/Projects/Woogyy.png";
import Saarthi from "../../Assets/Projects/Saarthi.png";

const projects = [
  // 1. EAuctionsHub Web
  {
    title: "EAuctionsHub",
    subtitle: "Web Application",
    category: "Web",
    description:
      "A property auction platform serving active bidders across India. Developed the core web application with property listings, real-time bidding updates, catalog filters, and secure payment integration.",
    highlights: [
      "Developed the core property auction platform using React.js, Next.js and TypeScript.",
      "Integrated Razorpay with payment failure handling for token deposits and bidding fees.",
      "Optimized asset delivery, SEO and responsive layouts for mobile, tablet and desktop.",
    ],
    image: EAuctionsHub,
    tags: [
      "React.js",
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "REST APIs",
      "Razorpay",
    ],
    links: [
      {
        label: "Live Website",
        url: "https://eauctionshub.com",
        icon: "live",
      },
    ],
    featured: true,
    accent: "violet",
  },

  // 2. EAuctionsHub Mobile
  {
    title: "EAuctionsHub",
    subtitle: "Mobile Application",
    category: "Mobile",
    description:
      "A cross-platform property auction application built from scratch, helping users discover and participate in bank property auctions across India. Published on Google Play and Apple App Store.",
    highlights: [
      "Built the mobile application using React Native and Expo CLI.",
      "Integrated Razorpay payment gateway with secure token payments and bidding fee handling.",
      "Managed app signing, store compliance and production releases on both app stores.",
    ],
    image: EAuctionsHub,
    tags: [
      "React Native",
      "Expo CLI",
      "Nest.js",
      "PostgreSQL",
      "Razorpay",
    ],
    links: [
      {
        label: "Android",
        url: "https://play.google.com/store/apps/details?id=com.diliplovevanshi.exporouterexample&pli=1",
        icon: "android",
      },
      {
        label: "iOS",
        url: "https://apps.apple.com/in/app/e-auctionshub/id6742784366",
        icon: "ios",
      },
    ],
    featured: true,
    accent: "purple",
  },

  // 3. GKC Klinica
  {
    title: "GKC Klinica",
    subtitle: "Healthcare Web Application",
    category: "Web",
    description:
      "A scalable healthcare platform supporting real-time appointment bookings, medical listings, doctor searches and hospital registrations. Built responsive interfaces and secure role-based experiences.",
    highlights: [
      "Developed frontend interfaces using Next.js and Tailwind CSS.",
      "Implemented RBAC with secure JWT cookies for doctors, patients and administrators.",
      "Optimized Core Web Vitals and SEO using structured JSON-LD and sitemaps.",
      "Improved organic search indexing speed by 30%.",
    ],
    image: GKCKlinica,
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Nest.js",
      "PostgreSQL",
      "JWT",
    ],
    links: [
      {
        label: "Live Website",
        url: "https://gkcklinica.com",
        icon: "live",
      },
    ],
    featured: true,
    accent: "fuchsia",
  },

  // 4. Oasis Themes
  {
    title: "Oasis Themes",
    subtitle: "Animated Theme Marketplace",
    category: "Web",
    description:
      "A modern marketplace platform showcasing curated, production-ready React templates and UI themes across multiple verticals, featuring interactive previews and customizable design systems.",
    highlights: [
      "Architected and developed the marketplace using React 19, TypeScript and Vite.",
      "Built fluid animated interfaces and scroll-triggered interactions using Framer Motion.",
      "Created responsive multi-device sandboxes and interactive theme previews.",
      "Engineered modular design systems with customizable light and dark CSS design tokens.",
    ],
    image: OasisThemes,
    tags: [
      "React 19",
      "TypeScript",
      "Vite",
      "Framer Motion",
      "CSS Design Tokens",
    ],
    links: [
      {
        label: "Live Website",
        url: "https://www.oasisthemes.com/",
        icon: "live",
      },
    ],
    featured: true,
    accent: "violet",
  },

  // 5. Woogyy Mobile
  {
    title: "Woogyy",
    subtitle: "Fitness & Dance Training App",
    category: "Mobile",
    description:
      "A fitness and dance training mobile application built from scratch, featuring video-based workouts, exercise categorization, routine tracking and offline media caching. Published on Google Play.",
    highlights: [
      "Built the cross-platform application using React Native, Expo and TypeScript.",
      "Developed a custom video workout playback interface with seamless playback controls.",
      "Implemented exercise categorization, routine tracking and offline media caching.",
      "Managed automated EAS builds, Android keystore signing and Google Play compliance.",
    ],
    image: Woogyy,
    tags: [
      "React Native",
      "Expo",
      "TypeScript",
      "Redux Toolkit",
      "Video Player",
    ],
    links: [
      {
        label: "Live App",
        url: "https://play.google.com/store/apps/details?id=com.woogyy&hl=en_IN",
        icon: "live",
      },
    ],
    featured: true,
    accent: "purple",
  },

  // 6. Saarthi Mobile
  {
    title: "Saarthi",
    subtitle: "Real-time Communication App",
    category: "Mobile",
    description:
      "A cross-platform mobile application currently in active development, designed around reliable real-time communication with messaging and voice calling capabilities.",
    highlights: [
      "Architecting the application using React Native, Expo and TypeScript.",
      "Integrated Stream Chat SDK for real-time one-to-one and group messaging.",
      "Implemented typing indicators, media attachments, unread badges and offline caching.",
      "Engineered VoIP voice calling using Stream Voice and WebRTC SDK with mute, speaker and call lifecycle controls.",
    ],
    image: Saarthi,
    tags: [
      "React Native",
      "Expo",
      "TypeScript",
      "Stream SDK",
      "WebRTC",
    ],
    links: [],
    status: "In Development",
    featured: true,
    accent: "fuchsia",
  },

  // 7. HoneyBee Harry
  {
    title: "HoneyBee Harry",
    subtitle: "Referral & Lead Generation Platform",
    category: "Web",
    description:
      "A referral-based web platform where businesses register their products and members generate leads through referrals. Developed responsive interfaces and scalable frontend architecture.",
    highlights: [
      "Developed responsive user interfaces using Next.js and Tailwind CSS.",
      "Implemented Redux for centralized state management.",
      "Built reusable components and improved the overall user experience.",
    ],
    image: HoneyBeeHarry,
    tags: [
      "Next.js",
      "React.js",
      "Tailwind CSS",
      "Redux",
    ],
    links: [
      {
        label: "Live Application",
        url: "https://app.tryhoneybeeharry.com/signin",
        icon: "live",
      },
    ],
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
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.21, 0.47, 0.32, 0.98],
    },
  },
};

function ProjectLinkIcon({ type }) {
  switch (type) {
    case "android":
      return <BsGooglePlay size={14} />;
    case "ios":
      return <BsApple size={14} />;
    case "github":
      return <BsGithub size={14} />;
    default:
      return <BsBoxArrowUpRight size={14} />;
  }
}

function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="relative py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">

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
            Production applications, scalable web platforms and
            cross-platform mobile experiences I've worked on.
          </p>
        </AnimatedSection>

        {/* Project Cards */}
        <motion.ul
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6"
          role="list"
          aria-label="Projects list"
        >
          {projects.map((project) => {
            const accent =
              accentMap[project.accent] || accentMap.violet;

            return (
              <motion.li
                key={project.title + project.subtitle}
                variants={cardVariants}
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
                className={`
                  group relative glass rounded-2xl overflow-hidden
                  border border-white/[0.08]
                  ${accent.glow} ${accent.border}
                  transition-all duration-300 shadow-glass
                `}
              >

                {/* Project Image */}
                <div className="relative h-52 overflow-hidden bg-obsidian-800">

                  {project.image ? (
                    <img
                      src={project.image}
                      alt={`${project.title} ${project.subtitle} preview`}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-violet-950/60 via-obsidian-900 to-purple-950/60">
                      <span className="text-4xl font-display font-bold gradient-text">
                        {project.title.charAt(0)}
                      </span>
                      <span className="text-slate-500 text-xs font-mono mt-2">
                        {project.subtitle}
                      </span>
                    </div>
                  )}

                  {/* Category */}
                  <span className="absolute top-3 left-3 text-xs px-3 py-1 rounded-full bg-black/60 border border-white/20 text-white backdrop-blur-md font-mono">
                    {project.category}
                  </span>

                  {/* Hover Overlay */}
                  <div
                    className={`
                      absolute inset-0
                      bg-gradient-to-t ${accent.overlay}
                      via-obsidian-900/60 to-transparent
                      opacity-0 group-hover:opacity-100
                      transition-opacity duration-300
                      flex items-center justify-center gap-3 flex-wrap px-4
                    `}
                  >
                    {project.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${link.label} - ${project.title}`}
                        className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.12] border border-white/20 text-white text-sm font-medium backdrop-blur-sm hover:bg-white/20 transition-all duration-200 font-display"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ProjectLinkIcon type={link.icon} />
                        {link.label}
                      </a>
                    ))}

                    {project.links.length === 0 && (
                      <span className="text-white text-sm font-mono bg-black/40 px-4 py-2 rounded-xl border border-white/20">
                        {project.status || "Project Details"}
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 sm:p-6">

                  {/* Title */}
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div>
                      <h3 className="font-display font-semibold text-white text-lg group-hover:text-violet-300 transition-colors duration-200">
                        {project.title}
                      </h3>

                      <p className="text-slate-500 text-xs mt-1 font-mono">
                        {project.subtitle}
                      </p>
                    </div>

                    {project.featured && (
                      <span className="flex-shrink-0 text-xs px-2 py-1 rounded-full border border-violet-500/20 bg-violet-500/10 text-violet-400 font-mono">
                        Featured
                      </span>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Project Highlights */}
                  <div className="mb-5">
                    <p className="text-white text-xs font-semibold uppercase tracking-wider mb-3">
                      Key Contributions
                    </p>

                    <ul className="space-y-2">
                      {project.highlights.map((highlight, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-2 text-slate-400 text-xs leading-relaxed"
                        >
                          <span className="text-violet-400 mt-0.5">
                            ✦
                          </span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`${accent.badge} text-xs`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Project Links */}
                  {project.links.length > 0 ? (
                    <div className="flex flex-wrap gap-3 pt-4 border-t border-white/[0.08]">
                      {project.links.map((link) => (
                        <a
                          key={link.label}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-violet-400 hover:text-violet-300 text-xs font-medium transition-colors"
                        >
                          <ProjectLinkIcon type={link.icon} />
                          {link.label}
                        </a>
                      ))}
                    </div>
                  ) : (
                    <div className="pt-4 border-t border-white/[0.08]">
                      <span className="text-slate-500 text-xs font-mono">
                        {project.status || "Link not available"}
                      </span>
                    </div>
                  )}

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
