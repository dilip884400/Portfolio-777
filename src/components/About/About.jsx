import React from "react";
import { motion } from "framer-motion";
import Skills from "../sections/Skills";
import Github from "../sections/Github";

function About() {
  return (
    <motion.main
      id="about-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="pt-24">
        <Skills />
        <Github />
      </div>
    </motion.main>
  );
}

export default About;
