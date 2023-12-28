import React from "react";
import Open from "./Images/Open.svg";
import Upcoming from "./Images/Upcoming.svg";
import Past from "./Images/Past.svg";

function CarouselOptions() {
  return (
    <>
      <div className="category-select-container">
        <select className="category-selector br-8 fs-16">
          <option>Category</option>
        </select>
      </div>
      <div className="carousel-options gp-16 fs-16">
        <input className="fs-16 br-8" placeholder="Search Lots" />
        <div>
          <img className="h-16" src={Open} />
          Open
        </div>
        <div>
          <img className="h-16" src={Upcoming} />
          Upcoming
        </div>
        <div>
          <img className="h-16" src={Past} />
          Past
        </div>
      </div>
    </>
  );
}

export default CarouselOptions;
