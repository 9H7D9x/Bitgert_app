import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    domain="dev-i5u96svp.us.auth0.com"
    clientId="zR1fDzaJcgbf1IbW5cwuKicBJX7N0Rck"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>
);
