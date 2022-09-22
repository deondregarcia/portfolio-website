import React, { useEffect } from "react";
import { imagesIndex } from "../../assets/images/imagesIndex";
import "./PhotoWebsite.css";

const photoWebsiteOptions = {
  root: null,
  threshold: 0.8,
};

const photoWebsiteObserverLeft = new IntersectionObserver(function (
  entries,
  photoWebsiteObserverLeft
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("slide-in-left");
      photoWebsiteObserverLeft.unobserve(entry.target);
    }
  });
},
photoWebsiteOptions);

const photoWebsiteObserverRight = new IntersectionObserver(function (
  entries,
  photoWebsiteObserverRight
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("slide-in-right");
      photoWebsiteObserverRight.unobserve(entry.target);
    }
  });
},
photoWebsiteOptions);

const photoWebsiteImageObserver = new IntersectionObserver(
  function (entries, photoWebsiteImageObserver) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.add("image-appear");
        photoWebsiteImageObserver.unobserve(entry.target);
      }
    });
  },
  {
    root: null,
    threshold: 0.5,
  }
);

const PhotoWebsite = ({
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
          setObservedSection("photo-website");
        }
      });
    },
    {
      root: null,
      threshold: 0.1,
    }
  );

  useEffect(() => {
    const photoWebsiteFeaturesLeft =
      document.querySelectorAll(".pw-feature-left");
    photoWebsiteFeaturesLeft.forEach((feature) => {
      photoWebsiteObserverLeft.observe(feature);
    });

    const photoWebsiteFeaturesRight =
      document.querySelectorAll(".pw-feature-right");
    photoWebsiteFeaturesRight.forEach((feature) => {
      photoWebsiteObserverRight.observe(feature);
    });

    const photoWebsiteImages = document.querySelectorAll(".pw-image");
    photoWebsiteImages.forEach((image) => {
      photoWebsiteImageObserver.observe(image);
    });

    const section = document.querySelectorAll(".pw-container");
    section.forEach((section) => {
      sectionObserver.observe(section);
    });

    return () => {
      photoWebsiteObserverLeft.disconnect();
      photoWebsiteObserverRight.disconnect();
      photoWebsiteImageObserver.disconnect();
    };
  }, []);

  return (
    <div className="pw-container">
      {/* separate div for id so that I can raise it up to account for navbar */}
      <div id="photo-website" className="pw-id" />
      <p className="pw-header">Photography Portfolio Website</p>
      <p className="pw-subheader">
        Tech Stack: React Native, Javascript, Redux, Node, Express, and MySQL
      </p>
      <a
        className="pw-link"
        href="https://deondregarciaphoto.netlify.app"
        target="_blank"
      >
        <h2>Link to live website</h2>
      </a>
      <div className="pw-separator" />
      <div className="pw-what">
        <h3 className="pw-what-header">What is Bird Nest?</h3>
        <p className="pw-header-text">
          Bird Nest is a React Native mobile app which provides a faster and
          more intuitive method of finding housing and roommates for university
          students.
        </p>
      </div>
      <div className="pw-separator" />
      <h3 className="pw-features-header">Features</h3>
      <div className="pw-features">
        <div className="pw-features-col">
          <p className="pw-features-text pw-feature-right">
            Personal profiles with <strong>questionnaires</strong> and displayed
            traits geared towards housing preferences
          </p>
          <p className="pw-features-text pw-feature-left">
            <strong>Sorting algorithms</strong> that rank potential roommates
            based on number of matched preferences
          </p>
        </div>
        <div className="pw-features-col pw-col-right">
          <p className="pw-features-text pw-feature-right">
            <strong>Filtering algorithms</strong> which, on top of the sorting
            feature, allows users to apply more granular and variable
            specifications on which type of roommate is desired
          </p>
          <p className="pw-features-text pw-feature-left">
            <strong>Messaging</strong>, profile editing,{" "}
            <strong>matchmaking</strong>, image uploading, and much, much more
          </p>
        </div>
      </div>
      <div className="pw-separator" />
      <h3 className="pw-features-header">Graphics</h3>
      <p className="pw-subheader">
        From left to right: Landing page, Graduation Gallery page, image
        carousel, and draggable before &amp; after edits slider
      </p>
      <div className="pw-images-container">
        <div className="pw-image-col">
          <img
            className="pw-image"
            src={imagesIndex.PWLanding}
            style={{ animationDelay: "100ms" }}
            alt="Deondre's photography portfolio landing screen"
          />
          <img
            className="pw-image"
            src={imagesIndex.PWGallery}
            style={{ animationDelay: "600ms" }}
            alt="Deondre's photography portfolio gallery screen"
          />
        </div>
        <div className="pw-image-col">
          <img
            className="pw-image"
            src={imagesIndex.PWCarousel}
            style={{ animationDelay: "100ms" }}
            alt="Deondre's photography portfolio image carousel screen"
          />
          <img
            className="pw-image"
            src={imagesIndex.PWEditSlider}
            style={{ animationDelay: "600ms" }}
            alt="Deondre's photography portfolio draggable edit slider screen"
          />
        </div>
      </div>
    </div>
  );
};

export default PhotoWebsite;
