import React from 'react';

const Produto = ({ nome }) => {
  const [dados, setDados] = React.useState(null);

  function handleClick() {}

  return (
    <div>
      <button onClick={handleClick}>Notebook</button>
    </div>
  );
};

export default Produto;
