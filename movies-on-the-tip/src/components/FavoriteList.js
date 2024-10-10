import React from 'react';
import MovieCard from './MovieCard';

const FavoriteList = ({ favorites, onFavoriteToggle }) => {
  return (
    <div className="favorite-list">
      {favorites.length > 0 ? (
        favorites.map((movie) => (
          <MovieCard key={movie.id} movie={movie} onFavoriteToggle={onFavoriteToggle} />
        ))
      ) : (
        <p>Your favorite list is empty.</p>
      )}
    </div>
  );
};

export default FavoriteList;
