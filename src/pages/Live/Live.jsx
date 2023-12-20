import React, { useState } from "react";
import Clock from "./Images/Clock.svg";
import Wall from "./Images/Wall.svg";
import Eye from "./Images/Eye.svg";
import Diamond from "./Images/Diamond.svg";
import LiveDot from "./Images/LiveDot.svg";
import "./Live.css";
import SideInfoPanel from "../../components/Live/SideInfoPanel";
import ActionIcons from "../../components/Live/ActionIcons";
import Location from "../../components/Live/Location";
import { useGlobalInfo } from "../../contexts/globalContext";
import PlaceBid from "../../components/Live/PlaceBid";

function Live() {
  const context = useGlobalInfo();
  const [showInfo, setShowInfo] = useState(true);
  return (
    <div
      className="live-container"
      style={{
        background:
          context.liveBackground === "map"
            ? `url("/Images/Live/Background2.png")`
            : "",
      }}
    >
      {showInfo && <SideInfoPanel />}
      <div className="live-top-bar">
        <div className="info-location-container">
          <div className="info">
            <img src={LiveDot} />
            <div>Live</div>
            <img src={Wall} />
            <img src={Eye} />
            <div>All Viewers (5k)</div>
            <img src={Wall} />
            <img src={Diamond} />
            <div>VIPSs (101)</div>
          </div>
          <Location />
        </div>
        <ActionIcons setShowInfo={setShowInfo} />
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
      {/* Absolute Content Below */}
      <img className="corner-image" src="/favicon.png" />
      {context.showPlaceBid && <PlaceBid />}
    </div>
  );
}

export default Live;
