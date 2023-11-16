import React from "react";
import "./CardMoodNotas.css";

import angryImg from "../imgs/angry.svg";
import frownImg from "../imgs/frown.svg";
import laughImg from "../imgs/laugh.svg";
import mehImg from "../imgs/meh.svg";

const result = montaNotaMood(
  "angry",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis felis ex, malesuada ut lacinia eu, sodales pellentesque tellus. Duis porta iaculis iaculis. Morbi faucibus velit nec gravida aliquam. Donec leo risus, maximus eu massa eu."
);

function CardMoodNotas() {
  return (
    <div id="card-notas-mood-wrapper">
      <div id="card-notas-mood-img-wrapper">
        <img src={result.img} alt=""></img>
      </div>
      <span></span>
      <div id="card-notas-mood-texto-wrapper">
        <p>{result.text}</p>
      </div>
    </div>
  );
}

function montaNotaMood(valueMood, text) {
  if (valueMood === "angry") {
    return {
      img: angryImg,
      text: text,
    };
  } else if (valueMood === "frown") {
    return {
      img: frownImg,
      text: text,
    };
  } else if (valueMood === "laugh") {
    return {
      img: laughImg,
      text: text,
    };
  } else {
    return {
      img: mehImg,
      text: text,
    };
  }
}

export default CardMoodNotas;
