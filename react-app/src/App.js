import React from 'react';
const App = () => {
  const [contar, setContar] = React.useState(0);
  const valor = React.useMemo(() => {
    const localStorageItem = window.localStorage.getItem('produto');
  });
  return localStorageItem;}, []);
  return (
    <div>
      <button onClick= {() => setContar(contar + 1)}>{valor}</button>
    </div>
  );
};

export default App;
