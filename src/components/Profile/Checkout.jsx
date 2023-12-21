import React, { useState } from "react";
import "./Checkout.css";
import Add from '/Images/Profile/Add 1.svg'

export const Checkout = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    // {
    //   title: "Checkout",
    //   content: (
    //     <div className="checkout-content">
    //         <div className="header-text">Checkout</div>
    //       <div className="image-card">
    //         <img src="" alt="" />
    //         <div className="card-details">
    //           <div></div>
    //           <div></div>
    //           <div></div>
    //           <div></div>
    //         </div>
    //       </div>
    //       <div className="card-footer">
    //         Below is your estimated cost based on next bid
    //       </div>
    //       <div className="middle-text-container">
    //         <div className="text-containers">
    //           <div>Your Bid</div>
    //           <div>USD 73 Million</div>
    //         </div>
    //         <div className="text-containers">
    //           <div>Estimated Buyer’s Premium</div>
    //           <div>USD 300.00</div>
    //         </div>
    //         <div className="text-containers">
    //           <div>Loss, Damage and Liability (LDL)</div>
    //           <div>USD 300.00</div>
    //         </div>
    //         <div className="text-containers">
    //           <div>Estimated Shipping</div>
    //           <div>USD 200.00</div>
    //         </div>
    //         <div className="text-containers">
    //           <div>Estimated Sales Tax</div>
    //           <div>USD 0.00</div>
    //         </div>
    //         <div className="text-containers">
    //           <div>ESTIMATED COST exclusive of duties</div>
    //           <div>USD 73.8 Million</div>
    //         </div>
    //       </div>
    //       <div className="buttons-container">
    //         <div >
    //           <button className="buttons">Close</button>
    //         </div>
    //         <div>
    //           <button className="buttons">Continue</button>
    //         </div>
    //       </div>
    //       <div className="footer-container">
    //         <div>
    //           This lot ships from London or is available for collection at
    //           London.
    //         </div>
    //         <div>
    //           To collect the lot in person, please select “Pick Up” when
    //           completing your shipping information. Final cost will be
    //           calculated during checkout.
    //         </div>
    //         <div>
    //           Please note other charges may apply in addition to those that
    //           appear in this Cost Calculator. Please refer to Conditions of Sale
    //         </div>
    //       </div>
    //     </div>
    //   ),
    // },
    {
      title: "Shipping",
      content: (
        <div className="Shipping-container gp-16 ">
            <div className="header-text">Shipping</div>
          <div className="image-card">
            <img src="" alt="" />
            <div className="card-details">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div>Choose You Delivery Address</div>
          <div className="Shipping-middle-container gp-8">
            <div className="S-middle-containers">
              <div className="radio-input-div">
                <input
                  type="radio"
                  id="address1"
                  name="address"
                  value="address1"
                  className="radio-btns"
                />
              </div>
              <div className="text-box">
                <label htmlFor="address1">SF Apartment</label>
                <div>1 Dr. Carlton B. Goodlett Place, San Francisco, California, 94102.</div>
              </div>
            </div>
            <div className="S-middle-containers">
              <div className="radio-input-div">
                <input
                  type="radio"
                  id="address2"
                  name="address"
                  value="address2"
                  className="radio-btns"
                />
              </div>
              <div className="text-box">
                <label htmlFor="address2">SF Apartment</label>
                <div>Encinal Canyon Road. Town: Malibu.County: Los Angeles County</div>
              </div>
            </div>
            <div className="S-middle-containers">
              <div className="radio-input-div">
                <img src={Add} alt="" />
              </div>
              <div className="text-box" >Add New Address</div>
            </div>
          </div>
          <div className="New-Address-container">
            <div>
              <div>Your profile is 80% complete</div>
              <div>
                <img src="" alt="" />
              </div>
            </div>
            <div className="Address-container">
              <div className="qr-container"></div>
              <div>Scan to add a new address</div>
            </div>
          </div>
          <div className="Shipping-footer">
            <div>
              <input type="checkbox" />
            </div>
            <div>
              <label>Pick your Lot from London Gallery</label>
            </div>
          </div>
          <div className="buttons-container gp-16">
            <div>
              <button className="buttons">Go back</button>
            </div>
            <div>
              <button className="buttons">Continue</button>
            </div>
          </div>
        </div>
      ),
    },
    // {
    //   title: "Payment",
    //   content: (
    //     <div>
    //       <div className="image-card">
    //         <img src="" alt="" />
    //         <div className="card-details">
    //           <div></div>
    //           <div></div>
    //           <div></div>
    //           <div></div>
    //         </div>
    //       </div>
    //       <div>Choose You Payment Method</div>
    //       <div className="payment-middle-container">
    //         <div>
    //           <div>Credit and Debit Cards</div>
    //           <div>
    //             <div>
    //               <input type="radio" id="card1" name="card1" value="card1" />
    //             </div>
    //             <div>
    //               <div>American Express Credit Card </div>
    //               <div>ending in 8252</div>
    //               <div>
    //                 <img src="" alt="" />
    //               </div>
    //             </div>
    //           </div>
    //           <div>
    //             <div>
    //               <input type="radio" id="card1" name="card1" value="card1" />
    //             </div>
    //             <div>
    //               <div>American Express Credit Card </div>
    //               <div>ending in 8252</div>
    //               <div>
    //                 <img src="" alt="" />
    //               </div>
    //             </div>
    //           </div>
    //           <div>
    //             <img src="" alt="" />
    //             <div>Add a New Card</div>
    //           </div>
    //         </div>
    //         <div>
    //             <div>Wallet</div>
    //             <div>
    //                 <div>
    //                     <input type="radio" id="metadata" name="metadata" value="metadata" />
    //                 </div>
    //                 <div>Metamask</div>
    //             </div>
    //             <div>
    //                 <img src="" alt="" />
    //                 <div>Add a New Wallet</div>
    //             </div>
    //         </div>
    //       </div>
    //       <div>
    //         <div><button>Close</button></div>
    //         <div><button>Finish Up</button></div>
    //       </div>
    //     </div>
    //   ),
    // },
  ];

  const handleContinue = () => {
    setCurrentStep((prevStep) =>
      prevStep < steps.length ? prevStep + 1 : prevStep
    );
  };

  return (
    <div id="checkout-container">
      {/* <div className="progress-bar-container"></div>
      <div className="content-container"></div> */}
      <div className="progress-section">
        <div className="knob active"></div>
        <div className="line"></div>
        <div className={`knob ${currentStep >= 2 ? "active" : ""}`}></div>
        <div className="line"></div>
        <div className={`knob ${currentStep >= 3 ? "active" : ""}`}></div>
      </div>
      <div className="details-section">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`step-content ${
              currentStep === index + 1 ? "active" : ""
            }`}
          >
            {/* <h2>{step.title}</h2> */}
            {step.content}
          </div>
        ))}
        {/* <div className="buttons-section">
          <button>Close</button>
          <button className="continue-button" onClick={handleContinue}>
            Continue
          </button>
        </div> */}
      </div>
    </div>
  );
};
