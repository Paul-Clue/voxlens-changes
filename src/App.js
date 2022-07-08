import React from "react";
import { Link, NavLink } from "react-router-dom";

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">This is the App!</header>
        <Link className="chartjs" to="/ChartJS">
          Chart.js
        </Link>
      </div>
    </>
  );
}

export default App;
