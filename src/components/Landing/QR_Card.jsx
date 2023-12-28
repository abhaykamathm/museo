import React from "react";
import "./QR_Card.css";

function QR_Card() {
  return (
    <div className="qr-card">
      <div className="title fs-16 pd-8">Scan to buy</div>
      <img src="/Images/Home/qr.png" alt="qr-code" />
    </div>
  );
}

export default QR_Card;
