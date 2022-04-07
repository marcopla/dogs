import React from 'react';

const Array1 = () => {
  const filmes = ['O Senhor dos Anéis', 'Coração Valente', 'Matrix'];

  return (
    <ul>
      {filmes.map((filme) => (
        <li key={filme}>{filme}</li>
      )}
    </ul>
  );
};

export default Array1;
