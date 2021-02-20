import React from 'react';

const Exercice = () => {
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

  const cliente = luana;

  // const totalCompra = (cliente) => {
  //   let totalCompra = 0;
  //   cliente.compras.forEach((compra) => {
  //     totalCompra += +compra.preco.replace('R$ ', '');
  //   });
  //   return totalCompra;
  // };
  const totalCompra = cliente.compras
    .map((compra) => Number(compra.preco.replace('R$ ', '')))
    .reduce((acc, item) => acc + item);

  return (
    <>
      <p>Nome: {cliente.cliente}</p>
      <p>Idade: {cliente.idade}</p>
      <p>
        Situação:{' '}
        <span style={cliente.ativa ? { color: 'green' } : { color: 'red' }}>
          {cliente.ativa ? 'Ativa' : 'Desativada'}
        </span>
      </p>
      <p>
        Total Gasto: <span>{totalCompra}</span>
      </p>
      {totalCompra >= 10000 && <p>Gasto maior que 10k</p>}
    </>
  );
};

export default Exercice;
