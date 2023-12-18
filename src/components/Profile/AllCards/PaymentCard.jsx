import React, { useEffect, useState } from 'react'
import { useGlobalInfo } from '../../../contexts/globalContext';

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
                  <img src="../Images/Profile/Rectangle 11662.png" alt="" />
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
                  <img src="./Images/Profile/Group 244.png" alt="" />
                </div>
                <div id='wifi-img'>
                  <img src="./Images/Profile/NFC.png" alt="" />
                </div>
              </div>
              <div id="payment-footer">
                <div>{userProfile.paymentDetails[cardNumber-1].cardName}</div>
                <div id="payment-method">
                  <img src="./Images/Profile/Payment Method.svg" alt="" />
                </div>
              </div>
            </div>
          :''
    }
    </>
  )
}

export default PaymentCard