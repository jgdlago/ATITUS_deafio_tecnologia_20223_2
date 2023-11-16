import React from "react";
import "./CardMoodSemanal.css";
import angryImg from "../imgs/angry.svg";
import frownImg from "../imgs/frown.svg";
import laughImg from "../imgs/laugh.svg";
import mehImg from "../imgs/meh.svg";

let listaMood = [
  {
    img: angryImg,
    dayOfWeek: getDiaDaSemanaPorExtenso(new Date().getDay()),
  },
  {
    img: frownImg,
    dayOfWeek: getDiaDaSemanaPorExtenso(new Date().getDay()),
  },
];

function CardMoodSemanal() {
  return (
    <div id="card-mood-semanal-wrapper">

      <div id="card-mood-semanal-info-wrapper">
        <p>Mood Semanal</p>
        <button>Adicionar Mood</button>
      </div>

      <div id="card-mood-semanal-historico-wrapper">
        {listaMood.map((mood) => (
          <div className="card-mood-semanal-reacao-wrapper">
            <img src={mood.img}></img>
            <label>{mood.dayOfWeek}</label>
          </div>
        ))}
      </div>
      
    </div>
  );
}

function montaMood(valueMood) {
  if (valueMood === "angry") {
    listaMood.push({
      img: angryImg,
      dayOfWeek: getDiaDaSemanaPorExtenso(new Date().getDay()),
    });
  } else if (valueMood === "frown") {
    listaMood.push({
      img: frownImg,
      dayOfWeek: getDiaDaSemanaPorExtenso(new Date().getDay()),
    });
  } else if (valueMood === "laugh") {
    listaMood.push({
      img: laughImg,
      dayOfWeek: getDiaDaSemanaPorExtenso(new Date().getDay()),
    });
  } else {
    listaMood.push({
      img: mehImg,
      dayOfWeek: getDiaDaSemanaPorExtenso(new Date().getDay()),
    });
  }
}

function getDiaDaSemanaPorExtenso(date) {
  const diasDaSemana = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];
  return diasDaSemana[date];
}

export default CardMoodSemanal;
