import { useState, useEffect } from 'react';

const useRickAndMortyCharacters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then((res) => res.json())
      .then((data) => {
        setCharacters(
          data.results.map((result) => ({
            id: result.id,
            name: result.name,
            image: result.image,
            gender: result.gender,
            species: result.species,
            status: result.status,
          }))
        );
      });
  }, []);
  return { characters };
};

export { useRickAndMortyCharacters };
