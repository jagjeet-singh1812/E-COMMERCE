import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react"
// import AppContext from "./utils/context"
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render( <Auth0Provider
    domain="dev-62g1njwe1gf1gpa4.us.auth0.com"
    clientId="hgARrVWPbOEvooEzCoeBgADCdrsnQ718"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    {/* <AppContext> */}
    <App />
    {/* </AppContext> */}
    </Auth0Provider>);
