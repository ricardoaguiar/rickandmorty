import React from 'react';

const Character = ({ characters }) => {
  // const { id, name, gender, species, status } = characters;
  console.log('props', characters);
  return (
    <div className="character">
      character goes here
      {/* <div id={id}>
        <h1>{name}</h1>
        <p>{gender}</p>
        <p>{species}</p>
        <p>{status}</p> */}
      {/* </div> */}
    </div>
  );
};

export default Character;
