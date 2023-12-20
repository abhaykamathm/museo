import React from "react";
import pages from "./Images/pages.svg";

function AuctionPiecesRow({
  rowType,
  rowTypeName,
  auctionPieces,
  setBackground,
}) {
  return (
    <div className="live-paintings-container">
      <div className="collection-name">{rowTypeName}</div>
      <div className="live-paintings">
        {auctionPieces.map((painting, index) => {
          return (
            <div
              className="img-container"
              key={index}
              onClick={() => {
                setBackground(painting);
              }}
            >
              <img loading="lazy" className="auction_piece" src={painting.img_path} />
              <div className="pages-svg">
                <img loading="lazy" src={pages} />
                <div>{painting.count}</div>
              </div>
              <div className="auction-piece-name pd-16">{painting.name}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AuctionPiecesRow;
