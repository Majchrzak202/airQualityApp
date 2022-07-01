import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import AqiLevelThemeContextProvider from "./context/AqiLevelThemeContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AqiLevelThemeContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </AqiLevelThemeContextProvider>
);
