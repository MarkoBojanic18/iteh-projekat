import React from "react";
import { Link } from "react-router-dom";
import audi_logo from "./images/audi_logo.png";
import carRim from "./images/ram.jpg";
import spoiler from "./images/toyota.jpg";
import pakTreger from "./images/camaro.jpg";
import tires from "./images/kawasaki.png";
import steeringWheel from "./images/recreationalVehicle.jpg";

import "./CardsWithCategories.css";

function CardsForCategories() {
  return (
    <div className="contain">
      <div className="firstRow">
        <div className="category1">
          <p>Pickup truck</p>
          <img src={carRim} alt="" />
          <button className="btn btn-primary" id="button">
            Read more
          </button>
        </div>
        <div className="category2">
          <p>SUV</p>
          <img src={spoiler} alt="" />
          <button className="btn btn-primary" id="button">
            Read more
          </button>
        </div>
      </div>

      <div className="secondRow">
        <div className="category3">
          <p>Sport car</p>
          <img src={pakTreger} alt="" />
          <button className="btn btn-primary" id="button">
            Read more
          </button>
        </div>
        <div className="category4">
          <p>Quad bike</p>
          <img src={tires} alt="" />

          <button className="btn btn-primary" id="button">
            Read more
          </button>
        </div>
        <div className="category5">
          <p>Recreational Vehicle</p>
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
