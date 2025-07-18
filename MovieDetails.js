import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function MovieDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`/api/movies/${id}`)
      .then(res => res.json())
      .then(setMovie);
  }, [id]);

  if (!movie) return <p>Loading...</p>;

  const localizedDate = new Date(movie.release_date).toLocaleDateString();

  return (
    <div style={{ padding: '20px' }}>
      <button onClick={() => navigate('/')}>← Back to List</button>
      <h1>{movie.title}</h1>
      <p><strong>Tagline:</strong> {movie.tagline}</p>
      <p><strong>Release Date:</strong> {localizedDate}</p>
      <p><strong>Runtime:</strong> {movie.runtime} minutes</p>
      <p><strong>Overview:</strong> {movie.overview}</p>
      <p><strong>Vote Average:</strong> {movie.vote_average}/10</p>
      {/* You can show all other fields here if needed */}
    </div>
  );
}

export default MovieDetail;
