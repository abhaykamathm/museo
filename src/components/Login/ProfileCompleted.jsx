import React from "react";
import Completed from "./Images/Completed.svg";
import "./ProfileCompleted.css";
import Logo from "./Images/Arrow Right.svg";
function ProfileCompleted() {
  return (
    <>
      <div id="profileComplete">
        <div className="completedImage">
          <img src={Completed}></img>
          <img src={Logo}></img>
        </div>
      </div>
    </>
  );
}

export default ProfileCompleted;
