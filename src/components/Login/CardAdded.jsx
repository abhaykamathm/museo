import React from "react";
import Timeline from "./Images/Mobile.svg";
import Success from "./Images/success.svg";
import Rectangle from "./Images/rectangle.svg";
import Group from "./Images/Group.svg";
import NFC from "./Images/NFC.svg";
import Payment from "./Images/Payment Method.svg";
import Logo from "./Images/Arrow Right.svg";
import "./CardAdded.css";
import { useNavigate } from "react-router-dom";
function CardAdded() {
  const navigate = useNavigate();
  return (
    <>
      <div id="cardAddedContainer">
        <div className="cardAddedDiv">
          <div className="cardAddedSection">
            <div className="cardAddedTimeline">
              <img
                src={Timeline}
                style={{ objectFit: "cover", width: "100%" }}
              ></img>
            </div>
            <div className="cardSection">
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
            </div>
          </div>
          <div className="endLogo">
            <img src={Logo}></img>
            <button
              onClick={() => {
                navigate("/login/verification");
              }}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardAdded;
