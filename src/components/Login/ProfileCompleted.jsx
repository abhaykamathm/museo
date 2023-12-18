import React from "react";
import Completed from "./Images/Completed.svg";
import "./ProfileCompleted.css";
function ProfileCompleted() {
  return (
    <>
      <div id="profileComplete">
        <div className="completedImage">
          <img src={Completed}></img>
        </div>
      </div>
    </>
  );
}

export default ProfileCompleted;
