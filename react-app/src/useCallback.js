import React from 'react';

const useCallback = () => {
  const [contar, setContar] = React.useState(0);

  const func1 = () => {
    console.log('Teste');
  };

  const func2 = React.useCallback(() => {
    console.log('Teste');
  }, []);

  const set1 = new Set();
  const set2 = new Set();

  set1.add(func1);
  set2.add(func2);
  const handleClick = React.useCallback(() => {
    setContar((contar) => contar + 1);
  }, []);
  return <button onClick={handleClick}>{contar}</button>;
};

export default useCallback;
