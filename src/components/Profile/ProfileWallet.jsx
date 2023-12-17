import React, { useState } from "react";
import "./ProfileWallet.css";
import PaymentCard from "./AllCards/PaymentCard";
import { Link } from "react-router-dom";

export const ProfileWallet = () => {
  const [paymentDetails, setPaymentDetails] = useState({
    cardName: "AVI SHANE",
    method: "VISA",
  });

  const paypalSelected = () => {
    console.log('paypal seleccted');
    
  }
  return (
    <div id="profile-wallet">
      <div id="header">
        <div id="header-text">Your Wallet</div>
        <div id="sub-header">
          <div id="text1">Wallet Balance</div>
          <div id="text2">$20000</div>
        </div>
      </div>
      <div id="cards-header">Credit and Debit Cards</div>
      <div id="cards-container">
        {/* <div className='card'> */}
        {/* <div className="payment-details">
            <div className="payment-header">
              <div>
                <img src="./Images/Profile/Rectangle 11662.png" alt="" />
              </div>
              <div className="payment-header-text">CHASE</div>
            </div>
            <div className="card-number">
              <div>****</div>
              <div>****</div>
              <div>****</div>
              <div>6457</div>
            </div>
            <div className="card-images">
              <div>
                <img src="./Images/Profile/Group 244.png" alt="" />
              </div>
              <div>
                <img src="./Images/Profile/NFC.png" alt="" />
              </div>
            </div>
            <div className="payment-footer">
              <div>{paymentDetails.cardName}</div>
              <div className="payment-method">
                <img src="./Images/Profile/Payment Method.svg" alt="" className='visa-img'/>
              </div>
            </div>
          </div> */}
        {}
        <div className="card">
          <PaymentCard cardNumber={1} />
        </div>

        <div className="card">
          <PaymentCard cardNumber={2} />
        </div>

        {/* </div> */}
        {/* <div className='card'> */}
        {/* <div className="payment-details">
            <div className="payment-header">
              <div className="payment-header-text">Platinum</div>
            </div>
            <div className="card-number">
              <div>****</div>
              <div>****</div>
              <div>****</div>
              <div>6457</div>
            </div>
            <div className="card-images">
              <div>
                <img src="./Images/Profile/Group 244.png" alt="" />
              </div>
              <div>
                <img src="./Images/Profile/NFC.png" alt="" />
              </div>
            </div>
            <div className="payment-footer">
              <div>{paymentDetails.cardName}</div>
              <div className="payment-method">
                <img src="./Images/Profile/Mastercard.svg" alt="" className='visa-img'/>
              </div>
            </div>
          </div> */}
        {/* </div> */}
      </div>
      <div id="add-newCard-div">
        <div>
          <img src="./Images/Profile/Add 1.svg" alt="" />
        </div>
        <Link to='/profile/newCard'>
        <div id="add-newCard-text">Add a New Card</div></Link>
      </div>
      <div id="footer-wallet-text">Wallet</div>
      <div id="link-account-footer">
        <Link to='/profile/linkAccount'><div className="circle-paypal" onClick={paypalSelected}></div></Link>
        <div id="paypal-text">Paypal</div>
        <div id="link-account-text">
          Link account
        </div>
      </div>
    </div>
  );
};
