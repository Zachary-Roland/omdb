import React, { useState } from "react";

const Search = () => {
  const [search, setSearch] = useState("");
  //   ?What should the default value be? An empty search will yield no results...
  const [searchYear, setSearchYear] = useState("");
  //   ? Defualt value should be an empty string to denote any year
  const [searchType, setSearchType] = useState("");
  //   ? Default value should be an empty string to denote any type
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
            }}
          ></input>
          {/* year dropdown - use a map function to render years from 1908 to present */}
          <div>
            <label htmlFor="yearDropdown">Year:</label>
            <select
              name="yearDropdown"
              id="years"
              // value={}
              onChange={(e) => {
                setSearchYear(e.target.value);
                console.log(searchYear);
              }}
            >
              {years.map((y) => (
                <option key={y} value={y}>
                  {y}
                </option>
              ))}
              >
            </select>
          </div>
          {/* type radios */}
          <div>
            <input
              // TODO state checked, value, onChange need to be finished.
              type="radio"
              name="type"
              id="typeBoth"
              value=""
              checked={searchType === ""}
              onChange={(e) => {
                setSearchType(e.target.value);
                console.log(searchType);
              }}
            ></input>
            <label htmlFor="typeBoth">Both</label>
            <input
              type="radio"
              name="type"
              id="typeMovie"
              value="movie"
              checked={searchType === "movie"}
              onChange={(e) => {
                setSearchType(e.target.value);
                console.log(searchType);
              }}
            ></input>
            <label htmlFor="typeMovie">Movie</label>
            <input
              type="radio"
              name="type"
              id="typeSeries"
              value="series"
              checked={searchType === "series"}
              onChange={(e) => {
                setSearchType(e.target.value);
                console.log(searchType);
              }}
            ></input>
            <label htmlFor="typeSeries">Series</label>
          </div>
        </form>
      </aside>
    </div>
  );
};

export default Search;
