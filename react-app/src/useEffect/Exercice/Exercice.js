import React from 'react';

const Exercice = () => {
  function handleClick(url) {
    const produto = fetch(url).then((response) => response.json());
    console.log(produto);
  }
  return (
    <div>
      <p>Preferência: Produto não selecionado</p>
      <button
        onClick={handleClick(
          'https://ranekapi.origamid.dev/json/api/produto/notebook',
        )}
      >
        notebook
      </button>
      <button>smartphone</button>
      <button>tablet</button>
    </div>
  );
};

export default Exercice;
