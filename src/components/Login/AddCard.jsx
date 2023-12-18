import React from "react";
import Timeline from "./Images/Mobile.svg";
import "./AddCard.css";
import { useNavigate } from "react-router-dom";
function AddCard() {
  const navigate = useNavigate();
  return (
    <div id="addCardContainer">
      <div className="addCardDiv">
        <div className="cardTimeline">
          <img src={Timeline}></img>
        </div>
        <div className="addCardInputDiv">
          <div className="cardinfoDiv">
            <div>Add a new Card Method</div>
            <div className="cardAddress">
              <div className="cardNameDiv">
                <input
                  type="text"
                  placeholder="Card Number"
                  style={{
                    width: "100%",
                    outline: "none",
                    color: "#131313",
                    fontFamily: "Roboto",
                    fontSize: " 0.875rem",
                  }}
                ></input>
              </div>
              <div className="cvvDiv">
                <div className="cardNameDiv">
                  <input
                    type="text"
                    placeholder="Valid Through (MM/YY)"
                    style={{
                      width: "100%",
                      outline: "none",
                      color: "#131313",
                      fontFamily: "Roboto",
                      fontSize: " 0.875rem",
                    }}
                  ></input>
                </div>
                <div className="cardNameDiv">
                  <input
                    type="text"
                    placeholder="CVV"
                    style={{
                      outline: "none",
                      color: "#131313",
                      fontFamily: "Roboto",
                      fontSize: " 0.875rem",
                    }}
                  ></input>
                </div>
              </div>
              <div className="cardNameDiv">
                <input
                  className="CardNameInput"
                  type="text"
                  placeholder="Name on the Card"
                  style={{
                    outline: "none",
                    color: "#131313",
                    fontFamily: "Roboto",
                    fontSize: " 0.875rem",
                  }}
                ></input>
              </div>
              <div className="cardNameDiv">
                <input
                  className="CardNameInput"
                  type="text"
                  placeholder="Card Nickname (For easy identification)"
                  style={{
                    outline: "none",
                    color: "#131313",
                    fontFamily: "Roboto",
                    fontSize: " 0.875rem",
                  }}
                ></input>
              </div>
              <div className="checkDiv">
                <input className="checkDivCheck" type="checkbox"></input>
                <p>Secure this card</p>
              </div>
            </div>
            <div className="endLogo">
              <img src={Logo}></img>
              <button
                onClick={() => {
                  navigate("/login/cardAdded");
                }}
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddCard;
