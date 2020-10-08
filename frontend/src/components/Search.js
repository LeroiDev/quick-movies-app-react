import React, { useState } from "react";

const Search = (props) => {
  const [text, setText] = useState("");

  const onSearchHandler = async (e) => {
    e.preventDefault();
    // await axios.get(
    //   `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIE_APP_API_KEY}&language=en-US&page=1&include_adult=false&query=${text}`
    // );
    props.searchMovies(text);
    setText("");
  };
  const SearchOnChangeHandler = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <form onSubmit={onSearchHandler} className="search">
        <input
          onChange={SearchOnChangeHandler}
          name="searchText"
          value={text}
          type="text"
          placeholder="Search a movie..."
        />
      </form>
      {props.showClear ? (
        <div className="container">
          <button onClick={props.clearSearch} className="btn">
            CLEAR SEARCH
          </button>
        </div>
      ) : (
        <h3>Make sure to enter your movie name correctly</h3>
      )}
    </>
  );
};

export default Search;
