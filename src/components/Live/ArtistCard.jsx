import React from "react";
import "./ArtistCard.css";

function ArtistCard() {
  return (
    <div className="artist-card-container br-8 pd-8">
      <span className="name">Sandro Botticelli</span>
      <span className="title fs-16">Artist</span>
      <div className="origin fs-16">
        <span className="key">Origin : </span>
        <span className="value">Italy</span>
      </div>
      <div className="works fs-16">
        <span className="key">Works : </span>
        <span className="value">“The Birth of Venus" and "Primavera"</span>
      </div>
    </div>
  );
}

export default ArtistCard;
