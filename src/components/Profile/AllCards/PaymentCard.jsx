import React, { useEffect, useState } from 'react'
import { useGlobalInfo } from '../../../contexts/globalContext';
import img1 from "../../../../public/Images/Profile/Rectangle 11662.png"
import img2 from "../../../../public/Images/Profile/Group 244.png"
import img3 from "../../../../public/Images/Profile/Payment Method.svg"
import img4 from "../../../../public/Images/Profile/NFC.png"

function PaymentCard({cardNumber}) {
  const context = useGlobalInfo();
  const [userProfile , setUserProfile] = useState({})
  useEffect(()=>{
    setUserProfile(context.profileList)
  },[context.profileList , cardNumber])
  return (
    <>
    {
      userProfile.paymentDetails?
            <div className="payment-details">
              <div id="payment-header">
                <div>
                  <img src={img1} alt="" />
                </div>
                <div id="header-text">{userProfile.paymentDetails[cardNumber-1].cardType}</div>
              </div>
              <div id="card-number">
                <div>****</div>
                <div>****</div>
                <div>****</div>
                <div>6457</div>
              </div>
              <div id="card-images">
                <div>
                  <img src={img2} alt="" />
                </div>
                <div id='wifi-img'>
                  <img src={img4} alt="" />
                </div>
              </div>
              <div id="payment-footer">
                <div>{userProfile.paymentDetails[cardNumber-1].cardName}</div>
                <div id="payment-method">
                  <img src={img3} alt="" />
                </div>
              </div>
            </div>
          :''
    }
    </>
  )
}

export default PaymentCard