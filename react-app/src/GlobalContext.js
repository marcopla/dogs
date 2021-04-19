import React from 'react';

GlobalContext = React.createContext();
const GlobalContext = () => {
  return <GlobalContext.Provider></GlobalContext.Provider>;
};

export default GlobalContext;
