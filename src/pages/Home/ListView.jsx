import React from "react";
import "./ListView.css";
import ListOpen from "./ListOpen.svg";

function ListView({ auctionPieces }) {
  return (
    <div id="list-view">
      <div className="artist-collection-card">
        <div className="artist-name">Sandro Botticelli’s Collection</div>
        <p>
          The Florentine painter and draughtsman Sandro Botticelli was one of
          the most esteemed artists in Italy. His graceful pictures of the
          Madonna and Child, his altarpieces and his life-size mythological
          paintings, such as 'Venus and Mars', were immensely popular in his
          lifetime.
        </p>
        <div className="curator-host">
          <div>Curator (s) - Catherine Morris</div>
          <div className="wall"></div>
          <div>Host (s) - Catherine Morris</div>
        </div>
        <img src="/Images/Home/artist1.png" />
      </div>
      {auctionPieces.map((piece, index) => {
        return (
          <div key={index} className="artpiece">
            <img className="art-image" src={piece.img_path} />
            <div className="info">
              <div className="lot">LOT Number : {piece.lot}</div>
              <div className="piece-name">
                <span>{piece.name} | </span>
                <span className="collection">{piece.collection_name}</span>
              </div>
              <div className="range">
                Estimate range |{" "}
                <span className="price">{piece.estimate_range}</span>
              </div>
              <div className="date">{piece.date}</div>
            </div>
            <div className="list-opener">
              <img className="list-open" src={ListOpen} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ListView;
