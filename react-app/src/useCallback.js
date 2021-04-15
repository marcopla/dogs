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

  console.log('Set1: ', set1);

  console.log('Set2: ', set2);

  const handleClick = React.useCallback(() => {
    setContar((contar) => contar + 1);
  }, []);
  return (
    <div>
      {' '}
      <p> onClick={func1}>Produto 1</p>
      <p> onClick={func2}>Produto2</p>
      <button onClick={handleClick}>{contar}</button>{' '}
    </div>
  );
};

export default useCallback;
