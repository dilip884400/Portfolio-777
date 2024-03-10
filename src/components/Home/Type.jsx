import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Front-End Developer",
          "Next JS Developer",
          "React Developer"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 90,
      }}
    />
  );
}

export default Type;
