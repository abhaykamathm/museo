import React from "react";
import "./ProfilePanel.css";
import Vector from "./Vector.svg";
import Rectangle from "./Rectangle 11542.svg";

function ProfilePanel() {
  return (
    <div id="profile-card">
      <div id="profile-header">
        <div id="profile-image">
          <img src="/Images/Profile/Profilepic.png" />
        </div>
        <div id="profile-header-right">
          <div id="top">
            <div id="top-text">Trevor</div>
            <div>
              <img src={Vector} alt="" />
            </div>
          </div>
          <div id="middle">
            <div id="timeline">
              <img src="/Images/Profile/Group 484925.png" alt="" />
            </div>
            <div>80%</div>
          </div>
          <div id="text">Complete Profile</div>
        </div>
      </div>
      <div id="wallet">
        <div id="wallet-img">
          <img src="/Images/Profile/Money Wallet.png" alt="" />
        </div>
        <div id="wallet-text">Your Wallet</div>
      </div>
      <div className="panel-options">
        <div className="panel-option-1">
          <div className="panel-option">
            <div>
            <img src={Rectangle} alt="" />
            </div>
            
            <div className="options-text">My buyings & biddings</div>
          </div>
          <div className="sub-options">
            <div>Active Sales</div>
            <div>Past Sales</div>
            <div>Ready to checkout</div>
          </div>
        </div>
        <div className="panel-option">
          <div>
            <img src={Rectangle} alt="" />
          </div>
          <div className="options-text">My List</div>
        </div>
        <div className="panel-option">
          <div>
            <img src={Rectangle} alt="" />
          </div>
          <div className="options-text">All Reminders</div>
        </div>
        <div className="panel-option">
          <div>
            <img src={Rectangle} alt="" />
          </div>
          <div className="options-text">How bidding works</div>
        </div>
        <div className="panel-option">
          <div>
            <img src={Rectangle} alt="" />
          </div>
          <div className="options-text">Help</div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePanel;
