import React from "react";
import "./SocialLogin.css";
import Timeline from "../../../public/Images/Login/Mobile.png";
function SocialLogin() {
  return (
    <>
      <div id="socialLogin">
        <div className="timeline"></div>
        <form id="form-detail">
          <div className="detail">
            <h6>Full legal name</h6>
            <div className="row">
              <div className="dropdown">
                <label>Title</label>
                <select>
                  <option value="item1">Mr</option>
                  <option value="item2">Mrs</option>
                  <option value="item3">Miss</option>
                </select>
              </div>
              <div className="inputs">
                <label>First name</label>
                <input type="text" placeholder=""></input>
              </div>
              <div className="inputs">
                <label>Last name</label>
                <input type="text" placeholder=""></input>
              </div>
            </div>
          </div>
          <div className="detail">
            <h6>Primary Mobile Number</h6>
            <div className="row">
              <div className="dropdown">
                <select>
                  <option value="">Country Code</option>
                  <option value="item1">Mr</option>
                  <option value="item2">Mrs</option>
                  <option value="item3">Miss</option>
                </select>
              </div>
              <div className="inputs inputs-1">
                <input type="number" placeholder="Phone Number"></input>
              </div>
            </div>
          </div>
          <div className="detail">
            <h6>Enter Your Shipping Address</h6>
            <div className="dropdown inputs-1">
              <select>
                <option value="">Country/Region</option>
                <option value="item1">Mr</option>
                <option value="item2">Mrs</option>
                <option value="item3">Miss</option>
              </select>
            </div>
            <div className="inputs inputs-1">
              <input type="text" placeholder="Street Address"></input>
            </div>
            <div className="inputs inputs-1">
              <input
                type="text"
                placeholder="Apartment, suite,flat,..,floor"
              ></input>
            </div>
            <div className="inputBtn">
              <button>+ Add another shipping address</button>
            </div>
          </div>
          <div className="detail">
            <h6>Add a Payment Method</h6>
            <p id="credit">Credit & Debit Cards</p>

            <div className="inputBtn">
              <button>+ Add a new card</button>
            </div>
          </div>
          <div id="submitBtn">
            <button>Go Back</button>
            <button>Continue</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default SocialLogin;
