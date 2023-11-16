import "./Header.css";
import React from "react";
import menu from "./img/menu.svg";

let isMenuOpen = false;

function Menu() {
  const header = window.document.getElementById("header");
  if (!isMenuOpen) {
    let buttonPerfil = document.createElement("button");
    buttonPerfil.textContent = "Perfil";
    buttonPerfil.setAttribute("id", "button-perfil");
    buttonPerfil.style.cssText =
      "background-color: white; border-radius: 10px; width: 351px; height: 57px; font-weight: bold; margin-bottom: 10px";

    let buttonSair = document.createElement("button");
    buttonSair.textContent = "Sair";
    buttonSair.setAttribute("id", "button-sair");
    buttonSair.style.cssText =
      "background-color: white; border-radius: 10px; width: 351px; height: 57px; font-weight: bold;";

    header.appendChild(buttonPerfil);
    header.appendChild(buttonSair);

    isMenuOpen = true;
  } else {
    const buttonPerfilRemove = document.getElementById('button-perfil');
    const buttonSairRemove = document.getElementById('button-sair');
    header.removeChild(buttonPerfilRemove);
    header.removeChild(buttonSairRemove);
    isMenuOpen = false;
  }
}

function Header() {
  return (
    <header id="header">
      <div>
        <div>
          <h2>Bem Vindo</h2>
          <span>Usuário</span>
        </div>
        <img onClick={Menu} src={menu} />
      </div>
    </header>
  );
}

export default Header;
