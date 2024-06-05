import { useState } from "react";
import "./App.css";
import Card from "./Components/Card";
import imgOne from "./images/imgOne.jpg";
import imgTwo from "./images/imgTwo.jpg";
import imgThree from "./images/imgThree.jpg";
import Header from "./Components/Header";

function App() {
  const cardArr = [
    {
      id: 1,
      images: imgOne,
      title: "Images One",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi tempora consequuntur numquam?",
    },
    {
      id: 2,
      images: imgTwo,
      title: "Images Two",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi tempora consequuntur numquam?",
    },
    {
      id: 3,
      images: imgThree,
      title: "Images Three",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi tempora consequuntur numquam?",
    },
  ];

  return (
    <div>
      <Header />
      <div className="app_container">
        {cardArr &&
          cardArr.map((card) => (
            <Card
              key={card.id}
              img={card.images}
              title={card.title}
              description={card.description}
            />
          ))}
      </div>
    </div>
  );
}

export default App;
