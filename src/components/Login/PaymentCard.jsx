import React from "react";
import "./PaymentCard.css";
import Rectangle from "./Images/rectangle.svg";
import Group from "./Images/Group.svg";
import NFC from "./Images/NFC.svg";
import Payment from "./Images/Payment Method.svg";
const PaymentCard = ({ bankName, cardNumber, cardHolder, onEditClick }) => {
  return (
    <div id="visa">
      <div className="visa-card">
        <div className="chase">
          <img src={Rectangle} alt="" />
          <p>{bankName}</p>
        </div>
        <div className="card-no">
          <p>**** **** **** {cardNumber.slice(-4)}</p>
        </div>
        <div className="visa-img">
          <img src={Group} alt="" />
          <img src={NFC} alt="" />
        </div>
      </div>
      <div className="avi">
        <p>{cardHolder}</p>
        <div>
          <img src={Payment} alt="" />
        </div>
      </div>
    </div>
  );
};

export default PaymentCard;
