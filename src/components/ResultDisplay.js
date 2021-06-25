import React from "react";

const ResultDisplay = ({ movie }) => {
  // SHow title, year, type, and poster
  return (
    <div>
      <h2>{movie.Title}</h2>
      <h4>
        ({movie.Year}, {movie.Type})
      </h4>
    </div>
  );
};
export default ResultDisplay;
