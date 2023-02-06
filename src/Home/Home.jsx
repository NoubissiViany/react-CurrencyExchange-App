/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import Logo from '../Assets/Images/logo.png';
import './Home.css';
import Btn1 from '../Buttons/Button1';
import Btn2 from '../Buttons/Button2';
import Btn3 from '../Buttons/Button3';

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
            <label htmlFor="">Select Default Currency: </label>
            <select name="" id="">
              <option selected value="USD">
                USD
              </option>
              <option value="EUR">EUR</option>
              <option value="XAF">XAF</option>
            </select>
          </div>
          <div className="Home__btn">
            <Btn1 />
            <Btn2 />
            <Btn3 />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
