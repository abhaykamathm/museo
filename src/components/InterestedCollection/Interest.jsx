import React, { useState, useRef } from "react";
import "./Interest.css";
import Interest1 from "./Images/Interest1.svg";
import Interest2 from "./Images/Interest2.svg";
import Interest3 from "./Images/Interest3.svg";
import Interest4 from "./Images/Interest4.svg";
import Add from "./Images/Add.svg";
import searchIcon from "../../../public/Images/Filter/Search.png";
import micIcon from "../../../public/Images/Filter/Group 484890.png";
function Interest() {
  const Images = [
    { id: "1", image: Interest1, name: "Office" },
    { id: "2", image: Interest2, name: "Home" },
    { id: "3", image: Interest3, name: "Christmas" },
    { id: "4", image: Interest4, name: "Gifts" },
  ];
  const [newImages, setNewImages] = useState(Images);
  const fileInputRef = useRef(null);
  const handleImageUpload = (e) => {
    const selectedFiles = e.target.files;

    if (selectedFiles.length > 0) {
      const reader = new FileReader();

      reader.onloadend = () => {
        const imagePaths = Array.from(selectedFiles).map(
          (file) => reader.result
        );

        setNewImages((prevImages) => [
          ...prevImages,
          ...imagePaths.map((path, index) => ({
            id: String(prevImages.length + index + 1),
            image: path,
            name: "New Image",
          })),
        ]);

        // Save selected images to another state variable if needed
        setSelectedImages(imagePaths);
      };

      Array.from(selectedFiles).forEach((file) => reader.readAsDataURL(file));
    }
  };
  const handleAddImageClick = () => {
    fileInputRef.current.click();
  };

  return (
    <>
      <div id="interest-div">
        <div className="interest-section gp-16">
          <div className="interest-head fs-16">
            Add your interests to a collection
          </div>
          <div className="input-box">
            <div className="search-icon gp-8">
              <img src={searchIcon} alt="search" />
              <input className="input fs-16" type="text" placeholder="Search" />
            </div>

            <div className="mic-icon align-icon">
              <img src={micIcon} alt="micIcon" />
            </div>
          </div>
          <div className="interest-image gp-16">
            {newImages.map((data) => (
              <div className="images-div gp-12">
                <div className="image-collection">
                  <img src={data.image} alt="Image Collection"></img>
                </div>
                <div className="image-name fs-16">{data.name}</div>
              </div>
            ))}
            <div className="add-section gp-12">
              <div className="add-collection">
                <button onClick={handleAddImageClick}>
                  <img src={Add} alt="add-image"></img>
                </button>
                <input
                  type="file"
                  ref={fileInputRef}
                  accept="image/*"
                  style={{ display: "none" }}
                  onChange={handleImageUpload}
                />
              </div>
              <div className="fs-16">Create collection</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Interest;
