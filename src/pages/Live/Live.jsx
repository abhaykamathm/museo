import React, { useRef, useState } from "react";
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
import BidPreview from "../../components/Live/PlaceBid/BidPreview";
import BidPlaced from "../../components/Live/PlaceBid/BidPlaced";
import AddFunds from "../../components/Live/PlaceBid/AddFunds";
import CameraViewsPanel from "../../components/Live/CameraViewsPanel";

function Live() {
  const context = useGlobalInfo();
  const [showInfo, setShowInfo] = useState(false);
  const [showCamViewPanel, setShowCamViewPanel] = useState(false);
  const live_container_ref = useRef(null);
  return (
    <div
      className="live-container pd-16"
      ref={live_container_ref}
      style={{
        background:
          context.liveBackground === "map"
            ? `url("/Images/Live/Background2.png")`
            : `url("/Images/Live/Background1.png")`,
      }}
    >
      {showInfo && <SideInfoPanel />}
      {showCamViewPanel && (
        <CameraViewsPanel live_container_ref={live_container_ref} />
      )}
      <div className="live-top-bar fs-16 gp-8">
        <div className="info-location-container gp-16">
          <div className="info pd-12 br-8 gp-8">
            <img className="h-12" src={LiveDot} />
            <div>Live</div>
            <img className="h-16" src={Wall} />
            <img className="h-16" src={Eye} />
            <div>All Viewers (5k)</div>
            <img className="h-16" src={Wall} />
            <img className="h-16" src={Diamond} />
            <div>VIPSs (101)</div>
          </div>
          <Location />
        </div>
        <ActionIcons
          setShowInfo={setShowInfo}
          setShowCamViewPanel={setShowCamViewPanel}
        />
      </div>
      {!showInfo && (
        <div className="parent">
          <div className="info-place-bid-container pd-16 gp-16">
            <button
              className="info pd-8 br-4 fs-12"
              onClick={() => {
                setShowCamViewPanel(false);
                setShowInfo((showInfo) => !showInfo);
              }}
            >
              Info
            </button>
            <button className="pd-8 br-4 fs-12">Place Bid</button>
          </div>
        </div>
      )}
      <div className="footer gp-16">
        <div className="fs-16">
          Call to place your bid : +44 79 7577 7666, +44 79 7572 5390
        </div>
        <div>
          <img src={Clock} />
          <span className="fs-16">2hr : 30mins : 20sec left</span>
        </div>
        <button className="br-4 pd-4 fs-12">Ask a specialist</button>
      </div>
      {/* Absolute Content Below */}
      <img className="corner-image" src="/favicon.png" />
      {context.showPlaceBid && <PlaceBid />}
      {context.showAddFunds && <AddFunds />}
      {context.showBidPreview && <BidPreview />}
      {context.showBidPlaced && <BidPlaced />}
    </div>
  );
}

export default Live;
