import React from "react";
import Timeline from "./Images/Mobile.svg";
import "./otpLogin.css";
function OtpLogin() {
  return (
    <>
      <div id="otpContainer">
        <div className="otpDiv">
          <div className="timeline">
            <img src={Timeline}></img>
          </div>
          <div className="otpInputDiv">
            <div className="infoDiv">
              <div>Full Legal name</div>
              <div className="otpInput">
                <div className="dropdown">
                  <label
                    style={{
                      padding: "0",
                    }}
                  >
                    Title
                  </label>
                  <select
                    style={{
                      width: "100%",
                      outline: "none",
                      color: "#131313",
                      fontFamily: "Roboto",
                      fontSize: " 0.875rem",
                      display: "flex",
                      alignItems: "center",
                      // padding: "0",
                    }}
                  >
                    <option value="item1">Mr</option>
                    <option value="item2">Mrs</option>
                    <option value="item3">Miss</option>
                  </select>
                </div>
                <div className="nameDiv">
                  <label
                    style={{
                      padding: "0",
                    }}
                  >
                    First name
                  </label>
                  <input
                    type="text"
                    placeholder=""
                    style={{
                      width: "100%",
                      outline: "none",
                      color: "#131313",
                      fontFamily: "Roboto",
                      fontSize: " 0.875rem",
                      padding: "0",
                    }}
                  ></input>
                </div>
                <div className="nameDiv">
                  <label
                    style={{
                      padding: "0",
                    }}
                  >
                    Last name
                  </label>
                  <input
                    type="text"
                    placeholder=""
                    style={{
                      width: "100%",
                      outline: "none",
                      color: "#131313",
                      fontFamily: "Roboto",
                      fontSize: " 0.875rem",
                      padding: "0",
                    }}
                  ></input>
                </div>
              </div>
            </div>
            <div className="infoDiv">
              <div>Date Of Birth</div>
              <div className="otpInput">
                <div className="dropdown">
                  <select>
                    <option value="">Month</option>
                    <option value="item1">January</option>
                    <option value="item2">February</option>
                    <option value="item3">March</option>
                  </select>
                </div>
                <div className="dropdown">
                  <select>
                    <option value="">Day</option>
                    <option value="item2">01</option>
                    <option value="item3">02</option>
                  </select>
                </div>
                <div className="dropdown">
                  <select>
                    <option value="">Year</option>
                    <option value="item2">2023</option>
                    <option value="item3">2022</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="infoDiv">
              <div>Enter Your Shipping Address</div>
              <div className="Address">
                <div className="dropdown">
                  <select>
                    <option value="">Country</option>
                    <option value="item1">India</option>
                    <option value="item2">US</option>
                    <option value="item3">UK</option>
                  </select>
                </div>
                <div className="nameDiv">
                  <input type="text" placeholder="Street Address"></input>
                </div>
                <div className="nameDiv">
                  <input
                    type="text"
                    placeholder="Apartment,suite,flat,...floor"
                  ></input>
                </div>
                <button className="shippingBtn">+ Add Shipping Address</button>
              </div>
            </div>
            <div className="infoDiv">
              <div>Add a Payment Method</div>
              <div className="add-card">
                <p>Credit & Debit Cards</p>
                <button className="shippingBtn">+ Add a new card</button>
              </div>
            </div>
            <div className="buttonDiv">
              <button>Go Back</button>
              <button>Continue</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OtpLogin;
