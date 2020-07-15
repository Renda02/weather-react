import React from "react";
import Button from "@material-ui/core/Button";
import InputBase from "@material-ui/core/InputBase";
import "./Search.css";

function Search() {
  
  return (
  <div> <InputBase placeholder="Enter City…" />
      <Button variant="contained" color="primary">
        Search
      </Button>
  </div>
  
      
  );
}

export default Search;
