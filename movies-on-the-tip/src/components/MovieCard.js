import React from 'react';

const MovieCard = ({ movie, onFavoriteToggle }) => {
  return (
    <div className="movie-card">
      <img src={movie.poster} alt={movie.title} />
      <h3>{movie.title}</h3>
      <button onClick={() => onFavoriteToggle(movie)}>
        {movie.isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
      </button>
    </div>
  );
};

export default MovieCard;
