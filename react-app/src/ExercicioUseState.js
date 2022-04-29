import React from 'react';
import Produto from './Desafio/Produto';

const ExercicioUseState = () => {
  const [tablet, setTablet] = React.useState(false);
  const [smartphone, setSmartphone] = React.useState(false);
  const [notebook, setNotebook] = React.useState(false);

  let produto = { nome: 'Não definido' };

  function getTablet() {
    fetch('https://ranekapi.origamid.dev/json/api/produto/tablet')
      .then((response) => response.json())
      .then((json) => (produto.nome = json.nome));
  }

  function getSmartPhone() {
    fetch('https://ranekapi.origamid.dev/json/api/produto/smartphone')
      .then((response) => response.json())
      .then((json) => (produto.nome = json.nome));
  }

  function getNotebook() {
    fetch('https://ranekapi.origamid.dev/json/api/produto/notebook')
      .then((response) => response.json())
      .then((json) => (produto.nome = json.nome));
  }
  return (
    <div>
      {produto.nome}
      <Produto />
      <button onClick={getTablet}>Tablet</button>
      <button onClick={getSmartPhone}>SmartPhone</button>
      <button onClick={getNotebook}>getNotebook</button>
    </div>
  );
};

export default ExercicioUseState;
