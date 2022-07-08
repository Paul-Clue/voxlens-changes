import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

// import { Provider } from 'react-redux';
// import { createStore } from 'redux';
// import { devToolsEnhancer } from 'redux-devtools-extension';
// import rootReducer from './reducers';
import Routess from "./Components/Routess";
import App from "./App";

// ReactDOM.render(
//   <React.StrictMode>
//     <Routess />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routess />
    </BrowserRouter>
  </React.StrictMode>
);
