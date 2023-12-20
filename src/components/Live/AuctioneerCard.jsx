import React from "react";
import Auctioneer2 from "./Images/Auctioneer2.png";
import HeaderBorder from "./Images/HeaderBorder.svg";
import "./AuctioneerCard.css";

function AuctioneerCard() {
  return (
    <div className="auctioneer-card">
      <img className="profile-image" src={Auctioneer2} />
      <div className="name">Oliver Barker</div>
      <div className="title">Auctioneer</div>
      <div className="position">
        Chairman, Sotheby’s Europe, Senior International Specialist
      </div>
      <img src={HeaderBorder} />
      <div className="white-cloth-sale">
        <span>White cloth sale</span>
        <span>25</span>
      </div>
    </div>
  );
}

export default AuctioneerCard;
