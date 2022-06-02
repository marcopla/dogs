import React from 'react';

const useRef = () => {
  const video = React.useRef();
  const [comentarios, setComentarios] = React.useState(['teste', 'Teste 2']);
  const [input, setInput] = React.useState('teste');

  React.useEffect(() => {
    console.log(video.current);
  }, []);
  return (
    <div>
      <ul>
        {comentarios.map((comentario) => (
          <li key={comentario}>{comentario}</li>
        ))}
      </ul>
      <input
        type="text"
        value={input}
        onChange={({ target }) => setInput(target.value)}
      />
    </div>
  );
};

export default useRef;
