import React, { useEffect } from "react";
import "./Landing.css";

const Landing = ({
  setObservedSection,
}: {
  setObservedSection: React.Dispatch<React.SetStateAction<string>>;
}) => {
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
      Landing
    </div>
  );
};

export default Landing;
