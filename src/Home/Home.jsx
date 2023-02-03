/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import Logo from '../Assets/Images/logo.png';
import './Home.css';
import Btn from '../Component/Button';

function Home() {
  return (
    <div className="Home__container">
      <div className="Home__column1">
        <div>
          <h2>CURRENCY BALANCE</h2>
          <p>USD Balance: 100USD</p>
          <p>EUR Balance: 500EUR</p>
          <p>XAF Balance: 10000XAF</p>
        </div>
        <div>
          <h2>TOTALIZED VALUE IN USD</h2>
          <p>736.667 USD</p>
        </div>
      </div>
      <div className="Home__column2">
        <img src={Logo} width="120" alt="" />
        <h3>WELCOM TO CURRENCY EXCHANGE APP</h3>
        <p>I am here to help you exchange money</p>
        <div>
          <div className="Home__column2__Currency">
            <label htmlFor="">Default Currency: </label>
            <select name="" id="">
              <option selected value="USD">
                USD
              </option>
              <option value="EUR">EUR</option>
              <option value="XAF">XAF</option>
            </select>
          </div>
          <div className="Home__btn">
            <Btn text="Add Currency" />
            <Btn text="Deposite Money" />
            <Btn text="Convert Currency" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
