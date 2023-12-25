import React, { useState } from "react";
import "./Checkout.css";
import QRCode from "qrcode.react";
import Add from "/Images/Profile/Add 1.svg";
import artist from "/Images/Home/painting1.png";
import logo from '/Images/logo.png';
import vector from '../Login/Images/Vector.svg'
import { useNavigate } from "react-router-dom";


export const Checkout = () => {
  const navigate = useNavigate()
  const [currentStep, setCurrentStep] = useState(1);
  const [addnewCard , setAddNewCard] = useState(false)
  const qrCodeValue = "https://example.com";
  const backToReadyToCheckout = () => {
    navigate('/profile/readyToCheckOut')
  }
  const nextStepOfCheckout = () => {
    if(currentStep === 3){  
    setCurrentStep(prev=>prev+1)
    setTimeout(()=>{
      navigate('/profile/readyToCheckOut')
    } , 2000)
    }else{
      
    setCurrentStep(prev=>prev+1)
    }
  }
 const prevStepOfCheckout = () => {
  setCurrentStep(prev=>prev-1)
 }

  return (
    <div id="checkout-container">
      <div className="progress-section-container">
        <div className="progress-bar-texts fs-16">
          <div>Cost Calculation</div>
          <div>Shipping</div>
          <div>Payment</div>
        </div>
        <div className="progress-section">
          
  <div className="knob active"></div>
  <div className="line"></div>
  <div className={`knob ${currentStep >= 2 ? "active" : ""}`}></div>
  <div className="line"></div>
  <div className={`knob ${currentStep >= 3 ? "active" : ""}`}></div>
        </div>
</div>
      <div className="details-section">
      <div
      className="step-content"
    >
     {
      currentStep ===1 ?
      <div className="checkout-content">
      <div className="checkout-title fs-24 fw-lighter">Checkout</div>
      <div className="image-card br-4">
      <img src={artist} alt="" className="artist-image pd-8" />
      <div className="card-details gp-8 pd-16 fs-16">
        <div className="card-details-divs gp-4">
          <div>Portrait of Young Man Holding a Roundel</div>
          <div className="card-details-lite-font">| Sandro Botticelli</div>
        </div>
        <div className="card-details-divs gp-8">
          <div className="card-details-divs gp-8">
            <span>Lot :</span>
            <span className="card-details-lite-font">24</span>
          </div>
          <div>|</div>
          <div className="card-details-divs gp-8">
            <span>Sale Number</span>
            <span className="card-details-lite-font">#L3256</span>
          </div>
        </div>
        <div className="card-details-divs gp-8">
          <span>Estimate range</span>
          <span className="card-details-lite-font">$30k - $100k</span>
        </div>
        <div className="card-details-divs card-details-lite-font">
          20 July, 2023 at 12:00 pm PT
        </div>
      </div>
    </div>
    <div className="card-footer fs-16 opac-7">
      Below is your estimated cost based on next bid
    </div>
    <div className="middle-text-container fs-16">
      <div className="text-containers">
        <div className="ff-Os fw-lighter opac-8">Your Bid</div>
        <div className="fw-lighter opac-8">USD 73 Million</div>
      </div>
      <div className="text-containers fs-16">
        <div className="ff-Os fw-lighter opac-8">Estimated Buyer’s Premium</div>
        <div className="fw-lighter opac-8">USD 300.00</div>
      </div>
      <div className="text-containers fs-16">
        <div className="ff-Os fw-lighter opac-8">Loss, Damage and Liability (LDL)</div>
        <div className="fw-lighter opac-8">USD 300.00</div>
      </div>
      <div className="text-containers fs-16">
        <div className="ff-Os fw-lighter opac-8">Estimated Shipping</div>
        <div className="fw-lighter opac-8">USD 200.00</div>
      </div>
      <div className="text-containers fs-16">
        <div className="ff-Os fw-lighter opac-8">Estimated Sales Tax</div>
        <div className="fw-lighter opac-8">USD 0.00</div>
      </div>
      <div className="text-containers fs-16">
        <div className="ff-Os fw-lighter opac-8">ESTIMATED COST exclusive of duties</div>
        <div className="fw-lighter opac-8">USD 73.8 Million</div>
      </div>
    </div>
    <div className="buttons-container">
      <div >
        <button className="buttons br-8 fw-lighter opac-8" onClick={backToReadyToCheckout}>Close</button>
      </div>
      <div>
        <button className="buttons br-8 fw-lighter opac-8" onClick={nextStepOfCheckout}>Continue</button>
      </div>
    </div>
    <div className="footer-container fs-16">
      <div>
        This lot ships from London or is available for collection at
        London.
      </div>
      <div>
        To collect the lot in person, please select “Pick Up” when
        completing your shipping information. Final cost will be
        calculated during checkout.
      </div>
      <div>
        Please note other charges may apply in addition to those that
        appear in this Cost Calculator. Please refer to Conditions of Sale
      </div>
    </div>
  </div>:''
     }
     {
      currentStep === 2 ? 
      <div className="Shipping-container gp-16 ">
            <div className="Shipping-title fs-24">Shipping</div>
            <div className="image-card br-4">
            <img src={artist} alt="" className="artist-image pd-8" />
            <div className="card-details gp-8 pd-16 fs-16">
              <div className="card-details-divs gp-4">
                <div>Portrait of Young Man Holding a Roundel</div>
                <div className="card-details-lite-font">| Sandro Botticelli</div>
              </div>
              <div className="card-details-divs gp-8">
                <div className="card-details-divs gp-8">
                  <span>Lot :</span>
                  <span className="card-details-lite-font">24</span>
                </div>
                <div>|</div>
                <div className="card-details-divs gp-8">
                  <span>Sale Number</span>
                  <span className="card-details-lite-font">#L3256</span>
                </div>
              </div>
              <div className="card-details-divs gp-8">
                <span>Estimate range</span>
                <span className="card-details-lite-font">$30k - $100k</span>
              </div>
              <div className="card-details-divs card-details-lite-font">
                20 July, 2023 at 12:00 pm PT
              </div>
            </div>
          </div>
      {
        !addnewCard ? 
        <>
        <div className="fs-18 fw-4">Choose You Delivery Address</div> 
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
                <label htmlFor="address1" className="fw-4 fs-16">SF Apartment</label>
                <div className="fw-2 fs-16 opac-6">1 Dr. Carlton B. Goodlett Place, San Francisco, California, 94102.</div>
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
                <label htmlFor="address2" className="fw-4 fs-16">SF Apartment</label>
                <div className="fw-2 fs-16 opac-6">Encinal Canyon Road. Town: Malibu.County: Los Angeles County</div>
              </div>
            </div>
            <div className="S-middle-containers">
              <div className="radio-input-div">
                <img src={Add} alt="" />
              </div>
              <div className="text-box fs-16" onClick={()=>setAddNewCard(true)}>Add New Address</div>
            </div>
          </div></>:<div className="New-Address-container br-8 gp-16">
            <div className="New-Address-container">
              <div className="fs-16">Your profile is 80% complete</div>
              <div>
                <img src='/Images/Profile/Group 484925.png' alt="" />
              </div>
            </div>
            <div className="Address-container br-8">
              <div className="qr-container br-8">
              <QRCode
                style={{ height: "100%", width: "100%" }}
                id="qrcode"
                value={qrCodeValue}
              />
              </div>
              <div className="qr-text-container fs-20"> Scan to add a new address</div>
            </div>
          </div>
      }
          
          
          <div className="Shipping-footer gp-16">
            <div>
              <input type="checkbox" />
            </div>
            <div>
              <label className="fs-16 fw-lighter">Pick your Lot from London Gallery</label>
            </div>
          </div>
          <div className="buttons-container gp-16">
            <div>
              <button className="buttons br-8 opac-7" onClick={prevStepOfCheckout}>Go back</button>
            </div>
            <div>
              <button className="buttons br-8 opac-7" onClick={nextStepOfCheckout}>Continue</button>
            </div>
          </div>
        </div>:''
     }
     {
      currentStep === 3?
      <div className="Payment-container">
          <div className="header-text fs-24">Payment</div>
          <div className="image-card br-4">
            <img src={artist} alt="" className="artist-image pd-8" />
            <div className="card-details gp-8 pd-16 fs-16">
              <div className="card-details-divs gp-4">
                <div>Portrait of Young Man Holding a Roundel</div>
                <div className="card-details-lite-font">| Sandro Botticelli</div>
              </div>
              <div className="card-details-divs gp-8">
                <div className="card-details-divs gp-8">
                  <span>Lot :</span>
                  <span className="card-details-lite-font">24</span>
                </div>
                <div>|</div>
                <div className="card-details-divs gp-8">
                  <span>Sale Number</span>
                  <span className="card-details-lite-font">#L3256</span>
                </div>
              </div>
              <div className="card-details-divs gp-8">
                <span>Estimate range</span>
                <span className="card-details-lite-font">$30k - $100k</span>
              </div>
              <div className="card-details-divs card-details-lite-font">
                20 July, 2023 at 12:00 pm PT
              </div>
            </div>
          </div>
          <div className="fs-18 card-details-footer-text">Choose You Payment Method</div>
          <div className="payment-middle-container gp-16">
            <div className="payment-middle-container gp-8">
              <div className="card-details-footer-text card-details-lite-font">Credit and Debit Cards</div>
              <div className="payment-cards gp-8">
                <div>
                  <input type="radio" id="card1" name="card1" value="card1" />
                </div>
                <div className="payment-cards gp-8 fs-18">
                  <div className="fw-4">American Express Credit Card </div>
                  <div className="card-details-lite-font">ending in 8252</div>
                  <div>
                    <img src="" alt="" />
                  </div>
                </div>
              </div>
              <div className="payment-cards gp-8">
                <div>
                  <input type="radio" id="card1" name="card1" value="card1" />
                </div>
                <div className="payment-cards gp-8 fs-18">
                  <div className="fw-4">American Express Credit Card </div>
                  <div className="card-details-lite-font">ending in 8252</div>
                  <div>
                    <img src="" alt="" />
                  </div>
                </div>
              </div>
              <div className="add-div br-8 pd-8 gp-8 ">
                <img src={Add} alt="" className="add-image" />
                <div className="fs-16 fw-2">Add a New Card</div>
              </div>
            </div>
            <div className="payment-middle-container gp-8">
              <div className="fs-18 fw-3">Wallet</div>
              <div className="payment-cards gp-8">
                <div>
                  <input
                    type="radio"
                    id="metadata"
                    name="metadata"
                    value="metadata"
                  />
                </div>
                <div className="fs-18 fw-4">Metamask</div>
              </div>
              <div className="add-div br-8 pd-8 gp-8">
                <img src={Add} alt="" className="add-image" />
                <div className="fs-16 fw-2">Add a New Wallet</div>
              </div>
            </div>
          </div>
          <div className="buttons-container">
            <div>
              <button className="buttons br-8" onClick={backToReadyToCheckout}>Close</button>
            </div>
            <div>
              <button className="buttons br-8" onClick={nextStepOfCheckout}>Finish Up</button>
            </div>
          </div>
        </div>:''
     }
     {
      currentStep === 4?
      <div className="Lot-container">
          <img src={vector} alt="" className="vector-img" />
          
        </div>:''
     }
        </div>
        </div>
      <img src={logo} alt="" className="logo-image"/>
    </div>
  );
};
