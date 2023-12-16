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
              <div className="btnDiv">
                <img src={Google} alt="google"></img>Continue with Google
              </div>
            </button>
            <button>
              <div className="btnDiv">
                <img src={Facebook} alt="google"></img>Continue with Facebook
              </div>
            </button>
            <button>
              <div className="btnDiv">
                <img src={Apple} alt="google"></img>Continue with Apple
              </div>
            </button>
            <button>
              <div className="btnDiv">
                <img src={Phone} alt="google"></img>Enter your mobile number
              </div>
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
