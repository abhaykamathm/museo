import React from "react";
import CarouselView from "./Images/CarouselView.svg";
import GalleryView from "./Images/GalleryView.svg";
import ListView from "./Images/ListView.svg";
import { useGlobalInfo } from "../../contexts/globalContext";

function ViewToggle() {
  const context = useGlobalInfo();
  return (
    <div className="view-toggle-container br-8">
      <div
        className="img-container br-8"
        style={{
          backgroundColor:
            context.landingView === "gallery" ? "var(--primary-color)" : "",
        }}
        onClick={() => {
          context.changeLandingView("gallery");
        }}
      >
        <img src={GalleryView} />
      </div>
      <div
        className="img-container br-8"
        style={{
          backgroundColor:
            context.landingView === "carousel" ? "var(--primary-color)" : "",
        }}
        onClick={() => {
          context.changeLandingView("carousel");
        }}
      >
        <img src={CarouselView} />
      </div>
      <div
        className="img-container br-8"
        style={{
          backgroundColor:
            context.landingView === "list" ? "var(--primary-color)" : "",
        }}
        onClick={() => {
          context.changeLandingView("list");
        }}
      >
        <img src={ListView} />
      </div>
    </div>
  );
}

export default ViewToggle;
