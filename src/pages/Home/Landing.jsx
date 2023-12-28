import React, { useEffect, useRef, useState } from "react";
import auction_pieces from "../../assets/Home/auctionPieces";
import { wait } from "../../scripts/helpers";
import "./Landing.css";
import Info from "../../components/Landing/Info";
import QR_Card from "../../components/Landing/QR_Card";
import { useNavigate } from "react-router-dom";

function Landing() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [showSlideShow, setShowSlideShow] = useState(true);
  const [showInfo, setShowInfo] = useState(true);
  const [showQR, setShowQR] = useState(false);

  const navigate = useNavigate();

  const landing_layer_ref = useRef(null);

  async function runSlideShow() {
    while (showSlideShow) {
      setShowInfo(true);
      await wait(2500);
      setShowQR(true);
      await wait(2500);
      setShowQR(false);
      await wait(2500);
      setShowInfo(false);
      landing_layer_ref.current.classList.add("blacked-layer");
      await wait(1000);
      setSlideIndex((prevSlideIndex) => {
        if (prevSlideIndex === auction_pieces.length - 1) {
          return 0;
        } else return prevSlideIndex + 1;
      });
      landing_layer_ref.current.classList.remove("blacked-layer");
    }
  }

  useEffect(() => {
    setShowSlideShow(true);
    runSlideShow();
  }, []);

  return (
    <div
      className="landing-container"
      style={{
        background: `url(${auction_pieces[slideIndex].img_path})`,
      }}
    >
      <div
        ref={landing_layer_ref}
        className="layer"
        onClick={(e) => {
          navigate("/home");
        }}
      >
        <img className="watermark" src="/Images/logo.png" alt="watermark" />
        {showInfo && <Info auction_piece={auction_pieces[slideIndex]} />}
        {showQR && <QR_Card />}
      </div>
    </div>
  );
}

export default Landing;
