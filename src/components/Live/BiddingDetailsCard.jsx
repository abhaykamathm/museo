import React from "react";
import "./BiddingDetailsCard.css";

function BiddingDetailsCard() {
  return (
    <div className="bidding-details-card pd-8 gp-8">
      <div className="title">Bidding Details</div>
      <div className="info fs-16">
        <span className="key">Estimate range</span>
        <span className="value">$30k - $100k</span>
      </div>
      <div className="info fs-16">
        <span className="key">Opening</span>
        <span className="value">$32k</span>
      </div>
      <div className="info fs-16">
        <span className="key">Current</span>
        <span className="value">$33k</span>
      </div>
    </div>
  );
}

export default BiddingDetailsCard;
