import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Hero = () => {
  const headlineRef = useRef();
  const statsRef = useRef([]);

  useEffect(() => {
    const letters = headlineRef.current.querySelectorAll("span");

    gsap.from(letters, {
      opacity: 0,
      y: 30,
      stagger: 0.05,
      duration: 1,
    });

    gsap.from(statsRef.current, {
      opacity: 0,
      y: 30,
      stagger: 0.2,
      delay: 0.5,
    });
  }, []);

  const text = "WELCOME ITZ FIZZ".split("");

  return (
    <section className="hero">
      <h1 ref={headlineRef} className="headline">
        {text.map((char, i) => (
          <span key={i}>{char}</span>
        ))}
      </h1>

      <div className="stats">
        {["90% Performance", "80% Speed", "95% UX"].map((item, i) => (
          <div
            key={i}
            ref={(el) => (statsRef.current[i] = el)}
            className="stat"
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;