import { useState, useEffect } from 'react';

const useRickAndMortyCharacters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then((res) => res.json())
      .then((data) => {
        // console.log('data==>', { data });
        setCharacters(
          data.results.map((result) => ({
            id: result.id,
            name: result.name,
            image: result.image,
            episode: result.episode,
            location: result.location,
            gender: result.gender,
            species: result.species,
            status: result.status,
          }))
        );
      });
  }, []);
  console.log('characters=>', characters);
  return { characters };
};

export { useRickAndMortyCharacters };
