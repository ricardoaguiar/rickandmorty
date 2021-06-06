import React from 'react';

const Character = (props) => {
  const { id, name, gender, species, status } = props;
  console.log('character props', props);
  return (
    <div className="character">
      <div id={id}>
        <h1>{name}</h1>
        <p>{gender}</p>
        <p>{species}</p>
        <p>{status}</p>
      </div>
    </div>
  );
};

export default Character;
