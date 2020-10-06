import React from "react";

const Movie = ({
  title,
  poster_path,
  overview,
  id,
  vote_average,
  movieImage,
}) => {
  return (
    <div className="movie">
      <img src={`https://image.tmdb.org/t/p/w1280${poster_path}`} alt={title} />
    </div>
  );
};

export default Movie;
