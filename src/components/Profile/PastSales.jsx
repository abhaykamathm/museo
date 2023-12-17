import React, { useState } from "react";
import './PastSales.css'
import filter from "../Home/Images/filter.svg";
import search from "../Home/Images/search.svg";
import past_sales from "../../assets/Home/pastSales";

export const PastSales = () => {
  const [pastSales, setPastSales] = useState(past_sales);
  const [selectedSale, setSelectedSales] = useState();
  const handlePastSaleselected = (index) => {
    // console.log(index);
    setSelectedSales(index);
  };
  return (
    <div id="PastSales">
      <div className="PastSales-top-nav">
        <div className="PastSales-top-nav-left">
          <div id="header-1">My buying & biddings</div>
          <div className="line">|</div>
          <div id="header-2">Past sales (3)</div>
        </div>
        <div className="PastSales-top-nav-right">
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
      <div className="active-sale-container">
        {pastSales.map((piece, index) => {
          return (
            <div
              key={index}
              className={`artpiece ${selectedSale === index ? "selected" : ""}`}
              onClick={() => handlePastSaleselected(index)}
            >
              <img src={piece.img_path} />
              <div className="info">
                <div className="infoStatus">
                  {piece.status === "live" ? (
                    <div>
                      <span id="circle"></span>
                      <span>Live</span>
                    </div>
                  ) : piece.status.split(" ")[0] === "Upcoming" ? (
                    <div className="online-Auction-header">
                      <span className="statusNotLive1">{piece.status}</span>
                    </div>
                  ) : (
                    <div className="online-Auction-header">
                      <span className="statusNotLive1">Online Auction | </span>
                      <span className="statusNotLive2">{piece.status}</span>
                    </div>
                  )}

                  {piece.currentBid ? (
                    <span id="bid-status-btn">Bid is with you</span>
                  ) : (
                    ""
                  )}
                </div>
                {piece.currentBid ? (
                  <div className="lite-text">LOT - {piece.lot}</div>
                ) : (
                  <div className="lite-text">Sale #{piece.saleId}</div>
                )}
                <div>
                  <div>{piece.name}</div>
                </div>
                {piece.currentBid ? (
                  <div className="lite-text">
                    Current Bid :{" "}
                    <span id="current-bid">{piece.yourMaxBid}</span>
                  </div>
                ) : (
                  <div className="lite-text">{piece.date}</div>
                )}
                {piece.currentBid ? (
                  <div className="lite-text">
                    Your max bid : {piece.currentBid}
                  </div>
                ) : (
                  <div className="lite-text">
                    Auction registration made on {piece.Auction_registration}
                  </div>
                )}
              </div>
              {index == selectedSale ? (
                <button className="btn-update-bid">Update Bid</button>
              ) : (
                ""
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
