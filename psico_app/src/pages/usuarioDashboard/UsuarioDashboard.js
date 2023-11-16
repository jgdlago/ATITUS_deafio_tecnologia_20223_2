import "./UsuarioDashboard.css";
import React from "react";
import Header from "../../components/Header/Header";
import CardMoodSemanal from "../../components/card-mood-semanal/CardMoodSemanal";
import CardMoodNotas from "../../components/card-mood-notas/CardMoodNotas";

function UsuarioDashboard() {
  return (
    <>
      <Header></Header>
      <CardMoodSemanal />
      <section>
        <h3>Notas</h3>
        <CardMoodNotas />
        <CardMoodNotas />
      </section>
    </>
  );
}

export default UsuarioDashboard;
