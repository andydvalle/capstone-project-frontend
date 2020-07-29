import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router } from "react-router-dom";
// import { createStore, applyMiddleware } from "redux";
// import thunk from "redux-thunk";
// import allReducer from "./reducers";
// import { Provider } from "react-redux";
// import axios from "axios";

// const store = createStore(allReducer, applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
