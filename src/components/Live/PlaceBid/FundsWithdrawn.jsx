import React from "react";
import "./FundsWithdrawn.css";

function FundsWithdrawn() {
  return (
    <div className="funds-withdrawn-container br-4 gp-4">
      <div className="fs-16 gp-8 name-amount">
        <span>Adoration of Magi</span>
        <span>| $ 10,000</span>
      </div>
      <div className="message">Funds withdrawn</div>
    </div>
  );
}

export default FundsWithdrawn;
