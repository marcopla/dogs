import React from 'react';

const useEffect = () => {
  const [contar, setContar] = React.useState(0);
  React.useEffect(() => {
    console.log('Executou');
  });
  return <button onClick={() => setContar(contar + 1)}>{contar}</button>;
};

export default useEffect;
