import React from "react";
import "./TopFixedCard.css";

import HeaderBorder from "./Images/HeaderBorder.svg";
import Condition from "./Images/Condition.svg";
import Bell from "./Images/Bell.svg";
import Proile from "./Images/Profile.svg";
import Width from "./Images/Width.svg";
import Height from "./Images/Height.svg";
import Appreciation from "./Images/Appreciation.svg";
import ViewCarousel from "./Images/ViewCarousel.svg";
import { useNavigate } from "react-router-dom";
import { useGlobalInfo } from "../../contexts/globalContext";

function TopFixedCard() {
  const context = useGlobalInfo();
  const navigate = useNavigate();
  return (
    <div className="top-fixed-card-container">
      <img
        id="view-carousel"
        src={ViewCarousel}
        onClick={() => {
          context.changeLandingView("carousel");
          navigate("/");
        }}
      />
      <div className="lot">LOT NUMBER 25</div>
      <img className="header-border" src={HeaderBorder} />
      <div className="title">Portrait of Young Man Holding a Roundel</div>
      <div className="artist">
        <img src={Proile} />
        <span>Sandro Botticelli</span>
      </div>
      <div className="dimension">
        <div className="width">
          <img src={Width} />
          <span>38.9 cm</span>
        </div>
        <div className="height">
          <img src={Height} />
          <span>58.7 cm</span>
        </div>
      </div>
      <div className="condition">
        <span className="key">Condition</span>
        <span className="value">High</span>
      </div>
      <img src={Condition} />
      <div className="appreciation">
        <span>Predicted appreciation</span>
        <img src={Appreciation} />
        <span>24%</span>
      </div>
      <button id="place-bid" className="btn btn-primary">
        Place Bid
      </button>
      <div className="similar-works">
        <img src={Bell} />
        <button className="btn">View Similar Works</button>
      </div>
    </div>
  );
}

export default TopFixedCard;
