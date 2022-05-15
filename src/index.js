import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import CustomLoader from "./components/customLoader";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <Suspense fallback={<CustomLoader />}>
    <App />
  </Suspense>,
  document.getElementById("root")
);
