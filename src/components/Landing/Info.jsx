import React from "react";
import "./Info.css";

function Info({ auction_piece }) {
  return (
    <div className="info gp-12">
      <div className="painting-name fs-24">{auction_piece.name}</div>
      <div className="artist-name fs-20">{auction_piece.artist}</div>
    </div>
  );
}

export default Info;
