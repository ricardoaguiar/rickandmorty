import React, { useState, useEffect } from 'react';

const App = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then((res) => res.json())
      .then((data) => {
        setCharacters(
          data.results.map((result) => ({
            name: result.name,
            image: result.image,
          }))
        );
      });
  }, []);

  return (
    <div className="App">
      <header>
        <h1>Ricky and Morty React App</h1>
      </header>
      <div className="container">
        <ul>
          {characters.map((character) => (
            <li key={character.name}>
              <figure className="characterCard">
                <img src={character.image} alt={character.image} />
                <figcaption>{character.name}</figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
