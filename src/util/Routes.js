import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import ChartJS from "../Components/ChartJS";
// import D3 from "../Components/D3";

const Routess = () => (
  <div>
    <BrowserRouter>
      {/* <Nav /> */}
      <Routess>
        <Route exact path="/" component={App} />
        <Route exact path="/chartjs" component={ChartJS} />
        {/* <Route exact path="/details/:name" component={Details} /> */}
        {/* <Route exact path ="" component ={D3}/> */}
        {/* <Route exact path ="" component ={GoogleCharts}/> */}
      </Routess>
    </BrowserRouter>
  </div>
);

export default Routess;
