import React from "react";

import Space from "./Assets/Space.svg";
import Backspace from "./Assets/Backspace.svg";
import Arrow from "./Assets/Arrow.svg";

import "./NumPad.css";

function NumPad() {
  return (
    <div className="numpad-container">
      <div className="output"></div>
      <div className="presets">
        <div className="amount">$73K</div>
        <div className="amount">$73.5K</div>
        <div className="amount">$74K</div>
        <div className="amount">$75K</div>
      </div>
      <div className="input-grid">
        <div className="grid-item">1</div>
        <div className="grid-item">2</div>
        <div className="grid-item">3</div>
        <div className="grid-item">-</div>
        <div className="grid-item">4</div>
        <div className="grid-item">5</div>
        <div className="grid-item">6</div>
        <div className="grid-item">
          <img src={Space} />
        </div>
        <div className="grid-item">7</div>
        <div className="grid-item">8</div>
        <div className="grid-item">9</div>
        <div className="grid-item">
          <img src={Backspace} />
        </div>
        <div className="grid-item">.</div>
        <div className="grid-item">0</div>
        <div className="grid-item">,</div>
        <div className="grid-item">
          <img src={Arrow} />
        </div>
      </div>
    </div>
  );
}

export default NumPad;