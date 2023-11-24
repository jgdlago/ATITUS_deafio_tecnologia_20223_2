import React from "react";
import "./InclusaoMoodUsuario.css";
import Header from "../../components/Header/Header";
import { useState } from "react";
import angryImg from "../img/angry.svg";
import frownImg from "../img/frown.svg";
import laughImg from "../img/laugh.svg";
import mehImg from "../img/meh.svg";

function InclusaoMoodUsuario({onBack, childToParent}) {
  const [text, setText] = useState("");

  let dadosForm = {
    img: "",
    text: "",
  };

  const montaDadosForm = (event) => {
    event.preventDefault();
    dadosForm.text = text;
    childToParent(dadosForm)
  };

  function getImg(event) {
    dadosForm.img = event.target.attributes.value.nodeValue;
  }

  const onHandleInclusaoMood = () => {
    onBack();
  }

  return (
    <>
      <Header></Header>
      <section className="inclusao-wrapper">
        <form onSubmit={montaDadosForm}>
          <div id="inclusao-mood-wrapper">
            <h3>Como você está se sentindo hoje?</h3>
            <div id="humor-mood-wrapper">
              <img src={angryImg} value="angryImg" onClick={getImg}></img>
              <img src={frownImg} value="frownImg" onClick={getImg}></img>
              <img src={laughImg} value="laughImg" onClick={getImg}></img>
              <img src={mehImg} value="mehImg" onClick={getImg}></img>
            </div>
          </div>

          <div id="input-group-wrapper">
            <h3>Escreva uma nota sobre:</h3>
            <input className="input"
              type="text"
              value={text}
              onChange={(event) => setText(event.target.value)}
            ></input>
          </div>
          <button type="submit" className="button">Enviar</button>
          <button onClick={onHandleInclusaoMood} className="button">Voltar</button>
        </form>
      </section>
    </>
  );
}

export default InclusaoMoodUsuario;
