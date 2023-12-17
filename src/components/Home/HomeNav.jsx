import React from "react";
import "./HomeNav.css";
import search from "./Images/search.svg";
import filter from "./Images/filter.svg";

import ViewToggle from "./ViewToggle";
import { useGlobalInfo } from "../../contexts/globalContext";
import CarouselOptions from "./CarouselOptions";

function HomeNav() {
  const context = useGlobalInfo();
  return (
    <div id="home-nav">
      {context.landingView === "gallery" ? (
        <img className="logo" src="/Images/logo.png" />
      ) : (
        ""
      )}
      {context.landingView === "list" ? (
        <img className="logo" src="/Images/logo.png" />
      ) : (
        ""
      )}
      {context.landingView === "gallery" ? (
        <div className="options">
          <div>Category</div>
          <div>Open</div>
          <div>Upcoming</div>
          <div>Past</div>
          <div>
            <img src={search} />
          </div>
        </div>
      ) : (
        ""
      )}
      {context.landingView === "list" ? (
        <input id="list-input-lot" placeholder="Search Lots" />
      ) : (
        ""
      )}
      {context.landingView === "carousel" ? <CarouselOptions /> : ""}
      <div className="view-filter-container">
        <ViewToggle />
        <div className="filter">
          <img src={filter} />
        </div>
      </div>
    </div>
  );
}

export default HomeNav;
