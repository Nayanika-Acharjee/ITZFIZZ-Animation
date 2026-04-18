import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const RideScene = () => {
  const bikeRef = useRef();
  const roadRef = useRef();
  const bgRef = useRef();

  useEffect(() => {
  // mountains (slow)
  gsap.to(".mountains", {
    y: -100,
    scrollTrigger: {
      trigger: ".ride-section",
      scrub: true,
    },
  });

  // trees (medium)
  gsap.to(".trees", {
    y: -200,
    scrollTrigger: {
      trigger: ".ride-section",
      scrub: true,
    },
  });

  // road (fast)
  gsap.to(".road", {
    y: -800,
    scrollTrigger: {
      trigger: ".ride-section",
      scrub: true,
    },
  });

  // bike
  gsap.to(bikeRef.current, {
    y: -40,
    rotation: 2,
    scrollTrigger: {
      trigger: ".ride-section",
      scrub: true,
    },
  });
}, []);

  useEffect(() => {
    // Road movement (main illusion)
    gsap.to(roadRef.current, {
      y: -1000,
      ease: "none",
      scrollTrigger: {
        trigger: ".ride-section",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    // Bike slight motion
    gsap.to(bikeRef.current, {
      y: -40,
      rotation: 2,
      ease: "power1.out",
      scrollTrigger: {
        trigger: ".ride-section",
        scrub: true,
      },
    });

    // Background parallax
    gsap.to(bgRef.current, {
      y: -200,
      ease: "none",
      scrollTrigger: {
        trigger: ".ride-section",
        scrub: true,
      },
    });
  }, []);

  return (
    <section className="ride-section">
      {/* Background */}
      <div ref={bgRef} className="background"></div>

      {/* Road */}
      <div ref={roadRef} className="road"></div>

      {/* Bike */}
      <img
  ref={bikeRef}
  className="bike"
  src="https://cdn.pixabay.com/photo/2012/05/29/00/43/motorcycle-49278_1280.png"
  alt="bike"
/>
      <img
  ref={bgRef}
  className="mountains"
  src="https://cdn.pixabay.com/photo/2017/01/31/13/14/mountains-2029299_1280.png"
  alt="mountains"
/>
<img
  className="trees"
  src="https://cdn.pixabay.com/photo/2016/03/31/19/58/tree-1296097_1280.png"
  alt="trees"
/>
    </section>
  );
};

export default RideScene;