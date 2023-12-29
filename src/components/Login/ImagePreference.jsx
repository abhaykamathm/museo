import React, { useState } from "react";
import "./ImagePreference.css";
// import Tick from "./Images/CheckCircle.svg";
// import Tick from "../Filter/Images/Check.svg";
function ImagePreference({ images, Tick, onCountChange }) {
  const [selectedImages, setSelectedImages] = useState([]);
  const handleImageClick = (imageName) => {
    if (selectedImages.includes(imageName)) {
      setSelectedImages(selectedImages.filter((image) => image !== imageName));
    } else {
      setSelectedImages([...selectedImages, imageName]);
    }
    countImage();
  };
  const countImage = () => {
    // setCount((prevCount) => (selectedImages ? prevCount + 1 : prevCount - 1));
    onCountChange((prevCount) =>
      selectedImages ? prevCount + 1 : prevCount - 1
    );
  };
  return (
    <div className="image-prefer">
      {images.map((data) => (
        <div
          key={data.imageName}
          onClick={() => handleImageClick(data.imageName)}
          className={
            selectedImages.includes(data.imageName)
              ? "selected-image_div"
              : "image_div"
          }
        >
          <p className="image-text">{data.imageText}</p>
          <img
            className="image"
            src={data.imageName}
            alt={data.imageName}
            tabIndex={-1}
          />
          {selectedImages.includes(data.imageName) && (
            <img src={Tick} alt="Tick" className="tick-image" />
          )}
        </div>
      ))}
    </div>
  );
}
export default ImagePreference;
