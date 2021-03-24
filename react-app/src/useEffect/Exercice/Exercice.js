import React from 'react';
import Produto from './Produto.js';

const Exercice = () => {
  const [dados, setDados] = React.useState(null);

  async function handleClick(url) {
    const produto = await fetch(url).then((response) => response.json());
    console.log(produto);
  }
  return (
    <div>
      <button
        style={{ margin: '.5rem' }}
        onClick={handleClick(
          'https://ranekapi.origamid.dev/json/api/produto/notebook',
        )}
      >
        notebook
      </button>
      <button
        style={{ margin: '.5rem' }}
        onClick={handleClick(
          'https://ranekapi.origamid.dev/json/api/produto/smartphone',
        )}
      >
        smartphone
      </button>
      <button
        style={{ margin: '.5rem' }}
        onClick={handleClick(
          'https://ranekapi.origamid.dev/json/api/produto/tablet',
        )}
      >
        tablet
      </button>
      <button></button>
      {dados && <Produto dados={dados} />}
      <p>Preferência: </p>
    </div>
  );
};

export default Exercice;
