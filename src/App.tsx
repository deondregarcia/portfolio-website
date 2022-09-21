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
      <Blissely />
      <BirdNest />
      <PhotoWebsite />
      <TradingBot />
    </div>
  );
}

export default App;
