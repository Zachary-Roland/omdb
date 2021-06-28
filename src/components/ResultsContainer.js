import React from "react";
import ResultDisplay from "./ResultDisplay";

const ResultsContainer = ({ response, search }) => {
  let searchLength = search;
  let totalResults = response.totalResults;
  const isResponse = response.Response;
  let searchResults = response.Search;
  // !  You can write conditionals for rendering elements such as one of these options:
  //! {someBoolean ? <div>Is True</div> : <div> Is False</div>}
  //! {someBoolean && <h1>Is True</div>}
  return (
    <div className="main bgGray textCenter">
      {/* Is searchbox 0? yes, null. no, nested condition */}
      {searchLength === 0 &&
      searchResults === "undefined" ? null : searchLength <= 2 ? ( // Is search <= 2? yes, error msg. no nested condition
        <h1 className="result bgPrimary">
          Your search must have at least 3 characters!
        </h1>
      ) : // Are there results? Yes, show results. No, error msg.
      isResponse === "False" ? (
        <h1 className="result bgPrimary">No Results! Try new search terms!</h1>
      ) : // is searchResults undefined? If so, return null. If not, show results. (w/out this condition it breaks)
      searchResults === undefined ? null : (
        <h3>Showing 10 of {totalResults} results!</h3> &&
        searchResults.map((movie, idx) => (
          <ResultDisplay key={idx} movie={movie} />
        ))
      )}
    </div>
  );
};
export default ResultsContainer;
