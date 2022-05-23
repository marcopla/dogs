import React from 'react';

const UseEffect = () => {
  const [ativo, setAtivo] = React.useState(false);

  return (
    <div>
      <button onClick={() => setAtivo(!ativo)}>Ativar</button>
    </div>
  );
};

export default UseEffect;
