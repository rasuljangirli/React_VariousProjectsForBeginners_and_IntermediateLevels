import React from "react";
import imgOne from "../images/imgOne.jpg";
import "../css/card.css";

function Card({ img, title, description }) {
  return (
    <div className="container_card">
      <div>
        <img style={{ width: "450px", height: "300px" }} src={img} alt="" />
      </div>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Card;
