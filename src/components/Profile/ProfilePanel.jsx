import React from "react";
import "./ProfilePanel.css";
import Vector from "./Vector.svg";
import Rectangle from "./Rectangle 11542.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

function ProfilePanel() {
  const [selectingOpt , setSelectingOpt] = useState(0);
  const handleBackgroundColor = (n) => {
    setSelectingOpt(n)
  }
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
      <div id="wallet" className={selectingOpt === 1 ? 'my-bgm-highlight' : ''}>
        <div id="wallet-img">
          <img src="/Images/Profile/Money Wallet.png" alt="" />
        </div>
        <Link to="/profile/yourWallet">
        <div onClick={()=>handleBackgroundColor(1)} 
        id='wallet-text'>Your Wallet</div>
      </Link>
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
            <Link to='/profile/activeSales'>
            <div onClick={()=>handleBackgroundColor(2)} 
            id={selectingOpt === 2 ? 'my-bgm-highlight' : ''}

            >Active Sales</div>
            </Link>
            <Link to='/profile/pastSales'>
            <div
  onClick={() => handleBackgroundColor(3)}
  id={selectingOpt === 3 ? 'my-bgm-highlight' : ''}
>
  Past Sales
</div>

            </Link>
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
