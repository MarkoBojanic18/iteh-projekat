import React from "react";
import "./Discount.css";
import { Link } from "react-router-dom";
import specialOffer from "./images/specialOffer.jpg";

const Discount = () => {
  var countDate = new Date("Feb 28, 2022 00:00:00").getTime();
  function endOfDiscout() {
    var now = new Date().getTime();
    var gap = countDate - now;

    var second = 1000;
    var minute = second * 60;
    var hour = minute * 60;
    var day = hour * 24;

    var d = Math.floor(gap / day);
    var h = Math.floor((gap % day) / hour);
    var m = Math.floor((gap % hour) / minute);
    var s = Math.floor((gap % minute) / second);

    document.getElementById("day").innerText = d;
    document.getElementById("hour").innerText = h;
    document.getElementById("minute").innerText = m;
    document.getElementById("second").innerText = s;
  }

  setInterval(function () {
    endOfDiscout();
  }, 1000);
  return (
    <div className="discount">
      <div className="video">
        <Link to="/">
          <img src={specialOffer} alt="" />
        </Link>
      </div>
      <div className="rightSide">
        <div className="tajmer">
          <h1>Special Offer ends in:</h1>
          <div className="countdown">
            <div id="day"></div>
            <div id="hour"></div>
            <div id="minute"></div>
            <div id="second"></div>
          </div>
        </div>
        <div className="text">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates
            veniam, reiciendis temporibus officia minus ipsam maxime
            repellendus, cupiditate tenetur numquam nobis illo! Alias nihil id
            ipsum. In eveniet molestias vitae!
          </p>
          <a href="#">Take a tour</a>
        </div>
      </div>
    </div>
  );
};

export default Discount;
