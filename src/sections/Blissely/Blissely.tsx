import React from "react";
import { imagesIndex } from "../../assets/images/imagesIndex";
import "./Blissely.css";

const Blissely = () => {
  return (
    <div className="blissely-container">
      <h1 className="blissely-header">Blissely</h1>
      <p className="blissely-subheader">
        Tech Stack: TypeScript, React, Node, Express, and MySQl hosted on AWS
        Aurora
      </p>
      <a className="blissely-link" href="https://blissely.herokuapp.com">
        <h2>https://blissely.herokuapp.com</h2>
      </a>
      <div className="blissely-description">
        <div className="blissely-what">
          <h3 className="blissely-what-header">What is Blissely?</h3>
          <p className="blissely-header-text">
            Blissely is a full stack, production-ready web app that I developed
            so that friends and family can create and edit shared bucket lists.
          </p>
          <p className="blissely-header-text">
            Blissely divides its bucket lists into four categories for tweakable
            privacy settings:
          </p>
              <div className="blissely-text category-one">
                <h4 style={{ textAlign: "center"}}>Private</h4> 
                Can only be viewed by its
                creator/owner
              </div>
              <div className="blissely-text category-two">
                <h4 style={{ textAlign: "center"}}>Shared</h4> Can only be viewed by its owner
                and friends that the owner chooses to share it with
              </div>
              <div className="blissely-text category-three">
                <h4 style={{ textAlign: "center"}}>Public - Friend</h4> Can be viewed by the
                owner and all of the owner's friends
              </div>
              <div className="blissely-text category-four">
                <h4 style={{ textAlign: "center"}}>Public - Random</h4> Can be viewed by anyone,
                even if not logged in
              </div>
        </div>
        <div className="blissely-features">
          <h3 className="blissely-features-header">Features</h3>
              <div className="blissely-text feature-one">
                <strong>User authentication</strong> with Google OAuth 2.0 and
                PassportJS
              </div>
              <div className="blissely-text feature-two">
                Extensive <strong>authorization flows</strong> which protect
                routes and block content based on a myriad of considerations for
                maximum privacy configurations for the user
              </div>
              <div className="blissely-text feature-three" >
                <strong>CRUD</strong> functionality on a <strong>MySQL</strong>{" "}
                database - hosted on <strong>AWS Aurora</strong> through{" "}
                <strong>RESTful APIs</strong>
              </div>
              <div className="blissely-text feature-four">
                Responsive UI design with highly interactive components and
                flexible CSS breakpoints
              </div>
              <div className="blissely-text feature-five">
                <strong>Database normalization</strong> up to Third Normal Form
              </div>
              <div className="blissely-text feature-six">
                <strong>Friend management</strong> system
              </div>
        </div>
      </div>
      <div className="blissely-details">
        <img
          className="blissely-graphic-flow"
          src={imagesIndex.BucketListPrivacy}
          alt="Bucket List Auth Flow"
        />
          <img
            className="blissely-graphic-flow"
            src={imagesIndex.BlisselyDatabaseSchema}
            alt="Blissely database schema"
          />
        <img
          className="blissely-graphic-flow"
          src={imagesIndex.ViewingProfiles}
          alt="Viewing Profiles Auth Flow"
        />
      </div>
    </div>
  );
};

export default Blissely;
