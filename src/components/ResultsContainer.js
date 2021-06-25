import React from "react";
import ResultDisplay from "./ResultDisplay";

const ResultsContainer = ({ response }) => {
  let totalResults = response.totalResults;
  const isResponse = response.Response;
  let searchResults = response.Search;
  // !  You can write conditionals for rendering elements such as one of these options:
  //! {someBoolean ? <div>Is True</div> : <div> Is False</div>}
  //! {someBoolean && <h1>Is True</div>}
  return (
    <div>
      {isResponse === "True" && <h1>Showing 10 of {totalResults} results!</h1>}
      {isResponse === "True" &&
        searchResults.map((movie, idx) => (
          <ResultDisplay key={idx} movie={movie} />
        ))}
    </div>
  );
};
export default ResultsContainer;
