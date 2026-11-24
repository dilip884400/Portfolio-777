import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { AiOutlineDownload } from "react-icons/ai";
import { HiOutlineMail, HiOutlineLocationMarker, HiOutlinePhone, HiOutlineExternalLink } from "react-icons/hi";
import { FiLinkedin, FiGithub } from "react-icons/fi";
import pdf from "../../Assets/Dilip-Lovevanshi-Resume-Resume.pdf";
import AnimatedSection from "../common/AnimatedSection";

/**
 * Dynamically calculates experience from Dec 18, 2023.
 */

function useExperience() {
  return useMemo(() => {
    const start = new Date(2023, 11, 18);
    const now = new Date();

    let years = now.getFullYear() - start.getFullYear();
    let months = now.getMonth() - start.getMonth();

    if (now.getDate() < start.getDate()) {
      months--;
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    if (years >= 3 && months === 0 && now.getDate() < 18) {
      return "3+ years";
    }

    if (years >= 3 && months === 0) {
      return `${years}+ years`;
    }

    return `${years}.${months} years`;
  }, []);
}

function ResumeNew() {
  const experience = useExperience();
  return (
    <motion.main
      id="resume-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      aria-labelledby="resume-heading"
    >
      <div className="pt-24 pb-16 px-6 min-h-screen">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <AnimatedSection className="text-center mb-10">
            <p className="text-violet-400 text-sm font-mono font-medium tracking-widest uppercase mb-3">
              — Resume
            </p>
            <h1 id="resume-heading" className="section-heading">
              Interactive{" "}
              <span className="gradient-text">Resume</span>
            </h1>
            <p className="section-subheading mx-auto">
              Fully responsive web-native resume. You can also download the official PDF version below.
            </p>
          </AnimatedSection>

          {/* Download Button */}
          <AnimatedSection delay={0.1} className="flex justify-center mb-10">
            <a
              href={pdf}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download resume PDF"
              id="resume-download-btn"
              className="btn-primary font-display text-base px-8 py-3.5"
            >
              <AiOutlineDownload size={20} />
              Download PDF Resume
            </a>
          </AnimatedSection>

          {/* Native Web Resume Paper */}
          <AnimatedSection delay={0.2}>
            <div className="glass rounded-3xl overflow-hidden border border-white/[0.08] shadow-2xl p-6 sm:p-12 text-slate-300 font-sans leading-relaxed">
              
              {/* Resume Header */}
              <div className="border-b border-white/[0.08] pb-8 mb-8 text-center sm:text-left flex flex-col sm:flex-row justify-between items-center gap-6">
                <div>
                  <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
                    Dilip Lovevanshi
                  </h2>
                  <p className="text-violet-400 font-mono text-sm sm:text-base mt-1.5 font-medium">
                    Software Engineer / Frontend Developer
                  </p>
                </div>
                <div className="flex flex-col gap-2.5 text-xs sm:text-sm font-mono text-slate-400 items-center sm:items-end">
                  <a href="mailto:dilip.884400@gmail.com" className="flex items-center gap-2 hover:text-violet-300 transition-colors">
                    <HiOutlineMail size={16} /> dilip.884400@gmail.com
                  </a>
                  <a href="tel:+917775026259" className="flex items-center gap-2 hover:text-violet-300 transition-colors">
                    <HiOutlinePhone size={16} /> +91 7775026259
                  </a>
                  <span className="flex items-center gap-2">
                    <HiOutlineLocationMarker size={16} /> Nagpur, India
                  </span>
                  <div className="flex gap-4 mt-2">
                    <a href="https://linkedin.com/in/dilip884400" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-violet-300 transition-colors" aria-label="LinkedIn Profile">
                      <FiLinkedin size={18} />
                    </a>
                    <a href="https://github.com/dilip884400" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-violet-300 transition-colors" aria-label="GitHub Profile">
                      <FiGithub size={18} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Profile Summary */}
              <div className="mb-8">
                <h3 className="text-sm font-mono font-bold tracking-widest text-violet-400 uppercase mb-3">
                  Profile Summary
                </h3>
                <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                  Frontend Developer with {experience} of experience specializing in React.js,
                  Next.js, TypeScript, and modern frontend architectures. Experienced in
                  building scalable, responsive, and accessible web applications, integrating
                  REST APIs and payment gateways, and optimizing application performance.
                  Strong focus on clean architecture, reusable components, state management,
                  and delivering high-quality user experiences.
                </p>
              </div>

              {/* Tech Skills */}
              <div className="mb-8">
                <h3 className="text-sm font-mono font-bold tracking-widest text-violet-400 uppercase mb-4">
                  Technical Expertise
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
  "HTML5",
  "CSS3",
  "JavaScript (ES6+)",
  "TypeScript",
  "React.js",
  "Next.js",
  "React 19",
  "Vite",
  "Tailwind CSS",
  "Bootstrap",
  "Material UI",
  "Redux Toolkit",
  "Context API",
  "REST APIs",
  "GraphQL",
  "Apollo Client",
  "Jest",
  "React Testing Library",
  "Framer Motion",
  "GSAP",
  "Highcharts.js",
  "WCAG 2.1 AA",
  "Core Web Vitals",
  "SEO",
  "Git/GitHub",
  "Figma",
  "Chrome DevTools",
  "Postman",
  "AWS",
].map((skill) => (
  <span
    key={skill}
    className="px-3 py-1.5 rounded-xl border border-white/[0.06] bg-white/[0.02] text-slate-300 text-xs sm:text-sm font-mono"
  >
    {skill}
  </span>
))}
                </div>
              </div>

              {/* Work Experience */}
              <div className="mb-8">
                <h3 className="text-sm font-mono font-bold tracking-widest text-violet-400 uppercase mb-6">
                  Experience
                </h3>
                <div className="space-y-6">
                  {/* Aperra Solutions */}
                  <div className="relative border-l border-white/[0.08] pl-6 ml-2">
                    <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-violet-500 shadow-violet" />
                    <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center gap-1.5 mb-3">
                      <div>
                        <h4 className="text-base sm:text-lg font-display font-semibold text-white">
                          Frontend Developer
                        </h4>
                        <p className="text-slate-400 text-sm">Aperra Solutions</p>
                      </div>
                      <div className="text-left sm:text-right">
                        <span className="inline-block text-xs px-2.5 py-0.5 rounded-full border border-violet-500/20 bg-violet-500/10 text-violet-400 font-mono mb-1">
                          Dec 2023 – Present
                        </span>
                        <p className="text-slate-500 text-xs font-mono">Nagpur, India</p>
                      </div>
                    </div>
                   <ul className="list-disc pl-5 space-y-1.5 text-slate-400 text-sm">
  <li>
    Spearheaded the frontend development of high-performance, responsive web
    applications using Next.js, React.js, and modern TypeScript.
  </li>
  <li>
    Built accessible user interfaces aligned with WCAG 2.1 AA standards using
    semantic HTML, keyboard support, and ARIA roles.
  </li>
  <li>
    Developed reusable Tailwind CSS and Material UI component libraries,
    improving team feature implementation speed by 25%.
  </li>
  <li>
    Reduced initial page load times by 40% through route-based code splitting,
    image optimization, and state management improvements.
  </li>
  <li>
    Conducted code reviews, established coding standards, and mentored junior
    interns to maintain clean and scalable codebases.
  </li>
</ul>
                  </div>

                  {/* FunctionUp */}
                  <div className="relative border-l border-white/[0.08] pl-6 ml-2">
                    <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-slate-500" />
                    <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center gap-1.5 mb-3">
                      <div>
                        <h4 className="text-base sm:text-lg font-display font-semibold text-white">
                          Frontend Developer Trainee
                        </h4>
                        <p className="text-slate-400 text-sm">FunctionUp</p>
                      </div>
                      <div className="text-left sm:text-right">
                        <span className="inline-block text-xs px-2.5 py-0.5 rounded-full border border-white/[0.08] bg-white/[0.02] text-slate-400 font-mono mb-1">
                          Feb 2023 – Jun 2023
                        </span>
                        <p className="text-slate-500 text-xs font-mono">Remote</p>
                      </div>
                    </div>
                    <ul className="list-disc pl-5 space-y-1.5 text-slate-400 text-sm">
                      <li>Gained hands-on experience by working on real-world projects under a mentor's supervision.</li>
                      <li>Developed strong skills in teamwork, task ownership, and meeting deadlines.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Projects */}
              <div className="mb-8">
                <h3 className="text-sm font-mono font-bold tracking-widest text-violet-400 uppercase mb-6">
                  Projects
                </h3>
                <div className="space-y-6">
                  {/* E AuctionsHub */}
                  <div className="p-5 rounded-2xl border border-white/[0.06] bg-white/[0.01]">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-2">
                      <h4 className="font-display font-semibold text-white text-base flex items-center gap-2">
                        E AuctionsHub Mobile App
                        <span className="text-xs px-2 py-0.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-emerald-400 font-mono font-normal">Active</span>
                      </h4>
                      <div className="flex gap-3 text-xs font-mono text-violet-400">
                        <a href="https://play.google.com/store/apps/details?id=com.diliplovevanshi.exporouterexample&pli=1" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:underline">Android <HiOutlineExternalLink /></a>
                        <a href="https://apps.apple.com/in/app/e-auctionshub/id6742784366" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:underline">iOS <HiOutlineExternalLink /></a>
                      </div>
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed mb-3">
                      EAuctionsHub connects users with verified bank auctions for properties, helping discover and participate in 5000+ bank property auctions across India. Led the frontend development, achieving a smooth user experience. Deployed the app to Google Play and Apple App Store.
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {["React Native", "Expo", "NestJS", "PostgreSQL", "Razorpay"].map((tag) => (
                        <span key={tag} className="text-[10px] sm:text-xs px-2 py-0.5 rounded-md bg-white/[0.04] text-slate-400 font-mono">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* GKC Klinica */}
                  <div className="p-5 rounded-2xl border border-white/[0.06] bg-white/[0.01]">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-2">
                      <h4 className="font-display font-semibold text-white text-base flex items-center gap-2">
                        GKC Klinica Web Application
                        <span className="text-xs px-2 py-0.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-emerald-400 font-mono font-normal">Active</span>
                      </h4>
                      <div className="flex gap-3 text-xs font-mono text-violet-400">
                        <a href="https://gkcklinica.com" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:underline">Deploy <HiOutlineExternalLink /></a>
                      </div>
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed mb-3">
                      Developed a full-stack healthcare platform enabling global appointment bookings, doctor searches, and hospital registrations. Implemented profile management for doctors and hospitals, allowing claiming, updating, and verification of profiles. Applied SEO best practices for 30% faster indexing.
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {["Next.js", "Tailwind CSS", "NestJS", "AWS"].map((tag) => (
                        <span key={tag} className="text-[10px] sm:text-xs px-2 py-0.5 rounded-md bg-white/[0.04] text-slate-400 font-mono">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* HoneyBee Harry */}
                  <div className="p-5 rounded-2xl border border-white/[0.06] bg-white/[0.01]">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-2">
                      <h4 className="font-display font-semibold text-white text-base flex items-center gap-2">
                        HoneyBee Harry Referral Club
                        <span className="text-xs px-2 py-0.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-emerald-400 font-mono font-normal">Active</span>
                      </h4>
                      <div className="flex gap-3 text-xs font-mono text-violet-400">
                        <a href="https://honeybeeharry.com" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:underline">Deploy <HiOutlineExternalLink /></a>
                      </div>
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed mb-3">
                      A referral-based web platform where businesses register products and members generate leads. Designed and developed a seamless, responsive UI, implemented Redux for efficient state management, and built a scalable architecture.
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {["Next.js", "Tailwind CSS", "Redux"].map((tag) => (
                        <span key={tag} className="text-[10px] sm:text-xs px-2 py-0.5 rounded-md bg-white/[0.04] text-slate-400 font-mono">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Education */}
              <div>
                <h3 className="text-sm font-mono font-bold tracking-widest text-violet-400 uppercase mb-4">
                  Education
                </h3>
                <div className="border-l border-white/[0.08] pl-6 ml-2">
                  <h4 className="text-base sm:text-lg font-display font-semibold text-white">
                    Bachelor of Computer Application (BCA)
                  </h4>
                  <p className="text-slate-400 text-sm">RTMNU (Rashtrasant Tukadoji Maharaj Nagpur University)</p>
                  <p className="text-slate-500 text-xs font-mono mt-1">2018 – 2021 | Nagpur, India</p>
                </div>
              </div>

            </div>
          </AnimatedSection>
        </div>
      </div>
    </motion.main>
  );
}

export default ResumeNew;
