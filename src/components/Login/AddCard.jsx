import React from "react";
import Timeline from "./Images/Mobile.svg";
import Logo from "./Images/Arrow Right.svg";
import "./AddCard.css";
import { useNavigate } from "react-router-dom";
function AddCard() {
  const navigate = useNavigate();
  return (
    <div id="addcard-container">
      <div className="addcard-div">
        <div className="addcard-section">
          <div className="card-timeline">
            <img
              src={Timeline}
              style={{ objectFit: "cover", width: "100%" }}
            ></img>
          </div>
          <div className="addcard-input-div">
            <div className="cardinfo-div">
              <div>Add a new Card Method</div>
              <div className="card-address">
                <div className="cardname-div">
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
                <div className="cvv">
                  <div className="cardname-div">
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
                  <div className="cardname-div">
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
                <div className="cardname-div">
                  <input
                    className="Cardname-input"
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
                <div className="cardname-div">
                  <input
                    className="Cardname-input"
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
                <div className="check">
                  <input className="check-div" type="checkbox"></input>
                  <p>Secure this card</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="end-logo">
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
  );
}

export default AddCard;
