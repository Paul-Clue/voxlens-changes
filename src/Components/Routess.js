import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import App from "../App";
import ChartJS from "./ChartJS";
// import D3 from "../Components/D3";

const Routess = () => (
  <>
    <div className="container mt-5">
      <div>
        <ul className="list-inline">
          <li className="list-inline-item ms5">
            <Link className="chartjs fs-3" to="/ChartJS">
              Chart.js
            </Link>
          </li>
          <li className="list-inline-item ms-5">
            <Link className="chartjs fs-3" to="/D3">
              D3
            </Link>
          </li>
          <li className="list-inline-item ms-5">
            <Link className="chartjs fs-3" to="/GoogleCharts">
              Google Charts
            </Link>
          </li>
        </ul>
      </div>
      {/* <Nav /> */}
      <Routes>
        <Route path="/" element={<App />} />
        <Route exact path="/chartjs" element={<ChartJS />} />
        {/* <Route exact path ="" component ={D3}/> */}
        {/* <Route exact path ="" component ={GoogleCharts}/> */}
      </Routes>
    </div>
  </>
);

// function Home() {
//   return (
//     <>
//       <main>
//         <h2>Welcome to the homepage!</h2>
//         <p>You can do this, I believe in you.</p>
//       </main>
//       <nav>
//         <Link to="/about">About</Link>
//       </nav>
//     </>
//   );
// }

export default Routess;
