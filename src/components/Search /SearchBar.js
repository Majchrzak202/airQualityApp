import "./SearchBar.css";
import React, { useState } from "react";
import { Box } from "@material-ui/core";

const SearchBar = ({ searchHandler }) => {
  const [input, setInput] = useState("");

  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  const citySearchHandler = (e) => {
    e.preventDefault();

    if (input.length === 0) {
      return;
    }

    searchHandler(input);
    setInput("");
  };

  return (
    <Box
      style={{
        display: "flex",
        minHeight: "100vh",
        justifyItems: "center",
        alignItems: "center ",
      }}
    >
      <div className="form">
        <h2>Search the City or Country...</h2>
        <form>
          <div className="input">
            <input
              onChange={inputHandler}
              type="text"
              value={input}
              placeholder="city/country name"
            />
          </div>
          <div className="form-button">
            <button onClick={citySearchHandler} className="button">
              Search
            </button>
          </div>
        </form>
      </div>
    </Box>
  );
};

export default SearchBar;
