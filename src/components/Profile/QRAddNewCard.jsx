import React from "react";
import QRCode from "qrcode.react";
import "./QRAddNewCard.css";

export const QRAddNewCard = () => {
  const qrCodeValue = "https://example.com";
  return (
    <div id="QR-AddNewCard">
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
            value={qrCodeValue}
          />
        </div>
        <div id="footer-text">Scan to add new card</div>
      </div>
    </div>
  );
};