import React from "react";
import "./App.css";
import BirdNest from "./sections/BirdNest/BirdNest";
import Blissely from "./sections/Blissely/Blissely";
import Landing from "./sections/Landing/Landing";
import Navbar from "./sections/Navbar/Navbar";
import PhotoWebsite from "./sections/PhotoWebsite/PhotoWebsite";
import TradingBot from "./sections/TradingBot/TradingBot";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing />
      <div className="section-separator" />
      <Blissely />
      <div className="section-separator" />
      <BirdNest />
      <div className="section-separator" />
      <PhotoWebsite />
      <div className="section-separator" />
      <TradingBot />
    </div>
  );
}

export default App;
