import React from "react";
import Navbar from "../../layouts/frontend/Navbar.js";
import Slider from "./Slider.js";
import LabelUnderCoverImage from "./labelUnderCoverImage.js";
import Brends from "./Brends.js";
import News from "./news.js";
import FooterHome from "./FooterHome.js";
import Discount from "./Discount.js";
import CardsForCategories from "./CardsForCategories.js";

function Home() {
  return (
    <div>
      
      <Slider />
      <Brends />
      <News />
      <Discount />
      <LabelUnderCoverImage />
      <CardsForCategories />
      <FooterHome />
    </div>
  );
}

export default Home;
