import React from 'react';

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

const Exercicio = () => {
  const dados = mario;

  const precos = dados.compras.map((compra) =>
    Number(compra.preco.replace('R$ ', '')),
  );

  const totalGasto = precos.reduce((acc, item) => acc + item);

  const gastouDemais = totalGasto > 10000 && 'Você gastou demais!';

  return (
    <div>
      <p>Nome: {dados.cliente}</p>
      <p>Idade: {dados.idade}</p>
      <p>
        Situação:{' '}
        <span style={{ color: dados.ativa ? 'green' : 'red' }}>
          {dados.ativa ? 'Ativa' : 'False'}
        </span>
      </p>
      <p>Total gasto: R$ {totalGasto}</p>
      {totalGasto > 10000 && <p>Você gastou demais!</p>}
    </div>
  );
};

export default Exercicio;
