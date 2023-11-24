import "./UsuarioDashboard.css";
import React from "react";
import Header from "../../components/Header/Header";
import CardMoodSemanal from "../../components/card-mood-semanal/CardMoodSemanal";
import CardMoodNotas from "../../components/card-mood-notas/CardMoodNotas";
import { useState } from "react";
import InclusaoMoodUsuario from "../inclusaoMoodUsuario/InclusaoMoodUsuario";

let dados = {
  img: "",
  text: "",
};

function UsuarioDashboard() {
  const [authAction, setAuthAction] = useState(null);

  const handleAuthAction = (action) => {
    setAuthAction(action);
  };

  const handleAuthBack = () => {
    setAuthAction(null);
  };

  const handleLoginSuccess = () => {
    setAuthAction("addMood");
  };

  const childToParent = (data) => {
    dados = data;
  };
  
  return (
    <>
      {authAction === "addMood" && (
        <InclusaoMoodUsuario
          onBack={handleAuthBack}
          childToParent={childToParent}
        />
      )}
      {authAction === null && (
        <>
          <Header></Header>
          <CardMoodSemanal onSuccess={handleLoginSuccess} dado={dados.img} />
          <section>
            <h3>Notas</h3>
            <CardMoodNotas />
            <CardMoodNotas />
          </section>
        </>
      )}
    </>
  );
}

export default UsuarioDashboard;
