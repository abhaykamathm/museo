import React from "react";
import { useNavigate } from "react-router-dom";
import Timeline from "./Images/Mobile.svg";
import "./Review.css";
function Review() {
    const navigate = useNavigate()
  return (
    <>
      <div id="reviewContainer">
        <div className="reviewDiv">
          <div className="reviewTimeline">
            <img src={Timeline}></img>
          </div>
          <div className="wrapReview">
            <div className="name">Review</div>
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
                    <div></div> Address : 49 Featherstone Street,London, EC1Y
                    8SY United Kingdom
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Review;
