import React from "react";
import Border from "./Images/Border.svg";
import "./DesktopSignIn.css";
import Vector from "./Images/Vector.svg";
import QRCode from "qrcode.react";
function DesktopSignIn() {
  const qrCodeValue = "https://google.com";
  return (
    <>
      <div id="desktopSignIn">
        <div className="desktopDiv">
          <div className="imageDiv">
            <div className="centered-div">
              <img src={Border} className="centered-image "></img>
              <div className="overlay-div">
                <div className="text-div">
                  <div>Sign In</div>
                  <span>Scan the QR</span>
                  <p>For hassle-free sign-in</p>
                </div>
                <div className="qr-scan-div">
                  <QRCode
                    style={{ height: "100%", width: "100%" }}
                    className="qr-scan"
                    value={qrCodeValue}
                  />
                </div>
                <div className="steps-div">
                  <div>Steps</div>
                  <div className="step-text">
                    <p>1. Download the app or go to www.artauction.com</p>
                    <p>2. Create Account</p>
                    <p>
                      3. Already a user? <a>Log-in</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img className="vector-div" src={Vector}></img>
        </div>
      </div>
    </>
  );
}

export default DesktopSignIn;
