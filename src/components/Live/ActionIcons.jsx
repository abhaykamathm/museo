import React from "react";
import Add from "./Images/Add.svg";
import AR from "./Images/AR.svg";
import Chat from "./Images/Chat.svg";
import Fullscreen from "./Images/Fullscreen.svg";
import Share from "./Images/Share.svg";
import Video from "./Images/Video.svg";

import "./ActionIcons.css";

function ActionIcons({ setShowInfo, showCamViewPanel, setShowCamViewPanel }) {
  return (
    <div className="action-icons gp-12">
      <div className="icon-container">
        <img src={Add} />
      </div>
      <div className="icon-container">
        <img src={Chat} />
      </div>
      <div className="icon-container">
        <img src={Share} />
      </div>
      <div className="icon-container">
        <img src={AR} />
      </div>
      <div className="icon-container">
        <img
          src={Video}
          onClick={() => {
            setShowInfo(false);
            setShowCamViewPanel((showCamViewPanel) => !showCamViewPanel);
          }}
        />
      </div>
      <div className="icon-container">
        <img
          src={Fullscreen}
          onClick={() => {
            setShowInfo(false);
            setShowCamViewPanel(false);
          }}
        />
      </div>
    </div>
  );
}

export default ActionIcons;
