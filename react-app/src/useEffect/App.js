import React from 'react';
import Produto from './Produto';

const App = () => {
  const [ativo, setAtivo] = React.useState(false);
  const [contar, setContar] = React.useState(0);
  React.useEffect(() => {
    console.log('Ocorre ao renderizar e ao atualizar');
  }, []);
  return (
    <div>
      <button onClick={() => setContar(contar + 1)}>{contar}</button>
      {ativo && <Produto />}
      <button onClick={() => setAtivo(!ativo)}>Ativar</button>
    </div>
  );
};

export default App;
