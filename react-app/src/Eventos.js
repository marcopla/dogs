import React from 'react';

const Eventos = () => {
  function handleClick(event) {
    alert('Comprou ' + event.target.innerText);
  }
  return (
    <>
      <button onClick={handleClick}>Camisa</button>
      <button onClick={handleClick}>Bermuda</button>
    </>
  );
};

export default Eventos;
