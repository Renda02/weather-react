import React from "react";
import "./App.css";
import Weather from "./Weather";
import Search from "./Search";
import "fontsource-roboto";

function App() {
  return (
    <div className="App">
      <div className="Container">
        <Search />
        <Weather />
      </div>
      <div className="Source">
        <small>
          <a href="https://github.com/Renda02/weather-react">
            {" "}
            Open Source Code
          </a>{" "}
          by Rendani Luvhengo
        </small>
      </div>
    </div>
  );
}

export default App;
