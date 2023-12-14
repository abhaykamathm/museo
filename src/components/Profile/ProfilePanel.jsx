import React from "react";
import "./ProfilePanel.css";
import Vector from "./Vector.svg";
import Rectangle from './Rectangle 11542.svg'

function ProfilePanel() {
  return (
    <div id="profile-card">
      <div id="profile-header">
        <div id="profile-image">
          <img src="/Images/Profile/Profilepic.png" />
        </div>
        <div id="profile-header-right">
          <div id="top">
            <div>Trevor</div>
            <div>
            <img src={Vector} alt="" />
          </div>
          </div>
          <div id="timeline">

          </div>
          <div id="text">
              Complete Profile
          </div>
          
        </div>
      </div>
      <div id="wallet">
           <div id="wallet-img">
            <img src="/Images/Profile/Money Wallet.png" alt="" />
           </div>
           <div id="wallet-text">Your Wallet</div>
      </div>
      <div className="panel-options">
        <div>
          <img src={Rectangle} alt="" />
        </div>
        <div>
          My Buyings & Biddings
        </div>
        <div className="sub-options">
          <div>Active Sales</div>
          <div>Past Sales</div>
          <div>Ready to checkout</div>
        </div>

      </div>
      <div className="panel-options">
        <div>
        <img src={Rectangle} alt="" />
        </div>
        <div>
          My List
        </div>

      </div>
      <div className="panel-options">
        <div>
        <img src={Rectangle} alt="" />
        </div>
        <div>
          All Reminders
        </div>

      </div>
      <div className="panel-options">
        <div>
        <img src={Rectangle} alt="" />
        </div>
        <div>
         How bidding works
        </div>

      </div>
      <div className="panel-options">
        <div>
        <img src={Rectangle} alt="" />
        </div>
        <div>
          Help
        </div>

      </div>

    </div>
  );
}

export default ProfilePanel;
