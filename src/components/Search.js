import React, { useState } from "react";
import ResultsContainer from "./ResultsContainer";
import "./Search.css";

const Search = () => {
  const [search, setSearch] = useState("");
  //   ?What should the default value be? An empty search will yield no results...
  const [searchYear, setSearchYear] = useState("any");
  //   ? Defualt value should be an empty string to denote any year
  const [searchType, setSearchType] = useState("");
  //   ? Default value should be an empty string to denote any type
  const [response, setResponse] = useState("");
  // TODO implement piece of state to check if search button has been clicked. Boolean? ON input box change set clicked to false. On
  const years = [];
  for (let i = new Date().getFullYear(); i >= 1908; i--) {
    years.push(i);
  }
  // TODO Search is functional, later on add pagination using 'page' API key?
  return (
    <div className="textCenter flex">
      <header className="font800 flex100">OMDb Search!</header>
      <aside className="flex aside adaptHeight textCenter bgSecondary">
        <div className="searchItems bgSecondary">
          <form className="form flex">
            {/* search input */}
            <div className="flex100 lineHeight50">
              <label htmlFor="search">Search: </label>
              <input
                id="search"
                value={search}
                placeholder="Movie Search"
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
              ></input>
            </div>
            {/* year dropdown - use a map function to render years from 1908 to present */}
            <div className="flex100 lineHeight50">
              <label htmlFor="yearDropdown">Year: </label>
              <select
                className="bgPrimary"
                name="yearDropdown"
                id="years"
                value={searchYear}
                onChange={(e) => {
                  setSearchYear(e.target.value);
                }}
              >
                <option key="any" value="any">
                  Any
                </option>
                {years.map((y) => (
                  <option key={y} value={y}>
                    {y}
                  </option>
                ))}
              </select>
            </div>
            {/* type radios */}
            <div className="flex100  lineHeight50 flex jcSpaceAround">
              <div className="radioOption">
                <input
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
              </div>
              <div className="radioOption">
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
              </div>
              <div className="radioOption">
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
            </div>
          </form>
          <div className="flex100">
            <button
              className="font600"
              id="submit"
              onClick={(e) => {
                // fetch API URL plus s={search} plus y={year} plus type={type}
                fetch(
                  "http://www.omdbapi.com/?apikey=5d6248fb&s=" +
                    search +
                    "&y=" +
                    searchYear +
                    "&type=" +
                    searchType
                )
                  .then((res) => {
                    //   console.log(res);
                    return res.json();
                  })
                  .then((res) => {
                    //   console.log(res);
                    setResponse(res);
                  });
              }}
            >
              Search!
            </button>
          </div>
        </div>
      </aside>
      <ResultsContainer search={search.length} response={response} />
    </div>
  );
};

export default Search;
