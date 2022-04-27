import React from 'react';

const ExercicioUseState = () => {
  const [tablet, setTablet] = React.useState(false);
  const [smartphone, setSmartphone] = React.useState(false);
  const [notebook, setNotebook] = React.useState(false);

  function getTablet() {
    fetch('https://ranekapi.origamid.dev/json/api/produto/tablet')
      .then((response) => response.json())
      .then((json) => console.log(json.nome));
  }

  function getSmartPhone() {
    fetch('https://ranekapi.origamid.dev/json/api/produto/smartphone')
      .then((response) => response.json())
      .then((json) => console.log(json.nome));
  }

  function getNotebook() {
    fetch('https://ranekapi.origamid.dev/json/api/produto/notebook')
      .then((response) => response.json())
      .then((json) => console.log(json.nome));
  }
  return (
    <div>
      <button onClick={getTablet}>Tablet</button>
      <button onClick={getSmartPhone}>SmartPhone</button>
      <button onClick={getNotebook}>getNotebook</button>
      <Produto />
    </div>
  );
};

export default ExercicioUseState;
