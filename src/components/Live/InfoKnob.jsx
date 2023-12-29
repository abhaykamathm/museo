import React, { useState } from "react";
import "./InfoKnob.css";
import infoknob_data from "../../assets/Home/infoknob";
import "../../pages/Live/Live.css"
import infoActive from "/Images/Home/Info-active.png"

export const InfoKnob = () => {
  const [selectedKnob, setSelectedKnob] = useState(null);

  const handleKnobClick = (index) => {
    setSelectedKnob(index === selectedKnob ? null : index);
  };

  return (
    <div className="InfoKnob-container gp-16">
      {infoknob_data.map((data, index) => (
        <div
          key={index}
          className={`${index === selectedKnob ? "selected" : ""}`}
          onClick={() => handleKnobClick(index)}
          style={{width:"35%",marginRight: index === 0 ? '6%' : '' }}
        >
          {
            selectedKnob === index ?  
            <img src={infoActive} alt="knob" className={`infoknob-img ${index === selectedKnob ? 'clicked' : ''}`} />:
          
            <img src={data.knob_image} alt="knob" className={`infoknob-img ${index === selectedKnob ? 'clicked' : ''}`} />
          }
          {selectedKnob === index && (
            <div className="details-container pd-16 br-8 gp-8">
              <div className="details-top gp-8">
                <img src={data.video_btn} alt="video-btn" />
                <div>{data.duration}</div>
              </div>
              <div>{data.title}</div>
              <div>Frame : {data.frame_name}</div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
