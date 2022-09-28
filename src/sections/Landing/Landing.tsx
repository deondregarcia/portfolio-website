import React, { useEffect, Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { LandingAnimation } from "./LandingAnimationCompressed";
import { OrbitControls, Stars } from "@react-three/drei";
import { FaWindowClose } from "react-icons/fa";
import "./Landing.css";

const Landing = ({
  setObservedSection,
}: {
  setObservedSection: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const [landingTextState, setLandingTextState] = useState(true);

  const sectionObserver = new IntersectionObserver(
    function (entries, sectionObserver) {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        } else {
          setObservedSection("landing");
        }
      });
    },
    {
      root: null,
      threshold: 0.1,
    }
  );

  useEffect(() => {
    const section = document.querySelectorAll(".landing-container");
    section.forEach((section) => {
      sectionObserver.observe(section);
    });

    return () => {};
  }, []);

  return (
    <div id="landing" className="landing-container">
      <div
        className={
          landingTextState
            ? "landing-text-container"
            : "landing-text-container landing-text-container-removed"
        }
      >
        <FaWindowClose
          onClick={() => setLandingTextState(false)}
          className="landing-text-icon"
        />
        <h2 className="landing-text-header">
          Welcome to my programming portfolio!
        </h2>
        <h3 className="landing-text">
          If the animation has not loaded yet,{" "}
          <span className="landing-text-wait">
            please give it a few seconds
          </span>
          .
        </h3>
        <h3 className="landing-text">
          Once it has, feel free to click or tap and rotate around to look at
          the image previews for my projects.
        </h3>
        <h3 className="landing-text">
          Afterwards, click above to see more details on each project.
        </h3>
      </div>
      <Canvas camera={{ position: [0, 5, 10] }}>
        <OrbitControls />
        <Stars />
        <ambientLight intensity={0.4} />
        <directionalLight intensity={0.8} position={[10, 90, -30]} />
        <directionalLight intensity={0.3} position={[10, 0, 0]} />
        <directionalLight intensity={0.3} position={[10, 0, 40]} />
        <directionalLight intensity={0.3} position={[-50, 0, 40]} />
        <Suspense fallback={null}>
          <LandingAnimation position={[0, 0, 0]} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Landing;
