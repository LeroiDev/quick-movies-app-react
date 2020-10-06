import React, { useEffect, useState } from "react";
import axios from "axios";
import Movie from "./components/Movie";

// api here for now
// const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${process.env.MOVIE_APP_API_KEY}&page=1`;

// const API_IMAGES = "https://image.tmdb.org/t/p.w1280";

// const SEARCH_API = `https"//api.themoviedb.org/3/search/movie?&api_key=${process.env.MOVIE_APP_API_KEY}&query=`;

const App = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`
      https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${process.env.REACT_APP_MOVIE_APP_API_KEY}&page=1`);
      setMovies(response.data.results);
    };
    fetchData();
  }, []);

  return (
    <div>
      {movies.map((movie) => (
        <Movie key={movie.id} {...movie} />
      ))}
      ;
    </div>
  );
};

export default App;
