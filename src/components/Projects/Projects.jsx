import React from "react";
import { motion } from "framer-motion";
import Projects from "../sections/Projects";

function ProjectsPage() {
  return (
    <motion.main
      id="projects-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="pt-24">
        <Projects />
      </div>
    </motion.main>
  );
}

export default ProjectsPage;
