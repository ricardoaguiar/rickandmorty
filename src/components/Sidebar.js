import React, { useState, useRef } from 'react';
import { useRickAndMortyCharacters } from '../hooks/Api.hooks';
import { Link } from '@reach/router';

export const Sidebar = () => {
  const [menu, setMenu] = useState(false);
  const [menuHeight, setMenuHeight] = useState('0px');
  const { characters } = useRickAndMortyCharacters();

  const content = useRef(null);

  const toggleMenu = () => {
    setMenu(menu === '' ? 'active' : '');
    setMenuHeight(
      menu === 'active' ? '0px' : `${content.current.scrollHeight}px`
    );
  };

  return (
    <div className="sidebar">
      <button className={`menu `} onClick={toggleMenu}>
        Select Your Favorite Character
      </button>
      <div
        ref={content}
        style={{ maxHeight: `${menuHeight}` }}
        className="menuContent"
      >
        {characters.map((character) => (
          <Link to={`/character/${character.id}`}>
            <div className="menuItem" key={character.name}>
              {character.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
