import "./SearchBar.css";
import React,{ useState } from "react";

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
    <section className="section-search">
      <div className="searchbar">
        <form>
          <div>
            <input
              value={input}
              onChange={inputHandler}
              placeholder="City name"
            />
          </div>
          <div>
            <button onClick={citySearchHandler}>Search</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SearchBar;
