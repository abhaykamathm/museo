import React from "react";
import { useNavigate } from "react-router-dom";
import Timeline from "./Images/Mobile.svg";
import "./Preferences.css";
import Image1 from "./Images/Image1.png";
import Image2 from "./Images/Image2.png";
import Image3 from "./Images/Image3.svg";
import Image4 from "./Images/Image4.svg";
import Image5 from "./Images/Image5.svg";
import Image6 from "./Images/Image6.svg";
import ImagePreference from "./ImagePreference";
import SearchIcon from "./Images/SearchIcon.svg";
function Preferences() {
  const Images = [
    { id: "1", imageName: Image1, imageText: "Abstract" },
    { id: "2", imageName: Image2, imageText: "Cubism" },
    { id: "3", imageName: Image3, imageText: "Pointilism" },
    { id: "4", imageName: Image4, imageText: "Renaissance" },
    { id: "5", imageName: Image5, imageText: "Abstract" },
    { id: "6", imageName: Image6, imageText: "Cubism" },
  ];
  const navigate = useNavigate();
  return (
    <>
      <div id="preferences">
        <div className="preferences-div">
          <div className="preferences-timeline">
            <img
              src={Timeline}
              style={{ objectFit: "cover", width: "100%" }}
            ></img>
          </div>
          <div className="prefer-div">
            <div className="prefer-image">
              <div className="name">Preferences</div>
              <div className="text_div">
                <p>
                  Pick your favourite art period to help us curate your
                  experience
                </p>
                <div className="search-btn">
                  <input
                    // className="search-btn"
                    type="search"
                    placeholder="Search"
                  />
                  <img
                    className="search-icon"
                    src={SearchIcon}
                    alt="Search Icon"
                  />
                </div>
              </div>
              <ImagePreference images={Images} />
            </div>
          </div>
          <div className="button-div">
            <button
              onClick={() => {
                navigate("/login/successVerification");
              }}
            >
              Go Back
            </button>
            <button
              onClick={() => {
                navigate("/login/review");
              }}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Preferences;
