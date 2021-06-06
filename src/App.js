import React from 'react';
import Sidebar from './components/Sidebar';
import CharacterProfile from './pages/CharacterProfile';
import { Home } from './pages/Home';
import { Router, Link } from '@reach/router';

const App = () => {
  return (
    <div>
      <header>
        <Link to="/">
          <h1>Ricky and Morty App</h1>
        </Link>
      </header>
      <div className="container">
        <Sidebar />
        <Home path="/" />
        <Router>
          <CharacterProfile path="/character/:id" />
        </Router>
      </div>
    </div>
  );
};

export default App;
