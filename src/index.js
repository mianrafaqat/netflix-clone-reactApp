import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import { GlobalStyles } from "./global-styles";
import "normalize.css";
import { firebase } from "./lib/firebase.prob";
import {FirebaseContext} from './context/firebase'

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <FirebaseContext.Provider value={{ firebase }}>
      <GlobalStyles />
      <App />
    </FirebaseContext.Provider>
  </>
);
