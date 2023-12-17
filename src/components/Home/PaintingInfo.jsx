import React from "react";
import { useNavigate } from "react-router";

function PaintingInfo({ background }) {
  const navigate = useNavigate();
  return (
    <div className="painting-info">
      <div id="painting-name">{background.name}</div>
      <div id="artist-name">{background.artist}</div>
      <button className="btn btn-secondary" onClick={() => navigate("/live")}>
        Watch
      </button>
    </div>
  );
}

export default PaintingInfo;
