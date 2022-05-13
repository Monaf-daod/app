import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import ReactLoading from "react-loading";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

const LoadingSpinner = ({ type, color }) => (
  <div
    style={{
      width: "100%",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <ReactLoading type={type} color={color} height={400} width={300} />
  </div>
);

ReactDOM.render(
  <Suspense
    fallback={<LoadingSpinner color="var(--primary-font-color)" type="bars" />}
  >
    <App />
  </Suspense>,
  document.getElementById("root")
);
