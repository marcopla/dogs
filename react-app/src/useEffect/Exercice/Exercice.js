import React from 'react';

const Exercice = () => {
  function handleClick(url) {
    const produto = fetch(url).then((response) => response.json());
    return produto;
  }
  return (
    <div>
      <p>Preferência: {Produto não selecionado'}</p>
      <button
        onClick={handleClick(
          'https://ranekapi.origamid.dev/json/api/produto/notebook',
        )}
      >
        notebook
      </button>
      <button>smartphone</button>
    </div>
  );
};

export default Exercice;
