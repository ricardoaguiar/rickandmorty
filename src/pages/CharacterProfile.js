import React from 'react';
import { useRickAndMortyCharacters } from '../hooks/Api.hooks';
import Character from '../components/Character';
// import { useParams } from 'react-router-dom';

const CharacterProfile = (props) => {
  const { characters } = useRickAndMortyCharacters();
  // const { id } = useParams();
  // const findCharacter = characters.find((character => character.id === id) => { console.log(findCharacter)});

  return (
    <div>
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

export default CharacterProfile;
