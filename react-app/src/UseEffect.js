import React from 'react';

const UseEffect = () => {
  const [contar, setContar] = React.useState(0);
  React.useEffect(() => console.log('Ocorre ao renderizar'), []);
  React.useEffect(() => (document.title = 'Total' + contar), [contar]);
  React.useEffect(() => {
    fetch('').then((response) =>
      response.json().then((json) => setDados(json)),
    );
  });
  return <button onClick={() => setContar(contar + 1)}>{contar}</button>;
};

export default UseEffect;
