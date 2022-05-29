import React from 'react';

const useRef = () => {
  const video = React.useRef();
  const [comentarios, setComentarios] = React.useState(['teste', 'Teste 2']);
  const [input, setInput] = React.useState('');

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
    </div>
  );
};

export default useRef;
