import React, { useEffect } from 'react';
import '../CompleteProfileCard.css'
import { useState } from 'react';
import { useGlobalInfo } from '../../../contexts/globalContext';
import { Link } from 'react-router-dom';

function ProfileCard() {
  const context = useGlobalInfo();
  const {NewCountFunc} = useGlobalInfo();
  const handleClick = () =>{
    NewCountFunc(1)
  }
  const [userProfile , setUserProfile] = useState({})
  useEffect(()=>{
    setUserProfile(context.profileList)
  },[context.profileList])
  // useEffect(()=>{
  //   console.log("here",userProfile);
  // },[userProfile])
  return (
   <>
    {
        userProfile.profileInformation
        ?
        <div className="profile-information">
          <div id="title">Profile Information</div>
          <div className="profile-details">
            <div>
              Name :<span>{userProfile.profileInformation.profileName?userProfile.profileInformation.profileName:''}</span>
            </div>
            <div>
              Date of Birth :<span>{userProfile.profileInformation.dateOfBirth}</span>
            </div>
            <div>
              Address :<span>{userProfile.profileInformation.address}</span>
            </div>
          </div>
          <div>
            <Link to='/profile/qrProfile'>
            <button className="edit-btn" onClick={handleClick}>Edit</button>
            </Link>
          </div>
        </div>:''
    }</>
  )
}

export default ProfileCard