import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import ProfilePanel from "../../components/Profile/ProfilePanel";
import { CompleteProfileCard } from "../../components/Profile/CompleteProfileCard";
import { QRCodeForProfile } from "../../components/Profile/QRCodeForProfile";
import { QRAccountLink } from "../../components/Profile/QRAccountLink";
import { QRAddNewCard } from "../../components/Profile/QRAddNewCard";
import { ProfileWallet } from "../../components/Profile/ProfileWallet";
import { ActiveSales } from "../../components/Profile/ActiveSales";
import { PastSales } from "../../components/Profile/PastSales";
import './Profile.css'

const Profile = () => {
  return (
    <div id="profile-container">
      <ProfilePanel />

      <Outlet />

      {/* Additional components specific to the Profile route */}
      <Routes>
        <Route path="" element={<CompleteProfileCard />} />
        <Route path="yourWallet" element={<ProfileWallet />}/>
          <Route path="newCard" element={<QRAddNewCard />} />
          <Route path="linkAccount" element={<QRAccountLink />} />
        <Route path="qrProfile" element={<QRCodeForProfile />} />
        <Route path="activeSales" element={<ActiveSales />} />
        <Route path="pastSales" element={<PastSales />} />
      </Routes>
    </div>
  );
};

export default Profile;
