import React from "react";
import "./ArtistCard.css";

function ArtistCard() {
  return (
    <div className="artist-card-container">
      <span className="name">Sandro Botticelli</span>
      <span className="title">Artist</span>
      <div className="origin">
        <snap className="key">Origin : </snap>
        <snap className="value">Italy</snap>
      </div>
      <div className="works">
        <snap className="key">Works : </snap>
        <snap className="value">“The Birth of Venus" and "Primavera"</snap>
      </div>
    </div>
  );
}

export default ArtistCard;
