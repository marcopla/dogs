import React from 'react';

const App = () => {
  const ativoHook = React.useState(false);
  const ativoValor = ativoHook[0];
  const atualizaValor = ativoHook[1];

  function handleClick() {
    atualizaValor(!ativoValor);
    // ativo = !ativo;
    // console.log(ativo);
  }
  return (
    <>
      <button onClick={handleClick}>{ativoValor ? 'Ativo' : 'Inativo'}</button>
    </>
  );
};

export default App;
