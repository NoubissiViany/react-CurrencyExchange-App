import React from 'react';
import './Button.css';

function Button({ text, bgcolor }) {
  return (
    <div>
      <button
        className="Btn"
        style={{ backgroundColor: bgcolor }}
        type="button"
      >
        {text}
      </button>
    </div>
  );
}

export default Button;
