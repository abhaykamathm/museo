import React from "react";
import Add from "../Images/Add.svg";
import "./Walletbalance.css";

function WalletBalance() {
  return (
    <div className="wallet-balance-container pd-8 br-4">
      <div className="balance gp-8 fs-16">
        <span>Wallet Balance</span>
        <span>$ 20,000</span>
      </div>
      <div className="action">
        <button className="br-8 gp-8">
          <img className="h-16" src={Add} />
          <span className="fs-16">Add funds</span>
        </button>
      </div>
    </div>
  );
}

export default WalletBalance;
