import React from "react";
import "./HomeNav.css";
import search from "./Images/search.svg";
import filter from "./Images/filter.svg";
import ViewToggle from "./ViewToggle";
import { useGlobalInfo } from "../../contexts/globalContext";

function HomeNav() {
  const context = useGlobalInfo();
  return (
    <div id="home-nav">
      <img
        className="logo"
        src="https://s3-alpha-sig.figma.com/img/7c60/ade7/d5d7f778a13bdb9a36f6c59f41f90b1c?Expires=1703462400&Signature=lTNHWT~1BRNyS6RHEthc3gjbg~KHxqrjKrJ0rwbKw8MVHJ~jUKz~HVWKAWheWP631Jv9ZDCMKBOVz-gUWxyM84zqFq1YNnhdDSx5DQV5yWkBN76y0KIWxbzVk5qjWz9ySMZ8kJOlKpZ~ff~4cq6-wjiHYCLK7QlHtqFHx4qyvrGJ4E9wj14g54BrrfkTXBD0Wwi19Kevjtz0iO-HrIAVlrXGnqCjdxQA9hqTjPN0gGx8ut-kp9eOKE-~G3sL2PZm5aqRGC7wHw0EFfeiA7y12d2g6bP7FCutQHX04Y08E11Wlf1XYB9m5uCIw~55vA2eIKt2ICH8os~sbvxM6XZ4LQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
      />
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
        <input placeholder="Search Lots" />
      ) : (
        ""
      )}

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
