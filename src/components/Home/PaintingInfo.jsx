import React from "react";
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
      <button
        className="btn btn-secondary pd-8 fs-16 br-8"
        onClick={() => navigate("/live")}
      >
        Watch
      </button>
    </div>
  );
}

export default PaintingInfo;
