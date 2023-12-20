import React from "react";
import CarouselView from "./Images/CarouselView.svg";
import GalleryView from "./Images/GalleryView.svg";
import ListView from "./Images/ListView.svg";
import { useGlobalInfo } from "../../contexts/globalContext";

function ViewToggle() {
  const context = useGlobalInfo();
  return (
    <div className="view-toggle-container pd-8 br-8">
      <img
        style={{
          backgroundColor:
            context.landingView === "gallery" ? "var(--primary-color)" : "",
        }}
        onClick={() => {
          context.changeLandingView("gallery");
        }}
        src={GalleryView}
      />
      <img
        style={{
          backgroundColor:
            context.landingView === "carousel" ? "var(--primary-color)" : "",
        }}
        onClick={() => {
          context.changeLandingView("carousel");
        }}
        src={CarouselView}
      />
      <img
        style={{
          backgroundColor:
            context.landingView === "list" ? "var(--primary-color)" : "",
        }}
        onClick={() => {
          context.changeLandingView("list");
        }}
        src={ListView}
      />
    </div>
  );
}

export default ViewToggle;
