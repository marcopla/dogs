import React from 'react';

const UseEffect = () => {
  const [contar, setContar] = React.useState(0);
  return <button onClick={() => setContar(contar + 1)}>{contar}</button>;
};

export default UseEffect;
