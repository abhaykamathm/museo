import React from "react";
import Timeline from "./Images/Mobile.svg";
import "./AddCard.css";
function AddCard() {
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddCard;
