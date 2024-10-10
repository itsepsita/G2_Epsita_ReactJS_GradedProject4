import React, { useState } from 'react';
import MovieList from '../components/MovieList';

const Home = ({ onFavoriteToggle }) => {
  const [type, setType] = useState('coming_soon');

  return (
    <div>
      <h1>Movies on the Tip</h1>
      <div>
        <button onClick={() => setType('coming_soon')}>Coming Soon</button>
        <button onClick={() => setType('in_theaters')}>In Theaters</button>
        <button onClick={() => setType('top_rated_indian')}>Top Rated Indian</button>
        <button onClick={() => setType('top_rated')}>Top Rated</button>
      </div>
      <MovieList type={type} onFavoriteToggle={onFavoriteToggle} />
    </div>
  );
};

export default Home;
