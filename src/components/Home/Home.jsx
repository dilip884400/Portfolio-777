import React from "react";
import { motion } from "framer-motion";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Experience from "../sections/Experience";
import Contact from "../sections/Contact";

function Home() {
  return (
    <motion.main
      id="home-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Hero />
      <About />
      <Experience />
      <Contact />
    </motion.main>
  );
}

export default Home;
