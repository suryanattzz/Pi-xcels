import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function MovieList() {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('/api/movies')
      .then(res => res.json())
      .then(setMovies);
  }, []);

  return (
    <div className="movie-grid">
      {movies.map(movie => (
        <div
          key={movie.id}
          className="movie-card"
          onClick={() => navigate(`/movie/${movie.id}`)}
        >
          <h3>{movie.title}</h3>
          <p><em>{movie.tagline}</em></p>
          <p>Rating: {movie.vote_average}/10</p>
        </div>
      ))}
    </div>
  );
}

export default MovieList;
