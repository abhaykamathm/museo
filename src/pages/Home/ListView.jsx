import React from "react";
import "./ListView.css";

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
            <img src={piece.img_path} />
            <div className="info">
              <div>{piece.lot}</div>
              <div>
                <div>{piece.name}</div>
                <div>{piece.collection_name}</div>
              </div>
              <div>Estimate range - {piece.estimate_range}</div>
              <div>{piece.date}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ListView;
