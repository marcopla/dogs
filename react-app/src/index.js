import React from 'react';
import ReactDOM from 'react-dom';

import App from './useState/App';
import Exercice from './useState/Exercice/Exercice';
import useCallback from './useCallback';


ReactDOM.render(
  <React.StrictMode>
    <useCallback />
  </React.StrictMode>,
  document.getElementById('root'),
);
