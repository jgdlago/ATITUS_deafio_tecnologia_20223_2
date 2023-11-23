import React from 'react';
import './register.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import SendButton from '../../components/button/send_button';
import SocialAuth from '../../components/social_auth/social_auth';

function Register({ onBack }) {
  const handleBack = () => {
    onBack();
  };

  return (
    <div className="container-auth">
      <div className='login-header'>
        <span onClick={handleBack}>
          <FontAwesomeIcon icon={faChevronLeft} />
          <b> Cadastro</b>
        </span>
        <p>Olá, bem-vindo!</p>
      </div>

      <div className='register-form-container'>

        <form className='register-form'>
          <input type="text" id="name" name="name" placeholder="Seu nome" required />
          <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="Seu telefone" required />
          <input type="email" id="email" name="email" placeholder="Seu e-mail" required />
          <input type="text" id="uf" name="uf" placeholder="UF" required />
          <input type="text" id="city" name="city" placeholder="Sua cidade" required />
          <input type="password" id="password" name="password" placeholder="Sua senha" required />
          <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirme sua senha" required />
        </form>
        <SendButton title='Cadastrar'/>
      </div>

      <SocialAuth title='Entrar com Google' />

    </div>
  );
}

export default Register;
