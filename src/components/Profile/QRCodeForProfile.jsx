import React from "react";
import QRCode from "qrcode.react";
import "./QrCodeForProfile.css";
import logo from '/Images/logo.png';

export const QRCodeForProfile = () => {
  const qrCodeValue = "https://example.com";
  return (
    <div id="QR-Complete-profile" className="pd-16 gp-16 br-8">
      <div id="complete-profile-header-text" className="fs-24">Complete Profile</div>

      <div id="middle-container" className="gp-16">
        <div className="qr-container br-8 pd-16">
          <QRCode style={{height:"100%",width:"100%"}}id="qrcode" value={qrCodeValue} />
        </div>
        <div id="footer-text" className="fs-20">Scan to Complete Profile</div>
      </div>
      <img src={logo} alt="" className="footer-logo-image"/>
    </div>
  );
};
