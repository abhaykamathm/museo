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
import "./Profile.css";

const Profile = () => {
  return (
    <div id="profile-container">
      <ProfilePanel />
      <Outlet />
    </div>
  );
};

export default Profile;
