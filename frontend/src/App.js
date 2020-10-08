import React, { useEffect, useState } from "react";
import axios from "axios";
import Movies from "./components/Movies";
import Search from "./components/Search";

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

  const searchMovies = async (text) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIE_APP_API_KEY}&language=en-US&page=1&include_adult=false&query=${text}`
    );
    setMovies(response.data.results);
  };

  const clearSearch = () => {
    setMovies([]);
  };

  return (
    <>
      <Search
        searchMovies={searchMovies}
        clearSearch={clearSearch}
        showClear={movies.length > 0 ? true : false}
      />
      <div className="container">
        <Movies movies={movies} />
      </div>
    </>
  );
};

export default App;
