import React from "react";
import "./PlaceBid.css";
import NumPad from "./PlaceBid/NumPad";
import WalletBalance from "./PlaceBid/WalletBalance";

function PlaceBid() {
  return (
    <div className="place-bid-container">
      <NumPad />
      <WalletBalance />
    </div>
  );
}

export default PlaceBid;
