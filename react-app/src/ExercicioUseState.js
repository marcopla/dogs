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
  return (
    <div>
      <button onClick={getTablet}></button>
    </div>
  );
};

export default ExercicioUseState;
