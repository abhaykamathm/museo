import React from "react";
import Timeline2 from "./Assets/Timeline2.svg";
import Success from "./Assets/Success.svg";

import "./BidPlaced.css";
import { useGlobalInfo } from "../../../contexts/globalContext";

function BidPlaced() {
  const context = useGlobalInfo();
  return (
    <div className="bid-preview-container">
      <div className="preview-card br-8">
        <div className="timeline-bar gp-4">
          <img src={Timeline2} />
          <div className="labels fs-16">
            <span>Preview</span>
            <span>Placed</span>
          </div>
        </div>
        <div className="summary gp-8">
          <div className="title">LOT NUMBER 25</div>
          <div className="painting-name fs-16">
            Portrait of Young Man Holding a Roundel
          </div>
          <img src={Success} />
          <div className="fs-16 last-message">
            Your <span>Bid $ 7,30,00,000</span> has been <span>placed</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BidPlaced;
