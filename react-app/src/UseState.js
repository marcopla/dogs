import React from 'react';

const UseState = () => {
  const [ativo, setAtivo] = React.useState(false);
  const [dados, setDados] = React.useState({ nome: 'Marco', idade: 20 });

  function handleClick() {
    setAtivo(!ativo);
    setDados({ ...dados, faculdade: 'Possui Faculdade' });
  }
  return (
    <>
      {dados.nome}
      {dados.idade}
      {dados.faculdade}
      <button onClick={handleClick}>{ativo ? 'Ativo' : 'Inativo'}</button>;
    </>
  );
};

export default UseState;
