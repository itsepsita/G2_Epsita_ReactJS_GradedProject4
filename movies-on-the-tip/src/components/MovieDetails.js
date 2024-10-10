import React from 'react';

const MovieDetails = ({ movie, onFavoriteToggle }) => {
  if (!movie) return <p>Select a movie to see the details.</p>;

  return (
    <div className="movie-details">
      <h2>{movie.title}</h2>
      <img src={movie.poster} alt={movie.title} />
      <p>{movie.description}</p>
      <button onClick={() => onFavoriteToggle(movie)}>
        {movie.isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
      </button>
    </div>
  );
};

export default MovieDetails;
