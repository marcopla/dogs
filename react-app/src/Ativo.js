import React from 'react';

const Ativo = () => {
  const titulo = <p>Esse é o título.</p>;
  const random = Math.random();
  const ativo = false;

  function mostrarNome() {
    return 'Marco';
  }

  const carro = {
    marca: 'Ford',
    rodas: '4',
  };

  const estilo = {
    color: 'blue',
    fontSize: '20px',
    fontFamily: 'Helvetica',
  };

  return (
    <>
      {titulo}
      <p className={ativo ? 'ativo' : 'inativo'}>{(random * 1000) / 50}</p>
      <p>{mostrarNome()}</p>
      <p>{carro.marca}</p>
      <p>{carro.rodas}</p>
      <p style={estilo}>Este é um parágrafo estilizado</p>
    </>
  );
};

export default Ativo;
