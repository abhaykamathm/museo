import React from "react";
import Clock from "./Images/Clock.svg";
import "./Live.css";
import SideInfoPanel from "../../components/Live/SideInfoPanel";

function Live() {
  return (
    <div className="live-container">
      <SideInfoPanel />
      <div className="footer">
        <div>Call to place your bid : +44 79 7577 7666, +44 79 7572 5390</div>
        <div>
          <img src={Clock} />
          <span>2hr : 30mins : 20sec left</span>
        </div>
      </div>
    </div>
  );
}

export default Live;
