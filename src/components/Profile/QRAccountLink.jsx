import React from "react";
import QRCode from "qrcode.react";
import "./QRAccountLink.css";
import logo from '/Images/logo.png';

export const QRAccountLink = () => {
  const qrCodeValue = "https://example.com";
  return (
    <div id="QR-Account-Link" className="gp-16 pd-16 br-8">
      <div id="header" className="gp-8">
        <div id="header-text" className="fs-24">Your Wallet</div>
        <div id="sub-header" className="gp-8">
            <div id="text1" className="fs-20">Wallet Balance</div>
            <div id="text2" className="fs-20">$20000</div>
        </div>
      </div>

      <div id="middle-container" className="gp-16">
        <div className="qr-container pd-16 br-8">
          <QRCode
            style={{ height: "100%", width: "100%" }}
            id="qrcode"
            value={qrCodeValue}
          />
        </div>
        <div id="footer-text" className="fs-24">Scan to Link your Paypal account</div>
      </div>
      <img src={logo} alt="" className="footer-logo-image"/>
    </div>
  );
};
