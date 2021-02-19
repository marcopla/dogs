import React from 'react';

const Exercice = (cliente) => {
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
  function somaCompras(cliente) {
    let totalCompra = 0;
    cliente.compras.forEach((compra) => {
      totalCompra += +compra.preco.replace('R$ ', '');
    });
    return totalCompra;
  }

  function verificaMais10k(cliente) {
    if (somaCompras(cliente) >= 1000) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <>
      <p>
        Nome: <span>{luana.cliente}</span>
      </p>
      <p>
        Idade: <span>{luana.idade}</span>
      </p>
      <p>
        Situação:{' '}
        <span style={luana.ativa ? { color: 'green' } : { color: 'red' }}>
          {luana.ativa ? 'Ativa' : 'Desativada'}
        </span>
      </p>
      <p>
        Total Gasto: <span>{somaCompras(luana)}</span>
      </p>
      <p>
        Nome: <span>{mario.cliente}</span>
      </p>
      <p>
        Idade: <span>{mario.idade}</span>
      </p>
      <p>
        Situação:{' '}
        <span style={mario.ativa ? { color: 'green' } : { color: 'red' }}>
          {mario.ativa ? 'Ativa' : 'Desativada'}
        </span>
      </p>
      <p>
        Total Gasto: <span>{somaCompras(mario)}</span>
      </p>
      <p>{verificaMais10k(mario) ? 'Gasto maior que 10k' : ''}</p>
    </>
  );
};

export default Exercice;
