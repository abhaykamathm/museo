import React from "react";
import "./CarouselARView.css";
import artist from "/Images/Home/painting2.png";
import info from "/Images/Home/info-btn.png";
import Tools_kit from "/Images/Home/Tools AR Kit.png";
import Chat_bubble from "/Images/Home/Chat Bubble Typing Oval.png";
import Bell from "/Images/Home/Bell Notification.png";
import Add from "/Images/Profile/Add 1.svg";
import Tags from "/Images/Home/Tags-icon.png";
import logo from '/Images/logo.png';
import Nexus from '/Images/Home/Nexus-Connect.png'

export const CarouselARView = () => {
  return (
    <div className="CarouselARView-container gp-8">
      <div className="options-container gp-16">
        <div className="options-outer-div">
          <div className="options-inner-div">
            <img src={info} alt="info-btn" />
          </div>
        </div>
        <div className="options-outer-div">
          <div className="options-inner-div">
            <img src={Tools_kit} alt="tools-kit" />
          </div>
        </div>
        <div className="options-outer-div">
          <div className="options-inner-div">
            <img src={Chat_bubble} alt="chat-bubble" />
          </div>
        </div>
        <div className="options-outer-div">
          <div className="options-inner-div">
            <img src={Bell} alt="bell-notification" />
          </div>
        </div>
        <div className="options-outer-div">
          <div className="options-inner-div">
            <img src={Add} alt="add" />
          </div>
        </div>
      </div>
      <div className="image-container">
        <img src={artist} alt="painting" className="artist-image br-8" />
      </div>
      <div className="price-container gp-12 br-8 pd-16">
        <img src={Tags} alt="tags-icon" className="tags-img" />
        <div className="price fs-18">$85M</div>
      </div>
      <div className="footer-images-div gp-8">
        <img src={logo} alt="logo" className="logo-img"/>
        <img src={Nexus} alt="Nexus-Connect" className="nexus-image"/>
      </div>
    </div>
  );
};
