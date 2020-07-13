import React from "react";

function Search() {
  return (
    <div className="Search">
      <form>
        <input type="text" placeholder="Enter City" autoComplete="off" />
        <input type="submit" value="Search" />
      </form>
    </div>
  );
}

export default Search;
