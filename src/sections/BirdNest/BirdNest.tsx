import React, { useEffect } from "react";
import { imagesIndex } from "../../assets/images/imagesIndex";
import "./BirdNest.css";

const birdNestOptions = {
  root: null,
  threshold: 0.8,
};

const birdNestObserverLeft = new IntersectionObserver(function (
  entries,
  birdNestObserverLeft
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("slide-in-left");
      birdNestObserverLeft.unobserve(entry.target);
    }
  });
},
birdNestOptions);

const birdNestObserverRight = new IntersectionObserver(function (
  entries,
  birdNestObserverRight
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("slide-in-right");
      birdNestObserverRight.unobserve(entry.target);
    }
  });
},
birdNestOptions);

const BirdNest = () => {
  useEffect(() => {
    const birdNestFeaturesLeft = document.querySelectorAll(".bn-feature-left");
    birdNestFeaturesLeft.forEach((feature) => {
      birdNestObserverLeft.observe(feature);
    });

    const birdNestFeaturesRight =
      document.querySelectorAll(".bn-feature-right");
    birdNestFeaturesRight.forEach((feature) => {
      birdNestObserverRight.observe(feature);
    });

    return () => {
      birdNestObserverLeft.disconnect();
      birdNestObserverRight.disconnect();
    };
  }, []);

  return (
    <div className="bn-container">
      {/* separate div for id so that I can raise it up to account for navbar */}
      <div id="bird-nest" className="bn-id" />
      <p className="bn-header">Bird Nest</p>
      <p className="bn-subheader">
        Tech Stack: React Native, Javascript, Redux, Node, Express, and MySQL
      </p>
      <a
        className="bn-link"
        href="https://github.com/deondregarcia/bird-nest"
        target="_blank"
      >
        <h2>Link to GitHub</h2>
      </a>
      <div className="bn-separator" />
      <div className="bn-what">
        <h3 className="bn-what-header">What is Bird Nest?</h3>
        <p className="bn-header-text">
          Bird Nest is a React Native mobile app I developed as{" "}
          <strong>Product Owner</strong> in a team of 7 as part of my San Diego
          Supercomputer Center. The app provides a faster and more intuitive
          method of finding housing and roommates for university students.
        </p>
      </div>
      <div className="bn-separator" />
      <h3 className="bn-features-header">Features</h3>
      <div className="bn-features">
        <div className="bn-features-col">
          <p className="bn-features-text bn-feature-right">
            Personal profiles with <strong>questionnaires</strong> and displayed
            traits geared towards housing preferences
          </p>
          <p className="bn-features-text bn-feature-left">
            <strong>Sorting algorithms</strong> that rank potential roommates
            based on number of matched preferences
          </p>
        </div>
        <div className="bn-features-col bn-col-right">
          <p className="bn-features-text bn-feature-right">
            <strong>Filtering algorithms</strong> which, on top of the sorting
            feature, allows users to apply more granular and variable
            specifications on which type of roommate is desired
          </p>
          <p className="bn-features-text bn-feature-left">
            <strong>Messaging</strong>, profile editing,{" "}
            <strong>matchmaking</strong>, image uploading, and much, much more
          </p>
        </div>
      </div>
      <div className="bn-separator" />
      <h3 className="bn-features-header">Graphics</h3>
      <p className="bn-subheader">
        {" "}
        From left to right: Profile screen, Home screen, Message feed, and Chat
        screen
      </p>
      <div className="bn-images-container">
        <div className="bn-image-col">
          <img
            className="bn-image"
            src={imagesIndex.BirdNestProfile}
            alt="Bird Nest profile screen"
          />
          <img
            className="bn-image"
            src={imagesIndex.BirdNestHome}
            alt="Bird Nest home screen"
          />
        </div>
        <div className="bn-image-col">
          <img
            className="bn-image"
            src={imagesIndex.BirdNestMessageFeed}
            alt="Bird Nest message feed screen"
          />
          <img
            className="bn-image"
            src={imagesIndex.BirdNestChat}
            alt="Bird Nest chat screen"
          />
        </div>
      </div>
    </div>
  );
};

export default BirdNest;
