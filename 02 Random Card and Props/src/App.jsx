import { useState } from "react";
import "./App.css";
import Card from "./Components/Card";

function randomIMG() {
  const cardImg = ["ImgOne", "ImgTwo", "ImgThree"];
  return cardImg[Math.floor(Math.random() * cardImg.length)];
}

function App() {
  const [cardIMG, setCardIMG] = useState([]);
  const clickCard = () => {
    setCardIMG([...cardIMG, randomIMG()]);
  };

  const cardProps =
    cardIMG &&
    cardIMG.map((card, index) => <Card key={index} cardName={card} />);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <button onClick={clickCard}>Click Me</button>
      <div className="container_card">{cardProps}</div>
    </div>
  );
}

export default App;
