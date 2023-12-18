import React, { useState } from "react";
import Clock from "./Images/Clock.svg";
import Wall from "./Images/Wall.svg";
import Eye from "./Images/Eye.svg";
import Diamond from "./Images/Diamond.svg";
import LiveDot from "./Images/LiveDot.svg";
import "./Live.css";
import SideInfoPanel from "../../components/Live/SideInfoPanel";

function Live() {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <div className="live-container">
      {showInfo && <SideInfoPanel setShowInfo={setShowInfo} />}
      <div className="live-top-bar">
        <img src={LiveDot} />
        <div>Live</div>
        <img src={Wall} />
        <img src={Eye} />
        <div>All Viewers (5k)</div>
        <img src={Wall} />
        <img src={Diamond} />
        <div>VIPSs (101)</div>
      </div>
      {!showInfo && (
        <div className="parent">
          <div className="info-place-bid-container">
            <button
              onClick={() => {
                setShowInfo((showInfo) => !showInfo);
              }}
            >
              Info
            </button>
            <button>Place Bid</button>
          </div>
        </div>
      )}
      <div className="footer">
        <div>Call to place your bid : +44 79 7577 7666, +44 79 7572 5390</div>
        <div>
          <img src={Clock} />
          <span>2hr : 30mins : 20sec left</span>
        </div>
        <button>Ask a specialist</button>
      </div>
    </div>
  );
}

export default Live;
