import React from "react";

function PaintingInfo({ background }) {
  return (
    <div className="painting-info">
      <div id="painting-name">{background.name}</div>
      <div id="artist-name">{background.artist}</div>
      <button>Watch</button>
    </div>
  );
}

export default PaintingInfo;
