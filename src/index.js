import React from "react";
import ReactDOM from "react-dom";
import { UserContextProvider } from "./components/storage/UserContext";

import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <UserContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </UserContextProvider>,

  document.getElementById("root")
);
