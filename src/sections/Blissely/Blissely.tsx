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
          <ul>
            <li>
              <p className="blissely-text">
                <strong>Private</strong> lists can only be viewed by its
                creator/owner
              </p>
            </li>
            <li>
              <p className="blissely-text">
                <strong>Shared</strong> lists can only be viewed by its owner
                and friends that the owner chooses to share it with
              </p>
            </li>
            <li>
              <p className="blissely-text">
                <strong>Public - Friend</strong> lists can be viewed by the
                owner and all of the owner's friends
              </p>
            </li>
            <li>
              <p className="blissely-text">
                <strong>Public - Random</strong> lists can be viewed by anyone,
                even if they're not logged in
              </p>
            </li>
          </ul>
        </div>
        <div className="blissely-features">
          <h3 className="blissely-features-header">Features</h3>
          <ul>
            <li>
              <p className="blissely-text">
                <strong>User authentication</strong> with Google OAuth 2.0 and
                PassportJS
              </p>
            </li>
            <li>
              <p className="blissely-text">
                Extensive <strong>authorization flows</strong> which protect
                routes and block content based on a myriad of considerations for
                maximum privacy configurations for the user
              </p>
            </li>
            <li>
              <p className="blissely-text">
                <strong>CRUD</strong> functionality on a <strong>MySQL</strong>{" "}
                database - hosted on <strong>AWS Aurora</strong> through{" "}
                <strong>RESTful APIs</strong>
              </p>
            </li>
            <li>
              <p className="blissely-text">
                Responsive UI design with highly interactive components and
                flexible CSS breakpoints
              </p>
            </li>
            <li>
              <p className="blissely-text">
                <strong>Database normalization</strong> up to Third Normal Form
              </p>
            </li>
            <li>
              <p className="blissely-text">
                <strong>Friend management</strong> system
              </p>
            </li>
          </ul>
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
          src={imagesIndex.ViewingProfiles}
          alt="Viewing Profiles Auth Flow"
        />
        <img
          className="blissely-graphic-flow"
          src={imagesIndex.BlisselyDatabaseSchema}
          alt="Blissely database schema"
        />
      </div>
    </div>
  );
};

export default Blissely;
