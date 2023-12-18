import React from "react";
import Add from "./Images/Add.svg";
import AR from "./Images/AR.svg";
import Chat from "./Images/Chat.svg";
import Fullscreen from "./Images/Fullscreen.svg";
import Share from "./Images/Share.svg";
import Video from "./Images/Video.svg";

import "./ActionIcons.css";

function ActionIcons({ setShowInfo }) {
  return (
    <div className="action-icons">
      <img src={Add} />
      <img src={Chat} />
      <img src={Share} />
      <img src={AR} />
      <img src={Video} />
      <img
        src={Fullscreen}
        onClick={() => {
          setShowInfo(false);
        }}
      />
    </div>
  );
}

export default ActionIcons;
