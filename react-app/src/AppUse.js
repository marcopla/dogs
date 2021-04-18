import React from 'react';
import Produto from './Produto';
import UserContext from './useContext';
import UserContext from './UserContext';

const AppUse = () => {
  return (
    <UserContext.Provider>
      <Produto />
    </UserContext.Provider>
  );
};

export default AppUse;
