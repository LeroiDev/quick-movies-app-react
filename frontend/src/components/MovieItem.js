import React from "react";
import "../index.css";
const MovieItem = ({ title, poster_path, overview, vote_average }) => {
  const movieRating=(rating)=>{
if(rating >= 7.5){
  return 'green'
}else if( rating > 5 && rating <7.5)
return 'orange'
else{
  return 'red'
}
  }


  return (
    <div className="movie">
      <img src={`https://image.tmdb.org/t/p/w1280${poster_path}`} alt={title} />
      <div className="movie-info">
        <span>{title}</span>
        <span className={`rating-tag ${movieRating(vote_average)}`} >{vote_average}</span>
      </div>
      <div className="movie-details">
        <strong>{overview}</strong>
      </div>
    </div>
  );
};

export default MovieItem;
