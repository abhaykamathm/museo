import React from "react";
import BidPlaced1 from "./Images/BidPlaced1.svg";
import BidPlaced2 from "./Images/BidPlaced2.svg";
import "./BidsPlacedCard.css";

function BidsPlacedCard() {
  return (
    <div className="bid-placed-card">
      <div className="title">Bids Placed</div>
      <div className="info">
        <div className="numbers">
          <span>$ 80k-90k</span>
          <span>10%</span>
        </div>
        <img src={BidPlaced1} />
      </div>
      <div className="info">
        <div className="numbers">
          <span>$ 90k-100k</span>
          <span>2.5%</span>
        </div>
        <img src={BidPlaced2} />
      </div>
      <div className="info">
        <div className="numbers">
          <span>$ 100k-120k</span>
          <span>10%</span>
        </div>
        <img src={BidPlaced1} />
      </div>
      <div className="info">
        <div className="numbers">
          <span>$ 80k-90k</span>
          <span>2.5%</span>
        </div>
        <img src={BidPlaced2} />
      </div>
    </div>
  );
}

export default BidsPlacedCard;
