import React from 'react';

const Produto = ({ nome }) => {
  const [dados, setDados] = React.useState(null);

  async function handleClick(event) {
    const response = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText} `,
    );
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
    </div>
  );
};

export default Produto;
