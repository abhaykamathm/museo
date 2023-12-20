import React from "react";
import "./CatelogueCard.css";

function CatelougeCard() {
  return (
    <div className="catelogue-card-container pd-8 gp-8 br-8">
      <div className="card-title fs-20">Catalogue</div>
      <div className="info-row fs-12">
        <span className="key">Origin</span>
        <span className="value">1480</span>
      </div>
      <div className="info-row fs-12">
        <span className="key">Consigner</span>
        <span className="value">Edward Ray</span>
      </div>
      <div className="info-row fs-12">
        <span className="key">Publications</span>
        <span className="value">ARTnews | Juxtapoz</span>
      </div>
      <div className="info-row fs-12">
        <span className="key">Exhibitions</span>
        <span className="value">Veermer, Amsterdam</span>
      </div>
    </div>
  );
}

export default CatelougeCard;
