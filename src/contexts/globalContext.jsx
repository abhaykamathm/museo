import React, { useContext, useState } from "react";

const GlobalContext = React.createContext();

export function useGlobalInfo() {
  return useContext(GlobalContext);
}

export function GlobalProvider({ children }) {
  const [state, setState] = useState("M Abhay Kamath");
  const [landingView, setLandingView] = useState("gallery"); //gallery, carousel, list views
  const [liveBackground, setLiveBackground] = useState("stream"); //stream, map
  const [showPlaceBid, setShowPlaceBid] = useState(false);
  const [showBidPreview, setShowBidPreview] = useState(false);
  const [showBidPlaced, setShowBidPlaced] = useState(false);
  const [showAddFunds, setShowAddFunds] = useState(false);
  const [count, setCount] = useState(0);
  const [demoMode, setDemoMode] = useState(true);

  const [profileList, setProfileList] = useState({
    profileInformation: {
      profileName: "Mr.Trevor Revera",
      dateOfBirth: "August 7,1995",
      address: "49 Featherstone Street,London, EC1Y 8SY United Kingdom",
    },
    paymentDetails: [
      {
        cardName: "AVI SHANE",
        carNumber: "********6457",
        cardType: "CHASE",
        cardLogoImg: "",
      },
      {
        cardName: "AVI SHANE",
        cardNumber: "********6457",
        cardType: "Platinum",
        cardLogoImg: "",
      },
    ],
    profileVerification: {},
  });

  return (
    <GlobalContext.Provider
      value={{
        state,
        changeState: (new_state) => {
          setState(new_state);
        },
        landingView,
        changeLandingView: (new_view) => {
          setLandingView(new_view);
        },
        profileList,
        ProfileList: (new_view) => {
          setProfileList(new_view);
        },
        count,
        NewCountFunc: (new_c) => {
          setCount(new_c);
        },
        liveBackground,
        changeLiveBackground: (new_background) => {
          setLiveBackground(new_background);
        },
        showPlaceBid,
        changeShowPlaceBid: (new_value) => {
          setShowPlaceBid(new_value);
        },
        showBidPreview,
        changeShowBidPreview: (new_value) => {
          setShowBidPreview(new_value);
        },
        showBidPlaced,
        changeShowBidPlaced: (new_value) => {
          setShowBidPlaced(new_value);
        },
        showAddFunds,
        changeShowAddFunds: (new_value) => {
          setShowAddFunds(new_value);
        },
        demoMode,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
