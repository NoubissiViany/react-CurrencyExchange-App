import React, { useState } from 'react';
import './Button.css';
import Modal from '../Modals/Modal3/Modal3';

function Button() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setIsOpen(true)} className="Btn" type="button">
        Convert Currency
      </button>
      {isOpen && <Modal setIsOpen={setIsOpen} />}
    </div>
  );
}

export default Button;
