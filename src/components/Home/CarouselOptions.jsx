import React from "react";
import Open from "./Images/Open.svg";
import Upcoming from "./Images/Upcoming.svg";
import Past from "./Images/Past.svg";

function CarouselOptions() {
  return (
    <>
      <div className="category-select-container">
        <select className="category-selector">
          <option>Category</option>
        </select>
      </div>
      <div className="carousel-options">
        <input placeholder="Search Lots" />
        <div>
          <img src={Open} />
          Open
        </div>
        <div>
          <img src={Upcoming} />
          Upcoming
        </div>
        <div>
          <img src={Past} />
          Past
        </div>
      </div>
    </>
  );
}

export default CarouselOptions;
