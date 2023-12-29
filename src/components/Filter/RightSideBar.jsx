import React, { useState } from "react";
import "./RightSideBar.css";
import Filter from "./Images/Filter.svg";
import Art from "./Images/Art.svg";
import Calendar from "./Images/Calendar.svg";
import Earth from "./Images/Earth.svg";
import Hammer from "./Images/Hammer.svg";
import Design from "./Images/DesignOil.svg";
import Professions from "./Images/Professions.svg";
import Tag from "./Images/Tags.svg";
import ThumbsUp from "./Images/ThumbUp.svg";
import ImagePreference from "../Login/ImagePreference";
import Image1 from "../Login/Images/Image1.png";
import Image2 from "../Login/Images/Image2.png";
import Image3 from "../Login/Images/Image3.svg";
import Image4 from "../Login/Images/Image4.svg";
import Image5 from "../Login/Images/Image5.svg";
import Image6 from "../Login/Images/Image6.svg";
import Tick from "./Images/Check.svg";
import Landscape from "./Images/Landscape.svg";
import Vector from "./Images/Vector.svg";
import Line from "./Images/Line.svg";
import searchIcon from "../../../public/Images/Filter/Search.png";
import micIcon from "../../../public/Images/Filter/Group 484890.png";

function RightSideBar() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [active, setActive] = useState(false);
  const [yourInterestCount, setYourInterestCount] = useState(0);
  const [timePeriodCount, setTimePeriodCount] = useState(0);
  const [originCount, setOriginCount] = useState(0);
  const [activeSection, setActiveSection] = useState(null);

  const data = [
    { id: "1", icon: ThumbsUp, text: "Your Interests" },
    { id: "2", icon: Professions, text: "Artist" },
    { id: "3", icon: Art, text: "Art Period" },
    { id: "4", icon: Calendar, text: "Time Period" },
    { id: "5", icon: Earth, text: "Origin" },
    { id: "6", icon: Tag, text: "Estimate Range" },
    { id: "7", icon: Hammer, text: "Reserve" },
    { id: "8", icon: Design, text: "Medium" },
  ];
  const Images = [
    { id: "1", imageName: Image1, imageText: "Abstract" },
    { id: "2", imageName: Image2, imageText: "Cubism" },
    { id: "3", imageName: Image3, imageText: "Pointilism" },
    { id: "4", imageName: Image4, imageText: "Renaissance" },
    { id: "5", imageName: Image5, imageText: "Abstract" },
    { id: "6", imageName: Image6, imageText: "Cubism" },
  ];

  const Artist = [
    { id: "1", text: "Office" },
    { id: "2", text: "Home" },
    { id: "3", text: "Chritmas" },
    { id: "4", text: "Gifts" },
  ];
  const TimePeriod = [
    { id: "1", text: "21th Century" },
    { id: "2", text: "20th Century" },
    { id: "3", text: "19th Century" },
    { id: "4", text: "18th Century" },
  ];
  const Origin = [
    { id: "1", text: "Africa" },
    { id: "2", text: "America" },
    { id: "3", text: "Spain" },
    { id: "4", text: "Argentina" },
    { id: "5", text: "South Africa" },
  ];
  const Reserve = [
    { id: "1", text: "No reserve" },
    { id: "2", text: "Reserve Met" },
    { id: "3", text: "Reserve Not Met" },
  ];
  const handleItemClick = (item) => {
    setSelectedItem(item.icon);
    setActive(!active);
    if (activeSection === item.text) {
      setActive(!active);
      setActiveSection(null);
    } else {
      setActive(true);
      setActiveSection(item.text);
    }

    console.log(selectedItem);
  };
  const handleCheckboxChange = (isChecked, section) => {
    // Update checkbox count when a checkbox is checked or unchecked
    if (section === "yourInterest") {
      setYourInterestCount((prevCount) =>
        isChecked ? prevCount + 1 : prevCount - 1
      );
    } else if (section === "timePeriod") {
      setTimePeriodCount((prevCount) =>
        isChecked ? prevCount + 1 : prevCount - 1
      );
    } else if (section === "origin") {
      setOriginCount((prevCount) =>
        isChecked ? prevCount + 1 : prevCount - 1
      );
    }
  };

  return (
    <>
      <div id="right-sidebar">
        <div className="side-view">
          <div className="sidebar-component">
            <div className="filter">
              <div className="filter-div">
                <img src={Filter} alt=""></img>
                <span className="fs-20" style={{ color: "#FFF" }}>
                  Filters
                </span>
              </div>
              {active && (
                <>
                  <div className="save-input">
                    <input
                      type="text"
                      placeholder="Name your preference"
                      className="fs-16"
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
                    onClick={() => handleItemClick(dataItem)}
                  >
                    <div className="Image-div">
                      <img src={dataItem.icon} alt="" />
                      <span>{dataItem.text}</span>
                    </div>
                    {dataItem.text === "Your Interests" &&
                      yourInterestCount > 0 && (
                        <span className="count">{yourInterestCount}</span>
                      )}
                    {dataItem.text === "Time Period" && timePeriodCount > 0 && (
                      <span className="count">{timePeriodCount}</span>
                    )}
                    {dataItem.text === "Origin" ? (
                      <>
                        {originCount > 0 && (
                          <span className="count">{originCount}</span>
                        )}
                        <div className="origin-icon">
                          <div>
                            <img src={Vector} alt=""></img>
                          </div>
                          <div>
                            <img src={Landscape} alt=""></img>
                          </div>
                        </div>
                      </>
                    ) : (
                      ""
                    )}
                  </div>

                  {active &&
                    selectedItem === dataItem.icon &&
                    activeSection === "Your Interests" && (
                      <div className="interest">
                        {Artist.map((interest) => (
                          <ul>
                            <li key={interest.id} className="checkboxes">
                              <div className="check-div">
                                <input
                                  type="checkbox"
                                  onChange={(e) =>
                                    handleCheckboxChange(
                                      e.target.checked,
                                      "yourInterest"
                                    )
                                  }
                                ></input>
                                {/* <span className="checkmark"></span> */}
                                <div>{interest.text}</div>
                              </div>
                              <p>(30)</p>
                            </li>
                          </ul>
                        ))}
                      </div>
                    )}
                  {active &&
                    selectedItem == dataItem.icon &&
                    activeSection === "Artist" && (
                      <div className="artist">
                        <div className="input-box">
                          <div className="search-icon align-icon gp-8">
                            <img src={searchIcon} alt="" />
                            <input
                              className="input fs-16"
                              type="text"
                              placeholder="Search"
                            />
                          </div>

                          <div className="mic-icon align-icon">
                            <img src={micIcon} alt="" />
                          </div>
                        </div>
                        <div className="ab-filter fs-16">
                          A B C D E F G H I J K L
                        </div>
                        <div>
                          <ImagePreference images={Images} Tick={Tick} />
                        </div>
                      </div>
                    )}
                  {active &&
                    selectedItem == dataItem.icon &&
                    activeSection === "Art Period" && (
                      <div className="artist">
                        <div className="input-box">
                          <div className="search-icon align-icon gp-8">
                            <img src={searchIcon} alt="search" />
                            <input
                              className="input fs-16"
                              type="text"
                              placeholder="Search"
                            />
                          </div>

                          <div className="mic-icon align-icon">
                            <img src={micIcon} alt="micIcon" />
                          </div>
                        </div>
                        <div className="ab-filter fs-16">
                          A B C D E F G H I J K L
                        </div>
                        <div>
                          <ImagePreference images={Images} Tick={Tick} />
                        </div>
                      </div>
                    )}
                  {active &&
                    selectedItem === dataItem.icon &&
                    activeSection === "Time Period" && (
                      <div className="interest">
                        {TimePeriod.map((interest) => (
                          <ul>
                            <li key={interest.id} className="checkboxes">
                              <div className="check-div">
                                <input
                                  type="checkbox"
                                  onChange={(e) =>
                                    handleCheckboxChange(
                                      e.target.checked,
                                      "timePeriod"
                                    )
                                  }
                                ></input>
                                {/* <span className="checkmark"></span> */}
                                <div>{interest.text}</div>
                              </div>
                              <p>(30)</p>
                            </li>
                          </ul>
                        ))}
                      </div>
                    )}
                  {active &&
                    selectedItem === dataItem.icon &&
                    activeSection === "Origin" && (
                      <div className="interest">
                        {Origin.map((interest) => (
                          <ul>
                            <li key={interest.id} className="checkboxes">
                              <div className="check-div">
                                <input
                                  type="checkbox"
                                  onChange={(e) =>
                                    handleCheckboxChange(
                                      e.target.checked,
                                      "origin"
                                    )
                                  }
                                ></input>
                                {/* <span className="checkmark"></span> */}
                                <div>{interest.text}</div>
                              </div>
                              <p>(30)</p>
                            </li>
                          </ul>
                        ))}
                      </div>
                    )}
                  {active &&
                    selectedItem === dataItem.icon &&
                    activeSection === "Estimate Range" && (
                      <div className="interest">
                        <div className="estimate">
                          <div className="dropdown">
                            <select>
                              <option value="">USD</option>
                              <option value="item1">UK</option>
                              <option value="item2"></option>
                              <option value="item3"></option>
                            </select>
                          </div>
                          <div className="estimate-input-div">
                            <div className="estimate-input">
                              <input
                                placeholder="$200"
                                style={{
                                  width: "100%",
                                  outline: "none",
                                  color: "#FFF",
                                  fontFamily: "Roboto",
                                  fontSize: " 0.875rem",
                                  padding: "0",
                                  background: "transparent",
                                  border: "none",
                                }}
                              ></input>
                            </div>
                            <div className="line-div"></div>
                            <div className="estimate-input">
                              <input
                                placeholder="$2000"
                                style={{
                                  width: "100%",
                                  outline: "none",
                                  color: "#FFF",
                                  fontFamily: "Roboto",
                                  fontSize: " 0.875rem",
                                  padding: "0",
                                  background: "transparent",
                                  border: "none",
                                }}
                              ></input>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  {active &&
                    selectedItem === dataItem.icon &&
                    activeSection === "Reserve" && (
                      <div className="interest">
                        {Reserve.map((interest) => (
                          <ul>
                            <li key={interest.id} className="checkboxes">
                              <div className="check-div">
                                <input
                                  type="checkbox"
                                  onChange={(e) =>
                                    handleCheckboxChange(
                                      e.target.checked,
                                      "reserve"
                                    )
                                  }
                                ></input>
                                {/* <span className="checkmark"></span> */}
                                <div>{interest.text}</div>
                              </div>
                              <p>(30)</p>
                            </li>
                          </ul>
                        ))}
                      </div>
                    )}
                  {active &&
                    selectedItem == dataItem.icon &&
                    activeSection === "Medium" && (
                      <div className="artist">
                        <div className="input-box">
                          <div className="search-icon align-icon gp-8">
                            <img src={searchIcon} alt="seach" />
                            <input
                              className="input fs-16"
                              type="text"
                              placeholder="Search"
                            />
                          </div>

                          <div className="mic-icon align-icon">
                            <img src={micIcon} alt="micIcon" />
                          </div>
                        </div>
                        <div className="ab-filter fs-16">
                          A B C D E F G H I J K L
                        </div>
                        <div>
                          <ImagePreference images={Images} Tick={Tick} />
                        </div>
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
