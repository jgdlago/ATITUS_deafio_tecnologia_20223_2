import React from 'react';
import './welcomePage.css';
import AuthButton from '../../components/button/auth_button';

function WelcomePage({ onAuthAction }) {
  return (
    <div className="welcomePage-container">
      <h2>Bem-vindo!</h2>
      <span className="moody-calender">
        <h3>MoodyCalendar</h3>
      </span>

      <AuthButton title="Login paciente" onClick={() => onAuthAction('login')} />

      <AuthButton title="Login Psicólogo" onClick={() => onAuthAction('login')} />

      <AuthButton title="Cadastro" onClick={() => onAuthAction('register')} />

    </div>
  );
}

export default WelcomePage;
