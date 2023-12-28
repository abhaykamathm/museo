import React from "react";

import "./AddFunds.css";
import WalletBalance from "./WalletBalance";

function AddFunds() {
  return (
    <div className="add-funds-container">
      <WalletBalance />
      <div className="qr-container">
        <img className="br-8" src="/Images/Live/AddFundsQR.png" />
      </div>
      <div className="scan-message">Scan to add Funds to your wallet</div>
    </div>
  );
}

export default AddFunds;
