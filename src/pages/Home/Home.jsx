import React, { useState } from "react";
import pages from "./pages.svg";

import "./Home.css";
import HomeNav from "../../components/Home/HomeNav";

function Home() {
  const [liveAuctions, setLiveAuctions] = useState([
    {
      name: "Portrait of Young Man Holding a Roundel",
      img_path: "/Images/Home/painting1.png",
      artist: "By Sandro Botticelli",
      count: 5,
    },
    {
      name: "Adoration of the Magi",
      img_path: "/Images/Home/painting2.png",
      artist: "By Sandro Botticelli",
      count: 12,
    },
    {
      name: "Portrait of Young Man Holding a Roundel",
      img_path: "/Images/Home/painting1.png",
      artist: "By Sandro Botticelli",
      count: 5,
    },
    {
      name: "Adoration of the Magi",
      img_path: "/Images/Home/painting2.png",
      artist: "By Sandro Botticelli",
      count: 12,
    },
  ]);
  const [background, setBackground] = useState(liveAuctions[0]);
  return (
    <div
      id="home-container"
      style={{
        background: `url(${background.img_path})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="layer">
        <HomeNav />
        <div id="home-main">
          <div className="painting-info">
            <div id="painting-name">{background.name}</div>
            <div id="artist-name">{background.artist}</div>
            <button>Watch</button>
          </div>
          <div
            style={{
              fontWeight: "500",
              color: "#e8e8e8",
              padding: "1rem",
            }}
          >
            Take a look at live TV shows
          </div>
          <div className="live-paintings">
            {liveAuctions.map((painting, index) => {
              return (
                <div
                  className="img-container"
                  key={index}
                  onClick={() => {
                    setBackground(painting);
                  }}
                >
                  <img src={painting.img_path} />
                  <div className="pages-svg">
                    <img src={pages} />
                    <div>{painting.count}</div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="live-paintings">
            {liveAuctions.map((painting, index) => {
              return (
                <div
                  className="img-container"
                  key={index}
                  onClick={() => {
                    setBackground(painting);
                  }}
                >
                  <img src={painting.img_path} />
                  <div className="pages-svg">
                    <img src={pages} />
                    <div>{painting.count}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
