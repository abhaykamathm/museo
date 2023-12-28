import React from "react";
import "./CameraViewsPanel.css";

const cam_view_images = [
  "/Images/Live/cam1.png",
  "/Images/Live/cam2.png",
  "/Images/Live/cam3.png",
];

function CameraViewsPanel({ live_container_ref }) {
  return (
    <div className="cam-view-panel-container gp-8">
      {cam_view_images.map((image, index) => {
        return (
          <div key={index} className="view-container">
            <div className="identifier br-16"></div>
            <img
              className="br-8"
              src={image}
              onClick={(e) => {
                let card_img = e.target.src.toString().match(/\/Images\/.*/)[0];
                let bg_img = live_container_ref.current.style.background
                  .toString()
                  .match(/url\("([^"]+)"\)/)[1];
                // Set background image to cam image
                live_container_ref.current.style.background = `url(${card_img})`;

                //Set cam image to background image
                e.target.src = bg_img;
              }}
            />
          </div>
        );
      })}
    </div>
  );
}

export default CameraViewsPanel;
