import { useState, useEffect } from 'react';

const useRickAndMortyCharacters = () => {
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
  return { characters };
};

export { useRickAndMortyCharacters };
