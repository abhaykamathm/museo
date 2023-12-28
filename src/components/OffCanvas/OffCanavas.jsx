import React from "react";
import "./OffCanvas.css";

import Home from "./Assets/Home.svg";
import Live from "./Assets/Live.svg";
import LiveDark from "./Assets/LiveDark.svg";
import E_Auction from "./Assets/E_Auction.svg";
import Sealed from "./Assets/Sealed.svg";
import BuyNow from "./Assets/BuyNow.svg";
import AR from "./Assets/AR.svg";
import { useNavigate } from "react-router-dom";

function OffCanavas({ isCanvasVisible, setCanvasVisible }) {
  const navigate = useNavigate();
  return (
    <div
      className={`off-canvas-container gp-12 ${
        isCanvasVisible ? "visible" : ""
      }`}
      onMouseLeave={() => setCanvasVisible(false)}
    >
      <div
        className="user gp-12"
        onClick={() => {
          navigate("/profile");
        }}
      >
        <img src="/Images/OffCanvas/Profile.jpg" />
        <div className="fs-20">Trevor</div>
      </div>
      <div
        className="home icon"
        onClick={() => {
          navigate("/home");
        }}
      >
        <img src={Home} />
        <div>Home</div>
      </div>
      <div
        className="live icon"
        onClick={() => {
          navigate("/live");
        }}
      >
        <img src={LiveDark} />
        <div>Live</div>
      </div>
      <div
        className="e-auction icon"
        onClick={() => {
          navigate("/e_auction");
        }}
      >
        <img src={E_Auction} />
        <div>E-Auction</div>
      </div>
      <div className="sealed icon">
        <img src={Sealed} />
        <div>Sealed</div>
      </div>
      <div className="buy-now icon">
        <img src={BuyNow} />
        <div>Buy Now</div>
      </div>
      <div className="ar-view icon">
        <img src={AR} />
        <div>AR View</div>
      </div>
    </div>
  );
}

export default OffCanavas;
