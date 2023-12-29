import React, { useEffect, useState } from "react";
import "./ArtistFilter.css";
import firstImage from "../../../public/Images/Filter/Rectangle 11533.png";
import checkbox from "../../../public/Images/Filter/Check Circle 3.png";
import searchIcon from "../../../public/Images/Filter/Search.png";
import micIcon from "../../../public/Images/Filter/Group 484890.png";

const ArtistFilter = () => {
  const [showDetails, setShowDetails] = useState(false);

  const handleClick = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div id="artist-container">
      <div className="top-section-text fs-18">Artist</div>
      <div className="top-section">
        <div className="input-box">
          <div className="search-icon align-icon">
            <img src={searchIcon} alt="" />
          </div>
          <input className="input fs-16" type="text" placeholder="Search" />
          <div className="mic-icon align-icon">
            <img src={micIcon} alt="" />
          </div>
        </div>
        <div className="top-section-text-box">
          <div className="text fs-16">
            <div className="letter-A">A</div>B C D E F G H I J{" "}
          </div>
          <div className="text opacity fs-16">K L M N O P Q R S</div>
          <div className="text opacity fs-16">T U V W X Y Z</div>
        </div>
      </div>
      <div className="main-section">
        <div className="main-section-row">
          <div className="main-section-row-card" onClick={handleClick}>
            <img className="img" src={firstImage} alt="" />
            {showDetails && (
              <>
                <div className="check-box">
                  <img src={checkbox} alt="" />
                </div>
                <div className="img-text">Anna Jose</div>
              </>
            )}
          </div>
          <div className="main-section-row-card" onClick={handleClick}>
            <img className="img" src={firstImage} alt="" />
            {showDetails && (
              <>
                <div className="check-box">
                  <img src={checkbox} alt="" />
                </div>
                <div className="img-text">Anna Jose</div>
              </>
            )}
          </div>
          <div className="main-section-row-card" onClick={handleClick}>
            <img className="img" src={firstImage} alt="" />
            {showDetails && (
              <>
                <div className="check-box">
                  <img src={checkbox} alt="" />
                </div>
                <div className="img-text">Anna Jose</div>
              </>
            )}
          </div>
          <div className="main-section-row-card" onClick={handleClick}>
            <img className="img" src={firstImage} alt="" />
            {showDetails && (
              <>
                <div className="check-box">
                  <img src={checkbox} alt="" />
                </div>
                <div className="img-text">Anna Jose</div>
              </>
            )}
          </div>
        </div>
        <div className="main-section-row">
          <div className="main-section-row-card" onClick={handleClick}>
            <img className="img" src={firstImage} alt="" />
            {showDetails && (
              <>
                <div className="check-box">
                  <img src={checkbox} alt="" />
                </div>
                <div className="img-text">Anna Jose</div>
              </>
            )}
          </div>
          <div className="main-section-row-card" onClick={handleClick}>
            <img className="img" src={firstImage} alt="" />
            {showDetails && (
              <>
                <div className="check-box">
                  <img src={checkbox} alt="" />
                </div>
                <div className="img-text">Anna Jose</div>
              </>
            )}
          </div>
          <div className="main-section-row-card" onClick={handleClick}>
            <img className="img" src={firstImage} alt="" />
            {showDetails && (
              <>
                <div className="check-box">
                  <img src={checkbox} alt="" />
                </div>
                <div className="img-text">Anna Jose</div>
              </>
            )}
          </div>
          <div className="main-section-row-card" onClick={handleClick}>
            <img className="img" src={firstImage} alt="" />
            {showDetails && (
              <>
                <div className="check-box">
                  <img src={checkbox} alt="" />
                </div>
                <div className="img-text">Anna Jose</div>
              </>
            )}
          </div>
        </div>
        <div className="main-section-row">
          <div className="main-section-row-card" onClick={handleClick}>
            <img className="img" src={firstImage} alt="" />
            {showDetails && (
              <>
                <div className="check-box">
                  <img src={checkbox} alt="" />
                </div>
                <div className="img-text">Anna Jose</div>
              </>
            )}
          </div>
          <div className="main-section-row-card" onClick={handleClick}>
            <img className="img" src={firstImage} alt="" />
            {showDetails && (
              <>
                <div className="check-box">
                  <img src={checkbox} alt="" />
                </div>
                <div className="img-text">Anna Jose</div>
              </>
            )}
          </div>
          <div className="main-section-row-card" onClick={handleClick}>
            <img className="img" src={firstImage} alt="" />
            {showDetails && (
              <>
                <div className="check-box">
                  <img src={checkbox} alt="" />
                </div>
                <div className="img-text">Anna Jose</div>
              </>
            )}
          </div>
          <div className="main-section-row-card" onClick={handleClick}>
            <img className="img" src={firstImage} alt="" />
            {showDetails && (
              <>
                <div className="check-box">
                  <img src={checkbox} alt="" />
                </div>
                <div className="img-text">Anna Jose</div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtistFilter;
