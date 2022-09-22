import React from "react";
import { imagesIndex } from "../../assets/images/imagesIndex";
import "./BirdNest.css";

const BirdNest = () => {
  return <div className="bn-container">
    <p className="bn-header">Bird Nest</p>
    <p className="bn-subheader">
        Tech Stack: React Native, Javascript, Redux, Node, Express, and MySQL 
      </p>
      <a className="bn-link" href="https://github.com/deondregarcia/bird-nest">
        <h2>Link to GitHub</h2>
      </a>
    <div className="bn-separator" />
    <div className="bn-what">
      <h3 className="bn-what-header">What is Bird Nest?</h3>
      <p className="bn-header-text">Bird Nest is a React Native mobile app which provides a faster and more intuitive method of finding housing and roommates for university students.</p>
    </div>
    <div className="bn-separator" />
      <h3 className="bn-features-header">Features</h3>
    <div className="bn-features">
      <div className="bn-features-col">
        <p className="bn-features-text">Personal profiles with <strong>questionnaires</strong> and displayed traits geared towards housing preferences</p>
        <p className="bn-features-text"><strong>Sorting algorithms</strong> that rank potential roommates based on number of matched preferences</p>
        <p className="bn-features-text">Matchmaking system</p>
      </div>
      <div className="bn-features-col">
      <p className="bn-features-text"><strong>Filtering algorithms</strong> which, on top of the sorting feature, allows users to apply more granular and variable specifications on which type of roommate is desired</p>
      <p className="bn-features-text"><strong>Messaging</strong> capabilities</p>
      <p className="bn-features-text">Profile editing, image uploading, and much, much more</p>
      </div>
    </div>
    <div className="bn-images-container">
      <img src={imagesIndex.BirdNestProfile} alt="Bird Nest profile screen" />
      <img src={imagesIndex.BirdNestHome} alt="Bird Nest home screen" />
      <img src={imagesIndex.BirdNestMessageFeed} alt="Bird Nest message feed screen" />
      <img src={imagesIndex.BirdNestChat} alt="Bird Nest chat screen" />
    </div>
  </div>;
};

export default BirdNest;