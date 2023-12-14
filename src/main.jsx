import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { GlobalProvider } from "./contexts/globalContext.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <GlobalProvider>
    <App />
  </GlobalProvider>
);
