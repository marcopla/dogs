import React from 'react';
import Produto from './Produto';

const App = () => {
  const [ativo, setAtivo] = React.useState(false);
  const [contar, setContar] = React.useState(0);
  console.log('executou fora');
  React.useEffect(() => {
    document.title = 'Total ' + contar;
    console.log('Ocorre ao renderizar e ao atualizar');
  }, [contar]);
  return (
    <div>
      <button style={{ margin: '.5rem' }} onClick={() => setContar(contar + 1)}>
        {contar}
      </button>
      {ativo && <Produto />}
      <button style={{ margin: '.5rem' }} onClick={() => setAtivo(!ativo)}>
        Ativar
      </button>
      <input
        type="text"
        value={input}
        onChange={({ target }) => setAtivo(target.value)}
      />
    </div>
  );
};

export default App;
