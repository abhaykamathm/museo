import React from "react";
import { useNavigate } from "react-router-dom";
import "./MobileSignIn.css";
import Pic from "./Images/Pic.svg";
import Line from "./Images/Line 1.svg";
function MobileSignIn() {
  const navigate = useNavigate();
  return (
    <>
      <div id="MobileContainer">
        <div id="mobile">
          <div className="imageDiv">
            <img src={Pic} alt="pic"></img>
          </div>
          <div className="text">
            <p style={{ fontWeight: "500" }}>Sign in</p>
            <h2>Enter Mobile Number</h2>
            <div className="textDiv">
              <p>We will send you one-time password to you mobile number</p>
              <div className="mblNum">
                <p>Enter Mobile Number</p>
                <div>
                  <input
                    type="number"
                    max={10}
                    required
                    style={{
                      width: "100%",
                      textAlign: "center",
                      outline: "none",
                      color: "#131313",
                      fontFamily: "Roboto",
                      fontSize: " 0.875rem",
                      padding: "0",
                    }}
                  ></input>
                  <img src={Line}></img>
                </div>
              </div>
              <button
                onClick={() => {
                  navigate("/login/otpVerify");
                }}
              >
                Get OTP
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MobileSignIn;
