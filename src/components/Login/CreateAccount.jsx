import React from "react";
import "./CreateAccount.css";
import Pic from "./Images/Pic1.svg";
import Google from "./Images/Google.svg";
import Facebook from "./Images/Mail Send.svg";
import Apple from "./Images/Apple.svg";
import Phone from "./Images/Phone Mobile Phone.svg";
import { GoogleLogin } from "react-google-login";
function CreateAcccount() {
  return (
    <>
      <div id="accountContainer">
        <div id="account">
          <div className="imageDiv">
            <img src={Pic} alt="pic"></img>
          </div>
          <div className="text">
            <h1>Create an Account</h1>
            <p>Your one step into the World of Art</p>
          </div>
          <div className="loginBtn">
            <button>
              <img src={Google} alt="google"></img>
              <span>Continue with Google</span>
            </button>
            <button>
              <img src={Facebook} alt="google"></img>
              <span>Continue with Facebook</span>
            </button>
            <button>
              <img src={Apple} alt="google"></img>
              <span>Continue with Apple</span>
            </button>
            <button>
              <img src={Phone} alt="google"></img>
              <span>Enter your mobile number</span>
            </button>
          </div>
        </div>
        <div className="footer">
          <p>Already have an account? </p>
          <a> Log In</a>
        </div>
      </div>
    </>
  );
}

export default CreateAcccount;
