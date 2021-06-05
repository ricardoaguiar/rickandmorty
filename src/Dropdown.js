import { useRickAndMortyCharacters } from './Api.hooks';

function Dropdown() {
  const { characters } = useRickAndMortyCharacters();

  return (
    <div className="characterSelector">
      <select>
        <option>Select your Favorit Character</option>
        {characters.map((character) => (
          <option key={character.name}>{character.name}</option>
        ))}
      </select>
    </div>
  );
}

export default Dropdown;
