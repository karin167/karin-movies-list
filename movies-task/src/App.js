import React from "react";
import "./App.css";
import Nav from "./Nav";
import Movie from "./Movie";
import MovieList from "./MovieList";
import AddMovie from "./AddMovie";
import { MovieProvider } from "./MovieContext";

function App() {
  return (
    <MovieProvider>
      <div className="App">
        <Nav />
        <Movie />
        <AddMovie />
        <MovieList />
      </div>
    </MovieProvider>
  );
}

export default App;
