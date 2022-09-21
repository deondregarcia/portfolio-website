import React, { useEffect } from "react";
import { imagesIndex } from "../../assets/images/imagesIndex";
import "./Blissely.css";

const blisselyOptions = {
  root: null,
  threshold: 0.3,
  rootMargin: " 0px 0px -80px 0px"
};

const blisselyObserver = new IntersectionObserver(function(entries, blisselyObserver) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("feature-appear");
      blisselyObserver.unobserve(entry.target);
    }
  })
}, blisselyOptions)

const Blissely = () => {

  useEffect(() => {
    const featureBubbles = document.querySelectorAll(".feature-bubble");
    featureBubbles.forEach(feature => {
      blisselyObserver.observe(feature);
    })

    return () => {
      blisselyObserver.disconnect();
    }
  }, [])

  return (
    <div className="blissely-container">
      <h1 className="blissely-header">Blissely</h1>
      <p className="blissely-subheader">
        Tech Stack: TypeScript, React, Node, Express, and MySQL hosted on AWS
        Aurora
      </p>
      <a className="blissely-link" href="https://blissely.herokuapp.com">
        <h2>Live website: https://blissely.herokuapp.com</h2>
      </a>
      <div className="blissely-description">
      <div className="blissely-separator" />
        <div className="blissely-what">
          <div className="blissely-header-wrapper">
            <h3 className="blissely-what-header">What is Blissely?</h3>
            <p className="blissely-header-text">
              Blissely is a full stack, production-ready web app where friends and family can create and edit shared bucket lists.
            </p>
            <p className="blissely-header-text">
              Blissely blocks users from seeing other bucket lists based on four categories:
            </p>
          </div>
          <div className="blissely-text category-one">
            <h4>Private</h4> 
            Can only be viewed by its
            creator/owner
          </div>
          <div className="blissely-text category-two">
            <h4>Shared</h4> Can only be viewed by its owner
            and friends that the owner chooses to share it with
          </div>
          <div className="blissely-text category-three">
            <h4>Public - Friend</h4> Can be viewed by the
            owner and all of the owner's friends
          </div>
          <div className="blissely-text category-four">
            <h4>Public - Random</h4> Can be viewed by anyone,
            even if not logged in
          </div>
        </div>
        <div className="blissely-separator" />
        <div className="blissely-features">
          <h3 className="blissely-features-header">Features</h3>
              <div className="blissely-text feature-one feature-bubble" style={{ animationDuration: '1000ms' }}>
                <strong>User authentication</strong> with Google OAuth 2.0 and
                PassportJS
              </div>
              <div className="blissely-text feature-two feature-bubble" style={{ animationDuration: '900ms' }}>
                Extensive <strong>authorization flows</strong> which protect
                routes and block content based on a myriad of considerations for
                maximum privacy configurations for the user
              </div>
              <div className="blissely-text feature-three feature-bubble" style={{ animationDuration: '500ms' }}>
                <strong>CRUD</strong> functionality on a <strong>MySQL</strong>{" "}
                database - hosted on <strong>AWS Aurora</strong> through{" "}
                <strong>RESTful APIs</strong>
              </div>
              <div className="blissely-text feature-four feature-bubble" style={{ animationDuration: '800ms' }}>
                Responsive UI design with highly interactive components and
                flexible CSS breakpoints
              </div>
              <div className="blissely-text feature-five feature-bubble" style={{ animationDuration: '1300ms' }}>
                <strong>Database normalization</strong> up to Third Normal Form
              </div>
              <div className="blissely-text feature-six feature-bubble" style={{ animationDuration: '1100ms' }}>
                <strong>Friend management</strong> system
              </div>
        </div>
      </div>
      <div className="blissely-separator" />
      <div className="blissely-details">
      <h3 className="blissely-features-header">Graphics</h3>
      <p className="blissely-subheader">
        Control flow for authorization checks, database schema, and website screenshots
      </p>
        <div className="blissely-graphics-wrapper">
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
        <div className="blissely-graphics-wrapper">
          <img className="blissely-screenshot" src={imagesIndex.BlisselyLanding} alt="Blissely landing page" />
          <img className="blissely-screenshot" src={imagesIndex.BlisselyHome} alt="Blissely sample home page" />
        </div>
      </div>
    </div>
  );
};

export default Blissely;
