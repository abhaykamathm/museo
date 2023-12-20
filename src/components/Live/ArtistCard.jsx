import React from "react";
import "./ArtistCard.css";

function ArtistCard() {
  return (
    <div className="artist-card-container br-8 pd-8">
      <span className="name">Sandro Botticelli</span>
      <span className="title fs-16">Artist</span>
      <div className="origin fs-16">
        <snap className="key">Origin : </snap>
        <snap className="value">Italy</snap>
      </div>
      <div className="works fs-16">
        <snap className="key">Works : </snap>
        <snap className="value">“The Birth of Venus" and "Primavera"</snap>
      </div>
    </div>
  );
}

export default ArtistCard;
