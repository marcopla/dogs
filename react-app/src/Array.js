import React from 'react';

const Array1 = () => {
  const filmes = ['O Senhor dos Anéis', 'Coração Valente', 'Matrix'];

  return (
    <ul>
      {filmes.map((filme) => (
        <li key={filme}>{filme}</li>
      ))}
    </ul>
  );
};
const Array2 = () => {
  const livros = [
    { nome: 'A Game of Thrones', ano: 1996 },
    { nome: 'A Clash of Kings', ano: 1998 },
    { nome: 'A Storm of Swords', ano: 2000 },
  ];

  return (
    <ul>
      {livros.map((livro) => (
        <li key={livro.nome}>{livro.nome}</li>
      ))}
    </ul>
  );
};

export default Array2;
