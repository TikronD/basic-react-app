// import all packages
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// go and get our app, put it into our page
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    // Component that displays what is in the App function
    <App />
  </React.StrictMode>
);
