import React, { useState, useContext } from "react";
import { MovieContext } from "./MovieContext";

const AddMovie = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [movies, setMovies] = useContext(MovieContext);

  const updateName = (e) => {
    setName(e.target.value);
  };
  const updatePrice = (e) => {
    setPrice(e.target.value);
  };
  const addMovie = (e) => {
    e.preventDefault();
    setMovies((prevMovies) => [...prevMovies, { name: name, price: price }]);
  };
  return (
    <form onSubmit={addMovie}>
      <h1>Add a movies to the list:</h1>
      <div className="input1">
        <p>Name:</p>
        <input type="text" name="name" value={name} onChange={updateName} />
      </div>

      <div className="input2">
        <p>Price:</p>
        <input type="text" name="price" value={price} onChange={updatePrice} />
      </div>

      <button>Submit</button>
    </form>
  );
};

export default AddMovie;
