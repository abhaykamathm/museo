import React from "react";
import "./SideInfoPanel.css";
import TopFixedCard from "./TopFixedCard";
import CatelougeCard from "./CatelougeCard";
import ArtistCard from "./ArtistCard";

function SideInfoPanel() {
  return (
    <div className="side-info-panel-container">
      <TopFixedCard />
      <div className="scroll-container">
        <CatelougeCard />
        <ArtistCard />
      </div>
    </div>
  );
}

export default SideInfoPanel;
