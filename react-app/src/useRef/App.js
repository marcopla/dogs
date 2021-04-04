import React from 'react';

const App = () => {
  const [comentarios, setComentarios] = React.useState(['teste', 'teste2']);
  const [input, setInput] = React.useState(ß);
  const inputElement = React.useRef();

  function handleClick() {
    setComentarios([...comentarios, input]);
  }
  const video = React.useRef();
  console.log(video);
  React.useEffect(() => console.log(video.current));
  return (<div>
    <ul>
      {comentarios.map((comentario) => 
    ( <li key={comentario}>{comentario}</li> )}
    </ul></div>);
};

export default App;
