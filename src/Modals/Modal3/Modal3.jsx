/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { RiCloseLine } from 'react-icons/ri';
import './Modal3.css';

function Modal({ setIsOpen }) {
  return (
    <>
      <div className="darkBG" onClick={() => setIsOpen(true)} />
      <div className="centered">
        <div className="modal">
          <div className="modalHeader">
            <h5 className="heading">CONVERT CURRENCY</h5>
          </div>
          <button
            type="button"
            className="closeBtn"
            onClick={() => setIsOpen(false)}
          >
            <RiCloseLine style={{ marginBottom: '-3px' }} />
          </button>
          <div className="modalContent">
            <div>
              <label className="modalContentLabel" htmlFor="">
                Amount:
              </label>
              <input
                className="modalContentInput"
                placeholder="Please enter amount"
                type="number"
              />
            </div>
            <div className="modalContentContainer">
              <div>
                <label htmlFor="">From:</label>
                <select name="" id="">
                  <option selected value="USD">
                    USD
                  </option>
                  <option value="EUR">EUR</option>
                  <option value="XAF">XAF</option>
                </select>
              </div>
              <div>
                <label htmlFor="">To:</label>
                <select name="" id="">
                  <option value="XAF">XAF</option>
                  <option value="USD">USD</option>
                  <option value="EUR">EUR</option>
                </select>
              </div>
            </div>
          </div>
          <div className="actionsContainer">
            <button
              type="button"
              className="saveBtn"
              onClick={() => setIsOpen(false)}
            >
              Convert
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
