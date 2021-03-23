import React from 'react';

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
      <p>Preferência: </p>
    </div>
  );
};

export default Exercice;
