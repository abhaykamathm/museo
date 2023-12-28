import React from "react";
import Add from "../Images/Add.svg";
import "./Walletbalance.css";
import { useGlobalInfo } from "../../../contexts/globalContext";

function WalletBalance() {
  const context = useGlobalInfo();
  return (
    <div className="wallet-balance-container br-4">
      <div className="balance gp-4">
        <span>Wallet Balance</span>
        <span>$ 20,000</span>
      </div>
      <div className="action">
        <button
          className="br-8 gp-8"
          onClick={() => {
            context.changeShowPlaceBid(false);
            context.changeShowAddFunds(true);
          }}
        >
          <img className="h-16" src={Add} />
          <span>Add funds</span>
        </button>
      </div>
    </div>
  );
}

export default WalletBalance;
