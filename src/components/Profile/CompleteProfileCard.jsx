import React, { useEffect, useState } from "react";
import "./CompleteProfileCard.css";
import { useContext } from "react";
import { useGlobalInfo } from "../../contexts/globalContext";
import ProfileCard from "./AllCards/ProfileCard";
import PaymentCard from "./AllCards/PaymentCard";
import { Link } from "react-router-dom";

export const CompleteProfileCard = () => {
  const context = useGlobalInfo()
  const {NewCountFunc} = useGlobalInfo();
  const handleClick = () =>{
    NewCountFunc(1)
  }
  const [profileDetails, setProfileDetails] = useState({
    profileName: "Mr.Trevor Revera",
    dateOfBirth: "August 7,1995",
    address: "49 Featherstone Street,London, EC1Y 8SY United Kingdom",
  });
  const [paymentDetails, setPaymentDetails] = useState({
    cardName: "AVI SHANE",
    method: "VISA",
  });
  const [userProfile , setUserProfile] = useState({})
  useEffect(()=>{
    setUserProfile(context.profileList)
  },[context.profileList])

  return (
    <div id="complete-profile-card">
      <div className="header">Complete Profile</div>
      
        <div className="cards-container">
        <ProfileCard/>
        <div id="payment-div">
          <div>Your Payment Method</div>
          <div>
            <Link to='/profile/yourWallet'><button className="edit-btn" onClick={handleClick}>Edit</button></Link>
            
          </div>
        </div>
        
      <div className="payment-information">
        <PaymentCard cardNumber={1}/>
        </div>
        {
        userProfile.profileInformation? 
        <div className="verification-details">
          <div>Verification</div>
          <div>
            Date of Birth :<span>{userProfile.profileInformation.dateOfBirth}</span>
          </div>
          <div>
            Address :<span>{userProfile.profileInformation.address}</span>
          </div>
        </div>:''}
      </div>
    </div>
  );
};
