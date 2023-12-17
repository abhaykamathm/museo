import React from "react";
import Timeline from "./Images/Mobile.svg";
import Success from "./Images/success.svg";
import Rectangle from "./Images/rectangle.svg";
import Group from "./Images/Group.svg";
import NFC from "./Images/NFC.svg";
import Payment from "./Images/Payment Method.svg";
import Logo from "./Images/Arrow Right.svg";
import "./CardAdded.css";

function CardAdded() {
  return (
    <>
      <div id="cardAddedContainer">
        <div className="cardAddedDiv">
          <div className="cardAddedTimeline">
            <img src={Timeline}></img>
          </div>
          <div className="blur">
            <img src={Success} alt="success"></img>
          </div>
          <div className="visa">
            <div className="visaCard">
              <div className="chase">
                <img src={Rectangle} alt=""></img>
                <p>CHASE</p>
              </div>
              <div className="cardNo">
                <p>**** **** **** 6 4 5 7</p>
              </div>
              <div className="visaImg">
                <img src={Group} alt=""></img>
                <img src={NFC} alt=""></img>
              </div>
            </div>
            <div className="avi">
              <p>AVI SHANE</p>
              <div>
                <img src={Payment}></img>
              </div>
            </div>
          </div>
          <div className="endLogo">
            <img src={Logo}></img>
            <button>Continue</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardAdded;
