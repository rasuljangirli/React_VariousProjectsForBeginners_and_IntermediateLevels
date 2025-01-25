import React from "react";
import ImgOne from "../images/imgOne.jpg";
import ImgTwo from "../images/imgTwo.jpg";
import ImgThree from "../images/imgThree.jpg";

const cardMap = {
  ImgOne,
  ImgTwo,
  ImgThree,
};

function Card({ cardName }) {
  return (
    <div>
      <img
        style={{ width: "350px", height: "300px" }}
        src={cardMap[cardName]}
        alt=""
      />
    </div>
  );
}

export default Card;
