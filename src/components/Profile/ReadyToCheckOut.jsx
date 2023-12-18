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
              <img src={piece.img_path} />
              <div className="info">
                <div>{piece.name}</div>

                <div className="lite-text">{piece.artist}</div>
                <div className="past-Sale-date">{piece.date}</div>
              </div>
              <div className="bid-container">
                <div>{piece.your_bid}</div>
                <div>Your Bid</div>
              </div>
              <div className="btn-container">
                <div>Cost Calculator</div>
                <div>Checkout</div>
              </div>
              {/* <div className="lite-text">
                  Auction registration made on {piece.Auction_registration}
                </div> */}

              {/* {index == selectedSale ? (
                  <button className="btn-update-bid">Auction Won</button>
                ) : (
                  ""
                )} */}
            </div>
          );
        })}
      </div>
    </div>
  );
};
