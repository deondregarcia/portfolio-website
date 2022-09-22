import React, { useEffect } from "react";
import { imagesIndex } from "../../assets/images/imagesIndex";
import "./TradingBot.css";

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

const TradingBot = ({
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
          setObservedSection("crypto-bot");
        }
      });
    },
    {
      root: null,
      threshold: 0.1,
    }
  );

  useEffect(() => {
    const birdNestFeaturesLeft = document.querySelectorAll(".tb-feature-left");
    birdNestFeaturesLeft.forEach((feature) => {
      birdNestObserverLeft.observe(feature);
    });

    const birdNestFeaturesRight =
      document.querySelectorAll(".tb-feature-right");
    birdNestFeaturesRight.forEach((feature) => {
      birdNestObserverRight.observe(feature);
    });

    const section = document.querySelectorAll(".tb-container");
    section.forEach((section) => {
      sectionObserver.observe(section);
    });

    return () => {
      birdNestObserverLeft.disconnect();
      birdNestObserverRight.disconnect();
    };
  }, []);

  return (
    <div className="tb-container">
      {/* separate div for id so that I can raise it up to account for navbar */}
      <div id="trading-bot" className="tb-id" />
      <p className="tb-header">Cryptocurrency Trading Bot</p>
      <p className="tb-subheader">Tech Stack: Python, Flask, and React</p>
      <a
        className="tb-link"
        href="https://github.com/deondregarcia/crypto-trading-bot"
        target="_blank"
      >
        <h2>Link to GitHub</h2>
      </a>
      <div className="tb-separator" />
      <div className="tb-what">
        <h3 className="tb-what-header">What is this trading bot?</h3>
        <p className="tb-header-text">
          This is a Python crypto trading bot which utilizes the Binance API
          platform to gather market data and feeds that input into functions
          that calculate technical indicators. These indicators in turn are fed
          into algorithms I designed to model popular trading strategies, which
          output buy, sell, or hold signals.
        </p>
      </div>
      <div className="tb-separator" />
      <h3 className="tb-features-header">Features</h3>
      <div className="tb-features">
        <div className="tb-features-col">
          <p className="tb-features-text tb-feature-right">
            <strong>Consumes Binance API</strong> to get real-time market data
            and generate buy or sell signals based on different sets of
            indicators
          </p>
          <p className="tb-features-text tb-feature-left">
            Pulls historical data and tests strategies through backtesting
          </p>
        </div>
        <div className="tb-features-col tb-col-right">
          <p className="tb-features-text tb-feature-right">
            <strong>Algorithms</strong> which calculate technical indicators and
            model conventional trading strategies
          </p>
          <p className="tb-features-text tb-feature-left">
            Trading bot interfaced with <strong>Flask server</strong> for remote
            interaction via <strong>React front-end</strong> client
          </p>
        </div>
      </div>
    </div>
  );
};

export default TradingBot;
