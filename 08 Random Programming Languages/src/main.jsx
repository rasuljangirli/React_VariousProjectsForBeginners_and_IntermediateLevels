import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { GlobalContaxProvider } from "./contax/GlobalContax.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <GlobalContaxProvider>
    <App />
  </GlobalContaxProvider>
  /* </React.StrictMode>, */
);
