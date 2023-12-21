import React, { useRef } from "react";
import "./TwoColumnImageGrid.css";
function TwoColumnImageGrid({ leftImages, rightImages }) {
  const containerRef = useRef(null);

  const handleScroll = () => {
    const scrollTop = containerRef.current.scrollTop;
    const leftColumn = document.querySelector(".left-column");
    const rightColumn = document.querySelector(".right-column");

    if (leftColumn && rightColumn) {
      leftColumn.scrollTop = scrollTop;
      rightColumn.scrollTop =
        rightColumn.scrollHeight -
        rightColumn.clientHeight -
        containerRef.current.scrollHeight +
        scrollTop;
    }
  };
  return (
    <>
      <div className="grid-images" onScroll={handleScroll} ref={containerRef}>
        <div className="left-column">
          {leftImages.map((data, index) => (
            <div className="grid-item" key={index}>
              <img src={data.imageName} alt={`Item ${index}`} />
            </div>
          ))}
        </div>
        <div className="right-column">
          {rightImages.map((data, index) => (
            <div className="grid-item" key={index}>
              <img src={data.imageName} alt={`Item ${index}`} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default TwoColumnImageGrid;
