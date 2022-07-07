import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ChartJS from "../Components/ChartJS";
// import D3 from "../Components/D3";

const Routes = () => (
  <div>
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route exact path="/chartjs" component={ChartJS} />
        {/* <Route exact path="/details/:name" component={Details} /> */}
        {/* <Route exact path ="" component ={D3}/> */}
        {/* <Route exact path ="" component ={GoogleCharts}/> */}
      </Switch>
    </BrowserRouter>
  </div>
);

export default Routes;
