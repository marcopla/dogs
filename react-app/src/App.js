import React from 'react';
const App = () => {
  const [contar, setContar] = React.useState(0);
  const t1 = performance.now();

  console.log(performance.now() - t1);

  const valor = React.useMemo(() => {
    const localStorageItem = window.localStorage.getItem('produto');
    console.log('Ocorreu nemo');
    return localStorageItem;
  }, []);

  return (
    <div>
      <button
        style={{ marginRight: '1rem' }}
        onClick={() => setContar(contar + 1)}
      >
        {contar}
      </button>
    </div>
  );
};

export default App;
