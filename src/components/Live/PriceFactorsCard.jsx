import React from "react";
import "./PriceFactorsCard.css";
import PriceFactor1 from "./Images/PriceFactor1.svg";
import PriceFactor2 from "./Images/PriceFactor2.svg";

function PriceFactorsCard() {
  return (
    <div className="price-factor-card">
      <div className="title">Price Factors</div>
      <div className="sub-title">Condition Report</div>
      <div className="info">
        <div className="type">Overall</div>
        <div className="limits">
          <span>Poor</span>
          <span>High</span>
        </div>
        <img src={PriceFactor1} />
      </div>
      <div className="info">
        <div className="type">Rarity</div>
        <div className="limits">
          <span>Common</span>
          <span>Rare</span>
        </div>
        <img src={PriceFactor2} />
      </div>
      <div className="info">
        <div className="type">Quality</div>
        <div className="limits">
          <span>Low</span>
          <span>High</span>
        </div>
        <img src={PriceFactor1} />
      </div>
    </div>
  );
}

export default PriceFactorsCard;
