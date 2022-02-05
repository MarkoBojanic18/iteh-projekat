import React from "react";
import { Link } from "react-router-dom";
import audi_logo from "./images/audi_logo.png";
import carRim from "./images/carRim.png";
import spoiler from "./images/spoiler.jpg";
import pakTreger from "./images/packTreger.jpeg";
import tires from "./images/tires.jpg";
import steeringWheel from "./images/steeringWheel.jpg";

import "./CardsWithCategories.css";

function CardsForCategories() {
  return (
    <div className="contain">
      <div className="firstRow">
        <div class="category1">
          <p>Car rims</p>
          <img src={carRim} alt="" />
          <button className="btn btn-primary" id="button">
            Read more
          </button>
        </div>
        <div class="category2">
          <p>Spoilers</p>
          <img src={spoiler} alt="" />
          <button className="btn btn-primary" id="button">
            Read more
          </button>
        </div>
      </div>

      <div className="secondRow">
        <div class="category3">
          <p>Pak Treger</p>
          <img src={pakTreger} alt="" />
          <button className="btn btn-primary" id="button">
            Read more
          </button>
        </div>
        <div class="category4">
          <p>Tires</p>
          <img src={tires} alt="" />

          <button className="btn btn-primary" id="button">
            Read more
          </button>
        </div>
        <div class="category5">
          <p>Steering wheel</p>
          <img src={steeringWheel} alt="" />

          <button className="btn btn-primary" id="button">
            Read more
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardsForCategories;
