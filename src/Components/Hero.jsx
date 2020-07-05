import React from "react";
import img from "../Images/fields-md.jpg";

function Hero(props) {
  return (
    <div className="hero">
      <img src={img} alt="" />
      <div className="city-date-container">
        <p className="date">{props.date}</p>
        <h2 className="city-name">{props.city}</h2>
      </div>
    </div>
  );
}

export default Hero;
