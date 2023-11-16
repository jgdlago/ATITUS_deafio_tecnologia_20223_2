import React from "react";
import "./InclusaoMoodUsuario.css";
import Header from "../../components/Header/Header";
import InclusaoMood from "../../components/inclusao-mood/InclusaoMood";
import InclusaoNotas from "../../components/inclusao-notas/InclusaoNotas.js";


function InclusaoMoodUsuario() {
  return (
    <>
      <Header></Header>
      <section>
        <InclusaoMood></InclusaoMood>
        <InclusaoNotas></InclusaoNotas>
      </section>
    </>
  );
}

export default InclusaoMoodUsuario;
