import React from 'react';
const App = () => {
  const [contar, setContar] = React.useState(0);
  const valor = React.useMemo(() => {
    const localStorageItem = window.localStorage.getItem('produto');
    console.log('Ocorreu nemo');
    return localStorageItem;
  }, []);

  return (
    <div>
      <button onClick={() => setContar(contar + 1)}>{contar}</button>
    </div>
  );
};

export default App;
