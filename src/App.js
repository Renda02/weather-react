import React from "react";
import "./App.css";
import Main from "./Main";
import Search from "./Search";

function App() {
  return (
    <div className="App">
      <div className="Cointainer">
        <div className="Search">
          {" "}
          <Search />
        </div>

        <Main />
        <div className="Footer">
          <small>
            <a href="https://github.com/Renda02/weather-react">
              {" "}
              Open Source Code
            </a>{" "}
            by Rendani Luvhengo
          </small>
        </div>
      </div>
    </div>
  );
}

export default App;
