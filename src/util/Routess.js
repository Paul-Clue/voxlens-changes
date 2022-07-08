import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import ChartJS from "../Components/ChartJS";
// import D3 from "../Components/D3";

const Routess = () => (
  <>
    <div>
      <p>What is going on</p>
      {/* <Nav /> */}
      <Routes>
        <Route path="/" element={<App />} />
        <Route exact path="/chartjs" element={<ChartJS />} />
        {/* <Route exact path="/details/:name" component={Details} /> */}
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
