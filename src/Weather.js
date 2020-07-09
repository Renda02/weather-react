import React from "react";
import "./Weather.css";

function Search() {
  return (
    <div className="Search">
      <div>
        <form>
          <input
            type="text"
            name=""
            autoComplete="off"
            autoFocus="on"
            placeholder="Enter location"
          />
          <input type="submit" className="submit" id="search-btn" />
        </form>
      </div>
    </div>
  );
}

export default Search;
