import React from 'react';

const Produto = ({ nome, propriedades }) => {
  return (
    <div
      style={{
        border: '1px solid black',
        marginBottom: '10px',
        padding: '10px',
      }}
    >
      <h2>{nome}</h2>
      <ul>
        {propriedades.map((propriedade) => (
          <li>{propriedade}</li>
        ))}
      </ul>
    </div>
  );
};

export default Produto;
