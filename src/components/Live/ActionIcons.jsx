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
      <div id="live-screen-add-icon" className="icon-container">
        <img src={Add} />
      </div>
      <div id="live-screen-chat-icon" className="icon-container">
        <img src={Chat} />
      </div>
      <div id="live-screen-share-icon" className="icon-container">
        <img src={Share} />
      </div>
      <div id="live-screen-ar-icon" className="icon-container">
        <img src={AR} />
      </div>
      <div
        id="live-screen-video-icon"
        className="icon-container"
        onClick={() => {
          setShowInfo(false);
          setShowCamViewPanel((showCamViewPanel) => !showCamViewPanel);
        }}
      >
        <img src={Video} />
      </div>
      <div
        id="live-screen-fullscreen-icon"
        className="icon-container"
        onClick={() => {
          setShowInfo(false);
          setShowCamViewPanel(false);
        }}
      >
        <img src={Fullscreen} />
      </div>
    </div>
  );
}

export default ActionIcons;
