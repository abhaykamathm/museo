import React from "react";
import Timeline from "./Images/Mobile.svg";
import Logo from "./Images/Arrow Right.svg";
import SuccessLogo from "./Images/successLogo.svg";
// import Profile from "./Images/profileLogo.jpg";
import Verified from "./Images/Verified.svg";
import Profile from "./Images/Profile.svg";
import "./VerificationSuccess.css";
import { useNavigate } from "react-router-dom";
export default function VerificationSuccess() {
  const navigate = useNavigate();
  return (
    <>
      <div id="successContainer">
        <div className="successDiv">
          <div className="successTimeline">
            <img
              src={Timeline}
              style={{ objectFit: "cover", width: "100%" }}
            ></img>
          </div>
          <div className="profileVerifyDiv">
            <div className="logoDiv">
              <div className="logoImg">
                <img src={Logo}></img>
              </div>
              <div>
                <img src={SuccessLogo}></img>
              </div>
            </div>
            <div className="profileLogo">
              {/* <img src={Profile}></img> */}
              <div>
                <img src={Profile}></img>
              </div>
              <div className="verifyLogo">
                <img src={Verified}></img>
              </div>
            </div>
            <div className="buttonDiv">
              <button
                onClick={() => {
                  navigate("/login/verification");
                }}
              >
                Go Back
              </button>
              <button
                onClick={() => {
                  navigate("/login/preferences");
                }}
              >
                Continue
              </button>
            </div>
          </div>

          {/* <div className="buttonDiv">
            <button
              onClick={() => {
                navigate("/login/verification");
              }}
            >
              Go Back
            </button>
            <button
              onClick={() => {
                navigate("/login/preferences");
              }}
            >
              Continue
            </button>
          </div> */}
        </div>
      </div>
    </>
  );
}
