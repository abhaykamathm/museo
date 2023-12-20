import React from "react";
import Add from "../Images/Add.svg";

import "./Walletbalance.css";

function WalletBalance() {
  return (
    <div className="wallet-balance-container">
      <div className="balance">
        <span>Wallet Balance</span>
        <span>$ 20,000</span>
      </div>
      <div className="action">
        <button>
          <img src={Add} />
          <span>Add funds</span>
        </button>
      </div>
    </div>
  );
}

export default WalletBalance;
