import React from "react";

function Search() {
  return (
    <div className="Search">
      <form>
        <input
          type="text"
          placeholder="Enter City"
          autoComplete="off"
          autoCapitalize="on"
        />
        <input type="submit" />
      </form>
    </div>
  );
}

export default Search;
