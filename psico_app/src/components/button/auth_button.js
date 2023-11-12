import React from 'react';
import './auth_button.css';

function AuthButton({ title }) {
  return (
    <div className="auth-button-container">
      <button className='auth-button'>
        <h3>{title}</h3>
      </button>
    </div>
  );
}

export default AuthButton;
