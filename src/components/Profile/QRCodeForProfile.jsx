import React from "react";
import QRCode from "qrcode.react";
import "./QrCodeForProfile.css";

export const QRCodeForProfile = () => {
  const qrCodeValue = "https://example.com";
  return (
    <div id="QR-Complete-profile">
      <div id="complete-profile-header-text">Complete Profile</div>

      <div id="middle-container">
        <div className="qr-container">
          <QRCode style={{height:"100%",width:"100%"}}id="qrcode" value={qrCodeValue} />
        </div>
        <div id="footer-text">Scan to Complete Profile</div>
      </div>
    </div>
  );
};
