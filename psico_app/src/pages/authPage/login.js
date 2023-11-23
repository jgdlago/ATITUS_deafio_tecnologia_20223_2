import React, { useState } from 'react';
import './auth.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import brasilIcon from './images/brasil.png';
import SendButton from '../../components/button/send_button';
import SocialAuth from '../../components/social_auth/social_auth';

function Login({ onBack, onSuccess }) {
  const [authMethod, setAuthMethod] = useState('number');

  const handleMethodChange = (method) => {
    setAuthMethod(method);
  };

  const handleBack = () => {
    onBack();
  };

  const handleLogin = () => {
    onSuccess();
  };

  return (
    <div className="container-auth">
      <div className='login-header'>
        <span onClick={handleBack}>
          <FontAwesomeIcon icon={faChevronLeft} />
          <b> Login</b>
        </span>
        <p>Olá, bem-vindo de volta!</p>
      </div>

      <div className='select-auth-method'>
        <span onClick={() => handleMethodChange('number')}>Número</span>
        <span onClick={() => handleMethodChange('email')}>E-mail</span>
      </div>

      {authMethod === 'number' && (
        <div className='login-form-number'>
          <form className='login-form'>
            <img src={brasilIcon} alt="Brasil"/>
            <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="Número de telefone" required />
          </form>
          <SendButton title='Enviar SMS' onClick={handleLogin}/>
        </div>
      )}

      {authMethod === 'email' && (
        <div className='login-form-email'>
          <form className='login-form'>
            <input type="email" id="email" name="email" placeholder="E-mail" required />
            <input type="password" id="password" name="password" placeholder="Senha" required />
          </form>
          <SendButton title='Login' onClick={handleLogin} />
        </div>
      )}

      <SocialAuth title='Entrar com Google' />

    </div>
  );
}

export default Login;
