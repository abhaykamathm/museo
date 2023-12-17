import React, { useState } from "react";
import "./ActiveSales.css";
import filter from '../Home/Images/filter.svg'
import active_sales from "../../assets/Home/activeSales";

export const ActiveSales = () => {
    const [activeSales , setActiveSales] = useState(active_sales)
    const [selectedSale  , setSelectedSales] = useState()
    const handleActiveSaleSelected = (index) => {
        // console.log(index);
        setSelectedSales(index)
    }
  return (
    <div id="ActiveSales">
      <div className="ActiveSales-top-nav">
        <div>
          <div>My buying & biddings</div>
          <div></div>
          <div>Active sales (3)</div>
        </div>
        <div>
            <div>Search</div>
            <div><img src="" alt="" /></div>
        </div>
        <div><img src={filter} alt="" /></div>
      </div>
      {activeSales.map((piece, index) => {
        return (
          <div key={index} className={`artpiece ${selectedSale === index ? 'selected' : ''}`}
           onClick={()=>handleActiveSaleSelected(index)}>
            <img src={piece.img_path} />
            <div className="info">
                <div className="infoStatus">
                {
                    piece.status==='live'?
                    <span>Live</span>:
                        <span>{piece.status}</span>           
                }
                {
                            piece.currentBid?
                            <span>Bid is with you</span>:''
                        }
                </div>
                {
                    piece.currentBid?
                    <div>LOT - {piece.lot}</div>:
                    <div>Sale #{piece.saleId}</div>
                }
              <div>
                <div>{piece.name}</div>
              </div>
              {
                    piece.currentBid?
                    <div>Current Bid : {piece.yourMaxBid}</div>:
                    <div>{piece.date}</div>
              }
              {
                    piece.currentBid?
                    <div>Your max bid : {piece.currentBid}</div>:
                    <div>Auction registration made on {piece.Auction_registration}</div>
              }
              
            </div>
            {
                index==selectedSale?
                <button className="btn-update-bid">Update Bid</button>:''
              }
          </div>
        );
      })}
    </div>
  );
};
