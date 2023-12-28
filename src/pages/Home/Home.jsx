import React, { useEffect, useState } from "react";
import auction_pieces from "../../assets/Home/auctionPieces";
import "./Home.css";
import HomeNav from "../../components/Home/HomeNav";
import PaintingInfo from "../../components/Home/PaintingInfo";
import AuctionPiecesRow from "../../components/Home/AuctionPiecesRow";
import { useGlobalInfo } from "../../contexts/globalContext";
import ListView from "./ListView";
import CarouselView from "./CarouselView";
import FocusContainer from "../../components/Carousel/FocusContainer";
import { useNavigate } from "react-router-dom";

function Home() {
  const context = useGlobalInfo();
  const [auctionPieces, setAuctionPieces] = useState(auction_pieces);
  const [background, setBackground] = useState(auction_pieces[0]);
  const navigate = useNavigate();

  // useEffect(() => {
  //   setTimeout(() => {
  //     navigate("/");
  //   }, 5000);
  // }, []);

  return (
    <div
      id="home-container"
      style={{
        background:
          context.landingView === "gallery"
            ? `url(${background.img_path})`
            : "",
      }}
    >
      <HomeNav />
      {context.landingView === "gallery" ? (
        <div className="layer pd-8">
          <div id="home-main">
            <PaintingInfo background={background} />
            <AuctionPiecesRow
              rowType={"live_tv"}
              rowTypeName={"Take a look at live TV Shows"}
              auctionPieces={auctionPieces}
              setBackground={setBackground}
            />
            <AuctionPiecesRow
              rowType={"live_tv_others"}
              rowTypeName={"Take a look at other live shows"}
              auctionPieces={auctionPieces}
              setBackground={setBackground}
            />
            <AuctionPiecesRow
              rowType={"ends_soon"}
              rowTypeName={"Auction ends soon"}
              auctionPieces={auctionPieces}
              setBackground={setBackground}
            />
            <AuctionPiecesRow
              rowType={"online"}
              rowTypeName={"Online masterpieces that might interest you"}
              auctionPieces={auctionPieces}
              setBackground={setBackground}
            />
            <AuctionPiecesRow
              rowType={"interests"}
              rowTypeName={"Here's a spotlight on your interests"}
              auctionPieces={auctionPieces}
              setBackground={setBackground}
            />
            <AuctionPiecesRow
              rowType={"music"}
              rowTypeName={"Music artists you might like"}
              auctionPieces={auctionPieces}
              setBackground={setBackground}
            />
          </div>
        </div>
      ) : (
        ""
      )}
      {context.landingView === "carousel" && (
        <>
          <CarouselView auctionPieces={auctionPieces} />
          {/* <FocusContainer /> */}
        </>
      )}
      {context.landingView === "list" && (
        <ListView auctionPieces={auctionPieces} />
      )}
    </div>
  );
}

export default Home;
