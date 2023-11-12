import React from 'react';
import './send_button.css';

function SendButton({ title }) {
  return (
    <div className="send-button-container">
      <button className='send-button'>
        <h3>{title}</h3>
      </button>
    </div>
  );
}

export default SendButton;
