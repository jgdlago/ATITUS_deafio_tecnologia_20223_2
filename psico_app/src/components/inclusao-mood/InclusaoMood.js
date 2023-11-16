import React from "react";
import "./InclusaoMood.css";

import angryImg from "../imgs/angry.svg";
import frownImg from "../imgs/frown.svg";
import laughImg from "../imgs/laugh.svg";
import mehImg from "../imgs/meh.svg";

function InclusaoMood() {
  return (
    <div id="inclusao-mood-wrapper">
      <h3>Como você está se sentindo hoje?</h3>
      <div id="humor-mood-wrapper">
        <img src={angryImg}></img>
        <img src={frownImg}></img>
        <img src={laughImg}></img>
        <img src={mehImg}></img>
      </div>
    </div>
  );
}

export default InclusaoMood;
