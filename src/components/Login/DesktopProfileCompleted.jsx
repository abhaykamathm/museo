import React from "react";
import Logo from "./Images/DesktopCompletedLogo.svg";
import Flash from "./Images/flash1.svg";
import Vector from "./Images/Vector.svg";
import "./DesktopProfileCompleted.css";
function DesktopProfileCompleted() {
  return (
    <>
      <div id="desktopCompleted">
        <div className="desktopCompletedDiv">
          <div className="imageDiv">
            <img src={Logo} className="centered-image "></img>
          </div>
          <img className="flash" src={Flash}></img>
          <img className="vector-div" src={Vector}></img>
        </div>
      </div>
    </>
  );
}

export default DesktopProfileCompleted;
