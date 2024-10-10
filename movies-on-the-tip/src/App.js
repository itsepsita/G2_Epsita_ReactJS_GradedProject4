import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import FavoriteList from './components/FavoriteList';
import './styles/App.css';

function App() {
  const [favorites, setFavorites] = useState([]);

  const handleFavoriteToggle = (movie) => {
    setFavorites((prevFavorites) =>
      prevFavorites.find((fav) => fav.id === movie.id)
        ? prevFavorites.filter((fav) => fav.id !== movie.id)
        : [...prevFavorites, { ...movie, isFavorite: true }]
    );
  };

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home onFavoriteToggle={handleFavoriteToggle} />
          </Route>
          <Route path="/favorites">
            <FavoriteList favorites={favorites} onFavoriteToggle={handleFavoriteToggle} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
