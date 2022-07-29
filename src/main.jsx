import React from "react";
import ReactDOM from "react-dom/client";
import { GlobalStyle } from "./components/global-style";
import App from "./app";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);
