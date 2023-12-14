import React from "react";
import "./Profile.css";
import ProfilePanel from "../../components/Profile/ProfilePanel";
import { CompleteProfileCard } from "../../components/Profile/CompleteProfileCard";

const Profile = () => {
  return (
    <div id="profile-container">
      <ProfilePanel />
      <CompleteProfileCard />
    </div>
  );
};

export default Profile;
