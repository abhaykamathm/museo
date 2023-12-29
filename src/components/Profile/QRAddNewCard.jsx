import React from "react";
import QRCode from "qrcode.react";
import "./QRAddNewCard.css";
import logo from '/Images/logo.png';

export const QRAddNewCard = () => {
  const qrCodeValue = "https://example.com";
  return (
    <div id="QR-AddNewCard" className="pd-16 br-8 gp-16">
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
            value={qrCodeValue}
          />
        </div>
        <div id="footer-text" className="fs-24">Scan to add new card</div>
      </div>
      <img src={logo} alt="" className="footer-logo-image"/>
    </div>
  );
};