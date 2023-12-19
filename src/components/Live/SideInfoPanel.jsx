import React from "react";
import "./SideInfoPanel.css";
import TopFixedCard from "./TopFixedCard";
import CatelougeCard from "./CatelougeCard";
import ArtistCard from "./ArtistCard";
import BiddingDetailsCard from "./BiddingDetailsCard";
import BidsPlacedCard from "./BidsPlacedCard";
import Provenance from "./Provenance";
import AuctioneerCard from "./AuctioneerCard";
import PriceFactorsCard from "./PriceFactorsCard";

function SideInfoPanel() {
  return (
    <div className="side-info-panel-container">
      <TopFixedCard />
      <div className="scroll-container">
        <CatelougeCard />
        <ArtistCard />
        <Provenance />
        <AuctioneerCard />
        <PriceFactorsCard />
        <BiddingDetailsCard />
        <BidsPlacedCard />
      </div>
    </div>
  );
}

export default SideInfoPanel;
