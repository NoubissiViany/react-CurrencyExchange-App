/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { RiCloseLine } from 'react-icons/ri';
import './Modal3.css';

function Modal({ setIsOpen }) {
  const handelSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);
    const value = Object.fromEntries(data.entries());

    console.log(value);
  };
  return (
    <>
      <div className="darkBG" onClick={() => setIsOpen(true)} />
      <div className="centered">
        <div className="modal">
          <div className="modalHeader">
            <h5 className="heading">TRANSFER MONEY</h5>
          </div>
          <form onSubmit={handelSubmit}>
            <div className="modalContent">
              <button
                type="button"
                className="closeBtn"
                onClick={() => setIsOpen(false)}
              >
                <RiCloseLine style={{ marginBottom: '-3px' }} />
              </button>
              <div>
                <label className="modalContentLabel" htmlFor="">
                  Amount:
                </label>
                <input
                  name="amount"
                  className="modalContentsInput"
                  placeholder="Please enter amount"
                  type="number"
                />
              </div>
              <div className="modalContentContainer">
                <div>
                  <label htmlFor="">From:</label>
                  <select name="fromCurrency" id="">
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="XAF">XAF</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="">To:</label>
                  <select name="toCurrency" id="">
                    <option value="EUR">EUR</option>
                    <option value="USD">USD</option>
                    <option value="XAF">XAF</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="actionsContainers">
              <button type="submit" className="saveBtn">
                Transfer
              </button>
              <button
                type="button"
                className="cancelBtn"
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Modal;
