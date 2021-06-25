import { render } from "@testing-library/react";
import React, { useState } from "react";

const Search = () => {
  const [search, setSearch] = useState("");
  const years = [];
  for (let i = 1908; i <= new Date().getFullYear(); i++) {
    years.push(i);
  }
  return (
    <div>
      <header>Header</header>
      <aside>
        <form>
          {/* search input */}
          <label htmlFor="search">Search:</label>
          <input
            id="search"
            value={search}
            placeholder="Movie Search"
            onChange={(e) => {
              setSearch(e.target.value);
              console.log(search);
            }}
          ></input>
          {/* year dropdown - use a map function to render years from 1908 to present */}
          <div>
            <label htmlFor="yearDropdown">Year:</label>
            <select name="yearDropdown" id="years">
              {years.map((y) => (
                <option key={y} value={y}>
                  {y}
                </option>
              ))}
            </select>
          </div>
          {/* type radios */}
          <div>
            <input 
            type="radio" 
            name="type" 
            id="typeBoth"
            value=""
            checked={selectedOption = ""}
            onChange={}
            ></input>
            <label htmlFor="typeBoth">Both</label>
            <input 
            type="radio" 
            name="type" 
            id="typeMovie"
            value="movie"
            checked={selectedOption = "movie"}
            onChange={}
            ></input>
            <label htmlFor="typeMovie">Movie</label>
            <input 
            type="radio" 
            name="type" 
            id="typeSeries"
            value="series"
            checked={selectedOption = "series"}
            onChange={}
            ></input>
            <label htmlFor="typeSeries">Series</label>
          </div>
        </form>
      </aside>
    </div>
  );
};

export default Search;
