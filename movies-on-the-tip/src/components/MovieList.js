import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import { fetchMovies } from '../services/moviesAPI';

const MovieList = ({ type, onFavoriteToggle }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Fetch movies from API or JSON data
    const fetchData = async () => {
      const fetchedMovies = await fetchMovies(type);
      setMovies(fetchedMovies);
    };
    fetchData();
  }, [type]);

  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} onFavoriteToggle={onFavoriteToggle} />
      ))}
    </div>
  );
};

export default MovieList;
