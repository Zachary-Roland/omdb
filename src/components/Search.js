import React, { useState } from "react";

const Search = () => {
  const [search, setSearch] = (useState = "");
  return (
    <body>
      <header>Header</header>
      <aside>
        <form>
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
        </form>
      </aside>
    </body>
  );
};

export default Search;
