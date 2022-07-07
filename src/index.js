import React from "react";
import ReactDOM from "react-dom";

// import { Provider } from 'react-redux';
// import { createStore } from 'redux';
// import { devToolsEnhancer } from 'redux-devtools-extension';
// import rootReducer from './reducers';
import Routes from "./util/Routes";
import App from "./App";

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
