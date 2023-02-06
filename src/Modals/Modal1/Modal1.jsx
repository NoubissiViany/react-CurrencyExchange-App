/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { RiCloseLine } from 'react-icons/ri';
import './Modal1.css';

function Modal({ setIsOpen }) {
  return (
    <>
      <div className="darkBG" onClick={() => setIsOpen(true)} />
      <div className="centered">
        <div className="modal">
          <div className="modalHeader">
            <h5 className="heading">ADD CURRENCY</h5>
          </div>
          <button
            type="button"
            className="closeBtn"
            onClick={() => setIsOpen(false)}
          >
            <RiCloseLine style={{ marginBottom: '-3px' }} />
          </button>
          <div className="modalContentsContainer">
            <label className="modalContentLabel" htmlFor="">
              Currency Name:{' '}
            </label>
            <input
              className="modalContentInput"
              placeholder="Please enter currency name"
              type="text"
            />
          </div>
          <div className="actionsContainer">
            <button
              type="button"
              className="saveBtn"
              onClick={() => setIsOpen(false)}
            >
              Add
            </button>
            <button
              type="button"
              className="cancelBtn"
              onClick={() => setIsOpen(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
