import React from 'react';
import { useRickAndMortyCharacters } from '../hooks/Api.hooks';
import Character from '../components/Character';
export const CharacterProfile = (props) => {
  const { characters } = useRickAndMortyCharacters();
  return (
    <div className="character">
      {characters.map((character) => {
        return (
          <Character
            id={character.id}
            key={character.id}
            img={character.image}
            name={character.name}
            gender={character.gender}
            species={character.species}
            status={character.status}
          />
        );
      })}
    </div>
  );
};
