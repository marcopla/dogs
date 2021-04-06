import React from 'react';
import Produto from './Produto';

const App = () => {
  const [ativo, setAtivo] = React.useState(false);
  const [contar, setContar] = React.useState(0);
  const [input, setInput] = React.useState('');
  const [comentarios, setComentarios] = React.useState([]);
  console.log('executou fora');
  React.useEffect(() => {
    document.title = 'Total ' + contar;
    console.log('Ocorre ao renderizar e ao atualizar');
  }, [contar]);

  function handleClick() {
    setComentarios([...comentarios, input]);
  }
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
      <input
        type="text"
        value={input}
        onChange={({ target }) => setInput(target.value)}
      />
      <button onClick={handleClick}>Enviar</button>
    </div>
  );
};

export default App;
