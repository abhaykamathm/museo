import React from "react";
import Logo from "./Images/Completed.svg";
import Flash from "./Images/flash1.svg";
import Vector from "./Images/Vector.svg";
import Image1 from "./Images/gridImage1.svg";
import Image2 from "./Images/gridImage2.svg";
import Image3 from "./Images/gridImage3.svg";
import Image4 from "./Images/gridImage4.svg";
// import Image5 from "./Images.grid5.svg";

import "./DesktopProfileEnd.css";
import TwoColumnImageGrid from "./TwoColumnImageGrid";
function DesktopProfileEnd() {
  const leftImages = [
    { id: "0", imageName: Image1 },
    { id: "1", imageName: Image2 },
    { id: "2", imageName: Image3 },
    { id: "3", imageName: Image4 },
  ];
  const rightImages = [
    { id: "0", imageName: Image3 },
    { id: "1", imageName: Image4 },
    { id: "2", imageName: Image3 },
    { id: "3", imageName: Image2 },
  ];
  return (
    <>
      <div id="desktop-container">
        <div className="desktop-div">
          <div className="image-div">
            <img src={Logo} className="centered-image "></img>
          </div>
          <button className="fs-16 pd-12">View Profile</button>

          <img className="flash" src={Flash}></img>
        </div>
        <div className="scroll-image">
          <TwoColumnImageGrid
            leftImages={leftImages}
            rightImages={rightImages}
          />
        </div>
        <img className="vector-div" src={Vector}></img>
      </div>
    </>
  );
}

export default DesktopProfileEnd;
