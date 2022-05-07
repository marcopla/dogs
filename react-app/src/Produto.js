import React from 'react';

const Produto = ({ nome }) => {
  const [dados, setDados] = React.useState(null);

  function handleClick(event) {
    console.log(event.target.innerText);
  }

  return (
    <div>
      <button onClick={handleClick}>Notebook</button>
    </div>
  );
};

export default Produto;
