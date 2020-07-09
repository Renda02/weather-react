import React from "react";
import "./App.css";
import Weather from "./Weather";

import Main from "./Main";

function App() {
  return (
    <div className="App">
      <div>
        <Weather />
        <br />
        <Main />
        <br />
      </div>
      <div>
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
