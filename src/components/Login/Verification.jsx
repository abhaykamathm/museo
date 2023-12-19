import React, { useState } from "react";
import Timeline from "./Images/Mobile.svg";
import Upload from "./Images/uploadPic.svg";
import File from "./Images/fileImg.svg";
import Delete from "./Images/deleteImg.svg";
import "./Verification.css";
import { useNavigate } from "react-router-dom";
function Verification() {
  const navigate = useNavigate();
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileChange = (event) => {
    const files = event.target.files;
    setSelectedFiles([...selectedFiles, ...files]);
  };
  const handleDelete = (index) => {
    const updatedFiles = [...selectedFiles];
    updatedFiles.splice(index, 1);
    setSelectedFiles(updatedFiles);
  };
  return (
    <>
      <div id="verificationContainer">
        <div className="verificationDiv">
          <div className="verificationTimeline">
            <img
              src={Timeline}
              style={{ objectFit: "cover", width: "100%" }}
            ></img>
          </div>
          <div className="veriDiv">
            <div>Verification</div>
            <div>
              <p>
                Valid photo identification and proof of address are required to
                transact. You could submit one from each category.
              </p>
            </div>
            <div>
              <p>
                <b>Photo Identification :</b>
              </p>
              <p>
                <ul style={{ listStyle: "none" }}>
                  <li>- Passport</li>
                  <li>- State-issued Identification Card</li>
                  <li>- Drivers’ License</li>
                </ul>
              </p>
            </div>
            <div>
              <p>
                <b>Proof Of address :</b>
              </p>
              <p>
                <ul style={{ listStyle: "none" }}>
                  <li>- Drivers’ License</li>
                  <li>- Property Tax Receipt</li>
                  <li>- Utility Bill</li>
                  <li>- Lease Agreement or mortgage statement</li>
                  <li>- Voter Registration Card</li>
                </ul>
              </p>
            </div>
            <div className="uploadDiv">
              <div className="dashedLine">
                {/* <img src={Upload} alt=""></img>
              <p>Browse Files to upload</p> */}
                <label htmlFor="fileInput" className="uploadLabel">
                  <img src={Upload} alt="" />
                  <p>Browse Files to upload</p>
                </label>
                <input
                  type="file"
                  id="fileInput"
                  style={{ display: "none" }}
                  onChange={handleFileChange}
                  multiple
                />
              </div>
              {selectedFiles.map((file, index) => (
                <div key={index} className="fileDiv">
                  <img src={File} alt="" />
                  <div className="deleteDiv">
                    <p>{file.name}</p>
                    <img
                      src={Delete}
                      alt=""
                      onClick={() => handleDelete(index)}
                      style={{ cursor: "pointer" }}
                    />
                  </div>
                </div>
              ))}
              {/* <div className="fileDiv">
              <img src={File}></img>
              <div className="deleteDiv">
                <p>Driver's License</p>
                <img src={Delete}></img>
              </div>
            </div> */}
            </div>
          </div>

          <div className="buttonDiv">
            <button
              onClick={() => {
                navigate("/login/cardAdded");
              }}
            >
              Go Back
            </button>
            <button
              onClick={() => {
                navigate("/login/successVerification");
              }}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Verification;
