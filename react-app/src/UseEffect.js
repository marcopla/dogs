import React from 'react';

const UseEffect = () => {
  const [contar, setContar] = React.useState(0);
  const [dados, setDados] = React.useState(null);
  React.useEffect(() => console.log('Ocorre ao renderizar'), []);
  React.useEffect(() => (document.title = 'Total' + contar), [contar]);
  React.useEffect(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto/notebook')
      .then((response) => response.json())
      .then((json) => setDados(json));
  });
  return <button onClick={() => setContar(contar + 1)}>{contar}</button>;
};

export default UseEffect;
