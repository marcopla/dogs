import React from 'react';

const UseState = () => {
  const ativo = true;
  return <button disabled={!ativo}>{ativo ? 'Ativo' : 'Inativo'}</button>;
};

export default UseState;
