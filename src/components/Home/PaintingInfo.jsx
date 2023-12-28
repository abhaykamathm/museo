import React from "react";
import Bell from "../Live/Images/Bell.svg";
import Like from "./Images/Like.svg";
import { useNavigate } from "react-router";

function PaintingInfo({ background }) {
  const navigate = useNavigate();
  return (
    <div className="painting-info gp-8">
      <div id="painting-name">{background.name}</div>
      <div id="artist-name">{background.artist}</div>
      <div className="auction-range fs-24 gp-8">
        <span className="key">Auction Range</span>
        <span className="value">$30k - $100k</span>
      </div>
      <div className="ends-in fs-18">Ends in : 20 mins</div>
      <div className="buttons-container gp-16">
        <button
          id="home-watch-button"
          className="watch-btn pd-8 fs-16 br-8"
          onClick={() => navigate("/live")}
        >
          Watch
        </button>
        <button className="remind-btn pd-8 fs-16 br-8 gp-16">
          <img className="h-16" src={Bell} />
          Set a reminder
        </button>
        <button className="interested-btn pd-8 fs-16 br-8 gp-16">
          <img className="h-16" src={Like} />
          Interested
        </button>
      </div>
    </div>
  );
}

export default PaintingInfo;
