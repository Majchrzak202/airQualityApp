import "./SearchBar.css";
import React, { useState } from "react";

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
    <div className="form">
      <form>
        <div className="input">
          <input onChange={inputHandler} type="text" value={input} />
        </div>
        <div className="form-button">
          <button onClick={citySearchHandler} className="button">
            Search
          </button>
        </div>
      </form>
    </div>

    /*  <section className="section-search">
      <div className="searchbar">
        <form>
          <div className='input'>
            <input
              value={input}
              onChange={inputHandler}
              placeholder="City name"
            />
          </div>
          <div className='form-button'>
            <button className="button" onClick={citySearchHandler}>Search</button>
          </div>
        </form>
      </div>
    </section> */
  );
};

export default SearchBar;
