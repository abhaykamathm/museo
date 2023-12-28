import React from "react";
import GoBack from "./Assets/GoBack.svg";
import Tick from "./Assets/Tick.svg";
import Microphone from "./Assets/Microphone.svg";
import PaintPalette from "./Assets/PaintPalette.svg";
import Dimension from "./Assets/Dimension.svg";
import Receipt from "./Assets/Receipt.svg";
import Timeline from "./Assets/Timeline.svg";

import "./BidPreview.css";
import { useGlobalInfo } from "../../../contexts/globalContext";

function BidPreview() {
  const context = useGlobalInfo();
  return (
    <div className="bid-preview-container">
      <div className="preview-card br-8">
        <div className="timeline-bar gp-4">
          <img src={Timeline} />
          <div className="labels fs-16">
            <span>Preview</span>
            <span>Placed</span>
          </div>
        </div>
        <div className="main">
          <div className="info gp-12">
            <div className="title fs-16">LOT NUMBER 25</div>
            <div className="fs-16">Portrait of Young Man Holding a Roundel</div>
            <div className="row">
              <img src={PaintPalette} />
              <span className="key">Artist :</span>
              <span className="value">Sandro Botticelli</span>
            </div>
            <div className="row">
              <img src={Dimension} />
              <span className="key">Dimensions :</span>
              <span className="value">38.9 cm</span>
              <span className="key">(W)</span>
              <span className="value">58.7 cm</span>
              <span className="key">(H)</span>
            </div>
            <div className="row">
              <img src={Receipt} />
              <span className="key">Sale Number :</span>
              <span className="value">#L3256</span>
            </div>
            <div
              className="fs-16"
              style={{
                fontWeight: "500",
              }}
            >
              Bid Placed
            </div>
            <div className="pd-8 br-4 placed-bid">
              <span>$ 7,30,00,000</span>
              <img className="h-16" src={Microphone} />
            </div>
            <div className="t-and-c gp-8">
              <div className="check br-4 pd-4">
                <img className="h-8" src={Tick} />
              </div>
              <div>
                I{" "}
                <span
                  style={{
                    color: "#489933",
                  }}
                >
                  agree
                </span>{" "}
                to the Conditions of Business for Buyers{" "}
              </div>
            </div>
          </div>
          <div className="img-container">
            <img src="/Images/Home/painting1.png" className="br-8" />
          </div>
        </div>
        <div className="buttons-container">
          <button
            className="br-4 fs-16 go-back gp-8"
            onClick={() => {
              context.changeShowBidPreview(false);
              context.changeShowPlaceBid(true);
            }}
          >
            <img src={GoBack} />
            <span>Go back</span>
          </button>
          <button
            className="br-4 fs-16"
            style={{
              backgroundColor: "#753394",
              border: "none",
            }}
            onClick={() => {
              context.changeShowBidPreview(false);
              context.changeShowBidPlaced(true);
            }}
          >
            Place Bid
          </button>
        </div>
      </div>
    </div>
  );
}

export default BidPreview;
