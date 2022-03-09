import React from "react";
import ReactDOM from "react-dom";
import { UserContextProvider } from "./components/storage/UserContext";

import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { CourseContextProvider } from "./components/storage/CourseContext";

ReactDOM.render(
  <UserContextProvider>
    <CourseContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CourseContextProvider>
  </UserContextProvider>,

  document.getElementById("root")
);
