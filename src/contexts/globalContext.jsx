import React, { useContext, useState } from "react";

const GlobalContext = React.createContext();

export function useGlobalInfo() {
  return useContext(GlobalContext);
}

export function GlobalProvider({ children }) {
  const [state, setState] = useState("M Abhay Kamath");

  return (
    <GlobalContext.Provider
      value={{
        state,
        changeState: (new_state) => {
          setState(new_state);
        },
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
