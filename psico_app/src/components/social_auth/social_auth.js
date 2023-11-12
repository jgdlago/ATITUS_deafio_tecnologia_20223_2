import React from 'react';
import './social_auth.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

function SocialAuth({ title }) {
  return (
    <div className="social-auth-container">

        <hr />

      <button className='social-auth-button'>
        <FontAwesomeIcon icon={faGoogle} />
        <h3>{title}</h3>
      </button>

      <span>Não está registrado? <a href='#'>Crie sua conta</a></span>

    </div>
  );
}

export default SocialAuth;
