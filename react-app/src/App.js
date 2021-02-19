import React from 'react';

const App = () => {
  const ativo = true;

  return (
    <>
      <a href="https://www.origamid.com" title="Site Origamid">
        Origamid
      </a>
      <label htmlFor="nome">Nome</label>
      <input type="text" id="nome" className={ativo ? 'ativo' : 'false'} />
    </>
  );
};

export default App;
