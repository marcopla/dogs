import React from 'react';

const CloneExercice = () => {
  const luana = {
    cliente: 'Luana',
    idade: 27,
    compras: [
      { nome: 'Notebook', preco: 'R$ 2500' },
      { nome: 'Geladeira', preco: 'R$ 3000' },
      { nome: 'Smartphone', preco: 'R$ 1500' },
    ],
    ativa: true,
  };
  const mario = {
    cliente: 'Mario',
    idade: 31,
    compras: [
      { nome: 'Notebook', preco: 'R$ 2500' },
      { nome: 'Geladeira', preco: 'R$ 3000' },
      { nome: 'Smartphone', preco: 'R$ 1500' },
      { nome: 'Guitarra', preco: 'R$ 3500' },
    ],
    ativa: false,
  };

  const cliente = mario;
  const total = cliente.compras
    .map((compra) => Number(compra.preco.replace('R$ ', '')))
    .reduce((a, b) => a + b);
  return (
    <>
      <p>
        Nome: <span>{cliente.cliente}</span>
      </p>
      <p>
        Idade: <span>{cliente.idade}</span>
      </p>
      <p>
        Situação:{' '}
        <span style={{ color: cliente.ativa ? 'green' : 'red' }}>
          {cliente.ativa ? 'Ativa' : 'Inativa'}
        </span>
      </p>
      <p>{total}</p>
      {total > 10000 && <p>Você gastou muito</p>}
    </>
  );
};
export default CloneExercice;
