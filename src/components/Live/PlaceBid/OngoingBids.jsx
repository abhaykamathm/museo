import React from "react";
import "./OngoingBids.css";

function OngoingBids() {
  return (
    <div className="ongoing-bids-container gp-8">
      <div className="summary-container br-4 pd-8">
        <div className="coloured bid-summary fs-18">
          <span className="fs-18">Ongoing bids</span>
          <span className="fs-18">$20,000</span>
        </div>
        <div className="bid br-4">
          <div>
            <div className="artpiece-amount">
              <span className="coloured fs-16">Primavera</span>
              <span className="faded-white">| $ 20,000</span>
            </div>
            <div className="faded-white fs-16">Fine Art Auction</div>
          </div>
          <button className="faded-white">Withdraw</button>
        </div>
      </div>
      <div className="bid br-4 pd-8">
        <div>
          <div className="artpiece-amount">
            <span className="coloured fs-16">Adoration of Magi</span>
            <span className="faded-white">| $ 10,000</span>
          </div>
          <div className="faded-white fs-16">Fine Art Auction</div>
        </div>
        <button className="faded-white">Withdraw</button>
      </div>
    </div>
  );
}

export default OngoingBids;
