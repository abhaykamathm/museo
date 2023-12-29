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
    <div className="top-fixed-card-container pd-16 gp-8 br-8">
      <img
        id="view-carousel"
        src={ViewCarousel}
        onClick={() => {
          context.changeLandingView("carousel");
          navigate("/home");
        }}
      />
      <div className="lot fs-16">LOT NUMBER 25</div>
      <img className="header-border" src={HeaderBorder} />
      <div className="title fs-16">Portrait of Young Man Holding a Roundel</div>
      <div className="artist fs-16 gp-8">
        <img className="h-16" src={Proile} />
        <span>Sandro Botticelli</span>
      </div>
      <div className="dimension fs-16">
        <div className="width gp-8">
          <img className="w-16" src={Width} />
          <span>38.9 cm</span>
        </div>
        <div className="height">
          <img className="h-16" src={Height} />
          <span>58.7 cm</span>
        </div>
      </div>
      <div className="condition fs-16">
        <span className="key">Condition</span>
        <span className="value">High</span>
      </div>
      <img src={Condition} />
      <div className="appreciation fs-16">
        <span>Predicted appreciation</span>
        <img className="h-16" src={Appreciation} />
        <span>24%</span>
      </div>
      <button
        id="place-bid"
        className="btn btn-primary fs-16 br-4 pd-8"
        onClick={() => {
          context.changeShowPlaceBid(!context.showPlaceBid);
          context.changeShowAddFunds(false);
        }}
      >
        Place Bid
      </button>
      <div className="similar-works fs-16 gp-8">
        <div className="bell-container pd-8 br-4">
          <img className="h-16" src={Bell} />
        </div>
        <button className="btn fs-16 br-4 pd-8">View Similar Works</button>
      </div>
    </div>
  );
}

export default TopFixedCard;
