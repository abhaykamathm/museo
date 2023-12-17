import React, { useContext, useState } from "react";

const GlobalContext = React.createContext();

export function useGlobalInfo() {
  return useContext(GlobalContext);
}

export function GlobalProvider({ children }) {
  const [state, setState] = useState("M Abhay Kamath");
  const [landingView, setLandingView] = useState("gallery"); //gallery, carousel, list views

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
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
