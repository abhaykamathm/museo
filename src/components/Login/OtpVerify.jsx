import React from "react";
import Line from "./Images/Line 4.svg";
import "./OtpVerify.css";
import { useNavigate } from "react-router-dom";
function OtpVerify() {
  const navigate = useNavigate();
  return (
    <>
      <div id="otpVerify">
        <div className="otpVerifyDiv">
          <div className="otpHead">OTP Verification</div>
          <div className="LineSectionDiv">
            <div className="LineSection">
              <p>
                Enter the OTP sent to <b>+91 987987333</b>
              </p>
            </div>
            <div className="lineSection">
              <div className="LineDiv">
                <img src={Line}></img>
                <img src={Line}></img>
                <img src={Line}></img>
                <img src={Line}></img>
              </div>
              <div className="resendDiv">
                <p>Didn’t receive the OTP?</p>
                <p> Resend OTP</p>
              </div>
              <div className="resendBtn">
                <button
                  onClick={() => {
                    navigate("/login/addDetail");
                  }}
                >
                  Verify
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OtpVerify;
