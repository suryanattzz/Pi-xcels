import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      const res = await fetch('http://localhost:3001/api/movies');
      const data = await res.json();
      setMovies(data);
    }
    fetchMovies();
  }, []);

  return (
    <div className="App">
      <h1>Movie List</h1>
      <div className="movie-grid">
        {movies.map((movie) => (
          <div className="movie-card" key={movie.id}>
            <h3>{movie.title}</h3>
            <p><em>{movie.tagline}</em></p>
            <p>Rating: {movie.vote_average}/10</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
