import React from "react";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Pretoria" />
      </div>
      <footer>
        <a href="https://github.com/Renda02/weather-react" target="blank">
          Open Source
        </a>{" "}
        coded by Rendani Luvhengo
      </footer>
    </div>
  );
}

export default App;
