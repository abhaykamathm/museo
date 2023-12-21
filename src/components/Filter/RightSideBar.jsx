import React, { useState } from "react";
import "./RightSideBar.css";
import Filter from "./Images/Filter.svg";
import Art from "./Images/Art.svg";
import Calendar from "./Images/Calendar.svg";
import Component from "./Images/Component.svg";
import Earth from "./Images/Earth.svg";
import Hammer from "./Images/Hammer.svg";
import Professions from "./Images/Professions.svg";
import Tag from "./Images/Tags.svg";
import ThumbsUp from "./Images/ThumbUp.svg";
function RightSideBar() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [active, setActive] = useState(false);
  const [checkboxCount, setCheckboxCount] = useState(0);
  const data = [
    { id: "1", icon: ThumbsUp, text: "Your Interests" },
    { id: "2", icon: Professions, text: "Artist" },
    { id: "3", icon: Art, text: "Art Period" },
    { id: "4", icon: Calendar, text: "Time Period" },
    { id: "5", icon: Earth, text: "Origin" },
    { id: "6", icon: Tag, text: "Estimate Range" },
    { id: "7", icon: Hammer, text: "Reserve" },
    { id: "8", icon: Hammer, text: "Reserve" },
  ];

  const Artist = [
    { id: "1", text: "Office" },
    { id: "2", text: "Home" },
    { id: "3", text: "Chritmas" },
    { id: "2", text: "Gifts" },
  ];
  const handleItemClick = (item) => {
    setSelectedItem(item);
    setActive(!active);
    console.log(selectedItem);
  };
  const handleCheckboxChange = (isChecked) => {
    // Update checkbox count when a checkbox is checked or unchecked
    setCheckboxCount((prevCount) =>
      isChecked ? prevCount + 1 : prevCount - 1
    );
  };
  return (
    <>
      <div id="right-sidebar">
        <div className="side-view">
          <div className="sidebar-component">
            <div className="filter">
              <div className="filter-div">
                <img src={Filter} alt=""></img>
                <span style={{ color: "#FFF" }}>Filters</span>
              </div>
              {active && (
                <>
                  <div className="save-input">
                    <input
                      type="text"
                      placeholder="Name your preference"
                    ></input>
                    <div>Save preferences</div>
                  </div>
                  <button>Filter</button>{" "}
                </>
              )}
            </div>
            <div className="side-btn">
              {data.map((dataItem) => (
                <div>
                  <div
                    key={dataItem.id}
                    className={`container `}
                    onClick={() => handleItemClick(dataItem.text)}
                  >
                    {/* <div className="Image-div"> */}
                    <img src={dataItem.icon} alt="" />
                    <span>{dataItem.text}</span>
                    {/* </div> */}
                    {dataItem.text === "Artist" && checkboxCount > 0 && (
                      <span className="count">{checkboxCount}</span>
                    )}
                  </div>
                  {active &&
                    selectedItem === dataItem.text &&
                    dataItem.text === "Artist" && (
                      <div className="interest">
                        {Artist.map((interest) => (
                          <ul>
                            <li key={interest.id} className="checkboxes">
                              <div className="check-div">
                                <input
                                  type="checkbox"
                                  onChange={(e) =>
                                    handleCheckboxChange(e.target.checked)
                                  }
                                ></input>
                                <span className="checkmark"></span>
                                <div>{interest.text}</div>
                              </div>
                              <p>(30)</p>
                            </li>
                          </ul>
                        ))}
                      </div>
                    )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RightSideBar;
