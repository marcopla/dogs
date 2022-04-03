import React from 'react';

const Ativo = () => {
  const random = Math.random();
  const ativo = false;
  return <p className={ativo ? 'ativo' : 'inativo'}>{(random * 1000) / 50}</p>;
};

export default Ativo;
