import axios from 'axios';

export const fetchMovies = async (type) => {
  const response = await axios.get(`/data.json`);
  const movies = response.data;
  switch (type) {
    case 'coming_soon':
      return movies.filter((movie) => movie.type === 'coming soon');
    case 'in_theaters':
      return movies.filter((movie) => movie.type === 'in theaters');
    case 'top_rated_indian':
      return movies.filter((movie) => movie.type === 'top rated Indian');
    case 'top_rated':
      return movies.filter((movie) => movie.type === 'top rated');
    default:
      return movies;
  }
};
