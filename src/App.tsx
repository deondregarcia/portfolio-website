import React, { useState, useEffect } from "react";
import "./App.css";
import BirdNest from "./sections/BirdNest/BirdNest";
import Blissely from "./sections/Blissely/Blissely";
import Contact from "./sections/Contact/Contact";
import Landing from "./sections/Landing/Landing";
import Navbar from "./sections/Navbar/Navbar";
import PhotoWebsite from "./sections/PhotoWebsite/PhotoWebsite";
import TradingBot from "./sections/TradingBot/TradingBot";

function App() {
  // state for intersection observer, possible values are: landing, blissely, photo-website, bird-nest, and crypto-bot
  const [observedSection, setObservedSection] = useState<string>("landing");

  return (
    <div className="App">
      <Navbar observedSection={observedSection} />
      <Landing setObservedSection={setObservedSection} />
      <div className="section-separator" />
      <Blissely setObservedSection={setObservedSection} />
      <div className="section-separator" />
      <PhotoWebsite setObservedSection={setObservedSection} />
      <div className="section-separator" />
      <BirdNest setObservedSection={setObservedSection} />
      <div className="section-separator" />
      <TradingBot setObservedSection={setObservedSection} />
      <div className="section-separator" />
      <Contact />
    </div>
  );
}

export default App;
