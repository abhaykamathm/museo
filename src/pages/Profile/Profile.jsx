import React from "react";
import "./Profile.css";
import ProfilePanel from "../../components/Profile/ProfilePanel";
import { CompleteProfileCard } from "../../components/Profile/CompleteProfileCard";
import { QRCodeForProfile } from "../../components/Profile/QRCodeForProfile";
import { QRAccountLink } from "../../components/Profile/QRAccountLink";
import { QRAddNewCard } from "../../components/Profile/QRAddNewCard";
import { ProfileWallet } from "../../components/Profile/ProfileWallet";

const Profile = () => {
  return (
    <div id="profile-container">
      <ProfilePanel />
      <CompleteProfileCard /> 
      {/* <QRCodeForProfile /> */}
      {/* <QRAccountLink /> */}
      {/* <QRAddNewCard /> */}
      {/* <ProfileWallet /> */}

    </div>
  );
};

export default Profile;
