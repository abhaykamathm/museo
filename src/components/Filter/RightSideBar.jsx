import React from "react";
import "./RightSideBar.css";
import { useGlobalInfo } from "../../contexts/globalContext";
function RightSideBar() {
  const context = useGlobalInfo();
  return (
    <>
      <div id="right-sidebar">
        <div className="sideView">
          <p>sidebar</p>
        </div>
      </div>
    </>
  );
}

export default RightSideBar;
