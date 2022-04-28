import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { BrowserRouter as Router } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App";
import "./index.css";
import axios from "axios";
axios.defaults.baseURL =
  process.env.REACT_APP_BACKEND || "http://localhost:3001";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Auth0Provider
        domain="henry-ask.us.auth0.com"
        clientId="dLVgUVuZdlADUQPr5irLbtOLpQRsglbN"
        redirectUri={window.location.origin}
      >
        <Router>
          <App />
        </Router>
      </Auth0Provider>
    </Provider>
  </React.StrictMode>
);
