import React from 'react';
import './send_button.css';

function SendButton({ title, onClick }) {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <div className="send-button-container">
      <button className='send-button' onClick={handleClick}>
        <h3>{title}</h3>
      </button>
    </div>
  );
}

export default SendButton;
