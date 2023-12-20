import React from "react";
import "./PlaceBid.css";
import NumPad from "./PlaceBid/NumPad";
import WalletBalance from "./PlaceBid/WalletBalance";
import OngoingBids from "./PlaceBid/OngoingBids";

function PlaceBid() {
  return (
    <div className="place-bid-container gp-8">
      <NumPad />
      <WalletBalance />
      <OngoingBids />
    </div>
  );
}

export default PlaceBid;
