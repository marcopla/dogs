import React from 'react';

const Exercice = () => {
  async function handleClick(url) {
    const produto = await fetch(url).then((response) => response.json());
    console.log(produto);
    return (
      <>
        <h1>produto.name</h1>
        <p>{produto.preco}</p>
      </>
    );
  }
  return (
    <div>
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
      <p>Preferência: {produto.nome}</p>
    </div>
  );
};

export default Exercice;
