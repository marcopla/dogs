import React from 'react';

const produtos = [
  {
    id: 1,
    nome: 'Smartphone',
    preco: 'R$ 2000',
    cores: ['#29d8d5', '#252a34', '#fc3766'],
  },
  {
    id: 2,
    nome: 'Notebook',
    preco: 'R$ 3000',
    cores: ['#ffd045', '#d4394b', '#f37c59'],
  },
  {
    id: 3,
    nome: 'Tablet',
    preco: 'R$ 1500',
    cores: ['#365069', '#47c1c8', '#f95786'],
  },
];

const CloneJSXArrays = () => {
  return (
    <div>
      {produtos.map(({ id, nome, preco, cores }) => {
        return (
          <div key={id}>
            <h1>{nome}</h1>
            <p>
              Preço: <span>{preco}</span>
            </p>
            <ul>
              {cores.map((cor) => {
                return (
                  <li style={{ background: cor, color: 'white' }} key={cor}>
                    {cor}
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default CloneJSXArrays;
