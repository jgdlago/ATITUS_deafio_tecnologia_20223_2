import React, { useState } from 'react';
import './welcomePage.css';
import AuthButton from '../../components/button/auth_button';
import Login from '../authPage/login';
import Register from '../authPage/register';

function WelcomePage() {
  const [activeComponent, setActiveComponent] = useState(null);

  const handleButtonClick = (componentName) => {
    setActiveComponent(componentName);

    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    });
  };

  const renderActiveComponent = () => {
    switch (activeComponent) {
      case 'login':
        return <Login />;
      case 'login-psicologo':
        return <Login />;
      case 'register':
        return <Register />;
      default:
        return null;
    }
  };

  return (
    <div className="welcomePage-container">
      <h2>Bem-vindo!</h2>
      <span className="moody-calender">
        <h3>MoodyCalendar</h3>
      </span>

      <AuthButton title="Login paciente" onClick={() => handleButtonClick('login')} />

      <AuthButton title="Login Psicólogo" onClick={() => handleButtonClick('login-psicologo')} />

      <AuthButton title="Cadastro" onClick={() => handleButtonClick('register')} />

      {renderActiveComponent()}

    </div>
  );
}

export default WelcomePage;
