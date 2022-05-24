import React from 'react';

const useEffectProduto = () => {
  function handleScroll(event) {
    console.log(event);
  }

  window.addEventListener('scroll', handleScroll);

  return (
    <div style={{ height: '200vh' }}>
      <p>Meu produto</p>
    </div>
  );
};

export default useEffectProduto;
