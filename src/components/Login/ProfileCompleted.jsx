import React from "react";
import Completed from "./Images/Completed.svg";
import "./ProfileCompleted.css";
import Logo from "./Images/Arrow Right.svg";
function ProfileCompleted() {
  return (
    <>
      <div id="profile-complete">
        <div className="completed-image">
          <img src={Completed}></img>
          <img src={Logo}></img>
        </div>
      </div>
    </>
  );
}

export default ProfileCompleted;
