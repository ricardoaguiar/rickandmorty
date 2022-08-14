import React from 'react';

const Character = (props) => {
  const { id, name, gender, species, status } = props;
  return (
    <div className="character" id={id}>
      <h1>{name}</h1>
      <p>{gender}</p>
      <p>{species}</p>
      <p>{status}</p>
    </div>
  );
};

export default Character;
