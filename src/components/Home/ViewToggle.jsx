import React from "react";
import CarouselView from "./CarouselView.svg";
import GalleryView from "./GalleryView.svg";
import ListView from "./ListView.svg";

function ViewToggle() {
  return (
    <div className="view-toggle-container">
      <img src={GalleryView} />
      <img src={CarouselView} />
      <img src={ListView} />
    </div>
  );
}

export default ViewToggle;
