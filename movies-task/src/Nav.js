import React, { useContext } from "react";
import { MovieContext } from "./MovieContext";

const Nav = () => {
  const [movies, setMovies] = useContext(MovieContext);
  return (
    <div className="nav">
      <h3>Karin yahud</h3>
      <p>List of movies: {movies.length} </p>
    </div>
  );
};

export default Nav;
