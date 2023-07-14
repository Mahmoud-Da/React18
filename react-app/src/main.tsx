import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// add bootstrap (after install the package using node)
import "bootstrap/dist/css/bootstrap.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
