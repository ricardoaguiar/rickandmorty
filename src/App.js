import React from 'react';

import { useRickAndMortyCharacters } from './Api.hooks';

const App = () => {
  //deconstruct state from custom hook
  const { characters } = useRickAndMortyCharacters();
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
