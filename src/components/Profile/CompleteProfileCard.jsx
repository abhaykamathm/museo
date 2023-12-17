import React, { useState } from "react";
import "./CompleteProfileCard.css";

export const CompleteProfileCard = () => {
  const [profileDetails, setProfileDetails] = useState({
    profileName: "Mr.Trevor Revera",
    dateOfBirth: "August 7,1995",
    address: "49 Featherstone Street,London, EC1Y 8SY United Kingdom",
  });
  const [paymentDetails, setPaymentDetails] = useState({
    cardName: "AVI SHANE",
    method: "VISA",
  });
  return (
    <div id="complete-profile-card">
      <div className="header">Complete Profile</div>
      <div className="cards-container">
        <div className="profile-information">
          <div id="title">Profile Information</div>
          <div className="profile-details">
            <div>
              Name :<span>{profileDetails.profileName}</span>
            </div>
            <div>
              Date of Birth :<span>{profileDetails.dateOfBirth}</span>
            </div>
            <div>
              Address :<span>{profileDetails.address}</span>
            </div>
          </div>
          <div>
            <button>Edit</button>
          </div>
        </div>
        <div id="payment-div">
          <div>Your Payment Method</div>
          <div>
            <button>
              <span>Edit</span>
            </button>
          </div>
        </div>
        <div className="payment-information">
          <div className="payment-details">
            <div id="payment-header">
              <div>
                <img src="./Images/Profile/Rectangle 11662.png" alt="" />
              </div>
              <div id="header-text">CHASE</div>
            </div>
            <div id="card-number">
              <div>****</div>
              <div>****</div>
              <div>****</div>
              <div>6457</div>
            </div>
            <div id="card-images">
              <div>
                <img src="./Images/Profile/Group 244.png" alt="" />
              </div>
              <div>
                <img src="./Images/Profile/NFC.png" alt="" />
              </div>
            </div>
            <div id="payment-footer">
              <div>{paymentDetails.cardName}</div>
              <div id="payment-method">
                <img src="./Images/Profile/Payment Method.svg" alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="verification-details">
          <div>Verification</div>
          <div>
            Date of Birth :<span>{profileDetails.dateOfBirth}</span>
          </div>
          <div>
            Address :<span>{profileDetails.address}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
