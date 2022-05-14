import React from 'react';
import Produto from './Produto';
const Produto = () => {
  const [dados, setDados] = React.useState(null);
  const [carregando, setCarregando] = React.useState(null);

  async function handleClick(event) {
    setCarregando(true);
    const response = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText} `,
    );

    const json = await response.json();
    setDados(json);
    setCarregando(false);
  }

  return (
    <div>
      <button style={{ margin: '0.5rem' }} onClick={handleClick}>
        Notebook
      </button>
      <button style={{ margin: '0.5rem' }} onClick={handleClick}>
        Smartphone
      </button>
      <button style={{ margin: '0.5rem' }} onClick={handleClick}>
        Tablet
      </button>
      {carregando && <p>Carregando... </p>}
      {dados && <Produto dados={dados} />}
    </div>
  );
};

export default Produto;
