import React from 'react';

const UseEffect = () => {
  const [ativo, setAtivo] = React.useState(false);
  const video = React.useRef();

  return (
    <div>
      <button onClick={() => setAtivo(!ativo)}>Ativar</button>
    </div>
  );
};

export default UseEffect;
