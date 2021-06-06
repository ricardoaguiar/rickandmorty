import React from 'react';
import { useRickAndMortyCharacters } from '../hooks/Api.hooks';

export const Home = () => {
  const { characters } = useRickAndMortyCharacters();

  return (
    <div>
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
  );
};
