import React from "react";
import "./ProfileInformationCard.css";
const ProfileInformationCard = ({
  name,
  dateOfBirth,
  address,
  onEditClick,
}) => {
  return (
    <div className="profile-info">
      <div className="name">Profile Information</div>
      <div className="info-div">
        <div className="name-info">
          <div className="name">Name :</div>
          <p>{name}</p>
        </div>
        <div className="name-info">
          <div className="name">Date of Birth : </div>
          <p>{dateOfBirth}</p>
        </div>
        <div className="name-info">
          <p>{address}</p>
        </div>
        <div className="button-div">
          <button onClick={onEditClick}>Edit</button>
        </div>
      </div>
    </div>
  );
};

export default ProfileInformationCard;
