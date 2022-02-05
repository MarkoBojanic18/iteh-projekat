import React from "react";
import { Link } from "react-router-dom";
import "./labelUnderCoverImage.css";

function labelundercoverimage() {
  return (
    <div className="audiCardsLabel">
      <div className="audi-button1">
        <a
          className="icon"
          href="https://cc.porscheinformatik.com/cc-rs/sr_RS_AUDI/A/models"
        >
          <i className="fas fa-car fa-5x"></i>
        </a>
        <p>Configurator</p>
      </div>

      <div className="audi-button2">
        <a
          className="icon"
          href="https://stockcars.porscheinformatik.com/mainframe/api/redirect/home-page?country=RS&amp;brand=AUDI"
        >
          <i className="fas fa-book-open fa-5x"></i>
        </a>
        <p>Immediately available</p>
      </div>

      <div className="audi-button3">
        <a className="icon" href="">
          <i className="fas fa-user-tie fa-5x"></i>
        </a>
        <p>Find your diler</p>
      </div>
    </div>
  );
}

export default labelundercoverimage;
