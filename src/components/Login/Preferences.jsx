import React from "react";
import Timeline from "./Images/Mobile.svg";
import "./Preferences.css";
import Image1 from "./Images/Image1.svg";
import Image2 from "./Images/Image2.svg";
import Image3 from "./Images/Image3.svg";
import Image4 from "./Images/Image4.svg";
import Image5 from "./Images/Image5.svg";
import Image6 from "./Images/Image6.svg";
function Preferences() {
  const Images = [
    { id: "1", imageName: Image1 },
    { id: "2", imageName: Image2 },
    { id: "3", imageName: Image3 },
    { id: "4", imageName: Image4 },
    { id: "5", imageName: Image5 },
    { id: "6", imageName: Image6 },
  ];
  return (
    <>
      <div id="preferencesContainer">
        <div className="preferencesDiv">
          <div className="preferencesTimeline">
            <img
              src={Timeline}
              style={{ objectFit: "cover", width: "100%" }}
            ></img>
          </div>
          <div className="preferDiv">
            <div className="preferImageDiv">
              <div className="name">Preferences</div>
              <div className="text_div">
                <p>
                  Pick your favourite art period to help us curate your
                  experience
                </p>
                <input
                  className="searchBtn"
                  type="search"
                  placeholder="search"
                ></input>
              </div>
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
        </div>
      </div>
    </>
  );
}

export default Preferences;
