import React from "react";
import QRCode from "qrcode.react";
import "./QRAccountLink.css";

export const QRAccountLink = () => {
  const qrCodeValue = "https://example.com";
  return (
    <div id="QR-Account-Link">
      <div id="header">
        <div id="header-text">Your Wallet</div>
        <div id="sub-header">
            <div id="text1">Wallet Balance</div>
            <div id="text2">$20000</div>
        </div>
      </div>

      <div id="middle-container">
        <div className="qr-container">
          <QRCode
            style={{ height: "100%", width: "100%" }}
            id="qrcode"
            value={qrCodeValue}
          />
        </div>
        <div id="footer-text">Scan to Link your Paypal account</div>
      </div>
    </div>
  );
};
