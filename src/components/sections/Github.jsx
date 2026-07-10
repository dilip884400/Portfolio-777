import React from "react";
import AnimatedSection from "../common/AnimatedSection";
import GitHubCalendar from "react-github-calendar";

function Github() {
  return (
    <section
      id="github"
      aria-labelledby="github-heading"
      className="relative py-16 px-6"
    >
      <div className="max-w-4xl mx-auto">
        <AnimatedSection className="text-center mb-10">
          <p className="text-violet-400 text-sm font-mono font-medium tracking-widest uppercase mb-3">
            — Contribution Graph
          </p>
          <h2 id="github-heading" className="section-heading">
            Days I{" "}
            <span className="gradient-text">Code</span>
          </h2>
          <p className="section-subheading mx-auto">
            Consistent shipping, every day. Open source & personal projects.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="glass rounded-2xl p-6 sm:p-8 border border-white/[0.08] overflow-x-auto">
            <GitHubCalendar
              username="dilip884400"
              blockSize={14}
              blockMargin={4}
              colorScheme="dark"
              theme={{
                dark: ["#0d1117", "#1e1b4b", "#4c1d95", "#7c3aed", "#a855f7"],
              }}
              fontSize={13}
              aria-label="Dilip's GitHub contribution calendar"
            />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

export default Github;
