import React from 'react';

const App = () => {
  let ativo = true;

  function handleClick() {
    ativo = !ativo;
    console.log(ativo);
  }
  return (
    <>
      <button disabled={!ativo} onClick={handleClick}>
        {ativo ? 'Ativo' : 'Inativo'}
      </button>
    </>
  );
};

export default App;
