import React from "react";
import mercedes_news from "./images/mercedesNews.jpg";
import talisman_news from "./images/talismanNews.jpg";
import insignia_news from "./images/insigniaNews.jpg";
import { Link } from "react-router-dom";
import "./newsStyle.css";

function News() {
  return (
    <div className="body">
      <div className="cont">
        <div className="mycard">
          <div className="cimg">
            <Link to="/">
              <img src={mercedes_news} alt="" />
            </Link>
          </div>
          <div className="cdetail">
            <p style={{ fontWeight: "bold" }}>Mercedes S500</p>
            <p>
              As part of the automotive legend, the new Mercedes-S500 clearly
              highlights attractive performance, exclusive comfort and
              unsurpassed design.
            </p>
          </div>
        </div>

        <div className="mycard">
          <div className="cimg">
            <Link to="/">
              <img src={talisman_news} alt="" />
            </Link>
          </div>
          <div className="cdetail">
            <p style={{ fontWeight: "bold" }}>Renault Talisman</p>
            <p>
              The Renault Talisman is a large family car manufactured by the
              French car manufacturer Renault since 2015.
            </p>
          </div>
        </div>

        <div className="mycard">
          <div className="cimg">
            <Link to="/">
              <img src={insignia_news} alt="" />
            </Link>
          </div>
          <div className="cdetail">
            <p style={{ fontWeight: "bold" }}>Opel Insignia</p>
            <p>
              The Opel Insignia is a D-segment large family car developed and
              produced by the German car manufacturer...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;
