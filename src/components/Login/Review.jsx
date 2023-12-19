import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Timeline from "./Images/Mobile.svg";
import Rectangle from "./Images/rectangle.svg";
import Group from "./Images/Group.svg";
import NFC from "./Images/NFC.svg";
import Payment from "./Images/Payment Method.svg";
import Upload from "./Images/uploadPic.svg";
import File from "./Images/fileImg.svg";
import Delete from "./Images/deleteImg.svg";
import Image1 from "./Images/Image1.svg";
import Image2 from "./Images/Image2.svg";
import Image3 from "./Images/Image3.svg";
import Image4 from "./Images/Image4.svg";
import Image5 from "./Images/Image5.svg";
import Image6 from "./Images/Image6.svg";
import "./Review.css";
function Review() {
  const Images = [
    { id: "1", imageName: Image1 },
    { id: "2", imageName: Image2 },
    { id: "3", imageName: Image3 },
    { id: "4", imageName: Image4 },
    { id: "5", imageName: Image5 },
    { id: "6", imageName: Image6 },
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
  return (
    <>
      <div id="reviewContainer">
        <div className="reviewDiv">
          <div className="reviewTimeline">
            <img
              src={Timeline}
              style={{ objectFit: "cover", width: "100%" }}
            ></img>
          </div>
          <div className="wrapReview">
            <div className="nameHead">Review</div>
            <div className="wrapDiv">
              <div className="profileInfo">
                <div className="name">Profile Information</div>
                <div className="infoDiv">
                  <div className="nameInfo">
                    <div className="name">Name :</div>
                    <p> Mr.Trevor Revera</p>
                  </div>
                  <div className="nameInfo">
                    <div className="name">Date of Birth : </div>
                    <p>August 7, 1995</p>
                  </div>
                  <div className="nameInfo">
                    <p>
                      Address: 49 Featherstone Street,London, EC1Y 8SY United
                      Kingdom
                    </p>
                  </div>
                  <div className="buttonDiv">
                    <button>Edit</button>
                  </div>
                </div>
              </div>
              <div className="paymentCard">
                <div className="paymentDiv">
                  <div className="paymentHead">Your Payment Method</div>
                  <div className="buttonDiv">
                    <button>Edit</button>
                  </div>
                </div>
                <div className="visa">
                  <div className="visaCard">
                    <div className="chase">
                      <img src={Rectangle} alt=""></img>
                      <p>CHASE</p>
                    </div>
                    <div className="cardNo">
                      <p>**** **** **** 6 4 5 7</p>
                    </div>
                    <div className="visaImg">
                      <img src={Group} alt=""></img>
                      <img src={NFC} alt=""></img>
                    </div>
                  </div>
                  <div className="avi">
                    <p>AVI SHANE</p>
                    <div>
                      <img src={Payment}></img>
                    </div>
                  </div>
                </div>
              </div>
              <div className="uploadDiv">
                <div className="verifyUpload">
                  <div className="verifyName">Verification</div>
                  <span>Your documents have been successfully verified</span>
                </div>
                <div className="dashedLine">
                  {/* <img src={Upload} alt=""></img>
                  <p>Browse Files to upload</p> */}
                  <label htmlFor="fileInput" className="uploadLabel">
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
                  <div key={index} className="fileDiv">
                    <img src={File} alt="" />
                    <div className="deleteDiv">
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
              <div className="preferDiv">
                <div className="preferImageDiv">
                  <div className="name">Preferences</div>
                  {/* <div className="text_div">
                    <input
                      className="searchBtn"
                      type="search"
                      placeholder="search"
                    ></input>
                  </div> */}
                  <div className="imagePrefer">
                    {Images.map((data) => {
                      return (
                        <div className="image_div">
                          <img src={data.imageName}></img>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="addMoreButton">
                <button>Add More</button>
              </div>
              <div className="footerButtonDiv">
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
