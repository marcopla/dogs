import React from 'react';

const UseState = () => {
  const [ativo, setAtivo] = React.useState(false);
  const [dados, setDados] = React.useState({ nome: 'Marco', idade: 20 });

  function handleClick() {
    setAtivo(!ativo);
  }
  return <button onClick={handleClick}>{ativo ? 'Ativo' : 'Inativo'}</button>;
};

export default UseState;
