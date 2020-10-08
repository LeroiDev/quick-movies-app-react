import React from "react";
import "../index.css";
import MovieItem from "./MovieItem.js";
const Movies = ({ movies }) => {
  return (
    <>
      {movies.map((movie) => (
        <MovieItem key={movie.id} {...movie} />
      ))}
    </>
  );
};

export default Movies;
