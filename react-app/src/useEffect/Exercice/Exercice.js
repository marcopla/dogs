import React from 'react';

const Exercice = () => {
  async function handleClick(url) {
    const produto = await fetch(url).then((response) => response.json());
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
      <button
        onClick={handleClick(
          'https://ranekapi.origamid.dev/json/api/produto/smartphone',
        )}
      >
        smartphone
      </button>
      <button
        onClick={handleClick(
          'https://ranekapi.origamid.dev/json/api/produto/tablet',
        )}
      >
        tablet
      </button>
    </div>
  );
};

export default Exercice;
