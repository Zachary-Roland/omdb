import React from "react";

const ResultDisplay = ({ movie }) => {
  // SHow title, year, type, and poster
  return (
    <div>
      <h2>{movie.Title}</h2>
      <h4>
        ({movie.Year}, {movie.Type})
      </h4>
      <img src={movie.Poster} alt="movie.Title, {movie.Year} poster"></img>
    </div>
  );
};
export default ResultDisplay;
