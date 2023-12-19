import React from "react";
import Logo from "./Images/DesktopCompletedLogo.svg";
import Flash from "./Images/flash1.svg";
import Vector from "./Images/Vector.svg";
import "./DesktopProfileEnd.css";
function DesktopProfileEnd() {
  return (
    <>
      <div id="desktopEnd">
        <div className="desktopEndDiv">
          <div className="imageDiv">
            <img src={Logo} className="centered-image "></img>
          </div>
          <img className="flash" src={Flash}></img>
        </div>
        <div className="scrollImage"></div>

        <img className="vector-div" src={Vector}></img>
      </div>
    </>
  );
}

export default DesktopProfileEnd;
