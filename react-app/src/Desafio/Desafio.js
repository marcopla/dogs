import React from 'react';

const Desafio = () => {
  const produtos = [
    { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
    { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'] },
  ];

  const palavras = ['facebook', 'twitter'];

  return <section>{produtos.nome}</section>;
};

export default Desafio;
