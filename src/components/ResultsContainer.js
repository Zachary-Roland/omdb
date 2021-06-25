import React from "react";

const ResultsContainer = ({ response }) => {
  let resLength = response.totalResults;
  const isResponse = response.Response;
  if (isResponse === "False") {
    resLength = "No";
  } else {
    console.log(isResponse);
    console.log(resLength);
  }
  return (
    <div>
      <h1>{resLength} Results!</h1>
      <h6>Your search has {resLength} results!</h6>
      {/* <ResultDisplay /> */}
    </div>
  );
};
export default ResultsContainer;
