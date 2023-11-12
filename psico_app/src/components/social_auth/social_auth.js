import React from 'react';
import './social_auth.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

function SocialAuth({ title }) {
  return (
    <div className="social-auth-container">

      <button className='social-auth-button'>
        <FontAwesomeIcon icon={faGoogle} />
        <h3>{title}</h3>
      </button>
      
    </div>
  );
}

export default SocialAuth;
