import React from "react";
import LocationPin from "./Images/LocationPin.svg";

import "./Location.css";
import { useGlobalInfo } from "../../contexts/globalContext";

function Location() {
  const context = useGlobalInfo();
  return (
    <div
      style={{
        backgroundColor: context.liveBackground === "map" ? "#422747" : "",
      }}
      className="location"
      onClick={() => {
        if (context.liveBackground === "stream") {
          context.changeLiveBackground("map");
        } else {
          context.changeLiveBackground("stream");
        }
      }}
    >
      <img src={LocationPin} />
      <span>London</span>
    </div>
  );
}

export default Location;
