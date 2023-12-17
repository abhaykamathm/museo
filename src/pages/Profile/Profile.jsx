import React from "react";
import "./Profile.css";
import ProfilePanel from "../../components/Profile/ProfilePanel";
import { CompleteProfileCard } from "../../components/Profile/CompleteProfileCard";
import { QRCodeForProfile } from "../../components/Profile/QRCodeForProfile";
import { QRAccountLink } from "../../components/Profile/QRAccountLink";
import { QRAddNewCard } from "../../components/Profile/QRAddNewCard";
import { ProfileWallet } from "../../components/Profile/ProfileWallet";
import { useGlobalInfo } from "../../contexts/globalContext";
import { ActiveSales } from "../../components/Profile/ActiveSales";


const Profile = () => {
  const context = useGlobalInfo();

  return (
    <div id="profile-container">
      <ProfilePanel />
      {/* {
        context.count === 0 ?<CompleteProfileCard />:
        <QRCodeForProfile /> 
      } */}
      {/* <CompleteProfileCard />  */}
      {/* <QRCodeForProfile /> */}
      {/* <QRAccountLink /> */}
      {/* <QRAddNewCard /> */}

      {/* <ProfileWallet /> */}
      <ActiveSales />
    </div>
  );
};

export default Profile;
