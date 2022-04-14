import React from 'react';
import Header from './Header';
import Titulo from './Titulo';

const Produtos = () => {
  const produtos = [
    { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
    { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'] },
  ];
  return (
    <>
      <Header />
      <Titulo titulo="Produtos" />
      <div>
        {produtos.map((produto) => {
          <>
          <p>produto.nome</p>
          <ul>
            <li>produto.propriedades.forEach((propriedade) => propriedade )</li>
          </ul>
        })</>}
      </div>
    </>
  );
};

export default Produtos;
