import React, { useState } from "react";
import "./ReadyToCheckOut.css";
import filter from "../Home/Images/filter.svg";
import search from "../Home/Images/search.svg";
import readyToCheckOut_data from "../../assets/Home/readyToCheckOut";

export const ReadyToCheckOut = () => {
  const [readyToCheckOut, setreadyToCheckOut] = useState(readyToCheckOut_data);
  const [selectedSale, setSelectedSales] = useState();
  const handleReadyToCheckOutelected = (index) => {
    // console.log(index);
    setSelectedSales(index);
  };
  return (
    <div id="ReadyToCheckOut">
      <div className="ReadyToCheckOut-top-nav">
        <div className="ReadyToCheckOut-top-nav-left">
          <div id="header-1">My buying & biddings</div>
          <div className="line-bar">|</div>
          <div id="header-2">Ready to CheckOut (3)</div>
        </div>
        <div className="ReadyToCheckOut-top-nav-right">
          <div className="search-bar-div">
            <input placeholder="Search Lots" id="search-text" />
            <div className="search-img">
              <img src={search} alt="" />
            </div>
          </div>
          <div className="filter-div">
            <img src={filter} alt="" />
          </div>
        </div>
      </div>
      <div className="cards-display-container">
        {readyToCheckOut.map((piece, index) => {
          return (
            <div
              key={index}
              className={`artpiece ${selectedSale === index ? "selected" : ""}`}
              onClick={() => handleReadyToCheckOutelected(index)}
            >
              <div className="image-div">
                <img src={piece.img_path} className="auction-image"/>
              </div>
              <div className="bottom-container">
                <div className="info">
                  <div className="text-container">
                    <div className="peice-name bold-font-weight">{piece.name}</div>
                    <div className="artist-name">{piece.artist}</div>
                    <div className="peice-date normal-font-weight">{piece.date}</div>
                  </div>

                  <div className="bid-container">
                    <div className="bid-value bold-font-weight">{piece.your_bid}</div>
                    <div className="bid-text normal-font-weight">Your Bid</div>
                  </div>
                </div>
                <div className="btn-container">
                  <div className="cost-btn medium-font-weight">Cost Calculator</div>
                  <div className="checkout-btn medium-font-weight">Checkout</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
