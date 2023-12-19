import React, { useState } from "react";
import "./OtpVerify.css";
import Logo from "./Images/Arrow Right.svg";
import { useNavigate } from "react-router-dom";
function OtpVerify() {
  const navigate = useNavigate();
  const [otp, setOTP] = useState(["", "", "", ""]); // Use an array to store individual digits

  const handleChange = (e, index) => {
    const value = e.target.value;

    if (!isNaN(value) && value !== "") {
      const newOTP = [...otp];
      newOTP[index] = value;
      setOTP(newOTP);

      // Move to the next input field
      if (index < otp.length - 1 && value !== "") {
        document.getElementById(`otp-input-${index + 1}`).focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    // Move to the previous input field on backspace
    if (e.key === "Backspace" && index > 0) {
      document.getElementById(`otp-input-${index - 1}`).focus();
    }
  };
  return (
    <>
      <div id="otpVerify">
        <div className="otpVerifyDiv">
          <div className="otpHead">OTP Verification</div>
          <div className="LineSectionDiv">
            <div className="LineSection">
              <p>
                Enter the OTP sent to <b>+91 9879873333</b>
              </p>
            </div>
            <div className="lineSection">
              <div className="LineDiv">
                <div className="line-item"></div>
                <div className="line-item"></div>
                <div className="line-item"></div>
                <div className="line-item"></div>
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    id={`otp-input-${index}`}
                    type="text"
                    value={digit}
                    onChange={(e) => handleChange(e, index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    maxLength="1"
                    className="otp-input"
                  />
                ))}
              </div>

              <div className="resendDiv">
                <p>Didn’t receive the OTP?</p>
                <a
                  onClick={() => {
                    navigate("/login/mobileLogin");
                  }}
                >
                  {" "}
                  Resend OTP
                </a>
              </div>
              <div className="resendBtn">
                <button
                  onClick={() => {
                    navigate("/login/otpLogin");
                  }}
                >
                  Verify
                </button>
              </div>
            </div>
          </div>
          <div className="endLogo">
            <img src={Logo}></img>
          </div>
        </div>
      </div>
    </>
  );
}

export default OtpVerify;
