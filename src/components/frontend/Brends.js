import react from "react";
import audi_logo from "./images/audi_logo.png";
import mercedes_logo from "./images/amg.png";
import skoda_logo from "./images/skodaBlack.png";
import tesla_logo from "./images/teslaBlack.png";
import bmw_logo from "./images/bmwBlack.png";
import jaguar_logo from "./images/jaguar.png";
import nissan_logo from "./images/hyundai.png";
import alfa_logo from "./images/opel.png";
import mitshubishi_logo from "./images/mitshubishiBlack.png";
import renault_logo from "./images/renault.png";

import { Link } from "react-router-dom";
import "./brends.css";

function Brends() {
  return (
    <div className="brends">
      <Link to="/">
        <img src={audi_logo} alt="" />
      </Link>
      <Link to="/">
        <img src={mercedes_logo} alt="" />
      </Link>
      <Link to="/">
        <img src={skoda_logo} alt="" />
      </Link>
      <Link to="/">
        <img src={tesla_logo} alt="" />
      </Link>
      <Link to="/">
        <img src={bmw_logo} alt="" />
      </Link>
      <Link to="/">
        <img src={jaguar_logo} alt="" />
      </Link>
      <Link to="/">
        <img src={nissan_logo} alt="" />
      </Link>
      <Link to="/">
        <img src={alfa_logo} alt="" />
      </Link>
      <Link to="/">
        <img src={mitshubishi_logo} alt="" />
      </Link>
      <Link to="/">
        <img src={renault_logo} alt="" />
      </Link>
    </div>
  );
}

export default Brends;
