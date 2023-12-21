import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Timeline from "./Images/Mobile.svg";
import Upload from "./Images/uploadPic.svg";
import File from "./Images/fileImg.svg";
import Delete from "./Images/deleteImg.svg";
import Image1 from "./Images/Image1.png";
import Image2 from "./Images/Image2.png";
import Image3 from "./Images/Image3.svg";
import Image4 from "./Images/Image4.svg";
import Image5 from "./Images/Image5.svg";
import Image6 from "./Images/Image6.svg";
import "./Review.css";
import ProfileInformationCard from "./ProfileInformationCard";
import PaymentCard from "./PaymentCard";
import ImagePreference from "./ImagePreference";
function Review() {
  const Images = [
    { id: "1", imageName: Image1 },
    { id: "2", imageName: Image2 },
    { id: "3", imageName: Image3 },
    { id: "4", imageName: Image4 },
    { id: "5", imageName: Image5 },
    { id: "6", imageName: Image6 },
  ];
  const navigate = useNavigate();
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileChange = (event) => {
    const files = event.target.files;
    setSelectedFiles([...selectedFiles, ...files]);
  };
  const handleDelete = (index) => {
    const updatedFiles = [...selectedFiles];
    updatedFiles.splice(index, 1);
    setSelectedFiles(updatedFiles);
  };
  const handleEditClick = () => {
    // Handle edit button click
    console.log("Edit button clicked");
  };
  const handlePaymentEditClick = () => {
    // Handle payment card edit button click
    console.log("Payment card edit button clicked");
  };
  return (
    <>
      <div id="review">
        <div className="review-div">
          <div className="review-timeline">
            <img
              src={Timeline}
              style={{ objectFit: "cover", width: "100%" }}
            ></img>
          </div>
          <div className="wrap-review">
            <div className="name-head">Review</div>
            <div className="wrap-div">
              <ProfileInformationCard
                name="Mr.Trevor Revera"
                dateOfBirth="August 7, 1995"
                address="49 Featherstone Street, London, EC1Y 8SY United Kingdom"
                onEditClick={handleEditClick}
              />
              <div className="payment-card">
                <div className="payment-div">
                  <div className="payment-head">Your Payment Method</div>
                  <div className="button-div">
                    <button onClick={handlePaymentEditClick}>Edit</button>
                  </div>
                </div>
                <PaymentCard
                  bankName="CHASE"
                  cardNumber="6457"
                  cardHolder="AVI SHANE"
                  onEditClick={handlePaymentEditClick}
                />
              </div>
              <div className="upload-div">
                <div className="verify-upload">
                  <div className="verify-name">Verification</div>
                  <span>Your documents have been successfully verified</span>
                </div>
                <div className="dashed-line">
                  {/* <img src={Upload} alt=""></img>
                  <p>Browse Files to upload</p> */}
                  <label htmlFor="fileInput" className="upload-label">
                    <img src={Upload} alt="" />
                    <p>Browse Files to upload</p>
                  </label>
                  <input
                    type="file"
                    id="fileInput"
                    style={{ display: "none" }}
                    onChange={handleFileChange}
                    multiple
                  />
                </div>
                {selectedFiles.map((file, index) => (
                  <div key={index} className="file-div">
                    <img src={File} alt="" />
                    <div className="delete-div">
                      <p>{file.name}</p>
                      <img
                        src={Delete}
                        alt=""
                        onClick={() => handleDelete(index)}
                        style={{ cursor: "pointer" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="prefer-div">
                <div className="prefer-image">
                  <div className="name">Preferences</div>
                  <ImagePreference images={Images} />
                </div>
              </div>
              <div className="add-more-button">
                <button>Add More</button>
              </div>
              <div className="footer-button">
                <button
                  onClick={() => {
                    navigate("/login/preferences");
                  }}
                >
                  Go Back
                </button>
                <button
                  onClick={() => {
                    navigate("/login/success");
                  }}
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Review;
